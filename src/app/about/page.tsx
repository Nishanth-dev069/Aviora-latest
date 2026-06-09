import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'About Us — India\'s Premier Aviation Academy',
  description: '100+ Graduates, 98% placement rate, 10 airline partners. Learn about Aviora\'s faculty, facilities, and commitment to aviation excellence.',
};

export default function AboutPage() {
  return <ClientPage />;
}
