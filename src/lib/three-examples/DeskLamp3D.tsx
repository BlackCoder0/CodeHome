'use client';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

interface DeskLamp3DProps {
  className?: string;
}

const DeskLamp3D: React.FC<DeskLamp3DProps> = ({ className = '' }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    lamp: THREE.Group;
    light: THREE.SpotLight;
    animationId: number;
  } | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // 检测是否为移动端
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // 创建场景
    const scene = new THREE.Scene();
    
    // 创建相机
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    // 创建渲染器
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0); // 透明背景
    mountRef.current.appendChild(renderer.domElement);

    // 创建台灯组
    const lampGroup = new THREE.Group();
    lampGroup.scale.set(1.25, 1.25, 1.25); // 整体放大台灯
    
    // 台灯底座
    const baseGeometry = new THREE.CylinderGeometry(0.8, 1.2, 0.3, 16);
    const baseMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 100,
      emissive: 0x333333,
      emissiveIntensity: 0.2
    });
    const base = new THREE.Mesh(baseGeometry, baseMaterial);
    base.position.y = 0.15;
    base.castShadow = true;
    base.receiveShadow = true;
    lampGroup.add(base);

    // 台灯支柱
    const poleGeometry = new THREE.CylinderGeometry(0.1, 0.1, 3, 8);
    const poleMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 80,
      emissive: 0x333333,
      emissiveIntensity: 0.2
    });
    const pole = new THREE.Mesh(poleGeometry, poleMaterial);
    pole.position.y = 1.8;
    pole.castShadow = true;
    lampGroup.add(pole);

    // 台灯关节
    const jointGeometry = new THREE.SphereGeometry(0.15, 16, 16);
    const jointMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 100,
      emissive: 0x333333,
      emissiveIntensity: 0.2
    });
    const joint = new THREE.Mesh(jointGeometry, jointMaterial);
    joint.position.y = 3.3;
    joint.castShadow = true;
    lampGroup.add(joint);

    // 台灯臂
    const armGeometry = new THREE.CylinderGeometry(0.08, 0.08, 2, 8);
    const armMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      shininess: 80,
      emissive: 0x333333,
      emissiveIntensity: 0.2
    });
    const arm = new THREE.Mesh(armGeometry, armMaterial);
    arm.position.set(1, 3.8, 0);
    arm.rotation.z = -Math.PI / 6;
    arm.castShadow = true;
    lampGroup.add(arm);

    // 台灯灯罩
    const shadeGeometry = new THREE.ConeGeometry(0.8, 1.2, 16, 1, true);
    const shadeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffffff,
      side: THREE.DoubleSide,
      shininess: 60,
      emissive: 0x444444,
      emissiveIntensity: 0.3
    });
    const shade = new THREE.Mesh(shadeGeometry, shadeMaterial);
    shade.position.set(1.8, 4.2, 0);
    shade.rotation.z = Math.PI / 6;
    shade.castShadow = true;
    lampGroup.add(shade);

    // 灯泡
    const bulbGeometry = new THREE.SphereGeometry(0.2, 16, 16);
    const bulbMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xffd700,
      emissive: 0xffaa00,
      emissiveIntensity: 1.2,
      transparent: true,
      opacity: 0.95
    });
    const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
    bulb.position.set(1.8, 3.8, 0);
    lampGroup.add(bulb);

    // 聚光灯光源 - 移动端使用更小的强度和范围
    const spotLightIntensity = isMobile ? 2.5 : 5.5;
    const spotLightDistance = isMobile ? 15 : 35;
    const spotLightAngle = isMobile ? Math.PI / 3.5 : Math.PI / 2.1;
    const spotLight = new THREE.SpotLight(0xffffff, spotLightIntensity, spotLightDistance, spotLightAngle, 0.35, 1.5);
    spotLight.position.set(1.8, 4.2, 0);
    // 灯光焦点对准About中央
    spotLight.target.position.set(0, 2, 0);
    spotLight.castShadow = true;
    const shadowMapSize = isMobile ? 1024 : 2048;
    spotLight.shadow.mapSize.width = shadowMapSize;
    spotLight.shadow.mapSize.height = shadowMapSize;
    spotLight.shadow.camera.near = 0.5;
    spotLight.shadow.camera.far = spotLightDistance;
    spotLight.shadow.camera.fov = 75;
    lampGroup.add(spotLight);
    lampGroup.add(spotLight.target);

    // 环境光
    const ambientLightIntensity = isMobile ? 0.6 : 0.8;
    const ambientLight = new THREE.AmbientLight(0x404040, ambientLightIntensity);
    scene.add(ambientLight);

    // 添加额外的点光源增强灯泡发光效果 - 移动端使用更小的强度和范围
    const pointLightIntensity = isMobile ? 1.5 : 2.2;
    const pointLightDistance = isMobile ? 12 : 18;
    const pointLight = new THREE.PointLight(0xffe066, pointLightIntensity, pointLightDistance);
    pointLight.position.set(1.8, 3.8, 0);
    scene.add(pointLight);

    // 添加全局照明光源 - 移动端使用更小的强度
    const globalLightIntensity = isMobile ? 0.8 : 1.1;
    const globalLight = new THREE.DirectionalLight(0xffffff, globalLightIntensity);
    globalLight.position.set(5, 10, 5);
    globalLight.castShadow = true;
    const globalShadowMapSize = isMobile ? 512 : 1024;
    globalLight.shadow.mapSize.width = globalShadowMapSize;
    globalLight.shadow.mapSize.height = globalShadowMapSize;
    scene.add(globalLight);

    // 添加台灯到场景
    scene.add(lampGroup);

    // 创建地面来接收阴影
    const planeGeometry = new THREE.PlaneGeometry(20, 20);
    const planeMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x333333,
      transparent: true,
      opacity: 0.3
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -0.1;
    plane.receiveShadow = true;
    scene.add(plane);

    // 动画循环
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      
      // 轻微摆动动画
      const time = Date.now() * 0.001;
      lampGroup.rotation.y = Math.sin(time * 0.5) * 0.1;
      
      // 光强度变化（更柔和）
      spotLight.intensity = 5.5 + Math.sin(time * 1.5) * 0.5;
      pointLight.intensity = 2.2 + Math.sin(time * 1.2) * 0.3;
      globalLight.intensity = 1.1 + Math.sin(time * 0.7) * 0.2;
      
      renderer.render(scene, camera);
      
      if (sceneRef.current) {
        sceneRef.current.animationId = animationId;
      }
    };

    // 保存场景引用
    sceneRef.current = {
      scene,
      camera,
      renderer,
      lamp: lampGroup,
      light: spotLight,
      animationId: 0
    };

    animate();

    // 处理窗口大小变化
    const handleResize = () => {
      if (!mountRef.current || !sceneRef.current) return;
      
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      
      sceneRef.current.camera.aspect = width / height;
      sceneRef.current.camera.updateProjectionMatrix();
      sceneRef.current.renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 清理函数
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId);
        
        // 清理几何体和材质
        sceneRef.current.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        });
        
        sceneRef.current.renderer.dispose();
        
        if (mountRef.current && sceneRef.current.renderer.domElement) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className={`w-full h-full ${className}`}
      style={{ minHeight: '400px' }}
    />
  );
};

export default DeskLamp3D;