import type { NextPage } from "next";
import Link from "next/link";
import Code from "../../components/workbook/code";
import Quiz from "../../components/workbook/quiz";
import styles from "../../styles/Workbook.module.css";
import WorkbookLayout from "../../layouts/WorkbookLayout";

const Workbook: NextPage = () => {
    return (
        <WorkbookLayout
            projectTitle="Dragon Ball Classifier"
            content={
                <>
                    <h1 className={styles.header}>Setup</h1>
                    <p className={styles.paragraph}>
                        This project will be done on Google Colaboratory
                        (Colab), so no installations on your local machine is
                        necessary. However, you do need to sign into your Google
                        Account in order to use Colab. Once you have done so,
                        visit{" "}
                        <Link href="https://research.google.com/colaboratory/">
                            <a className={styles.link} target="_blank">
                                Colab
                            </a>
                        </Link>{" "}
                        and create a new{" "}
                        <span className={styles.highlight}>.ipynb</span> file by
                        clicking{" "}
                        <span className={styles.highlight}>New Notebook</span>.
                        You will see a new empty notebook with a single empty
                        code cell.
                    </p>

                    <h1 className={styles.header}>About the Project</h1>
                    <p className={styles.paragraph}>
                        You will be building an image classifier using{" "}
                        <Link href="https://github.com/fastai/fastai">
                            <a className={styles.link} target="_blank">
                                fastai
                            </a>
                        </Link>{" "}
                        and{" "}
                        <Link href="https://pytorch.org/">
                            <a className={styles.link} target="_blank">
                                PyTorch
                            </a>
                        </Link>
                        . The machine learning model will be classifying{" "}
                        <Link href="https://en.dragon-ball-official.com/">
                            <a className={styles.link} target="_blank">
                                Dragon Ball
                            </a>
                        </Link>{" "}
                        characters, specifically Goku, Vegeta, Gohan, and
                        Trunks. If you want to know why Dragon Ball, it&apos;s
                        because I&apos;m a fan ;).
                    </p>

                    <h1 className={styles.header}>Preparing the Dataset</h1>
                    <p className={styles.paragraph}>
                        Our image classifier needs data, specifically images of
                        the aforementioned Dragon Ball characters, to be trained
                        on. I have prepared{" "}
                        <span className={styles.highlight}>.csv</span> files
                        containing the URLs of various images of each of the 4
                        Dragon Ball characters{" "}
                        <Link href="https://github.com/xyntechx/Dragon-Ball-Classifier/tree/main/dragonball">
                            <a className={styles.link} target="_blank">
                                here
                            </a>
                        </Link>
                        . Download the files to your local machine, then upload
                        them onto Colab&apos;s Files side panel in a folder
                        named{" "}
                        <span className={styles.highlight}>dragonball</span>.
                    </p>

                    <h1 className={styles.header}>Installations and Imports</h1>
                    <p className={styles.paragraph}>
                        In the empty code cell in your notebook, you may write
                        commands to install fastai and PyTorch. To fix
                        compatibility issues unique for Colab, you will also
                        need to uninstall several preinstalled packages on
                        Colab.
                    </p>
                    <Code
                        code={`!pip uninstall "torchtext" "torchaudio"
!pip install "torch==1.4.0" "torchvision==0.5.0"
from fastai.vision import *
import os`}
                    />
                    <p className={styles.paragraph}>
                        The <span className={styles.highlight}>!</span> signals
                        Colab that the line is a command normally run directly
                        in the terminal, not code in the traditional sense.
                    </p>

                    <h1 className={styles.header}>Building the Dataset</h1>
                    <p className={styles.paragraph}>
                        Currently, we only have the URLs of the images to train
                        our model on, not the images themselves. We will be
                        downloading the images of each character to Colab into
                        separate subfolders of{" "}
                        <span className={styles.highlight}>/dragonball</span>.
                        First things first, let&apos;s create the subfolders.
                    </p>
                    <Code
                        code={`for character in characters:
    path = Path("dragonball")
    dest = path/character
    dest.mkdir(parents=True, exist_ok=True)`}
                    />
                    <p className={styles.paragraph}>
                        Wait! We haven&apos;t assigned a value to the list named{" "}
                        <span className={styles.highlight}>characters</span>!
                        Given that it needs to contain the names of the
                        characters we want to classify, what should be the value
                        of <span className={styles.highlight}>characters</span>?
                    </p>
                    <Quiz
                        question="characters = "
                        choices={[
                            `["goku", "gohan", "trunks"]`,
                            `["vegeta", "piccolo", "gohan", "trunks"]`,
                            `["vegeta", "goku", "gohan", "trunks"]`,
                        ]}
                        correctAnsIndex={2}
                        correctMessage="That's right! We will be training the model to identify Vegeta, Goku, Gohan, and Trunks."
                        wrongMessage="Are you sure?"
                    />
                    <p className={styles.paragraph}>
                        Now, we have to download the images using the URLs in
                        the <span className={styles.highlight}>.csv</span>{" "}
                        files.
                    </p>
                    <Code
                        code={`for character in characters:
    path = Path("dragonball")
    csv_file = Path("dragonball/" + character + ".csv")
    dest = path/character
    download_images(csv_file, dest, max_pics=100)`}
                    />
                    <p className={styles.paragraph}>
                        We also have to remove any images which can&apos;t be
                        opened so that our model can be trained smoothly.
                    </p>
                    <Code
                        code={`for character in characters:
    path = Path("dragonball")
    verify_images(path/character, delete=True, max_size=500)`}
                    />

                    <h1 className={styles.header}>Training the Model</h1>
                    <p className={styles.paragraph}>
                        Now that we have our dataset, we can train the image
                        classification model.
                    </p>
                    <Code
                        code={`data = ImageDataBunch.from_folder(path, train=".", valid_pct=0.2, ds_tfms=get_transforms(), size=224, num_workers=4).normalize(imagenet_stats)
learner = cnn_learner(data, models.resnet101, metrics=accuracy)
learner.fit_one_cycle(20)`}
                    />
                    <p className={styles.paragraph}>
                        The first line grabs all the valid images from{" "}
                        <span className={styles.highlight}>/dragonball</span>{" "}
                        and labels each of them with the names of their
                        corresponding characters. The second line creates the
                        model with ResNet101, a convolutional neural network
                        with 101 layers, as its backbone. Can you guess what the
                        third line does?
                    </p>
                    <Quiz
                        question="The third line..."
                        choices={[
                            `trains the model in 20 epochs or "rounds"`,
                            `creates 20 models and chooses the best one`,
                            `repeatedly trains the model in 20 minutes`,
                        ]}
                        correctAnsIndex={0}
                        correctMessage="Correct!"
                        wrongMessage="Try Again!"
                    />

                    <h1 className={styles.header}>Interpreting the Results</h1>
                    <p className={styles.paragraph}>
                        Good job! Your model can now identify four Dragon Ball
                        characters! To get a visualisation of how accurate it
                        is, run the following code.
                    </p>
                    <Code
                        code={`interp = ClassificationInterpretation.from_learner(learner)
interp.plot_confusion_matrix()`}
                    />

                    <h1 className={styles.header}>Testing the Model</h1>
                    <p className={styles.paragraph}>
                        Now, I&apos;m sure that you&apos;d want to see your
                        model in action on random images of the four characters
                        not found in the dataset you&apos;ve created. I have
                        prepared exactly that{" "}
                        <Link href="https://github.com/xyntechx/Dragon-Ball-Classifier/tree/main/test">
                            <a className={styles.link} target="_blank">
                                here
                            </a>
                        </Link>
                        . Download the 4 images and upload them onto
                        Colab&apos;s Files side panel in a folder named{" "}
                        <span className={styles.highlight}>test</span>. Images
                        1, 2, 3, and 4 are images of Vegeta, Goku, Gohan, and
                        Trunks respectively.
                    </p>
                    <Code
                        code={`model = load_learner(path)

for i in range(4):
    img_path = "test/" + str(i+1) + ".png"
    img = open_image(img_path)
    pred_class, pred_idx, outputs = model.predict(img)
    
    print(pred_class)
    print(data.classes)
    print(outputs)`}
                    />
                    <p className={styles.paragraph}>
                        The code above loads the model and uses it to predict
                        the character in each of the 4 test images. It then
                        prints out the results of the prediction. If your model
                        is not as accurate as you hope it to be, don&apos;t
                        hesitate to tweak some training parameters after
                        learning about them in the{" "}
                        <Link href="https://docs.fast.ai/">
                            <a className={styles.link} target="_blank">
                                fastai documentation
                            </a>
                        </Link>
                        .
                    </p>
                    <p className={styles.paragraph}>
                        That&apos;s all for the project! Feel free to include
                        more Dragon Ball characters, or even build more models
                        for different shows, movies, etc.
                    </p>

                    <h1 className={styles.header}>Reference</h1>
                    <p className={styles.paragraph}>
                        If you would like to see the complete code, you can do
                        so{" "}
                        <Link href="https://github.com/xyntechx/NexLiber-Projects/tree/main/Dragon%20Ball%20Classifier">
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
                </>
            }
        />
    );
};

export default Workbook;
