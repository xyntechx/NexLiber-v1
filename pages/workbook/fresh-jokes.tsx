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
                    <h1 className={styles.header}>Setup</h1>
                    <p className={styles.paragraph}>
                        Follow the Get Started section of the{" "}
                        <Link href="https://fresh.deno.dev/#getting-started">
                            <a className={styles.link} target="_blank">
                                Fresh documentation
                            </a>
                        </Link>
                        . Enter <span className={styles.highlight}>y</span> for
                        the prompt{" "}
                        <span className={styles.highlight}>
                            Do you want to use &apos;twind&apos;
                            (https://twind.dev/) for styling?
                        </span>{" "}
                        and, if you use VSCode,{" "}
                        <span className={styles.highlight}>
                            Do you use VS Code?
                        </span>
                        .
                    </p>
                    <p className={styles.paragraph}>
                        Now, open your browser and visit{" "}
                        <span className={styles.highlight}>localhost:8000</span>
                        .
                    </p>
                    <Quiz
                        question="What image do you see?"
                        choices={[
                            `Nothing...`,
                            `An blackberry`,
                            `An apple`,
                            `A lemon`,
                        ]}
                        correctAnsIndex={3}
                        correctMessage="Awesome! Let's get started then!"
                        wrongMessage="Are you sure you selected the right fruit?"
                    />
                    <p className={styles.paragraph}>
                        Open your project in your favourite text editor/IDE and
                        let the development start!
                    </p>

                    <h1 className={styles.header}>About the Project</h1>
                    <p className={styles.paragraph}>
                        This project is a website built using a new web
                        framework (at the time of writing this workbook) called
                        Fresh (version 1.0.0). The website will generate random
                        jokes from a predetermined array of jokes as well as
                        enable the user to input a joke and display it on the
                        website.
                    </p>
                    <p className={styles.paragraph}>
                        Visiting Fresh Jokes, you will see the following page:
                    </p>
                    <Pic
                        src="https://raw.githubusercontent.com/xyntechx/NexLiber-Projects/main/Fresh%20Jokes/assets/1.png"
                        alt="Initial state of the website"
                        width={400}
                        height={260}
                    />
                    <p className={styles.paragraph}>
                        When you press the{" "}
                        <span className={styles.highlight}>Make My Own!</span>{" "}
                        button, a simple form appears.
                    </p>
                    <Pic
                        src="https://raw.githubusercontent.com/xyntechx/NexLiber-Projects/main/Fresh%20Jokes/assets/2.png"
                        alt="State of website when creating our own joke"
                        width={400}
                        height={260}
                    />

                    <h1 className={styles.header}>Project Structure</h1>
                    <p className={styles.paragraph}>
                        Make sure that your project has the structure as seen in
                        the image below. Empty all the files as well!
                    </p>
                    <Pic
                        src="https://raw.githubusercontent.com/xyntechx/NexLiber-Projects/main/Fresh%20Jokes/assets/3.png"
                        alt="Project structure"
                        width={175}
                        height={375}
                    />

                    <h1 className={styles.header}>Homepage</h1>
                    <p className={styles.paragraph}>
                        The file{" "}
                        <span className={styles.highlight}>
                            routes/index.tsx
                        </span>
                        , specifies the content of the{" "}
                        <span className={styles.highlight}>/</span> route of the
                        website. The code will be written in Typescript using
                        JSX syntax, which is used to describe how a user
                        interface (UI) should look like.
                    </p>
                    <p className={styles.paragraph}>
                        For Fresh to work, we will need to import{" "}
                        <span className={styles.highlight}>Preact</span>.{" "}
                        <span className={styles.highlight}>Tailwind</span>{" "}
                        should also be imported into the project for styling.
                    </p>
                    <Code
                        code={`/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";`}
                    />
                    <p className={styles.paragraph}>
                        The homepage includes a title to introduce what the
                        website is about. Below the title, you will be
                        displaying a random joke from an array of jokes in{" "}
                        <span className={styles.highlight}>utils/jokes.ts</span>
                        , followed by buttons to display another joke and to
                        fire up the form to create your own joke. Since these
                        components below the title require client side
                        interactivity, they are called islands, isolated
                        client-rendered Preact components, to be included in the{" "}
                        <span className={styles.highlight}>islands</span>{" "}
                        directory.
                    </p>
                    <p className={styles.paragraph}>
                        The islands for displaying the random joke and to create
                        your own joke will be called{" "}
                        <span className={styles.highlight}>Joke</span> and{" "}
                        <span className={styles.highlight}>Create</span>{" "}
                        respectively. According to Fresh guidelines, the TSX
                        files describing each island&apos;s logic and UI must be
                        named the name of the island in PascalCase.
                    </p>
                    <p className={styles.paragraph}>
                        In{" "}
                        <span className={styles.highlight}>
                            routes/index.tsx
                        </span>
                        , add the following code.
                    </p>
                    <Code
                        code={`import Joke from "../islands/Joke.tsx";
import Create from "../islands/Create.tsx";

export default function Home() {
    return (
        <main class={tw\`p-0 m-0 h-screen w-screen flex flex-col items-center justify-center\`}>
            <h1 class={tw\`p-0 m-2 text-2xl font-bold text-center\`}>
                Your daily dose of \`fresh\` jokes!
            </h1>
            <Joke index={0} />
            <Create />
        </main>
    );
}`}
                    />
                    <p className={styles.paragraph}>
                        <span className={styles.highlight}>tw`...`</span>{" "}
                        specifies the Tailwind classes to style the elements.
                    </p>

                    <h1 className={styles.header}>Array of Jokes</h1>
                    <p className={styles.paragraph}>
                        Let&apos;s now write the array of jokes in{" "}
                        <span className={styles.highlight}>utils/jokes.ts</span>
                        . The code below creates a constant which is an array of
                        strings. Feel free to modify the array yourself!
                    </p>
                    <Code
                        code={`const JOKES: string[] = [
    "Why do Java developers often wear glasses? They can't C#.",
    "A SQL query walks into a bar, goes up to two tables and says “can I join you?”",
    "Wasn't hard to crack Forrest Gump's password. 1forrest1.",
    "I love pressing the F5 key. It's refreshing.",
    "Called IT support and a chap from Australia came to fix my network connection.  I asked “Do you come from a LAN down under?”",
    "There are 10 types of people in the world. Those who understand binary and those who don't.",
    "Why are assembly programmers often wet? They work below C level.",
    "My favourite computer based band is the Black IPs.",
    "What programme do you use to predict the music tastes of former US presidential candidates? An Al Gore Rhythm.",
    "An SEO expert walked into a bar, pub, inn, tavern, hostelry, public house.",
];

export default JOKES;`}
                    />

                    <h1 className={styles.header}>Islands: Joke</h1>
                    <p className={styles.paragraph}>
                        This island will display a random joke and generate a
                        new one from the array of jokes once the{" "}
                        <span className={styles.highlight}>Another One!</span>{" "}
                        button is pressed.
                    </p>
                    <p className={styles.paragraph}>
                        To make this island work, you will need to import the{" "}
                        <span className={styles.highlight}>useState</span> hook
                        to access and set the index of the joke to be displayed
                        as well as the{" "}
                        <span className={styles.highlight}>JOKES</span> array
                        from{" "}
                        <span className={styles.highlight}>utils/jokes.ts</span>{" "}
                        for the random jokes.
                    </p>
                    <Code
                        code={`/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";
import JOKES from "../utils/jokes.ts";`}
                    />
                    <p className={styles.paragraph}>
                        For consistency, the first joke in the array will be
                        displayed when the website is first visited. To achieve
                        this, this island should have a parameter with type
                        number to represent the index of the joke. You will then
                        initialise the{" "}
                        <span className={styles.highlight}>index</span> state
                        with the argument passed into the island, which in our
                        case is 0.
                    </p>
                    <p className={styles.paragraph}>
                        Of course, you will need to display the random joke
                        itself, which is done by indexing the{" "}
                        <span className={styles.highlight}>JOKES</span> array.
                        The{" "}
                        <span className={styles.highlight}>Another One!</span>{" "}
                        button will generate a random integer from 0 to the
                        length of the array, set the integer as{" "}
                        <span className={styles.highlight}>index</span>, and
                        finally change the displayed joke.
                    </p>
                    <Code
                        code={`interface Props {
    index: number;
}

export default function Joke(props: Props) {
    const [index, setIndex] = useState(props.index);
    const btn = tw
        \`px-2 py-1 border(gray-100 1) hover:bg-yellow-100 w-max focus:outline-none mt-4\`;
    const text = tw\`p-0 m-2 text-xl\`;

    return (
        <div class={tw\`flex flex-col items-center justify-center\`}>
            <p class={text}>{JOKES[index]}</p>
            <button
                class={btn}
                onClick={() => setIndex(Math.floor(Math.random() * JOKES.length))}
                disabled={!IS_BROWSER}
            >
                Another One!
            </button>
        </div>
    );
}`}
                    />

                    <h1 className={styles.header}>Islands: Create</h1>
                    <p className={styles.paragraph}>
                        Similar to the previous island, this island requires the{" "}
                        <span className={styles.highlight}>useState</span> hook.
                    </p>
                    <Code
                        code={`/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { tw } from "@twind";`}
                    />
                    <p className={styles.paragraph}>
                        This is because we would need to check whether the user
                        is currently creating a joke, and check whether the user
                        has submitted the joke to display it, and store the new
                        joke (as a string).
                    </p>
                    <Code
                        code={`export default function Create() {
    const [isCreating, setIsCreating] = useState(false);
    const [show, setShow] = useState(false);
    const [joke, setJoke] = useState("");
    
    return()
}`}
                    />
                    <p className={styles.paragraph}>
                        When the user is not creating, the default{" "}
                        <span className={styles.highlight}>Make My Own!</span>{" "}
                        button should be shown. Otherwise, the simple form to
                        submit the joke must appear. The text input of the form
                        should update the value of the{" "}
                        <span className={styles.highlight}>joke</span> state
                        every time the user changes the value of the text input
                        by typing. Once the submit button is pressed, the joke
                        will be displayed.
                    </p>
                    <p className={styles.paragraph}>
                        In the <span className={styles.highlight}>return</span>{" "}
                        statement, write...
                    </p>
                    <Code
                        code={`
<div class={tw\`flex flex-col items-center justify-center\`}>
    {isCreating
        ? (
            <div class={tw\`flex flex-col items-center justify-center mt-10\`}>
                <input
                    class={tw
                    \`border(gray-100 1) rounded-md w-full text-lg py-1 px-2 focus:bg-yellow-100 focus:outline-none\`}
                    type="text"
                    placeholder="Enter joke"
                    onChange={(e) => setJoke(e.target.value)}
                />
                <button
                    class={tw\`px-2 py-1 mt-2 border(gray-100 1) hover:bg-yellow-100 focus:outline-none\`}
                    onClick={() => {
                    setShow(true);
                    setIsCreating(false);
                    }}
                >
                    Submit
                </button>
            </div>
        )
        : (
            <button
            class={tw\`px-2 py-1 mt-2 border(gray-100 1) hover:bg-yellow-100 focus:outline-none\`}
            disabled={isCreating}
            onClick={() => {
                setIsCreating(true);
                setJoke("");
            }}
            >
                Make My Own!
            </button>
        )
    }
    {show && <p class={tw\`p-0 text-xl mt-10 w-screen bg-yellow-100 text-center\`}>{joke}</p>}
</div>`}
                    />

                    <h1 className={styles.header}>Wrapping Up</h1>
                    <p className={styles.paragraph}>
                        Voila! The website is complete! Now, you can display
                        random developer jokes and even create your own.
                    </p>

                    <h1 className={styles.header}>Reference</h1>
                    <p className={styles.paragraph}>
                        If you would like to see the complete code, you can do
                        so{" "}
                        <Link href="https://github.com/xyntechx/NexLiber-Projects/tree/main/Fresh%20Jokes">
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
                    </p>
                </section>

                <Footer />
            </main>
        </div>
    );
};

export default Workbook;
