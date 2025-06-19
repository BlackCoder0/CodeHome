import * as THREE from 'three';
import { OrbitControls } from 'three-stdlib';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPixelatedPass } from 'three/examples/jsm/postprocessing/RenderPixelatedPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

export function webglPostprocessing(container: HTMLDivElement) {
  const width = container.clientWidth;
  const height = container.clientHeight;
  const aspectRatio = width / height;

  // Camera setup - using orthographic camera with 45° angled view
  const camera = new THREE.OrthographicCamera(-aspectRatio, aspectRatio, 1, -1, 0.1, 10);
  // Set camera position for 45° diagonal view from above
  camera.position.set(1, 1, 2);
  // Look at the center of the scene
  camera.lookAt(0, 0, 0);

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = null;

  const clock = new THREE.Clock();

  // Renderer setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.shadowMap.enabled = true;
  renderer.setClearColor(0x000000, 0);
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  // Post-processing setup
  const composer = new EffectComposer(renderer);
  const params = { pixelSize: 6, normalEdgeStrength: 0.3, depthEdgeStrength: 0.4, pixelAlignedPanning: true };
  const renderPixelatedPass = new RenderPixelatedPass(params.pixelSize, scene, camera);
  composer.addPass(renderPixelatedPass);

  const outputPass = new OutputPass();
  composer.addPass(outputPass);

  // Controls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.maxZoom = 2;

  // Textures
  const loader = new THREE.TextureLoader();
  const texChecker = pixelTexture(loader.load('https://threejs.org/examples/textures/checker.png'));
  const texChecker2 = pixelTexture(loader.load('https://threejs.org/examples/textures/checker.png'));
  texChecker.repeat.set(3, 3);
  texChecker2.repeat.set(1.5, 1.5);

  // Materials and meshes
  const boxMaterial = new THREE.MeshPhongMaterial({ map: texChecker2 });

  function addBox(boxSideLength: number, x: number, z: number, rotation: number) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(boxSideLength, boxSideLength, boxSideLength),
      boxMaterial
    );
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    mesh.rotation.y = rotation;
    mesh.position.y = boxSideLength / 2;
    mesh.position.set(x, boxSideLength / 2 + 0.0001, z);
    scene.add(mesh);
    return mesh;
  }

  addBox(0.4, 0, 0, Math.PI / 4);
  addBox(0.5, -0.5, -0.5, Math.PI / 4);

  const planeSideLength = 2;
  const planeMesh = new THREE.Mesh(
    new THREE.PlaneGeometry(planeSideLength, planeSideLength),
    new THREE.MeshPhongMaterial({ map: texChecker })
  );
  planeMesh.receiveShadow = true;
  planeMesh.rotation.x = -Math.PI / 2;
  scene.add(planeMesh);

  // Crystal mesh
  const radius = 0.2;
  const geometry = new THREE.IcosahedronGeometry(radius);
  const crystalMesh = new THREE.Mesh(
    geometry,
    new THREE.MeshPhongMaterial({
      color: 0x68b7e9,
      emissive: 0x4f7e8b,
      shininess: 10,
      specular: 0xffffff
    })
  );
  crystalMesh.receiveShadow = true;
  crystalMesh.castShadow = true;
  scene.add(crystalMesh);

  // Lights
  scene.add(new THREE.AmbientLight(0x757f8e, 3));

  const directionalLight = new THREE.DirectionalLight(0xfffecd, 1.5);
  directionalLight.position.set(100, 100, 100);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.set(2048, 2048);
  scene.add(directionalLight);

  const spotLight = new THREE.SpotLight(0xffc100, 10, 10, Math.PI / 16, 0.02, 2);
  spotLight.position.set(2, 2, 0);
  const target = spotLight.target;
  scene.add(target);
  target.position.set(0, 0, 0);
  spotLight.castShadow = true;
  scene.add(spotLight);

  // Helper functions
  function pixelTexture(texture: THREE.Texture) {
    texture.minFilter = THREE.NearestFilter;
    texture.magFilter = THREE.NearestFilter;
    texture.generateMipmaps = false;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    return texture;
  }

  function easeInOutCubic(x: number) {
    return x ** 2 * 3 - x ** 3 * 2;
  }

  function linearStep(x: number, edge0: number, edge1: number) {
    const w = edge1 - edge0;
    const m = 1 / w;
    const y0 = -m * edge0;
    return THREE.MathUtils.clamp(y0 + m * x, 0, 1);
  }

  function stopGoEased(x: number, downtime: number, period: number) {
    const cycle = (x / period) | 0;
    const tween = x - cycle * period;
    const linStep = easeInOutCubic(linearStep(tween, downtime, period));
    return cycle + linStep;
  }

  function pixelAlignFrustum(
    camera: THREE.OrthographicCamera,
    aspectRatio: number,
    pixelsPerScreenWidth: number,
    pixelsPerScreenHeight: number
  ) {
    // Get Pixel Grid Units
    const worldScreenWidth = (camera.right - camera.left) / camera.zoom;
    const worldScreenHeight = (camera.top - camera.bottom) / camera.zoom;
    const pixelWidth = worldScreenWidth / pixelsPerScreenWidth;
    const pixelHeight = worldScreenHeight / pixelsPerScreenHeight;

    // Project the current camera position along its local rotation bases
    const camPos = new THREE.Vector3();
    camera.getWorldPosition(camPos);
    const camRot = new THREE.Quaternion();
    camera.getWorldQuaternion(camRot);
    const camRight = new THREE.Vector3(1.0, 0.0, 0.0).applyQuaternion(camRot);
    const camUp = new THREE.Vector3(0.0, 1.0, 0.0).applyQuaternion(camRot);
    const camPosRight = camPos.dot(camRight);
    const camPosUp = camPos.dot(camUp);

    // Find how far along its position is along these bases in pixel units
    const camPosRightPx = camPosRight / pixelWidth;
    const camPosUpPx = camPosUp / pixelHeight;

    // Find the fractional pixel units and convert to world units
    const fractX = camPosRightPx - Math.round(camPosRightPx);
    const fractY = camPosUpPx - Math.round(camPosUpPx);

    // Add fractional world units to the left/right top/bottom to align with the pixel grid
    camera.left = -aspectRatio - fractX * pixelWidth;
    camera.right = aspectRatio - fractX * pixelWidth;
    camera.top = 1.0 - fractY * pixelHeight;
    camera.bottom = -1.0 - fractY * pixelHeight;
    camera.updateProjectionMatrix();
  }

  // Resize handler
  const handleResize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    const aspectRatio = width / height;
    
    camera.left = -aspectRatio;
    camera.right = aspectRatio;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
    composer.setSize(width, height);
  };
  window.addEventListener('resize', handleResize);

  // Animation loop
  let animationId: number;
  const animate = () => {
    animationId = requestAnimationFrame(animate);
    
    const t = clock.getElapsedTime();
    
    (crystalMesh.material as THREE.MeshPhongMaterial).emissiveIntensity = Math.sin(t * 3) * 0.5 + 0.5;
    crystalMesh.position.y = 0.7 + Math.sin(t * 2) * 0.05;
    crystalMesh.rotation.y = stopGoEased(t, 2, 4) * 2 * Math.PI;
    
    const rendererSize = renderer.getSize(new THREE.Vector2());
    const aspectRatio = rendererSize.x / rendererSize.y;
    
    if (params.pixelAlignedPanning) {
      pixelAlignFrustum(
        camera,
        aspectRatio,
        Math.floor(rendererSize.x / params.pixelSize),
        Math.floor(rendererSize.y / params.pixelSize)
      );
    } else if (camera.left !== -aspectRatio || camera.top !== 1.0) {
      // Reset the Camera Frustum if it has been modified
      camera.left = -aspectRatio;
      camera.right = aspectRatio;
      camera.top = 1.0;
      camera.bottom = -1.0;
      camera.updateProjectionMatrix();
    }
    
    composer.render();
  };
  animate();

  // Cleanup function
  return () => {
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener('resize', handleResize);
    if (container.contains(renderer.domElement)) {
      container.removeChild(renderer.domElement);
    }
    renderer.dispose();
  };
}
