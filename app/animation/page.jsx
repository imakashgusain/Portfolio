"use client"
import { useState, useRef } from "react";

export default function IconButton({ children, text, color, href, ...props }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);

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
