import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Footer from "../components/footer";
import Project from "../components/project";
import Topnav from "../components/topnav";
import styles from "../styles/Library.module.css";
import PROJECTS from "../public/projects.json";

const Library: NextPage = () => {
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
                <title>NexLiber</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Create to Learn" />
                <meta name="author" content="Nyx Iskandar" />
                <meta property="og:title" content="NexLiber" />
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
                <h1 className={styles.title}>Library</h1>
                <br />
                <section className={styles.content}>
                    {Object.keys(projects).map((project_title) => (
                        <Project
                            key={project_title}
                            title={project_title}
                            {...projects[project_title]}
                        />
                    ))}
                </section>
                <Footer />
            </main>
        </div>
    );
};

export default Library;
