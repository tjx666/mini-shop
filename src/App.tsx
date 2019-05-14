import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage, HomePage } from './pages';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect to="/home" />
            </Switch>
        </div>
    );
};

export default App;
