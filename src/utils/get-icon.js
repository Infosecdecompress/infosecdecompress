// @flow strict
import { ICONS } from '../constants';

const getIcon = (name: string) => {
  let icon;

  switch (name) {
    case 'twitter':
      icon = ICONS.TWITTER;
      break;
    case 'github':
      icon = ICONS.GITHUB;
      break;
    case 'telegram':
      icon = ICONS.TELEGRAM;
      break;
    case 'email':
      icon = ICONS.EMAIL;
      break;
    case 'rss':
      icon = ICONS.RSS;
      break;
    case 'linkedin':
      icon = ICONS.LINKEDIN;
      break;
    case 'instagram':
      icon = ICONS.INSTAGRAM;
      break;
    case 'facebook':
      icon = ICONS.FACEBOOK;
      break;
    case 'codepen':
      icon = ICONS.CODEPEN;
      break;
    case 'youtube':
      icon = ICONS.YOUTUBE;
      break;
    case 'soundcloud':
      icon = ICONS.SOUNDCLOUD;
      break;
    case 'firstory':
      icon = ICONS.FIRSTORY;
      break;
    case 'spotify':
      icon = ICONS.SPOTIFY;
      break;
    case 'applepodcast':
      icon = ICONS.APPLEPODCAST;
      break;
    case 'googlepodcast':
      icon = ICONS.GOOGLEPODCAST;
      break;
    case 'kkbox':
      icon = ICONS.KKBOX;
      break;
    default:
      icon = {};
      break;
  }

  return icon;
};

export default getIcon;
