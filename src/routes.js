import React, {Suspense, lazy} from "react";
import {  BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

const Login = lazy(() => import('./view/login/Login'));

const RoutesApp = () => (
    <Router>
        <Suspense fallback={<div></div>}>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/" component={Login} />
            </Switch>
        </Suspense>   
    </Router>
)


export default RoutesApp;