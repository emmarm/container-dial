import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APP_ID,
  secret: process.env.REACT_APP_UNSPLASH_SECRET,
  callbackUrl: 'about:none'
});

const getRandomPhoto = async color => {
  const res = await unsplash.photos.getRandomPhoto({
    orientation: 'landscape',
    query: color
  });

  const randomPhoto = await toJson(res);

  return randomPhoto;
};

export default getRandomPhoto;
