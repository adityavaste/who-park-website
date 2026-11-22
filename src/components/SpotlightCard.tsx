'use client';

import { useState, useRef } from 'react';

export default function SpotlightCard({
  children,
  className = '',
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-20"
        style={{
          opacity,
          background: dark
            ? `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgba(255, 214, 0, 0.16), transparent 45%)`
            : `radial-gradient(520px circle at ${pos.x}px ${pos.y}px, rgba(255, 214, 0, 0.24), transparent 45%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between">{children}</div>
    </div>
  );
}