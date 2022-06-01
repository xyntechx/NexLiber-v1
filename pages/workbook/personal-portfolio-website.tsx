import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../../components/footer";
import Topnav from "../../components/topnav";
import Title from "../../components/workbook/title";
import styles from "../../styles/Workbook.module.css";

const Workbook: NextPage = () => {
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
            </Head>

            <main className={styles.main}>
                <Topnav />

                <Title
                    title="Personal Portfolio Website"
                    description="A personal portfolio website built using Next.js"
                    field="Web Development"
                    difficulty="Intermediate"
                    creator="Nyx Iskandar"
                />

                <section className={styles.content}>
                    <h1 className={styles.header}>Coming Soon...</h1>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default Workbook;
