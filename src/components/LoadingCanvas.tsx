'use client';

import { useRef, useEffect, useState } from 'react';

interface LoadingCanvasProps {
  onFinish: () => void;
}

const LoadingCanvas: React.FC<LoadingCanvasProps> = ({ onFinish }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let animationId: number;
    let img: HTMLImageElement | null = null;
    let edgeLines: [number, number][][] = [];
    let drawnIndex = 0;

    const initializeCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        processImage();
      };
      img.src = '/assets/bg_big2.jpg'; // 保证图片比例为1920x1080
    };

    const processImage = () => {
      if (!img || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d')!;
      const { width, height } = canvas;

      // 用 cover 策略绘制：铺满整个 canvas，等比例填充并裁剪多余部分
      const imgAspect = img.width / img.height;
      const canvasAspect = width / height;
      let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;

      if (imgAspect > canvasAspect) {
        // 图片太宽
        sWidth = img.height * canvasAspect;
        sx = (img.width - sWidth) / 2;
      } else {
        // 图片太高
        sHeight = img.width / canvasAspect;
        sy = (img.height - sHeight) / 2;
      }

      ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, width, height);
      const imageData = ctx.getImageData(0, 0, width, height);
      const data = imageData.data;

      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, width, height);

      // 边缘提取为线段：基于灰度差
      const threshold = 30;
      const visited = new Set<string>();
      const lines: [number, number][][] = [];

      const getGray = (i: number) => data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;

      for (let y = 1; y < height - 1; y++) {
        for (let x = 1; x < width - 1; x++) {
          const i = (y * width + x) * 4;
          const g = getGray(i);
          const dx = getGray(i + 4) - g;
          const dy = getGray(i + width * 4) - g;
          const mag = Math.sqrt(dx * dx + dy * dy);
          if (mag > threshold) {
            const key = `${x},${y}`;
            if (!visited.has(key)) {
              const line: [number, number][] = [];
              traceLine(x, y, visited, line, width, height, data, threshold);
              if (line.length >= 5) lines.push(line);
            }
          }
        }
      }

      edgeLines = lines.sort(() => Math.random() - 0.5); // 打乱线条绘制顺序
      startSketchAnimation();
    };

    const traceLine = (
      x: number,
      y: number,
      visited: Set<string>,
      line: [number, number][],
      width: number,
      height: number,
      data: Uint8ClampedArray,
      threshold: number
    ) => {
      const stack: [number, number][] = [[x, y]];

      const getGray = (i: number) => data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;

      while (stack.length) {
        const [cx, cy] = stack.pop()!;
        const key = `${cx},${cy}`;
        if (visited.has(key)) continue;

        visited.add(key);
        line.push([cx, cy]);

        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const nx = cx + dx;
            const ny = cy + dy;
            if (nx < 1 || nx >= width - 1 || ny < 1 || ny >= height - 1) continue;
            const ni = (ny * width + nx) * 4;
            const g = getGray(ni);
            const dX = getGray(ni + 4) - g;
            const dY = getGray(ni + width * 4) - g;
            const mag = Math.sqrt(dX * dX + dY * dY);
            if (mag > threshold && !visited.has(`${nx},${ny}`)) {
              stack.push([nx, ny]);
            }
          }
        }
      }
    };

    const startSketchAnimation = () => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext('2d')!;
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 0.4;
      ctx.lineCap = 'round';

      const linesPerFrame = 3;
      const drawNext = () => {
        for (let i = 0; i < linesPerFrame && drawnIndex < edgeLines.length; i++) {
          const line = edgeLines[drawnIndex];
          ctx.beginPath();
          for (let j = 0; j < line.length; j++) {
            const [x, y] = line[j];
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
          drawnIndex++;
        }

        if (drawnIndex >= edgeLines.length) {
          setTimeout(() => startColorAnimation(), 500);
        } else {
          animationId = requestAnimationFrame(drawNext);
        }
      };

      drawNext();
    };

    const startColorAnimation = () => {
      if (!img || !canvasRef.current) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      let opacity = 0;
      const fadeIn = () => {
        opacity += 0.08;

        ctx.globalAlpha = 1;
        ctx.fillStyle = '#808080';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 重画线稿
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 0.4;
        for (let i = 0; i < drawnIndex; i++) {
          const line = edgeLines[i];
          ctx.beginPath();
          for (let j = 0; j < line.length; j++) {
            const [x, y] = line[j];
            if (j === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.stroke();
        }

        ctx.globalAlpha = opacity;
        // 重新用 cover 策略画图像
        const { width, height } = canvas;
        if (!img) return;
        const imgAspect = img.width / img.height;
        const canvasAspect = width / height;
        let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;

        if (imgAspect > canvasAspect) {
          sWidth = img.height * canvasAspect;
          sx = (img.width - sWidth) / 2;
        } else {
          sHeight = img.width / canvasAspect;
          sy = (img.height - sHeight) / 2;
        }

        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, width, height);
        ctx.globalAlpha = 1;

        if (opacity >= 1) {
          setFadeOut(true);
          setTimeout(() => {
            setFadeOut(false);
            onFinish();
          }, 400);
        } else {
          animationId = requestAnimationFrame(fadeIn);
        }
      };

      fadeIn();
    };

    initializeCanvas();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [onFinish]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-50 transition-opacity duration-1000 ease-out ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        display: 'block', // 始终 block，使用 opacity 控制显示
        pointerEvents: 'none', // 避免阻塞用户交互
        transition: 'opacity 1s ease-in-out',
      }}
    />

  );
};

export default LoadingCanvas;
