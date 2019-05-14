import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Avatar } from 'antd';
import './style.scss';

const { Header } = Layout;
const { Item: MenuItem } = Menu;

interface AppHeaderProps {
    avatarSrc?: string;
}

export const AppHeader = ({
    avatarSrc = require('../../assets/images/avatar.png'),
}: AppHeaderProps) => {
    return (
        <Header className="app-header">
            <Link className="app-header-title" to="/home">
                微商城
            </Link>
            <Menu
                className="app-header-menu"
                mode="horizontal"
                theme="light"
                selectedKeys={['home']}
            >
                <MenuItem className="menu-item" key="home">
                    首页
                </MenuItem>
                <MenuItem className="menu-item">分类</MenuItem>
                <MenuItem className="menu-item">购物车</MenuItem>
            </Menu>
            <Avatar className="app-header-avatar" alt="头像" src={avatarSrc} />
        </Header>
    );
};
