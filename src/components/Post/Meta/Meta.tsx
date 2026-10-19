import { DATE_FORMATS } from "@/constants";
import { formatDate } from "@/utils";

import * as styles from "./Meta.module.scss";

interface Props {
  date: string;
}

const Meta = ({ date }: Props) => (
  <div className={styles.meta}>
    <p className={styles.date}>發佈於 {formatDate(date, DATE_FORMATS.post)}</p>
  </div>
);

export default Meta;
