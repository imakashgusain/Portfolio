'use client';
import { Lenis as ReactLenis } from '@studio-freight/react-lenis';
import React from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function LenisProvider({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}
