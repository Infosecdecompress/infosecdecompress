import React from 'react';
import * as styles from './Meta.module.scss';

type Props = {
  date: string
};

const Meta: React.FC<Props> = ({ date }) => (
  <div className={styles}>
    <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</p>
  </div>
);

export default Meta;
