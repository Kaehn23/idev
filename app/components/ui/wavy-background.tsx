"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // -- Paramètres pour limiter l'animation --
  // Essayez de les ajuster pour trouver le meilleur compromis qualité/performance
  const DESIRED_FPS = 30;
  const SAMPLE_STEP = 10; // écart entre deux points dans le tracé (plus grand = meilleur perfs)
  const WAVE_COUNT = 5;   // nb de vagues à tracer (plus bas = meilleur perfs)
  
  // Calcul de l'interval de temps entre deux frames (en ms)
  const FRAME_INTERVAL = 1000 / DESIRED_FPS;

  let w: number,
    h: number,
    ctx: CanvasRenderingContext2D | null,
    canvas: HTMLCanvasElement | null;

  // Pour limiter le nombre de frames
  let lastTime = 0;
  let animationId: number;

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  let nt = 0;
  const initCanvas = () => {
    canvas = canvasRef.current;
    if (!canvas) return;
    ctx = canvas.getContext("2d");
    if (!ctx) return;

    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;

    window.addEventListener("resize", handleResize);
  };

  const handleResize = () => {
    if (!ctx) return;
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
    "#4cbb7",
  ];

  const drawWaves = () => {
    if (!ctx) return;

    // Remplir le canvas pour effacer l'image précédente
    ctx.fillStyle = backgroundFill || "white";
    ctx.globalAlpha = waveOpacity;
    ctx.fillRect(0, 0, w, h);

    // Dessiner chaque vague
    for (let i = 0; i < WAVE_COUNT; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < w; x += SAMPLE_STEP) {
        // On peut ajuster le coefficient pour élargir/rapprocher les vagues
        const y = noise(x / 1000, 0.3 * i, nt) * 150; 
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }

    // Avancer dans le temps
    nt += getSpeed();
  };

  // Fonction qui sera appelée en boucle
  const render = (time: number) => {
    // Calculer le temps écoulé depuis la dernière frame
    const delta = time - lastTime;
    if (delta > FRAME_INTERVAL) {
      lastTime = time - (delta % FRAME_INTERVAL);
      drawWaves();
    }
    animationId = requestAnimationFrame(render);
  };

  useEffect(() => {
    initCanvas();
    // Démarrage de l'animation
    animationId = requestAnimationFrame(render);
    
    // Nettoyage à la désallocation du composant
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "relative h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <div className="relative w-full h-full">
        <canvas
          className="absolute inset-0 z-0"
          ref={canvasRef}
          id="canvas"
          style={{
            ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
          }}
        />
        <div className={cn("relative z-10", className)} {...props}>
          {children}
        </div>
      </div>
    </div>
  );
};
