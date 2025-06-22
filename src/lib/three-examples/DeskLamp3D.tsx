'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

interface DeskLamp3DProps {
  className?: string;
  onToggleLight?: (on: boolean) => void; // 添加回调
}

const DeskLamp3D: React.FC<DeskLamp3DProps> = ({ className = '', onToggleLight }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    lamp: THREE.Group;
    light: THREE.SpotLight;
    animationId: number;
    pointLight: THREE.PointLight;
  } | null>(null);

  const [lightOn, setLightOn] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    const isMobile = window.innerWidth <= 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const lampGroup = new THREE.Group();
    lampGroup.scale.set(1.2, 1.2, 1.2);

    const whiteMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 100,
      emissive: 0x333333,
      emissiveIntensity: 0.2
    });

    const base = new THREE.Mesh(new THREE.CylinderGeometry(0.8, 1.2, 0.3, 16), whiteMaterial);
    base.position.y = 0.15;
    base.castShadow = true;
    base.receiveShadow = true;
    lampGroup.add(base);

    const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3, 8), whiteMaterial);
    pole.position.y = 1.8;
    pole.castShadow = true;
    lampGroup.add(pole);

    const joint = new THREE.Mesh(new THREE.SphereGeometry(0.15, 16, 16), whiteMaterial);
    joint.position.y = 3.3;
    joint.castShadow = true;
    lampGroup.add(joint);

    const arm = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 2, 8), whiteMaterial);
    arm.position.set(0.9, 4.25, 0); // 末端中心
    arm.rotation.z = -Math.PI / 4; // -45°
    arm.castShadow = true;
    lampGroup.add(arm);

    // 灯罩斜向下连接在臂末端
    const shade = new THREE.Mesh(
      new THREE.ConeGeometry(0.8, 1.2, 32, 1, true),
      new THREE.MeshPhongMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        shininess: 60,
        emissive: 0x444444,
        emissiveIntensity: 0.3
      })
    );
    shade.position.set(2.0, 5.0, 0); // 调整到臂末端位置
    shade.rotation.z = Math.PI / 4; // 旋转灯罩方向朝下
    shade.castShadow = true;
    lampGroup.add(shade);

    const bulb = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.MeshPhongMaterial({
        color: 0xffd700,
        emissive: 0xffaa00,
        emissiveIntensity: 1.2,
        transparent: true,
        opacity: 0.95
      })
    );
    bulb.position.set(2.0, 4.6, 0);
    bulb.visible = false; // 灯罩遮挡，不显示
    lampGroup.add(bulb);

    const spotLight = new THREE.SpotLight(0xffffff, 5.5, 30, Math.PI / 2.5, 0.35, 1.5);
    spotLight.position.set(2.0, 5.0, 0);
    spotLight.target.position.set(0, 2, 0);
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.width = 2048;
    spotLight.shadow.mapSize.height = 2048;
    spotLight.shadow.camera.near = 0.5;
    spotLight.shadow.camera.far = 40;
    lampGroup.add(spotLight);
    lampGroup.add(spotLight.target);

    const pointLight = new THREE.PointLight(0xffe066, 2.2, 15);
    pointLight.position.set(2.0, 4.6, 0);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0x404040, isMobile ? 0.6 : 0.8);
    scene.add(ambientLight);

    const globalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    globalLight.position.set(5, 10, 5);
    globalLight.castShadow = true;
    globalLight.shadow.mapSize.width = 1024;
    globalLight.shadow.mapSize.height = 1024;
    scene.add(globalLight);

    scene.add(lampGroup);

    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(20, 20),
      new THREE.MeshPhongMaterial({ color: 0x333333, transparent: true, opacity: 0.3 })
    );
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.1;
    plane.receiveShadow = true;
    scene.add(plane);

    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const time = Date.now() * 0.001;
      lampGroup.rotation.y = Math.sin(time * 0.5) * 0.1;

      // 柔和光强变化
      if (lightOn) {
        spotLight.intensity = 5.5 + Math.sin(time * 1.5) * 0.3;
        pointLight.intensity = 2.2 + Math.sin(time * 1.2) * 0.2;
      } else {
        spotLight.intensity = 0;
        pointLight.intensity = 0;
      }

      renderer.render(scene, camera);
      if (sceneRef.current) sceneRef.current.animationId = animationId;
    };

    sceneRef.current = {
      scene,
      camera,
      renderer,
      lamp: lampGroup,
      light: spotLight,
      pointLight,
      animationId: 0
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current || !sceneRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      sceneRef.current.camera.aspect = width / height;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach((m) => m.dispose());
            } else object.material.dispose();
          }
        });
        sceneRef.current.renderer.dispose();
        if (mountRef.current && sceneRef.current.renderer.domElement) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, [lightOn]);

  const toggleLight = () => {
    setLightOn((prev) => !prev);
  };

  // 使用useEffect来通知父组件状态变化，避免在渲染期间调用setState
  useEffect(() => {
    onToggleLight?.(lightOn);
  }, [lightOn, onToggleLight]);

  return (
    <div
      ref={mountRef}
      className={`w-full h-full cursor-pointer ${className}`}
      style={{ minHeight: '400px' }}
      onClick={toggleLight}
      title="点击开关灯"
    />
  );
};

export default DeskLamp3D;
