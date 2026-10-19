const getContactHref = (name: string, contact: string): string => {
  const hrefs: Record<string, string> = {
    applepodcast: `https://podcasts.apple.com/tw/podcast/${contact}`,
    bluesky: `https://bsky.app/profile/${contact}`,
    email: `mailto:${contact}`,
    facebook: `https://www.facebook.com/${contact}`,
    firstory: `https://open.firstory.me/user/${contact}`,
    github: `https://github.com/${contact}`,
    gitlab: `https://www.gitlab.com/${contact}`,
    googlepodcast: `https://podcasts.google.com/?feed=${contact}`,
    instagram: `https://www.instagram.com/${contact}`,
    kkbox: `https://podcast.kkbox.com/channel/${contact}`,
    line: `line://ti/p/${contact}`,
    linkedin: `https://www.linkedin.com/${contact}`,
    medium: `https://medium.com/${contact}`,
    soundcloud: `https://soundcloud.com/${contact}`,
    spotify: `https://open.spotify.com/show/${contact}`,
    telegram: `https://t.me/${contact}`,
    twitter: `https://www.twitter.com/${contact}`,
    youtube: `https://www.youtube.com/${contact}`,
  };

  return hrefs[name] ?? contact;
};

export default getContactHref;
