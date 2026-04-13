'use client';

type Stat = { label: string; value: string };

type ProgramHeroProps = {
  program: {
    title: string;
    eyebrow: string;
    sub: string;
    img: string;
    heroOverlay: string;
    stats: Stat[];
  };
};

export default function ProgramHero({ program }: ProgramHeroProps) {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'flex-end',
        paddingBottom: '80px',
        backgroundImage: `url(${program.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Gradient overlay — always visible even if image fails */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: program.heroOverlay,
          zIndex: 1,
        }}
      />

      {/* Bottom content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 80px',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        {/* Eyebrow */}
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#6491DE',
            margin: '0 0 16px 0',
          }}
        >
          {program.eyebrow}
        </p>

        {/* Title with left accent bar */}
        <div style={{ borderLeft: '3px solid #6491DE', paddingLeft: '24px' }}>
          <h1
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(36px, 5vw, 62px)',
              fontWeight: 700,
              color: '#F1F1F1',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            {program.title}
          </h1>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontStyle: 'italic',
              color: 'rgba(241, 241, 241, 0.8)',
              margin: '12px 0 0 0',
              fontWeight: 400,
            }}
          >
            {program.sub}
          </p>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            marginTop: '36px',
            flexWrap: 'wrap',
          }}
        >
          {program.stats.map((s, i) => (
            <div
              key={i}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '12px',
                padding: '16px 24px',
                minWidth: '160px',
              }}
            >
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(241, 241, 241, 0.6)',
                  margin: '0 0 6px 0',
                }}
              >
                {s.label}
              </p>
              <p
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '20px',
                  fontWeight: 700,
                  color: '#F1F1F1',
                  margin: 0,
                }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
