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
    const [current, setCurrent] = React.useState<string>('home');
    const handleSelect = (event: any) => {
        setCurrent(event.key);
    };

    return (
        <Header className="app-header">
            <Link className="app-header-title" to="/home">
                微商城
            </Link>
            <Menu
                className="app-header-menu"
                mode="horizontal"
                theme="light"
                selectedKeys={[current]}
                onClick={handleSelect}
            >
                <MenuItem className="menu-item" key="home">
                    <Link to="/">首页</Link>
                </MenuItem>
                <MenuItem className="menu-item">
                    <Link to="/category">分类</Link>
                </MenuItem>
                <MenuItem className="menu-item">购物车</MenuItem>
            </Menu>
            <Avatar className="app-header-avatar" alt="头像" src={avatarSrc} />
        </Header>
    );
};
