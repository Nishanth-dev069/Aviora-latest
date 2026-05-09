import React from 'react';
import styles from './TrainingPartnersTicker.module.css';

const PARTNERS = [
  { name: 'IndiGo',        color: '#6441C1', domain: 'goindigo.in', abbr: 'IG' },
  { name: 'Air India',     color: '#C8102E', domain: 'airindia.com', abbr: 'AI' },
  { name: 'Emirates',      color: '#D71921', domain: 'emirates.com', abbr: 'EK' },
  { name: 'Qatar Airways', color: '#5C0632', domain: 'qatarairways.com', abbr: 'QA' },
  { name: 'SpiceJet',      color: '#E2231A', domain: 'spicejet.com', abbr: 'SJ' },
  { name: 'Etihad',        color: '#BD8B13', domain: 'etihad.com', abbr: 'EY' },
  { name: 'Akasa Air',     color: '#FF6621', domain: 'akasaair.com', abbr: 'AK' },
  { name: 'Fly91',         color: '#000000', domain: 'fly91.in', abbr: 'F9' },
  { name: 'StarAir',       color: '#D71921', domain: 'starair.in', abbr: 'SA' },
  { name: 'FlyBig',        color: '#000000', domain: 'flybig.in', abbr: 'FB' },
];

export default function TrainingPartnersTicker() {
  const doubled = [...PARTNERS, ...PARTNERS];

  return (
    <section className={styles.container}>
      <p className={styles.label}>
        Trusted by India&rsquo;s Leading Aviation Organisations
      </p>
      <div className={styles.track}>
        <div className={styles.tape}>
          {doubled.map((p, i) => (
            <div key={i} className={styles.card}>
              {/* Typographic logo — greyscale by default, colored on hover */}
              <img 
                src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://${p.domain}&size=128`} 
                alt={`${p.name} logo`}
                style={{ width: '28px', height: '28px', objectFit: 'contain', borderRadius: '4px' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling!.setAttribute('style', `display: inline-flex; --brand-color: ${p.color}`);
                }}
              />
              <span
                className={styles.logoMark}
                style={{ '--brand-color': p.color, display: 'none' } as React.CSSProperties}
              >
                {p.abbr}
              </span>
              <span className={styles.name}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
