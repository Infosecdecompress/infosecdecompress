import cn from "classnames";
import { Link } from "gatsby";

import { PAGINATION } from "@/constants";
import type { Pagination as PaginationContext } from "@/types";

import * as styles from "./Pagination.module.scss";

type Props = PaginationContext;

const Pagination = ({
  prevPagePath,
  nextPagePath,
  hasNextPage,
  hasPrevPage,
}: Props) => (
  <div className={styles.pagination}>
    <div className={styles.previous}>
      <Link
        rel="prev"
        to={hasPrevPage ? prevPagePath : "/"}
        className={cn(styles.previousLink, { [styles.disable]: !hasPrevPage })}
      >
        {PAGINATION.PREV_PAGE}
      </Link>
    </div>
    <div className={styles.next}>
      <Link
        rel="next"
        to={hasNextPage ? nextPagePath : "/"}
        className={cn(styles.nextLink, { [styles.disable]: !hasNextPage })}
      >
        {PAGINATION.NEXT_PAGE}
      </Link>
    </div>
  </div>
);

export default Pagination;
