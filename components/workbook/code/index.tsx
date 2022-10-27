import Head from "next/head";
import styles from "./Code.module.css";

const Code = ({ code }: { code: string }) => {
    return (
        <>
            <Head>
                <script
                    async
                    src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/highlight.min.js"
                />
                <script defer>hljs.highlightAll();</script>
            </Head>
            <div className={styles.container}>
                <pre>
                    <code style={{ borderRadius: "0.5rem" }}>{code}</code>
                </pre>
            </div>
        </>
    );
};

export default Code;
