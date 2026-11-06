import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],

  async redirects() {
    return [
      { source: '/advertising', destination: '/', permanent: true },
      { source: '/solutions/outdoor-advertising-costa-rica', destination: '/', permanent: true },
      {
        source: '/solutions/digital-advertising-costa-rica',
        destination: '/solutions/paid-media-costa-rica',
        permanent: true,
      },
      { source: '/solutions/signage-costa-rica', destination: '/', permanent: true },
      { source: '/equipment/large-format-printers', destination: '/equipment', permanent: true },
      { source: '/equipment/cnc-equipment', destination: '/equipment', permanent: true },
      { source: '/equipment/digital-signage', destination: '/equipment', permanent: true },
      { source: '/equipment/digital-displays', destination: '/equipment', permanent: true },
      { source: '/equipment/interactive-displays', destination: '/equipment', permanent: true },
      {
        source: '/solutions/digital-displays-costa-rica',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/solutions/interactive-displays-costa-rica',
        destination: '/equipment',
        permanent: true,
      },
      {
        source: '/solutions/large-format-printers-costa-rica',
        destination: '/equipment',
        permanent: true,
      },
      { source: '/solutions/cnc-costa-rica', destination: '/equipment', permanent: true },
    ]
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
    ],
  },
}

export default nextConfig
