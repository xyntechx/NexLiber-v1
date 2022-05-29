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
                            NexLiber is a comprehensive library of Computer
                            Science projects promoting experiential learning
                            amongst developers (you!). Projects on NexLiber are
                            presented in a &quot;Workbook&quot; form, complete
                            with setup instructions, a full guide to complete
                            the project, milestone quizzes to periodically check
                            your understanding, and even deployment
                            instructions. Through NexLiber, you&apos;ll be able
                            to learn by doing, improving your coding skills
                            beyond just printing &quot;Hello World&quot;!
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>Why learn with NexLiber?</summary>
                        <div className={styles.answer}>
                            NexLiber is a community-driven project in the sense
                            that Learners, Creators, Developers, and Editors are
                            coders from all over the globe who are
                            interested/experienced in one or more CS fields.
                            Moreover, NexLiber requires no account creation on
                            the site itself, holding all community discussions
                            and Q&A on our{" "}
                            <Link href="https://discord.gg/CvZGEjyzbR">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            server! Hence, NexLiber is a tight-knit global
                            community of developers teaching each other and
                            learning with each other.
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How do I get started as a Learner?</summary>
                        <div className={styles.answer}>
                            Visit the{" "}
                            <Link href="/library">
                                <a className={styles.link}>Library</a>
                            </Link>{" "}
                            and try implementing a project! We have projects for
                            beginner, intermediate, and advanced coders in all
                            CS fields. Don&apos;t forget to join our{" "}
                            <Link href="https://discord.gg/CvZGEjyzbR">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            server too for the full community experience!
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How do I become a Creator?</summary>
                        <div className={styles.answer}>
                            Creators are coders who propose already-built
                            projects and curate a Workbook to be included in
                            NexLiber&apos;s{" "}
                            <Link href="/library">
                                <a className={styles.link}>Library</a>
                            </Link>
                            ! Rest assured that all projects created by a
                            Creator will belong to the Creator. To become a
                            Creator, follow the guide{" "}
                            <Link href="https://github.com/xyntechx/NexLiber/blob/main/library/README.md">
                                <a className={styles.link} target="_blank">
                                    here
                                </a>
                            </Link>
                            . Also, join our{" "}
                            <Link href="https://discord.gg/CvZGEjyzbR">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            server for seamless communication with Developers
                            and Editors.
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How do I become a Developer?</summary>
                        <div className={styles.answer}>
                            Developers are coders experienced in Next.js who
                            help with the development of NexLiber, updating the{" "}
                            <Link href="/library">
                                <a className={styles.link}>Library</a>
                            </Link>{" "}
                            with new Workbooks and implementing new features on
                            NexLiber! To become a Developer, join our{" "}
                            <Link href="https://discord.gg/CvZGEjyzbR">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            server and indicate your interest in the
                            #dev-recruitment channel!
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How do I become an Editor?</summary>
                        <div className={styles.answer}>
                            Editors are coders who manage and review the
                            Workbook drafts of Creators! To become an Editor,
                            you must first be a Creator who has launched at
                            least 5 Workbooks on NexLiber. You should also join
                            our{" "}
                            <Link href="https://discord.gg/CvZGEjyzbR">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            server for seamless communication with Developers
                            and Creators.
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>
                            Why join NexLiber&apos; team as a Creator,
                            Developer, or Editor?
                        </summary>
                        <div className={styles.answer}>
                            Creators, Developers, and Editors will all earn
                            digital certificates after creating, implementing,
                            and managing at least 1 Workbook respectively. You
                            will also stand to participate in giveaways after
                            referring 5 friends to join NexLiber as Creators
                            (see the #referral channel on{" "}
                            <Link href="https://discord.gg/CvZGEjyzbR">
                                <a className={styles.link} target="_blank">
                                    Discord
                                </a>
                            </Link>{" "}
                            for more information). All in all, you will gain
                            invaluable experience and be a part of a supportive
                            community filled with like-minded individuals.
                        </div>
                    </details>
                    <details className={styles.question}>
                        <summary>How can I buy you a coffee?</summary>
                        <div className={styles.answer}>
                            In case you didn&apos;t know, hi! My name is Nyx and
                            I&apos;m the Founder of NexLiber! To support
                            NexLiber and ensure that it reaches and impacts more
                            coders, please support me on{" "}
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
