import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer: NextPage = () => {
    const [activeTheme, setActiveTheme] = useState<string>();

    useEffect(() => {
        if (localStorage.getItem("theme")) {
            setActiveTheme(localStorage.getItem("theme")!);
        } else {
            setActiveTheme(
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light"
            );
        }
    }, []);

    useEffect(() => {
        window.addEventListener("themeUpdate", () => {
            if (localStorage.getItem("theme")) {
                setActiveTheme(localStorage.getItem("theme")!);
            } else {
                setActiveTheme(
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "dark"
                        : "light"
                );
            }
        });
    });

    return (
        <>
            {/* For Desktop */}
            <footer className={styles.footercontainer}>
                <nav className={styles.footer}>
                    <div className={styles.footeritemrow}>
                        <Image
                            src={`/${activeTheme}/nexliber-banner.svg`}
                            alt="NexLiber Logo"
                            width={300}
                            height={105}
                        />
                    </div>
                    <div className={styles.footeritemcol}>
                        <Link href="/library">
                            <a className={styles.footerlink}>Library</a>
                        </Link>
                        <br />
                        <Link href="/faq">
                            <a className={styles.footerlink}>FAQ</a>
                        </Link>
                        <br />
                        <Link href="https://github.com/xyntechx/NexLiber">
                            <a target="_blank" className={styles.footerlink}>
                                GitHub
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
                </nav>
                <div className={styles.bottom}>
                    <Link href="https://www.buymeacoffee.com/xyntechx">
                        <a target="_blank">
                            <Image
                                src={`/${activeTheme}/bmc.png`}
                                alt="Buy Me a Coffee"
                                width={182}
                                height={51}
                            />
                        </a>
                    </Link>
                    <sub>Copyright &copy; 2022 Nyx Audrey Angelo Iskandar</sub>
                </div>
            </footer>

            {/* For Mobile */}
            <footer className={styles.footermobile}>
                <Image
                    src={`/${activeTheme}/nexliber-banner.svg`}
                    alt="NexLiber Logo"
                    width={200}
                    height={70}
                />
                <div className={styles.subfooter}>
                    <div className={styles.footeritemcol}>
                        <Link href="/library">
                            <a className={styles.footerlink}>Library</a>
                        </Link>
                        <br />
                        <Link href="/faq">
                            <a className={styles.footerlink}>FAQ</a>
                        </Link>
                        <br />
                        <Link href="https://github.com/xyntechx/NexLiber">
                            <a target="_blank" className={styles.footerlink}>
                                GitHub
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
                <div className={styles.bottom}>
                    <Link href="https://www.buymeacoffee.com/xyntechx">
                        <a target="_blank">
                            <Image
                                src={`/${activeTheme}/bmc.png`}
                                alt="Buy Me a Coffee"
                                width={145.6}
                                height={40.8}
                            />
                        </a>
                    </Link>
                    <sub>Copyright &copy; 2022 Nyx Audrey Angelo Iskandar</sub>
                </div>
            </footer>
        </>
    );
};

export default Footer;
