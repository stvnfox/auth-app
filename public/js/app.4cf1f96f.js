(function(){"use strict";var e={584:function(e,t,n){var r=n(9242),o=n(3396),i=n(4870),u=n(678),s=n(2352);const a={class:"d-flex my-4"},c=(0,o.Uk)(" Home "),f=(0,o.Uk)(" Register "),d=(0,o.Uk)(" Dashboard ");var l=(0,o.aZ)({setup(e){const t=(0,s.L)(),n=(0,u.tv)(),r=(t.isLoggedIn,t.isLoggedIn,t.isLoggedIn,()=>{n.push({name:"home"}),t.handleLogout()});return(e,n)=>{const u=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("nav",a,[(0,o._)("div",null,[(0,i.SU)(t).isLoggedIn?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:0,to:"/",class:"me-4"},{default:(0,o.w5)((()=>[c])),_:1})),(0,i.SU)(t).isLoggedIn?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(u,{key:1,to:"/register",class:"me-4"},{default:(0,o.w5)((()=>[f])),_:1})),(0,i.SU)(t).isLoggedIn?((0,o.wg)(),(0,o.j4)(u,{key:2,to:"/dashboard",class:"me-4"},{default:(0,o.w5)((()=>[d])),_:1})):(0,o.kq)("",!0)]),(0,i.SU)(t).isLoggedIn?((0,o.wg)(),(0,o.iD)("button",{key:0,class:"btn btn-primary ms-auto",onClick:r}," Logout ")):(0,o.kq)("",!0)])}}});const g=l;var h=g;const p={class:"container"};var m=(0,o.aZ)({setup(e){return(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",p,[(0,o.Wm)(h),(0,o.Wm)(n,null,{default:(0,o.w5)((({Component:e})=>[(0,o.Wm)(r.uT,{mode:"out-in"},{default:(0,o.w5)((()=>[((0,o.wg)(),(0,o.j4)((0,o.LL)(e)))])),_:2},1024)])),_:1})])}}});const v=m;var b=v;const k=[{path:"/",name:"home",component:()=>Promise.all([n.e(310),n.e(499),n.e(177)]).then(n.bind(n,5476))},{path:"/register",name:"register",component:()=>Promise.all([n.e(310),n.e(499),n.e(685)]).then(n.bind(n,6300))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([n.e(310),n.e(966)]).then(n.bind(n,73))}],y=(0,u.p7)({history:(0,u.PO)("/"),routes:k});var w=y,L=n(8650),j=n(3282);const O=(0,L.WB)();O.use(j.Z);n(8937);const S=(0,r.ri)(b);S.use(w),S.use(O),S.mount("#app")},2352:function(e,t,n){n.d(t,{L:function(){return o}});var r=n(8650);const o=(0,r.Q_)("user-store",{state:()=>({token:"",status:"",user:{}}),getters:{isLoggedIn:e=>!!e.token},actions:{handleLogin(e){return e().then((e=>{this.token=e.data.token,this.status="Success"})).catch((()=>{this.status="Failed"}))},handleLogout(){this.user={},this.token=""},handleUserRequest(e){return e().then((e=>{this.user=e.data.user}))}},persist:{enabled:!0,strategies:[{storage:sessionStorage,paths:["user","token","isLoggedIn"]}]}})}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(f=0;f<e.length;f++){r=e[f][0],o=e[f][1],i=e[f][2];for(var s=!0,a=0;a<r.length;a++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[a])}))?r.splice(a--,1):(s=!1,i<u&&(u=i));if(s){e.splice(f--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var f=e.length;f>0&&e[f-1][2]>i;f--)e[f]=e[f-1];e[f]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+({177:"home",685:"register",966:"dashboard"}[e]||e)+"."+{177:"10c83316",310:"92ef8230",499:"dccff7c5",685:"9b112022",966:"fbb6fd9d"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="frontend:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var s,a;if(void 0!==i)for(var c=document.getElementsByTagName("script"),f=0;f<c.length;f++){var d=c[f];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(a=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var l=function(t,n){s.onerror=s.onload=null,clearTimeout(g);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},g=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),a&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),s=new Error,a=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",s.name="ChunkLoadError",s.type=i,s.request=u,o[1](s)}};n.l(u,a,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],s=r[1],a=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(a)var f=a(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(f)},r=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(584)}));r=n.O(r)})();
//# sourceMappingURL=app.4cf1f96f.js.map