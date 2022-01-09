import { ICONS } from "@/constants";
import { getIcon } from "@/utils";

test("getIcon", () => {
  expect(getIcon("rss")).toEqual(ICONS.RSS);
  expect(getIcon("line")).toEqual(ICONS.LINE);
  expect(getIcon("github")).toBe(ICONS.GITHUB);
  expect(getIcon("email")).toEqual(ICONS.EMAIL);
  expect(getIcon("weibo")).toEqual(ICONS.WEIBO);
  expect(getIcon("twitter")).toBe(ICONS.TWITTER);
  expect(getIcon("gitlab")).toEqual(ICONS.GITLAB);
  expect(getIcon("medium")).toEqual(ICONS.MEDIUM);
  expect(getIcon("codepen")).toEqual(ICONS.CODEPEN);
  expect(getIcon("youtube")).toEqual(ICONS.YOUTUBE);
  expect(getIcon("vkontakte")).toBe(ICONS.VKONTAKTE);
  expect(getIcon("facebook")).toEqual(ICONS.FACEBOOK);
  expect(getIcon("telegram")).toEqual(ICONS.TELEGRAM);
  expect(getIcon("linkedin")).toEqual(ICONS.LINKEDIN);
  expect(getIcon("instagram")).toEqual(ICONS.INSTAGRAM);
  expect(getIcon("soundcloud")).toEqual(ICONS.SOUNDCLOUD);
});
