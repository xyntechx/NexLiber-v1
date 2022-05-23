import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
                <header className={styles.nav}>
                    <Link href="/library">
                        <a>
                            <Image
                                src="/logo.png"
                                alt="NexLiber Logo"
                                width={80}
                                height={80}
                            />
                        </a>
                    </Link>
                    <div className={styles.navlinks}>
                        <Link href="https://github.com/xyntechx/NexLiber">
                            <a target="_blank" className={styles.imglink}>
                                <Image
                                    src="/github.png"
                                    width={40}
                                    height={40}
                                    alt="NexLiber GitHub Repo"
                                />
                            </a>
                        </Link>
                        {/* TODO: Discord Server */}
                        <Link href="/">
                            <a target="_blank" className={styles.imglink}>
                                <Image
                                    src="/discord.png"
                                    width={40}
                                    height={40}
                                    alt="NexLiber Discord Community"
                                />
                            </a>
                        </Link>
                        {/* TODO: Buy me a coffee */}
                        <Link href="/">
                            <a target="_blank" className={styles.link}>
                                Support
                            </a>
                        </Link>
                        <Link href="/library">
                            <a className={styles.speciallink}>Browse</a>
                        </Link>
                    </div>
                </header>
                <section className={styles.maindiv}>
                    <div className={styles.titlediv}>
                        <h1 className={styles.title}>Create to Learn.</h1>
                        <p className={styles.subtitle}>
                            NexLiber gives you a comprehensive library of
                            projects to supercharge your learning in
                        </p>
                        <div className={styles.fadein}>
                            <span>Artificial Intelligence</span>
                            <span>Cybersecurity</span>
                            <span>Data Science</span>
                            <span>Web Development</span>
                            <span>all things Computer Science</span>
                        </div>
                        <div className={styles.buttondiv}>
                            <Link href="/library">
                                <a className={styles.button}>Get Started</a>
                            </Link>
                            {/* TODO: Discord Server */}
                            <Link href="/">
                                <a
                                    target="_blank"
                                    className={styles.buttonwhite}
                                >
                                    Community
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.div}>
                    <h1 className={styles.smalltitle}>
                        For Coders, by Coders.
                    </h1>
                    <p className={styles.text}>
                        The best way to learn how to code is to code!
                    </p>
                    <div className={styles.grid}>
                        <div className={styles.griditem}>
                            <h6>Community-driven</h6>
                            <br />
                            <p>
                                All projects on NexLiber are created by
                                experienced coders who will help you succeed in
                                any Computer Science field.
                            </p>
                        </div>
                        <div className={styles.griditem}>
                            <h6>Experiential Learning</h6>
                            <br />
                            <p>
                                Reinforce your learning by coding real projects
                                with the help of guides and milestone quizzes.
                            </p>
                        </div>
                        <div className={styles.griditem}>
                            <h6>More Effective</h6>
                            <br />
                            <p>
                                Building projects yourself is more effective
                                than just listening to a course or reading some
                                documentation.
                            </p>
                        </div>
                    </div>
                </section>
                <footer className={styles.footer}>
                    <div className={styles.footeritemrow}>
                        <Image
                            src="/logo.png"
                            alt="NexLiber Logo"
                            width={80}
                            height={80}
                        />
                        <div className={styles.subfooteritem}>
                            <p>MIT License</p>
                            <p>Copyright (c) 2022 xyntechx</p>
                        </div>
                    </div>
                    <div className={styles.footeritemcol}>
                        <Link href="/faq">
                            <a className={styles.footerlink}>FAQ</a>
                        </Link>
                        <br />
                        {/* TODO: Buy me a coffee */}
                        <Link href="/">
                            <a className={styles.footerlink} target="_blank">
                                Support
                            </a>
                        </Link>
                        <br />
                        {/* TODO: Discord Server */}
                        <Link href="/">
                            <a className={styles.footerlink} target="_blank">
                                Discord
                            </a>
                        </Link>
                        <br />
                        <Link href="https://github.com/xyntechx/NexLiber">
                            <a className={styles.footerlink} target="_blank">
                                GitHub
                            </a>
                        </Link>
                    </div>
                </footer>
            </main>
        </div>
    );
};

export default Home;
