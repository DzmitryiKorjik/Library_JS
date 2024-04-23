(()=>{"use strict";const t=function(e){return new t.prototype.init(e)};t.prototype.init=function(t){return t?t.tagName?(this[0]=t,this.length=1,this):(Object.assign(this,document.querySelectorAll(t)),this.length=document.querySelectorAll(t).length,this):this},t.prototype.init.prototype=t.prototype,window.$=t;const e=t;e.prototype.show=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="");return this},e.prototype.hide=function(){for(let t=0;t<this.length;t++)this[t].style&&(this[t].style.display="none");return this},e.prototype.toggle=function(){for(let t=0;t<this.length;t++)this[t].style&&("none"===this[t].style.display?this[t].style.display="":this[t].style.display="none");return this},e.prototype.addClass=function(...t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.add(...t);return this},e.prototype.removeClass=function(...t){for(let e=0;e<this.length;e++)this[e]&&this[e].classList.remove(...t);return this},e.prototype.toggleClass=function(t){for(let e=0;e<this.length;e++)this[e].classList&&this[e].classList.toggle(t);return this},e.prototype.on=function(t,e){for(let s=0;s<this.length;s++){if(!t||!e)return this;this[s].addEventListener(t,e)}return this},e.prototype.off=function(t,e){for(let s=0;s<this.length;s++){if(!t||!e)return this;this[s].removeEventListener(t,e)}return this},e.prototype.click=function(t){for(let e=0;e<this.length;e++)t?this[e].addEventListener("click",t):this[e].click();return this},e.prototype.html=function(t){for(let e=0;e<this.length;e++){if(!t)return this[e].innerHTML;this[e].innerHTML=t}return this},e.prototype.eq=function(t){const e=this[t],s=Object.keys(this).length;for(let t=0;t<s;t++)delete this[t];return this[0]=e,this.length=1,this},e.prototype.index=function(){return[...this[0].parentNode.children].findIndex((t=>t==this[0]))},e.prototype.find=function(t){let e=0,s=0;const i=Object.assign({},this);for(let n=0;n<i.length;n++){const o=i[n].querySelectorAll(t);if(0!=o.length){for(let t=0;t<o.length;t++)this[s]=o[t],s++;e+=o.length}}this.length=e;const n=Object.keys(this).length;for(;e<n;e++)delete this[e];return this},e.prototype.closest=function(t){let e=0;for(let s=0;s<this.length;s++)this[s]=this[s].closest(t),e++;const s=Object.keys(this).length;for(;e<s;e++)delete this[e];return this},e.prototype.siblings=function(t){let e=0,s=0;const i=Object.assign({},this);for(let t=0;t<i.length;t++){const n=i[t].parentNode.children;for(let e=0;e<n.length;e++)i[t]!==n[e]&&(this[s]=n[e],s++);e+=n.length-1}this.length=e;const n=Object.keys(this).length;for(;e<n;e++)delete this[e];return this},e.prototype.animateOverTime=function(t,e,s){let i;return function n(o){i||(i=o);let l=o-i,r=Math.min(l/t,1);e(r),l<t?requestAnimationFrame(n):"function"==typeof s&&s()}},e.prototype.fadeIn=function(t,e,s){for(let i=0;i<this.length;i++){this[i].style.display=e||"block";const n=t=>{this[i].style.opacity=t},o=this.animateOverTime(t,n,s);requestAnimationFrame(o)}return this},e.prototype.fadeOut=function(t,e){for(let s=0;s<this.length;s++){const i=t=>{this[s].style.opacity=1-t,1===t&&(this[s].style.display="none")},n=this.animateOverTime(t,i,e);requestAnimationFrame(n)}return this},e.prototype.fadeToggle=function(t,e,s){for(let i=0;i<this.length;i++)if("none"===window.getComputedStyle(this[i]).display){this[i].style.display=e||"block";const n=t=>{this[i].style.opacity=t},o=this.animateOverTime(t,n,s);requestAnimationFrame(o)}else{const e=t=>{this[i].style.opacity=1-t,1===t&&(this[i].style.display="none")},n=this.animateOverTime(t,e,s);requestAnimationFrame(n)}return this},e.prototype.dropdown=function(){for(let t=0;t<this.length;t++){const s=this[t].getAttribute("id");e(this[t]).click((()=>{e(`[data-toggle-id="${s}"]`).fadeToggle(300)}))}},e(".dropdown-toggle").dropdown(),e.prototype.modal=function(t){for(let s=0;s<this.length;s++){const i=this[s].getAttribute("data-target");e(this[s]).click((t=>{t.preventDefault(),e(i).fadeIn(500),document.body.style.overflow="hidden"})),document.querySelectorAll(`${i} [data-close]`).forEach((s=>{e(s).click((()=>{e(i).fadeOut(500),document.body.style.overflow="",t&&document.querySelector(i).remove()}))})),e(i).click((s=>{s.target.classList.contains("modal")&&(e(i).fadeOut(500),document.body.style.overflow="",t&&document.querySelector(i).remove())}))}},e('[data-toggle="modal"]').modal(),e.prototype.createModal=function({text:t,btns:s}={}){for(let i=0;i<this.length;i++){let n=document.createElement("div");n.classList.add("modal"),n.setAttribute("id",this[i].getAttribute("data-target").slice(1));const o=[];for(let t=0;t<s.count;t++){let e=document.createElement("button");e.classList.add("btn",...s.settings[t][1]),e.textContent=s.settings[t][0],s.settings[t][2]&&e.setAttribute("data-close","true"),s.settings[t][3]&&"function"==typeof s.settings[t][3]&&e.addEventListener("click",s.settings[t][3]),o.push(e)}n.innerHTML=`\n            <div class="modal-dialog">\n                <div class="modal-content">\n                    <button class="close" data-close>\n                        <span>&times;</span>\n                    </button>\n                    <div class="modal-header">\n                        <div class="modal-title">\n                            ${t.title}\n                        </div>\n                    </div>\n                    <div class="modal-body">\n                        ${t.body} \n                    </div>\n                    <div class="modal-footer">\n\n                    </div>\n                </div>\n            </div>\n        `,n.querySelector(".modal-footer").append(...o),document.body.appendChild(n),e(this[i]).modal(!0),e(this[i].getAttribute("data-target")).fadeIn(500)}},e.prototype.tab=function(){for(let t=0;t<this.length;t++)e(this[t]).on("click",(()=>{e(this[t]).addClass("tab-item--active").siblings().removeClass("tab-item--active").closest(".tab").find(".tab-content").removeClass("tab-content--active").eq(e(this[t]).index()).addClass("tab-content--active")}))},e("[data-tabpanel] .tab-item").tab(),e.prototype.accordion=function(t="accordion-head--active",s="accordion-content--active",i=40){for(let n=0;n<this.length;n++)e(this[n]).click((()=>{e(this[n]).toggleClass(t),e(this[n].nextElementSibling).toggleClass(s),this[n].classList.contains(t)?this[n].nextElementSibling.style.maxHeight=this[n].nextElementSibling.scrollHeight+i+"px":this[n].nextElementSibling.style.maxHeight="0px"}))},e(".accordion-head").accordion(),e.prototype.carousel=function(){for(let t=0;t<this.length;t++){const s=window.getComputedStyle(this[t].querySelector(".carousel-inner")).width,i=this[t].querySelectorAll(".carousel-item"),n=this[t].querySelector(".carousel-slides"),o=this[t].querySelectorAll(".carousel-indicators li");n.style.width=100*i.length+"%",i.forEach((t=>{t.style.width=s}));let l,r=0,a=0;const c=()=>{r==+s.replace(/\D/g,"")*(i.length-1)?r=0:r+=+s.replace(/\D/g,""),n.style.transform=`translateX(-${r}px)`,a==i.length-1?a=0:a++,o.forEach((t=>t.classList.remove("active"))),o[a].classList.add("active")},h=()=>{l=setInterval((()=>{c()}),3e3)};h();const d=()=>{clearInterval(l)};e(this[t]).on("mouseenter",d),e(this[t]).on("mouseleave",h),e(this[t].querySelector('[data-slide="next"]')).click((t=>{t.preventDefault(),c()})),e(this[t].querySelector('[data-slide="prev"]')).click((t=>{t.preventDefault(),0==r?r=+s.replace(/\D/g,"")*(i.length-1):r-=+s.replace(/\D/g,""),n.style.transform=`translateX(-${r}px)`,0==a?a=i.length-1:a--,o.forEach((t=>t.classList.remove("active"))),o[a].classList.add("active")}));const u=this[t].getAttribute("id");e(`#${u} .carousel-indicators li`).click((t=>{const e=t.target.getAttribute("data-slide-to");a=e,r=+s.replace(/\D/g,"")*e,n.style.transform=`translateX(-${r}px)`,o.forEach((t=>t.classList.remove("active"))),o[a].classList.add("active")}))}},e(".carousel").carousel(),e.prototype.get=async function(t,e="json"){let s=await fetch(t);if(!s.ok)throw new Error(`Could not fetch ${t}, status: ${s.status}`);switch(e){case"json":return await s.json();case"text":return await s.text();case"blob":return await s.blob()}},e.prototype.post=async function(t,e,s="text"){let i=await fetch(t,{method:"POST",body:e});switch(s){case"json":return await i.json();case"text":return await i.text();case"blob":return await i.blob()}},e().get("https://jsonplaceholder.typicode.com/todos/1").then((t=>console.log(t)))})();