import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddEvent from '../AddEvent/AddEvent';
import Admin from '../Admin/Admin';
import Home from '../Home/Home';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import RegisteredEvents from '../RegisteredEvents/RegisteredEvents';
import VolunteerRegisterList from '../VolunteerRegisterList/VolunteerRegisterList';

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

                <Route path="/volunteerregisterlist">
                    <VolunteerRegisterList />
                </Route>

                <Route path="/addEvent">
                    <AddEvent />
                </Route>

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