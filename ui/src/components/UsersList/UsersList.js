import React from 'react';
import {Card, Table} from "react-bootstrap";
import useGetUsers from "../../hooks/useGetList";
import useGetList from "../../hooks/useGetList";

const UsersList = () => {
    const {data, error, isLoading} = useGetList('users');

    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>User List</Card.Header>
            <Card.Body>
                <Table bordered hover striped variant="dark">
                    <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data?.length ?
                            data?.map(({id, name}) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                </tr>
                            )) :
                            <tr align="center">
                                <td colSpan="6">Users Present.</td>
                            </tr>
                    }
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    );
};

export default UsersList;
