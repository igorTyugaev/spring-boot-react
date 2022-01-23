import React, {useState} from 'react';
import {Button, Card, Col, Form} from "react-bootstrap";
import axios from "axios";

const AddUser = () => {
    const [name, setName] = useState("");
    const [isLoading, setLoading] = useState(false);

    function submitUser(e) {
        e.preventDefault();

        setLoading(true);
        axios.get("http://localhost:8080/adduser", {params: {name}}, {
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
                setName("");
            })
            .finally(() => {
                setLoading(false);
            });
    }

    function userChange(e) {
        e.preventDefault();
        const value = e.target?.value;
        if (!value) return;
        setName(value);
    }

    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Add User</Card.Header>
            <Form onSubmit={submitUser} id="bookFormId">
                <Card.Body>
                    <Form.Group as={Col} controlId="formGridTitle">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control required
                                      type="text" name="username"
                                      value={name || ""}
                                      onChange={userChange}
                                      className={"bg-dark text-white"}
                                      placeholder="Enter User Name"/>
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

export default AddUser;
