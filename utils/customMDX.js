import styles from "../styles/Workbook.module.css";
import Link from "next/link";
import Code from "../components/workbook/code";

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
    code: (props) => <Code code={props.children} />,
};

export default customMDX;
