'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import s from './admin.module.css';

// ── Types ──────────────────────────────────────────────────────────────────
type Collection = 'blog' | 'news' | 'gallery';

interface BlogEntry {
  slug: string; title: string; tag: string; date: string;
  excerpt: string; readTime: string; body?: string;
}
interface NewsEntry {
  slug: string; title: string; tag: string; date: string;
  excerpt: string; source: string; body?: string;
}
interface GalleryEntry {
  slug: string; src: string; alt: string; cat: string; caption: string;
}

type Entry = BlogEntry | NewsEntry | GalleryEntry;

const BLOG_TAGS = ['Career Guide', 'DGCA Exams', 'Flight Training', 'Cabin Crew', 'Industry', 'Medical'];
const NEWS_TAGS = ['Industry', 'DGCA', 'Global Aviation', 'Airline'];
const GALLERY_CATS = ['Facility', 'Student Life', 'USA Training'];

function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ── Blank Templates ────────────────────────────────────────────────────────
function blankBlog(): Partial<BlogEntry> {
  return { title: '', tag: BLOG_TAGS[0], date: new Date().toISOString().split('T')[0], excerpt: '', readTime: '5 min', body: '' };
}
function blankNews(): Partial<NewsEntry> {
  return { title: '', tag: NEWS_TAGS[0], date: new Date().toISOString().split('T')[0], excerpt: '', source: '', body: '' };
}
function blankGallery(): Partial<GalleryEntry> {
  return { src: '', alt: '', cat: GALLERY_CATS[0], caption: '' };
}

