/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        providerImportSource: "@mdx-js/react",
    },
});

module.exports = withMDX({
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    images: {
        domains: ["raw.githubusercontent.com"],
    },
});
