# Workbook Dev Guide
Congratulations! You are one step closer to becoming a published NexLiber Creator! Follow the steps below when writing your Workbook.

## Fork This Repository
Since you do not have write access to `xyntechx/NexLiber`, you have to fork this repository before creating a pull request with the completed Workbook. Follow GitHub's official guide [here](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to learn how you can fork a repository.

## Add Your Workbook
Here are the step-by-step instructions you should follow:
- Run `npm i` in the terminal to install all the necessary packages
- Add your project details to the top of `creator/projects.json` -- follow the format [here](#format-projectsjson)
- Add your Workbook (`project-title.mdx`) into `pages/workbook/` -- follow the format [here](#format-project-titlemdx)
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
},
// Older projects here
```

> Note: "Date" is the date of your "🔖 Complete Workbook: **Project Title**" commit

### Format: `project-title.mdx`
```md
import WorkbookLayout from "../../layouts/WorkbookLayout";
// NexLiber component imports -- refer to already-written Workbooks for examples
// Other external imports

# The Header

A paragraph.

Another paragraph... this time with [a link](https://nexliber.com/).

Here's some **highlighted text**!

[//]: # (And so on and so forth)

export default ({ children }) => (
    <WorkbookLayout projectTitle="Project Title" content={children} />
);
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
If you have any questions regarding this process or NexLiber in general, raise it up on our [Discord](/community)!
