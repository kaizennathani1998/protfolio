"use client";

import { motion } from "framer-motion";

const nodes = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${10 + ((index * 23) % 76)}%`,
  delay: index * 0.18,
}));

export function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 galaxy-field" />
      <div className="absolute inset-0 bio-grid opacity-45" />
      <motion.div
        className="absolute left-1/2 top-0 size-[48rem] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl"
        animate={{ scale: [1, 1.12, 1], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 size-[40rem] rounded-full bg-fuchsia-500/15 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, 18, 0], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute -left-40 top-1/3 h-72 w-[55rem] rotate-[-18deg] rounded-full bg-[linear-gradient(90deg,transparent,rgba(34,211,238,0.13),rgba(168,85,247,0.12),transparent)] blur-2xl" />
      {nodes.map((node) => (
        <motion.span
          key={node.id}
          className="absolute size-1 rounded-full bg-primary/70 shadow-[0_0_24px_var(--primary)]"
          style={{ left: node.left, top: node.top }}
          animate={{ y: [0, -24, 0], opacity: [0.18, 0.95, 0.18], scale: [1, 2.2, 1] }}
          transition={{ duration: 4.8 + (node.id % 5) * 0.6, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
