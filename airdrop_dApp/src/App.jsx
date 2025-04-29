import React, { FC,  } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
// import { clusterApiUrl } from '@solana/web3.js';
// const url = clusterApiUrl('devnet');
// console.log(url);


// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import './App.css'
import { RequestAirdrop } from './RequestAirdrop';
import { SolBalance } from './SolBalance';

function App() {

  return (
   <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
    <WalletProvider wallets={[]} autoConnect>
      <WalletModalProvider>
      <div>
           <WalletMultiButton/>
           <WalletDisconnectButton/>
           <RequestAirdrop/>
           <SolBalance/>
      </div>
      </WalletModalProvider>
    </WalletProvider>
   </ConnectionProvider>
  )
}

export default App
