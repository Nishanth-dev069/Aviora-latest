'use client';

type CurriculumModule = {
  module: string;
  duration: string;
  topics: string[];
};

type ProgramBodyProps = {
  program: {
    overview: string;
    curriculum: CurriculumModule[];
    eligibility: string[];
    careerPaths: string[];
    certification: string;
    outcome: string;
  };
};

export default function ProgramBody({ program }: ProgramBodyProps) {
  return (
    <main>

      {/* ── OVERVIEW ── */}
      <section
        style={{
          background: '#F1F1F1',
          padding: 'clamp(48px, 8vw, 80px) clamp(24px, 8vw, 80px)',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6491DE',
            margin: '0 0 20px 0',
          }}
        >
          Programme Overview
        </p>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '17px',
            color: '#0D1B2A',
            lineHeight: 1.8,
            maxWidth: '760px',
            margin: 0,
            fontWeight: 400,
          }}
        >
          {program.overview}
        </p>
      </section>

      {/* ── CURRICULUM ── */}
      <section
        style={{
          background: '#FFFFFF',
          padding: 'clamp(48px, 8vw, 80px) clamp(24px, 8vw, 80px)',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '10px',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6491DE',
            margin: '0 0 32px 0',
          }}
        >
          Curriculum
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '860px' }}>
          {program.curriculum.map((c, i) => (
            <div
              key={i}
              style={{
                background: '#F1F1F1',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#073D7F',
                  }}
                >
                  {c.module}
                </span>
                <span
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '10px',
                    fontWeight: 600,
                    background: '#073D7F',
                    color: '#F1F1F1',
                    borderRadius: '20px',
                    padding: '3px 10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {c.duration}
                </span>
              </div>
              <ul style={{ margin: 0, paddingLeft: '20px' }}>
                {c.topics.map((t, j) => (
                  <li
                    key={j}
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      color: '#0D1B2A',
                      lineHeight: 1.75,
                    }}
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── ELIGIBILITY + CAREER PATHS ── */}
      <section
        style={{
          background: '#F1F1F1',
          padding: 'clamp(48px, 8vw, 80px) clamp(24px, 8vw, 80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
        }}
      >
        {/* Eligibility */}
        <div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6491DE',
              margin: '0 0 20px 0',
            }}
          >
            Eligibility
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {program.eligibility.map((e, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#073D7F',
                  background: '#FFFFFF',
                  border: '1px solid rgba(7, 61, 127, 0.12)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                }}
              >
                {e}
              </span>
            ))}
          </div>
        </div>

        {/* Career Paths */}
        <div>
          <p
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '10px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#6491DE',
              margin: '0 0 20px 0',
            }}
          >
            Career Paths
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {program.careerPaths.map((c, i) => (
              <span
                key={i}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#073D7F',
                  background: '#FFFFFF',
                  border: '1px solid rgba(7, 61, 127, 0.12)',
                  borderRadius: '20px',
                  padding: '6px 14px',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPLY CTA ── */}
      <section
        style={{
          background: '#073D7F',
          padding: 'clamp(64px, 10vw, 100px) clamp(24px, 8vw, 80px)',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            color: '#F1F1F1',
            margin: '0 0 12px 0',
          }}
        >
          Ready to Take Off?
        </h2>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '16px',
            color: 'rgba(241, 241, 241, 0.75)',
            margin: '0 0 36px 0',
            fontWeight: 400,
          }}
        >
          Seats are limited. Secure your place before the runway closes.
        </p>
        <div
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="/admissions"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#F1F1F1',
              background: '#6491DE',
              border: 'none',
              borderRadius: '9px',
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          >
            Apply Now
          </a>
          <a
            href="/contact"
            style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              color: '#F1F1F1',
              background: 'transparent',
              border: '1px solid rgba(241, 241, 241, 0.4)',
              borderRadius: '9px',
              padding: '14px 32px',
              textDecoration: 'none',
              display: 'inline-block',
              cursor: 'pointer',
            }}
          >
            Speak to Admissions
          </a>
        </div>
        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'rgba(241, 241, 241, 0.4)',
            margin: '32px 0 0 0',
          }}
        >
          {program.certification}
        </p>
      </section>

    </main>
  );
}
