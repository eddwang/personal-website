"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const kiwiImages = ["/kiwi-1.jpg", "/kiwi-2.jpg", "/kiwi-3.jpg"];

const CARD_W = 112; // w-28
const CARD_H = 160; // h-40
const MARGIN = 12;

const cards = [
  { rotate: -22, x: -110, y: -170 },
  { rotate: 0,   x: -56,  y: -190 },
  { rotate: 22,  x: -2,   y: -170 },
];

function clampX(anchorX: number): number {
  const leftMost  = anchorX + Math.min(...cards.map((c) => c.x));
  const rightMost = anchorX + Math.max(...cards.map((c) => c.x)) + CARD_W;
  if (leftMost < MARGIN) return anchorX + (MARGIN - leftMost);
  if (rightMost > window.innerWidth - MARGIN) return anchorX - (rightMost - (window.innerWidth - MARGIN));
  return anchorX;
}

function clampY(anchorY: number): { y: number; flipY: boolean } {
  const topMost = anchorY + Math.min(...cards.map((c) => c.y));
  if (topMost < MARGIN) {
    return { y: anchorY + CARD_H + 20, flipY: true };
  }
  return { y: anchorY, flipY: false };
}

export default function KiwiHover({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0, flipY: false });
  const spanRef = useRef<HTMLSpanElement>(null);
  const isTouch = useRef(false);

  // Click-outside to dismiss on mobile
  useEffect(() => {
    if (!visible) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (spanRef.current && !spanRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [visible]);

  const applyPos = (rawX: number, rawY: number) => {
    const x = clampX(rawX);
    const { y, flipY } = clampY(rawY);
    setPos({ x, y, flipY });
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
    if (isTouch.current) return;
    applyPos(e.clientX, e.clientY);
    setVisible(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isTouch.current || !visible) return;
    applyPos(e.clientX, e.clientY);
  };

  const handleMouseLeave = () => {
    if (isTouch.current) return;
    setVisible(false);
  };

  const handleTouchStart = () => {
    isTouch.current = true;
  };

  const handleClick = () => {
    if (!isTouch.current) return;
    if (visible) { setVisible(false); return; }
    if (spanRef.current) {
      const rect = spanRef.current.getBoundingClientRect();
      applyPos(rect.left + rect.width / 2, rect.top);
    }
    setVisible(true);
  };

  const cardStyle = (card: typeof cards[number]) => ({
    transform: `translate(${card.x}px, ${pos.flipY ? -card.y : card.y}px) rotate(${pos.flipY ? -card.rotate : card.rotate}deg)`,
    transformOrigin: pos.flipY ? "top center" : "bottom center",
  });

  return (
    <>
      <span
        ref={spanRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
        className="cursor-pointer"
      >
        {children}
      </span>

      {visible && (
        <div
          className="fixed pointer-events-none"
          style={{ left: pos.x, top: pos.y, zIndex: 9999 }}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="absolute w-28 h-40 rounded-xl overflow-hidden shadow-xl border border-[var(--color-border)]"
              style={cardStyle(card)}
            >
              <Image src={kiwiImages[i]} alt="kiwi" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
