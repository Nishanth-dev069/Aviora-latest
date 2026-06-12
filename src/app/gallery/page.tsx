'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './gallery.module.css';

const ITEMS_PER_PAGE = 9;

const filenames = [
  "SIV03073.webp", "SIV03075.webp", "SIV03079.webp", "SIV03080.webp", "SIV03081.webp",
  "SIV03083.webp", "SIV03084.webp", "SIV03085.webp", "SIV03086.webp", "SIV03092.webp",
  "SIV03094.webp", "SIV03096.webp", "SIV03097.webp", "SIV03099.webp", "SIV03100.webp",
  "SIV03106.webp", "SIV03108.webp", "SIV03115.webp", "SIV03124.webp", "SIV03147.webp",
  "SIV03159.webp", "SIV03182.webp", "SIV03192.webp", "SIV03232.webp", "SIV03233.webp",
  "SIV03237.webp", "SIV03239.webp", "SIV03512.webp", "SIV03521.webp",
  "SIV03552.webp", "SIV03564.webp", "SIV03600.webp", "SIV03617.webp", "SIV03644.webp",
  "SIV03656.webp", "SIV03673.webp", "SIV03685.webp", "SIV03695.webp", "SIV03711.webp"
];

const cats = ['Facility', 'Student Life', 'USA Training'];

const ALL_GALLERY = filenames.map((f, i) => ({
  src: `/gallery/${f}`,
  alt: `Aviora Gallery Image ${i + 1}`,
  cat: cats[i % cats.length],
  caption: 'Aviora Aviation Academy'
}));

const CATS = ['All', 'Facility', 'Student Life', 'USA Training'];

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeCat === 'All'
    ? ALL_GALLERY
    : ALL_GALLERY.filter(i => i.cat === activeCat);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    document.getElementById('gallery-top')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className={s.page}>

      {/* ── HEADER ── */}
      <section className={s.pageHeader}>
        <div className={s.headerBg} />
        <div className={s.headerContent}>
          <div className={s.breadcrumb}>
            <Link href="/explore" className={s.bcLink}>← Explore</Link>
            <span className={s.bcSep}>/</span>
            <span className={s.bcCurrent}>Gallery</span>
          </div>
          <div className={s.eyebrow}>Photography</div>
          <h1 className={s.pageH1}>
            The Aviora World<br/><em>in Frames.</em>
          </h1>
          <p className={s.pageSub}>
            Real moments from training flights, campus life, cockpit sessions,
            and the skies above America. This is aviation — unfiltered.
          </p>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <div className={s.filterBar} id="gallery-top">
        {CATS.map(cat => (
          <button
            key={cat}
            className={`${s.filterBtn} ${activeCat === cat ? s.filterBtnActive : ''}`}
            onClick={() => { setActiveCat(cat); handlePageChange(1); }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── GRID ── */}
      <section className={s.gridSection}>
        <div className={s.galleryGrid}>
          {visible.map((item, i) => (
            <div className={s.galleryItem} key={i}>
              <img src={item.src} alt={item.alt} className={s.galleryImg} />
              <div className={s.galleryOverlay} />
              <div className={s.galleryInfo}>
                <span className={s.galleryCat}>{item.cat}</span>
                <span className={s.galleryCaption}>{item.caption}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── PAGINATION ── */}
        {totalPages > 1 && (
          <div className={s.pagination}>
            <button
              className={s.pageBtn}
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
            >
              ← Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`${s.pageNum} ${page === i + 1 ? s.pageNumActive : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
            <button
              className={s.pageBtn}
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            >
              Next →
            </button>
          </div>
        )}
      </section>

    </main>
  );
}
