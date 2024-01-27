import{_ as b,o as t,c as l,K as C,f,I as N,J as $,H as p,w as v,b as i,a as o,t as q,j as _,ar as h,F as z,l as A,q as I,n as B}from"./entry.19f8da95.js";import{_ as y}from"./nuxt-link.39e4afca.js";import x from"./Icon.7789395d.js";import{e as L}from"./appwrite.a78840d9.js";import{u as w,a as k}from"./auth.store.eb543bc7.js";import"./index.df58e121.js";const V={},j={class:"wrapper"},F=C('<svg xmlns="http://www.w3.org/2000/svg" width="120" height="30" fill="#fff" data-v-8b31ac80><circle cx="15" cy="15" r="15" data-v-8b31ac80><animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="15" repeatCount="indefinite" to="15" values="15;9;15" data-v-8b31ac80></animate><animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="1" repeatCount="indefinite" to="1" values="1;.5;1" data-v-8b31ac80></animate></circle><circle cx="60" cy="15" r="9" fill-opacity=".3" data-v-8b31ac80><animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="9" repeatCount="indefinite" to="9" values="9;15;9" data-v-8b31ac80></animate><animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from=".5" repeatCount="indefinite" to=".5" values=".5;1;.5" data-v-8b31ac80></animate></circle><circle cx="105" cy="15" r="15" data-v-8b31ac80><animate attributeName="r" begin="0s" calcMode="linear" dur="0.8s" from="15" repeatCount="indefinite" to="15" values="15;9;15" data-v-8b31ac80></animate><animate attributeName="fill-opacity" begin="0s" calcMode="linear" dur="0.8s" from="1" repeatCount="indefinite" to="1" values="1;.5;1" data-v-8b31ac80></animate></circle></svg>',1),H=[F];function D(m,s){return t(),l("div",j,H)}const E=b(V,[["render",D],["__scopeId","data-v-8b31ac80"]]),R=[{icon:"radix-icons:dashboard",name:"Home",url:"/"},{name:"Payments",icon:"ph:contactless-payment",url:"/payments"},{name:"Customers",icon:"mingcute:group-line",url:"/customers"},{name:"Feedback",icon:"fluent:person-feedback-48-regular",url:"/feedback"},{name:"Help center",icon:"radix-icons:question-mark",url:"/help"}],Z=f({__name:"Menu",setup(m){return(s,a)=>{const r=x,e=y;return t(),l("div",null,[(t(!0),l(N,null,$(_(R),n=>(t(),p(e,{class:"flex items-center py-1 px-3 rounded-lg lg:text-base text-3xl w-full hover:bg-gray-700 hover:shadow transition-all mb-8 lg:mb-2.5",key:n.name,to:n.url},{default:v(()=>[i(r,{name:n.icon,class:"mr-3"},null,8,["name"]),o("span",null,q(n.name),1)]),_:2},1032,["to"]))),128))])}}});const J={class:"px-5 py-8 bg-sidebar h-full relative w-full"},K={class:"flex justify-between items-center lg:grid lg:justify-normal lg:items-stretch gap-y-10 higher-menu"},P=o("svg",{class:"mx-auto lg:w-[140px] logo-width",viewBox:"0 0 256 167",version:"1.1",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},[o("path",{d:"M256,2.84217094e-14 L224.03875,55.3664326 L192.077501,2.84217094e-14 L256,2.84217094e-14 Z M85.3436667,36.9522887 L64.0155001,36.9522887 L117.335917,129.33301 L96.0077501,166.285299 L0,2.84217094e-14 L106.671833,2.84217094e-14 L160.02325,92.3807217 L170.687333,73.9045774 L128,2.84217094e-14 L170.687333,2.84217094e-14 L192.0155,36.9522887 L213.343667,73.9045774 L160.02325,166.285299 L85.3436667,36.9522887 Z",fill:"#a252c8"})],-1),T=f({__name:"Sidebar",setup(m){const s=w(),a=k(),r=h(),e=async()=>{a.set(!0),await L.deleteSession("current"),s.clear(),await r.push("/login"),a.set(!1)};function n(){const c=document.querySelector(".menu"),u=document.querySelector(".higher-menu");c.classList.toggle("menu-open"),u.classList.toggle("menu-after"),document.body.classList.toggle("_lock")}function d(){const c=document.querySelector(".menu"),u=document.querySelector(".higher-menu");c.classList.remove("menu-open"),u.classList.remove("menu-after"),document.body.classList.remove("_lock")}return(c,u)=>{const M=y,g=x,S=Z;return t(),l("aside",J,[o("div",K,[i(M,{to:"/",class:"block relative z-[12]"},{default:v(()=>[P]),_:1}),o("button",{class:"absolute top-2 right-3 transition-colors hover:text-primary",onClick:e},[i(g,{name:"line-md:logout",size:"20"})]),o("button",{type:"button",class:"lg:hidden block",onClick:n},[i(g,{name:"line-md:menu",size:"40",class:"relative z-[12]"})]),i(S,{class:"lg:left-0 lg:static z-[10] absolute transition-all left-[-100%] menu",onClick:d})])])}}});const U=f({__name:"default",setup(m){const s=k(),a=w(),r=h();return z(async()=>{try{const e=await L.get();e&&a.set(e)}catch{r.push("/login")}finally{s.set(!1)}}),(e,n)=>{const d=E,c=T;return _(s).isLoading?(t(),p(d,{key:0})):(t(),l("section",{key:1,class:B({grid:_(a).isAuth}),style:{"min-height":"100vh"}},[_(a).isAuth?(t(),p(c,{key:0})):A("",!0),o("div",null,[I(e.$slots,"default",{},void 0,!0)])],2))}}});const ee=b(U,[["__scopeId","data-v-b62843f9"]]);export{ee as default};
