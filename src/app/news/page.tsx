import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Aviation News | Aviora Aviation Academy",
  description: "Latest updates and news from Aviora.",
};

export default function Page() {
  return <ClientPage />;
}
