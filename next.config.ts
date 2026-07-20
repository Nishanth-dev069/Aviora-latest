import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Image domains
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'assets.tina.io' },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://maps.gstatic.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https://images.unsplash.com https://maps.googleapis.com https://maps.gstatic.com https://*.ggpht.com https://assets.tina.io https://t3.gstatic.com https://logo.clearbit.com https://*.s3.amazonaws.com https://s3.amazonaws.com",
              "frame-src https://www.google.com https://maps.google.com",
              "connect-src 'self' https://maps.googleapis.com https://api.emailjs.com https://identity.tinajs.io https://content.tinajs.io https://assets.tinajs.io https://upload.tinajs.io https://assets.tina.io https://*.s3.amazonaws.com https://s3.amazonaws.com",
            ].join('; '),
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },

  // Compression
  compress: true,

  // Powered by header removal
  poweredByHeader: false,
};

export default nextConfig;
