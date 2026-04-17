"use client";
import React, { ReactNode } from "react";
import { useState, useRef } from "react";

interface IconButtonProps {
  children: ReactNode; // ReactNode includes all valid React children (JSX, strings, numbers, etc.)
  text?: string;
  color?: string;
  href?: string;
  [key: string]: any; // Allows for any additional props
}

export default function IconButton({ children, text, color, href, ...props }: IconButtonProps) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  const handleClick = () => {
    if (href) window.open(href, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex items-center gap-3 rounded-full px-4 py-3 text-sm font-medium transition-all duration-300 ${color}`}
      {...props}
    >
      <span className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5">
        {children}
      </span>
      {text ? (
        <span className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {text}
        </span>
      ) : null}
    </button>
  );
}