import * as React from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { CurrentCategoryContext } from '../../stores/categoryPage';
import './style.scss';
import { Category } from '../../models/Category';
const { Item: MenuItem } = Menu;

const initMenuTree: Category[] = [
    {
        name: '数码',
        children: [
            {
                name: '空调',
                children: [
                    {
                        name: '格力空调',
                        children: [],
                    },
                    {
                        name: '美的空调',
                        children: [],
                    },
                ],
            },
            {
                name: '耳机',
                children: [
                    {
                        name: 'beats',
                        children: [],
                    },
                    {
                        name: '漫步者',
                        children: [],
                    },
                    {
                        name: '索尼耳机',
                        children: [],
                    },
                ],
            },
        ],
    },
    {
        name: '母婴',
        children: [
            {
                name: '奶粉',
                children: [
                    {
                        name: '贝因美奶粉',
                        children: [],
                    },
                    {
                        name: '君乐宝奶粉',
                        children: [],
                    },
                ],
            },
            {
                name: '童装',
                children: [
                    {
                        name: '爬爬服',
                        children: [],
                    },
                    {
                        name: '婴儿睡衣',
                        children: [],
                    },
                ],
            },
        ],
    },
];

export const CategoryMenu = () => {
    const { currentCategory, setCurrentCategory } = CurrentCategoryContext();
    const [menuTree, setMenuTree] = React.useState<Category[]>(initMenuTree);
    const handleSelectCategory = ({ key }: any) => {
        setCurrentCategory(key);
    };

    return (
        <div className="category-menu">
            {menuTree.map(level1 => (
                <Menu
                    key={level1.name}
                    onSelect={handleSelectCategory}
                    selectedKeys={[currentCategory]}
                >
                    <SubMenu title={level1.name}>
                        {level1.children.map(level2 => (
                            <SubMenu title={level2.name} key={level2.name}>
                                {level2.children.map(level3 => (
                                    <MenuItem key={level3.name}>
                                        {level3.name}
                                    </MenuItem>
                                ))}
                            </SubMenu>
                        ))}
                    </SubMenu>
                </Menu>
            ))}
        </div>
    );
};
