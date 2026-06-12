"use client";

import { motion } from "framer-motion";

interface StatCardProps {
  value: string;
  label: string;
  index: number;
}

export function StatCard({ value, label, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card group rounded-xl p-5 transition-all duration-300 hover:border-accent/30"
    >
      <p className="text-2xl font-bold tracking-tight text-accent md:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-sm text-muted group-hover:text-foreground/80">
        {label}
      </p>
    </motion.div>
  );
}
