import styles from "./Title.module.css";

const Title = ({
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
    const difficultyColor: { [key: string]: string } = {
        Beginner: styles.textGreen,
        Intermediate: styles.textYellow,
        Advanced: styles.textRed,
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{description}</p>
            <p className={styles.subtitle}>
                <span>{field}</span> |{" "}
                <span className={difficultyColor[difficulty]}>
                    {difficulty}
                </span>
            </p>
            <p className={styles.subtitle}>Creator: {creator}</p>
            <p className={styles.date}>{date}</p>
        </div>
    );
};

export default Title;
