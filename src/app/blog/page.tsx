'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './blog.module.css';

const ITEMS_PER_PAGE = 6;
const TAGS_BLOG = ['All', 'Career Guide', 'DGCA Exams', 'Flight Training', 'Cabin Crew', 'Industry', 'Medical'];

const ALL_POSTS = [
  { tag:'Career Guide', date:'March 2025', title:'How to Become a Commercial Pilot in India — The Complete 2025 Guide', excerpt:'From choosing the right training academy to passing your DGCA exams and landing your first First Officer role — a step-by-step roadmap.', readTime:'12 min', slug:'how-to-become-commercial-pilot-india-2025' },
  { tag:'DGCA Exams', date:'February 2025', title:'The 5 DGCA Ground School Papers — What to Study and How to Pass First Time', excerpt:'Air Navigation, Air Regulations, Meteorology, Technical General, Technical Specific. Everything you need about preparation strategy and common failure traps.', readTime:'9 min', slug:'dgca-ground-school-5-papers-guide' },
  { tag:'Cabin Crew', date:'January 2025', title:'Cabin Crew Career in 2025 — Salaries, Airlines, and What They Actually Look For', excerpt:'A realistic look at the cabin crew profession in India — what IndiGo, Air India, and Emirates want, and how to position yourself ahead of competition.', readTime:'8 min', slug:'cabin-crew-career-india-2025' },
  { tag:'Flight Training', date:'January 2025', title:'Why Indian Pilot Cadets Train in the USA — And Why It Matters for Your Career', excerpt:'The airspace, weather, infrastructure, and FAA Part 141 advantage explained. Why 90% of serious aviation academies send their students overseas for flight hours.', readTime:'7 min', slug:'why-train-in-usa-indian-pilots' },
  { tag:'DGCA Exams', date:'December 2024', title:'Air Navigation for DGCA CPL — The Complete Study Breakdown', excerpt:'The subject with the highest failure rate. Charts, VOR/NDB, dead reckoning, flight planning — how to approach every topic systematically and pass first attempt.', readTime:'14 min', slug:'dgca-air-navigation-cpl-study-guide' },
  { tag:'Industry', date:'December 2024', title:'India\'s Aviation Boom — What It Means for Pilot and Cabin Crew Careers in 2025–30', excerpt:'Fleet expansion, new routes, and 10,000 pilots needed by 2030. The numbers behind India\'s aviation growth and what it means for you if you start training today.', readTime:'10 min', slug:'india-aviation-boom-careers-2025-2030' },
  { tag:'Medical', date:'November 2024', title:'DGCA Class 2 Medical — What to Expect and How to Prepare', excerpt:'The full Class 2 medical examination explained: vision, hearing, cardiovascular, ENT. What disqualifies you, what doesn\'t, and how to find an approved AME.', readTime:'8 min', slug:'dgca-class-2-medical-guide' },
  { tag:'Career Guide', date:'November 2024', title:'First Officer to Captain — The Career Progression Timeline for Indian Pilots', excerpt:'How long does it take? What does it cost? How many hours? The realistic progression from CPL to command, with actual timelines from Indian airline first officers.', readTime:'11 min', slug:'first-officer-to-captain-career-timeline' },
  { tag:'Cabin Crew', date:'October 2024', title:'IndiGo Cabin Crew Recruitment 2025 — What the Walk-in Process Actually Looks Like', excerpt:'From the initial document check to the final interview, a realistic account of what IndiGo\'s recruitment process involves and how to prepare for each stage.', readTime:'7 min', slug:'indigo-cabin-crew-recruitment-process' },
  { tag:'Flight Training', date:'October 2024', title:'Cessna 172 — The Training Aircraft That Has Produced More Pilots Than Any Other', excerpt:'Why the world\'s most popular training aircraft is used by Aviora cadets in Arizona. The C172 airframe, its limitations, and what it teaches student pilots.', readTime:'6 min', slug:'cessna-172-training-aircraft-guide' },
  { tag:'DGCA Exams', date:'September 2024', title:'Aviation Meteorology for DGCA CPL — Thunderstorms, Icing, and the Questions That Fail Students', excerpt:'The tricky topics: microbursts, mountain wave, structural icing, and tropical weather. A topic-by-topic breakdown with the question types that appear most often.', readTime:'10 min', slug:'dgca-aviation-meteorology-cpl-guide' },
  { tag:'Industry', date:'September 2024', title:'How to Read a METAR and TAF — The Pilot\'s Weather Briefing Made Simple', excerpt:'METAR and TAF decoding from scratch. Every abbreviation explained, with real-world examples and the decision-making framework commercial pilots use on dispatch.', readTime:'9 min', slug:'how-to-read-metar-taf-pilot-guide' },
];

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeTag === 'All'
    ? ALL_POSTS
    : ALL_POSTS.filter(p => p.tag === activeTag);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <main className={s.page}>

      {/* PAGE HEADER */}
      <section className={s.pageHeader}>
        <div className={s.headerBg} />
        <div className={s.headerContent}>
          <div className={s.breadcrumb}>
            <Link href="/explore" className={s.bcLink}>← Explore</Link>
            <span className={s.bcSep}>/</span>
            <span className={s.bcCurrent}>Blog</span>
          </div>
          <div className={s.eyebrow}>Knowledge · Career Guides</div>
          <h1 className={s.pageH1}>
            Aviation Guides<br/><em>Written by Pilots.</em>
          </h1>
          <p className={s.pageSub}>
            DGCA exam breakdowns, career roadmaps, and industry insight — written
            by pilots and aviation professionals for people serious about this career.
          </p>
        </div>
      </section>

      {/* FILTER / TAG BAR */}
      <div className={s.filterBar}>
        {TAGS_BLOG.map(tag => (
          <button
            key={tag}
            className={`${s.filterBtn} ${activeTag === tag ? s.filterBtnActive : ''}`}
            onClick={() => { setActiveTag(tag); setPage(1); }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* POSTS GRID */}
      <section className={s.postsSection}>
        <div className={s.postsGrid}>
          {visible.map((post, i) => (
            <Link href={`/blog/${post.slug}`} className={s.postCard} key={i}>
              <div className={s.postCardInner}>
                <div className={s.postMeta}>
                  <span className={s.postTag}>{post.tag}</span>
                  <span className={s.postDate}>{post.date}</span>
                </div>
                <h2 className={s.postTitle}>{post.title}</h2>
                <p className={s.postExcerpt}>{post.excerpt}</p>
                <div className={s.postFooter}>
                  <span className={s.postReadTime}>{post.readTime}</span>
                  <span className={s.postArrow}>Read →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className={s.pagination}>
            <button
              className={s.pageBtn}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >← Prev</button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`${s.pageNum} ${page === i + 1 ? s.pageNumActive : ''}`}
                onClick={() => setPage(i + 1)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
            <button
              className={s.pageBtn}
              onClick={() => setPage(p => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
            >Next →</button>
          </div>
        )}
      </section>

    </main>
  );
}
