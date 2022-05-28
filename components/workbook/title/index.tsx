import styles from "./Title.module.css";

const Title = ({
    title,
    description,
    field,
    difficulty,
    creator,
}: {
    title: string;
    description: string;
    field: string;
    difficulty: string;
    creator: string;
}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{description}</p>
            <p className={styles.subtitle}>
                <span>{field}</span> |{" "}
                <span
                    className={
                        difficulty.toLowerCase() === "beginner"
                            ? styles.textGreen
                            : styles.hidden
                    }
                >
                    Beginner
                </span>
                <span
                    className={
                        difficulty.toLowerCase() === "intermediate"
                            ? styles.textYellow
                            : styles.hidden
                    }
                >
                    Intermediate
                </span>
                <span
                    className={
                        difficulty.toLowerCase() === "advanced"
                            ? styles.textRed
                            : styles.hidden
                    }
                >
                    Advanced
                </span>
            </p>
            <p className={styles.subtitle}>Creator: {creator}</p>
        </div>
    );
};

export default Title;
