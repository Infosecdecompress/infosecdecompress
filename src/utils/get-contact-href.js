// @flow strict
const getContactHref = (name: string, contact: string) => {
  let href;

  switch (name) {
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'telegram':
      href = `https://t.me/${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    case 'linkedin':
      href = `https://www.linkedin.com/${contact}`;
      break;
    case 'instagram':
      href = `https://www.instagram.com/${contact}`;
      break;
    case 'facebook':
      href = `https://www.facebook.com/${contact}`;
      break;
    case 'firstory':
      href = `https://open.firstory.me/user/${contact}`;
      break;
    case 'spotify':
      href = `https://open.spotify.com/show/${contact}`;
      break;
    case 'applepodcast':
      href = `https://podcasts.apple.com/tw/podcast/${contact}`;
      break;
    case 'codepen':
      href = `https://www.codepen.io/${contact}`;
      break;
    case 'youtube':
      href = `https://www.youtube.com/channel/${contact}`;
      break;
    case 'soundcloud':
      href = `https://soundcloud.com/${contact}`;
      break;
    case 'googlepodcast':
      href = `https://podcasts.google.com/?feed=${contact}`;
      break;
    case 'kkbox':
      href = `https://podcast.kkbox.com/channel/${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
