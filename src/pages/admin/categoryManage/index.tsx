import * as React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Menu, Icon } from 'antd';
import {
    CategoryEditor,
    CategoryTrees,
    CategoryTreesMode,
} from '../../../components';
import './style.scss';
const { Item: MenuItem } = Menu;

const BatchDelete = () => {
    return <CategoryTrees mode={CategoryTreesMode.BATCH_DELETE} />;
};

const WatchCategories = () => {
    return <CategoryTrees mode={CategoryTreesMode.WATCH} />;
};

export const CategoryManage = () => {
    const [selectedKeys, setSelectedKeys] = React.useState<string[]>([
        'category-tree',
    ]);

    const handleClick = ({ key }: any) => {
        setSelectedKeys([key]);
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
                    <Link to="/be/category/trees">
                        <Icon type="eye" /> 查看分类
                    </Link>
                </MenuItem>
                <MenuItem key="batch-delete">
                    <Link to="/be/category/batch_delete">
                        <Icon type="delete" />
                        批量删除
                    </Link>
                </MenuItem>
                <MenuItem key="add-category">
                    <Link to="/be/category/add/">
                        <Icon type="plus" />
                        添加类别
                    </Link>
                </MenuItem>
            </Menu>
            <Switch>
                <Route path="/be/category/add/" component={CategoryEditor} />
                <Route path="/be/category/trees" component={WatchCategories} />
                <Route
                    path="/be/category/batch_delete"
                    component={BatchDelete}
                />
            </Switch>
        </main>
    );
};
