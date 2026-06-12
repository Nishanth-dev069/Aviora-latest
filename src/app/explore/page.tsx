import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Explore Aviora | Aviora Aviation Academy",
  description: "Discover life at Aviora Aviation Academy.",
};

export default function Page() {
  return <ClientPage />;
}
