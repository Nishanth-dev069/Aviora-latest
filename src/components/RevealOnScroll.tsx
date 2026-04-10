'use client';
import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({ children, delay = 0, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}ms`;
          el.classList.add('revealed');
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: 'translateY(24px)',
        transition: 'opacity 0.60s cubic-bezier(0.25,0.46,0.45,0.94), transform 0.60s cubic-bezier(0.25,0.46,0.45,0.94)',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}
