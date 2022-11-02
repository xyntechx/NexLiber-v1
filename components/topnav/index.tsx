import type { NextPage } from "next";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import styles from "./Topnav.module.css";

const Toggle = dynamic(() => import("../toggle"), {
    ssr: false,
});

const Topnav: NextPage = () => {
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
        <header className={styles.nav}>
            <Link href="/">
                <a>
                    <Image
                        src={`/${activeTheme}/nexliber-bg.svg`}
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
                            src={`/${activeTheme}/github.png`}
                            width={40}
                            height={40}
                            alt="NexLiber GitHub Repo"
                        />
                    </a>
                </Link>
                <Link href="/community">
                    <a target="_blank" className={styles.imglink}>
                        <Image
                            src={`/${activeTheme}/discord.svg`}
                            width={40}
                            height={40}
                            alt="NexLiber Discord Community"
                        />
                    </a>
                </Link>
                <Link href="/faq">
                    <a className={styles.link}>FAQ</a>
                </Link>
                <Link href="/library">
                    <a className={styles.speciallink}>Library</a>
                </Link>

                <Toggle />
            </div>
        </header>
    );
};

export default Topnav;
