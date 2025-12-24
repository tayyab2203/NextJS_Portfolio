'use client';
import { useEffect, useRef, useState } from 'react';
import { useInView as useIntersectionObserver } from 'react-intersection-observer';

export function useInView(options = {}) {
  const { threshold = 0.1, triggerOnce = true } = options;
  const { ref, inView } = useIntersectionObserver({
    threshold,
    triggerOnce,
  });

  return { ref, inView };
}

