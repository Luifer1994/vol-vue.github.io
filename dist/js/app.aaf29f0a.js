(function(e){function t(t){for(var a,s,c=t[0],i=t[1],l=t[2],d=0,u=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"53fa4bd0"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,a){n=r[e]=[t,a]}));t.push(n[2]=a);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=s(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vol-vue.github.io/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"48db":function(e,t,n){},"4a91":function(e,t,n){"use strict";n("48db")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={class:"content"};function o(e,t,n,o,s,c){var i=Object(a["w"])("Sidebar"),l=Object(a["w"])("Navbar"),d=Object(a["w"])("router-view");return Object(a["r"])(),Object(a["e"])(a["a"],null,[Object(a["i"])(i),Object(a["f"])("main",r,[Object(a["i"])(l),Object(a["i"])(d)])],64)}var s={class:""},c={id:"sidebarMenu",class:"sidebar d-lg-block bg-gray-800 text-white collapse","data-simplebar":""},i={class:"sidebar-inner px-4 pt-3"},l=Object(a["g"])('<div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4"><div class="d-flex align-items-center"><div class="avatar-lg me-4"><img src="https://www.shareicon.net/data/2016/05/26/771188_man_512x512.png" class="card-img-top rounded-circle border-white" alt="Bonnie Green"></div><div class="d-block"><h2 class="h5 mb-3">Hi, Jane</h2><a href="#" class="btn btn-secondary btn-sm d-inline-flex align-items-center"><svg class="icon icon-xxs me-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0\n                                        01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3\n                                        3 0 013 3v1"></path></svg> Sign Out </a></div></div><div class="collapse-close d-md-none"><a href="#sidebarMenu" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true" aria-label="Toggle navigation"><svg class="icon icon-xs" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0\n                                    011.414 0L10 8.586l4.293-4.293a1 1 0 111.414\n                                    1.414L11.414 10l4.293 4.293a1 1 0 01-1.414\n                                    1.414L10 11.414l-4.293 4.293a1 1 0\n                                    01-1.414-1.414L8.586 10 4.293 5.707a1 1 0\n                                    010-1.414z" clip-rule="evenodd"></path></svg></a></div></div>',1),d={id:"nav",class:"nav flex-column pt-3 pt-md-0"},b={class:"nav-item"},u=Object(a["f"])("div",{"data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu"},[Object(a["f"])("span",{class:"sidebar-icon"},[Object(a["f"])("i",{class:"fas fa-chart-pie"})]),Object(a["f"])("span",{class:"sidebar-text"},"Home")],-1),f={class:"nav-item"},p=Object(a["f"])("div",{"data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu"},[Object(a["f"])("span",{class:"sidebar-icon"},[Object(a["f"])("i",{class:"fas fa-credit-card"})]),Object(a["f"])("span",{class:"sidebar-text"},"Transacciones")],-1),v={class:"nav-item"},g=Object(a["f"])("div",{"data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu"},[Object(a["f"])("span",{class:"sidebar-icon"},[Object(a["f"])("i",{class:"fas fa-users"})]),Object(a["f"])("span",{class:"sidebar-text"},"Usuarios")],-1),m={class:"nav-item"},j=Object(a["f"])("div",{"data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu"},[Object(a["f"])("span",{class:"sidebar-icon"},[Object(a["f"])("i",{class:"fas fa-users"})]),Object(a["f"])("span",{class:"sidebar-text"},"Libros")],-1),O=Object(a["f"])("li",{class:"nav-item"},[Object(a["f"])("a",{href:"#",class:"btn btn-secondary d-flex align-items-center justify-content-center btn-upgrade-pro"},[Object(a["f"])("span",{class:"sidebar-icon d-inline-flex align-items-center justify-content-center"}),Object(a["f"])("span",null,[Object(a["f"])("img",{style:{width:"25px"},src:"https://vuejs.org/images/logo.svg"}),Object(a["h"])(" Vue JS")])])],-1),h=Object(a["g"])('<nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-lg-none"><a class="navbar-brand me-lg-5" href="/"><img class="navbar-brand-dark" src="https://vuejs.org/images/logo.svg" alt="Volt logo"></a><div class="d-flex align-items-center"><button class="navbar-toggler d-lg-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button></div></nav>',1);function w(e,t,n,r,o,w){var x=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["e"])("div",s,[Object(a["f"])("nav",c,[Object(a["f"])("div",i,[l,Object(a["f"])("ul",d,[Object(a["f"])("li",b,[Object(a["i"])(x,{to:"/",class:"nav-link","data-bs-toggle":"collapse","data-bs-target":"#sidebarMenu"},{default:Object(a["C"])((function(){return[u]})),_:1})]),Object(a["f"])("li",f,[Object(a["i"])(x,{to:"/transactions",class:"nav-link"},{default:Object(a["C"])((function(){return[p]})),_:1})]),Object(a["f"])("li",v,[Object(a["i"])(x,{to:"/orders",class:"nav-link"},{default:Object(a["C"])((function(){return[g]})),_:1})]),Object(a["f"])("li",m,[Object(a["i"])(x,{to:"/libros",class:"nav-link"},{default:Object(a["C"])((function(){return[j]})),_:1})]),O])])]),h])}var x={name:"Sidebar"},y=n("6b0d"),k=n.n(y);const M=k()(x,[["render",w]]);var _=M,S={class:""},C={class:"navbar navbar-top navbar-expand navbar-dashboard navbar-dark ps-0 pe-2 pb-0"},L={class:"container-fluid px-0"},P={class:"d-flex justify-content-between w-100",id:"navbarSupportedContent"},T=Object(a["f"])("div",{class:"d-flex align-items-center"},null,-1),H={class:"navbar-nav align-items-center"},B={class:"nav-item dropdown ms-lg-3"},z=Object(a["f"])("a",{class:"nav-link dropdown-toggle pt-1 px-0",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},[Object(a["f"])("div",{class:"media d-flex align-items-center"},[Object(a["f"])("img",{class:"avatar rounded-circle",alt:"Image placeholder",src:"https://www.shareicon.net/data/2016/05/26/771188_man_512x512.png"}),Object(a["f"])("div",{class:"media-body ms-2 text-dark align-items-center d-none d-lg-block"},[Object(a["f"])("span",{class:"mb-0 font-small fw-bold text-gray-900"},"Bonnie Green")])])],-1),E={class:"dropdown-menu dashboard-dropdown dropdown-menu-end mt-2 py-1"},I=Object(a["f"])("svg",{class:"dropdown-icon text-gray-400 me-2",fill:"currentColor",viewBox:"0\n                                            0 20 20",xmlns:"http://www.w3.org/2000/svg"},[Object(a["f"])("path",{"fill-rule":"evenodd",d:"M18 10a8\n                                                8 0 11-16 0 8 8 0 0116 0zm-6-3a2\n                                                2 0 11-4 0 2 2 0 014 0zm-2 4a5 5\n                                                0 00-4.546 2.916A5.986 5.986 0\n                                                0010 16a5.986 5.986 0\n                                                004.546-2.084A5 5 0 0010 11z","clip-rule":"evenodd"})],-1),J=Object(a["h"])(" My Profile "),V=Object(a["f"])("div",{role:"separator",class:"dropdown-divider my-1"},null,-1),A=Object(a["f"])("svg",{class:"dropdown-icon text-danger me-2",fill:"none",stroke:"currentColor",viewBox:"0 0\n                                            24 24",xmlns:"http://www.w3.org/2000/svg"},[Object(a["f"])("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M17 16l4-4m0\n                                                0l-4-4m4 4H7m6 4v1a3 3 0 01-3\n                                                3H6a3 3 0 01-3-3V7a3 3 0\n                                                013-3h4a3 3 0 013 3v1"})],-1),N=Object(a["h"])(" Logout "),G=[A,N];function q(e,t,n,r,o,s){var c=Object(a["w"])("router-link");return Object(a["r"])(),Object(a["e"])("div",S,[Object(a["f"])("nav",C,[Object(a["f"])("div",L,[Object(a["f"])("div",P,[T,Object(a["f"])("ul",H,[Object(a["f"])("li",B,[z,Object(a["f"])("div",E,[Object(a["i"])(c,{to:"/perfil",class:"dropdown-item d-flex align-items-center",href:"#"},{default:Object(a["C"])((function(){return[I,J]})),_:1}),V,Object(a["f"])("a",{onClick:t[0]||(t[0]=function(){return s.logout&&s.logout.apply(s,arguments)}),class:"dropdown-item d-flex align-items-center"},G)])])])])])])])}var U={name:"Navbar",methods:{logout:function(){localStorage.getItem("token")&&localStorage.removeItem("token"),this.$router.push("/login")}}};const $=k()(U,[["render",q]]);var D=$,F={components:{Sidebar:_,Navbar:D}};n("4a91");const K=k()(F,[["render",o]]);var Q=K,R=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("6c02")),W=[{path:"/",name:"Home",component:function(){return n.e("about").then(n.bind(null,"0c7c"))}},{path:"/transactions",name:"Transactions",component:function(){return n.e("about").then(n.bind(null,"fdab"))}},{path:"/orders",name:"Orders",component:function(){return n.e("about").then(n.bind(null,"e58c"))}},{path:"/perfil",name:"Perfil",component:function(){return n.e("about").then(n.bind(null,"7377"))}},{path:"/libros",name:"Libros",component:function(){return n.e("about").then(n.bind(null,"7b6b"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"578a"))}}],X=Object(R["a"])({history:Object(R["b"])("/vol-vue.github.io/"),routes:W});function Y(){if(localStorage.getItem("token"))return!0}X.beforeEach((function(e,t,n){var a=Y();a||"Login"===e.name?n():n("login")}));var Z=X,ee=n("5502"),te=Object(ee["a"])({state:function(){return{count:0}},mutations:{increment:function(e){e.count++}}});Object(a["c"])(Q).use(Z).use(te).mount("#app")}});
//# sourceMappingURL=app.aaf29f0a.js.map