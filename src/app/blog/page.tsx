import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Aviation Blog | Aviora Aviation Academy",
  description: "Insights and guides from our expert instructors.",
};

import client from '../../../tina/__generated__/client';

export default async function Page() {
  const res = await client.queries.postConnection();
  const posts = res.data.postConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];

  return <ClientPage posts={posts} />;
}
