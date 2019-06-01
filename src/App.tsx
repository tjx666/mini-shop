import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
    LoginPage,
    RegisterPage,
    HomePage,
    CategoryPage,
    CategoryManage,
} from './pages';
import { AppHeader, AdminHeader } from './components';
import './App.scss';

const Frontend = () => {
    return (
        <div className="frontend">
            <AppHeader />
            <Switch>
                <Route path="/fe/home" component={HomePage} />
                <Route path="/fe/login" component={LoginPage} />
                <Route path="/fe/register" component={RegisterPage} />
                <Route path="/fe/category" component={CategoryPage} />
                <Redirect to="/fe/home" />
            </Switch>
        </div>
    );
};

const Backend = () => {
    return (
        <div className="backend">
            <AdminHeader />
            <Switch>
                <Route path="/be/category" component={CategoryManage} />
                <Redirect to="/be/category" />
            </Switch>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Switch>
                <Route path="/fe" component={Frontend} />
                <Route path="/be" component={Backend} />
                <Redirect to="/be" />
            </Switch>
        </div>
    );
};

export default App;
