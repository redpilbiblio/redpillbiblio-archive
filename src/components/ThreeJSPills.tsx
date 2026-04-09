import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';

interface ThreeJSPillsProps {
  onRedClick: () => void;
  onBlueClick: () => void;
  redHovered: boolean;
  blueHovered: boolean;
  onRedHover: (hovered: boolean) => void;
  onBlueHover: (hovered: boolean) => void;
  prefersReducedMotion: boolean;
}

const RED_COLOR = 0xff1744;
const BLUE_COLOR = 0x2979ff;
const PILL_RADIUS = 0.45;
const PILL_LENGTH = 1.8;
const PILL_SPACING = 4.6;
const HOVER_SCALE = 1.3;
const HOVER_Z_OFFSET = 1.5;
const LERP_SPEED = 0.08;

export function ThreeJSPills({
  onRedClick,
  onBlueClick,
  redHovered,
  blueHovered,
  onRedHover,
  onBlueHover,
  prefersReducedMotion,
}: ThreeJSPillsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const redPillRef = useRef<THREE.Mesh | null>(null);
  const bluePillRef = useRef<THREE.Mesh | null>(null);
  const frameIdRef = useRef<number>(0);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const redHoveredRef = useRef(redHovered);
  const blueHoveredRef = useRef(blueHovered);
  const reducedMotionRef = useRef(prefersReducedMotion);
  const redScaleRef = useRef(1);
  const blueScaleRef = useRef(1);
  const redZRef = useRef(0);
  const blueZRef = useRef(0);

  redHoveredRef.current = redHovered;
  blueHoveredRef.current = blueHovered;
  reducedMotionRef.current = prefersReducedMotion;

  const createPillGeometry = useCallback(() => {
    const capsule = new THREE.CapsuleGeometry(PILL_RADIUS, PILL_LENGTH, 32, 64);
    return capsule;
  }, []);

  const createPillMaterial = useCallback((color: number) => {
    return new THREE.MeshPhysicalMaterial({
      color,
      transmission: 0.3,
      roughness: 0.15,
      metalness: 0.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      ior: 1.5,
      thickness: 2.0,
      transparent: true,
      opacity: 0.92,
      envMapIntensity: 1.0,
      side: THREE.DoubleSide,
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(40, container.clientWidth / container.clientHeight, 0.1, 100);
    const cameraAngle = (22 * Math.PI) / 180;
    const cameraDistance = 7;
    camera.position.set(0, Math.sin(cameraAngle) * cameraDistance, Math.cos(cameraAngle) * cameraDistance);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    const directional = new THREE.DirectionalLight(0xffffff, 1.2);
    directional.position.set(-3, 5, 4);
    scene.add(directional);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(3, 2, -2);
    scene.add(fillLight);

    const envMap = createEnvMap(renderer);

    const redGeometry = createPillGeometry();
    const redMaterial = createPillMaterial(RED_COLOR);
    redMaterial.envMap = envMap;
    const redPill = new THREE.Mesh(redGeometry, redMaterial);
    redPill.rotation.z = Math.PI / 2;
    redPill.position.x = PILL_SPACING / 2;
    redPill.userData = { type: 'red' };
    scene.add(redPill);
    redPillRef.current = redPill;

    const blueGeometry = createPillGeometry();
    const blueMaterial = createPillMaterial(BLUE_COLOR);
    blueMaterial.envMap = envMap;
    const bluePill = new THREE.Mesh(blueGeometry, blueMaterial);
    bluePill.rotation.z = Math.PI / 2;
    bluePill.position.x = -PILL_SPACING / 2;
    bluePill.userData = { type: 'blue' };
    scene.add(bluePill);
    bluePillRef.current = bluePill;

    const redDefaultZ = redPill.position.z;
    const blueDefaultZ = bluePill.position.z;

    if (reducedMotionRef.current) {
      redPill.rotation.y = 0.3;
      bluePill.rotation.y = 0.3;
    }

    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      if (!reducedMotionRef.current) {
        const redSpeed = redHoveredRef.current ? 0.015 : 0.005;
        const blueSpeed = blueHoveredRef.current ? 0.015 : 0.005;
        redPill.rotation.y += redSpeed;
        bluePill.rotation.y += blueSpeed;

        const redTargetScale = redHoveredRef.current ? HOVER_SCALE : 1;
        const redTargetZ = redHoveredRef.current ? redDefaultZ + HOVER_Z_OFFSET : redDefaultZ;
        redScaleRef.current += (redTargetScale - redScaleRef.current) * LERP_SPEED;
        redZRef.current += (redTargetZ - redZRef.current) * LERP_SPEED;
        redPill.scale.setScalar(redScaleRef.current);
        redPill.position.z = redZRef.current;

        const blueTargetScale = blueHoveredRef.current ? HOVER_SCALE : 1;
        const blueTargetZ = blueHoveredRef.current ? blueDefaultZ + HOVER_Z_OFFSET : blueDefaultZ;
        blueScaleRef.current += (blueTargetScale - blueScaleRef.current) * LERP_SPEED;
        blueZRef.current += (blueTargetZ - blueZRef.current) * LERP_SPEED;
        bluePill.scale.setScalar(blueScaleRef.current);
        bluePill.position.z = blueZRef.current;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameIdRef.current);
      renderer.dispose();
      redGeometry.dispose();
      blueGeometry.dispose();
      (redPill.material as THREE.MeshPhysicalMaterial).dispose();
      (bluePill.material as THREE.MeshPhysicalMaterial).dispose();
      envMap.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [createPillGeometry, createPillMaterial]);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !cameraRef.current || !sceneRef.current) return;

    const rect = container.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(sceneRef.current.children, false);

    let overRed = false;
    let overBlue = false;

    for (const intersect of intersects) {
      if (intersect.object.userData?.type === 'red') overRed = true;
      if (intersect.object.userData?.type === 'blue') overBlue = true;
    }

    onRedHover(overRed);
    onBlueHover(overBlue);

    if (container) {
      container.style.cursor = overRed || overBlue ? 'pointer' : 'default';
    }
  }, [onRedHover, onBlueHover]);

  const handlePointerLeave = useCallback(() => {
    onRedHover(false);
    onBlueHover(false);
    if (containerRef.current) {
      containerRef.current.style.cursor = 'default';
    }
  }, [onRedHover, onBlueHover]);

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    if (!container || !cameraRef.current || !sceneRef.current) return;

    const rect = container.getBoundingClientRect();
    mouseRef.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseRef.current.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseRef.current, cameraRef.current);
    const intersects = raycasterRef.current.intersectObjects(sceneRef.current.children, false);

    for (const intersect of intersects) {
      if (intersect.object.userData?.type === 'red') {
        onRedClick();
        return;
      }
      if (intersect.object.userData?.type === 'blue') {
        onBlueClick();
        return;
      }
    }
  }, [onRedClick, onBlueClick]);

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      role="group"
      aria-label="Choose a pill"
      style={{ width: '480px', height: '220px', position: 'relative', pointerEvents: 'auto' }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-label="Enter the evidence dashboard"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onRedClick(); }}
        style={{ position: 'absolute', right: 0, top: 0, width: '50%', height: '100%', opacity: 0, cursor: 'pointer' }}
      />
      <div
        role="button"
        tabIndex={0}
        aria-label="Visit the UN Global Compact website"
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onBlueClick(); }}
        style={{ position: 'absolute', left: 0, top: 0, width: '50%', height: '100%', opacity: 0, cursor: 'pointer' }}
      />
    </div>
  );
}

function createEnvMap(renderer: THREE.WebGLRenderer): THREE.CubeTexture {
  const size = 64;
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(size);
  const cubeCamera = new THREE.CubeCamera(0.1, 10, cubeRenderTarget);

  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x111111);

  const lightSphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.5, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xffffff })
  );
  lightSphere.position.set(-2, 3, 2);
  envScene.add(lightSphere);

  const dimSphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.3, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0x444444 })
  );
  dimSphere.position.set(2, 1, -2);
  envScene.add(dimSphere);

  cubeCamera.update(renderer, envScene);

  lightSphere.geometry.dispose();
  (lightSphere.material as THREE.MeshBasicMaterial).dispose();
  dimSphere.geometry.dispose();
  (dimSphere.material as THREE.MeshBasicMaterial).dispose();

  return cubeRenderTarget.texture;
}
