import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage, RegisterPage } from './pages';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Redirect to="/register" />
            </Switch>
        </div>
    );
};

export default App;
