import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Community: NextPage = () => {
    return (
        <div>
            <Head>
                <title>NexLiber</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Create to Learn" />
                <meta name="author" content="Nyx Iskandar" />
                <meta property="og:title" content="NexLiber" />
                <meta property="og:description" content="Create to Learn" />
                <meta
                    property="og:image"
                    content="https://nexliber.com/og-image.png"
                />
                <meta property="og:url" content="https://nexliber.com/" />
                <meta property="og:type" content="website" />
                <meta
                    httpEquiv="Refresh"
                    content="0; url='https://discord.gg/CvZGEjyzbR'"
                />
            </Head>
            <main className={styles.main}>
                <p
                    style={{
                        margin: "0",
                        fontSize: "1.5rem",
                        textAlign: "center",
                        padding: "0.5rem",
                    }}
                >
                    Click{" "}
                    <Link href="https://discord.gg/CvZGEjyzbR">
                        <a style={{ color: "#ffb13d" }}>me</a>
                    </Link>{" "}
                    to receive your NexLiber Discord invite!
                </p>
            </main>
        </div>
    );
};

export default Community;
