import * as React from 'react';
import { Table, Divider, Tag } from 'antd';
import './style.scss';
import { Product } from '../../models/Product';
const { Column, ColumnGroup } = Table;

interface Props {
    category: String;
}

export const ProductsOfCategory = ({ category }: Props) => {
    const title = React.useCallback(() => category, [category]);
    const products = React.useState<Product[]>([]);
    React.useEffect(() => {});
    return <Table className="products-of-category" title={title} />;
};
