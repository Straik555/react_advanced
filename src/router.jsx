import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Layout from "./containers/Layout";
import './styles/main.scss'

export default (
    <Router>
        <Switch>
            <Route exact path={'/'} component={Layout}/>
        </Switch>
    </Router>
    )
