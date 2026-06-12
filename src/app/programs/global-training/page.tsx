import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Global Training USA | Aviora Aviation Academy",
  description: "FAA flight training in the United States.",
};

export default function Page() {
  return <ClientPage />;
}
