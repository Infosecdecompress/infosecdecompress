import { Button } from "@/components/Button";

import * as styles from "./Tags.module.scss";

interface Props {
  tags: Array<string>;
  tagSlugs: Array<string>;
}

const Tags = ({ tags, tagSlugs }: Props) => (
  <div className={styles.tags}>
    <ul className={styles.list}>
      {tagSlugs.map((slug, i) => (
        <li className={styles.item} key={slug}>
          <Button title={tags[i]} to={slug} />
        </li>
      ))}
    </ul>
  </div>
);

export default Tags;
