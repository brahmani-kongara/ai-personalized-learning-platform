import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface CosmicOrbProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export const CosmicOrb: React.FC<CosmicOrbProps> = ({
  className = '',
  interactive = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovered: false });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer setup
    const scene = new THREE.Scene();
    
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    // Clear previous canvas if any
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Root Group for Mouse Rotation
    const orbGroup = new THREE.Group();
    scene.add(orbGroup);

    // -------------------------------------------------------------
    // 1. GALAXY CORE PARTICLES (Spiral Nebulae)
    // -------------------------------------------------------------
    const particleCount = 4500;
    const galaxyGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorPalette = [
      new THREE.Color('#3a86ff'), // Electric Blue
      new THREE.Color('#8338ec'), // Deep Violet
      new THREE.Color('#ff007f'), // Glowing Magenta
      new THREE.Color('#00f5d4'), // Cyan
      new THREE.Color('#ffbe0b'), // Golden Star
    ];

    const arms = 3;
    const radius = 1.35;

    for (let i = 0; i < particleCount; i++) {
      // Spiral Math
      const r = Math.pow(Math.random(), 2.2) * radius;
      const spinAngle = r * 5;
      const branchAngle = ((i % arms) * 2 * Math.PI) / arms;

      const randomX = (Math.random() - 0.5) * 0.3 * (1 - r / radius);
      const randomY = (Math.random() - 0.5) * 0.3 * (1 - r / radius);
      const randomZ = (Math.random() - 0.5) * 0.3 * (1 - r / radius);

      const x = Math.cos(branchAngle + spinAngle) * r + randomX;
      const y = Math.sin(branchAngle + spinAngle) * r + randomY;
      const z = (Math.random() - 0.5) * 0.6 * (1 - r / radius) + randomZ;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color interpolation based on radius and randomness
      const mixedColor = colorPalette[Math.floor(Math.random() * colorPalette.length)].clone();
      if (r < 0.3) {
        mixedColor.lerp(new THREE.Color('#ffffff'), 0.7); // Bright white core
      }

      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      scales[i] = Math.random() * 0.04 + 0.015;
    }

    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Particle Texture creation dynamically
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255,255,255,1)');
      gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
      gradient.addColorStop(0.6, 'rgba(255,255,255,0.2)');
      gradient.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const galaxyMaterial = new THREE.PointsMaterial({
      size: 0.045,
      map: particleTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const galaxyPoints = new THREE.Points(galaxyGeometry, galaxyMaterial);
    orbGroup.add(galaxyPoints);

    // -------------------------------------------------------------
    // 2. INNER GLOW CORE SPHERE
    // -------------------------------------------------------------
    const coreGeo = new THREE.SphereGeometry(0.35, 32, 32);
    const coreMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#e0aaff'),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    orbGroup.add(coreMesh);

    // -------------------------------------------------------------
    // 3. CHROMATIC LENS FLARE / ACCENT RINGS
    // -------------------------------------------------------------
    const ringGeo = new THREE.TorusGeometry(1.48, 0.012, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#00f0ff'),
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    orbGroup.add(ringMesh);

    const ringGeo2 = new THREE.TorusGeometry(1.52, 0.008, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ff007f'),
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const ringMesh2 = new THREE.Mesh(ringGeo2, ringMat2);
    ringMesh2.rotation.x = -Math.PI / 4;
    ringMesh2.rotation.y = -Math.PI / 5;
    orbGroup.add(ringMesh2);

    // -------------------------------------------------------------
    // 4. OUTER GLASS ORB SPHERE (Reflective Glass Shell)
    // -------------------------------------------------------------
    const glassGeo = new THREE.SphereGeometry(1.45, 64, 64);
    const glassMat = new THREE.MeshPhysicalMaterial({
      roughness: 0.08,
      metalness: 0.1,
      transmission: 0.92,
      ior: 1.45,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      transparent: true,
      opacity: 0.45,
      color: new THREE.Color('#7b2cbf'),
      emissive: new THREE.Color('#3a0ca3'),
      emissiveIntensity: 0.15,
      depthWrite: false,
    });
    const glassOrb = new THREE.Mesh(glassGeo, glassMat);
    orbGroup.add(glassOrb);

    // -------------------------------------------------------------
    // 5. LIGHTING
    // -------------------------------------------------------------
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00f0ff, 3, 10);
    pointLight1.position.set(3, 3, 4);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff007f, 3, 10);
    pointLight2.position.set(-3, -3, -2);
    scene.add(pointLight2);

    const topLight = new THREE.DirectionalLight(0xffffff, 2);
    topLight.position.set(0, 5, 2);
    scene.add(topLight);

    // -------------------------------------------------------------
    // 6. INTERACTION & ANIMATION LOOP
    // -------------------------------------------------------------
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseRef.current.targetX = x * 0.8;
      mouseRef.current.targetY = y * 0.8;
    };

    const handleMouseEnter = () => {
      mouseRef.current.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovered = false;
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };

    if (interactive) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      // Group rotation (continuous base + mouse tilt)
      const speedMultiplier = mouseRef.current.isHovered ? 1.8 : 1.0;
      galaxyPoints.rotation.z = elapsedTime * 0.15 * speedMultiplier;
      galaxyPoints.rotation.y = elapsedTime * 0.08 * speedMultiplier;

      ringMesh.rotation.z = elapsedTime * 0.25;
      ringMesh2.rotation.z = -elapsedTime * 0.3;

      // Subtle pulse on core sphere
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.08;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Subtle float up and down
      orbGroup.position.y = Math.sin(elapsedTime * 1.2) * 0.1;

      // Interactive Tilt
      orbGroup.rotation.y = mouseRef.current.x * 0.6;
      orbGroup.rotation.x = -mouseRef.current.y * 0.6;

      renderer.render(scene, camera);
    };

    animate();

    // -------------------------------------------------------------
    // 7. RESIZE OBSERVER
    // -------------------------------------------------------------
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || 500;
      const newH = container.clientHeight || 500;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (interactive) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
      resizeObserver.disconnect();
      renderer.dispose();
      galaxyGeometry.dispose();
      galaxyMaterial.dispose();
      glassGeo.dispose();
      glassMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [interactive]);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background Chromatic Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-pink-500/20 rounded-full blur-3xl opacity-60 animate-pulse pointer-events-none" />
      
      {/* Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full min-h-[350px] sm:min-h-[450px] lg:min-h-[500px] cursor-grab active:cursor-grabbing relative z-10"
      />
    </div>
  );
};
