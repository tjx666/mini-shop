import * as React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { RegisterForm } from '../../../components';
import './style.scss';

export const RegisterPage = () => {
    return (
        <main className="register-page">
            <div className="register-page-panel">
                <Link className="register-page-close" to="/login">
                    <Icon type="close" />
                </Link>
                <span className="register-page-welcome">欢迎注册微商城</span>
                <RegisterForm />
            </div>
        </main>
    );
};
