import * as React from 'react';
import { Button } from 'antd';
import './style.scss';

export const CategoryManage = () => {
    return (
        <main className="category-manage">
            <div className="modes">
                <Button>查看分类</Button>
                <Button>批量删除</Button>
                <Button>添加类别</Button>
            </div>
        </main>
    );
};
