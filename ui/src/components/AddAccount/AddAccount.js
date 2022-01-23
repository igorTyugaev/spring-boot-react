import React, {useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Form} from "react-bootstrap";

const AddAccount = () => {
    const [userId, setUserId] = useState(null);
    const [balance, setBalance] = useState(null);
    const [isLoading, setLoading] = useState(false);

    function submitAccount(e) {
        e.preventDefault();

        setLoading(true);
        const account = {
            userId,
            balance,
        };
        axios.get("http://localhost:8080/addaccount", {params: account}, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, PATCH, PUT, DELETE, OPTIONS',
                    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
                    'Access-Control-Allow-Credentials': true
                }
            },
            {withCredentials: true},
            {crossorigin: true})

            .then(response => {
                console.log(response);
                if (response.data === "") {
                    alert("More than 3 accounts found for User Id " + account.userId);
                }
                setUserId(null);
                setBalance(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function accountChange(e) {
        e.preventDefault();
        const {target} = e;
        const nameField = target?.name;
        const valueField = target?.value;

        switch (nameField) {
            case 'userId':
                setUserId(valueField);
                break;
            case 'balance':
                setBalance(valueField);
                break;
            default:
                return;
        }
    }

    return (
        <Card className="border border-dark bg-dark text-white">
            <Card.Header>Add Account</Card.Header>
            <Form onSubmit={submitAccount} id="accountFormId">
                <Card.Body>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control required
                                      type="text" name="userId"
                                      value={userId || ""}
                                      onChange={accountChange}
                                      className={"bg-dark text-white"}
                                      placeholder="Enter User Id"/>
                        <Form.Label>Balance</Form.Label>
                        <Form.Control required
                                      type="number" name="balance"
                                      value={balance || ""}
                                      onChange={accountChange}
                                      className={"bg-dark text-white"}
                                      placeholder="Enter Balance"/>
                    </Form.Group>
                </Card.Body>
                <Card.Footer style={{"textAlign": "right"}}>
                    <Button size="sm" variant="success" type="submit" disabled={isLoading}>
                        Submit
                    </Button>
                </Card.Footer>
            </Form>
        </Card>
    );
};

export default AddAccount;
