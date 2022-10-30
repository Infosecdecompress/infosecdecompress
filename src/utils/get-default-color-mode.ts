const getDefaultColorMode = (): "dark" | "light" => {
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const hasMediaQueryPreference = typeof mql.matches !== "undefined";
  if (hasMediaQueryPreference) {
    return mql.matches ? "dark" : "light";
  }

  return "light";
};

export default getDefaultColorMode;
