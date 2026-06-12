import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Type Rating | Aviora Aviation Academy",
  description: "A320 Type rating program for CPL holders.",
};

export default function Page() {
  return <ClientPage />;
}
