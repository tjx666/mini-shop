import * as React from 'react';
import _ from 'lodash';
import { Table, Icon, Tooltip } from 'antd';
import { getHottestProducts } from '../../api/ProductApi';
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
    const [hotProducts, setHotProducts] = React.useState<DataItem[]>([]);
    const loadProducts = async () => {
        const products = await getHottestProducts();
        const hotProducts = products.map<DataItem>(product => {
            const temp: any = { ...product, key: product.id };
            return _.omit(temp, ['id']) as DataItem;
        });
        setHotProducts(hotProducts);
    };

    React.useEffect(() => {
        loadProducts();
    }, []);

    return (
        <div className="hot-products">
            <div className="hot-products-header">
                <span className="hot-products-title">热门精选</span>
            </div>
            <Table dataSource={hotProducts}>
                <Column title="商品名" dataIndex="name" key="name" />
                <Column title="价格" dataIndex="price" key="price" />
                <Column
                    title="销售量"
                    dataIndex="saleVolume"
                    key="saleVolume"
                />
                <Column title="分类" dataIndex="category" key="category" />
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
        </div>
    );
};
