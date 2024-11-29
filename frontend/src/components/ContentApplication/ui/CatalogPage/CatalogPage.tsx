import React, { useState } from 'react';
import Page from '../../../shared/Page/Page';
import { ParameterTextarea } from 'components/shared/ParameterTextarea';

const CatalogPage = (props) => {
    const [value, setValue] = useState(props.content.description)
    console.log(props)

    let editFlag = true;
    let color = 'rgb(256,256,256,75)'
    let props2 = { ...props, editFlag, color }

    return (
        <Page {...props2}>
            Функция добавления товаров в каталог находится в разработке
        </Page >
    );
};

export default CatalogPage;