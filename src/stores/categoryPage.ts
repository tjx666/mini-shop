import * as React from 'react';
import createUseContext from 'constate';

const useCurrentCategory = () => {
    const [currentCategory, setCurrentCategory] = React.useState<string>('');
    return { currentCategory, setCurrentCategory };
};

export const CurrentCategoryContext = createUseContext(useCurrentCategory);
