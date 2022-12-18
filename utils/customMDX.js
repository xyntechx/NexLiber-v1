import styles from "../styles/Workbook.module.css";
import Link from "next/link";

const customMDX = {
    h1: (props) => <h1 {...props} className={styles.header} />,
    p: (props) => <p {...props} className={styles.paragraph} />,
    a: (props) => (
        <Link href={props.href}>
            <a target="_blank" className={styles.link}>
                {props.children}
            </a>
        </Link>
    ),
    strong: (props) => <span {...props} className={styles.highlight} />,
    ul: (props) => <ul {...props} className={styles.list} />,
    ol: (props) => <ol {...props} className={styles.list} />,
    li: (props) => <li {...props} className={styles.listItem} />,
};

export default customMDX;
