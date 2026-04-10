import Link from 'next/link';
import s from './blogpost.module.css';

const ALL_POSTS = [
  { tag:'Career Guide', date:'March 2025', title:'How to Become a Commercial Pilot in India — The Complete 2025 Guide', excerpt:'From choosing the right training academy to passing your DGCA exams and landing your first First Officer role — a step-by-step roadmap.', readTime:'12 min', slug:'how-to-become-commercial-pilot-india-2025', img:'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=1920&q=60' },
  { tag:'DGCA Exams', date:'February 2025', title:'The 5 DGCA Ground School Papers — What to Study and How to Pass First Time', excerpt:'Air Navigation, Air Regulations, Meteorology, Technical General, Technical Specific. Everything you need about preparation strategy and common failure traps.', readTime:'9 min', slug:'dgca-ground-school-5-papers-guide', img:'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1920&q=60' },
  { tag:'Cabin Crew', date:'January 2025', title:'Cabin Crew Career in 2025 — Salaries, Airlines, and What They Actually Look For', excerpt:'A realistic look at the cabin crew profession in India — what IndiGo, Air India, and Emirates want, and how to position yourself ahead of competition.', readTime:'8 min', slug:'cabin-crew-career-india-2025', img:'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=1920&q=60' },
  { tag:'Flight Training', date:'January 2025', title:'Why Indian Pilot Cadets Train in the USA — And Why It Matters for Your Career', excerpt:'The airspace, weather, infrastructure, and FAA Part 141 advantage explained. Why 90% of serious aviation academies send their students overseas for flight hours.', readTime:'7 min', slug:'why-train-in-usa-indian-pilots', img:'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=1920&q=60' },
  { tag:'DGCA Exams', date:'December 2024', title:'Air Navigation for DGCA CPL — The Complete Study Breakdown', excerpt:'The subject with the highest failure rate. Charts, VOR/NDB, dead reckoning, flight planning — how to approach every topic systematically and pass first attempt.', readTime:'14 min', slug:'dgca-air-navigation-cpl-study-guide', img:'https://images.unsplash.com/photo-1559628233-100c798642d8?w=1920&q=60' },
  { tag:'Industry', date:'December 2024', title:"India's Aviation Boom — What It Means for Pilot and Cabin Crew Careers in 2025–30", excerpt:"Fleet expansion, new routes, and 10,000 pilots needed by 2030. The numbers behind India's aviation growth and what it means for you if you start training today.", readTime:'10 min', slug:'india-aviation-boom-careers-2025-2030', img:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&q=60' },
  { tag:'Medical', date:'November 2024', title:'DGCA Class 2 Medical — What to Expect and How to Prepare', excerpt:"The full Class 2 medical examination explained: vision, hearing, cardiovascular, ENT. What disqualifies you, what doesn't, and how to find an approved AME.", readTime:'8 min', slug:'dgca-class-2-medical-guide', img:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1920&q=60' },
  { tag:'Career Guide', date:'November 2024', title:'First Officer to Captain — The Career Progression Timeline for Indian Pilots', excerpt:'How long does it take? What does it cost? How many hours? The realistic progression from CPL to command, with actual timelines from Indian airline first officers.', readTime:'11 min', slug:'first-officer-to-captain-career-timeline', img:'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=60' },
  { tag:'Cabin Crew', date:'October 2024', title:"IndiGo Cabin Crew Recruitment 2025 — What the Walk-in Process Actually Looks Like", excerpt:"From the initial document check to the final interview, a realistic account of what IndiGo's recruitment process involves and how to prepare for each stage.", readTime:'7 min', slug:'indigo-cabin-crew-recruitment-process', img:'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=60' },
  { tag:'Flight Training', date:'October 2024', title:"Cessna 172 — The Training Aircraft That Has Produced More Pilots Than Any Other", excerpt:"Why the world's most popular training aircraft is used by Aviora cadets in Arizona. The C172 airframe, its limitations, and what it teaches student pilots.", readTime:'6 min', slug:'cessna-172-training-aircraft-guide', img:'https://images.unsplash.com/photo-1474321226871-e59f01059ef5?w=1920&q=60' },
  { tag:'DGCA Exams', date:'September 2024', title:'Aviation Meteorology for DGCA CPL — Thunderstorms, Icing, and the Questions That Fail Students', excerpt:'The tricky topics: microbursts, mountain wave, structural icing, and tropical weather. A topic-by-topic breakdown with the question types that appear most often.', readTime:'10 min', slug:'dgca-aviation-meteorology-cpl-guide', img:'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=1920&q=60' },
  { tag:'Industry', date:'September 2024', title:"How to Read a METAR and TAF — The Pilot's Weather Briefing Made Simple", excerpt:"METAR and TAF decoding from scratch. Every abbreviation explained, with real-world examples and the decision-making framework commercial pilots use on dispatch.", readTime:'9 min', slug:'how-to-read-metar-taf-pilot-guide', img:'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1920&q=60' },
];

const PLACEHOLDER_BODY = [
  "Aviation in India is at an inflection point. The combination of fleet expansion, route liberalisation, and a young, aspirational population has created a pilot demand the country has never seen. Understanding the landscape — and positioning yourself correctly within it — is the most important career decision you will make.",
  "The DGCA Commercial Pilot Licence pathway begins with ground school. Four papers: Air Navigation, Aviation Meteorology, Air Regulations, and Technical General/Specific. Each has its own failure points. Air Navigation has the highest first-attempt failure rate — not because the material is the hardest, but because most candidates underestimate the chart work and VOR/NDB intercept calculations.",
  "Flight training follows ground school. In India, the regulatory baseline is 250 hours. The quality of those hours — the airspace they are flown in, the weather patterns encountered, the navigation techniques practiced — determines whether a pilot emerges from training ready for a simulator assessment or not.",
  "The USA advantage comes from exactly that: complex airspace, variable weather, high-density traffic environments, and FAA-standard aerodrome procedures. A cadet who has completed cross-country flights across Arizona and California has built a different level of situational awareness than one who has only flown Indian circuits.",
  "Type rating follows CPL issuance. The A320, B737, and ATR are the three aircraft you will encounter in Indian airline hiring. The type rating is conducted in a Level D Full Flight Simulator — 32 hours minimum — and culminates in a DGCA Licence Skill Test conducted by a Type Rating Examiner.",
  "Placement follows type rating. Airlines do not hire CPL holders directly — they hire type-rated first officers. The sequence from zero to airline right seat, done efficiently, takes approximately 24–30 months from ground school commencement.",
];

type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  const post = ALL_POSTS.find(p => p.slug === params.slug) ?? ALL_POSTS[0];
  const related = ALL_POSTS.filter(p => p.slug !== post.slug && p.tag === post.tag).slice(0, 3);

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        <img src={post.img} alt={post.title} className={s.heroImg} />
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/blog" className={s.bcLink}>← Blog</Link>
            <span className={s.bcSep}>›</span>
            <span className={s.bcCurrent}>{post.tag}</span>
          </nav>
          <div className={s.heroMeta}>
            <span className={s.postTag}>{post.tag}</span>
            <span className={s.postDate}>{post.date}</span>
            <span className={s.postRead}>{post.readTime} read</span>
          </div>
          <h1 className={s.heroH1}>{post.title}</h1>
        </div>
      </section>

      {/* ARTICLE */}
      <div className={s.articleWrap}>
        <div className={s.articleInner}>
          <p className={s.lead}>{post.excerpt}</p>
          <hr className={s.divider} />

          {PLACEHOLDER_BODY.map((para, i) => (
            <p key={i} className={s.bodyPara}>{para}</p>
          ))}

          <blockquote className={s.pullQuote}>
            &ldquo;The sequence from zero to airline right seat, done efficiently, takes approximately
            24–30 months from ground school commencement. Every month of delay has a compounding cost.&rdquo;
          </blockquote>

          {PLACEHOLDER_BODY.slice(0, 2).map((para, i) => (
            <p key={`b${i}`} className={s.bodyPara}>{para}</p>
          ))}

          <hr className={s.divider} />

          <div className={s.inlineCta}>
            <p className={s.inlineCtaText}>
              Ready to start the process? Aviora&apos;s admissions team responds within 48 hours.
            </p>
            <Link href="/admissions" className={s.inlineCtaBtn}>Apply Now →</Link>
          </div>
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className={s.relatedSection}>
          <div className={s.relatedInner}>
            <p className={s.relatedEye}>Continue Reading</p>
            <h2 className={s.relatedH2}>Related Articles</h2>
            <div className={s.relatedGrid}>
              {related.map(p => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className={s.relatedCard}>
                  <div className={s.relatedCardAccent} />
                  <span className={s.relatedTag}>{p.tag}</span>
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
