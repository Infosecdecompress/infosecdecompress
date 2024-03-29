import getContactHref from "./get-contact-href";

test("getContactHref", () => {
  expect(getContactHref("twitter", "#")).toBe("https://www.twitter.com/#");
  expect(getContactHref("github", "#")).toBe("https://github.com/#");
  expect(getContactHref("email", "#")).toBe("mailto:#");
  expect(getContactHref("telegram", "#")).toBe("https://t.me/#");
  expect(getContactHref("rss", "#")).toBe("#");
  expect(getContactHref("linkedin", "#")).toBe("https://www.linkedin.com/#");
  expect(getContactHref("instagram", "#")).toBe("https://www.instagram.com/#");
  expect(getContactHref("line", "#")).toBe("line://ti/p/#");
  expect(getContactHref("facebook", "#")).toBe("https://www.facebook.com/#");
  expect(getContactHref("gitlab", "#")).toBe("https://www.gitlab.com/#");
  expect(getContactHref("youtube", "#")).toBe("https://www.youtube.com/#");
  expect(getContactHref("soundcloud", "#")).toBe("https://soundcloud.com/#");
  expect(getContactHref("firstory", "#")).toBe(
    "https://open.firstory.me/user/#",
  );
  expect(getContactHref("spotify", "#")).toBe(
    "https://open.spotify.com/show/#",
  );
  expect(getContactHref("applepodcast", "#")).toBe(
    "https://podcasts.apple.com/tw/podcast/#",
  );
});
