import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'About Us — India\'s Premier Aviation Academy',
  description: '2,400+ graduates, 98% placement rate, 42 airline partners. Learn about Aviora\'s faculty, facilities, and commitment to aviation excellence.',
};

export default function AboutPage() {
  return <ClientPage />;
}
