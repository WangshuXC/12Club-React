/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i0.hdslb.com', 'images.unsplash.com'], // 允许的图片源域名
    },
    reactStrictMode: false,
};

export default nextConfig;
