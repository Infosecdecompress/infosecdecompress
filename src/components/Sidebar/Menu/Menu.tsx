import { Link } from "gatsby";

import type { MenuItem } from "@/types";

import * as styles from "./Menu.module.scss";

interface Props {
  menu: Array<MenuItem>;
}

const Menu = ({ menu }: Props) => (
  <nav className={styles.menu}>
    <ul className={styles.list}>
      {menu.map((item) => (
        <li className={styles.item} key={item.path}>
          <Link
            to={item.path}
            className={styles.link}
            activeClassName={styles.active}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
