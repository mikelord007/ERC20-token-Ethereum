import {useState, useEffect} from 'react'
import Web3 from "web3"
import detectEthereumProvider from '@metamask/detect-provider';
import AppAuthenticated from './components/AppAuthenticated';


const App = () => {
  const [walletConnected, setWalletConnected] = useState(false)
  const [instruction, setInstruction] = useState("Waiting for connection with wallet...")
  const [currentAccount, setcurrentAccount] = useState(null)


  function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
      // MetaMask is locked or the user has not connected any accounts
      console.log('Please connect to MetaMask.');
    } else if (accounts[0] !== currentAccount) {
      setcurrentAccount(accounts[0])
      setWalletConnected(true)
      setInstruction("")
    }
  }

  useEffect(() => {
    
    const connectWallet = async () => {

      const provider = await detectEthereumProvider();
      
      if (provider) {
        if (provider !== window.ethereum) {
          console.error('Do you have multiple wallets installed?');
        }
        else {
          ethereum
          .request({ method: 'eth_requestAccounts' })
          .then(handleAccountsChanged)
          .catch((err) => {
            console.error(err);
          });
          // window.web3 = new Web3(ethereum)
        }
      } else {
        console.log('Please install MetaMask!');
      }
    }

    connectWallet();

  },[])

  return (
    <div>
      {
        window.ethereum ?
          ( walletConnected?
            <AppAuthenticated/>
            : instruction):
            "Wallet not found"
      }
    </div>
  )
}

export default App