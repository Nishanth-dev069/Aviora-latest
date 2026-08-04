import Link from 'next/link';
import Image from 'next/image';
import s from './newspost.module.css';
import { getPost, getAllPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Metadata, ResolvingMetadata } from 'next';

type Props = { params: Promise<{ slug: string }> };
export const dynamic = 'force-dynamic';

export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  try {
    const post = await getPost('news', params.slug);
    if (!post) return {};
    
    let heroImage = (post.img as string) || '';
    if (heroImage.includes('https://images.unsplash.com')) {
      heroImage = heroImage.substring(heroImage.indexOf('https://images.unsplash.com'));
    }
    const imageUrl = heroImage.startsWith('http') ? heroImage : `https://avioraaviation.in${heroImage}`;
    
    return {
      title: `${post.title} | Aviora News`,
      description: (post.excerpt as string) || post.title,
      alternates: {
        canonical: `https://avioraaviation.in/news/${params.slug}`,
      },
      openGraph: {
        title: post.title,
        description: (post.excerpt as string) || post.title,
        url: `https://avioraaviation.in/news/${params.slug}`,
        siteName: 'Aviora',
        type: 'article',
        publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
        authors: ['Aviora'],
        images: [{ url: imageUrl }],
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: (post.excerpt as string) || post.title,
        images: [imageUrl],
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function NewsPostPage(props: Props) {
  const params = await props.params;
  const post = await getPost('news', params.slug);

  if (!post) {
    notFound();
  }

  // Fetch all posts for 'related' section
  const allNews = getAllPosts('news');
  const related = allNews
    .filter((p: any) => p && p.slug !== params.slug && p.tag === post.tag)
    .slice(0, 3);

  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Unknown Date';

  let heroImage = (post.img as string) || '';
  if (heroImage.includes('https://images.unsplash.com')) {
    heroImage = heroImage.substring(heroImage.indexOf('https://images.unsplash.com'));
  }

  return (
    <main className={s.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "datePublished": post.date ? new Date(post.date).toISOString() : undefined,
            "dateModified": post.date ? new Date(post.date).toISOString() : undefined,
            "author": { "@type": "Person", "name": "Aviora" },
            "publisher": { 
              "@type": "Organization", 
              "name": "Aviora", 
              "logo": { "@type": "ImageObject", "url": "https://avioraaviation.in/logos/Aviora%20Footer%20Logo.png" } 
            },
            "image": heroImage.startsWith('http') ? heroImage : `https://avioraaviation.in${heroImage}`,
            "url": `https://avioraaviation.in/news/${params.slug}`
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://avioraaviation.in/" },
              { "@type": "ListItem", "position": 2, "name": "News", "item": "https://avioraaviation.in/news" },
              { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://avioraaviation.in/news/${params.slug}` }
            ]
          })
        }}
      />

      {/* HERO */}
      <section className={s.hero}>
        {heroImage && <Image src={heroImage} alt={post.title || 'News post hero image'} className={s.heroImg} fill style={{ objectFit: 'cover' }} priority unoptimized referrerPolicy="no-referrer" />}
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <nav className={s.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={s.bcLink}>Home</Link>
            <span className={s.bcSep}>›</span>
            <Link href="/news" className={s.bcLink}>News</Link>
            <span className={s.bcSep}>›</span>
            <span className={s.bcCurrent}>{post.tag as string}</span>
          </nav>
          <div className={s.heroMeta}>
            <span className={s.postTag}>{post.tag as string}</span>
            <span className={s.postDate}>{formattedDate}</span>
          </div>
          <h1 className={s.heroH1}>{post.title}</h1>
        </div>
      </section>

      {/* ARTICLE */}
      <div className={s.articleWrap}>
        <div className={s.articleInner}>
          <p className={s.lead}>{post.excerpt as string}</p>
          <hr className={s.divider} />

          <div 
            className={s.markdownBody}
            dangerouslySetInnerHTML={{ __html: post.contentHtml || '' }}
          />

          <hr className={s.divider} />

          <div className={s.inlineCta}>
            <p className={s.inlineCtaText}>
              Ready to start the process? Aviora&apos;s admissions team responds within 48 hours.
            </p>
            <Link href="/admissions" className={s.inlineCtaBtn}>Enroll Now →</Link>
          </div>
        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className={s.relatedSection}>
          <div className={s.relatedInner}>
            <p className={s.relatedEye}>Continue Reading</p>
            <h2 className={s.relatedH2}>Related News</h2>
            <div className={s.relatedGrid}>
              {related.map(p => (
                <Link key={p.slug} href={`/news/${p.slug}`} className={s.relatedCard}>
                  <div className={s.relatedCardAccent} />
                  <span className={s.relatedTag}>{p.tag as string}</span>
                  <h3 className={s.relatedTitle}>{p.title}</h3>
                  <span className={s.relatedArrow}>Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

    </main>
  );
}

