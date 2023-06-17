(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e){e.classList.add("popup_opened"),document.addEventListener("keydown",r),e.addEventListener("click",o)}function n(e){e.classList.remove("popup_opened"),document.removeEventListener("keydown",r),e.removeEventListener("click",o)}function r(e){"Escape"===e.key&&n(document.querySelector(".popup_opened"))}function o(e){e.currentTarget===e.target&&n(e.target)}e.d({},{bB:()=>N,vT:()=>B,VA:()=>I});var c={baseUrl:"https://nomoreparties.co/v1/wbf-cohort-9",headers:{authorization:"11d55ed6-d048-452d-9cbb-a99fbc35748b","Content-Type":"application/json"}};function u(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}function i(e,n){var r=document.querySelector("#element").content.querySelector(".element").cloneNode(!0),o=r.querySelector(".element__title"),i=r.querySelector(".element__image"),a=r.querySelector(".element__like"),l=r.querySelector(".element_like-span"),d=r.querySelector(".element__btn-delete"),s=e.likes;function p(e){return e.some((function(e){return e._id===n}))}function f(e){s=e,a.classList.toggle("element__like_active",p(e)),l.textContent=s.length}return i.setAttribute("src",e.link),i.setAttribute("alt",e.name),o.textContent=e.name,f(s),a.addEventListener("click",(function(t){var n;(p(s)?(n=e._id,fetch("".concat(c.baseUrl,"/cards/likes/").concat(n),{headers:c.headers,method:"DELETE"}).then(u)):function(e){return fetch("".concat(c.baseUrl,"/cards/likes/").concat(e),{headers:c.headers,method:"PUT"}).then(u)}(e._id)).then((function(e){f(e.likes)})).catch((function(e){return console.log(e)}))})),i.addEventListener("click",(function(){t(I),B.setAttribute("src",i.getAttribute("src")),B.setAttribute("alt",i.getAttribute("alt")),N.textContent=o.textContent})),e.owner._id===n?d.addEventListener("click",(function(){var t;(t=e._id,fetch("".concat(c.baseUrl,"/cards/").concat(t),{headers:c.headers,method:"DELETE"}).then(u)).then((function(e){r.remove(e)})).catch((function(e){return console.log(e)}))})):d.remove(),r}function a(e,t){e.checkValidity()?function(e){e.disabled=!1}(t):l(t)}function l(e){e.disabled=!0}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s,p,f,m=document.querySelector(".profile__edit-button"),v=document.querySelectorAll(".popup"),y=document.querySelector(".profile__circle"),_=document.querySelector("#popup_avatar-edit"),h=_.querySelector(".popup__button"),b=document.querySelector(".profile__avatar"),S=document.querySelector("#avatarUrl"),q=document.querySelector("#popup_edit"),E=q.querySelector(".popup__form"),g=q.querySelector("#nameProfile"),k=q.querySelector("#jobProfile"),L=q.querySelector(".popup__button"),C=document.querySelector(".profile__info"),A=C.querySelector(".profile__title"),x=C.querySelector(".profile__subtitle"),T=document.querySelector("#popup_add"),j=document.querySelector(".profile__add-button"),P=T.querySelector(".popup__form"),U=T.querySelector("#nameCard"),w=T.querySelector("#linkCard"),O=T.querySelector(".popup__button"),D=document.querySelector(".content").querySelector(".elements"),I=document.querySelector("#popup_view"),B=I.querySelector(".popup__image"),N=I.querySelector(".popup__figure");Promise.all([fetch("".concat(c.baseUrl,"/cards"),{method:"GET",headers:c.headers}).then(u),fetch("".concat(c.baseUrl,"/users/me"),{method:"GET",headers:c.headers}).then(u)]).then((function(e){var t=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,i=[],a=!0,l=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=c.call(n)).done)&&(i.push(r.value),i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(e,2),n=t[0],r=t[1];s=r._id,p=r.avatar,A.textContent=r.name,x.textContent=r.about,b.src=p,n.reverse().forEach((function(e){var t=i(e,s);D.prepend(t)}))})).catch((function(e){console.log(e)}));for(var J=function(e){if("popup_edit"===v[e].id){var r=v[e].querySelector(".popup__close"),o=v[e].querySelectorAll(".popup__input");m.addEventListener("click",(function(){t(v[e]),o.forEach((function(e){"nameProfile"===e.id&&(e.value=A.innerText),"jobProfile"===e.id&&(e.value=x.innerText)}))})),r.addEventListener("click",(function(){return n(v[e])}))}if("popup_add"===v[e].id){var c=v[e].querySelector(".popup__close");j.addEventListener("click",(function(){return t(v[e])})),c.addEventListener("click",(function(){return n(v[e])}))}if("popup_view"===v[e].id&&v[e].querySelector(".popup__close").addEventListener("click",(function(){return n(v[e])})),"popup_avatar-edit"===v[e].id){var u=v[e].querySelector(".popup__close");y.addEventListener("click",(function(){return t(v[e])})),u.addEventListener("click",(function(){return n(v[e])}))}},G=0;G<v.length;G++)J(G);function H(e,t){e&&(t.textContent="Сохранение...")}_.addEventListener("submit",(function(e){var t;e.preventDefault(),H(!0,h),(t=S.value,fetch("".concat(c.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:c.headers,body:JSON.stringify({avatar:t})}).then(u)).then((function(e){p=e.avatar,b.src=p,n(_),P.reset()})).catch((function(e){console.log(e)})).finally((function(){H(!1),h.textContent="Сохранить"}))})),E.addEventListener("submit",(function(e){var t,r;e.preventDefault(),H(!0,L),(t=g.value,r=k.value,fetch("".concat(c.baseUrl,"/users/me"),{method:"PATCH",headers:c.headers,body:JSON.stringify({name:t,about:r})}).then(u)).then((function(e){A.textContent=g.value,x.textContent=k.value,n(q)})).catch((function(e){console.log(e)})).finally((function(){H(!1),L.textContent="Сохранить"}))})),P.addEventListener("submit",(function(e){e.preventDefault();var t,r={name:U.value,link:w.value,likes:[]};H(!0,O),(t=r,fetch("".concat(c.baseUrl,"/cards"),{headers:c.headers,method:"POST",body:JSON.stringify({name:t.name,link:t.link})}).then(u)).then((function(t){var r;r=i(t,s),D.prepend(r),l(e.submitter),n(T),P.reset()})).catch((function(e){console.log(e)})).finally((function(){H(!1),O.textContent="Создать"}))})),f={formSelector:".popup__form",inputSelector:".popup__input",buttonSelector:".popup__button",inputErrorClass:"popup__input-error_active",inactiveButtonClass:"popup__button_disabled"},document.querySelectorAll(f.formSelector).forEach((function(e){!function(e,t){var n=e.querySelectorAll(t.inputSelector),r=e.querySelector(t.buttonSelector);a(e,r),n.forEach((function(n){n.addEventListener("input",(function(){(function(e,t){e.validity.valid?function(e,t){var n="".concat(e.id,"-error"),r=document.getElementById(n);e.classList.remove(t.inputErrorClass),r.textContent=""}(e,t):function(e,t,n){var r="".concat(e.id,"-error"),o=document.getElementById(r);e.classList.add(t.inputErrorClass),o.textContent=n}(e,t,e.validationMessage)})(n,t),a(e,r)}))}))}(e,f)}))})();