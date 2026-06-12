'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './gallery.module.css';

const ITEMS_PER_PAGE = 9;

const CATS = ['All', 'Facility', 'Student Life', 'USA Training'];

export default function GalleryPage({ gallery }: { gallery: any[] }) {
  const [activeCat, setActiveCat] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeCat === 'All'
    ? gallery
    : gallery.filter(i => i.cat === activeCat);

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
          {visible.map((item, i) => {
            // TinaCMS sometimes rewrites image fields to point to its cloud media bucket.
            // Since we committed the images to the repository, we want to force them 
            // to load from our own Vercel deployment (the public/gallery folder).
            let imageSrc = item.src;
            if (imageSrc?.includes('assets.tina.io') && imageSrc.includes('/gallery/')) {
              imageSrc = '/gallery/' + imageSrc.split('/gallery/')[1];
            }

            return (
              <div className={s.galleryItem} key={i}>
                <img src={imageSrc} alt={item.alt} className={s.galleryImg} />
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
