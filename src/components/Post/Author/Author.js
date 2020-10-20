// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
        對於這個節目有什麼想法歡迎到 
        <a
          href="/pages/contacts"
          rel="noopener noreferrer"
        >
          聯絡資訊
        </a>
        聯繫我們。 有想要聽到的主題也都歡迎跟我們說。
      </p>
    </div>
  );
};

export default Author;
