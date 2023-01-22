import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../components/footer";
import Topnav from "../components/topnav";
import styles from "../styles/Faq.module.css";

const FAQ: NextPage = () => {
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
                <h1 className={styles.title}>FAQ</h1>
                <br />
                <section className={styles.content}>
                    <details className={styles.question}>
                        <summary>What is NexLiber?</summary>
                        <div className={styles.answer}>
                            NexLiber is a comprehensive library of computer
                            science (CS) projects promoting community-driven
                            experiential learning. NexLiber hosts Workbooks,
                            which are comprehensive project documentations, to
                            inspire you to engineer original creations after
                            self-coding the in-Workbook projects to understand
                            the thought processes of experienced coders. Hence,
                            you&apos;ll escape tutorial hell through learning by
                            doing!
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>Why should I learn with NexLiber?</summary>
                        <div className={styles.answer}>
                            NexLiber Workbooks are written by experienced coders
                            in different CS fields, allowing you to learn about
                            and experiment with a variety of concepts and
                            technologies. Our Workbooks are also complete with
                            helpful features like interactive milestone quizzes
                            to reinforce your understanding. You&apos;ll also be
                            a part of NexLiber&apos;s global community on{" "}
                            <Link href="/community">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            where you can connect, collaborate, and clarify
                            doubts with fellow coders.
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How should I learn with NexLiber?</summary>
                        <div className={styles.answer}>
                            Visit the{" "}
                            <Link href="/library">
                                <a className={styles.link}>Library</a>
                            </Link>
                            , pick a Workbook, and implement the documented
                            project yourself! If you would like to suggest a
                            Workbook, drop a text at #workbook-requests in our{" "}
                            <Link href="/community">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            server. Last but not least, have fun!
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>
                            How can I write Workbooks/become a Creator?
                        </summary>
                        <div className={styles.answer}>
                            Follow the guide{" "}
                            <Link href="https://github.com/xyntechx/NexLiber-Projects#guide-for-creators">
                                <a className={styles.link} target="_blank">
                                    here
                                </a>
                            </Link>{" "}
                            and join our{" "}
                            <Link href="/community">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            server!
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>Why should I be a Creator?</summary>
                        <div className={styles.answer}>
                            Every Creator will earn a digital certificate after
                            publishing at least 1 Workbook. More importantly,
                            you will polish your coding and technical writing
                            skills, and be a part of a supportive community
                            filled with like-minded individuals.
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How can I help develop NexLiber?</summary>
                        <div className={styles.answer}>
                            Visit our{" "}
                            <Link href="https://github.com/xyntechx/NexLiber">
                                <a className={styles.link} target="_blank">
                                    GitHub
                                </a>
                            </Link>{" "}
                            repository and submit an issue and/or pull request.
                            Issues are for requesting new features/reporting
                            bugs while pull requests are for implementing
                            changes/improvements to NexLiber!
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How can I buy you a coffee?</summary>
                        <div className={styles.answer}>
                            In case you didn&apos;t know, hi! My name is Nyx and
                            I&apos;m the Founder of NexLiber! To help NexLiber
                            reach and impact more coders, please support me on{" "}
                            <Link href="https://www.buymeacoffee.com/xyntechx">
                                <a className={styles.link} target="_blank">
                                    Buy Me a Coffee
                                </a>
                            </Link>
                            ! Thank you!
                        </div>
                    </details>
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default FAQ;
