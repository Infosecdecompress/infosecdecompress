import { Icon } from "@/components/Icon";
import { ICONS } from "@/constants";
import type { Dictionary } from "@/types";
import { getContactHref, getIcon } from "@/utils";

import * as styles from "./Contacts.module.scss";

interface Props {
  contacts: Dictionary<string>;
}

type ContactName = keyof typeof ICONS;

const isConfigured = (value: string | undefined): value is string =>
  Boolean(value) && value !== "#";

const Contacts = ({ contacts }: Props) => {
  const entries = (
    Object.entries(contacts) as Array<[ContactName, string]>
  ).filter(([, value]) => isConfigured(value));

  if (entries.length === 0) {
    return null;
  }

  return (
    <div className={styles.contacts}>
      <ul className={styles.list}>
        {entries.map(([name, value]) => (
          <li className={styles.item} key={name}>
            {name === "email" ? (
              // The address is resolved on click so it never appears in the
              // static HTML for scrapers to harvest.
              <button
                type="button"
                className={styles.link}
                aria-label={name}
                onClick={() => {
                  window.location.href = getContactHref(name, value);
                }}
              >
                <Icon name={name} icon={getIcon(name)} />
              </button>
            ) : (
              <a
                className={styles.link}
                href={getContactHref(name, value)}
                target="_blank"
                rel={`noopener noreferrer${name === "mastodon" ? " me" : ""}`}
              >
                <Icon name={name} icon={getIcon(name)} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
