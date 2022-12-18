import styles from "./Code.module.css";

const Code = ({ code }: { code: string }) => {
    return (
        <div className={styles.container}>
            <code className={styles.code}>{code}</code>
        </div>
    );
};

export default Code;
