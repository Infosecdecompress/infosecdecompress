import * as styles from "./Content.module.scss";

interface Props {
  title: string;
  body: string;
}

const Content = ({ body, title }: Props) => (
  <div className={styles.content}>
    <h1 className={styles.title}>{title}</h1>
    {/* Markdown rendered at build time by gatsby-transformer-remark. */}
    {/* eslint-disable-next-line react/no-danger */}
    <div className={styles.body} dangerouslySetInnerHTML={{ __html: body }} />
  </div>
);

export default Content;
