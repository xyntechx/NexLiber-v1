import styles from "./Sponsor.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

const Sponsor = () => {
    const [count, setCount] = useState<number>();
    const [show, setShow] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("count")) {
            const savedCount = Number(localStorage.getItem("count")!);
            localStorage.setItem("count", String(savedCount + 1));
            setCount(savedCount + 1);
        } else {
            setCount(1);
            localStorage.setItem("count", String(1));
        }
    }, []);

    return (
        <>
            {count! >= 3 && show && (
                <div className={styles.popup}>
                    <button
                        className={styles.close}
                        onClick={() => setShow(false)}
                    >
                        X
                    </button>

                    <p className={styles.text}>
                        Wow! You&apos;ve read NexLiber&apos;s Workbooks{" "}
                        <span style={{ color: "#ffb13d" }}>{count}</span> times
                        so far!
                    </p>

                    <p className={styles.text}>
                        Consider supporting NexLiber by
                    </p>

                    <div className={styles.prompt}>
                        <Link href="https://www.buymeacoffee.com/xyntechx">
                            <a target="_blank" className={styles.button}>
                                Buying Me a Coffee
                            </a>
                        </Link>
                        <p className={styles.text}>or</p>
                        <Link href="https://github.com/xyntechx/NexLiber#-contributing">
                            <a target="_blank" className={styles.button}>
                                Writing a Workbook
                            </a>
                        </Link>
                    </div>
                </div>
            )}
        </>
    );
};

export default Sponsor;
