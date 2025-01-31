/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.ibb.co', 'via.placeholder.com'], // Add any external image domains you use
  },
  async redirects() {
    return [
      {
        source: '/', // When the user visits the root
        destination: '/instructor-dashboard', // Redirect them to '/instructor-dashboard'
        permanent: true, // Permanent redirect (301)
      },
    ];
  },
};

export default nextConfig;
