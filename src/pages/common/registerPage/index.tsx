import * as React from 'react';
import { RegisterForm } from '../../../components';
import './style.scss';

export const RegisterPage = () => {
    return (
        <main className="register-page">
            <div className="register-page-panel">
                <span className="register-page-welcome">欢迎注册微商城</span>
                <RegisterForm />
            </div>
        </main>
    );
};
