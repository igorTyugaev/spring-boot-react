import React, {useState} from 'react';
import axios from "axios";
import {Button, Card, Col, Form} from "react-bootstrap";

const Loan = () => {
    const [userId, setUserId] = useState(null);
    const [sanctionAmount, setSanctionAmount] = useState(null);
    const [isLoading, setLoading] = useState(false);

    function submitLoan(e) {
        e.preventDefault();

        setLoading(true);
        axios.get("http://localhost:8080/addloan", {
                params: {
                    userId,
                    sanctionAmount,
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
                setUserId(null);
                setSanctionAmount(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function loanChange(e) {
        e.preventDefault();
        const {target} = e;
        const nameField = target?.name;
        const valueField = target?.value;

        switch (nameField) {
            case 'userId':
                setUserId(valueField);
                break;
            case 'sanctionAmount':
                setSanctionAmount(valueField);
                break;
            default:
                return;
        }
    }

    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Get Loan</Card.Header>
            <Form onSubmit={submitLoan} id="accountFormId">
                <Card.Body>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control required
                                      type="text" name="userId"
                                      value={userId || ""}
                                      onChange={loanChange}
                                      className={"bg-dark text-white"}
                                      placeholder="Enter User Id"/>
                        <Form.Label>Sanction Amount</Form.Label>
                        <Form.Control required
                                      type="number" name="sanctionAmount"
                                      value={sanctionAmount || ""}
                                      onChange={loanChange}
                                      className={"bg-dark text-white"}
                                      placeholder="Enter Sanction Amount"/>
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

export default Loan;
