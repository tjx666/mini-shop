import zhHans from './zh-Hans';
import enUS from './en-US';

export const getLocale = (language: string = 'zh') => {
    const localePrefix = window.navigator.language.split('_')[0];
    const localeMapper = new Map([['zh', zhHans], ['en', enUS]]);

    return (
        localeMapper.get(language) || localeMapper.get(localePrefix) || zhHans
    );
};
