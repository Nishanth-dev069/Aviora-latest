import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "India's Premier Aviation Academy | Aviora Aviation Academy",
  description: "India's premier aviation training institute. DGCA CPL, Cabin Crew, and Type Rating.",
};

export default function Page() {
  return <ClientPage />;
}
