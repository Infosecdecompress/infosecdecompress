import React from 'react';
import * as styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta: React.FC<Props> = ({ date }) => (
  <div className={styles}>
    <p className={styles['meta__date']}>發佈於 {new Date(date).toLocaleDateString('zh-TW', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
  </div>
);

export default Meta;
