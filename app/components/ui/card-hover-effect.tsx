"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

// Types pour les props
interface HoverEffectProps {
  items: {
    title: string;
    description: string | string[]; // Description peut être un string ou un tableau de strings
  }[];
  className?: string;
}

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardDescriptionProps {
  description: string | string[];
  className?: string;
}

// Composant HoverEffect
export const HoverEffect: React.FC<HoverEffectProps> = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      className={cn(
        "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-4",
        className
      )}
      aria-label="Services"
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => setHoveredIndex(idx === hoveredIndex ? null : idx)} // Toggle pour mobile
          role="button"
          tabIndex={0}
          onKeyPress={(e) => {
            if (e.key === 'Enter') setHoveredIndex(idx === hoveredIndex ? null : idx);
          }}
          aria-expanded={hoveredIndex === idx}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-yellow-100 dark:bg-slate-800/80 block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription description={item.description} />
          </Card>
        </div>
      ))}
    </section>
  );
};

// Composant Card
export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <article
      className={cn(
        "rounded-2xl h-full w-full p-4 sm:p-6 lg:p-8 overflow-hidden glass-effect-card border border-transparent dark:border-white/20 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-2 sm:p-4 lg:p-6">{children}</div>
      </div>
    </article>
  );
};

// Composant CardTitle
export const CardTitle: React.FC<CardTitleProps> = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "text-black dark:text-white text-center text-xl sm:text-2xl lg:text-3xl font-bold tracking-wide mt-2",
        className
      )}
    >
      {children}
    </h4>
  );
};

// Composant CardDescription
export const CardDescription: React.FC<CardDescriptionProps> = ({ description, className }) => {
  return typeof description === "string" ? (
    <p
      className={cn(
        "mt-4 sm:mt-6 text-center text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed text-sm sm:text-base lg:text-lg",
        className
      )}
    >
      {description}
    </p>
  ) : (
    <ul
      className={cn(
        "mt-4 sm:mt-6 text-center text-gray-700 dark:text-gray-300 tracking-wide leading-relaxed text-sm sm:text-base lg:text-lg list-disc list-inside",
        className
      )}
    >
      {description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  );
};
