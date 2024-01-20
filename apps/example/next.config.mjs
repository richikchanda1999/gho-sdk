/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PROJECT_ID: process.env.PROJECT_ID,
    INFURA_KEY: process.env.INFURA_KEY,
  },
};

export default nextConfig;
