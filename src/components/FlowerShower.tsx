import { useEffect, useRef, useImperativeHandle, forwardRef, useCallback } from "react";

export interface FlowerShowerHandle {
  trigger: (originX?: number, originY?: number) => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  z: number; // 3D depth layer (0.75 - 1.25)
  width: number;
  height: number;
  img: HTMLImageElement;
  roll: number; // in-plane 2D rotation angle
  rollSpeed: number;
  pitch: number; // 3D pitch angle (flips around X axis)
  pitchSpeed: number;
  yaw: number; // 3D yaw angle (flips around Y axis)
  yawSpeed: number;
  swayPhase: number;
  swaySpeed: number;
  swayAmp: number;
  opacity: number;
}

interface QueuedFlower {
  releaseTime: number;
  itemIdx: number;
  targetX: number;
  zDepth: number;
}

const FLOWER_SOURCES = [
  // Realistic whole flowers (Genda/Marigold, White jasmine/mogra)
  { src: "images/flowers/flower-genda.png", isFlower: true, aspect: 1.0 },
  { src: "images/flowers/flower-white.png", isFlower: true, aspect: 1.0 },
  // Realistic petals (Orange genda, White mogra, Rose)
  { src: "images/flowers/petal-genda.png", isFlower: false, aspect: 120 / 74 },
  { src: "images/flowers/petal-white.png", isFlower: false, aspect: 120 / 73 },
  { src: "images/flowers/petal-rose.png", isFlower: false, aspect: 120 / 100 },
];

