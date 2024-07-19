import{i as a,S as u}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();function m(o){const s=new URLSearchParams({key:"44962191-b2ae47cce5f09f25f6a2bff80",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()})}const p=document.querySelector(".images-list"),d=document.querySelector(".loader");function f(o){const s=o.map(e=>`<li class="images-item">
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
      </li>`).join("");d.classList.remove("loader-open"),p.innerHTML=s}const c=document.querySelector(".form"),g=document.querySelector(".images-list"),i=document.querySelector(".loader"),h=document.querySelector(".input");c.addEventListener("submit",o=>{o.preventDefault(),g.innerHTML="",i.classList.add("loader-open");const s=h.value.trim();if(c.reset(),!s){a.error({title:"Error",message:"Please enter a search query"}),i.classList.remove("loader-open");return}m(s).then(e=>{if(e.hits.length===0){i.classList.remove("loader-open"),a.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}f(e.hits),new u(".images-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(e=>{a.error({title:"Error",message:`Something went wrong: ${e.message}`})})});
//# sourceMappingURL=commonHelpers.js.map
