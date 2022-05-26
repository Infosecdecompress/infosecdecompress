const getContactHref = (name: string, contact: string) => {
  const hrefs: { [key: string]: string } = {
    email: `mailto:${contact}`,
    line: `line://ti/p/${contact}`,
    telegram: `https://t.me/${contact}`,
    medium: `https://medium.com/${contact}`,
    github: `https://github.com/${contact}`,
    gitlab: `https://www.gitlab.com/${contact}`,
    twitter: `https://www.twitter.com/${contact}`,
    soundcloud: `https://soundcloud.com/${contact}`,
    facebook: `https://www.facebook.com/${contact}`,
    instagram: `https://www.instagram.com/${contact}`,
    linkedin: `https://www.linkedin.com/${contact}`,
    youtube: `https://www.youtube.com/${contact}`,
    firstory: `https://open.firstory.me/user/${contact}`,
    spotify: `https://open.spotify.com/show/${contact}`,
    applepodcast: `https://podcasts.apple.com/tw/podcast/${contact}`,
    googlepodcast: `https://podcasts.google.com/?feed=${contact}`,
    kkbox: `https://podcast.kkbox.com/channel/${contact}`,
  };

  return hrefs[name] ?? contact;
};

export default getContactHref;
