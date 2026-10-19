import * as styles from "./Meta.module.scss";

interface Props {
  date: string;
}

const Meta = ({ date }: Props) => (
  <div className={styles.meta}>
    <p className={styles.date}>
      發佈於{" "}
      {new Date(date).toLocaleDateString("zh-TW", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </p>
  </div>
);

export default Meta;
