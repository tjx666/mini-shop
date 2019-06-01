import * as React from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { CurrentCategoryContext } from '../../stores/categoryPage';
import './style.scss';
import { Category } from '../../models/Category';
const { Item: MenuItem } = Menu;

export const CategoryMenu = () => {
    const { currentCategory, setCurrentCategory } = CurrentCategoryContext();
    const [menuTree, setMenuTree] = React.useState<Category[]>([]);
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
