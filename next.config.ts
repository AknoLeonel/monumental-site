import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ignora erros chatos de linting e typescript APENAS na hora de subir pro GitHub/Vercel
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Permite o carregamento da imagem do Hero
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;