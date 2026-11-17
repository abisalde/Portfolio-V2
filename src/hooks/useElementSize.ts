import { useEffect, useState, type RefObject } from 'react';

export function useElementSize(
  ref: RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;

    const observer = new ResizeObserver(() => {
      const { width, height } = element.getBoundingClientRect();
      setSize({ width: Math.round(width), height: Math.round(height) });
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, [ref, enabled]);

  return size;
}
