const normalizeUrl = (url, onlyHost = false) => {
  if (onlyHost) {
    return url.replace(
      /^(?:(?:https?:\/\/)?(?:www\.)?)?([a-z0-9\-.]+).*$/i,
      '$1'
    );
  }

  const hasProtocol = /^https?:\/\//.test(url);
  return hasProtocol ? url : `https://${url}`;
};

const isValidUrl = string => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};

export { normalizeUrl, isValidUrl };
