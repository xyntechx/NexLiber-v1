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
                    title="Typing Test"
                    description="A typing speed and accuracy test written purely in Python"
                    field="Vanilla (Python)"
                    difficulty="Intermediate"
                    creator="Nyx Iskandar"
                />

                <section className={styles.content}>
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
                        This python script will prompt users to type into the
                        terminal/command line a certain number of words as
                        chosen by the users themselves. It will then calculate
                        the typing speed and accuracy based on the time taken to
                        type the specified number of characters and the number
                        of words spelled correctly respectively.
                    </p>

                    <h1 className={styles.header}>Getting the Words</h1>
                    <p className={styles.paragraph}>
                        Before even writing any code, we need to have a list of
                        words the users can type. Luckily, MIT has a text file
                        of valid English words made available to the public{" "}
                        <Link href="https://www.mit.edu/~ecprice/wordlist.10000">
                            <a className={styles.link} target="_blank">
                                here
                            </a>
                        </Link>
                        . The text file,{" "}
                        <span className={styles.highlight}>words.txt</span> is
                        included in this project&apos;s{" "}
                        <Link href="https://github.com/xyntechx/NexLiber-Projects/blob/main/Typing%20Test/words.txt">
                            <a className={styles.link} target="_blank">
                                GitHub repository
                            </a>
                        </Link>
                        . Download the text file into the folder your Python
                        file, <span className={styles.highlight}>main.py</span>,
                        is in.
                    </p>

                    <h1 className={styles.header}>The &quot;Interface&quot;</h1>
                    <p className={styles.paragraph}>
                        Let&apos;s start by coding up the &quot;user
                        interface&quot; of the project. We need the program to
                        ask the users to input the number of words they wish to
                        type. Hence, in{" "}
                        <span className={styles.highlight}>main.py</span>, we
                        write
                    </p>
                    <Code
                        code={`number_of_words = int(input("How many words do you want to type (e.g. 50)? "))`}
                    />
                    <p className={styles.paragraph}>
                        Logically, we cannot have the user input 0 or a negative
                        number, right? We should write a check for that!
                    </p>
                    <Code
                        code={`if number_of_words <= 0:
    raise Exception("Please input a positive integer!")`}
                    />
                    <p className={styles.paragraph}>
                        Next, we should generate the number of words as
                        specified by the user. To do that, we would have to
                        write a function which selects random words from the
                        text file we downloaded earlier. For now, though,
                        let&apos;s call the function first and define it later!
                    </p>
                    <Code
                        code={`words = generate_words("words.txt", number_of_words)`}
                    />
                    <br />
                    <Quiz
                        question="Can you guess what the arguments of the function are?"
                        choices={[
                            "The name of the text file and the words to generate",
                            "The name of the text file and the number of words to generate",
                            "The word to type and the number of words to generate",
                        ]}
                        correctAnsIndex={1}
                        correctMessage="That's right! generate_words() takes these 2 arguments!"
                        wrongMessage="Are you sure?"
                    />
                    <p className={styles.paragraph}>
                        We should also print out the words generated! So,
                        include the following{" "}
                        <span className={styles.highlight}>print</span>{" "}
                        statements!
                    </p>
                    <Code
                        code={`print("TYPE THE FOLLOWING WORDS...")
print(words)`}
                    />
                    <p className={styles.paragraph}>
                        It is timely now to create our timer! We need to record
                        the time taken for the user to type the specified number
                        of words, hence we will start the timer once the user is
                        ready to type, and stop the timer once the user has
                        finished typing all the words. We will use the Python{" "}
                        <span className={styles.highlight}>time</span> module to
                        create the timer.
                    </p>
                    <Code
                        code={`prompt = input("Press Enter to start...")
start = time.time()
user_words = input()
end = time.time()
time_taken = end - start`}
                    />
                    <p className={styles.paragraph}>
                        Don&apos;t forget to import the module at the top of
                        your Python file!
                    </p>
                    <Code code={`import time`} />
                    <p className={styles.paragraph}>
                        The purpose of{" "}
                        <span className={styles.highlight}>prompt</span> is to
                        prevent the timer from starting before user is ready;
                        the timer will only start once the user presses{" "}
                        <span className={styles.highlight}>Enter</span>. Then,
                        we take the words typed by the user as input, storing
                        them as a string in{" "}
                        <span className={styles.highlight}>user_words</span>. We
                        stop the timer once the user presses{" "}
                        <span className={styles.highlight}>Enter</span> again,
                        ideally after typing all the generated words. We can
                        then calculate the time taken.
                    </p>
                    <p className={styles.paragraph}>
                        Afterwards, we want to calculate the speed and accuracy
                        of the user. To do so, we will write the functions{" "}
                        <span className={styles.highlight}>
                            evaluate_speed()
                        </span>{" "}
                        and{" "}
                        <span className={styles.highlight}>
                            evaluate_accuracy()
                        </span>
                        . To calculate speed, we certainly need the number of
                        words (or characters) the user has typed as well as the
                        time taken to type them. To calculate accuracy, we
                        definitely need the words typed by the user and the
                        actual words to be typed.
                    </p>
                    <Code
                        code={`speed = evaluate_speed(user_words, time_taken)
accuracy = evaluate_accuracy(user_words, words)

print("Speed:", speed)
print("Accuracy:", accuracy)`}
                    />
                    <p className={styles.paragraph}>
                        Okay! We&apos;re now ready to write the functions!
                    </p>

                    <h1 className={styles.header}>Generate Words</h1>
                    <p className={styles.paragraph}>
                        The function{" "}
                        <span className={styles.highlight}>
                            generate_words()
                        </span>{" "}
                        takes 2 arguments: the name of the text file and the
                        number of words to generate. We need to access{" "}
                        <span className={styles.highlight}>words.txt</span> and
                        randomly select a certain number of words from it. The
                        selection is random to increase the difficulty of the
                        test, and therefore make it more interesting!
                    </p>
                    <Code
                        code={`def generate_words(file_name, number_of_words):
    with open(file_name) as file:
        word_set = set(file.read().split())
        words_used = list(word_set)[0: number_of_words]
        sentence = " ".join(words_used)
        return sentence`}
                    />
                    <p className={styles.paragraph}>
                        First, we open{" "}
                        <span className={styles.highlight}>words.txt</span>.
                        Then, we read the file and split its contents per the
                        whitespace (newlines) and hence per word, since every
                        word in the file is in a new line. We convert the split
                        file (which has become a list) into a set so that the
                        words are randomised (a set in Python is a collection of
                        unique elements in no particular order). This set is{" "}
                        <span className={styles.highlight}>word_set</span>. Of
                        course, you can always use the{" "}
                        <span className={styles.highlight}>random</span> module,
                        but this way also works, and it also ensures there will
                        be no repeated words in the generated
                        &quot;sentence&quot;.
                    </p>
                    <p className={styles.paragraph}>
                        Since we want to select a certain number of words, we
                        first reconvert the set of words into a list. The list
                        can then be sliced to obtain the specified number of
                        words. Then, we join the words in the list{" "}
                        <span className={styles.highlight}>words_used</span>{" "}
                        with a space (&quot; &quot;) to form the string{" "}
                        <span className={styles.highlight}>sentence</span>. We
                        return this string, which is the generated words to be
                        typed by the user, from the function.
                    </p>

                    <h1 className={styles.header}>Evaluate Speed</h1>
                    <p className={styles.paragraph}>
                        This function takes as input the words typed and the
                        time taken to type those words. It then returns the
                        typing speed in characters per minute (cpm). Usually,
                        words per minute (wpm) is used, but I believe cpm is a
                        more accurate measure since it is independent of biases
                        like the length of the words generated.
                    </p>
                    <Code
                        code={`def evaluate_speed(words, time_taken):
    number_of_chars = len(words)
    time_taken_mins = time_taken / 60

    speed_magnitude = number_of_chars / time_taken_mins
    speed = "{:.1f}".format(speed_magnitude) + " cpm"

    return speed`}
                    />
                    <p className={styles.paragraph}>
                        To find the number of characters typed, we find the
                        length of the string{" "}
                        <span className={styles.highlight}>words</span> which
                        was typed by the user. Since the time taken calculated
                        using the Python{" "}
                        <span className={styles.highlight}>time</span> module is
                        in seconds, we convert it to minutes first before
                        plugging it into the equation for speed. Finally, we
                        return the calculated speed value corrected to 1 decimal
                        place, just to make it look pretty.
                    </p>

                    <h1 className={styles.header}>Evaluate Accuracy</h1>
                    <p className={styles.paragraph}>
                        Here is how accuracy is evaluated: we will compare the
                        first generated word and the first typed word, award 1
                        point to the user if they are the same (typed word is
                        correctly spelled) and 0 points if they are different
                        (typed word is incorrectly spelled), and then move on to
                        the next generated and typed words.
                    </p>
                    <p className={styles.paragraph}>
                        The function has 2 arguments: the words typed by the
                        user and the words generated by{" "}
                        <span className={styles.highlight}>
                            generate_words()
                        </span>
                        . To be able to compare a word from each of those
                        strings with each other, we have to convert the strings
                        into lists so that each index corresponds to a word,
                        which is an element in the lists, instead of a
                        character, which is an element in the strings.
                    </p>
                    <Code
                        code={`def evaluate_accuracy(user_words, actual_words):
    actual_list = actual_words.split()
    user_list = user_words.split()`}
                    />
                    <p className={styles.paragraph}>
                        Then, we initialise the score (number of points obtained
                        by the user) to 0.
                    </p>
                    <Code code={`score = 0`} />
                    <br />
                    <Quiz
                        question="Why initialise to 0?"
                        choices={[
                            `Because the user has yet to earn points`,
                            `Because the user has typed every word wrongly`,
                        ]}
                        correctAnsIndex={0}
                        correctMessage="Yup! Quite obvious, right?"
                        wrongMessage="Dare to venture another guess?"
                    />
                    <p className={styles.paragraph}>
                        We also need the total number of words as we want to
                        find the number of correctly spelled words out of the
                        total number of words. Hence, we find the length of{" "}
                        <span className={styles.highlight}>actual_list</span>.
                    </p>
                    <Code code={`total = len(actual_list)`} />
                    <p className={styles.paragraph}>
                        Since we need to loop over the lists, we must find the
                        length of the lists. There is a chance that the user
                        might give up halfway through typing, causing the length
                        of <span className={styles.highlight}>user_list</span>{" "}
                        to be shorter than that of{" "}
                        <span className={styles.highlight}>actual_list</span>.
                        There is also a chance that the user may overtype,
                        causing the opposite to happen. We hence need the number
                        of &quot;rounds&quot; of looping to be the smaller of
                        the two lengths to prevent any indexing errors due to
                        inaccessible indices in the shorter list.
                    </p>
                    <Code
                        code={`length = 0

if len(user_list) <= len(actual_list):
    length = len(user_list)
else:
    length = len(actual_list)`}
                    />
                    <p className={styles.paragraph}>
                        Now, we can finally write the actual comparison to tally
                        up the score. Remember that the score increases by 1 for
                        every correctly spelled word, and does not change for
                        every incorrectly spelled word.
                    </p>
                    <Code
                        code={`for i in range(length):
    user_word = user_list[i]
    actual_word = actual_list[i]
    if user_word == actual_word:
        score += 1`}
                    />
                    <p className={styles.paragraph}>
                        We can now calculate and return accuracy, rounding it
                        off to 1 decimal place, in percentage form.
                    </p>
                    <Code
                        code={`accuracy = "{:.1f}".format((score / total) * 100) + "%"
return accuracy
`}
                    />
                    <p className={styles.paragraph}>And... we&apos;re done!</p>

                    <h1 className={styles.header}>Reference</h1>
                    <p className={styles.paragraph}>
                        If you would like to see the complete code, you can do
                        so{" "}
                        <Link href="https://github.com/xyntechx/NexLiber-Projects/tree/main/Typing%20Test">
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
