/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
};

const theme = require("shiki/themes/github-dark-dimmed.json");
const { remarkCodeHike } = require("@code-hike/mdx");

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [[remarkCodeHike, { theme }]],
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
