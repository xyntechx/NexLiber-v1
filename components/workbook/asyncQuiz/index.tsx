// Special component for the blockchain-explorer Workbook.

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const Quiz = dynamic(() => import("../quiz"));
import { ethers } from "ethers";

export const fetchBalance = async () => {
    try {
        const provider = new ethers.providers.EtherscanProvider("homestead", process.env.API_KEY);
        provider.pollingInterval = 4000;
        const daiAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
        const daiAbi = ["function balanceOf(address) view returns (uint256)"];
        const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
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
        const parsedBalances: number[] = balances.map(
            (balance) => parseInt(balance._hex, 16) / 10 ** 18
        );
        return parsedBalances;
    } catch (error) {
        console.log(error);
    }
};
export const parseBalance = (balance: number, multiplier: number = 1.0) => {
    return parseFloat((balance * multiplier).toFixed(4)).toLocaleString();
};

const AsyncQuiz = ({
    question,
    balanceIndex,
    weights,
    correctAnsIndex,
    correctMessage,
    wrongMessage,
}: {
    question: string;
    balanceIndex: number;
    weights: number[];
    correctAnsIndex: number;
    correctMessage: string;
    wrongMessage: string;
}) => {
    const [loaded, setLoaded] = useState(false);
    const [choices, setChoices] = useState(["0", "0", "0", "0"]);
    useEffect(() => {
        const loadChoices = async () => {
            const balances = (await fetchBalance()) ?? [0, 0, 0, 0];
            const balance = balances[balanceIndex];
            setChoices(weights.map((e) => parseBalance(balance, e)));
            setLoaded(true);
        };
        loadChoices();
    }, []);
    return (
        <Quiz
            question={question}
            choices={choices}
            correctAnsIndex={correctAnsIndex}
            correctMessage={correctMessage}
            wrongMessage={wrongMessage}
            hasLoaded={loaded}
        />
    );
};

export default AsyncQuiz;
