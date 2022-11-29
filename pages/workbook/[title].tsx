import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ComponentType, useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/Workbook.module.css";

const Workbook = () => {
    const router = useRouter();
    const [Content, setContent] = useState<ComponentType>();
    const [showContent, setShowContent] = useState(false);
    const [activeTheme, setActiveTheme] = useState<string>();
    const [loadingIndex, setLoadingIndex] = useState(0);

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
        if (!router.isReady) return;

        const { title } = router.query;

        setContent(
            dynamic(() => import(`../../creator/workbooks/${title}.mdx`))
        );
    }, [router.isReady]);

    useEffect(() => {
        if (loadingIndex > 3) {
            setShowContent(true);
            return () => clearTimeout(timer);
        }

        const timer = setTimeout(() => {
            setLoadingIndex(loadingIndex + 1);
        }, 500);

        return () => clearTimeout(timer);
    }, [loadingIndex]);

    return (
        <main className={styles.main}>
            {Content && showContent ? (
                <Content />
            ) : (
                <>
                    <Image
                        src={`/${activeTheme}/nexliber.svg`}
                        alt="NexLiber Logo"
                        width={80}
                        height={80}
                        aria-hidden="true"
                    />
                    <div className={styles.loadingDiv} aria-hidden="true">
                        <div
                            className={styles.loadingDot}
                            style={{
                                backgroundColor:
                                    loadingIndex > 0 ? "#ffb13d" : "#ffb13daa",
                            }}
                            aria-hidden="true"
                        />
                        <div
                            className={styles.loadingDot}
                            style={{
                                backgroundColor:
                                    loadingIndex > 1 ? "#ffb13d" : "#ffb13daa",
                            }}
                            aria-hidden="true"
                        />
                        <div
                            className={styles.loadingDot}
                            style={{
                                backgroundColor:
                                    loadingIndex > 2 ? "#ffb13d" : "#ffb13daa",
                            }}
                            aria-hidden="true"
                        />
                    </div>
                </>
            )}
        </main>
    );
};

export default Workbook;
