import { atom } from "@alxshelepenok/diesel";
import { useCoilPersistedState } from "@alxshelepenok/diesel-extensions";

import { getDefaultColorMode } from "@/utils";

interface Theme {
  mode: "dark" | "light";
}

const themeAtom = atom<Theme>({
  key: "themeAtom",
  default: {
    mode: getDefaultColorMode(),
  },
});

const useTheme = (): readonly [
  Theme,
  () => void,
  (nextValue: Theme) => void,
] => {
  const [theme, set] = useCoilPersistedState(themeAtom);

  const toggle = () => set({ mode: theme.mode === "dark" ? "light" : "dark" });

  return [theme, toggle, set];
};

export default useTheme;
