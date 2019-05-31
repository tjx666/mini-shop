import * as React from 'react';
import { Table, Tooltip, Icon } from 'antd';
import Configuration from '../../constants/config';
import './style.scss';
const { Column } = Table;

interface Props {
    category: String;
}

interface DataItem {
    key: string;
    name: string;
    price: number;
    saleVolume: number;
}

const titleStyle: React.CSSProperties = {
    fontSize: 18,
};

const categoryStyle: React.CSSProperties = {
    fontWeight: 'bold',
    color: Configuration.primaryColor,
};

export const ProductsOfCategory = ({ category }: Props) => {
    const title = React.useCallback(
        () => (
            <span className="title" style={titleStyle}>
                当前分类：<em style={categoryStyle}>{category}</em>
            </span>
        ),
        [category]
    );
    const products = React.useState<DataItem[]>([]);
    React.useEffect(() => {});

    return (
        <Table className="products-of-category" dataSource={[]} title={title}>
            <Column title="商品名" dataIndex="name" key="name" />
            <Column title="价格" dataIndex="price" key="price" />
            <Column title="销售量" dataIndex="saleVolume" key="saleVolume" />
            <Column
                title="操作"
                key="action"
                render={(text, record: DataItem) => (
                    <div className="action-cell">
                        <Tooltip title="添加到购物车">
                            <Icon
                                className="shopping-car-icon"
                                type="shopping-cart"
                            />
                        </Tooltip>
                    </div>
                )}
            />
        </Table>
    );
};
