import antdEn from 'antd/lib/locale-provider/en_US';
import appLocaleData from 'react-intl/locale-data/en';
import global from './global';
import home from './home';

export default {
    locale: 'en-US',
    messages: {
        ...global,
        ...home,
    },
    antd: antdEn,
    data: appLocaleData,
};
