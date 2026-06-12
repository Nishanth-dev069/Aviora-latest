import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Campus Gallery | Aviora Aviation Academy",
  description: "Explore our state-of-the-art aviation campus.",
};

import client from '../../../tina/__generated__/client';

export default async function Page() {
  const res = await client.queries.galleryConnection();
  const gallery = res.data.galleryConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];
  
  console.log("GALLERY DATA:", JSON.stringify(gallery.slice(0, 2), null, 2));

  return <ClientPage gallery={gallery} />;
}
