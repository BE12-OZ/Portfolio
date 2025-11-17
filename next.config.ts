import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  sassOptions: {
    includePaths: ['./src/styles'], // Allows @import 'variables.scss' instead of '../../styles/variables.scss'
  },
};

export default nextConfig;
