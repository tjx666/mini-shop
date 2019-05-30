import * as React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import './style.scss';
const { Item: MenuItem } = Menu;

export const CategoryMenu = () => {
    const menuTree = [
        {
            name: '数码',
            children: [
                {
                    name: '空调',
                    children: ['格力空调', '美的空调'],
                },
                {
                    name: '耳机',
                    children: ['beats', '漫步者', '索尼耳机'],
                },
            ],
        },
        {
            name: '母婴',
            children: [
                {
                    name: '奶粉',
                    children: ['贝因美奶粉', '君乐宝奶粉'],
                },
                {
                    name: '童装',
                    children: ['爬爬服', '婴儿睡衣'],
                },
            ],
        },
    ];

    return (
        <div className="category-menu">
            {menuTree.map(level1 => (
                <Menu>
                    <SubMenu title={level1.name}>
                        {level1.children.map(level2 => (
                            <SubMenu title={level2.name}>
                                {level2.children.map(level3 => (
                                    <MenuItem>{level3}</MenuItem>
                                ))}
                            </SubMenu>
                        ))}
                    </SubMenu>
                </Menu>
            ))}
        </div>
    );
};
