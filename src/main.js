import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { requestImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';

import {
  formEl,
  listImagesEl,
  loaderEl,
  inputEl,
  btnMoreEl,
  loaderMoreEL,
} from './js/appeal-collection';

let LIMIT = 15;
let PAGE = 1;
let valueUser;
let totalHits;
let totalPages;

formEl.addEventListener('submit', async event => {
  event.preventDefault();
  btnMoreEl.classList.remove('btn-more-open');
  listImagesEl.innerHTML = '';
  loaderEl.classList.add('loader-open');

  if (valueUser !== inputEl.value.trim()) PAGE = 1;
  valueUser = inputEl.value.trim();

  formEl.reset();
  if (!valueUser) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search query',
    });
    loaderEl.classList.remove('loader-open');
    btnMoreEl.classList.remove('btn-more-open');
    return;
  }

  requestImages(valueUser, PAGE, LIMIT)
    .then(data => {
      if (data.hits.length === 0) {
        loaderEl.classList.remove('loader-open');
        btnMoreEl.classList.remove('btn-more-open');
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }

      renderImages(data.hits);
      btnMoreEl.classList.add('btn-more-open');
      PAGE += 1;
      totalHits = data.totalHits;
      totalPages = Math.ceil(totalHits / LIMIT);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
      });
    });
});

btnMoreEl.addEventListener('click', async () => {
  btnMoreEl.classList.remove('btn-more-open');
  loaderMoreEL.classList.add('loader-more-open');
  requestImages(valueUser, PAGE, LIMIT)
    .then(data => {
      if (PAGE > totalPages) {
        loaderMoreEL.classList.remove('loader-more-open');

        return iziToast.warning({
          position: 'bottomRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }

      renderImages(data.hits);
      btnMoreEl.classList.add('btn-more-open');
      PAGE += 1;
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
      });
    });
});
