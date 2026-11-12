'use client';

import { useEffect, useRef } from 'react';
import AuroraGradients from './background/AuroraGradients';
import FloatingObjects from './background/FloatingObjects';
import ParticleField from './background/ParticleField';
import PerspectiveGrid from './background/PerspectiveGrid';
import styles from './background/atmosphere.module.css';

export default function AnimatedBackground() {
  const backgroundRef = useRef(null);
  const interactionRef = useRef({ x: 0, y: 0, scroll: 0 });

  useEffect(() => {
    const background = backgroundRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    let stopInteraction = () => {};

    const configure = () => {
      stopInteraction();
      background.dataset.motion = reducedMotion.matches ? 'reduced' : 'full';
      background.style.setProperty('--pointer-x', '0');
      background.style.setProperty('--pointer-y', '0');
      background.style.setProperty('--scroll-progress', '0');
      const current = interactionRef.current;
      current.x = 0;
      current.y = 0;
      current.scroll = 0;

      // The CSS aurora remains visible without a motion loop or input listeners.
      if (reducedMotion.matches) return;

      let frame = 0;
      let previousTime = 0;
      let scrollRange = 1;
      let targetX = 0;
      let targetY = 0;
      let targetScroll = 0;

      const update = (time) => {
        frame = 0;
        const elapsed = previousTime ? Math.min(time - previousTime, 64) : 16;
        previousTime = time;
        const smoothing = 1 - Math.exp(-elapsed / 160);
        current.x += (targetX - current.x) * smoothing;
        current.y += (targetY - current.y) * smoothing;
        current.scroll += (targetScroll - current.scroll) * smoothing;
        background.style.setProperty('--pointer-x', current.x.toFixed(4));
        background.style.setProperty('--pointer-y', current.y.toFixed(4));
        background.style.setProperty('--scroll-progress', current.scroll.toFixed(4));

        // Input-driven work stops once the light has eased into position.
        if (Math.abs(targetX - current.x) + Math.abs(targetY - current.y)
          + Math.abs(targetScroll - current.scroll) > 0.001) {
          frame = window.requestAnimationFrame(update);
        }
      };

      const scheduleUpdate = () => {
        if (!frame && !document.hidden) {
          previousTime = 0;
          frame = window.requestAnimationFrame(update);
        }
      };
      const handlePointer = (event) => {
        if (event.pointerType === 'touch') return;
        targetX = (event.clientX / window.innerWidth - 0.5) * 2;
        targetY = (event.clientY / window.innerHeight - 0.5) * 2;
        scheduleUpdate();
      };
      const resetPointer = () => {
        targetX = 0;
        targetY = 0;
        scheduleUpdate();
      };
      const handleScroll = () => {
        targetScroll = Math.max(0, Math.min(1, window.scrollY / scrollRange));
        scheduleUpdate();
      };
      const handleResize = () => {
        scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        handleScroll();
      };
      const handleVisibility = () => {
        background.dataset.paused = String(document.hidden);
        if (document.hidden) {
          window.cancelAnimationFrame(frame);
          frame = 0;
        } else {
          handleResize();
        }
      };

      if (finePointer.matches) {
        window.addEventListener('pointermove', handlePointer, { passive: true });
        document.documentElement.addEventListener('pointerleave', resetPointer);
        window.addEventListener('blur', resetPointer);
      }
      window.addEventListener('scroll', handleScroll, { passive: true });
      window.addEventListener('resize', handleResize, { passive: true });
      document.addEventListener('visibilitychange', handleVisibility);
      const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(handleResize);
      resizeObserver?.observe(document.body);
      handleVisibility();

      stopInteraction = () => {
        window.cancelAnimationFrame(frame);
        window.removeEventListener('pointermove', handlePointer);
        document.documentElement.removeEventListener('pointerleave', resetPointer);
        window.removeEventListener('blur', resetPointer);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibility);
        resizeObserver?.disconnect();
      };
    };

    configure();
    reducedMotion.addEventListener('change', configure);
    finePointer.addEventListener('change', configure);
    return () => {
      stopInteraction();
      reducedMotion.removeEventListener('change', configure);
      finePointer.removeEventListener('change', configure);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className={`${styles.root} pointer-events-none fixed inset-0 z-0 overflow-hidden`}
    >
      <div className={`${styles.wash} absolute inset-0`} />
      <AuroraGradients />
      <PerspectiveGrid />
      <ParticleField interactionRef={interactionRef} />
      <FloatingObjects />
      <div className={`${styles.vignette} absolute inset-0`} />
    </div>
  );
}
