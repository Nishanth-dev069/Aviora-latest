import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Training Facilities | Aviora Aviation Academy",
  description: "Fixed base simulator and smart classrooms.",
};

export default function Page() {
  return <ClientPage />;
}
