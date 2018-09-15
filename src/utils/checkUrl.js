const normalizeUrl = (url, noProtocol = false) => {
  const hasProtocol = /^https?:\/\//.test(url);
  const host = url.replace(/^(?:(?:https?:\/\/)?(?:www\.)?)?(.*)$/, '$1');

  if (noProtocol) {
    return host;
  }
  return hasProtocol ? url : `https://${host}`;
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
