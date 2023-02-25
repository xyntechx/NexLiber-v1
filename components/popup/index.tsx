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
                    <h1 className={styles.title}>
                        NexLiber 2.0 is Coming Very Soon
                    </h1>
                    <p className={styles.text}>
                        The official public release date of NexLiber 2.0 is 1 March 2023. Join
                        our{" "}
                        <Link href="/community">
                            <a target="_blank" className={styles.link}>
                                Discord
                            </a>
                        </Link>{" "}
                        server now to get an exclusive early access to NexLiber 2.0!
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
