import type { NextPage } from "next";
import Link from "next/link";
import Code from "../../components/workbook/code";
import Quiz from "../../components/workbook/quiz";
import styles from "../../styles/Workbook.module.css";
import WorkbookLayout from "../../layouts/WorkbookLayout";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { ethers, BigNumber } from "ethers";
import { formatEther } from "@ethersproject/units";

const Workbook: NextPage = () => {
    const provider = ethers.getDefaultProvider();

    const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
    const daiAbi = ["function balanceOf(address) view returns (uint256)"];
    const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);

    const [balances, setBalances]: [
        number[],
        Dispatch<SetStateAction<number[]>>
    ] = useState([0, 0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const fetchBalance = async () => {
            try {
                const addresses = [
                    "0x5555763613a12D8F3e73be831DFf8598089d3dCa",
                    "0x07EA23D8efb70Db2A7AEd8E77a93dD83cd12Fa53",
                    "0xfeb0387ed65409a1aa7b0689dc9328a12d64001c",
                ];
                const balances = [
                    await provider.getBalance(addresses[0]),
                    await provider.getBalance(addresses[1]),
                    await daiContract.balanceOf(addresses[2]),
                ];
                const parsedBalances: number[] = balances.map((balance) =>
                    parseFloat(formatEther(balance))
                );
                setBalances(parsedBalances);
                setLoaded(true);
            } catch (error) {
                console.log(error);
            }
        };

        fetchBalance();
    });

    const parseBalance = (balance: number, multiplier: number = 1.0) => {
        return parseFloat((balance * multiplier).toFixed(4)).toLocaleString();
    };

    return (
        <WorkbookLayout
            projectTitle="Blockchain Explorer"
            content={
                <>
                    <h1 className={styles.header}>Setup</h1>
                    <p className={styles.paragraph}>
                        This project assumes basic understanding of asynchronous
                        JavaScript, and I&apos;d recommend you to check out{" "}
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
                        <span className={styles.highlight}>index.js</span> file
                        (in VSCode) and write:{" "}
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
                        Alright, let&apos;s install one more dependency in the
                        command prompt:
                    </p>
                    <Code code="npm install --save ethers" />
                    <p className={styles.paragraph}>
                        …and let&apos;s get started!
                    </p>
                    <h1 className={styles.header}>About the Project</h1>
                    <p className={styles.paragraph}>
                        This workbook will guide you through the process of
                        interacting with the blockchain, while introducing you
                        to some of more important technicalities. At the end,
                        you will have a command line interface to query
                        balances, use smart contracts and interact with ERC-20
                        tokens.
                    </p>
                    <h1 className={styles.header}>Blockchain: in brief</h1>
                    <p className={styles.paragraph}>
                        In grossly simplified terms, the Ethereum blockchain,
                        like many others, is simply a centralised ledger
                        (basically a big dictionary of addresses and balances),
                        which is mutated through transactions, and controlled
                        through the consensus mechanism. Consider reading{" "}
                        <Link href="https://www.preethikasireddy.com/post/how-does-ethereum-work-anyway">
                            <a className={styles.link} target="_blank">
                                this
                            </a>
                        </Link>{" "}
                        comprehensive introduction to understand blockchain
                        better.
                    </p>
                    <h1 className={styles.header}>Querying Balances</h1>
                    <p className={styles.paragraph}>
                        Every blockchain has a native token, which can be used
                        to pay transaction fees (gas), run smart contracts, or
                        purchase real-world goods.
                        <br />⇒ for example, ether on Ethereum, Sol on Solana,
                        etc.
                    </p>
                    <p className={styles.paragraph}>
                        To interact with this native token on the Ethereum
                        blockchain, let&apos;s first clear our{" "}
                        <span className={styles.highlight}>index.js</span>, and
                        import the ethers library.
                    </p>
                    <Code code='const { ethers } = require("ethers");' />
                    <p className={styles.paragraph}>
                        To connect with the blockchain, a{" "}
                        <span className={styles.highlight}>Provider</span> must
                        first be instantiated.
                    </p>
                    <Code code="const provider = ethers.getDefaultProvider();" />
                    <p className={styles.paragraph}>
                        With this, we now gain access to a range of asynchronous
                        utility functions. To provide a testbed for testing,
                        let&apos;s create a quick async/await function:
                    </p>
                    <Code
                        code={`...
async function getBalance() {
  // most ethers code goes here

}

getBalance();`}
                    />
                    <p className={styles.paragraph}>
                        Let&apos;s first query the balance of a random wallet,
                        and put this following code <u>inside the function</u>{" "}
                        you just created:
                    </p>
                    <Code
                        code={`  const address = "0x5555763613a12D8F3e73be831DFf8598089d3dCa";
  const balance = await provider.getBalance(address);

  console.log(balance);`}
                    />
                    <p className={styles.paragraph}>
                        … and run the server again with{" "}
                        <span className={styles.highlight}>
                            node ./index.js
                        </span>
                    </p>
                    <h1 className={styles.header}>Formatting Balances</h1>
                    <p className={styles.paragraph}>
                        If you&apos;ve gotten a response from the last step, you
                        might notice the weird{" "}
                        <span className={styles.highlight}>BigNumber</span> data
                        type. This data type contains a hexstring (under{" "}
                        <span className={styles.highlight}>_hex</span>), which
                        must be parsed to obtain a floating point value.
                    </p>
                    <p className={styles.paragraph}>
                        To do this, let&apos;s first import{" "}
                        <span className={styles.highlight}>formatEther</span>{" "}
                        from the{" "}
                        <span className={styles.highlight}>ethers/utils</span>{" "}
                        library first.
                    </p>
                    <Code code='const { formatEther } = require("@ethersproject/units");' />
                    <p className={styles.paragraph}>
                        and refactor the code from earlier into this:
                    </p>
                    <Code
                        code={`  // most ethers code goes here
  const address = "0x5555763613a12D8F3e73be831DFf8598089d3dCa";
  const balance = await provider.getBalance(address);
  const parsedBalance = formatEther(balance)

  console.log(parsedBalance);
`}
                    />
                    <p className={styles.paragraph}>
                        Now let&apos;s just change the final logging statement
                        slightly:
                    </p>
                    <Code
                        code={`console.log(
    \`The address $\{requestedAddress\} has a balance of $\{parsedBalance\} ether.\`
  );
`}
                    />
                    <p className={styles.paragraph}>
                        …and then run the server with the `node ./index.js`
                        command from earlier.
                    </p>
                    <Quiz
                        question="How much ether does the address 0x5555763613a12D8F3e73be831DFf8598089d3dCa have?"
                        hasLoaded={loaded}
                        choices={[
                            `${parseBalance(balances[0], 0.97)}`,
                            `${parseBalance(balances[0], 0.93)}`,
                            `${parseBalance(balances[0])}`,
                            `${parseBalance(balances[0], 1.01)}`,
                        ]}
                        correctAnsIndex={2}
                        correctMessage="Good job! You're on the right track!"
                        wrongMessage="Oops! Try again!"
                    />
                    <h1 className={styles.header}>Adding Interactivity</h1>
                    <p className={styles.paragraph}>
                        Alright, final step: let&apos;s get users to key in
                        addresses they want to query, instead of hardcoding it
                        in. First, instantiate a variable to hold this address,
                        adding{" "}
                        <span className={styles.highlight}>
                            let requestedAddress;
                        </span>{" "}
                        below the provider.
                    </p>
                    <p className={styles.paragraph} style={{ marginBottom: 0 }}>
                        Let&apos;s then create a quick loop to:
                    </p>
                    <ol style={{ margin: 0 }} className={styles.paragraph}>
                        <li> Prompt users to key an address.</li>
                        <li>
                            {" "}
                            Use the{" "}
                            <span className={styles.highlight}>
                                isAddress
                            </span>{" "}
                            utility to check the validity of the address, and
                            loop back to the prompt if it&apos;s invalid.
                        </li>
                    </ol>
                    <p className={styles.paragraph}>
                        First off, let&apos;s install{" "}
                        <span className={styles.highlight}>prompt-sync</span>{" "}
                        through the terminal:
                    </p>
                    <Code code="npm install prompt-sync" />
                    <p className={styles.paragraph}>
                        Then, import{" "}
                        <span className={styles.highlight}>isAddress</span> and
                        this new library:
                    </p>
                    <Code
                        code={`…
const { isAddress } = require("@ethersproject/address");
const prompt = require("prompt-sync")({ sigint: true });
`}
                    />
                    <p className={styles.paragraph}>
                        and then replace the{" "}
                        <span className={styles.highlight}>
                            const address = …
                        </span>{" "}
                        statement with
                    </p>
                    <Code
                        code={`  while (true) {
    requestedAddress = prompt(
      "Which address' balance would you like to query?: "
    );

    if (isAddress(requestedAddress)) {
      console.log("retrieving balance...");
      break;
    } else {
      console.log(
        "Invalid address! Make sure to include the '0x' at the start..."
      );
    }
  }
`}
                    />
                    <p className={styles.paragraph}>
                        and finally, change the{" "}
                        <span className={styles.highlight}>address</span> in{" "}
                        <span className={styles.highlight}>getBalance()</span>{" "}
                        to{" "}
                        <span className={styles.highlight}>
                            requestedAddress
                        </span>
                        .
                    </p>
                    <Quiz
                        question="How much ether does address 0x07EA23D8efb70Db2A7AEd8E77a93dD83cd12Fa53 have?"
                        hasLoaded={loaded}
                        choices={[
                            `${parseBalance(balances[1], 1.07)}`,
                            `${parseBalance(balances[1], 0.95)}`,
                            `${parseBalance(balances[1], 0.98)}`,
                            `${parseBalance(balances[1])}`,
                        ]}
                        correctAnsIndex={3}
                        correctMessage="Good job! Let's move on to the next section."
                        wrongMessage="Oops! Try again!"
                    />

                    <h1 className={styles.header}>
                        Interacting with ERC-20 Tokens:{" "}
                    </h1>
                    <p className={styles.paragraph}>
                        Now besides the native currency, some blockchains have
                        smart contracts, which can be used to create a separate
                        token on the same blockchain. In this workbook, we will
                        interact with Dai, a ERC-20 (i.e. non-native) token.
                        Let&apos;s first create a new asynchronous function:
                    </p>
                    <Code
                        code={`…
getBalance()

async function getTokenBalance() {
  // most ethers code goes here

}
getTokenBalance()
`}
                    />
                    <p className={styles.paragraph}>
                        In the function, we first create an abstraction of the
                        smart contract:
                    </p>
                    <Code
                        code={`  const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const daiAbi = ["function balanceOf(address) view returns (uint256)"];
  const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
`}
                    />
                    <p className={styles.paragraph}>
                        For your information, the{" "}
                        <span className={styles.highlight}>daiAbi</span> is
                        needed to specify which functions from the contract will
                        be retrieved, and defined locally.
                    </p>
                    <p className={styles.paragraph}>
                        We then get an address with the prompt we wrote earlier:
                    </p>

                    <Code
                        code={`  while (true) {
    requestedAddress = prompt(
      "What address' balance would you like to retrieve?: "
    );

    if (isAddress(requestedAddress)) {
      console.log("retrieving balance...");
      break;
    } else {
      console.log(
        "Invalid address! Make sure to include the '0x' at the start..."
      );
    }
  }
`}
                    />
                    <p className={styles.paragraph}>
                        and grab its balance of Dai with the following code:
                    </p>
                    <Code
                        code={`  const balance = await daiContract.balanceOf(requestedAddress);`}
                    />
                    <p className={styles.paragraph}>
                        To parse the balance, we must now use this code:
                    </p>
                    <Code
                        code={`  const parsedBalance = parseInt(balance._hex, 16) / 10 ** 18;`}
                    />
                    <p className={styles.paragraph}>
                        Again, it is worth noting that values are stored as
                        integers on the blockchain (and in balance._hex). This
                        balance is actually raised to 10<sup>18</sup> of the
                        true value (for dai and ether), providing 18 artificial
                        decimal places.
                    </p>
                    <p className={styles.paragraph}>
                        Now, we log out the balance:
                    </p>
                    <Code
                        code={`  console.log(
    \`The address $\{requestedAddress\} has a balance of $\{parsedBalance\} DAI.\`
  );
`}
                    />
                    <p className={styles.paragraph}>
                        …and then re-run the server with{" "}
                        <span className={styles.highlight}>
                            node ./index.js
                        </span>
                    </p>
                    <Quiz
                        question="How much Dai does address 0xfeb0387ed65409a1aa7b0689dc9328a12d64001c have?"
                        hasLoaded={loaded}
                        choices={[
                            `${parseBalance(balances[2], 1.05)}`,
                            `${parseBalance(balances[2])}`,
                            `${parseBalance(balances[2], 0.96)}`,
                            `${parseBalance(balances[2], 1.09)}`,
                        ]}
                        correctAnsIndex={1}
                        correctMessage="Good job! Congrats on finishing the project!"
                        wrongMessage="Oops! Try again!"
                    />
                    <p className={styles.paragraph}>
                        Congratulations! You have completed the project! Feel
                        free to find and play around with some addresses from{" "}
                        <Link href="https://etherscan.io/">
                            <a className={styles.link} target="_blank">
                                etherscan
                            </a>
                        </Link>{" "}
                        or the{" "}
                        <Link href="https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f">
                            <a className={styles.link} target="_blank">
                                Dai contract
                            </a>
                        </Link>
                        , and consider checking out{" "}
                        <Link href="https://www.youtube.com/watch?v=62f757RVEvU&ab_channel=EatTheBlocks">
                            <a className={styles.link} target="_blank">
                                this tutorial
                            </a>
                        </Link>{" "}
                        to start writing your own smart contracts!
                    </p>
                    <h1 className={styles.header}>Reference</h1>
                    <p className={styles.paragraph}>
                        If you would like to see the complete code, you can do
                        so{" "}
                        <Link href="https://github.com/xyntechx/NexLiber-Projects/tree/main/Blockchain%20Explorer">
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