export default function AdminPage() {
  const [active, setActive] = useState<Collection>('blog');
  const [items, setItems] = useState<Entry[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Partial<Entry> | null>(null);
  const [isNew, setIsNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string, type: 'success' | 'error' = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchItems = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/cms?collection=${active}`);
      const data = await res.json();
      setItems(data);
    } catch {
      showToast('Failed to load content', 'error');
    } finally {
      setLoading(false);
    }
  }, [active]);

  useEffect(() => { fetchItems(); setEditing(null); }, [fetchItems]);

  async function handleSave() {
    if (!editing) return;
    setSaving(true);
    const slug = (editing as Entry & { slug?: string }).slug || slugify((editing as BlogEntry).title || (editing as GalleryEntry).caption || 'item');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { body, slug: _s, ...data } = editing as BlogEntry & { slug?: string };
    try {
      await fetch('/api/cms', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection: active, slug, data, body }),
      });
      showToast(isNew ? 'Entry created!' : 'Entry saved!');
      setEditing(null);
      fetchItems();
    } catch {
      showToast('Save failed', 'error');
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(slug: string) {
    try {
      await fetch('/api/cms', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ collection: active, slug }),
      });
      showToast('Entry deleted');
      setDeleteTarget(null);
      fetchItems();
    } catch {
      showToast('Delete failed', 'error');
    }
  }

  function startNew() {
    const blank = active === 'blog' ? blankBlog() : active === 'news' ? blankNews() : blankGallery();
    setEditing(blank);
    setIsNew(true);
  }

  function startEdit(item: Entry) {
    setEditing({ ...item });
    setIsNew(false);
  }

  function handleImgUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setEditing(prev => ({ ...prev, src: reader.result as string }));
    };
    reader.readAsDataURL(file);
  }

  // ── NAV ICONS ──
  const icons = { blog: '📝', news: '📰', gallery: '🖼️' };

  return (
    <div className={s.root}>
      {/* SIDEBAR */}
      <aside className={s.sidebar}>
        <div className={s.brand}>
          <span className={s.brandIcon}>✈</span>
          <span className={s.brandText}>Aviora CMS</span>
        </div>
        <nav className={s.nav}>
          {(['blog', 'news', 'gallery'] as Collection[]).map(col => (
            <button
              key={col}
              className={`${s.navItem} ${active === col ? s.navItemActive : ''}`}
              onClick={() => setActive(col)}
            >
              <span className={s.navIcon}>{icons[col]}</span>
              <span className={s.navLabel}>{col.charAt(0).toUpperCase() + col.slice(1)}</span>
            </button>
          ))}
        </nav>
        <div className={s.sidebarFooter}>
          <a href="/" className={s.viewSite}>← View Site</a>
        </div>
      </aside>

      {/* MAIN */}
      <main className={s.main}>
        {/* TOPBAR */}
        <header className={s.topbar}>
          <div>
            <h1 className={s.topbarTitle}>{icons[active]} {active.charAt(0).toUpperCase() + active.slice(1)}</h1>
            <p className={s.topbarSub}>{items.length} {items.length === 1 ? 'entry' : 'entries'}</p>
          </div>
          <button className={s.btnNew} onClick={startNew}>+ New Entry</button>
        </header>

        {/* CONTENT */}
        <div className={s.content}>
          {loading ? (
            <div className={s.skeleton}>
              {[1,2,3].map(i => <div key={i} className={s.skeletonCard} />)}
            </div>
          ) : items.length === 0 ? (
            <div className={s.empty}>
              <div className={s.emptyIcon}>{icons[active]}</div>
              <p className={s.emptyText}>No entries yet. Create your first one!</p>
              <button className={s.btnNew} onClick={startNew}>+ Create Entry</button>
            </div>
          ) : (
            <div className={s.grid}>
              {items.map((item, i) => (
                <div key={i} className={s.card}>
                  {active === 'gallery' ? (
                    <div className={s.cardImgWrap}>
                      <img src={(item as GalleryEntry).src} alt={(item as GalleryEntry).alt} className={s.cardImg} />
                      <div className={s.cardImgOverlay}>
                        <span className={s.cardCat}>{(item as GalleryEntry).cat}</span>
                      </div>
                    </div>
                  ) : (
                    <div className={s.cardTagRow}>
                      <span className={s.cardTag}>{(item as BlogEntry).tag}</span>
                      <span className={s.cardDate}>{(item as BlogEntry).date?.split('T')[0]}</span>
                    </div>
                  )}
                  <div className={s.cardBody}>
                    <h3 className={s.cardTitle}>
                      {active === 'gallery' ? (item as GalleryEntry).caption : (item as BlogEntry).title}
                    </h3>
                    {active !== 'gallery' && (
                      <p className={s.cardExcerpt}>{(item as BlogEntry).excerpt}</p>
                    )}
                  </div>
                  <div className={s.cardActions}>
                    <button className={s.btnEdit} onClick={() => startEdit(item)}>Edit</button>
                    <button className={s.btnDelete} onClick={() => setDeleteTarget((item as BlogEntry).slug)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* EDIT MODAL */}
      {editing && (
        <div className={s.modalOverlay} onClick={() => setEditing(null)}>
          <div className={s.modal} onClick={e => e.stopPropagation()}>
            <div className={s.modalHeader}>
              <h2 className={s.modalTitle}>{isNew ? 'New' : 'Edit'} {active.charAt(0).toUpperCase() + active.slice(1)}</h2>
              <button className={s.modalClose} onClick={() => setEditing(null)}>✕</button>
            </div>
            <div className={s.modalBody}>
              {/* BLOG FIELDS */}
              {active === 'blog' && (
                <>
                  <label className={s.field}>
                    <span className={s.label}>Title *</span>
                    <input className={s.input} value={(editing as BlogEntry).title || ''} onChange={e => setEditing(p => ({ ...p, title: e.target.value }))} placeholder="Blog post title" />
                  </label>
                  <div className={s.fieldRow}>
                    <label className={s.field}>
                      <span className={s.label}>Category</span>
                      <select className={s.select} value={(editing as BlogEntry).tag || ''} onChange={e => setEditing(p => ({ ...p, tag: e.target.value }))}>
                        {BLOG_TAGS.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className={s.field}>
                      <span className={s.label}>Date</span>
                      <input className={s.input} type="date" value={(editing as BlogEntry).date?.split('T')[0] || ''} onChange={e => setEditing(p => ({ ...p, date: e.target.value }))} />
                    </label>
                    <label className={s.field}>
                      <span className={s.label}>Read Time</span>
                      <input className={s.input} value={(editing as BlogEntry).readTime || ''} onChange={e => setEditing(p => ({ ...p, readTime: e.target.value }))} placeholder="8 min" />
                    </label>
                  </div>
                  <label className={s.field}>
                    <span className={s.label}>Excerpt *</span>
                    <textarea className={s.textarea} rows={3} value={(editing as BlogEntry).excerpt || ''} onChange={e => setEditing(p => ({ ...p, excerpt: e.target.value }))} placeholder="A short summary..." />
                  </label>
                  <label className={s.field}>
                    <span className={s.label}>Body (Markdown)</span>
                    <textarea className={s.textarea} rows={10} value={(editing as BlogEntry).body || ''} onChange={e => setEditing(p => ({ ...p, body: e.target.value }))} placeholder="Write your full blog post here in Markdown..." />
                  </label>
                </>
              )}

              {/* NEWS FIELDS */}
              {active === 'news' && (
                <>
                  <label className={s.field}>
                    <span className={s.label}>Title *</span>
                    <input className={s.input} value={(editing as NewsEntry).title || ''} onChange={e => setEditing(p => ({ ...p, title: e.target.value }))} placeholder="News article title" />
                  </label>
                  <div className={s.fieldRow}>
                    <label className={s.field}>
                      <span className={s.label}>Category</span>
                      <select className={s.select} value={(editing as NewsEntry).tag || ''} onChange={e => setEditing(p => ({ ...p, tag: e.target.value }))}>
                        {NEWS_TAGS.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </label>
                    <label className={s.field}>
                      <span className={s.label}>Date</span>
                      <input className={s.input} type="date" value={(editing as NewsEntry).date?.split('T')[0] || ''} onChange={e => setEditing(p => ({ ...p, date: e.target.value }))} />
                    </label>
                    <label className={s.field}>
                      <span className={s.label}>Source</span>
                      <input className={s.input} value={(editing as NewsEntry).source || ''} onChange={e => setEditing(p => ({ ...p, source: e.target.value }))} placeholder="Aviation Week, DGCA India..." />
                    </label>
                  </div>
                  <label className={s.field}>
                    <span className={s.label}>Excerpt *</span>
                    <textarea className={s.textarea} rows={3} value={(editing as NewsEntry).excerpt || ''} onChange={e => setEditing(p => ({ ...p, excerpt: e.target.value }))} placeholder="A short summary..." />
                  </label>
                  <label className={s.field}>
                    <span className={s.label}>Body (Markdown)</span>
                    <textarea className={s.textarea} rows={10} value={(editing as NewsEntry).body || ''} onChange={e => setEditing(p => ({ ...p, body: e.target.value }))} placeholder="Full article content in Markdown..." />
                  </label>
                </>
              )}

              {/* GALLERY FIELDS */}
              {active === 'gallery' && (
                <>
                  <label className={s.field}>
                    <span className={s.label}>Photo URL or Upload</span>
                    <div className={s.imgInputRow}>
                      <input className={s.input} value={(editing as GalleryEntry).src || ''} onChange={e => setEditing(p => ({ ...p, src: e.target.value }))} placeholder="https://..." />
                      <button className={s.btnUpload} onClick={() => fileRef.current?.click()}>Upload</button>
                      <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImgUpload} />
                    </div>
                    {(editing as GalleryEntry).src && (
                      <img src={(editing as GalleryEntry).src} alt="preview" className={s.imgPreview} />
                    )}
                  </label>
                  <div className={s.fieldRow}>
                    <label className={s.field}>
                      <span className={s.label}>Caption *</span>
                      <input className={s.input} value={(editing as GalleryEntry).caption || ''} onChange={e => setEditing(p => ({ ...p, caption: e.target.value }))} placeholder="Runway Operations" />
                    </label>
                    <label className={s.field}>
                      <span className={s.label}>Category</span>
                      <select className={s.select} value={(editing as GalleryEntry).cat || ''} onChange={e => setEditing(p => ({ ...p, cat: e.target.value }))}>
                        {GALLERY_CATS.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </label>
                  </div>
                  <label className={s.field}>
                    <span className={s.label}>Alt Text (Accessibility)</span>
                    <input className={s.input} value={(editing as GalleryEntry).alt || ''} onChange={e => setEditing(p => ({ ...p, alt: e.target.value }))} placeholder="Describe the image for screen readers" />
                  </label>
                </>
              )}
            </div>
            <div className={s.modalFooter}>
              <button className={s.btnCancel} onClick={() => setEditing(null)}>Cancel</button>
              <button className={s.btnSave} onClick={handleSave} disabled={saving}>
                {saving ? 'Saving…' : isNew ? 'Create Entry' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}
      {deleteTarget && (
        <div className={s.modalOverlay} onClick={() => setDeleteTarget(null)}>
          <div className={s.confirmModal} onClick={e => e.stopPropagation()}>
            <div className={s.confirmIcon}>🗑️</div>
            <h3 className={s.confirmTitle}>Delete this entry?</h3>
            <p className={s.confirmSub}>This action cannot be undone.</p>
            <div className={s.confirmBtns}>
              <button className={s.btnCancel} onClick={() => setDeleteTarget(null)}>Cancel</button>
              <button className={s.btnDanger} onClick={() => handleDelete(deleteTarget)}>Yes, Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toast && (
        <div className={`${s.toast} ${toast.type === 'error' ? s.toastError : ''}`}>
          {toast.type === 'success' ? '✓' : '✕'} {toast.msg}
        </div>
      )}
    </div>
  );
}
