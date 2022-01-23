import React from 'react';
import {Card, Table} from "react-bootstrap";
import useGetList from "../../hooks/useGetList";

const LoansList = () => {
    const {data, error, isLoading} = useGetList('loans');

    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>Loans List</Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                    <tr>
                        <th>Loan ID</th>
                        <th>User ID</th>
                        <th>Sanction Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.length ?
                            data?.map(({id, userId, sanctionAmount}) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{userId}</td>
                                    <td>{sanctionAmount}</td>
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

export default LoansList;
