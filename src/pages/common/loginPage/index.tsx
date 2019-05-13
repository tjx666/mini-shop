import * as React from 'react';
import { LoginForm } from '../../../components';
import './style.scss';

export const LoginPage = () => {
    return (
        <main className="login-page">
            <span className="login-page-title">欢迎回来</span>
            <LoginForm />
        </main>
    );
};
