import React from "react";

import { Icon } from "@/components/Icon";
import { Dictionary } from "@/types";
import { getContactHref, getIcon } from "@/utils";

import styles from "./Contacts.module.scss";

type Props = {
  contacts: Dictionary<string>;
};

const Contacts: React.FC<Props> = ({ contacts }: Props) => (
  <div className={styles.contacts}>
    <ul className={styles.contacts__list}>
      {Object.keys(contacts).map(name => (
        <li className={styles["contacts__list-item"]} key={name}>
          <a
            className={styles["contacts__list-item-link"]}
            href={getContactHref(name, contacts[name])}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Icon name={name} icon={getIcon(name)} />
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Contacts;
