import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer";
import Topnav from "../../components/topnav";
import Code from "../../components/workbook/code";
import Quiz from "../../components/workbook/quiz";
import Title from "../../components/workbook/title";
import styles from "../../styles/Workbook.module.css";

const Workbook: NextPage = () => (
  <>
    <Head>
      <title>NexLiber</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="Create to Learn" />
      <meta name="author" content="Matthew Chan" />
      <meta property="og:title" content="NexLiber" />
      <meta property="og:description" content="Create to Learn" />
      <meta property="og:image" content="https://nexliber.com/og-image.png" />
      <meta property="og:url" content="https://nexliber.com/" />
      <meta property="og:type" content="website" />
    </Head>

    <main className={styles.main}>
      <Topnav />

      <Title
        title="Blockchain Explorer"
        description="An introduction to the blockchain, and related JavaScript Libraries"
        field="Web3 / Crypto"
        difficulty="Intermediate"
        creator="Matthew Chan"
      />

      <section className={styles.content}>
        <h1 className={styles.header}>Setup</h1>
        <p className={styles.paragraph}>
          This project assumes basic understanding of asynchronous JavaScript,
          and I&apos;d recommend you to check out{" "}
          <Link href="https://www.youtube.com/watch?v=vn3tm0quoqE">
            <a className={styles.link} target="_blank">
              this
            </a>
          </Link>{" "}
          course to learn it quickly.
        </p>
        <p className={styles.paragraph}>
          Make sure to install{" "}
          <Link href="https://nodejs.org/en/">
            <a className={styles.link} target="_blank">
              Node (version 16.17.0)
            </a>
          </Link>{" "}
          on your machine, and{" "}
          <Link href="https://code.visualstudio.com/">
            <a className={styles.link} target="_blank">
              Visual Studio Code
            </a>
          </Link>
          , should you need a code editor / IDE.
        </p>
        <p className={styles.paragraph}>
          Once that&apos;s done, hop into a new folder, create an{" "}
          <span className={styles.highlight}>index.js</span> file (in VSCode)
          and write{" "}
        </p>
        <Code code='console.log("1 + 1")' />
        <p className={styles.paragraph}>
          Then, open your command prompt, and run the server with{" "}
          <span className={styles.highlight}>node index.js</span>
        </p>
        <Quiz
          question="What do you see in the terminal?"
          choices={[`1`, `11`, `10`, `1 + 1`]}
          correctAnsIndex={3}
          correctMessage="Nice! You're on the right track!"
          wrongMessage="Oops! Try again!"
        />
        <p className={styles.paragraph}>
          Alright, let&apos;s install a one more dependency below:
        </p>
        <Code code="npm install --save ethers" />
        <p className={styles.paragraph}>…and let&apos;s get started!</p>

        <h1 className={styles.header}>About the Project</h1>
      </section>
    </main>
  </>
);

export default Workbook;
