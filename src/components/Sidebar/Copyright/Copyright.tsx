import React from 'react';
import * as styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright: React.FC<Props> = ({ copyright }) => (
  <div className={styles['copyright']}>
    {copyright}
  </div>
);

export default Copyright;
