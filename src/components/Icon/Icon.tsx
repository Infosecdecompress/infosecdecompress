import type { ICONS } from "@/constants";

import * as styles from "./Icon.module.scss";

interface Props {
  name: keyof typeof ICONS;
  icon: {
    viewBox?: string;
    path?: string;
  };
}

const Icon = ({ name, icon }: Props) => (
  <svg className={styles.icon} viewBox={icon.viewBox}>
    <title>{name}</title>
    <path d={icon.path} />
  </svg>
);

export default Icon;
