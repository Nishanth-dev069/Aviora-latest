import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Type Rating — A320, B737, ATR',
  description: 'DGCA type rating for A320, B737, and ATR through Aviora\'s global partner network in Vietnam, Madrid, and Bangkok. Max 85 cadets per year.',
};

export default function TypeRatingPage() {
  return <ClientPage />;
}
