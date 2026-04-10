import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Pilot Training Program — DGCA CPL',
  description: 'Complete DGCA Commercial Pilot Licence training. Ground school, FBS simulator, and FAA flight hours in the USA. Aviora Aviation Academy, Hyderabad.',
};

export default function PilotTrainingPage() {
  return <ClientPage />;
}
