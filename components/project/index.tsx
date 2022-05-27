import Link from "next/link";
import styles from "./Project.module.css";
import { useState } from "react";

const Project = ({
    title,
    description,
    field,
    difficulty,
}: {
    title: string;
    description: string;
    field: string;
    difficulty: string;
}) => {
    const [url, setUrl] = useState(title.toLowerCase().split(" ").join("-"));

    return (
        <Link href={"/workbook/" + url}>
            <a className={styles.project}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{description}</p>
                <span className={styles.specs}>
                    <p className={styles.text}>{field}</p>
                    <p
                        className={
                            difficulty.toLowerCase() === "beginner"
                                ? styles.textGreen
                                : styles.hidden
                        }
                    >
                        Beginner
                    </p>
                    <p
                        className={
                            difficulty.toLowerCase() === "intermediate"
                                ? styles.textYellow
                                : styles.hidden
                        }
                    >
                        Intermediate
                    </p>
                    <p
                        className={
                            difficulty.toLowerCase() === "advanced"
                                ? styles.textRed
                                : styles.hidden
                        }
                    >
                        Advanced
                    </p>
                </span>
            </a>
        </Link>
    );
};

export default Project;
