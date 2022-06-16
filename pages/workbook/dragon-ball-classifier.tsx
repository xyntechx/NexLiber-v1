import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Footer from "../../components/footer";
import Topnav from "../../components/topnav";
import Code from "../../components/workbook/code";
import Quiz from "../../components/workbook/quiz";
import Title from "../../components/workbook/title";
import styles from "../../styles/Workbook.module.css";

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
                    title="Dragon Ball Classifier"
                    description="An image classification model for Dragon Ball characters"
                    field="Machine Learning"
                    difficulty="Intermediate"
                    creator="Nyx Iskandar"
                />

                <section className={styles.content}>
                    <h1 className={styles.header}>Coming Soon...</h1>
                </section>

                {/* <section className={styles.content}>
                    <h1 className={styles.header}>Setup</h1>
                    <p className={styles.paragraph}>
                        Make sure that you have installed{" "}
                        <Link href="https://www.python.org/downloads/">
                            <a className={styles.link} target="_blank">
                                Python
                            </a>
                        </Link>{" "}
                        on your machine before getting started with the project.
                        Also, check that you have a code editor/IDE installed;
                        if you don&apos;t have one, I recommend installing{" "}
                        <Link href="https://code.visualstudio.com/download">
                            <a className={styles.link} target="_blank">
                                Visual Studio Code
                            </a>
                        </Link>
                        .
                    </p>
                    <p className={styles.paragraph}>
                        Once you have installed both Python and Visual Studio
                        Code (or any code editor/IDE of your choice), create a
                        Python file (a.k.a.{" "}
                        <span className={styles.highlight}>.py</span> file) and
                        write
                    </p>
                    <Code code={`print("Hello, World!")`} />
                    <p className={styles.paragraph}>Now, run your code!</p>
                    <Quiz
                        question="What do you see in the console?"
                        choices={[`print("Hello, World!")`, `Hello, World!`]}
                        correctAnsIndex={1}
                        correctMessage="Nice! You're on the right track!"
                        wrongMessage="Oops! Try again!"
                    />
                    <p className={styles.paragraph}>
                        Alright! Let&apos;s get started!
                    </p>

                    <h1 className={styles.header}>About the Project</h1>
                    <p className={styles.paragraph}>
                        Free Scrabble is a one-try, one-player game such that
                        the player&apos;s objective is to form the highest
                        scoring word possible (according to Scrabble letter
                        values) in one try. The game will give the player 7
                        random, not necessarily distinct, uppercase letters to
                        form the word with (the blank tile in Scrabble is
                        excluded to make the game more challenging). The player
                        then forms a valid Scrabble word using those letters and
                        is finally given a score computed based on Scrabble
                        letter values!
                    </p>
                    <p className={styles.paragraph}>
                        Now that we understand what we&apos;re going to do,
                        let&apos;s begin coding!
                    </p>

                    <h1 className={styles.header}>The Constants</h1>
                    <p className={styles.paragraph}>
                        In a game of Scrabble, we need all letters from A to Z.
                        It&apos;ll be good if we could store them in a list, so
                        let&apos;s do that!
                    </p>
                    <Code
                        code={`letters = [chr(i) for i in range(65, 91)]  # list of uppercase letters (A-Z)`}
                    />
                    <p className={styles.paragraph}>
                        The code above is a list comprehension converting ASCII
                        codes into characters (strings).
                    </p>
                    <p className={styles.paragraph}>
                        Now, we need to link these letters to their values.
                        Let&apos;s create another list called{" "}
                        <span className={styles.highlight}>points</span> and
                        create a dictionary mapping each letter to its
                        corresponding value.
                    </p>
                    <Code
                        code={`points = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]  # list of Scrabble letter values
letters_points = {letters: points for letters, points in zip(letters, points)} # dictionary of letters and points`}
                    />
                    <p className={styles.paragraph}>
                        We&apos;ll also need a list of valid Scrabble words to
                        check our answer against. For that, I have included a
                        text file filled with words{" "}
                        <Link href="https://github.com/xyntechx/NexLiber/blob/main/library/Free%20Scrabble/words.txt">
                            <a className={styles.link} target="_blank">
                                here
                            </a>
                        </Link>
                        . Let&apos;s read this file and transfer its contents to
                        a list.
                    </p>
                    <Code
                        code={`words = []

with open("words.txt") as file:  # open words.txt
    for word in file:
        words.append(word.strip().upper())  # append all words to an array`}
                    />

                    <h1 className={styles.header}>Random Letters</h1>
                    <p className={styles.paragraph}>
                        Since we need 7 random letters, we need Python&apos;s
                        built-in{" "}
                        <span className={styles.highlight}>random</span> module.
                        We don&apos;t need to install anything, but we do need
                        to import the module, specifically its{" "}
                        <span className={styles.highlight}>randint()</span>{" "}
                        method. This is because we&apos;ll be using the random
                        integer generated to index{" "}
                        <span className={styles.highlight}>letters</span>.
                    </p>
                    <Code
                        code={`from random import randint

inventory = []

for i in range(7):  # pick 7 letters
    letter = letters[randint(0, len(letters) - 1)]  # pick a random letter from letters
    inventory.append(letter)  # add letter to inventory`}
                    />

                    <h1 className={styles.header}>Gameplay</h1>
                    <p className={styles.paragraph}>
                        To start the game off, we will inform the player of the
                        7 letters they can use, and ask them to input a word.
                    </p>
                    <Code
                        code={`print("Possible letters to use:", inventory)
word = input("Enter word: ").strip().upper()`}
                    />
                    <br />
                    <Quiz
                        question={`What is the purpose of "Enter word: " in input()`}
                        choices={[
                            `It is a prompt to alert the player on what to do`,
                            `It is the value that will be passed into the variable word`,
                            `It is for the coder to know what the use of input() in this case is`,
                        ]}
                        correctAnsIndex={0}
                        correctMessage="Correct! The argument inside input() is a prompt and will not be passed into the variable word."
                        wrongMessage="That's not quite right. Try again!"
                    />
                    <p className={styles.paragraph}>
                        Let&apos;s also define a variable called{" "}
                        <span className={styles.highlight}>score</span> which
                        holds an integer that is the player&apos;s score.
                    </p>
                    <Code code={`score = 0`} />
                    <p className={styles.paragraph}>
                        Now, we check whether the word is a valid Scrabble word
                        by determining whether the word is in the{" "}
                        <span className={styles.highlight}>words</span> list. If
                        it is, we loop over every character of the inputted word
                        and see whether the character is in{" "}
                        <span className={styles.highlight}>inventory</span>. If
                        it is, we remove the character from{" "}
                        <span className={styles.highlight}>inventory</span> and
                        add the character&apos;s value to{" "}
                        <span className={styles.highlight}>score</span>.
                    </p>
                    <p className={styles.paragraph}>
                        If all goes well, we print out the player&apos;s score.
                    </p>
                    <Code
                        code={`if word in words:  # if the user creates a valid word
    for char in word:
        if char not in inventory:  # if the user enters an invalid letter
            print("Please only use the letters in your inventory")
            break
        else:
            inventory.remove(char)  # ensure the user only uses each occurrence of a letter once
            score += letters_points[char]
    else:  # if all letters are valid
        print("Good game! Your score is", score, ":D")
else:
    print("Remember to make a valid word!")`}
                    />
                    <p className={styles.paragraph}>
                        And that&apos;s it! Good work!
                    </p>

                    <h1 className={styles.header}>Reference</h1>
                    <p className={styles.paragraph}>
                        If you would like to see the complete code, you can do
                        so{" "}
                        <Link href="https://github.com/xyntechx/NexLiber/tree/main/library/Free%20Scrabble">
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
                </section> */}

                <Footer />
            </main>
        </div>
    );
};

export default Workbook;
