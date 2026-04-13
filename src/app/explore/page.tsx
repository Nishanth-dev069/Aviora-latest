'use client';
import Link from 'next/link';
import { useState } from 'react';
import s from './explore.module.css';

const CONTENT = [
  {
    type: 'Gallery',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    title: 'Runway Operations',
    cols: 2,
    rows: 2, // Large featured item
  },
  {
    type: 'Blog',
    tag: 'Career Guide',
    date: 'March 2025',
    title: 'How to Become a Commercial Pilot in India (2025)',
    excerpt: 'A step-by-step roadmap for aspiring Indian pilots, from choosing the right academy to landing your First Officer role.',
    readTime: '12 min',
    slug: 'how-to-become-commercial-pilot-india-2025',
    cols: 1,
    rows: 1,
  },
  {
    type: 'News',
    tag: 'Industry',
    date: '10 March 2025',
    source: 'Aviation Week',
    title: 'IndiGo Announces 500 First Officer Vacancies',
    excerpt: 'India\'s largest carrier opens one of its biggest recruitment drives across its A320 and ATR fleets.',
    slug: 'indigo-500-first-officer-2025',
    cols: 1,
    rows: 1,
  },
  {
    type: 'Gallery',
    img: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    title: 'Training Flight — Cessna 172',
    cols: 1,
    rows: 1,
  },
  {
    type: 'Blog',
    tag: 'DGCA Exams',
    date: 'February 2025',
    title: 'The 5 DGCA Ground School Papers Strategy',
    excerpt: 'Air Navigation, Air Regulations, Meteorology, Technical General, Technical Specific. Everything you need to know.',
    readTime: '9 min',
    slug: 'dgca-ground-school-5-papers-guide',
    cols: 2,
    rows: 1, // Medium featured wide
  },
  {
    type: 'Gallery',
    img: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
    title: 'USA Training — Arizona',
    cols: 1,
    rows: 2, // Tall
  },
  {
    type: 'News',
    tag: 'DGCA',
    date: '4 March 2025',
    source: 'DGCA India',
    title: 'DGCA Updates CPL Medical Standards',
    excerpt: 'The Directorate General of Civil Aviation has issued revised Class 2 medical examination guidelines.',
    slug: 'dgca-cpl-medical-standards-april-2025',
    cols: 1,
    rows: 1,
  },
  {
    type: 'Blog',
    tag: 'Cabin Crew',
    date: 'January 2025',
    title: 'Cabin Crew Salaries & Airline Expectations',
    excerpt: 'A realistic look at the cabin crew profession in India and how to position yourself ahead of the competition.',
    readTime: '8 min',
    slug: 'cabin-crew-career-india-2025',
    cols: 1,
    rows: 1,
  },
  {
    type: 'Gallery',
    img: 'https://images.unsplash.com/photo-1559628233-100c798642d8?w=800&q=80',
    title: 'Golden Hour — Cockpit',
    cols: 2,
    rows: 1,
  },
];

const FILTERS = ['All', 'Gallery', 'Blog', 'News'];

export default function ExplorePage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredContent = activeFilter === 'All' 
    ? CONTENT 
    : CONTENT.filter(c => c.type === activeFilter);

  return (
    <main className={s.page}>

      {/* ═══ 1. HERO ═══ */}
      <section className={s.hero}>
        <div className={s.heroBgText}>EXPLORE</div>
        <div className={s.heroContent}>
          <div className={s.eyebrow}>DISCOVER AVIORA</div>
          <h1 className={s.heroH1}>
            Stories, Insights <br/> & Aviation News.
          </h1>
          <p className={s.heroPara}>
            Browse our gallery of real training moments, read expert guides on building an aviation career, and stay current with global aviation news.
          </p>
        </div>
      </section>

      {/* ═══ 2. EXPLORE GRID ═══ */}
      <section className={s.exploreSection}>
        <div className={s.container}>
          
          {/* Filters */}
          <div className={s.filterBar}>
            {FILTERS.map(f => (
              <button 
                key={f}
                className={`${s.filterPill} ${activeFilter === f ? s.pillActive : s.pillInactive}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Masonry Layout */}
          <div className={s.masonryGrid}>
            {filteredContent.map((item, i) => {
              
              if (item.type === 'Gallery') {
                return (
                  <div key={i} className={s.cardItem} style={{ gridColumn: `span ${item.cols}`, gridRow: `span ${item.rows}` }}>
                    <div className={s.galleryCardInner}>
                      <img src={item.img} alt={item.title || "Aviation Training Highlight"} className={s.galleryImg} loading="lazy" width={800} height={600} />
                      <div className={s.galleryOverlay} />
                      <div className={s.galleryCardContent}>
                        <div className={s.cardTypeIcon}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/></svg>
                        </div>
                        <h3 className={s.galleryTitle}>{item.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.type === 'Blog') {
                return (
                  <Link href={`/blog/${item.slug}`} key={i} className={s.cardItem} style={{ gridColumn: `span ${item.cols}`, gridRow: `span ${item.rows}` }}>
                    <div className={s.articleCardInner}>
                      <div className={s.cardHeader}>
                        <span className={s.cardTag}>{item.tag}</span>
                        <div className={s.cardTypeIcon}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                        </div>
                      </div>
                      <h3 className={s.articleTitle}>{item.title}</h3>
                      <p className={s.articleExcerpt}>{item.excerpt}</p>
                      <div className={s.articleFooter}>
                        <span className={s.articleMeta}>{item.date} · {item.readTime}</span>
                        <span className={s.cardArrow}>→</span>
                      </div>
                    </div>
                  </Link>
                );
              }

              if (item.type === 'News') {
                return (
                  <Link href={`/news/${item.slug}`} key={i} className={s.cardItem} style={{ gridColumn: `span ${item.cols}`, gridRow: `span ${item.rows}` }}>
                    <div className={s.articleCardInner}>
                      <div className={s.cardHeader}>
                        <span className={s.cardTag}>{item.tag}</span>
                        <div className={s.cardTypeIcon}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
                        </div>
                      </div>
                      <h3 className={s.articleTitle}>{item.title}</h3>
                      <p className={s.articleExcerpt}>{item.excerpt}</p>
                      <div className={s.articleFooter}>
                        <span className={s.articleMeta}>{item.date} · {item.source}</span>
                        <span className={s.cardArrow}>→</span>
                      </div>
                    </div>
                  </Link>
                );
              }

              return null;
            })}
          </div>

        </div>
      </section>

    </main>
  );
}
