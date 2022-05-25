import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: NextPage = () => {
    return (
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
                    <br />
                    <p>Copyright (c) Nyx Audrey Angelo Iskandar</p>
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
                        Sponsor
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
    );
};

export default Footer;
