export default function fetchImages(q) {
  const params = new URLSearchParams({
    key: '44962191-b2ae47cce5f09f25f6a2bff80',
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
