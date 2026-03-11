import React from 'react';
import { getPost, getAllPosts } from '@/lib/content';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import styles from '../../about/page.module.css';

export async function generateStaticParams() {
    const posts = getAllPosts('blog');
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getPost('blog', params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article>
            <PageHero
                eyebrow="Flight Log"
                title={<><em>Transmission</em> Received.</>}
            />
            <div className={styles.container}>
                <h1 style={{ fontFamily: 'var(--font-cormorant)', fontSize: '48px', color: 'var(--gold-l)', marginBottom: '16px' }}>{post.title}</h1>
                <div style={{ fontFamily: 'var(--font-space)', fontSize: '12px', color: 'var(--text-dim)', marginBottom: '48px' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>

                <div
                    style={{ fontFamily: 'var(--font-barlow)', fontSize: '18px', color: 'var(--ink)', lineHeight: '1.8' }}
                    dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                />
            </div>
        </article>
    );
}
