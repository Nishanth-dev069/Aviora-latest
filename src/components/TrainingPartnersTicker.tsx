"use client";

import React from 'react';
import styles from './TrainingPartnersTicker.module.css';

const PARTNERS = [
  { name: 'IndiGo', color: '#6441C1', domain: 'goindigo.in', abbr: 'IG', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/69/IndiGo_Airlines_logo.svg' },
  { name: 'Air India', color: '#C8102E', domain: 'airindia.com', abbr: 'AI', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Air_India_2023_logo.svg' },
  { name: 'Emirates', color: '#D71921', domain: 'emirates.com', abbr: 'EK', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Emirates_logo.svg' },
  { name: 'Qatar Airways', color: '#5C0632', domain: 'qatarairways.com', abbr: 'QA', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Qatar_Airways_Logo.svg' },
  { name: 'SpiceJet', color: '#E2231A', domain: 'spicejet.com', abbr: 'SJ', logoUrl: 'https://upload.wikimedia.org/wikipedia/en/d/d0/SpiceJet_logo.svg' },
  { name: 'Etihad', color: '#BD8B13', domain: 'etihad.com', abbr: 'EY', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Etihad_Airways_Logo.svg' },
  { name: 'Akasa Air', color: '#FF6621', domain: 'akasaair.com', abbr: 'AK', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Akasa_Air_logo.svg' },
  { name: 'Fly91', color: '#000000', domain: 'fly91.in', abbr: 'F9', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Fly91_logo.png' },
  { name: 'StarAir', color: '#D71921', domain: 'starair.in', abbr: 'SA', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Star_Air_Logo.svg' },
  { name: 'FlyBig', color: '#000000', domain: 'flybig.in', abbr: 'FB', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/FlyBig_logo.png' },
];

function PartnerLogo({ partner }: { partner: typeof PARTNERS[0] }) {
  const [failed, setFailed] = React.useState(false);

  if (failed) {
    return <div className={styles.badge}>{partner.abbr}</div>;
  }

  return (
    <div className={styles.logoWrapper}>
      <img
        src={partner.logoUrl}
        alt={`${partner.name} logo`}
        className={styles.logoImage}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

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
              <PartnerLogo partner={p} />
              <span className={styles.name}>{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
