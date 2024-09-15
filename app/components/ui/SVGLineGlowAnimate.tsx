import React, { useState, useEffect } from "react";

const START_GRADIENT_POSITION = -130;
const END_GRADIENT_POSITION = 210;
const GRADIENT_MOVE_INTERVAL = 10;
const GLOWING_LINE_WIDTH = 81;

type SVGLineGlowAnimateProps = {
  movementDelay?: number;
  id: number;
  baseWidth: number;
  initialGradientX?: number;
  color?: string; // Color prop added earlier
};

const SVGLineGlowAnimate: React.FC<SVGLineGlowAnimateProps> = ({
  movementDelay = 0,
  id,
  baseWidth,
  initialGradientX = 0,
  color = "#3aeb0eff", // Default color
}) => {
  const svgWidth = baseWidth;
  const [gradientPosition, setGradientPosition] = useState({
    x1: START_GRADIENT_POSITION,
    x2: END_GRADIENT_POSITION,
  });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const totalDistance = svgWidth + GLOWING_LINE_WIDTH * 2;
    const halfDistance = totalDistance / 2;

    const moveGradient = () => {
      setGradientPosition((prev) => {
        const newX1 = prev.x1 + 2; // Adjust speed here
        const newX2 = prev.x2 + 2;

        const distanceTravelled = newX1 - START_GRADIENT_POSITION;
        let newOpacity = 0;

        if (distanceTravelled <= halfDistance) {
          newOpacity = distanceTravelled / halfDistance;
        } else {
          newOpacity =
            1 - (distanceTravelled - halfDistance) / halfDistance;
        }

        setOpacity(newOpacity);

        if (newX1 > svgWidth + GLOWING_LINE_WIDTH) {
          return {
            x1: START_GRADIENT_POSITION,
            x2: END_GRADIENT_POSITION,
          };
        }
        return {
          x1: newX1,
          x2: newX2,
        };
      });
    };

    let interval: NodeJS.Timeout;

    const startAnimation = () => {
      interval = setInterval(moveGradient, GRADIENT_MOVE_INTERVAL);
    };

    const timeout = setTimeout(startAnimation, movementDelay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      setOpacity(0);
    };
  }, [movementDelay, svgWidth]);

  return (
    <svg
      className="mx-auto"
      width={svgWidth}
      height="12"
      viewBox={`0 0 ${svgWidth} 12`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path id={`main-line-${id}`} d={`M0 6 L${svgWidth} 6`}></path>

      <use
        href={`#main-line-${id}`}
        opacity={opacity}
        stroke={`url(#gradient-glow-${id})`}
        strokeWidth="6"
        style={{
          filter: `blur(1px) drop-shadow(0px 0px 2px ${color})`, // Changed blur to 1px
          transition: `opacity ${GRADIENT_MOVE_INTERVAL}ms linear`,
        }}
      />

      <use
        href={`#main-line-${id}`}
        stroke={`url(#gradient-solid-${id})`}
        strokeWidth="2"
        style={{
          filter: `blur(1px)`, // Added 1px blur to the solid line
        }}
      />

      <defs>
        <linearGradient
          id={`gradient-glow-${id}`}
          x1={gradientPosition.x1}
          y1="6"
          x2={gradientPosition.x2}
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.38" stopColor={color} stopOpacity="0"></stop>
          <stop offset="0.5" stopColor={color} stopOpacity="0.8"></stop>
          <stop offset="0.62" stopColor={color} stopOpacity="0"></stop>
        </linearGradient>

        <linearGradient
          id={`gradient-solid-${id}`}
          x1={initialGradientX}
          y1="6"
          x2={svgWidth}
          y2="6"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={color} stopOpacity="0"></stop>
          <stop offset="0.5" stopColor={color}></stop>
          <stop offset="1" stopColor={color} stopOpacity="0"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SVGLineGlowAnimate;
