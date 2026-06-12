import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Aviation News | Aviora Aviation Academy",
  description: "Latest updates and news from Aviora.",
};

import client from '../../../tina/__generated__/client';

export default async function Page() {
  const res = await client.queries.newsConnection();
  const news = res.data.newsConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];

  return <ClientPage news={news} />;
}
