import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: NextPage = () => {
    return (
        <>
            {/* For Desktop */}
            <footer className={styles.footer}>
                <div className={styles.footeritemrow}>
                    <Image
                        src="/logo/light.svg"
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
                    <Link href="https://www.buymeacoffee.com/xyntechx">
                        <a className={styles.footerlink} target="_blank">
                            Buy Me a Coffee
                        </a>
                    </Link>
                    <br />
                    <Link href="https://github.com/xyntechx/NexLiber">
                        <a className={styles.footerlink} target="_blank">
                            Contribute
                        </a>
                    </Link>
                </div>
                <div className={styles.footeritemcol}>
                    <Link href="/community">
                        <a className={styles.footerlink} target="_blank">
                            Discord
                        </a>
                    </Link>
                    <br />
                    <Link href="https://www.instagram.com/nexliber/">
                        <a className={styles.footerlink} target="_blank">
                            Instagram
                        </a>
                    </Link>
                    <br />
                    <Link href="https://www.linkedin.com/company/nexliber/">
                        <a className={styles.footerlink} target="_blank">
                            LinkedIn
                        </a>
                    </Link>
                </div>
            </footer>

            {/* For Mobile */}
            <footer className={styles.footermobile}>
                <div className={styles.subfooter}>
                    <div className={styles.footeritemcol}>
                        <Link href="/faq">
                            <a className={styles.footerlink}>FAQ</a>
                        </Link>
                        <br />
                        <Link href="https://www.buymeacoffee.com/xyntechx">
                            <a className={styles.footerlink} target="_blank">
                                Buy Me a Coffee
                            </a>
                        </Link>
                        <br />
                        <Link href="https://github.com/xyntechx/NexLiber">
                            <a className={styles.footerlink} target="_blank">
                                Contribute
                            </a>
                        </Link>
                    </div>
                    <div className={styles.footeritemcol}>
                        <Link href="/community">
                            <a className={styles.footerlink} target="_blank">
                                Discord
                            </a>
                        </Link>
                        <br />
                        <Link href="https://www.instagram.com/nexliber/">
                            <a className={styles.footerlink} target="_blank">
                                Instagram
                            </a>
                        </Link>
                        <br />
                        <Link href="https://www.linkedin.com/company/nexliber/">
                            <a className={styles.footerlink} target="_blank">
                                LinkedIn
                            </a>
                        </Link>
                    </div>
                </div>
                <div className={styles.footeritemrow}>
                    <Image
                        src="/logo/light.svg"
                        alt="NexLiber Logo"
                        width={50}
                        height={50}
                    />
                    <div className={styles.subfooteritem}>
                        <p>MIT License</p>
                        <br />
                        <p>Copyright (c) Nyx Audrey Angelo Iskandar</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
