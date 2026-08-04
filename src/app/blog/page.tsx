import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { getAllPosts } from '@/lib/content';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: "Aviation Blog | Aviora Aviation Academy",
  description: "Insights and guides from our expert instructors.",
};

export default async function Page() {
  const posts = getAllPosts('blog');
  return <ClientPage posts={posts} />;
}

