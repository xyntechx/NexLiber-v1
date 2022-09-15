import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Project from "../components/project";
import Topnav from "../components/topnav";
import styles from "../styles/Library.module.css";
import PROJECTS from "../public/projects.json";

const Library: NextPage = () => {
    const [projects, _] = useState<{
        [key: string]: {
            description: string;
            field: string;
            difficulty: string;
            creator: string;
        };
    }>(PROJECTS);

    const [showInfo, setShowInfo] = useState(false);
    const [query, setQuery] = useState("");
    const [result, setResult] = useState<string[]>([]);
    const [pressToggle, setPressToggle] = useState(false);
    const [showNotFound, setShowNotFound] = useState(false);

    useEffect(() => {
        search(query);
    }, [pressToggle]);

    useEffect(() => {
        setShowNotFound(false);
    }, [query]);

    const search = (query: string) => {
        let tempResult = [];
        const queryLength = query.length;
        const QUERY = query.toLowerCase();

        for (let i = 0; i < Object.keys(projects).length; i++) {
            const title = Object.keys(projects)[i];
            const details = projects[title];
            const field = details.field.toLowerCase();
            const difficulty = details.difficulty.toLowerCase();
            const creator = details.creator.toLowerCase();

            const found =
                title.toLowerCase().slice(0, queryLength).includes(QUERY) ||
                field.slice(0, queryLength).includes(QUERY) ||
                difficulty.slice(0, queryLength).includes(QUERY) ||
                creator.slice(0, queryLength).includes(QUERY);

            if (query && found) tempResult.push(title);
        }
        if (tempResult.length > 0) {
            setResult(tempResult);
            setShowNotFound(false);
        } else {
            setResult(["No projects found!"]);
            setShowNotFound(true);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") setPressToggle(!pressToggle);
    };

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
                <Topnav />
                <h1 className={styles.title}>Library</h1>
                <div className={styles.inputContainer}>
                    <input
                        className={styles.input}
                        type="text"
                        value={query ? query : ""}
                        placeholder={
                            !showInfo
                                ? "Find a project..."
                                : "...via its title, field, difficulty, or creator"
                        }
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={(e) => handleKeyPress(e)}
                    />
                    <p
                        className={!showInfo ? styles.info : styles.infoActive}
                        onClick={() => setShowInfo(!showInfo)}
                    >
                        &#9432;
                    </p>
                </div>
                <button
                    onClick={() => setPressToggle(!pressToggle)}
                    className={styles.button}
                >
                    Search
                </button>

                {result.includes("No projects found!") ? (
                    <>
                        {query && showNotFound && (
                            <p className={styles.alert}>No projects found!</p>
                        )}
                        <h1 className={styles.label}>All Projects</h1>
                        <section className={styles.content}>
                            {Object.keys(projects).map((project_title) => (
                                <Project
                                    key={project_title}
                                    title={project_title}
                                    {...projects[project_title]}
                                />
                            ))}
                        </section>
                    </>
                ) : (
                    <>
                        <h1 className={styles.label}>Search Results</h1>
                        <section className={styles.content}>
                            {result.map((title) => (
                                <Project
                                    key={title}
                                    title={title}
                                    {...projects[title]}
                                />
                            ))}
                        </section>
                    </>
                )}

                <Footer />
            </main>
        </div>
    );
};

export default Library;
