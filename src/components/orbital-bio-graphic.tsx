"use client";

import { motion } from "framer-motion";
import { CloudCog, Cpu, Dna, Network } from "lucide-react";

const orbitNodes = [
  { icon: Dna, className: "left-8 top-16", label: "NGS" },
  { icon: Cpu, className: "right-10 top-24", label: "HPC" },
  { icon: CloudCog, className: "bottom-16 left-16", label: "AWS" },
  { icon: Network, className: "bottom-10 right-20", label: "ETL" },
];

export function OrbitalBioGraphic() {
  return (
    <div className="relative hidden min-h-[30rem] overflow-hidden lg:block">
      <motion.div
        className="absolute inset-8 rounded-full border border-primary/15"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-20 rounded-full border border-fuchsia-300/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,0.36),rgba(168,85,247,0.18)_42%,rgba(5,10,18,0.02)_70%)] blur-xl"
        animate={{ scale: [0.92, 1.08, 0.92], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute left-1/2 top-1/2 size-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-background/30 shadow-[0_0_120px_rgba(34,211,238,0.28)] backdrop-blur-xl">
        <motion.div
          className="absolute inset-6 rounded-full border border-primary/25"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid size-24 place-items-center rounded-full border border-primary/30 bg-primary/10 text-primary shadow-[0_0_50px_rgba(34,211,238,0.35)]">
            <Dna className="size-10" />
          </div>
        </div>
      </div>
      <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 480 480" fill="none">
        <motion.path
          d="M76 262 C146 72 334 78 408 242 C336 408 148 402 76 262Z"
          stroke="url(#bioLine)"
          strokeWidth="1.5"
          strokeDasharray="8 12"
          animate={{ pathLength: [0.25, 1, 0.25], opacity: [0.25, 0.8, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M114 150 C228 276 286 282 370 150"
          stroke="url(#bioLine)"
          strokeWidth="1.5"
          strokeDasharray="5 10"
          animate={{ pathLength: [1, 0.2, 1], opacity: [0.2, 0.75, 0.2] }}
          transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="bioLine" x1="76" y1="100" x2="408" y2="390" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22d3ee" />
            <stop offset="0.52" stopColor="#a78bfa" />
            <stop offset="1" stopColor="#34d399" />
          </linearGradient>
        </defs>
      </svg>
      {orbitNodes.map((node, index) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={node.label}
            className={`absolute ${node.className} flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-3 py-2 text-xs text-muted-foreground backdrop-blur-xl`}
            animate={{ y: [0, index % 2 ? 14 : -14, 0], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 4.8 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Icon className="size-4 text-primary" />
            <span className="font-mono">{node.label}</span>
          </motion.div>
        );
      })}
    </div>
  );
}
