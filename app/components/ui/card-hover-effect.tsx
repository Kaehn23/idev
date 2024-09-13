"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; 
import { cn } from "@/lib/utils"; 

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string | string[]; // Description peut être un string ou un tableau de strings
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-yellow-100 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription description={item.description} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden glass-effect-card border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black glass-effect-white text-center text-2xl font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  description,
  className,
}: {
  description: string | string[]; // Description est soit un string, soit un tableau de strings
  className?: string;
}) => {
  return typeof description === "string" ? (
    <p
      className={cn(
        "mt-8 text-center text-black tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {description}
    </p>
  ) : (
    <ul
      className={cn(
        "mt-8 text-center text-black tracking-wide leading-relaxed text-sm list-disc list-inside",
        className
      )}
    >
      {description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  );
};