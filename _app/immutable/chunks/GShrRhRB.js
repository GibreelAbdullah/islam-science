import{am as F,i as P,an as G,U as R,ao as T,O as k,I as x,a9 as S,F as A,a7 as H,ap as D,c as U,n as L,o as m,p as g,aq as Y,j as _,k as N,q as b,ar as j,ad as M,ag as Z,ae as z,s as B,ab as J}from"./DA8XPCnX.js";import{b as q,c as K}from"./DsRmOvRE.js";const I=0,v=1,E=2;function W(l,u,s,d,w){_&&N();var n=l,i=F(),f=U,a=R,e,r,c,p=(i?k:x)(void 0),O=(i?k:x)(void 0),y=!1;function h(t,o){y=!0,o&&(A(C),H(C),D(f));try{t===I&&s&&(e?L(e):e=m(()=>s(n))),t===v&&d&&(r?L(r):r=m(()=>d(n,p))),t!==I&&e&&g(e,()=>e=null),t!==v&&r&&g(r,()=>r=null),t!==E&&c&&g(c,()=>c=null)}finally{o&&(D(null),H(null),A(null),Y())}}var C=P(()=>{if(a!==(a=u())){if(G(a)){var t=a;y=!1,t.then(o=>{t===a&&(T(p,o),h(v,!0))},o=>{if(t===a)throw T(O,o),h(E,!0),O.v}),_?s&&(e=m(()=>s(n))):S(()=>{y||h(I,!0)})}else T(p,a),h(v,!1);return()=>a=R}});_&&(n=b)}function X(l,u,s,d,w){var n=l,i="",f;P(()=>{if(i===(i=u()??"")){_&&N();return}f!==void 0&&(j(f),f=void 0),i!==""&&(f=m(()=>{if(_){b.data;for(var a=N(),e=a;a!==null&&(a.nodeType!==8||a.data!=="");)e=a,a=M(a);if(a===null)throw Z(),z;q(b,e),n=B(a);return}var r=i+"",c=K(r);q(J(c),c.lastChild),n.before(c)}))})}const $=async l=>{const u="http://localhost:8000/";try{return await(await fetch(u+l+".html")).text()}catch{return{type:"text",data:'<div class="text-center text-5xl"><p>Error 404</p><p class="text-2xl">Page Not Found</p><div>'}}},aa="ISLAM, SCIENCE & TECHNOLOGY",ea="/islam-science/";export{ea as R,aa as T,W as a,$ as g,X as h};
