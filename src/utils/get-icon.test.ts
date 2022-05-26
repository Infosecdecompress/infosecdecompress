import { ICONS } from "@/constants";
import { getIcon } from "@/utils";

test("getIcon", () => {
  expect(getIcon("twitter")).toBe(ICONS.twitter);
  expect(getIcon("github")).toBe(ICONS.github);
  expect(getIcon("telegram")).toEqual(ICONS.telegram);
  expect(getIcon("email")).toEqual(ICONS.email);
  expect(getIcon("rss")).toEqual(ICONS.rss);
  expect(getIcon("linkedin")).toEqual(ICONS.linkedin);
  expect(getIcon("instagram")).toEqual(ICONS.instagram);
  expect(getIcon("facebook")).toEqual(ICONS.facebook);
  expect(getIcon("codepen")).toEqual(ICONS.codepen);
  expect(getIcon("youtube")).toEqual(ICONS.youtube);
  expect(getIcon("soundcloud")).toEqual(ICONS.soundcloud);
  expect(getIcon("firstory")).toEqual(ICONS.firstory);
  expect(getIcon("spotify")).toEqual(ICONS.spotify);
  expect(getIcon("applepodcast")).toEqual(ICONS.applepodcast);
});
