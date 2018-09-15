import { normalizeUrl } from './checkUrl';

const getFavicon = async url => {
  const host = normalizeUrl(url, true);

  try {
    const res = await fetch(`https://favicongrabber.com/api/grab/${host}`);

    const iconObj = await res.json();
    const iconLarge = iconObj.icons
      .filter(icon => parseInt(icon.sizes, 10) >= 80)
      .map(icon => icon.src)[0];

    let touchIcon = null;
    if (iconObj.icons.filter(icon => icon.src.includes('touchicon'))[0]) {
      touchIcon = iconObj.icons.filter(icon =>
        icon.src.includes('touchicon')
      )[0].src;
    }

    const favicon = iconLarge || touchIcon || iconObj.icons[0].src;

    return favicon;
  } catch (err) {
    return 'error';
  }
};

export default getFavicon;
