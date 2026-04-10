import Link from 'next/link';
import s from './newspost.module.css';

const ALL_NEWS = [
  { tag:'Industry', date:'10 March 2025', title:'IndiGo Announces 500 First Officer Vacancies for 2025–26', excerpt:"India's largest carrier opens one of its biggest recruitment drives in five years, with positions across its A320 and ATR fleets.", source:'Aviation Week', slug:'indigo-500-fo-2025', img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=60' },
  { tag:'DGCA', date:'4 March 2025', title:'DGCA Updates CPL Medical Standards — New AME Circular Effective April 2025', excerpt:'The DGCA has issued revised Class 2 medical examination guidelines effective April 1, 2025. Key changes for pilot training applicants.', source:'DGCA India', slug:'dgca-medical-circular-april-2025', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=60' },
  { tag:'Global Aviation', date:'28 Feb 2025', title:"IATA Forecasts India to Become World's Third Largest Aviation Market by 2030", excerpt:"IATA revises its India forecast upward, citing rapid fleet expansion, new route launches, and growing domestic passenger demand.", source:'IATA', slug:'iata-india-third-largest-2030', img:'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&q=60' },
  { tag:'Airline', date:'20 Feb 2025', title:'Air India Expands Fleet by 40 Aircraft — Recruitment Push Expected in Q3 2025', excerpt:'Air India confirms delivery schedule for 40 new narrowbody aircraft, signalling significant recruitment activity for pilots and cabin crew.', source:'The Hindu Business', slug:'air-india-fleet-expansion-2025', img:'https://images.unsplash.com/photo-1613690399151-65ea69478674?w=1920&q=60' },
  { tag:'DGCA', date:'15 Feb 2025', title:'DGCA Increases FBS Simulator Hours Acceptance for CPL Applicants', excerpt:'Under a new amendment, up to 40 hours of approved FBS simulator time can now be counted toward the total flight time requirement for CPL issuance.', source:'DGCA India', slug:'dgca-fbs-hours-increase-cpl', img:'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=60' },
  { tag:'Industry', date:'8 Feb 2025', title:'SpiceJet Returns to Profit — Announces 200 Cabin Crew Positions', excerpt:"Following restructuring, SpiceJet signals confidence with a cabin crew hiring drive targeting experienced and fresh candidates from certified academies.", source:'Mint', slug:'spicejet-cabin-crew-200-positions', img:'https://images.unsplash.com/photo-1540339832862-474599807836?w=1920&q=60' },
  { tag:'Global Aviation', date:'1 Feb 2025', title:'Emirates Resumes India Recruitment — 300 Cabin Crew Positions Open', excerpt:"Emirates HR teams return to India for a structured recruitment campaign, targeting candidates from recognised cabin crew training programmes.", source:'Gulf News', slug:'emirates-india-cabin-crew-300', img:'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=60' },
  { tag:'Industry', date:'25 Jan 2025', title:'India To Add 1,000+ New Aircraft by 2030 — CAPA India Forecast', excerpt:"Aviation consultancy CAPA India projects fleet additions across IndiGo, Air India, Akasa, and emerging LCCs as Indian air travel demand hits record levels.", source:'CAPA India', slug:'india-1000-aircraft-2030-capa', img:'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1920&q=60' },
  { tag:'DGCA', date:'18 Jan 2025', title:'DGCA Issues Advisory on CPL Knowledge Test Scheduling — New Portal Launch', excerpt:'DGCA launches an updated online portal for CPL ground examination scheduling, replacing the legacy system. Changes effective February 2025.', source:'DGCA India', slug:'dgca-cpl-test-portal-launch', img:'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&q=60' },
  { tag:'Airline', date:'10 Jan 2025', title:"Akasa Air Expands to 8 New Cities — Pilot Hiring Programme Announced", excerpt:"India's newest airline Akasa Air continues rapid network expansion with fresh recruitment for Boeing 737 MAX first officers.", source:'Aviation Week', slug:'akasa-air-8-cities-pilot-hiring', img:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=60' },
  { tag:'Industry', date:'3 Jan 2025', title:'Pilot Shortage to Reach 80,000 in Asia-Pacific by 2032 — Boeing Report', excerpt:"Boeing's annual Pilot and Technician Outlook confirms Asia-Pacific will be the world's most pilot-short region by 2032, with India leading demand growth.", source:'Boeing', slug:'pilot-shortage-asia-pacific-boeing', img:'https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=60' },
  { tag:'Global Aviation', date:'27 Dec 2024', title:"Qatar Airways Signs MoU with Indian Aviation Academy Network for Cabin Crew Placement", excerpt:"Qatar Airways' talent acquisition team formalises a partnership framework with Indian aviation training institutes for structured cabin crew entry pathways.", source:'ATW', slug:'qatar-airways-india-cabin-crew-mou', img:'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=60' },
];

const PLACEHOLDER_BODY = [
  "The announcement marks a significant shift in the Indian aviation employment landscape. Industry analysts who have tracked hiring patterns over the past decade describe this as the most concentrated period of airline recruitment activity since the post-COVID recovery began in 2022.",
  "For pilot cadets and cabin crew trainees currently in programme, the timing is strategically significant. The typical lag between training completion and airline interview invitation has compressed — airlines are now approaching academies directly for pre-screened candidate lists rather than waiting for walk-in applicants.",
  "The regulatory environment is also evolving in parallel. Recent DGCA circulars have streamlined the CPL issuance process, reducing the average time between skill test completion and licence issue from 90 days to approximately 45 days in most cases.",
  "Cabin crew recruiting processes at Indian carriers have shifted toward structured, academy-linked pathways rather than open walk-in drives. Airlines are increasingly partnering with certified training institutes to access pre-screened candidates who have completed formal grooming, emergency procedure, and service standards training.",
  "The implications for those considering aviation training are straightforward: the window between training completion and first employable opportunity is shorter now than it has been in the past five years. Cadets entering programmes in 2025 will graduate into a different market than those who began in 2022.",
];

type Props = { params: { slug: string } };

export default function NewsPostPage({ params }: Props) {
  const post = ALL_NEWS.find(p => p.slug === params.slug) ?? ALL_NEWS[0];
  const related = ALL_NEWS.filter(p => p.slug !== post.slug && p.tag === post.tag).slice(0, 3);

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <img src={post.img} alt={post.title} className={s.heroImg} />
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/news" className={s.bcLink}>← News</Link>
            <span className={s.bcSep}>›</span>
            <span className={s.bcCurrent}>{post.tag}</span>
          </nav>
          <div className={s.heroMeta}>
            <span className={s.postTag}>{post.tag}</span>
            <span className={s.postSource}>{post.source}</span>
            <span className={s.postDate}>{post.date}</span>
          </div>
          <h1 className={s.heroH1}>{post.title}</h1>
        </div>
      </section>

      {/* ARTICLE */}
      <div className={s.articleWrap}>
        <div className={s.articleInner}>

          {/* Source attribution bar */}
          <div className={s.sourceBar}>
            <span className={s.sourceLabel}>Source</span>
            <span className={s.sourceName}>{post.source}</span>
            <span className={s.sourceDate}>{post.date}</span>
          </div>

          <p className={s.lead}>{post.excerpt}</p>
          <hr className={s.divider} />

          {PLACEHOLDER_BODY.map((para, i) => (
            <p key={i} className={s.bodyPara}>{para}</p>
          ))}

          <blockquote className={s.pullQuote}>
            &ldquo;The window between training completion and first employable opportunity is shorter now
            than it has been in the past five years. Cadets entering programmes in 2025 will graduate into
            a different market.&rdquo;
          </blockquote>

          {PLACEHOLDER_BODY.slice(0, 2).map((para, i) => (
            <p key={`b${i}`} className={s.bodyPara}>{para}</p>
          ))}

          <hr className={s.divider} />

          <div className={s.inlineCta}>
            <p className={s.inlineCtaText}>
              The hiring market is active now. Begin your training with Aviora — applications are open.
            </p>
            <Link href="/admissions" className={s.inlineCtaBtn}>Apply Now →</Link>
          </div>

        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className={s.relatedSection}>
          <div className={s.relatedInner}>
            <p className={s.relatedEye}>More from {post.tag}</p>
            <h2 className={s.relatedH2}>Related News</h2>
            <div className={s.relatedGrid}>
              {related.map(p => (
                <Link key={p.slug} href={`/news/${p.slug}`} className={s.relatedCard}>
                  <div className={s.relatedCardAccent} />
                  <div className={s.relatedMeta}>
                    <span className={s.relatedTag}>{p.tag}</span>
                    <span className={s.relatedDate}>{p.date}</span>
                  </div>
                  <h3 className={s.relatedTitle}>{p.title}</h3>
                  <span className={s.relatedArrow}>Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}
