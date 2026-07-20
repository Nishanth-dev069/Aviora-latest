'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import s from './blog.module.css';

const ITEMS_PER_PAGE = 6;
const TAGS_BLOG = ['All', 'Career Guide', 'DGCA Exams', 'Flight Training', 'Cabin Crew', 'Industry', 'Medical'];

export default function BlogPage({ posts }: { posts: any[] }) {
  const [activeTag, setActiveTag] = useState('All');
  const [page, setPage] = useState(1);

  const filtered = activeTag === 'All'
    ? posts
    : posts.filter(p => p.tag === activeTag);

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
          {visible.map((post, i) => {
            let imageSrc = post.img || '';
            if (imageSrc.includes('https://images.unsplash.com')) {
              imageSrc = imageSrc.substring(imageSrc.indexOf('https://images.unsplash.com'));
            }
            return (
            <Link href={`/blog/${post._sys?.filename || post.slug}`} className={s.postCard} key={i}>
              {imageSrc && (
                <div className={s.postImgWrap}>
                  <Image src={imageSrc} alt={post.title || 'Blog post image'} className={s.postImg} fill style={{ objectFit: 'cover' }} unoptimized referrerPolicy="no-referrer" />
                </div>
              )}
              <div className={s.postCardInner}>
                <div className={s.postMeta}>
                  <span className={s.postTag}>{post.tag}</span>
                  <span className={s.postDate}>
                    {post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Unknown Date'}
                  </span>
                </div>
                <h2 className={s.postTitle}>{post.title}</h2>
                <p className={s.postExcerpt}>{post.excerpt}</p>
                <div className={s.postFooter}>
                  <span className={s.postReadTime}>{post.readTime}</span>
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
