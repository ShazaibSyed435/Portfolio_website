'use client';

import { useEffect, useRef } from 'react';
import styles from './atmosphere.module.css';

const COLORS = ['138, 183, 255', '176, 153, 255', '216, 238, 255'];

function createParticles(count) {
  let seed = 7319;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
  return Array.from({ length: count }, () => ({
    x: random(),
    y: random(),
    size: 0.7 + random() * 1.1,
    opacity: 0.2 + random() * 0.4,
    speed: 0.35 + random() * 0.65,
    depth: 0.4 + random() * 0.8,
    phase: random() * Math.PI * 2,
    drift: 8 + random() * 14,
    color: Math.floor(random() * COLORS.length),
  }));
}

// Cache the soft glow once per color instead of blurring every dot each frame.
function createGlows() {
  return COLORS.map((color) => {
    const sprite = document.createElement('canvas');
    sprite.width = 32;
    sprite.height = 32;
    const context = sprite.getContext('2d');
    if (!context) return null;
    const glow = context.createRadialGradient(16, 16, 0, 16, 16, 16);
    glow.addColorStop(0, `rgba(${color}, 0.95)`);
    glow.addColorStop(0.15, `rgba(${color}, 0.6)`);
    glow.addColorStop(0.45, `rgba(${color}, 0.12)`);
    glow.addColorStop(1, `rgba(${color}, 0)`);
    context.fillStyle = glow;
    context.fillRect(0, 0, 32, 32);
    return sprite;
  });
}

export default function ParticleField({ interactionRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const glows = createGlows();
    let particles = [];
    let width = 1;
    let height = 1;
    let frame = 0;
    let elapsed = 0;
    let lastTime = 0;
    let interval = 1000 / 30;

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const interaction = interactionRef.current;
      const travelHeight = height + 60;
      for (const particle of particles) {
        const x = particle.x * width
          + Math.sin(elapsed * 0.09 * particle.speed + particle.phase) * particle.drift
          + interaction.x * particle.depth * 7;
        const y = ((particle.y * travelHeight - elapsed * particle.speed * 2.4) % travelHeight
          + travelHeight) % travelHeight - 30
          + interaction.y * particle.depth * 5 - interaction.scroll * particle.depth * 22;
        const edgeFade = Math.max(0, Math.min(1, y / 60, (height - y) / 60));
        context.globalAlpha = particle.opacity * edgeFade
          * (0.88 + Math.sin(elapsed * 0.2 + particle.phase) * 0.12);
        const size = particle.size * 9;
        const glow = glows[particle.color];
        if (glow) context.drawImage(glow, x - size / 2, y - size / 2, size, size);
      }
      context.globalAlpha = 1;
    };

    const tick = (time) => {
      frame = window.requestAnimationFrame(tick);
      if (lastTime && time - lastTime < interval) return;
      if (lastTime) elapsed += Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;
      draw();
    };
    const stop = () => {
      window.cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    };
    const syncMotion = () => {
      stop();
      draw();
      if (!reducedMotion.matches && !document.hidden) frame = window.requestAnimationFrame(tick);
    };
    const resize = () => {
      const bounds = canvas.getBoundingClientRect();
      width = Math.max(1, bounds.width);
      height = Math.max(1, bounds.height);
      const mobile = width < 768;
      // Bound texture memory even on high-DPI and 4K displays.
      const ratio = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.5,
        Math.sqrt(2500000 / (width * height)));
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const limit = mobile ? 16 : width < 1024 ? 28 : 44;
      particles = createParticles(Math.min(limit, Math.max(10, Math.floor(width * height / 32000))));
      interval = 1000 / (mobile ? 20 : 30);
      syncMotion();
    };

    resize();
    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize);
    resizeObserver?.observe(canvas);
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', syncMotion);
    reducedMotion.addEventListener('change', syncMotion);
    return () => {
      stop();
      resizeObserver?.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', syncMotion);
      reducedMotion.removeEventListener('change', syncMotion);
      context.clearRect(0, 0, width, height);
    };
  }, [interactionRef]);

  return <canvas ref={canvasRef} className={`${styles.particles} absolute inset-0 block h-full w-full`} />;
}
