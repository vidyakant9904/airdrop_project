import { useConnection, useWallet} from "@solana/wallet-adapter-react";
//import { useEffect} from "react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export function SolBalance(){
    const {connection } = useConnection();
    const wallet = useWallet();

    async function getMeUserBalance(){
     const balance = await connection.getBalance(wallet.publicKey);
     document.getElementById("balance").innerHTML = balance / LAMPORTS_PER_SOL
    }

getMeUserBalance();

return <div>
    Balance: <span id="balance"> </span>SOL
</div>
}