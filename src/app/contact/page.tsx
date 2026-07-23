import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: "Contact Us | Aviora Aviation Academy",
  description: "Get in touch with our admissions team.",
  alternates: {
    canonical: "https://avioraaviation.in/contact",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Aviora Aviation Academy",
            "image": "https://avioraaviation.in/logos/Aviora%20Footer%20Logo.png",
            "url": "https://avioraaviation.in",
            "telephone": "+91-6309342416",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Block No 5, 8-5-255/66, Inner Ring Road, Defence Colony",
              "addressLocality": "Hyderabad",
              "addressRegion": "TG",
              "postalCode": "500079",
              "addressCountry": "IN"
            },
            "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00"
          })
        }}
      />
      <ClientPage />
    </>
  );
}
