import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" className="p-2 mb-3">
            <Link to={""} className="navbar-brand">
                BankApp
            </Link>
            <Nav className="mr-auto">
                <Link to={"add-user"} className="nav-link">Add User</Link>
                <Link to={"add-account"} className="nav-link">Add Account</Link>
                <Link to={"deposit"} className="nav-link">Deposit</Link>
                <Link to={"withdraw"} className="nav-link">Withdraw</Link>
                <Link to={"loan"} className="nav-link">Get Loan</Link>
                <Link to={"users"} className="nav-link">Show Users</Link>
                <Link to={"accounts"} className="nav-link">Show Accounts</Link>
                <Link to={"loans"} className="nav-link">Show Loans</Link>
            </Nav>
        </Navbar>
    );
};

export default NavigationBar;
