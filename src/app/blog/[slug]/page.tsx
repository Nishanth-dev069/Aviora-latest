import Link from 'next/link';
import s from './blogpost.module.css';
import client from '../../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

type Props = { params: { slug: string } };

export default async function BlogPostPage({ params }: Props) {
  // Fetch the current post
  const { data } = await client.queries.post({ relativePath: `${params.slug}.md` });
  const post = data.post;

  // Fetch all posts for 'related' section
  const allRes = await client.queries.postConnection();
  const allPosts = (allRes.data.postConnection.edges?.map(e => e?.node).filter(Boolean) as any[]) || [];
  const related = allPosts.filter(p => p && p._sys && p._sys.filename !== params.slug && p.tag === post.tag).slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

  let heroImage = post.img || '';
  if (heroImage?.includes('assets.tina.io')) {
    const parts = heroImage.split('/');
    heroImage = '/' + parts[parts.length - 2] + '/' + parts[parts.length - 1];
  }

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        {heroImage && <img src={heroImage} alt={post.title} className={s.heroImg} />}
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/blog" className={s.bcLink}>← Blog</Link>
            <span className={s.bcSep}>›</span>
            <span className={s.bcCurrent}>{post.tag}</span>
          </nav>
          <div className={s.heroMeta}>
            <span className={s.postTag}>{post.tag}</span>
            <span className={s.postDate}>{formattedDate}</span>
            <span className={s.postRead}>{post.readTime} read</span>
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
            <h2 className={s.relatedH2}>Related Articles</h2>
            <div className={s.relatedGrid}>
              {related.map(p => (
                <Link key={p._sys.filename} href={`/blog/${p._sys.filename}`} className={s.relatedCard}>
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
