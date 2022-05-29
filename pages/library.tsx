import type { NextPage } from "next";
import Head from "next/head";
import Footer from "../components/footer";
import Project from "../components/project";
import Topnav from "../components/topnav";
import styles from "../styles/Library.module.css";

const Library: NextPage = () => {
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
                <h1 className={styles.title}>Library</h1>
                <br />
                <section className={styles.content}>
                    <Project
                        title="Free Scrabble"
                        description="A one-try, one-player Scrabble game written in Python"
                        field="Vanilla (Python)"
                        difficulty="Beginner"
                        creator="Nyx Iskandar"
                    />
                    <Project
                        title="Personal Portfolio Website"
                        description="A personal portfolio website built using Next.js"
                        field="Web Development"
                        difficulty="Intermediate"
                        creator="Nyx Iskandar"
                    />
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default Library;
