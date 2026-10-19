import { Link } from "gatsby";

import { Image } from "@/components/Image";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import type { Author as AuthorMetadata } from "@/types";

import * as styles from "./Author.module.scss";

interface Props {
  author: Pick<AuthorMetadata, "name" | "bio" | "photo">;
  isIndex?: boolean;
}

const Author = ({ author, isIndex }: Props) => {
  const Heading = isIndex ? "h1" : "h2";

  return (
    <div className={styles.author}>
      <Link to="/">
        <Image alt={author.name} path={author.photo} className={styles.photo} />
      </Link>

      <div className={styles.titleContainer}>
        <Heading className={styles.title}>
          <Link className={styles.link} to="/">
            {author.name}
          </Link>
        </Heading>
        <ThemeSwitcher />
      </div>
      <p className={styles.subtitle}>{author.bio}</p>
    </div>
  );
};

export default Author;
