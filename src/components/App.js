import React, { useEffect, useState } from 'react';
import { getWeb3, getWallet } from './utils'; 
import Header from './Header.js';
import NewTransfer from './NewTransfer';
import TransferList from './TransferList';

function App() {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState(undefined);
  const [wallet, setWallet] = useState(undefined);
  const [approvers, setApprovers] = useState([]);
  const [transfers, setTransfer] = useState([]);
  const [quorum, setQuorum] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const accounts = await web3.eth.getAccounts();
      const wallet = await getWallet(web3);
      const approvers = await wallet.methods.getApprovers().call(); 
      const transfers = await wallet.methods.getTransfers().call(); 
      const quorum = await wallet.methods.quorum().call(); 
      setWeb3(web3);
      setAccounts(accounts);
      setWallet(wallet);
      setApprovers(approvers);
      setTransfer(transfers);
      setQuorum(quorum.toNumber());
    }
    init();
  }, []);

  const createTransfer = transfer => {
    wallet.methods
      .createTransfer(transfer.amount, transfer.to)
      .send({from: accounts[0], gas: 1000000});
  }
  const approveTransfer = transferId => {
    wallet.methods
      .approveTransfer(transferId)
      .send({from: accounts[0], gas: 1000000});
  }

  if(
    typeof web3 === 'undefined'
   || typeof wallet === 'undefined'
  ) {
    return <div>Loading...</div>;
  }

  
  console.log(approvers);
  console.log(quorum);
  console.log(transfers);
  
  return (
    <div>
      <Header approvers={approvers.join(', ')} quorum={quorum}/>
      <NewTransfer createTransfer={createTransfer}/>
      <TransferList transfers={transfers} approveTransfer={approveTransfer}/>
    </div>
  );
}

export default App;