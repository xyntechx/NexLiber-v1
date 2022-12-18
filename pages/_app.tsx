import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { MDXProvider } from "@mdx-js/react";
import customMDX from "../utils/customMDX";
import "../styles/globals.css";
import "../styles/custom-ch.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <MDXProvider components={customMDX}>
            <Component {...pageProps} />
            <Analytics />
        </MDXProvider>
    );
}

export default MyApp;
