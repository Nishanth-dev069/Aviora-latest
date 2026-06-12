import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Campus Gallery | Aviora Aviation Academy",
  description: "Explore our state-of-the-art aviation campus.",
};

export default function Page() {
  return <ClientPage />;
}
