import React, {useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Form} from "react-bootstrap";

const Withdraw = () => {
    const [accountId, setAccountId] = useState(null);
    const [amount, setAmount] = useState(null);
    const [isLoading, setLoading] = useState(false);

    function submitWithdraw(e) {
        e.preventDefault();

        setLoading(true);
        axios.get("http://localhost:8080/withdrawmoney", {
                params: {
                    accountId,
                    amount,
                }
            }, {
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
                setAmount(null);
                setAccountId(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function withdrawChange(e) {
        e.preventDefault();
        const {target} = e;
        const nameField = target?.name;
        const valueField = target?.value;

        switch (nameField) {
            case 'accountId':
                setAccountId(valueField);
                break;
            case 'amount':
                setAmount(valueField);
                break;
            default:
                return;
        }
    }

    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Withdrawal Form</Card.Header>
            <Form onSubmit={submitWithdraw} id="depositFormId">
                <Card.Body>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>Account Id</Form.Label>
                        <Form.Control required
                                      type="text" name="accountId"
                                      value={accountId || ""}
                                      onChange={withdrawChange}
                                      className={"bg-dark text-white"}
                                      placeholder="Enter Account Id"/>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control required
                                      type="number" name="amount"
                                      value={amount || ""}
                                      onChange={withdrawChange}
                                      className={"bg-dark text-white"}
                                      placeholder="Enter Amount"/>
                    </Form.Group>
                </Card.Body>
                <Card.Footer style={{"textAlign": "right"}}>
                    <Button size="sm" variant="success" type="submit">
                        Submit
                    </Button>
                </Card.Footer>
            </Form>
        </Card>
    );
};

export default Withdraw;
