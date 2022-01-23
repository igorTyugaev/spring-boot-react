import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Container} from "react-bootstrap";
import NavigationBar from "./components/NavigationBar";
import AccountsList from "./components/AccountsList";
import AddAccount from "./components/AddAccount";
import AddUser from "./components/AddUser";
import UsersList from "./components/UsersList";
import LoansList from "./components/LoansList";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import Loan from "./components/Loan/Loan";

function App() {
    return (
        <Router>
            <NavigationBar/>
            <Container>
                <Switch>
                    <Route path="/users" exact component={UsersList}/>
                    <Route path="/add-user" exact component={AddUser}/>
                    <Route path="/accounts" exact component={AccountsList}/>
                    <Route path="/add-account" exact component={AddAccount}/>
                    <Route path="/loans" exact component={LoansList}/>
                    <Route path="/deposit" exact component={Deposit}/>
                    <Route path="/withdraw" exact component={Withdraw}/>
                    <Route path="/loan" exact component={Loan}/>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;
