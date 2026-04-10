import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'Admissions — Apply to Aviora',
  description: 'Apply to Aviora Aviation Academy. No entrance exam. No application fee. Pilot and cabin crew programmes open for 2026 intake.',
};

export default function AdmissionsPage() {
  return <ClientPage />;
}
