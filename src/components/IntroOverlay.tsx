'use client';

import { useEffect, useState } from 'react';
import styles from './IntroOverlay.module.css';

const LETTERS = ['A', 'V', 'I', 'O', 'R', 'A'];

export default function IntroOverlay() {
  const [phase, setPhase] = useState<'in' | 'hold' | 'out' | 'done'>('in');

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = 'hidden';

    // Letters finish animating in at ~1100ms → hold briefly → exit
    const holdTimer  = setTimeout(() => setPhase('hold'), 1200);
    const exitTimer  = setTimeout(() => setPhase('out'),  2200);
    const doneTimer  = setTimeout(() => {
      setPhase('done');
      document.body.style.overflow = '';
    }, 3100);

    return () => {
      clearTimeout(holdTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className={`${styles.overlay} ${phase === 'out' ? styles.exit : ''}`}>
      {/* Scan line */}
      <div className={styles.scanLine} />

      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logoRow} aria-label="AVIORA">
          {LETTERS.map((char, i) => (
            <span
              key={i}
              className={styles.letter}
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Divider line — slides out from center */}
        <div className={styles.divider}>
          <div className={styles.dividerLine} />
        </div>

        {/* Sub-tagline */}
        <div className={styles.tagline}>
          <span className={styles.taglineText}>Cleared for Departure · Runway 28L</span>
        </div>
      </div>

      {/* Corner marks */}
      <div className={`${styles.corner} ${styles.cornerTL}`} />
      <div className={`${styles.corner} ${styles.cornerTR}`} />
      <div className={`${styles.corner} ${styles.cornerBL}`} />
      <div className={`${styles.corner} ${styles.cornerBR}`} />
    </div>
  );
}
