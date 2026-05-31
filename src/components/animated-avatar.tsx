"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export function AnimatedAvatar({ compact = false }: { compact?: boolean }) {
  const [missing, setMissing] = useState(false);
  const size = compact ? "size-24 sm:size-28" : "size-72 sm:size-80 lg:size-96";
  const alignment = compact ? "shrink-0" : "mx-auto";

  return (
    <motion.div
      className={`relative ${alignment} ${size}`}
      animate={{ y: compact ? [0, -6, 0] : [0, -12, 0] }}
      transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"
        animate={{ opacity: [0.35, 0.75, 0.35], scale: [0.92, 1.05, 0.92] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -inset-3 rounded-full border border-primary/35"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative h-full overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-cyan-400/20 via-violet-500/10 to-emerald-400/20 p-2 shadow-2xl shadow-cyan-500/20">
        <div className="relative h-full overflow-hidden rounded-full bg-card">
          {missing ? (
            <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.48),rgba(124,58,237,0.12)_45%,rgba(5,10,18,0.92)_75%)] text-4xl font-semibold text-primary">
              KN
            </div>
          ) : (
            <Image
              src="/avatar.png"
              alt="AI avatar illustration of Kaizen Nathani"
              fill
              sizes={compact ? "112px" : "(max-width: 768px) 288px, 384px"}
              priority={!compact}
              className="object-cover"
              onError={() => setMissing(true)}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
}
