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
  const sortedPosts = posts.sort((a, b) => {
    const dateA = a?.date ? new Date(a.date).getTime() : 0;
    const dateB = b?.date ? new Date(b.date).getTime() : 0;
    return dateB - dateA;
  });

  return <ClientPage posts={sortedPosts} />;
}
