import{t as g,a as u,h as k,s as A}from"../chunks/dT9OGeRD.js";import{a0 as E,a as L,a1 as S,a2 as j,a3 as f,a4 as y,g as s,aj as d,x as i,ak as C,a5 as b,a6 as _}from"../chunks/D084eJI8.js";import{a as D,g as h,R as F,T as G,h as H}from"../chunks/BSKqcxGR.js";import{s as I,p as o,a as N}from"../chunks/Y3_urzAa.js";import{s as P}from"../chunks/BMxT3EVg.js";import"../chunks/Bnwcxk3r.js";const U=()=>{const t=P;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},q={subscribe(t){return U().page.subscribe(t)}};var z=g('<div class="loader svelte-we980i"><div class="react-star svelte-we980i"><div class="nucleus svelte-we980i"></div> <div class="electron electron1 svelte-we980i"></div> <div class="electron electron2 svelte-we980i"></div> <div class="electron electron3 svelte-we980i"></div></div></div>');function B(t){var l=z();u(t,l)}var J=g('<div class="gap-6 max-w-[90rem] place-items-center px-4 pb-28 mx-auto text-lg"><!></div>'),K=g('<div class="h2 text-center pb-8"> </div> <!>',1);function Z(t,l){E(l,!0);const[$,x]=I(),w=()=>N(q,"$page",$);let p=d(null),r=d(""),c=d("");L(()=>{var n;i(r,o(((n=w().url)==null?void 0:n.pathname)||"")),s(r)!==void 0&&(s(r)==="/"?h(F+"FRONTPAGE").then(a=>{i(p,o(a))}):h(s(r)).then(a=>{i(p,o(a))}));let e=s(r).split("/").pop();e=="/"||e==""?i(c,o(G)):i(c,o((e==null?void 0:e.replace(/_/g," ").toUpperCase())||""))});var m=K();k(e=>{f(()=>C.title=s(c))});var v=S(m),T=b(v,!0);_(v);var O=j(v,2);D(O,()=>s(p),e=>{B(e)},(e,n)=>{var a=J(),R=b(a);H(R,()=>s(n)),_(a),u(e,a)}),f(()=>A(T,s(c))),u(t,m),y(),x()}export{Z as component};
