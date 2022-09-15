import Head from "next/head";
import { useState } from "react";
import Topnav from "../components/topnav";
import Footer from "../components/footer";
import Title from "../components/workbook/title";
import styles from "../styles/Workbook.module.css";
import PROJECTS from "../public/projects.json";

interface WorkbookLayoutProps {
    projectTitle: string;
    content: React.ReactNode;
}

const WorkbookLayout: React.FC<WorkbookLayoutProps> = (props) => {
    const { projectTitle, content } = props;
    const [projects, _] = useState<{
        [key: string]: {
            description: string;
            field: string;
            difficulty: string;
            creator: string;
        };
    }>(PROJECTS);

    return (
        <div>
            <Head>
                <title>NexLiber | {projectTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Create to Learn" />
                <meta name="author" content="Nyx Iskandar" />
                <meta
                    property="og:title"
                    content={"NexLiber | " + projectTitle}
                />
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

                <Title title={projectTitle} {...projects[projectTitle]} />

                <section className={styles.content}>{content}</section>

                <Footer />
            </main>
        </div>
    );
};

export default WorkbookLayout;
