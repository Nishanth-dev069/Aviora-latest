import Link from 'next/link';
import s from './explore.module.css';

const GALLERY_PREVIEW = [
  {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    alt: 'Commercial aircraft on runway at dusk',
    caption: 'Runway Operations',
  },
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    alt: 'Cessna 172 in flight over countryside',
    caption: 'Training Flight — Cessna 172',
  },
  {
    src: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&q=80',
    alt: 'Cockpit instruments during flight',
    caption: 'Cockpit — Instrument Check',
  },
  {
    src: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
    alt: 'Aerial view over desert landscape',
    caption: 'USA Training — Arizona',
  },
  {
    src: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80',
    alt: 'Small aircraft on tarmac pre-flight',
    caption: 'Pre-flight Check',
  },
  {
    src: 'https://images.unsplash.com/photo-1559628233-100c798642d8?w=800&q=80',
    alt: 'Cockpit at golden hour',
    caption: 'Golden Hour — Cockpit',
  },
];

const BLOG_PREVIEW = [
  {
    tag: 'Career Guide',
    date: 'March 2025',
    title: 'How to Become a Commercial Pilot in India — The Complete 2025 Guide',
    excerpt: 'From choosing the right training academy to passing your DGCA exams and landing your first First Officer role — a step-by-step roadmap for aspiring Indian pilots.',
    readTime: '12 min read',
    slug: 'how-to-become-commercial-pilot-india-2025',
  },
  {
    tag: 'DGCA Exams',
    date: 'February 2025',
    title: 'The 5 DGCA Ground School Papers — What to Study and How to Pass First Time',
    excerpt: 'Air Navigation, Air Regulations, Meteorology, Technical General, Technical Specific. Everything you need to know about preparation strategy, study materials, and common failure traps.',
    readTime: '9 min read',
    slug: 'dgca-ground-school-5-papers-guide',
  },
  {
    tag: 'Cabin Crew',
    date: 'January 2025',
    title: 'Cabin Crew Career in 2025 — Salaries, Airlines, and What They Actually Look For',
    excerpt: 'A realistic look at the cabin crew profession in India — what IndiGo, Air India, and Emirates actually want, and how to position yourself ahead of the competition.',
    readTime: '8 min read',
    slug: 'cabin-crew-career-india-2025',
  },
];

const NEWS_PREVIEW = [
  {
    tag: 'Industry',
    date: '10 March 2025',
    title: 'IndiGo Announces 500 First Officer Vacancies for 2025–26',
    excerpt: 'India\'s largest carrier opens one of its biggest recruitment drives in five years, with positions across its A320 and ATR fleets. What CPL holders need to know.',
    source: 'Aviation Week',
    slug: 'indigo-500-first-officer-2025',
  },
  {
    tag: 'DGCA',
    date: '4 March 2025',
    title: 'DGCA Updates CPL Medical Standards — New AME Circular Effective April 2025',
    excerpt: 'The Directorate General of Civil Aviation has issued revised Class 2 medical examination guidelines effective April 1, 2025. Key changes for pilot training applicants.',
    source: 'DGCA India',
    slug: 'dgca-cpl-medical-standards-april-2025',
  },
  {
    tag: 'Global Aviation',
    date: '28 February 2025',
    title: 'IATA Forecasts India to Become World\'s Third Largest Aviation Market by 2030',
    excerpt: 'The International Air Transport Association revises its India forecast upward, citing rapid fleet expansion, new route launches, and growing domestic passenger demand.',
    source: 'IATA',
    slug: 'iata-india-third-largest-aviation-2030',
  },
];

