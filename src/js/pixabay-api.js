import axios from 'axios';

export async function fetchImages(q) {
  const response = await axios(`https://pixabay.com/api/`, {
    params: {
      key: '44962191-b2ae47cce5f09f25f6a2bff80',
      q,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}