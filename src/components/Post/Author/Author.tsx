import React from 'react';
import { getContactHref } from '../../../utils';
import * as styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <center><p className={styles}>
        資安解壓縮網站內容除特別註記外皆以
        <a 
          href="http://creativecommons.org/licenses/by-sa/4.0/"
          rel="noopener noreferrer"
        >
          CC BY-SA 4.0
        </a>
        方式授權
        <br/>
        對於這個節目有什麼想法，或想要聽什麼內容都歡迎到 
        <a
          href="/pages/contacts"
          rel="noopener noreferrer"
        >
          聯絡資訊
        </a>
        告訴我們
      </p></center>
    </div>
  );
};

export default Author;