export default function ExplorePage() {
  return (
    <main className={s.page}>

      {/* ═══ 1. HERO ═══ */}
      <section className={s.hero}>
        <div className={s.heroBgWrap}>
          <img
            src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?w=1920&q=80"
            alt="Aircraft wing over clouds"
            className={s.heroBgImg}
          />
        </div>
        <div className={s.heroOverlay} />
        <div className={s.heroGlow} />
        <div className={s.heroContent}>
          <div className={s.eyebrow}>Explore Aviora</div>
          <h1 className={s.heroH1}>
            Stories, Insights<br/><em>and the World of Aviation.</em>
          </h1>
          <p className={s.heroPara}>
            Behind every aircraft is a story. Browse Aviora's gallery of real aviation moments,
            read expert guides on building an aviation career, and stay current with
            the latest news from Indian and global aviation.
          </p>
          <div className={s.heroNav}>
            <a href="#gallery" className={s.heroNavItem}>
              <span className={s.heroNavNum}>01</span>
              <span className={s.heroNavLabel}>Gallery</span>
            </a>
            <a href="#blog" className={s.heroNavItem}>
              <span className={s.heroNavNum}>02</span>
              <span className={s.heroNavLabel}>Blog</span>
            </a>
            <a href="#news" className={s.heroNavItem}>
              <span className={s.heroNavNum}>03</span>
              <span className={s.heroNavLabel}>News</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 2. GALLERY PREVIEW ═══ */}
      <section className={s.previewSection} id="gallery">
        <div className={s.previewHeader}>
          <div className={s.previewLeft}>
            <div className={s.eyebrow}>Photography</div>
            <h2 className={s.previewH2}>
              Life Inside<br/><em>Aviation.</em>
            </h2>
            <p className={s.previewSub}>
              Real moments from training flights, cockpit sessions, campus life,
              and the skies above the USA. The Aviora world in frames.
            </p>
          </div>
          <Link href="/gallery" className={s.previewViewAll}>
            View Full Gallery
            <span className={s.viewAllArrow}>→</span>
          </Link>
        </div>
        <div className={s.galleryGrid}>
          {GALLERY_PREVIEW.map((img, i) => (
            <Link href="/gallery" className={`${s.galleryItem} ${i === 0 ? s.galleryItemFeatured : ''}`} key={i}>
              <img src={img.src} alt={img.alt} className={s.galleryImg} />
              <div className={s.galleryOverlay} />
              <div className={s.galleryCaption}>{img.caption}</div>
            </Link>
          ))}
        </div>
        <div className={s.previewFooter}>
          <Link href="/gallery" className={s.btnOutlineGold}>
            Browse All Photos →
          </Link>
        </div>
      </section>

      {/* ═══ 3. BLOG PREVIEW ═══ */}
      <section className={`${s.previewSection} ${s.blogPreview}`} id="blog">
        <div className={s.previewHeader}>
          <div className={s.previewLeft}>
            <div className={s.eyebrow}>Knowledge · Career Guides</div>
            <h2 className={s.previewH2}>
              Everything You Need<br/><em>to Know About Aviation.</em>
            </h2>
            <p className={s.previewSub}>
              DGCA exam prep guides, career roadmaps, airline industry analysis —
              written by pilots and aviation professionals for people serious about this career.
            </p>
          </div>
          <Link href="/blog" className={s.previewViewAll}>
            All Articles
            <span className={s.viewAllArrow}>→</span>
          </Link>
        </div>
        <div className={s.blogGrid}>
          {BLOG_PREVIEW.map((post, i) => (
            <Link href={`/blog/${post.slug}`} className={`${s.blogCard} ${i === 0 ? s.blogCardFeatured : ''}`} key={i}>
              <div className={s.blogCardInner}>
                <div className={s.blogMeta}>
                  <span className={s.blogTag}>{post.tag}</span>
                  <span className={s.blogDate}>{post.date}</span>
                </div>
                <h3 className={s.blogTitle}>{post.title}</h3>
                <p className={s.blogExcerpt}>{post.excerpt}</p>
                <div className={s.blogFooter}>
                  <span className={s.blogReadTime}>{post.readTime}</span>
                  <span className={s.blogArrow}>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={s.previewFooter}>
          <Link href="/blog" className={s.btnOutlineGold}>Read All Articles →</Link>
        </div>
      </section>

      {/* ═══ 4. NEWS PREVIEW ═══ */}
      <section className={`${s.previewSection} ${s.newsPreview}`} id="news">
        <div className={s.previewHeader}>
          <div className={s.previewLeft}>
            <div className={s.eyebrow}>Industry · DGCA · Global Aviation</div>
            <h2 className={s.previewH2}>
              Latest Aviation<br/><em>News.</em>
            </h2>
            <p className={s.previewSub}>
              Recruitment drives, regulatory updates, DGCA circulars, and global aviation
              market intelligence — the news that matters to aviation students and professionals.
            </p>
          </div>
          <Link href="/news" className={s.previewViewAll}>
            All News
            <span className={s.viewAllArrow}>→</span>
          </Link>
        </div>
        <div className={s.newsList}>
          {NEWS_PREVIEW.map((item, i) => (
            <Link href={`/news/${item.slug}`} className={s.newsItem} key={i}>
              <div className={s.newsItemLeft}>
                <div className={s.newsItemMeta}>
                  <span className={s.newsTag}>{item.tag}</span>
                  <span className={s.newsDot}>·</span>
                  <span className={s.newsSource}>{item.source}</span>
                  <span className={s.newsDot}>·</span>
                  <span className={s.newsDate}>{item.date}</span>
                </div>
                <h3 className={s.newsTitle}>{item.title}</h3>
                <p className={s.newsExcerpt}>{item.excerpt}</p>
              </div>
              <div className={s.newsItemRight}>
                <span className={s.newsArrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
        <div className={s.previewFooter}>
          <Link href="/news" className={s.btnOutlineGold}>All News →</Link>
        </div>
      </section>

    </main>
  );
}
