import{a as f,S as b,i}from"./assets/vendor-ee72e1a4.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))p(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&p(m)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function p(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();f.defaults.baseURL="https://pixabay.com";let v=15;async function g(s,t){return(await f("/api/",{params:{page:t,per_page:v,key:"44962191-b2ae47cce5f09f25f6a2bff80",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const d=document.querySelector(".form"),h=document.querySelector(".images-list"),l=document.querySelector(".loader"),y=document.querySelector(".loader-more"),u=document.querySelector(".input"),a=document.querySelector(".btn-more");async function L(s){const t=await s.map(o=>`<li class="images-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"

          />
          <div class="property">
          <p><span class="weight">Likes</span> ${o.likes}</p>
          <p><span class="weight">Views</span> ${o.views}</p>
          <p><span class="weight">Comments</span> ${o.comments}</p>
          <p><span class="weight">Downloads</span> ${o.downloads}</p>
          </div>
        </a>
      </li>`).join("");l.classList.remove("loader-open"),y.classList.remove("loader-more-open"),h.insertAdjacentHTML("beforeend",t),new b(".images-list a",{captionsData:"alt",captionDelay:250}).refresh()}let c=1,n;d.addEventListener("submit",s=>{if(s.preventDefault(),a.classList.remove("btn-more-open"),h.innerHTML="",l.classList.add("loader-open"),n!==u.value.trim()&&(c=1),n=u.value.trim(),d.reset(),!n){i.error({title:"Error",message:"Please enter a search query"}),l.classList.remove("loader-open"),a.classList.remove("btn-more-open");return}g(n).then(t=>{if(t.hits.length===0){l.classList.remove("loader-open"),a.classList.remove("btn-more-open"),i.warning({title:"Warning",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(t.hits),a.classList.add("btn-more-open"),c+=1}).catch(t=>{i.error({title:"Error",message:`Something went wrong: ${t.message}`})})});a.addEventListener("click",()=>{a.classList.remove("btn-more-open"),y.classList.add("loader-more-open"),g(n,c).then(s=>{L(s.hits),a.classList.add("btn-more-open"),c+=1}).catch(s=>{i.error({title:"Error",message:`Something went wrong: ${s.message}`})})});
//# sourceMappingURL=commonHelpers.js.map
