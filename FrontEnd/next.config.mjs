/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i0.hdslb.com', 'images.unsplash.com', 'assets.aceternity.com'],
    },
    devIndicators: {
        autoPrerender: false,
    },
    reactStrictMode: false,
};

export default nextConfig;
