import { Link } from "gatsby";

import type { Edge } from "@/types";

import * as styles from "./Feed.module.scss";

interface Props {
  edges: Array<Edge>;
}

const formatMonth = (date: string) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });

const Feed = ({ edges }: Props) => (
  <div className={styles.feed}>
    {edges.map(({ node: { fields, frontmatter } }) => {
      const slug = frontmatter.slug || fields.slug;

      return (
        <div className={styles.item} key={fields.slug}>
          <div className={styles.meta}>
            <time className={styles.time} dateTime={frontmatter.date}>
              {formatMonth(frontmatter.date)}
            </time>
            <span className={styles.divider} />
            <span className={styles.category}>
              <Link to={fields.categorySlug} className={styles.link}>
                {frontmatter.category}
              </Link>
            </span>
          </div>
          <h2 className={styles.title}>
            <Link className={styles.link} to={slug}>
              {frontmatter.title}
            </Link>
          </h2>
          <p className={styles.description}>{frontmatter.description}</p>
          <Link className={styles.more} to={slug}>
            Read
          </Link>
        </div>
      );
    })}
  </div>
);

export default Feed;
