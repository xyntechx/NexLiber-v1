# Workbook Dev Guide
Congratulations! You are one step closer to becoming a published NexLiber Creator! Follow the steps below when writing your Workbook.

## Fork This Repository
Since you do not have write access to `xyntechx/NexLiber`, you have to fork this repository before creating a pull request with the completed Workbook. Follow GitHub's official guide [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to learn how you can fork a repository.

## Add Your Workbook
Here are the step-by-step instructions you should follow:
- Run `npm i` in the terminal to install all the necessary packages
- Add your project details into `public/projects.json` -- follow the format [here](#format-projectsjson)
- Add your Workbook (`project-title.tsx`) into `pages/workbook/` -- follow the format [here](#format-project-titletsx)
- While writing your Workbook, review it by running `npm run dev` in the terminal and visiting `http://localhost:3000/` in your browser
- Once you are satisfied with your Workbook, test it for any bugs by running `npm run build` in the terminal
- If the test is successful, commit your changes with the message "🔖 Complete Workbook: **Project Title**"
- Push your changes to your fork's remote repository (the fork on your GitHub account)

### Format: `projects.json`
```json
"Project Title": {
    "description": "Project description",
    "field": "Project Field",
    "difficulty": "Difficulty",
    "creator": "Creator Name",
    "date": "Mon DD, YYYY"
}
```

> Note: "Date" is the date of your "🔖 Complete Workbook: **Project Title**" commit

### Format: `project-title.tsx`
```tsx
import type { NextPage } from "next";
import Link from "next/link";
import styles from "../../styles/Workbook.module.css";
import WorkbookLayout from "../../layouts/WorkbookLayout";
// NexLiber component imports (if necessary): Code, Pic, Quiz -- refer to already-written Workbooks for examples
// Other external imports (if necessary)

const Workbook: NextPage = () => {
    return (
        <WorkbookLayout
            projectTitle="Project Title"
            content={
                <>
                    {/* Workbook content goes here */}
                    <h1 className={styles.header}>The Header</h1>
                    <p className={styles.paragraph}>
                        A paragraph with{" "}
                        <Link href="https://nexliber.com/">
                            <a className={styles.link} target="_blank">
                                a link
                            </a>
                        </Link>{" "}
                        in it.
                    </p>
                    <p className={styles.paragraph}>
                        Another paragraph with{" "}
                        <span className={styles.highlight}>
                            some highlighted text
                        </span>
                        .
                    </p>
                    {/* And so on and so forth */}
                </>
            }
        />
    );
};

export default Workbook;
```

## Create a Pull Request
Now, create a Pull Request (PR) to the original `xyntechx/NexLiber` repository by following GitHub's official guide [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork).

Things to note:
- Title your PR "🔖 Complete Workbook: **Project Title**"
- Enter the **project description**, **field**, and **difficulty** in the comment field
- Additionally, enter your **name**, **GitHub username**, and **Discord username** in the comment field too

Your Workbook must be reviewed and approved by an admin before it is merged into the main branch.

## Next Steps
Upon merging, your Workbook will be put up on NexLiber, and you will be a published NexLiber Creator!

## Discord Community
If you have any questions regarding this process or NexLiber in general, raise it up on our [Discord](https://discord.gg/CvZGEjyzbR)!
