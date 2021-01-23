import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import './App.scss';

import NotFound from "../not-found/not-found";
import Main from "../main/main";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path={'/'} component={Main}/>
                    <Route path={'/404'} component={NotFound}/>
                    <Redirect to={'/404'}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
