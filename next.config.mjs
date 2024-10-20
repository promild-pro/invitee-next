/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
      },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/:id',  // Menangkap ID setelah '/'
  //       destination: '/[id]',  // Tetap di halaman utama '/'
  //     },
  //   ];
  // },
};

export default nextConfig;
