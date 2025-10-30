'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type BackgroundItem = {
  id: string;
  src: string;
};

const backgroundsMock = [
  { id: 'bg-1', src: '/backgrounds/bg-1.png' },
  { id: 'bg-2', src: '/backgrounds/bg-2.png' },
  { id: 'bg-3', src: '/backgrounds/bg-1.png' },
  { id: 'bg-4', src: '/backgrounds/bg-2.png' },
  { id: 'bg-5', src: '/backgrounds/bg-1.png' },
];

export function useBackgroundsApi() {
  const [itemsToShow, setItemsToShow] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const intervalRef = useRef<number | null>(null);
  const completionHandledRef = useRef(false);

  const generate = useCallback(() => {
    setIsGenerating(true);
    setProgress(0);
    completionHandledRef.current = false;

    const STEP = 1;
    const INTERVAL_MS = 10;

    intervalRef.current = window.setInterval(() => {
      setProgress(prev => Math.min(100, prev + STEP));
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    if (isGenerating && progress >= 100 && !completionHandledRef.current) {
      completionHandledRef.current = true;

      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      setIsGenerating(false);
      setItemsToShow(prev => prev + 1);
    }
  }, [isGenerating, progress]);

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, []);

  return {
    items: backgroundsMock.slice(0, itemsToShow).reverse(),
    progress,
    isGenerating,
    generate,
  };
}
