import{a as y,S as E,i as l}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))m(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&m(p)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();y.defaults.baseURL="https://pixabay.com";async function L(o,t,r){return(await y("/api/",{params:{page:t,per_page:r,key:"44962191-b2ae47cce5f09f25f6a2bff80",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const f=document.querySelector(".form"),b=document.querySelector(".images-list"),c=document.querySelector(".loader"),u=document.querySelector(".loader-more"),g=document.querySelector(".input"),a=document.querySelector(".btn-more");async function v(o){const t=await o.map(r=>`<li class="images-item">
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
      </li>`).join("");c.classList.remove("loader-open"),u.classList.remove("loader-more-open"),b.insertAdjacentHTML("beforeend",t),new E(".images-list a",{captionsData:"alt",captionDelay:250}).refresh()}let d=15,n=1,i,h,w;f.addEventListener("submit",async o=>{if(o.preventDefault(),a.classList.remove("btn-more-open"),b.innerHTML="",c.classList.add("loader-open"),i!==g.value.trim()&&(n=1),i=g.value.trim(),f.reset(),!i){l.error({title:"Error",message:"Please enter a search query"}),c.classList.remove("loader-open"),a.classList.remove("btn-more-open");return}L(i,n,d).then(t=>{if(t.hits.length===0){c.classList.remove("loader-open"),a.classList.remove("btn-more-open"),l.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}v(t.hits),a.classList.add("btn-more-open"),n+=1,h=t.totalHits,w=Math.ceil(h/d)}).catch(t=>{l.error({title:"Error",message:`Something went wrong: ${t.message}`})})});a.addEventListener("click",async()=>{a.classList.remove("btn-more-open"),u.classList.add("loader-more-open"),L(i,n,d).then(o=>{if(n>w)return u.classList.remove("loader-more-open"),l.warning({position:"bottomRight",message:"We're sorry, but you've reached the end of search results."});v(o.hits),a.classList.add("btn-more-open"),n+=1}).catch(o=>{l.error({title:"Error",message:`Something went wrong: ${o.message}`})})});
//# sourceMappingURL=commonHelpers.js.map
