import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Aviation Programs | Aviora Aviation Academy",
  description: "Explore Pilot and Cabin Crew programs.",
};

export default function Page() {
  return <ClientPage />;
}
