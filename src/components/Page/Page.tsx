import { ReactNode, useEffect, useRef } from "react";

import * as styles from "./Page.module.scss";

interface Props {
  title?: string;
  children: ReactNode;
}

const Page = ({ title, children }: Props) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    pageRef.current?.scrollIntoView();
  }, []);

  return (
    <div ref={pageRef} className={styles.page}>
      <div className={styles.inner}>
        {title && <h1 className={styles.title}>{title}</h1>}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

export default Page;
