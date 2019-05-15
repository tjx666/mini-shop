import * as React from 'react';
import { AppHeader, HotProducts } from '../../../components';
import './style.scss';

export const HomePage = () => {
    return (
        <div className="home-page">
            <AppHeader />
            <HotProducts />
        </div>
    );
};
