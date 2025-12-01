"use client";

import { useEffect, useRef, useCallback } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  pulsePhase: number;
}

interface Connection {
  from: number;
  to: number;
  opacity: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const connectionsRef = useRef<Connection[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  const colors = {
    cyan: "rgba(6, 182, 212,",
    purple: "rgba(139, 92, 246,",
    pink: "rgba(236, 72, 153,",
    blue: "rgba(59, 130, 246,",
  };

  const colorArray = [colors.cyan, colors.purple, colors.pink, colors.blue];

  const createNodes = useCallback((width: number, height: number) => {
    const nodes: Node[] = [];
    // Increased node count for denser neural network effect
    const nodeCount = Math.min(
      Math.floor((width * height) / 12000),
      150
    );

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 1.8,  // Faster horizontal movement
        vy: (Math.random() - 0.5) * 1.8,  // Faster vertical movement
        radius: Math.random() * 2.5 + 1.5,
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    return nodes;
  }, []);

  const updateConnections = useCallback((nodes: Node[], maxDistance: number) => {
    const connections: Connection[] = [];

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          connections.push({
            from: i,
            to: j,
            opacity: 1 - distance / maxDistance,
          });
        }
      }
    }

    return connections;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Set canvas size
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      // Recreate nodes on resize
      nodesRef.current = createNodes(window.innerWidth, window.innerHeight);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Initialize nodes
    nodesRef.current = createNodes(window.innerWidth, window.innerHeight);

    // Animation loop
    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // Update nodes
      nodesRef.current.forEach((node) => {
        if (!prefersReducedMotion) {
          // Mouse interaction - nodes repel from cursor when close
          const dx = mouseRef.current.x - node.x;
          const dy = mouseRef.current.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150 && distance > 0) {
            // Repel nodes away from mouse
            const force = (150 - distance) / 150 * 0.15;
            node.vx -= (dx / distance) * force;
            node.vy -= (dy / distance) * force;
          }

          // Update position
          node.x += node.vx;
          node.y += node.vy;

          // Apply slight friction
          node.vx *= 0.99;
          node.vy *= 0.99;

          // Ensure minimum velocity so nodes always move
          const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy);
          const minSpeed = 0.3;
          if (speed < minSpeed && speed > 0) {
            node.vx = (node.vx / speed) * minSpeed;
            node.vy = (node.vy / speed) * minSpeed;
          } else if (speed === 0) {
            // If completely stopped, give random velocity
            node.vx = (Math.random() - 0.5) * 1.8;
            node.vy = (Math.random() - 0.5) * 1.8;
          }

          // Bounce off edges
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;

          // Keep in bounds
          node.x = Math.max(0, Math.min(width, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
        }
      });

      // Update connections with larger connection distance for denser network
      const maxDistance = Math.min(width, height) * 0.2;
      connectionsRef.current = updateConnections(nodesRef.current, maxDistance);

      // Draw connections
      connectionsRef.current.forEach((connection) => {
        const from = nodesRef.current[connection.from];
        const to = nodesRef.current[connection.to];

        // Create gradient for connection
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, `${from.color}${connection.opacity * 0.3})`);
        gradient.addColorStop(1, `${to.color}${connection.opacity * 0.3})`);

        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = connection.opacity * 1.5;
        ctx.stroke();
      });

      // Draw nodes (static, no pulsing)
      nodesRef.current.forEach((node) => {
        const glowRadius = node.radius * 3;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          glowRadius
        );
        gradient.addColorStop(0, `${node.color}0.6)`);
        gradient.addColorStop(0.5, `${node.color}0.2)`);
        gradient.addColorStop(1, `${node.color}0)`);

        ctx.beginPath();
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${node.color}0.9)`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [createNodes, updateConnections]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: 0.7,
        mixBlendMode: "screen"
      }}
    />
  );
}
