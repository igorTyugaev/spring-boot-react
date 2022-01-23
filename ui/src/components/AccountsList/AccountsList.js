import React from 'react';
import {Card, Table} from "react-bootstrap";
import useGetList from "../../hooks/useGetList";

const AccountsList = () => {
    const {data, error, isLoading} = useGetList('accounts');

    return (
        <Card className="border border-dark bg-dark text-white">
            <Card.Header>Accounts List</Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                    <tr>
                        <th>Account ID</th>
                        <th>User ID</th>
                        <th>Balance</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.length ?
                            data?.map(({id, userId, balance}) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{userId}</td>
                                    <td>{balance}</td>
                                </tr>
                            )) :
                            <tr align="center">
                                <td colSpan="6">No Accounts Present.</td>
                            </tr>
                    }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default AccountsList;
