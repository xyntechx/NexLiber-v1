import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
    const setInitialTheme = `
        const getSavedTheme = () => {
            if (window.localStorage.getItem("theme")) {
                return window.localStorage.getItem("theme");
            }
            return window.matchMedia("(prefers-color-scheme: dark)").matches
                ? "dark"
                : "light";
        };
        document.body.dataset.theme = getSavedTheme();    
    `;

    return (
        <Html>
            <Head lang="en" />
            <body>
                <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default MyDocument;
