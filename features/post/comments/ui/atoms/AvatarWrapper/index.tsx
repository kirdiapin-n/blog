import React from 'react';
import {Row} from 'ui/atoms/Row';
import style from './style.module.css';

export const AvatarWrapper = React.memo(({children}) => (
    <Row alignItems="center" className={style.container} justifyContent="center">
        {children}
    </Row>
));