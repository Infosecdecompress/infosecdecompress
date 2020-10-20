// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}><center>
        對於這個節目有什麼想法，或想要聽什麼內容都歡迎到 
        <a
          href="/pages/contacts"
          rel="noopener noreferrer"
        >
          聯絡資訊
        </a>
        告訴我們。
      </center></p>
    </div>
  );
};

export default Author;
