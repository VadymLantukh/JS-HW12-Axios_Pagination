const listImagesEl = document.querySelector('.images-list');
const loaderEl = document.querySelector('.loader');

export default function renderImages(images) {
  const murkup = images
    .map(image => {
      return `<li class="images-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"

          />
          <div class="property">
          <p><span class="weight">Likes</span> ${image.likes}</p>
          <p><span class="weight">Views</span> ${image.views}</p>
          <p><span class="weight">Comments</span> ${image.comments}</p>
          <p><span class="weight">Downloads</span> ${image.downloads}</p>
          </div>
        </a>
      </li>`;
    })
    .join('');

  loaderEl.classList.remove('loader-open');
  listImagesEl.innerHTML = murkup;
}
