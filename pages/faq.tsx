import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Faq.module.css";

const FAQ: NextPage = () => {
    const [revealZero, setRevealZero] = useState(false);
    const [revealOne, setRevealOne] = useState(false);
    const [revealTwo, setRevealTwo] = useState(false);
    const [revealThree, setRevealThree] = useState(false);
    const [revealFour, setRevealFour] = useState(false);
    const [revealFive, setRevealFive] = useState(false);
    const [revealSix, setRevealSix] = useState(false);

    return (
        <MainLayout
            title="NexLiber | FAQ"
            description="Get to know what NexLiber is all about"
            url="/faq"
        >
            <h1 className={styles.title}>FAQ</h1>
            <br />
            <br />
            <section className={styles.content}>
                <div className={styles.questionWrapper}>
                    <div className={styles.questionBubble}>
                        <p className={styles.text}>What is NexLiber?</p>
                        <button
                            onClick={() => setRevealZero(!revealZero)}
                            className={styles.button}
                            aria-hidden="true"
                        >
                            {revealZero ? "Got it!" : "I'm curious!"}
                        </button>
                    </div>
                </div>
                <div
                    className={styles.answerWrapper}
                    style={{ display: revealZero ? "flex" : "none" }}
                >
                    <div className={styles.answerBubble}>
                        <p className={styles.text}>
                            NexLiber is a comprehensive library of computer
                            science (CS) projects promoting community-driven
                            experiential learning. NexLiber hosts Workbooks,
                            which are comprehensive project documentations, to
                            inspire you to engineer original creations after
                            self-coding the in-Workbook projects to understand
                            the thought processes of experienced coders. Hence,
                            you&apos;ll escape tutorial hell through learning by
                            doing!
                        </p>
                    </div>
                </div>

                <div className={styles.questionWrapper}>
                    <div className={styles.questionBubble}>
                        <p className={styles.text}>
                            Why should I learn with NexLiber?
                        </p>
                        <button
                            onClick={() => setRevealOne(!revealOne)}
                            className={styles.button}
                            aria-hidden="true"
                        >
                            {revealOne ? "Got it!" : "I'm curious!"}
                        </button>
                    </div>
                </div>
                <div
                    className={styles.answerWrapper}
                    style={{ display: revealOne ? "flex" : "none" }}
                >
                    <div className={styles.answerBubble}>
                        <p className={styles.text}>
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
                        </p>
                    </div>
                </div>

                <div className={styles.questionWrapper}>
                    <div className={styles.questionBubble}>
                        <p className={styles.text}>
                            How should I learn with NexLiber?
                        </p>
                        <button
                            onClick={() => setRevealTwo(!revealTwo)}
                            className={styles.button}
                            aria-hidden="true"
                        >
                            {revealTwo ? "Got it!" : "I'm curious!"}
                        </button>
                    </div>
                </div>
                <div
                    className={styles.answerWrapper}
                    style={{ display: revealTwo ? "flex" : "none" }}
                >
                    <div className={styles.answerBubble}>
                        <p className={styles.text}>
                            Visit the{" "}
                            <Link href="/library">
                                <a className={styles.link} target="_blank">
                                    Library
                                </a>
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
                        </p>
                    </div>
                </div>

                <div className={styles.questionWrapper}>
                    <div className={styles.questionBubble}>
                        <p className={styles.text}>
                            How can I write Workbooks/become a Creator?
                        </p>
                        <button
                            onClick={() => setRevealThree(!revealThree)}
                            className={styles.button}
                            aria-hidden="true"
                        >
                            {revealThree ? "Got it!" : "I'm curious!"}
                        </button>
                    </div>
                </div>
                <div
                    className={styles.answerWrapper}
                    style={{ display: revealThree ? "flex" : "none" }}
                >
                    <div className={styles.answerBubble}>
                        <p className={styles.text}>
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
                        </p>
                    </div>
                </div>

                <div className={styles.questionWrapper}>
                    <div className={styles.questionBubble}>
                        <p className={styles.text}>
                            Why should I be a Creator?
                        </p>
                        <button
                            onClick={() => setRevealFour(!revealFour)}
                            className={styles.button}
                            aria-hidden="true"
                        >
                            {revealFour ? "Got it!" : "I'm curious!"}
                        </button>
                    </div>
                </div>
                <div
                    className={styles.answerWrapper}
                    style={{ display: revealFour ? "flex" : "none" }}
                >
                    <div className={styles.answerBubble}>
                        <p className={styles.text}>
                            Every Creator will earn a digital certificate after
                            publishing at least 1 Workbook. More importantly,
                            you will polish your coding and technical writing
                            skills, and be a part of a supportive community
                            filled with like-minded individuals.
                        </p>
                    </div>
                </div>

                <div className={styles.questionWrapper}>
                    <div className={styles.questionBubble}>
                        <p className={styles.text}>
                            How can I help develop NexLiber?
                        </p>
                        <button
                            onClick={() => setRevealFive(!revealFive)}
                            className={styles.button}
                            aria-hidden="true"
                        >
                            {revealFive ? "Got it!" : "I'm curious!"}
                        </button>
                    </div>
                </div>
                <div
                    className={styles.answerWrapper}
                    style={{ display: revealFive ? "flex" : "none" }}
                >
                    <div className={styles.answerBubble}>
                        <p className={styles.text}>
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
                        </p>
                    </div>
                </div>

                <div className={styles.questionWrapper}>
                    <div className={styles.questionBubble}>
                        <p className={styles.text}>
                            How can I buy you a coffee?
                        </p>
                        <button
                            onClick={() => setRevealSix(!revealSix)}
                            className={styles.button}
                            aria-hidden="true"
                        >
                            {revealSix ? "Got it!" : "I'm curious!"}
                        </button>
                    </div>
                </div>
                <div
                    className={styles.answerWrapper}
                    style={{ display: revealSix ? "flex" : "none" }}
                >
                    <div className={styles.answerBubble}>
                        <p className={styles.text}>
                            In case you didn&apos;t know, hi! My name is Nyx and
                            I&apos;m the Founder of NexLiber! To help NexLiber
                            reach and impact more coders, please support me on{" "}
                            <Link href="https://www.buymeacoffee.com/xyntechx">
                                <a className={styles.link} target="_blank">
                                    Buy Me a Coffee
                                </a>
                            </Link>
                            ! Thank you!
                        </p>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default FAQ;
