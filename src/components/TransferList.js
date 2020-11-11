import React from 'react';
import {Table} from 'react-bootstrap';

function TransferList({transfers, approveTransfer}) {
    
  return (

    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Id</th>
      <th>Amount</th>
      <th>To</th>
      <th>Approvals</th>
      <th>sent</th>
    </tr>
  </thead>
  <tbody>
    {transfers.map(transfer=>(
      <tr key={transfer.id}>
        <td>{transfer.id}</td>
        <td>{transfer.amount}</td>
        <td>{transfer.to}</td>
        <td>{transfer.approvals}
          <button onClick={()=> approveTransfer(transfer.id)}>Approve</button>
        </td>
        <td>{transfer.sent ? 'yes':'no'}</td>
    </tr>
    ))}
    
      
  </tbody>
</Table>
  );
}

export default TransferList;