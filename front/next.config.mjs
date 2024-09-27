/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
  images: {
    domains: ['http2.mlstatic.com'],
  },
};

export default nextConfig;
