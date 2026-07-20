'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from './news.module.css';

const ITEMS_PER_PAGE = 6;
const TAGS_NEWS = ['All', 'Industry', 'DGCA', 'Global Aviation', 'Airline'];

export default function NewsPage({ news }: { news: any[] }) {
  const [activeTag, setActiveTag] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeTag === 'All'
    ? news
    : news.filter(p => p.tag === activeTag);

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
          {visible.map((post, i) => {
            let imageSrc = post.img || '';
            if (imageSrc.includes('https://images.unsplash.com')) {
              imageSrc = imageSrc.substring(imageSrc.indexOf('https://images.unsplash.com'));
            }
            return (
            <Link href={`/news/${post._sys?.filename || post.slug}`} className={s.postCard} key={i}>
              {imageSrc && (
                <div className={s.postImgWrap}>
                  <img src={imageSrc} alt={post.title} className={s.postImg} />
                </div>
              )}
              <div className={s.postCardInner}>
                <div className={s.postMeta}>
                  <span className={s.postTag}>{post.tag}</span>
                  <span className={s.postSource}>{post.source}</span>
                  <span className={s.postDate}>
                    {post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date'}
                  </span>
                </div>
                <h2 className={s.postTitle}>{post.title}</h2>
                <p className={s.postExcerpt}>{post.excerpt}</p>
                <div className={s.postFooter}>
                  <span className={s.postArrow}>Read →</span>
                </div>
              </div>
            </Link>
          );
          })}
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
