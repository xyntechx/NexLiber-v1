import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer";
import Topnav from "../../components/topnav";
import Title from "../../components/workbook/title";
import styles from "../../styles/Workbook.module.css";
import Code from "../../components/workbook/code";
import Quiz from "../../components/workbook/quiz";
import Pic from "../../components/pic";

const Workbook: NextPage = () => {
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

                <Title
                    title="Fresh Jokes"
                    description="A joke generator built with Fresh"
                    field="Web Development"
                    difficulty="Intermediate"
                    creator="Nyx Iskandar"
                />

                <section className={styles.content}>
                    <h1 className={styles.header}>Coming Soon...</h1>
                    {/* <p className={styles.paragraph}>
                        Before we get started, install{" "}
                        <Link href="https://nodejs.org/en/">
                            <a className={styles.link} target="_blank">
                                Node (version 10.13 or later)
                            </a>
                        </Link>{" "}
                        on your machine.
                    </p>
                    <p className={styles.paragraph}>
                        Once that&apos;s done, open up your terminal and run the
                        following command to create your Next.js project.
                    </p>
                    <Code code="npx create-next-app@latest" />
                    <p className={styles.paragraph}>
                        Then, <span className={styles.highlight}>cd</span> to
                        your project&apos;s directory and run
                    </p>
                    <Code code="npm run dev" />
                    <p className={styles.paragraph}>
                        as per the instructions written in your terminal. Using
                        your browser, navigate to{" "}
                        <span className={styles.highlight}>
                            http://localhost:3000
                        </span>
                        .
                    </p>
                    <Quiz
                        question="What is the first line written on the website?"
                        choices={[`Welcome to Next.js!`, `Hello, Next.js!`]}
                        correctAnsIndex={0}
                        correctMessage="Nice! You're on the right track!"
                        wrongMessage="Oops! Try again!"
                    />
                    <p className={styles.paragraph}>
                        Now, open your project in your favourite code
                        editor/IDE; if you don&apos;t have one, I recommend
                        installing{" "}
                        <Link href="https://code.visualstudio.com/download">
                            <a className={styles.link} target="_blank">
                                Visual Studio Code
                            </a>
                        </Link>
                        .
                    </p>

                    <h1 className={styles.header}>About the Project</h1>
                    <p className={styles.paragraph}>
                        This workbook will guide you through creating your own
                        simple portfolio website using Next.js. The website will
                        look something like this...
                    </p>
                    <Pic
                        src="https://raw.githubusercontent.com/xyntechx/NexLiber/main/library/Personal%20Portfolio%20Website/assets/2.png"
                        alt="Complete Personal Portfolio Website"
                        width={400}
                        height={260}
                    />
                    <p className={styles.paragraph}>
                        You will include your profile picture, about, skills,
                        and projects in the website. Of course, this website
                        looks quite plain, so you&apos;re free to modify it
                        yourself once you have completed this Workbook!
                    </p>

                    <h1 className={styles.header}>Cleaning Up</h1>
                    <p className={styles.paragraph}>
                        Let&apos;s start by removing some unnecessary code from
                        the project&apos;s files. First, clean{" "}
                        <span className={styles.highlight}>
                            Home.module.css
                        </span>{" "}
                        such that the file looks like this
                    </p>
                    <Code
                        code={`.container {
    padding: 0 2rem;
}

.main {
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}`}
                    />

                    <p className={styles.paragraph}>
                        Then, clean{" "}
                        <span className={styles.highlight}>index.js</span> such
                        that the file looks like this
                    </p>

                    <Code
                        code={`import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}></main>
        </div>
    );
}`}
                    />
                    <br />
                    <Quiz
                        question="What do you see on the website?"
                        choices={[`Nothing`, `Welcome to Next.js!`]}
                        correctAnsIndex={0}
                        correctMessage="Nice! You're on the right track!"
                        wrongMessage="Oops! Try again!"
                    />

                    <h1 className={styles.header}>Into the Metaverse</h1>
                    <p className={styles.paragraph}>
                        Before we start adding content to and styling your
                        website, let&apos;s take care of the website&apos;s meta
                        values, including its favicon, title, and description.
                    </p>
                    <p className={styles.paragraph}>
                        You can change the website&apos;s favicon to your own
                        logo or any other image! Just make sure to rename the
                        image file to{" "}
                        <span className={styles.highlight}>favicon.ico</span>{" "}
                        and move it to the{" "}
                        <span className={styles.highlight}>/public</span>{" "}
                        directory of your project.
                    </p>
                    <p className={styles.paragraph}>
                        Now, change the{" "}
                        <span className={styles.highlight}>title</span> tag in{" "}
                        <span className={styles.highlight}>Head</span> to
                    </p>
                    <Code code="<title>My Website</title>" />
                    <p className={styles.paragraph}>
                        and the <span className={styles.highlight}>meta</span>{" "}
                        tag in <span className={styles.highlight}>Head</span> to
                    </p>
                    <Code
                        code={`<meta
    name="description"
    content="My website created with Nexliber"
/>`}
                    />
                    <p className={styles.paragraph}>
                        or anything else you&apos;d like!
                    </p>

                    <Quiz
                        question="Did the look of your website change?"
                        choices={[`Yes`, `No`]}
                        correctAnsIndex={1}
                        correctMessage="Correct! Changing the meta values doesn't change how your website looks like. The only visible changes for this case are the favicon and title of the website!"
                        wrongMessage="Are you sure?"
                    />

                    <h1 className={styles.header}>Adding Content</h1>
                    <p className={styles.paragraph}>
                        A personal portfolio website wouldn&apos;t be complete
                        without a profile picture. Add the best photo of
                        yourself into the{" "}
                        <span className={styles.highlight}>/public</span>{" "}
                        directory and name it{" "}
                        <span className={styles.highlight}>profile.png</span>.
                        Now, we can make that image appear on the website by
                        adding the code below within the{" "}
                        <span className={styles.highlight}>main</span> tag.
                    </p>
                    <Code
                        code={`<Image
    src="/profile.png"
    width={200}
    height={200}
    alt="My Profile Picture"
/>`}
                    />
                    <p className={styles.paragraph}>
                        For your information,{" "}
                        <span className={styles.highlight}>src</span> is the
                        source URL of the image,{" "}
                        <span className={styles.highlight}>width</span> and{" "}
                        <span className={styles.highlight}>height</span> are the
                        image dimensions in pixels, and{" "}
                        <span className={styles.highlight}>alt</span> is an
                        attribute important for accessibility.
                    </p>
                    <p className={styles.paragraph}>
                        Below the image, add your name, about, skills, and
                        projects.
                    </p>
                    <Code
                        code={`<div className={styles.content}>
    <h1 className={styles.name}>Nyx Iskandar</h1>
    <p className={styles.text}>
        A teen passionate about computer science, research,
        entrepreneurship, and service-learning.
    </p>
    <p className={styles.text}>
        Next.js | Angular | Nuxt 3 | Svelte
    </p>
    <p className={styles.text}>
        Nexliber | NXpyre | Code for Hope
    </p>
</div>`}
                    />

                    <p className={styles.paragraph}>
                        To beautify your website, add some classes to{" "}
                        <span className={styles.highlight}>
                            Home.module.css
                        </span>
                        .
                    </p>
                    <Code
                        code={`.main {
    min-height: 100vh;
    padding: 2rem; 
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 5rem;
}

.content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    text-align: center;
}

.name {
    font-size: 3rem;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
}

.text {
    font-size: 1.5rem;
    text-align: center;
    margin: 0.5rem 0;
}`}
                    />
                    <p className={styles.paragraph}>
                        Nice! This is how your website should roughly look like!
                    </p>
                    <Pic
                        src="https://raw.githubusercontent.com/xyntechx/NexLiber/main/library/Personal%20Portfolio%20Website/assets/1.png"
                        alt="Incomplete Personal Portfolio Website"
                        width={400}
                        height={260}
                    />

                    <h1 className={styles.header}>
                        From Static to Interactive
                    </h1>
                    <p className={styles.paragraph}>
                        Hmm... The website looks a little bit cluttered. Why
                        don&apos;t we add some buttons to toggle between your
                        about, skills, and projects? Let&apos;s add them
                        underneath all the text.
                    </p>
                    <Code
                        code={`<div className={styles.buttonContainer}>
    <button className={styles.button}>About</button>
    <button className={styles.button}>Skills</button>
    <button className={styles.button}>Projects</button>
</div>`}
                    />

                    <p className={styles.paragraph}>
                        Let&apos;s style the buttons!
                    </p>
                    <Code
                        code={`.buttonContainer {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 1rem;
    width: 100%;
    margin-top: 2rem;
}

.button {
    font-size: 1.5rem;
    text-align: center;
    border: 0.1rem #3396ff solid;
    border-radius: 0.5rem;
    background-color: #fff;
    padding: 0.5rem;
    cursor: pointer;
    transition: 0.3s;
}

.button:hover, .button:focus {
    background-color: #3396ff;
}`}
                    />

                    <p className={styles.paragraph}>
                        Right now, the buttons don&apos;t do anything when
                        clicked. We can make the buttons functional by using the{" "}
                        <span className={styles.highlight}>useState</span>{" "}
                        method and some{" "}
                        <span className={styles.highlight}>if-else</span>{" "}
                        statements.
                    </p>
                    <p className={styles.paragraph}>First, import useState.</p>
                    <Code code={`import { useState } from "react";`} />
                    <p className={styles.paragraph}>
                        Then, outside of{" "}
                        <span className={styles.highlight}>return()</span>,
                        write
                    </p>
                    <Code code={`const [tab, setTab] = useState("about");`} />
                    <p className={styles.paragraph}>
                        What this does is set the value of{" "}
                        <span className={styles.highlight}>tab</span> to{" "}
                        <span className={styles.highlight}>
                            &quot;about&quot;
                        </span>
                        , and define a function{" "}
                        <span className={styles.highlight}>setTab()</span> which
                        changes the value of{" "}
                        <span className={styles.highlight}>tab</span> to the
                        argument passed into it when called. We will change the
                        value of <span className={styles.highlight}>tab</span>{" "}
                        every time a button is clicked. To do so, we will call{" "}
                        <span className={styles.highlight}>setTab()</span> when
                        that happens.
                    </p>
                    <Code
                        code={`<button className={styles.button} onClick={() => setTab("about")}>About</button>
<button className={styles.button} onClick={() => setTab("skills")}>Skills</button>
<button className={styles.button} onClick={() => setTab("projects")}>Projects</button>`}
                    />
                    <p className={styles.paragraph}>
                        We can now write the{" "}
                        <span className={styles.highlight}>if-else</span>{" "}
                        statements. Separately, wrap your about, skills, and
                        projects with
                    </p>
                    <Code code={`{tab === "tabname" && ()}`} />
                    <p className={styles.paragraph}>
                        such that{" "}
                        <span className={styles.highlight}>tabname</span> is the
                        intended value of the tab (i.e. about/skills/projects)
                        and the <span className={styles.highlight}>p</span> tag
                        containing your about, skills, or projects is located
                        between the parentheses.
                    </p>
                    <p className={styles.paragraph}>
                        Now, when you click the About button, your about will
                        appear; when you click the Skills button, your skills
                        will appear; and when you click the Projects button,
                        your projects will appear.
                    </p>
                    <p className={styles.paragraph}>
                        Congratulations! You have completed the project!
                    </p>

                    <h1 className={styles.header}>Reference</h1>
                    <p className={styles.paragraph}>
                        If you would like to see the complete code, you can do
                        so{" "}
                        <Link href="https://github.com/xyntechx/NexLiber/tree/main/library/Personal%20Portfolio%20Website">
                            <a className={styles.link} target="_blank">
                                here
                            </a>
                        </Link>
                        !
                    </p>

                    <h1 className={styles.header}>Discord Community</h1>
                    <p className={styles.paragraph}>
                        If you have questions about anything related to NexLiber
                        or this workbook, you&apos;re welcome to ask our
                        community on{" "}
                        <Link href="https://discord.gg/CvZGEjyzbR">
                            <a className={styles.link} target="_blank">
                                Discord
                            </a>
                        </Link>
                        !
                    </p> */}
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default Workbook;
