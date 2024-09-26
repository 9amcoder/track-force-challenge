/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    typescript: {
        ignoreBuildErrors: false,
    },
};

export default nextConfig;
