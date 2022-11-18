import Head from "next/head";
import { useState } from "react";
import Topnav from "../components/topnav";
import Footer from "../components/footer";
import Title from "../components/workbook/title";
import Sponsor from "../components/workbook/sponsor";
import styles from "../styles/Workbook.module.css";
import PROJECTS from "../public/projects.json";
import "@code-hike/mdx/dist/index.css";

interface WorkbookLayoutProps {
    projectTitle: string;
    content: React.ReactNode;
}

const WorkbookLayout = ({ projectTitle, content }: WorkbookLayoutProps) => {
    const [projects, _] = useState<{
        [key: string]: {
            description: string;
            field: string;
            difficulty: string;
            creator: string;
            date: string;
        };
    }>(PROJECTS);

    const [projectDetails, __] = useState(projects[projectTitle]);

    return (
        <div>
            <Head>
                <title>NexLiber | {projectTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content={projectDetails.description} />
                <meta name="author" content={projectDetails.creator} />
                <meta
                    property="og:title"
                    content={`NexLiber | ${projectTitle}`}
                />
                <meta
                    property="og:description"
                    content={projectDetails.description}
                />
                <meta
                    property="og:image"
                    content="https://nexliber.com/og-image.png"
                />
                <meta
                    property="og:url"
                    content={`https://nexliber.com/workbook/${projectTitle
                        .toLowerCase()
                        .split(" ")
                        .join("-")}`}
                />
                <meta property="og:type" content="website" />
            </Head>

            <main className={styles.main}>
                <Topnav />
                <Title title={projectTitle} {...projectDetails} />
                <section className={styles.content}>{content}</section>
                <Sponsor />
                <Footer />
            </main>
        </div>
    );
};

export default WorkbookLayout;
