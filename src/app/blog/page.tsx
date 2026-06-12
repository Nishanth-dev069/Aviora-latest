import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Aviation Blog | Aviora Aviation Academy",
  description: "Insights and guides from our expert instructors.",
};

export default function Page() {
  return <ClientPage />;
}
