import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Our Mentors | Aviora Aviation Academy",
  description: "Meet the airline captains who will guide you.",
};

export default function Page() {
  return <ClientPage />;
}
