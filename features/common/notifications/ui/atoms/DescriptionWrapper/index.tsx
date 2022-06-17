import React from 'react';
import {Row} from 'ui/atoms/Row';

import style from './style.module.css';

export const DescriptionWrapper = React.memo(({children}) => (
    <Row className={style.container} direction="column">
        {children}
    </Row>
));