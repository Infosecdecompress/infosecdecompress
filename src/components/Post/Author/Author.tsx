import { Link } from "gatsby";

import * as styles from "./Author.module.scss";

const Author = () => (
  <div className={styles.author}>
    <p>
      資安解壓縮網站內容除特別註記外皆以
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CC BY-SA 4.0
      </a>
      方式授權
      <br />
      對於這個節目有什麼想法，或想要聽什麼內容都歡迎到
      <Link to="/pages/contacts">聯絡資訊</Link>
      告訴我們
    </p>
  </div>
);

export default Author;
