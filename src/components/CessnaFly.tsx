'use client';
import s from './CessnaFly.module.css';

interface Props {
  direction?: 'left' | 'right';
  size?: number;
  opacity?: number;
  top?: string;
  delay?: string;
}

export default function CessnaFly({
  direction = 'right',
  size = 48,
  opacity = 0.12,
  top = '60%',
  delay = '0s',
}: Props) {
  return (
    <div
      className={`${s.wrap} ${direction === 'left' ? s.wrapLeft : s.wrapRight}`}
      style={{ '--delay': delay, '--size': `${size}px`, '--opacity': opacity, '--top': top } as React.CSSProperties}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 80 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        style={{ transform: direction === 'left' ? 'scaleX(-1)' : 'none' }}
      >
        {/* Cessna 172 simplified silhouette */}
        {/* Fuselage */}
        <path d="M8 16 Q20 12 40 14 Q58 16 72 13 L76 14 L72 16 Q58 18 40 16 Q20 17 8 20 Z" fill="currentColor"/>
        {/* Main wing */}
        <path d="M28 14 L32 4 L46 4 L44 14 Z" fill="currentColor"/>
        <path d="M28 16 L30 26 L44 26 L44 16 Z" fill="currentColor"/>
        {/* Tail fin */}
        <path d="M10 14 L6 8 L12 12 Z" fill="currentColor"/>
        {/* Tail horizontal */}
        <path d="M10 16 L4 18 L10 18 Z" fill="currentColor"/>
        {/* Nose */}
        <path d="M72 14 L78 15 L72 16 Z" fill="currentColor"/>
      </svg>
    </div>
  );
}
