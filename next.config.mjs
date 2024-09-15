/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // memasukkan protokol dan hostname untuk gambar
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
        ]
    }
};

export default nextConfig;