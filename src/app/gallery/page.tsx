'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './gallery.module.css';

const ITEMS_PER_PAGE = 9;

const ALL_GALLERY = [
  // Campus & Ground
  { src:'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80', alt:'Aircraft on runway at dusk', cat:'Operations', caption:'Runway Operations' },
  { src:'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&q=80', alt:'Cessna pre-flight check on tarmac', cat:'Training', caption:'Pre-flight Walkround' },
  { src:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80', alt:'Cessna 172 in flight', cat:'Training', caption:'Solo Flight — Cessna 172' },
  // Cockpit
  { src:'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=900&q=80', alt:'Cessna cockpit instruments', cat:'Cockpit', caption:'Instrument Panel — C172' },
  { src:'https://images.unsplash.com/photo-1559628233-100c798642d8?w=900&q=80', alt:'Cockpit golden hour', cat:'Cockpit', caption:'Golden Hour — Final Approach' },
  { src:'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=900&q=80', alt:'Aerial desert landscape', cat:'USA Training', caption:'Aerial — Arizona Desert' },
  // USA
  { src:'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&q=80', alt:'Cross-country flight USA', cat:'USA Training', caption:'Cross-country — Phoenix AZ' },
  { src:'https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=900&q=80', alt:'Wing over clouds', cat:'In-flight', caption:'Wing — 8,500 ft' },
  { src:'https://images.unsplash.com/photo-1613690399151-65ea69478674?w=900&q=80', alt:'Aircraft at sunset', cat:'Operations', caption:'Evening Departure' },
  // Cabin
  { src:'https://images.unsplash.com/photo-1540339832862-474599807836?w=900&q=80', alt:'Aircraft cabin interior', cat:'Cabin Crew', caption:'Mock Cabin — Practical' },
  { src:'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=900&q=80', alt:'Cabin crew in uniform', cat:'Cabin Crew', caption:'Uniform Presentation' },
  { src:'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80', alt:'Professional grooming session', cat:'Cabin Crew', caption:'Grooming Training' },
  // Atmosphere
  { src:'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=80', alt:'Airport boarding gate', cat:'Industry', caption:'Boarding Gate' },
  { src:'https://images.unsplash.com/photo-1473621038790-b778b4750efe?w=900&q=80', alt:'Aircraft wing tip at altitude', cat:'In-flight', caption:'Wingtip — Cruise Altitude' },
  { src:'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=900&q=80', alt:'Night time cockpit', cat:'Cockpit', caption:'Night Operations' },
  { src:'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=900&q=80', alt:'Professional pilot portrait', cat:'Training', caption:'Cadet — Post Solo' },
  { src:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80', alt:'Sky above clouds at altitude', cat:'In-flight', caption:'Above the Clouds' },
  { src:'https://images.unsplash.com/photo-1485550409059-9afb054cada4?w=900&q=80', alt:'Aviator sunglasses reflection sky', cat:'Training', caption:'The View from the Left Seat' },
];

const CATS = ['All', 'Training', 'Cockpit', 'USA Training', 'In-flight', 'Cabin Crew', 'Operations', 'Industry'];

export default function GalleryPage() {
  const [activeCat, setActiveCat] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeCat === 'All'
    ? ALL_GALLERY
    : ALL_GALLERY.filter(i => i.cat === activeCat);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const visible = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

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
      <div className={s.filterBar}>
        {CATS.map(cat => (
          <button
            key={cat}
            className={`${s.filterBtn} ${activeCat === cat ? s.filterBtnActive : ''}`}
            onClick={() => { setActiveCat(cat); setPage(1); }}
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
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
            >
              ← Prev
            </button>
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
            >
              Next →
            </button>
          </div>
        )}
      </section>

    </main>
  );
}
