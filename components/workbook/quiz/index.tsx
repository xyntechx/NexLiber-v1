import styles from "./Quiz.module.css";
import { useState } from "react";

const Quiz = ({
    question,
    choices,
    correctAnsIndex,
    correctMessage,
    wrongMessage,
}: {
    question: string;
    choices: string[];
    correctAnsIndex: number;
    correctMessage: string;
    wrongMessage: string;
}) => {
    const [isCorrect, setIsCorrect] = useState(0);

    const checkAnswer = (index: number) => {
        if (index === correctAnsIndex) setIsCorrect(1);
        else setIsCorrect(2);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{question}</h1>
            {choices.map((choice, i) => (
                <button
                    key={i}
                    className={styles.choice}
                    onClick={() => checkAnswer(i)}
                >
                    {choice}
                </button>
            ))}
            {isCorrect === 1 && <p className={styles.text}>{correctMessage}</p>}
            {isCorrect === 2 && <p className={styles.text}>{wrongMessage}</p>}
        </div>
    );
};

export default Quiz;
