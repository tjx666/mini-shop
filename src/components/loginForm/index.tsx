import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import './style.scss';

interface LoginFormProps {
    form: WrappedFormUtils;
}

const InnerLoginForm = ({ form }: LoginFormProps) => {
    const { getFieldDecorator } = form;
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    const UsernameInput = getFieldDecorator('username', {
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
                <a className="login-form-forgot" href="">
                    忘记密码
                </a>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-submit-button"
                >
                    登入
                </Button>
                <a href="">立即注册</a>
            </Form.Item>
        </Form>
    );
};

export const LoginForm = Form.create()(InnerLoginForm);
