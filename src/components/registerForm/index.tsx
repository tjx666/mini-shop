import * as React from 'react';
import {
    message,
    Form,
    Input,
    Tooltip,
    Icon,
    Select,
    Checkbox,
    Button,
} from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { register } from '../../api/AccountApi';
import './style.scss';

const { Option } = Select;

interface RegisterFormProps {
    form: WrappedFormUtils;
}

const InnerRegisterForm = ({ form }: RegisterFormProps) => {
    const { getFieldDecorator } = form;
    const [confirmDirty, setConfirmDirty] = React.useState<boolean>(false);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            const { email, name, password, phone } = values;
            if (!err) {
                register(email, name, password, phone)
                    .then(response => {
                        if (response.data.message === 'SUCCESS') {
                            message.success('注册成功！');
                            window.location.href =
                                'http://localhost:3000/login';
                        } else {
                            message.error('注册失败!');
                            console.error(response);
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        message.error(
                            `注册失败！失败原因：${JSON.stringify(
                                error,
                                null,
                                2
                            )}`
                        );
                    });
            }
        });
    };

    const handleConfirmBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        const value = event.target.value;
        !confirmDirty && setConfirmDirty(!!value);
    };

    const compareToFirstPassword = (rule: any, value: any, callback: any) => {
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码不一致！');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule: any, value: any, callback: any) => {
        if (value && confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };

    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    const prefixSelector = getFieldDecorator('prefix', {
        initialValue: '86',
    })(
        <Select style={{ width: 70 }}>
            <Option value="86">+86</Option>
            <Option value="87">+87</Option>
        </Select>
    );

    const EmailInput = getFieldDecorator('email', {
        rules: [
            {
                type: 'email',
                message: '您输入的邮箱地址不是有效的邮箱地址！',
            },
            {
                required: true,
                message: '请输入邮箱地址！',
            },
        ],
    })(<Input />);

    const PasswordInput = getFieldDecorator('password', {
        rules: [
            {
                required: true,
                message: '请输入邮箱账号对应的密码！',
            },
            {
                validator: validateToNextPassword,
            },
        ],
    })(<Input.Password />);

    const ConfirmPasswordInput = getFieldDecorator('confirm', {
        rules: [
            {
                required: true,
                message: '请重复一遍您的密码！',
            },
            {
                validator: compareToFirstPassword,
            },
        ],
    })(<Input.Password onBlur={handleConfirmBlur} />);

    const NickNameInput = getFieldDecorator('name', {
        rules: [
            {
                required: true,
                message: '请输入用户昵称！',
                whitespace: true,
            },
        ],
    })(<Input />);

    const PhoneInput = getFieldDecorator('phone', {
        rules: [
            {
                required: true,
                message: '请输入您的手机或电话号码！',
            },
        ],
    })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />);

    const AgreementCheckbox = getFieldDecorator('agreement', {
        valuePropName: 'checked',
    })(
        <Checkbox>
            我已经阅读并同意<a href="/agreement">用户协议</a>
        </Checkbox>
    );

    return (
        <Form
            className="register-form"
            {...formItemLayout}
            onSubmit={handleSubmit}
        >
            <Form.Item label="邮箱">{EmailInput}</Form.Item>
            <Form.Item label="密码" hasFeedback>
                {PasswordInput}
            </Form.Item>
            <Form.Item label="重复密码" hasFeedback>
                {ConfirmPasswordInput}
            </Form.Item>
            <Form.Item
                label={
                    <span>
                        昵称&nbsp;
                        <Tooltip title="给自己取一个昵称吧?">
                            <Icon type="question-circle-o" />
                        </Tooltip>
                    </span>
                }
            >
                {NickNameInput}
            </Form.Item>
            <Form.Item label="联系电话">{PhoneInput}</Form.Item>
            <Form.Item {...tailFormItemLayout}>{AgreementCheckbox}</Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    注册
                </Button>
            </Form.Item>
        </Form>
    );
};

export const RegisterForm = Form.create({ name: 'register' })(
    InnerRegisterForm
);
