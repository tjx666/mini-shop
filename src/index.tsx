import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import { addLocaleData, IntlProvider } from 'react-intl';
import App from './App';
import { getLocale } from './locales';
import './index.scss';
import 'normalize.css';
import * as serviceWorker from './serviceWorker';

const appLocale = getLocale();
addLocaleData(appLocale.data);

ReactDOM.render(
    <LocaleProvider locale={appLocale.antd}>
        <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </IntlProvider>
    </LocaleProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
