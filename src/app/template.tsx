'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 20);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.60s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.60s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }}>
      {children}
    </div>
  );
}
