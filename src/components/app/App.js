import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.scss';
import PrivateRoute from "../private-route";
import NotFound from "../not-found/not-found";
import Main from "../main/main";
import Signup from "../signup/signup";
import Login from "../login/login";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute exact path={'/'} component={Main}/>
                    <Route exact path={'/signup'} component={Signup}/>
                    <Route exact path={'/login'} component={Login}/>
                    <Route path={'/404'} component={NotFound}/>
                    <Redirect to={'/404'}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
