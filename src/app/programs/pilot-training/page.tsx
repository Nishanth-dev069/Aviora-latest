import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Commercial Pilot Training | Aviora Aviation Academy",
  description: "Zero to Hero DGCA CPL program.",
};

export default function Page() {
  return <ClientPage />;
}
