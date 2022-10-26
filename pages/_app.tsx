import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { MDXProvider } from "@mdx-js/react";
import customMDX from "../utils/customMDX";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={customMDX}>
            <Component {...pageProps} />
            <Analytics />
        </MDXProvider>
    );
}

export default MyApp;
