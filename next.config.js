const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/philippekacou' : '',
  basePath: isProd ? '/philippekacou' : '',
};

module.exports = nextConfig;
