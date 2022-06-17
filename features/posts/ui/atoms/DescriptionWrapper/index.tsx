import React from 'react';
import style from './style.module.css';

export const DescriptionWrapper = React.memo(({children}) => <div className={style.container}>{children}</div>);