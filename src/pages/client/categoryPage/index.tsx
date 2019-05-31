import * as React from 'react';
import { CategoryMenu, ProductsOfCategory } from '../../../components';
import { CurrentCategoryContext } from '../../../stores/categoryPage';
import './style.scss';

export const CategoryPage = () => {
    return (
        <main className="category-page">
            <CurrentCategoryContext.Provider>
                <CategoryMenu />
                <ProductsOfCategory category="数码产品" />
            </CurrentCategoryContext.Provider>
        </main>
    );
};
