"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimatedPyramid() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log("AnimatedPyramid component mounted");
    setIsMounted(true);
  }, []);

  // Skip client-side animation during SSR
  if (!isMounted) {
    return (
      <div className="h-[600px] flex items-center justify-center">
        <p className="text-xl font-bold">Loading Tech Stack...</p>
      </div>
    );
  }

  // Stack layout - proper pyramid (wider at bottom)
  const technologies = [
    // Top row (1)
    { name: "Next.js", row: 0, col: 0 },
    // Second row (2)
    { name: "React", row: 1, col: -0.5 },
    { name: "TypeScript", row: 1, col: 0.5 },
    // Third row (3)
    { name: "Prisma", row: 2, col: -1 },
    { name: "TailwindCSS", row: 2, col: 0 },
    { name: "MongoDB", row: 2, col: 1 },
    // Fourth row (4)
    { name: "Postgres", row: 3, col: -1.5 },
    { name: "Mongoose", row: 3, col: -0.5 },
    { name: "Firestore", row: 3, col: 0.5 },
    { name: "Express.js", row: 3, col: 1.5 },
  ];

  return (
    <div className="h-full relative overflow-hidden flex items-center justify-center border">
      <div className="relative w-full max-w-3xl mx-auto flex items-center justify-center">
        {/* Ground line */}
        <div
          className="absolute bg-black h-2"
          style={{
            width: "100%",
            top: "calc(50% + 160px)",
            zIndex: 1,
          }}
        />

        {technologies.map((tech, i) => {
          // Calculate position based on row and column
          const blockWidth = 160;
          const blockHeight = 80;
          const xOffset = tech.col * blockWidth;
          const yOffset = tech.row * blockHeight;

          return (
            <motion.div
              key={tech.name}
              className="absolute font-sans font-black text-xl p-6 rounded-none border-4 border-black bg-[#f0f0f5] text-black cursor-grab active:cursor-grabbing"
              style={{
                width: blockWidth,
                height: blockHeight,
                zIndex: 4 - tech.row, // Higher blocks appear on top
              }}
              initial={{
                x: xOffset,
                y: -400,
                rotate: 0,
              }}
              animate={{
                x: xOffset,
                y: -120 + yOffset,
                rotate: 0,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
                mass: 2,
                delay: i * 0.2,
              }}
              drag
              dragMomentum={true}
              dragTransition={{
                power: 0.2, // for smoother drag
                timeConstant: 500, // for floaty feel
                restDelta: 0.5,
              }}
              whileDrag={{ zIndex: 50 }}
            >
              <div className="flex items-center justify-center h-full">
                {tech.name}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
