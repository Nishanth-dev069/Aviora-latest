import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Cabin Crew Training | Aviora Aviation Academy",
  description: "Become an airline-ready flight attendant in 6 months.",
};

export default function Page() {
  return <ClientPage />;
}
