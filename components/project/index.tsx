import Link from "next/link";
import styles from "./Project.module.css";
import { useState } from "react";

const Project = ({
    title,
    description,
    field,
    difficulty,
    creator,
    date,
}: {
    title: string;
    description: string;
    field: string;
    difficulty: string;
    creator: string;
    date: string;
}) => {
    const [url, _] = useState(title.toLowerCase().split(" ").join("-"));
    const difficultyColor: { [key: string]: string } = {
        Beginner: styles.textGreen,
        Intermediate: styles.textYellow,
        Advanced: styles.textRed,
    };

    return (
        <Link href={`/workbook/${url}`}>
            <a className={styles.project}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.text}>{description}</p>
                <span className={styles.specs}>
                    <p className={styles.text}>{field}</p>
                    <p className={difficultyColor[difficulty]}>{difficulty}</p>
                </span>
                <p className={styles.creator}>Creator: {creator}</p>
                <p className={styles.date}>{date}</p>
            </a>
        </Link>
    );
};

export default Project;
