/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

/**
 * If deploying to GitHub Pages at https://<user>.github.io/<repo>,
 * set BASE_PATH to '/<repo>' when building. Example:
 * BASE_PATH=/my-portfolio npm run build
 */
const basePath = process.env.BASE_PATH || '';

const nextConfig = {
  output: 'export',       // enables SSG export
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,    // needed so GitHub Pages serves directories as index.html
};

export default nextConfig;
