import{i,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function p(o){const s=new URLSearchParams({key:"44962191-b2ae47cce5f09f25f6a2bff80",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const d=document.querySelector(".images-list"),f=document.querySelector(".loader");function g(o){const s=o.map(e=>`<li class="images-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            src="${e.webformatURL}"
            alt="${e.tags}"

          />
          <div class="property">
          <p><span class="weight">Likes</span> ${e.likes}</p>
          <p><span class="weight">Views</span> ${e.views}</p>
          <p><span class="weight">Comments</span> ${e.comments}</p>
          <p><span class="weight">Downloads</span> ${e.downloads}</p>
          </div>
        </a>
      </li>`).join("");f.classList.remove("loader-open"),d.innerHTML=s}const m=document.querySelector(".form"),h=document.querySelector(".images-list"),l=document.querySelector(".loader"),y=document.querySelector(".input"),n=document.querySelector(".btn-more");m.addEventListener("submit",o=>{o.preventDefault(),h.innerHTML="",l.classList.add("loader-open"),n.classList.remove;const s=y.value.trim();if(m.reset(),!s){i.error({title:"Error",message:"Please enter a search query"}),l.classList.remove("loader-open"),n.classList.remove("btn-more-open");return}p(s).then(e=>{if(e.hits.length===0){l.classList.remove("loader-open"),n.classList.remove("btn-more-open"),i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}n.classList.add("btn-more-open"),g(e.hits),new u(".images-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>{i.error({title:"Error",message:`Something went wrong: ${e.message}`})})});
//# sourceMappingURL=commonHelpers.js.map
