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
    window.open(href, "_blank"); // Open in a new tab
  };

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      role="link"
      className={`flex p-2 items-center rounded-lg text-white ${color}`}
      {...props}
    >
      {children}
      <div
        style={{ width: hovered ? ref.current?.offsetWidth || 0 : 0 }}
        className="overflow-x-hidden transition-all duration-300 ease-out"
      >
        <span ref={ref} className="px-1.5">
          {text}
        </span>
      </div>
    </button>
  );
}