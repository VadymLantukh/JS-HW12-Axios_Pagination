import{a as L,S as E,i as c}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();L.defaults.baseURL="https://pixabay.com";async function w(o,t,r){return(await L("/api/",{params:{page:t,per_page:r,key:"44962191-b2ae47cce5f09f25f6a2bff80",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".form"),g=document.querySelector(".images-list"),m=document.querySelector(".loader"),d=document.querySelector(".loader-more"),h=document.querySelector(".input"),a=document.querySelector(".btn-more");async function b(o){const t=await o.map(r=>`<li class="images-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"

          />
          <div class="property">
          <p><span class="weight">Likes</span> ${r.likes}</p>
          <p><span class="weight">Views</span> ${r.views}</p>
          <p><span class="weight">Comments</span> ${r.comments}</p>
          <p><span class="weight">Downloads</span> ${r.downloads}</p>
          </div>
        </a>
      </li>`).join("");m.classList.remove("loader-open"),d.classList.remove("loader-more-open"),g.insertAdjacentHTML("beforeend",t),new E(".images-list a",{captionsData:"alt",captionDelay:250}).refresh()}let u=15,n=1,l,y,v;f.addEventListener("submit",async o=>{if(o.preventDefault(),a.classList.remove("btn-more-open"),g.innerHTML="",m.classList.add("loader-open"),l!==h.value.trim()&&(n=1),l=h.value.trim(),f.reset(),!l){c.error({title:"Error",message:"Please enter a search query"}),m.classList.remove("loader-open"),a.classList.remove("btn-more-open");return}try{const t=await w(l,n,u);if(t.hits.length===0){m.classList.remove("loader-open"),a.classList.remove("btn-more-open"),c.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}await b(t.hits),a.classList.add("btn-more-open"),n+=1,y=t.totalHits,v=Math.ceil(y/u)}catch(t){c.error({title:"Error",message:`Something went wrong: ${t.message}`})}});a.addEventListener("click",async()=>{a.classList.remove("btn-more-open"),d.classList.add("loader-more-open");try{const o=await w(l,n,u);if(n>v)return d.classList.remove("loader-more-open"),c.warning({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});await b(o.hits);const i=g.querySelector(".images-item").getBoundingClientRect().height;window.scrollBy({top:i*2.2,behavior:"smooth"}),a.classList.add("btn-more-open"),n+=1}catch(o){c.error({title:"Error",message:`Something went wrong: ${o.message}`})}});
//# sourceMappingURL=commonHelpers.js.map
