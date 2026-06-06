import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Aviora CMS — Admin',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: '100vh', background: '#060c18' }}>
      {children}
    </div>
  );
}
