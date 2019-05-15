import * as React from 'react';
import { Table, Divider, Tag, Col } from 'antd';
import './style.scss';

const { Column } = Table;

interface DataItem {
    key: string;
    id: string;
    name: string;
    price: number;
    saleVolume: number;
}

export const HotProducts = () => {
    const data: DataItem[] = [
        {
            key: '1',
            id: '11111111',
            name: '特仑苏牛奶',
            price: 65,
            saleVolume: 20,
        },
        {
            key: '2',
            id: '222222',
            name: 'macbook pro',
            price: 20000,
            saleVolume: 18,
        },
        {
            key: '3',
            id: '333333',
            name: '花花公子潮流韩装上衣',
            price: 180,
            saleVolume: 15,
        },
        {
            key: '4',
            id: '4444444',
            name: '第一行代码',
            price: 60,
            saleVolume: 12,
        },
    ];

    return (
        <div className="hot-products">
            <div className="hot-products-header">
                <span className="hot-products-title">热门精选</span>
            </div>
            <Table dataSource={data}>
                <Column title="商品号" dataIndex="id" key="id" />
                <Column title="商品名" dataIndex="name" key="name" />
                <Column title="价格" dataIndex="price" key="price" />
                <Column
                    title="销售量"
                    dataIndex="saleVolume"
                    key="saleVolume"
                />
            </Table>
        </div>
    );
};
