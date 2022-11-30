import type { NextPage } from "next";
import { useState, useRef } from "react";
import Link from "next/link";
import Project from "../components/project";
import MainLayout from "../layouts/MainLayout";
import styles from "../styles/Library.module.css";
import PROJECTS from "../creator/projects.json";

const Library: NextPage = () => {
    const [projects, _] = useState<{
        [key: string]: {
            description: string;
            field: string;
            difficulty: string;
            creator: string;
            date: string;
        };
    }>(PROJECTS);

    const [result, setResult] = useState<string[]>([]);
    const [notFound, setNotFound] = useState(false);

    const titleInput = useRef<HTMLInputElement>(null);
    const fieldInput = useRef<HTMLInputElement>(null);
    const creatorInput = useRef<HTMLInputElement>(null);
    const difficultyInput = useRef(["Beginner", "Intermediate", "Advanced"]);

    const search = () => {
        const searchResult = [];

        const titleQuery = titleInput.current!.value.toLowerCase();
        const fieldQuery = fieldInput.current!.value.toLowerCase();
        const creatorQuery = creatorInput.current!.value.toLowerCase();
        const difficultyQuery = difficultyInput.current;

        for (let i = 0; i < Object.keys(projects).length; i++) {
            const title = Object.keys(projects)[i];
            const details = projects[title];
            const field = details.field.toLowerCase();
            const creator = details.creator.toLowerCase();
            const difficulty = details.difficulty;

            const found =
                title
                    .toLowerCase()
                    .slice(0, titleQuery.length)
                    .includes(titleQuery) &&
                field.slice(0, fieldQuery.length).includes(fieldQuery) &&
                creator.slice(0, creatorQuery.length).includes(creatorQuery) &&
                difficultyQuery.includes(difficulty);

            if (found) searchResult.push(title);
        }

        setResult(searchResult);

        // For "No Workbooks found" alert animation
        if (searchResult.length === 0) {
            setNotFound(true);

            const timer = setTimeout(() => {
                setNotFound(false);
            }, 4000);

            return () => clearTimeout(timer);
        }
    };

    return (
        <MainLayout
            title="NexLiber | Library"
            description="Browse NexLiber Workbooks"
            url="/library"
        >
            <h1 className={styles.title}>Library</h1>
            <div className={styles.fields}>
                <div className={styles.container}>
                    <p className={styles.inputLabel}>Title</p>
                    <input
                        ref={titleInput}
                        onKeyDown={(e) => e.key === "Enter" && search()}
                        className={styles.input}
                        type="text"
                    />
                </div>
                <div className={styles.container}>
                    <p className={styles.inputLabel}>Field</p>
                    <input
                        ref={fieldInput}
                        onKeyDown={(e) => e.key === "Enter" && search()}
                        className={styles.input}
                        type="text"
                    />
                </div>
                <div className={styles.container}>
                    <p className={styles.inputLabel}>Creator</p>
                    <input
                        ref={creatorInput}
                        onKeyDown={(e) => e.key === "Enter" && search()}
                        className={styles.input}
                        type="text"
                    />
                </div>
                <div className={styles.container}>
                    <p className={styles.inputLabel}>Difficulty</p>
                    <div className={styles.difficulties}>
                        <button
                            onClick={(e) => {
                                if (
                                    difficultyInput.current.includes("Beginner")
                                ) {
                                    e.currentTarget.style.backgroundColor =
                                        "var(--color-bg)";
                                    e.currentTarget.style.color =
                                        "var(--color-text)";
                                    difficultyInput.current.splice(
                                        difficultyInput.current.indexOf(
                                            "Beginner"
                                        ),
                                        1
                                    );
                                } else {
                                    e.currentTarget.style.backgroundColor =
                                        "#ffb13d";
                                    e.currentTarget.style.color = "#1f2937";
                                    difficultyInput.current.push("Beginner");
                                }
                            }}
                            className={styles.difficulty}
                        >
                            Beginner
                        </button>
                        <button
                            onClick={(e) => {
                                if (
                                    difficultyInput.current.includes(
                                        "Intermediate"
                                    )
                                ) {
                                    e.currentTarget.style.backgroundColor =
                                        "var(--color-bg)";
                                    e.currentTarget.style.color =
                                        "var(--color-text)";
                                    difficultyInput.current.splice(
                                        difficultyInput.current.indexOf(
                                            "Intermediate"
                                        ),
                                        1
                                    );
                                } else {
                                    e.currentTarget.style.backgroundColor =
                                        "#ffb13d";
                                    e.currentTarget.style.color = "#1f2937";
                                    difficultyInput.current.push(
                                        "Intermediate"
                                    );
                                }
                            }}
                            className={styles.difficulty}
                        >
                            Intermediate
                        </button>
                        <button
                            onClick={(e) => {
                                if (
                                    difficultyInput.current.includes("Advanced")
                                ) {
                                    e.currentTarget.style.backgroundColor =
                                        "var(--color-bg)";
                                    e.currentTarget.style.color =
                                        "var(--color-text)";
                                    difficultyInput.current.splice(
                                        difficultyInput.current.indexOf(
                                            "Advanced"
                                        ),
                                        1
                                    );
                                } else {
                                    e.currentTarget.style.backgroundColor =
                                        "#ffb13d";
                                    e.currentTarget.style.color = "#1f2937";
                                    difficultyInput.current.push("Advanced");
                                }
                            }}
                            className={styles.difficulty}
                        >
                            Advanced
                        </button>
                    </div>
                </div>
            </div>
            <button onClick={() => search()} className={styles.button}>
                Search
            </button>

            {result.length === 0 ? (
                <>
                    {notFound && (
                        <p className={styles.alert}>
                            No Workbooks found! Request for it on{" "}
                            <Link href="/community">
                                <a
                                    style={{ textDecoration: "underline" }}
                                    target="_blank"
                                >
                                    Discord
                                </a>
                            </Link>
                            .
                        </p>
                    )}
                    <h1 className={styles.label}>All Workbooks</h1>
                    <section className={styles.content}>
                        {Object.keys(projects).map((title) => (
                            <Project
                                key={title}
                                title={title}
                                {...projects[title]}
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
        </MainLayout>
    );
};

export default Library;
