import * as React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import { CategoryEditor } from '../../../components';
import './style.scss';
const { Item: MenuItem } = Menu;

export const CategoryManage = () => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([
        'category-tree',
    ]);
    const handleClick = ({ key }: any) => {
        setSelectedKeys([key]);
        console.log({ key });
    };

    return (
        <main className="category-manage">
            <Menu
                className="modes"
                mode="horizontal"
                selectedKeys={selectedKeys}
                onClick={handleClick}
            >
                <MenuItem key="category-tree">
                    <Icon type="eye" />
                    查看分类
                </MenuItem>
                <MenuItem key="batch-delete">
                    <Icon type="delete" />
                    批量删除
                </MenuItem>
                <MenuItem key="add-category">
                    <Link to="/be/category/add/">
                        <Icon type="plus" />
                        添加类别
                    </Link>
                </MenuItem>
            </Menu>
            <Switch>
                <Route path="/be/category/add/" component={CategoryEditor} />>
            </Switch>
        </main>
    );
};
