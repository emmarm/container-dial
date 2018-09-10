const getFavicon = async url => {
  const res = await fetch(`https://favicongrabber.com/api/grab/${url}`);

  const iconObj = await res.json();

  const iconLarge = iconObj.icons
    .filter(icon => parseInt(icon.sizes, 10) >= 80)
    .map(icon => icon.src)[0];

  let touchIcon = null;
  if (iconObj.icons.filter(icon => icon.src.includes('touchicon'))[0]) {
    touchIcon = iconObj.icons.filter(icon => icon.src.includes('touchicon'))[0]
      .src;
  }

  const favicon = iconLarge || touchIcon || iconObj.icons[0].src;

  return favicon;
};

export default getFavicon;
