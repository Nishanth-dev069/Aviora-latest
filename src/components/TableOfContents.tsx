'use client';

import { useEffect, useState } from 'react';
import s from './TableOfContents.module.css';

interface TOCItem {
  id: string;
  text: string;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Find the markdown body container on the page
    const article = document.querySelector('[class*="markdownBody"]');
    if (!article) return;

    const h2Elements = Array.from(article.querySelectorAll('h2'));
    if (h2Elements.length === 0) return;

    const items: TOCItem[] = [];

    h2Elements.forEach((h2, index) => {
      let id = h2.id;
      if (!id) {
        id = (h2.textContent || '')
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        if (!id) id = `section-${index + 1}`;
        h2.id = id;
      }
      items.push({ id, text: h2.textContent || `Section ${index + 1}` });
    });

    setHeadings(items);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      for (let i = h2Elements.length - 1; i >= 0; i--) {
        const el = h2Elements[i];
        if (el.offsetTop <= scrollPosition) {
          setActiveId(el.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className={s.tocBox} aria-label="Table of Contents">
      <div className={s.tocHeader}>
        <svg className={s.tocIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6"></line>
          <line x1="8" y1="12" x2="21" y2="12"></line>
          <line x1="8" y1="18" x2="21" y2="18"></line>
          <line x1="3" y1="6" x2="3.01" y2="6"></line>
          <line x1="3" y1="12" x2="3.01" y2="12"></line>
          <line x1="3" y1="18" x2="3.01" y2="18"></line>
        </svg>
        <span className={s.tocTitle}>Table of Contents</span>
      </div>
      <ul className={s.tocList}>
        {headings.map((item) => (
          <li key={item.id} className={s.tocItem}>
            <a
              href={`#${item.id}`}
              className={activeId === item.id ? s.tocLinkActive : s.tocLink}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 110;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
            >
              <span className={s.tocDot} />
              <span className={s.tocText}>{item.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
