import antZh from 'antd/lib/locale-provider/zh_CN';
import appLocaleData from 'react-intl/locale-data/zh';
import global from './global';
import home from './home';
import login from './login';

export default {
    locale: 'zh-Hans',
    messages: {
        ...global,
        ...home,
        ...login,
    },
    antd: antZh,
    data: appLocaleData,
};
