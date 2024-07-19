import{a as u,i,S as p}from"./assets/vendor-c493984e.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();async function d(o){return(await u("https://pixabay.com/api/",{params:{key:"44962191-b2ae47cce5f09f25f6a2bff80",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".images-list"),g=document.querySelector(".loader");async function y(o){const r=await o.map(t=>`<li class="images-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"

          />
          <div class="property">
          <p><span class="weight">Likes</span> ${t.likes}</p>
          <p><span class="weight">Views</span> ${t.views}</p>
          <p><span class="weight">Comments</span> ${t.comments}</p>
          <p><span class="weight">Downloads</span> ${t.downloads}</p>
          </div>
        </a>
      </li>`).join("");g.classList.remove("loader-open"),f.innerHTML=r}const m=document.querySelector(".form"),h=document.querySelector(".images-list"),l=document.querySelector(".loader"),L=document.querySelector(".input"),n=document.querySelector(".btn-more");m.addEventListener("submit",o=>{o.preventDefault(),h.innerHTML="",l.classList.add("loader-open"),n.classList.remove;const r=L.value.trim();if(m.reset(),!r){i.error({title:"Error",message:"Please enter a search query"}),l.classList.remove("loader-open"),n.classList.remove("btn-more-open");return}d(r).then(t=>{if(t.hits.length===0){l.classList.remove("loader-open"),n.classList.remove("btn-more-open"),i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}n.classList.add("btn-more-open"),y(t.hits),new p(".images-list a",{captionsData:"alt",captionDelay:250}).refresh()}).catch(t=>{i.error({title:"Error",message:`Something went wrong: ${t.message}`})})});
//# sourceMappingURL=commonHelpers.js.map
