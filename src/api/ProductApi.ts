import _ from 'lodash';
import Chance from 'chance';
import { Product } from '../models/Product';
import { Category } from '../models/Category';
const chance = new Chance();

export const getHottestProducts = async (
    count: number = 20
): Promise<Product[]> => {
    const mockData = [
        {
            name: '特仑苏牛奶',
            price: 65,
            category: '牛奶乳品',
        },
        {
            name: 'Macbook Pro',
            price: 20000,
            category: '笔记本',
        },
        {
            name: '花花公子潮流韩装上衣',
            price: 180,
            category: '男上衣',
        },
        {
            name: '第一行代码',
            price: 60,
            category: '计算机与互联网',
        },
    ];

    let initialSaleVolume = 1000;
    return _.flatten(new Array(5).fill(mockData)).map((product, index) => {
        initialSaleVolume = initialSaleVolume - _.random(1, 5) * 10;
        return {
            id: chance.guid(),
            ...product,
            saleVolume: initialSaleVolume,
        };
    });
};

export const getProductsByCategory = (category: Category) => {
    return;
};
