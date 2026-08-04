import { Metadata } from 'next';
import ClientPage from './ClientPage';
import { getAllPosts } from '@/lib/content';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: "Aviation News | Aviora Aviation Academy",
  description: "Latest updates and news from Aviora.",
};

export default async function Page() {
  const news = getAllPosts('news');
  return <ClientPage news={news} />;
}

