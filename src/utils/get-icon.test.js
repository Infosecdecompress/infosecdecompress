// @flow strict
import getIcon from './get-icon';
import { ICONS } from '../constants';

test('getIcon', () => {
  expect(getIcon('twitter')).toBe(ICONS.TWITTER);
  expect(getIcon('github')).toBe(ICONS.GITHUB);
  expect(getIcon('telegram')).toEqual(ICONS.TELEGRAM);
  expect(getIcon('email')).toEqual(ICONS.EMAIL);
  expect(getIcon('rss')).toEqual(ICONS.RSS);
  expect(getIcon('linkedin')).toEqual(ICONS.LINKEDIN);
  expect(getIcon('instagram')).toEqual(ICONS.INSTAGRAM);
  expect(getIcon('facebook')).toEqual(ICONS.FACEBOOK);
  expect(getIcon('codepen')).toEqual(ICONS.CODEPEN);
  expect(getIcon('youtube')).toEqual(ICONS.YOUTUBE);
  expect(getIcon('soundcloud')).toEqual(ICONS.SOUNDCLOUD);
  expect(getIcon('firstory')).toEqual(ICONS.FIRSTORY);
  expect(getIcon('spotify')).toEqual(ICONS.SPOTIFY);
  expect(getIcon('applepodcast')).toEqual(ICONS.APPLEPODCAST);
});