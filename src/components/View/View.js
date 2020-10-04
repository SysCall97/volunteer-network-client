import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import RegisteredEvents from '../RegisteredEvents/RegisteredEvents';

const View = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <Home />
                </Route>

                <Route path="/home">
                    <Home />
                </Route>

                <PrivateRoute path="/register/:id">
                    <Register />
                </PrivateRoute>

                <PrivateRoute path="/registeredEvents">
                    <RegisteredEvents />
                </PrivateRoute>

                <PrivateRoute path="/admin">
                    <Admin />
                </PrivateRoute>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="*">
                    <PageNotFound />
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default View;