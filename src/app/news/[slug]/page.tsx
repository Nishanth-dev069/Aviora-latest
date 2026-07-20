import Link from 'next/link';
import s from './newspost.module.css';
import client from '../../../../tina/__generated__/client';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { notFound } from 'next/navigation';

type Props = { params: { slug: string } };

export default async function NewsPostPage({ params }: Props) {
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

  // Fetch all news for 'related' section
  const allRes = await client.queries.newsConnection();
  const allNews = (allRes.data.newsConnection.edges?.map(e => e?.node).filter(Boolean) as any[]) || [];
  const related = allNews
    .filter(p => p && p._sys && p._sys.filename !== params.slug && p.tag === post.tag)
    .sort((a, b) => {
      const dateA = a?.date ? new Date(a.date).getTime() : 0;
      const dateB = b?.date ? new Date(b.date).getTime() : 0;
      return dateB - dateA;
    })
    .slice(0, 3);

  const formattedDate = post.date ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date';

  const heroImage = post.img || '';

  return (
    <main className={s.page}>

      {/* HERO */}
      <section className={s.hero}>
        {heroImage && <img src={heroImage} alt={post.title} className={s.heroImg} />}
        <div className={s.heroOverlay} />
        <div className={s.heroContent}>
          <nav className={s.breadcrumb}>
            <Link href="/news" className={s.bcLink}>← News</Link>
            <span className={s.bcSep}>›</span>
            <span className={s.bcCurrent}>{post.tag}</span>
          </nav>
          <div className={s.heroMeta}>
            <span className={s.postTag}>{post.tag}</span>
            <span className={s.postSource}>{post.source}</span>
            <span className={s.postDate}>{formattedDate}</span>
          </div>
          <h1 className={s.heroH1}>{post.title}</h1>
        </div>
      </section>

      {/* ARTICLE */}
      <div className={s.articleWrap}>
        <div className={s.articleInner}>

          {/* Source attribution bar */}
          <div className={s.sourceBar}>
            <span className={s.sourceLabel}>Source</span>
            <span className={s.sourceName}>{post.source}</span>
            <span className={s.sourceDate}>{formattedDate}</span>
          </div>

          <p className={s.lead}>{post.excerpt}</p>
          <hr className={s.divider} />

          <div className={s.markdownBody}>
            <TinaMarkdown content={post.body} />
          </div>

          <hr className={s.divider} />

          <div className={s.inlineCta}>
            <p className={s.inlineCtaText}>
              The hiring market is active now. Begin your training with Aviora — applications are open.
            </p>
            <Link href="/admissions" className={s.inlineCtaBtn}>Enroll Now →</Link>
          </div>

        </div>
      </div>

      {/* RELATED */}
      {related.length > 0 && (
        <section className={s.relatedSection}>
          <div className={s.relatedInner}>
            <p className={s.relatedEye}>More from {post.tag}</p>
            <h2 className={s.relatedH2}>Related News</h2>
            <div className={s.relatedGrid}>
              {related.map(p => (
                <Link key={p._sys.filename} href={`/news/${p._sys.filename}`} className={s.relatedCard}>
                  <div className={s.relatedCardAccent} />
                  <div className={s.relatedMeta}>
                    <span className={s.relatedTag}>{p.tag}</span>
                    <span className={s.relatedDate}>
                      {p.date ? new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : 'Unknown Date'}
                    </span>
                  </div>
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
