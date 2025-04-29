import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {Connection, LAMPORTS_PER_SOL} from "@solana/web3.js";

export  function RequestAirdrop() {
    const wallet= useWallet();
    const { connection } = useConnection();


    function requestAirdrop(){
        const publicKey = wallet.publicKey;
        const amount = document.getElementById("amount").value;
        connection.requestAirdrop(publicKey, amount * LAMPORTS_PER_SOL);
        
        return(
            alert("Airdrop request$")
        )
        
    }

    return(
    <div>
    <input id="amount" type="text" placeholder="Amount" />
    <button onClick={requestAirdrop}> request airdrop</button>
    {/* {wallet.publicKey.toBase58()} */}
    </div>
    )
}