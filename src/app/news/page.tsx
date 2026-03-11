'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './news.module.css';

const ITEMS_PER_PAGE = 6;
const TAGS_NEWS = ['All', 'Industry', 'DGCA', 'Global Aviation', 'Airline'];

const ALL_NEWS = [
  { tag:'Industry', date:'10 March 2025', title:'IndiGo Announces 500 First Officer Vacancies for 2025–26', excerpt:'India\'s largest carrier opens one of its biggest recruitment drives in five years, with positions across its A320 and ATR fleets.', source:'Aviation Week', slug:'indigo-500-fo-2025' },
  { tag:'DGCA', date:'4 March 2025', title:'DGCA Updates CPL Medical Standards — New AME Circular Effective April 2025', excerpt:'The DGCA has issued revised Class 2 medical examination guidelines effective April 1, 2025. Key changes for pilot training applicants.', source:'DGCA India', slug:'dgca-medical-circular-april-2025' },
  { tag:'Global Aviation', date:'28 Feb 2025', title:'IATA Forecasts India to Become World\'s Third Largest Aviation Market by 2030', excerpt:'IATA revises its India forecast upward, citing rapid fleet expansion, new route launches, and growing domestic passenger demand.', source:'IATA', slug:'iata-india-third-largest-2030' },
  { tag:'Airline', date:'20 Feb 2025', title:'Air India Expands Fleet by 40 Aircraft — Recruitment Push Expected in Q3 2025', excerpt:'Air India confirms delivery schedule for 40 new narrowbody aircraft, signalling significant recruitment activity for pilots and cabin crew.', source:'The Hindu Business', slug:'air-india-fleet-expansion-2025' },
  { tag:'DGCA', date:'15 Feb 2025', title:'DGCA Increases FBS Simulator Hours Acceptance for CPL Applicants', excerpt:'Under a new amendment, up to 40 hours of approved FBS simulator time can now be counted toward the total flight time requirement for CPL issuance.', source:'DGCA India', slug:'dgca-fbs-hours-increase-cpl' },
  { tag:'Industry', date:'8 Feb 2025', title:'SpiceJet Returns to Profit — Announces 200 Cabin Crew Positions', excerpt:'Following restructuring, SpiceJet signals confidence with a cabin crew hiring drive targeting experienced and fresh candidates from certified academies.', source:'Mint', slug:'spicejet-cabin-crew-200-positions' },
  { tag:'Global Aviation', date:'1 Feb 2025', title:'Emirates Resumes India Recruitment — 300 Cabin Crew Positions Open', excerpt:'Emirates HR teams return to India for a structured recruitment campaign, targeting candidates from recognised cabin crew training programmes.', source:'Gulf News', slug:'emirates-india-cabin-crew-300' },
  { tag:'Industry', date:'25 Jan 2025', title:'India To Add 1,000+ New Aircraft by 2030 — CAPA India Forecast', excerpt:'Aviation consultancy CAPA India projects fleet additions across IndiGo, Air India, Akasa, and emerging LCCs as Indian air travel demand hits record levels.', source:'CAPA India', slug:'india-1000-aircraft-2030-capa' },
  { tag:'DGCA', date:'18 Jan 2025', title:'DGCA Issues Advisory on CPL Knowledge Test Scheduling — New Portal Launch', excerpt:'DGCA launches an updated online portal for CPL ground examination scheduling, replacing the legacy system. Changes effective February 2025.', source:'DGCA India', slug:'dgca-cpl-test-portal-launch' },
  { tag:'Airline', date:'10 Jan 2025', title:'Akasa Air Expands to 8 New Cities — Pilot Hiring Programme Announced', excerpt:'India\'s newest airline Akasa Air continues rapid network expansion with fresh recruitment for Boeing 737 MAX first officers.', source:'Aviation Week', slug:'akasa-air-8-cities-pilot-hiring' },
  { tag:'Industry', date:'3 Jan 2025', title:'Pilot Shortage to Reach 80,000 in Asia-Pacific by 2032 — Boeing Report', excerpt:'Boeing\'s annual Pilot and Technician Outlook confirms Asia-Pacific will be the world\'s most pilot-short region by 2032, with India leading demand growth.', source:'Boeing', slug:'pilot-shortage-asia-pacific-boeing' },
  { tag:'Global Aviation', date:'27 Dec 2024', title:'Qatar Airways Signs MoU with Indian Aviation Academy Network for Cabin Crew Placement', excerpt:'Qatar Airways\' talent acquisition team formalises a partnership framework with Indian aviation training institutes for structured cabin crew entry pathways.', source:'ATW', slug:'qatar-airways-india-cabin-crew-mou' },
];

export default function NewsPage() {
  const [activeTag, setActiveTag] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeTag === 'All'
    ? ALL_NEWS
    : ALL_NEWS.filter(p => p.tag === activeTag);

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
            <span className={s.bcCurrent}>News</span>
          </div>
          <div className={s.eyebrow}>Industry · DGCA · Global Aviation</div>
          <h1 className={s.pageH1}>
            Latest Aviation<br/><em>News.</em>
          </h1>
          <p className={s.pageSub}>
            Recruitment drives, regulatory updates, DGCA circulars, and global aviation
            market intelligence — the news that matters to aviation students and professionals.
          </p>
        </div>
      </section>

      {/* FILTER / TAG BAR */}
      <div className={s.filterBar}>
        {TAGS_NEWS.map(tag => (
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
            <Link href={`/news/${post.slug}`} className={s.postCard} key={i}>
              <div className={s.postCardInner}>
                <div className={s.postMeta}>
                  <span className={s.postTag}>{post.tag}</span>
                  <span className={s.postSource}>{post.source}</span>
                  <span className={s.postDate}>{post.date}</span>
                </div>
                <h2 className={s.postTitle}>{post.title}</h2>
                <p className={s.postExcerpt}>{post.excerpt}</p>
                <div className={s.postFooter}>
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
