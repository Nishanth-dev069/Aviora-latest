import Link from 'next/link';
import Image from 'next/image';
import s from './newspost.module.css';
import client from '../../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
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
    const { data } = await client.queries.news({ relativePath: `${params.slug}.md` });
    const post = data.news;
    if (!post) return {};
    
    let heroImage = post.img || '';
    if (heroImage.includes('https://images.unsplash.com')) {
      heroImage = heroImage.substring(heroImage.indexOf('https://images.unsplash.com'));
    }
    const imageUrl = heroImage.startsWith('http') ? heroImage : `https://avioraaviation.in${heroImage}`;
    
    return {
      title: `${post.title} | Aviora News`,
      description: post.excerpt || post.title,
      alternates: {
        canonical: `https://avioraaviation.in/news/${params.slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt || post.title,
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
        description: post.excerpt || post.title,
        images: [imageUrl],
      },
    };
  } catch (error) {
    return {};
  }
}

export default async function NewsPostPage(props: Props) {
  const params = await props.params;
  let post;
  try {
    const { data } = await client.queries.news({ relativePath: `${params.slug}.md` });
    post = data.news;
  } catch (error) {
    console.error(error);
  }

  if (!post) {
    notFound();
  }

  // Fetch all posts for 'related' section
  const allRes = await client.queries.newsConnection();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allPosts = (allRes.data.newsConnection.edges?.map((e: any) => e?.node).filter(Boolean) as any[]) || [];
  const related = allPosts
    .filter(p => p && p._sys && p._sys.filename !== params.slug && p.tag === post.tag)
    .sort((a, b) => {
      const dateA = a?.date ? new Date(a.date).getTime() : 0;
      const dateB = b?.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'Unknown Date';

  let heroImage = post.img || '';
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

      {/* HERO */}
      <section className={s.hero}>
        {heroImage && <Image src={heroImage} alt={post.title || 'News post hero image'} className={s.heroImg} fill style={{ objectFit: 'cover' }} priority unoptimized referrerPolicy="no-referrer" />}
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/news" className={s.bcLink}>← News</Link>
            <span className={s.bcSep}>›</span>
            <span className={s.bcCurrent}>{post.tag}</span>
          </nav>
          <div className={s.heroMeta}>
            <span className={s.postTag}>{post.tag}</span>
            <span className={s.postDate}>{formattedDate}</span>
          </div>
          <h1 className={s.heroH1}>{post.title}</h1>
        </div>
      </section>

      {/* ARTICLE */}
      <div className={s.articleWrap}>
        <div className={s.articleInner}>
          <p className={s.lead}>{post.excerpt}</p>
          <hr className={s.divider} />

          <div className={s.markdownBody}>
            <TinaMarkdown content={post.body} />
          </div>

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
                <Link key={p._sys.filename} href={`/news/${p._sys.filename}`} className={s.relatedCard}>
                  <div className={s.relatedCardAccent} />
                  <span className={s.relatedTag}>{p.tag}</span>
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
