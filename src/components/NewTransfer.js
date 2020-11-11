import React, {useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import './NewTransfer.css';

const NewTransfer=({createTransfer})=> {
    const [transfer ,setTransfer] = useState(undefined);

    const submit = e => {
        e.preventDefault();
        createTransfer(transfer);
      }
    
      const updateTransfer = (e, field) => {
        const value = e.target.value;
        setTransfer({...transfer, [field]: value});
      }

    return (
<Form onSubmit={(e)=>submit(e)}className="newTransfer">
    <h2>Create Transfer</h2>
  <Form.Group controlId="formAmount">
    <Form.Label>Amount to Send</Form.Label>
    <Form.Control 
        controlId="formAmount" 
        type="text" 
        placeholder="Enter amount" 
        onChange={e=>updateTransfer(e, 'amount')}
        />

  </Form.Group>

  <Form.Group controlId="formRecipient">
    <Form.Label>Recipient Address</Form.Label>
    <Form.Control 
        controlId="formRecipient" 
        type="text" 
        placeholder="Enter recipient"
        onChange={e=>updateTransfer(e, 'to')} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    )
}

export default NewTransfer
