import React from 'react';
import {ListGroup, Card,Navbar,Nav} from 'react-bootstrap';
import './Header.css';

const Header=({approvers, quorum})=> (
    <>
    <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">MultiSig Wallet</Navbar.Brand>
                <Nav className="mr-auto">            
                </Nav>
                </Navbar>
    <div className="approve">
    <Card style={{ width: '35rem' }}>
                    <ListGroup className="approve" variant="flush">
                    <ListGroup.Item>Approvers:</ListGroup.Item>
                    <ListGroup.Item className="addresses">{approvers}</ListGroup.Item>
                    <ListGroup.Item>Quorum:</ListGroup.Item>
                    <ListGroup.Item>{quorum}</ListGroup.Item>
                    </ListGroup>
    </Card>
    </div>
    </>
    )


export default Header
