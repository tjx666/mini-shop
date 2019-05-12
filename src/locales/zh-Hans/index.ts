import antZh from 'antd/lib/locale-provider/zh_CN';
import appLocaleData from 'react-intl/locale-data/zh';
import global from './global';
import home from './home';

export default {
    locale: 'zh-Hans',
    messages: {
        ...global,
        ...home,
    },
    antd: antZh,
    data: appLocaleData,
};
