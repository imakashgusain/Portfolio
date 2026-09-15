"use client";
import React, { ReactNode } from "react";

interface IconButtonProps {
  children: ReactNode; // ReactNode includes all valid React children (JSX, strings, numbers, etc.)
  text?: string;
  color?: string;
  href?: string;
  [key: string]: any; // Allows for any additional props
}

export default function IconButton({ children, text, color, href, ...props }: IconButtonProps) {
  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className={`group inline-flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 ${color}`}
      {...props}
    >
      <span className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5">
        {children}
      </span>
      {text ? <span>{text}</span> : null}
      <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-white">↗</span>
    </a>
  );
}
