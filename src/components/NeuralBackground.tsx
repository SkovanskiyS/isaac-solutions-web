"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { useCallback, useEffect, useMemo, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  colorIndex: number; // Use index instead of string for better performance
}

// Pre-defined colors as constants (moved outside component)
const COLORS = [
  "rgba(6, 182, 212,", // cyan
  "rgba(139, 92, 246,", // purple
  "rgba(236, 72, 153,", // pink
  "rgba(59, 130, 246,", // blue
] as const;

// Configuration constants
const CONFIG = {
  NODE_DIVISOR: 15000, // Higher = fewer nodes
  MAX_NODES: 100, // Reduced from 150
  MAX_DISTANCE_RATIO: 0.15, // Reduced from 0.2
  MIN_SPEED: 0.2,
  BASE_SPEED: 1.2, // Reduced from 1.8
  FRICTION: 0.995,
  MOUSE_RADIUS: 120, // Reduced from 150
  MOUSE_FORCE: 0.1, // Reduced from 0.15
  FRAME_SKIP: 2, // Only update connections every N frames
} as const;

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);
  const mouseRef = useRef({ x: -1000, y: -1000 }); // Start off-screen
  const frameCountRef = useRef(0);
  const dimensionsRef = useRef({ width: 0, height: 0 });
  const isVisibleRef = useRef(true);
  const { theme } = useTheme();

  // Memoize max distance calculation
  const maxDistanceRef = useRef(0);

  const createNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    const nodeCount = Math.min(
      Math.floor((width * height) / CONFIG.NODE_DIVISOR),
      CONFIG.MAX_NODES,
    );

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * CONFIG.BASE_SPEED,
        vy: (Math.random() - 0.5) * CONFIG.BASE_SPEED,
        radius: Math.random() * 2 + 1.5,
        colorIndex: Math.floor(Math.random() * COLORS.length),
      });
    }

    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Visibility API to pause when tab is hidden
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Set canvas size with debounced resize
    let resizeTimeout: number;
    const resizeCanvas = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(() => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2); // Cap DPR at 2
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        dimensionsRef.current = { width, height };
        maxDistanceRef.current =
          Math.min(width, height) * CONFIG.MAX_DISTANCE_RATIO;

        // Recreate nodes on resize
        nodesRef.current = createNodes(width, height);
      }, 100);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Throttled mouse tracking
    let lastMouseUpdate = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      if (now - lastMouseUpdate > 16) {
        // ~60fps throttle
        mouseRef.current = { x: e.clientX, y: e.clientY };
        lastMouseUpdate = now;
      }
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Initialize nodes
    nodesRef.current = createNodes(window.innerWidth, window.innerHeight);
    maxDistanceRef.current =
      Math.min(window.innerWidth, window.innerHeight) *
      CONFIG.MAX_DISTANCE_RATIO;

    // Animation loop
    const animate = () => {
      // Skip rendering when tab is hidden
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const { width, height } = dimensionsRef.current;
      if (width === 0 || height === 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const nodes = nodesRef.current;
      const maxDistance = maxDistanceRef.current;
      const maxDistSq = maxDistance * maxDistance; // Avoid sqrt in distance checks
      const mouseRadiusSq = CONFIG.MOUSE_RADIUS * CONFIG.MOUSE_RADIUS;

      // Update nodes
      if (!prefersReducedMotion) {
        const mouseX = mouseRef.current.x;
        const mouseY = mouseRef.current.y;

        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];

          // Mouse interaction - optimized
          const dx = mouseX - node.x;
          const dy = mouseY - node.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < mouseRadiusSq && distSq > 0) {
            const distance = Math.sqrt(distSq);
            const force =
              ((CONFIG.MOUSE_RADIUS - distance) / CONFIG.MOUSE_RADIUS) *
              CONFIG.MOUSE_FORCE;
            node.vx -= (dx / distance) * force;
            node.vy -= (dy / distance) * force;
          }

          // Update position
          node.x += node.vx;
          node.y += node.vy;

          // Apply friction
          node.vx *= CONFIG.FRICTION;
          node.vy *= CONFIG.FRICTION;

          // Ensure minimum velocity
          const speedSq = node.vx * node.vx + node.vy * node.vy;
          const minSpeedSq = CONFIG.MIN_SPEED * CONFIG.MIN_SPEED;
          if (speedSq < minSpeedSq && speedSq > 0) {
            const speed = Math.sqrt(speedSq);
            node.vx = (node.vx / speed) * CONFIG.MIN_SPEED;
            node.vy = (node.vy / speed) * CONFIG.MIN_SPEED;
          } else if (speedSq === 0) {
            node.vx = (Math.random() - 0.5) * CONFIG.BASE_SPEED;
            node.vy = (Math.random() - 0.5) * CONFIG.BASE_SPEED;
          }

          // Bounce off edges
          if (node.x < 0) {
            node.x = 0;
            node.vx *= -1;
          } else if (node.x > width) {
            node.x = width;
            node.vx *= -1;
          }
          if (node.y < 0) {
            node.y = 0;
            node.vy *= -1;
          } else if (node.y > height) {
            node.y = height;
            node.vy *= -1;
          }
        }
      }

      // Draw connections directly (no intermediate array)
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const nodeI = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeJ = nodes[j];
          const dx = nodeI.x - nodeJ.x;
          const dy = nodeI.y - nodeJ.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const distance = Math.sqrt(distSq);
            const opacity = (1 - distance / maxDistance) * 0.25;

            // Use simple color instead of gradient for performance
            ctx.strokeStyle = `${COLORS[nodeI.colorIndex]}${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodeI.x, nodeI.y);
            ctx.lineTo(nodeJ.x, nodeJ.y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes with simplified glow
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        const color = COLORS[node.colorIndex];

        // Simplified glow - single circle instead of radial gradient
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `${color}0.15)`;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${color}0.85)`;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      clearTimeout(resizeTimeout);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createNodes]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        opacity: theme === "light" ? 0 : 0.7,
        mixBlendMode: "screen",
        visibility: theme === "light" ? "hidden" : "visible",
      }}
    />
  );
}