const FlowerShower = forwardRef<FlowerShowerHandle, { className?: string }>(
  ({ className = "" }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const queueRef = useRef<QueuedFlower[]>([]);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const animIdRef = useRef<number | null>(null);

    // Preload all flower assets
    useEffect(() => {
      const loaded: HTMLImageElement[] = [];
      FLOWER_SOURCES.forEach((item) => {
        const img = new Image();
        img.src = item.src;
        loaded.push(img);
      });
      imagesRef.current = loaded;
    }, []);

    // Resize canvas to match display size with DPR support
    const syncCanvasSize = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.parentElement?.getBoundingClientRect() || canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetW = Math.max(rect.width, 320);
      const targetH = Math.max(rect.height, 400);

      if (canvas.width !== targetW * dpr || canvas.height !== targetH * dpr) {
        canvas.width = targetW * dpr;
        canvas.height = targetH * dpr;
        canvas.style.width = `${targetW}px`;
        canvas.style.height = `${targetH}px`;
      }
    }, []);

    useEffect(() => {
      syncCanvasSize();
      window.addEventListener("resize", syncCanvasSize);
      return () => window.removeEventListener("resize", syncCanvasSize);
    }, [syncCanvasSize]);

    // Spawn a single 3D flower / petal particle into active particles
    const spawnSingleFlower = useCallback(
      (itemIdx: number, targetX: number, zDepth: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = canvas.width / dpr;

        const imgs = imagesRef.current.filter((img) => img.complete && img.naturalWidth > 0);
        const validImgs = imgs.length > 0 ? imgs : imagesRef.current;
        const item = FLOWER_SOURCES[itemIdx % FLOWER_SOURCES.length];
        const img = validImgs[itemIdx % validImgs.length] || validImgs[0];

        // 3D scale based on depth layer zDepth (0.8 to 1.25)
        const baseWidth = item.isFlower
          ? (34 + Math.random() * 14) * zDepth
          : (20 + Math.random() * 12) * zDepth;
        const baseHeight = baseWidth * (item.aspect || 1);

        // Clamp spawn position inside canvas
        const spawnX = Math.max(20, Math.min(w - 20, targetX));

        // Slow, gentle, realistic fall speed (vy ~ 0.75 - 1.4 px/frame)
        const slowSpeed = (0.75 + Math.random() * 0.65) * zDepth;

        const particle: Particle = {
          x: spawnX,
          y: -baseHeight - 10 - Math.random() * 20,
          vx: (Math.random() - 0.5) * 0.4,
          vy: slowSpeed,
          z: zDepth,
          width: baseWidth,
          height: baseHeight,
          img,
          roll: Math.random() * Math.PI * 2,
          rollSpeed: (Math.random() - 0.5) * 0.016, // slow, graceful roll
          pitch: Math.random() * Math.PI * 2,
          pitchSpeed: 0.014 + Math.random() * 0.02, // 3D tumble flip rate
          yaw: Math.random() * Math.PI * 2,
          yawSpeed: 0.012 + Math.random() * 0.018, // 3D yaw rate
          swayPhase: Math.random() * Math.PI * 2,
          swaySpeed: 0.018 + Math.random() * 0.014, // smooth breeze sway
          swayAmp: 1.1 + Math.random() * 1.3,
          opacity: 0, // fades in smoothly as it enters
        };

        particlesRef.current.push(particle);
      },
      []
    );

    // Animation & 3D Render Loop
    const renderLoop = useCallback(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const h = canvas.height / dpr;
      const now = performance.now();

      // 1. Release queued flowers one by one as their releaseTime arrives
      const queue = queueRef.current;
      while (queue.length > 0 && queue[0].releaseTime <= now) {
        const next = queue.shift();
        if (next) {
          spawnSingleFlower(next.itemIdx, next.targetX, next.zDepth);
        }
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      const particles = particlesRef.current;
      const remaining: Particle[] = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Smooth physics: gentle slow fall + sinusoidal horizontal breeze
        p.swayPhase += p.swaySpeed;
        p.x += p.vx + Math.sin(p.swayPhase) * p.swayAmp;
        p.y += p.vy;

        // 3D angles advance smoothly
        p.roll += p.rollSpeed;
        p.pitch += p.pitchSpeed;
        p.yaw += p.yawSpeed;

        // Smooth fade-in at top and fade-out near bottom
        if (p.y < 50) {
          p.opacity = Math.min(1, Math.max(0, (p.y + p.height) / (50 + p.height)));
        } else if (p.y > h - 70) {
          p.opacity = Math.max(0, (h - p.y) / 70);
        } else {
          p.opacity = 1;
        }

        // Draw 3D realistic flower with dynamic depth shadow
        if (p.img.complete && p.img.naturalWidth > 0 && p.opacity > 0.01) {
          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.roll);

          // 3D perspective foreshortening via cosine of yaw and pitch
          const scaleX = Math.cos(p.yaw);
          const scaleY = Math.cos(p.pitch);
          ctx.scale(scaleX, scaleY);

          // Realistic 3D Soft Drop Shadow on parchment background
          ctx.shadowColor = "rgba(75, 45, 15, 0.22)";
          ctx.shadowBlur = (10 + 6 * (1 - Math.abs(scaleX * scaleY))) * p.z;
          ctx.shadowOffsetX = (3 * scaleX + 2) * p.z;
          ctx.shadowOffsetY = (6 * scaleY + 5) * p.z;

          ctx.globalAlpha = p.opacity;

          ctx.drawImage(
            p.img,
            -p.width / 2,
            -p.height / 2,
            p.width,
            p.height
          );

          // Subtle 3D ambient shading when flower/petal is tilted edge-on to the camera
          const facing = Math.abs(scaleX * scaleY);
          if (facing < 0.55) {
            ctx.fillStyle = `rgba(35, 18, 5, ${(0.55 - facing) * 0.3})`;
            ctx.globalCompositeOperation = "source-atop";
            ctx.fillRect(-p.width / 2, -p.height / 2, p.width, p.height);
          }

          ctx.restore();
        }

        // Keep particle until it has fully drifted off bottom
        if (p.y < h + 80) {
          remaining.push(p);
        }
      }

      ctx.restore();
      particlesRef.current = remaining;

      // Keep rendering as long as there are active particles or flowers waiting in queue
      if (remaining.length > 0 || queueRef.current.length > 0) {
        animIdRef.current = requestAnimationFrame(renderLoop);
      } else {
        animIdRef.current = null;
      }
    }, [spawnSingleFlower]);

    // Trigger flower drop: queues flowers to release ONE BY ONE smoothly and slowly
    const trigger = useCallback(
      (originX?: number) => {
        syncCanvasSize();
        const canvas = canvasRef.current;
        if (!canvas) return;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const w = canvas.width / dpr;
        const now = performance.now();

        // Release 28 flowers and petals ONE BY ONE in a rhythmic, serene succession
        // Total duration ~4 seconds, releasing a new flower every 110 - 160ms
        const totalCount = 28;
        const centerRefX = originX !== undefined ? originX : w / 2;

        const newQueueItems: QueuedFlower[] = [];

        // Interleave flower varieties: Genda Marigold -> White Jasmine -> Genda Petal -> White Petal -> Rose Petal
        const varietySequence = [0, 1, 2, 3, 4, 0, 1, 2, 3, 0, 1, 4, 2, 3, 0, 1, 2, 4, 0, 1, 3, 2, 0, 1, 4];

        let accumulatedDelay = 0;

        for (let i = 0; i < totalCount; i++) {
          const itemIdx = varietySequence[i % varietySequence.length];

          // Natural staggered delay between consecutive flower releases
          // 120ms to 170ms between each flower
          accumulatedDelay += 115 + Math.random() * 55;

          // Target X: centered around the couple frame with natural organic spread across the section
          const spreadOffset = (Math.random() + Math.random() - 1) * (w * 0.42);
          const targetX = centerRefX + spreadOffset;

          // 3D depth layer: some closer (1.1 - 1.25), some mid (0.95 - 1.05), some distant (0.78 - 0.88)
          const zDepth = 0.8 + Math.random() * 0.42;

          newQueueItems.push({
            releaseTime: now + (i === 0 ? 0 : accumulatedDelay), // first flower drops immediately!
            itemIdx,
            targetX,
            zDepth,
          });
        }

        queueRef.current.push(...newQueueItems);

        // Start render loop if idle
        if (!animIdRef.current) {
          animIdRef.current = requestAnimationFrame(renderLoop);
        }
      },
      [syncCanvasSize, renderLoop]
    );

    useImperativeHandle(ref, () => ({
      trigger,
    }));

    return (
      <canvas
        ref={canvasRef}
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-30 ${className}`}
      />
    );
  }
);

FlowerShower.displayName = "FlowerShower";

export default FlowerShower;
