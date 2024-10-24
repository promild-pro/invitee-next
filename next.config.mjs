/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
        config.module.rules.push({
          test: /\.(mp3|wav)$/,
          use: {
            loader: 'file-loader',
            options: {
              publicPath: '/_next/static/sounds/', // Menentukan path publik
              outputPath: 'static/sounds/',       // Output folder
              name: '[name].[ext]',               // Nama file yang dihasilkan
            },
          },
        });
    
    
        return config;
      },
};

export default nextConfig;
