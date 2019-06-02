import * as React from 'react';
import { Link } from 'react-router-dom';
import { message, Form, Icon, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { login } from '../../api/AccountApi';
import './style.scss';
const configuration = require('../../constants/config');

interface LoginFormProps {
    form: WrappedFormUtils;
}

const InnerLoginForm = ({ form }: LoginFormProps) => {
    const { getFieldDecorator } = form;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const { email, password } = values;
                login(email, password)
                    .then(response => {
                        if (response.data.message === 'SUCCESS') {
                            message.success('登入成功!');
                            window.location.href =
                                'http://localhost:3000/fe/home';
                        } else {
                            message.error('登入失败！请检查您的邮箱和密码！');
                        }
                    })
                    .catch(error => console.error(error));
            }
        });
    };

    const UsernameInput = getFieldDecorator('email', {
        rules: [
            {
                required: true,
                message: '请输入用户名!',
            },
        ],
    })(
        <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="用户名"
        />
    );

    const PasswordInput = getFieldDecorator('password', {
        rules: [
            {
                required: true,
                message: '请输入密码!',
            },
        ],
    })(
        <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="密码"
        />
    );

    const RememberCheckbox = getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true,
    })(<Checkbox className="login-form_remember-me">记住密码</Checkbox>);

    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>{UsernameInput}</Form.Item>
            <Form.Item>{PasswordInput}</Form.Item>
            <Form.Item>
                {RememberCheckbox}
                <Link className="login-form-register" to="/register">
                    立即注册
                </Link>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-submit-button"
                >
                    登入
                </Button>
            </Form.Item>
        </Form>
    );
};

export const LoginForm = Form.create({ name: 'login' })(InnerLoginForm);
