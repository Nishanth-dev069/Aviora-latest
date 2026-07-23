import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: "Campus Gallery | Aviora Aviation Academy",
  description: "Explore our state-of-the-art aviation campus.",
};

import fs from 'fs';
import path from 'path';

export default async function Page() {
  // Read directly from the filesystem to bypass TinaCMS errors
  const galleryDir = path.join(process.cwd(), 'content', 'gallery');
  let gallery = [];
  
  if (fs.existsSync(galleryDir)) {
    const files = fs.readdirSync(galleryDir).filter(f => f.endsWith('.json'));
    gallery = files.map(file => {
      const content = fs.readFileSync(path.join(galleryDir, file), 'utf-8');
      try {
        return JSON.parse(content);
      } catch (e) {
        return null;
      }
    }).filter(Boolean);
  }
  
  return <ClientPage gallery={gallery} />;
}
