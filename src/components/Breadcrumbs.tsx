import React from 'react';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  // Always ensure Home is at root position if not already present
  const fullItems: BreadcrumbItem[] = items[0]?.label === 'Home' 
    ? items 
    : [{ label: 'Home', href: '/' }, ...items];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: fullItems.map((item, index) => {
      const itemUrl = item.href 
        ? (item.href.startsWith('http') ? item.href : `https://avioraaviation.in${item.href}`)
        : undefined;

      const listItem: any = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
      };
      if (itemUrl) {
        listItem.item = itemUrl;
      }
      return listItem;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={className} style={{ display: 'inline-flex', alignItems: 'center' }}>
        <ol style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', listStyle: 'none', margin: 0, padding: 0 }}>
          {fullItems.map((item, idx) => {
            const isLast = idx === fullItems.length - 1;
            return (
              <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {idx > 0 && <span style={{ opacity: 0.4, userSelect: 'none' }}>›</span>}
                {isLast || !item.href ? (
                  <span aria-current="page" style={{ color: '#C9A84C', fontWeight: 500 }}>
                    {item.label}
                  </span>
                ) : (
                  <Link 
                    href={item.href} 
                    style={{ color: 'rgba(241, 241, 241, 0.7)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
