/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // Redirect apex → www (canonical is www.offreiptv.com)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'offreiptv.com' }],
        destination: 'https://www.offreiptv.com/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Prevent clickjacking
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Force HTTPS for 1 year, include subdomains
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          // Minimal referrer leak on cross-origin navigations
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Disable FLoC / restrict permissions
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/(.*)\\.(js|css|woff2|woff|ttf|otf|ico|png|jpg|jpeg|webp|svg)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
