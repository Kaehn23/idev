import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Define the number of balloons
  const balloons = Array.from({ length: 10 });

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100vh',
        backgroundColor: '#f0f8ff', // Light pastel background color
      }}
    >
      {/* Floating Jellyfish */}
      <motion.svg
        style={{
          position: 'absolute',
          bottom: '-10%', // Adjusted to start lower
          left: '50%',
          transform: 'translateX(-50%)',
        }}
        width="200"
        height="200"
        viewBox="0 0 200 200"
        animate={{
          y: ['0%', '-150%'], // Floats higher
          x: ['-10%', '10%', '-10%'],
        }}
        transition={{
          duration: 30, // Adjusted duration for slower movement
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Jellyfish SVG Paths */}
        {/* Jellyfish Body */}
        <ellipse
          cx="100"
          cy="80"
          rx="40"
          ry="60"
          fill="rgba(173, 216, 230, 0.5)"
        />
        {/* Tentacles */}
        <path
          d="M80,140 C70,160 60,180 70,200"
          stroke="rgba(173, 216, 230, 0.5)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M100,140 C90,160 80,180 90,200"
          stroke="rgba(173, 216, 230, 0.5)"
          strokeWidth="4"
          fill="none"
        />
        <path
          d="M120,140 C110,160 100,180 110,200"
          stroke="rgba(173, 216, 230, 0.5)"
          strokeWidth="4"
          fill="none"
        />
      </motion.svg>

      {/* Animated Balloons */}
      {balloons.map((_, index) => {
        // Randomize properties for each balloon
        const size = Math.random() * 50 + 50; // Random size between 50 and 100
        const left = Math.random() * 100; // Random horizontal position
        const delay = Math.random() * 5; // Random delay up to 5 seconds
        const duration = Math.random() * 30 + 10; // Random duration between 10 and 30 seconds
        const hue = Math.random() * 360;
        const color = `hsla(${hue}, 70%, 80%, 0.8)`; // Random pastel color

        return (
          <motion.svg
            key={index}
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: `${left}%`,
            }}
            width={size}
            height={size * 2}
            viewBox="0 0 100 200"
            animate={{
              y: ['0%', '-200%'], // Floats higher
              scale: [1, 1.5, 0], // Explosion effect
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay,
              ease: 'easeInOut', // Smooth scaling effect
            }}
          >
            {/* Balloon SVG Path */}
            <defs>
              <radialGradient id={`grad-${index}`} cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fff" stopOpacity="1" />
                <stop offset="100%" stopColor={color} stopOpacity="1" />
              </radialGradient>
            </defs>
            <path
              d="M50,0 C77.614,0 100,22.386 100,50 C100,77.614 77.614,100 50,100 C22.386,100 0,77.614 0,50 C0,22.386 22.386,0 50,0 Z"
              fill={`url(#grad-${index})`}
            />
            {/* Balloon string */}
            <line
              x1="50"
              y1="100"
              x2="50"
              y2="200"
              stroke={color}
              strokeWidth="2"
              opacity="0.5"
            />
          </motion.svg>
        );
      })}
    </div>
  );
};

export default AnimatedBackground;
