import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: "Aviation News | Aviora Aviation Academy",
  description: "Latest updates and news from Aviora.",
};

import client from '../../../tina/__generated__/client';

export default async function Page() {
  const res = await client.queries.newsConnection();
  const news = res.data.newsConnection.edges?.map((edge: any) => edge?.node).filter(Boolean) || [];
  const sortedNews = news.sort((a: any, b: any) => {
    const dateA = a?.date ? new Date(a.date).getTime() : 0;
    const dateB = b?.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return <ClientPage news={sortedNews} />;
}
