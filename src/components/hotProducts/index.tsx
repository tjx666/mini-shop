import * as React from 'react';
import { Table, Divider, Tag, Col } from 'antd';
import './style.scss';

const { Column } = Table;

interface DataItem {
    key: string;
    name: string;
    price: number;
    saleVolume: number;
    category: string;
}

export const HotProducts = () => {
    const data: DataItem[] = [
        {
            key: '1',
            name: '特仑苏牛奶',
            price: 65,
            saleVolume: 20,
            category: '牛奶乳品',
        },
        {
            key: '2',
            name: 'macbook pro',
            price: 20000,
            saleVolume: 18,
            category: '笔记本',
        },
        {
            key: '3',
            name: '花花公子潮流韩装上衣',
            price: 180,
            saleVolume: 15,
            category: '男上衣',
        },
        {
            key: '4',
            name: '第一行代码',
            price: 60,
            saleVolume: 12,
            category: '计算机与互联网',
        },
    ];

    return (
        <div className="hot-products">
            <div className="hot-products-header">
                <span className="hot-products-title">热门精选</span>
            </div>
            <Table dataSource={data}>
                <Column title="商品名" dataIndex="name" key="name" />
                <Column title="价格" dataIndex="price" key="price" />
                <Column
                    title="销售量"
                    dataIndex="saleVolume"
                    key="saleVolume"
                />
                <Column title="分类" dataIndex="category" key="category" />
            </Table>
        </div>
    );
};
