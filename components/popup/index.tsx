/* Temporary: To be removed once 2.0.0 launches */

import Link from "next/link";
import { useState } from "react";
import styles from "./Popup.module.css";

const Popup = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {show && (
                <div className={styles.popup}>
                    <button
                        onClick={() => setShow(false)}
                        className={styles.close}
                    >
                        X
                    </button>
                    <h1 className={styles.title}>NexLiber is growing up!</h1>
                    <p className={styles.text}>
                        Hi there! Thanks for stopping by!
                    </p>
                    <p className={styles.text}>
                        What you&apos;re seeing here is NexLiber 1.0.0. NexLiber
                        2.0.0 is currently under development.
                    </p>
                    <p className={styles.text}>
                        I would appreciate your support as I develop NexLiber
                        2.0.0 which is to be launched in early 2023. If
                        you&apos;re feeling generous, you can{" "}
                        <Link href="https://www.buymeacoffee.com/xyntechx">
                            <a target="_blank" className={styles.link}>
                                Buy Me a Coffee
                            </a>
                        </Link>
                        ! If you&apos;d like to suggest or build new features
                        for 2.0.0, visit NexLiber&apos;s{" "}
                        <Link href="https://github.com/xyntechx/NexLiber/issues">
                            <a target="_blank" className={styles.link}>
                                GitHub
                            </a>
                        </Link>{" "}
                        repo. Visit{" "}
                        <Link href="https://nexliber-2.vercel.app/">
                            <a target="_blank" className={styles.link}>
                                this
                            </a>
                        </Link>{" "}
                        website to follow the progress of NexLiber 2.0.0.
                    </p>
                    <p className={styles.text}>
                        Of course, this doesn&apos;t mean that you can&apos;t
                        continue exploring this site; feel free to close this
                        popup and continue learning with NexLiber! In fact, head
                        on over to the{" "}
                        <Link href="/library">
                            <a className={styles.link}>Library</a>
                        </Link>{" "}
                        now!
                    </p>
                    <p className={styles.text}>Appreciate ya!</p>
                    <sub className={styles.author}>
                        ~ Nyx, Founder of NexLiber
                    </sub>
                </div>
            )}
        </>
    );
};

export default Popup;
