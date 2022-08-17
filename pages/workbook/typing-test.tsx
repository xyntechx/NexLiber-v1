import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer";
import Topnav from "../../components/topnav";
import Code from "../../components/workbook/code";
import Quiz from "../../components/workbook/quiz";
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
                    title="Typing Test"
                    description="A typing speed and accuracy test written purely in Python"
                    field="Vanilla (Python)"
                    difficulty="Intermediate"
                    creator="Nyx Iskandar"
                />

                <section className={styles.content}>
                    <h1 className={styles.header}>Coming Soon...</h1>
                    {/* 
                    <h1 className={styles.header}>Setup</h1>
                    <p className={styles.paragraph}>
                        Make sure that you have installed{" "}
                        <Link href="https://www.python.org/downloads/">
                            <a className={styles.link} target="_blank">
                                Python
                            </a>
                        </Link>{" "}
                        on your machine before getting started with the project.
                        Also, check that you have a code editor/IDE installed;
                        if you don&apos;t have one, I recommend installing{" "}
                        <Link href="https://code.visualstudio.com/download">
                            <a className={styles.link} target="_blank">
                                Visual Studio Code
                            </a>
                        </Link>
                        .
                    </p>
                    <p className={styles.paragraph}>
                        Once you have installed both Python and Visual Studio
                        Code (or any code editor/IDE of your choice), create a
                        Python file (a.k.a.{" "}
                        <span className={styles.highlight}>.py</span> file) and
                        write
                    </p>
                    <Code code={`print("Hello, World!")`} />
                    <p className={styles.paragraph}>Now, run your code!</p>
                    <Quiz
                        question="What do you see in the console?"
                        choices={[`print("Hello, World!")`, `Hello, World!`]}
                        correctAnsIndex={1}
                        correctMessage="Nice! You're on the right track!"
                        wrongMessage="Oops! Try again!"
                    />
                    <p className={styles.paragraph}>
                        Alright! Let&apos;s get started!
                    </p>

                    <h1 className={styles.header}>About the Project</h1>
                    */}
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default Workbook;
