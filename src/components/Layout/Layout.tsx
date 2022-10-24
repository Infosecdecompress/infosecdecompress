import React from "react";

import * as styles from "./Layout.module.scss";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
