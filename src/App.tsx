import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginPage } from './pages';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Redirect to="/login" />
            </Switch>
        </div>
    );
};

export default App;
