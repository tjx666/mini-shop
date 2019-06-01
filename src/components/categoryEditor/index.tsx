import * as React from 'react';
import { message, Form, Icon, Input, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { createCategory } from '../../api/CategoryApi';
import './style.scss';

interface Props {
    form: WrappedFormUtils;
}

const InnerCategoryEditor = ({ form }: Props) => {
    const { getFieldDecorator } = form;
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                const { name, parent } = values;
                createCategory(name, parent).then(response => {
                    if (response.data.message === 'SUCCESS') {
                        message.success('添加成功');
                    } else {
                        message.error(response.data.message);
                    }
                });
            }
        });
    };

    const CategoryNameInput = getFieldDecorator('name', {
        rules: [
            {
                required: true,
                message: '请输入类名!',
            },
        ],
    })(<Input placeholder="类名" />);
    const ParentNameInput = getFieldDecorator('parent', {
        rules: [
            {
                required: false,
                message: '请输入父类Id!',
            },
        ],
    })(<Input placeholder="父类Id" />);

    return (
        <Form className="category-editor" onSubmit={handleSubmit}>
            <Form.Item>{CategoryNameInput}</Form.Item>
            <Form.Item>{ParentNameInput}</Form.Item>
            <Button className="submit-button" type="primary" htmlType="submit">
                添加
            </Button>
        </Form>
    );
};

export const CategoryEditor = Form.create({ name: 'category-editor' })(
    InnerCategoryEditor
);
