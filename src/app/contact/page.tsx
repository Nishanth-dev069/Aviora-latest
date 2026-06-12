import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Contact Us | Aviora Aviation Academy",
  description: "Get in touch with our admissions team.",
};

export default function Page() {
  return <ClientPage />;
}
