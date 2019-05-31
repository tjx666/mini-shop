import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import './style.scss';

const { Header } = Layout;
const { Item: MenuItem } = Menu;

export const AdminHeader = () => {
    const [current, setCurrent] = React.useState<string>('home');
    const handleSelect = (event: any) => {
        setCurrent(event.key);
    };

    return (
        <Header className="admin-header">
            <Menu
                className="admin-header-menu"
                theme="dark"
                mode="horizontal"
                selectedKeys={[current]}
                onClick={handleSelect}
            >
                <MenuItem className="menu-item" key="home">
                    <Link to="/be/user">用户管理</Link>
                </MenuItem>
                <MenuItem className="menu-item">
                    <Link to="/be/category">分类管理</Link>
                </MenuItem>
                <MenuItem className="menu-item">订单管理</MenuItem>
            </Menu>
        </Header>
    );
};
