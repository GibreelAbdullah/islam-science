import{t as d,a as p,h as O,s as R}from"../chunks/dT9OGeRD.js";import{a0 as j,a as k,a1 as A,a2 as E,a3 as _,a4 as L,g as s,aj as m,x as i,ak as P,a5 as g,a6 as b}from"../chunks/D084eJI8.js";import{a as S,g as h,R as C,T as D,h as F}from"../chunks/BCy6Dyhi.js";import{s as G,p as l,a as H}from"../chunks/Y3_urzAa.js";import{s as I}from"../chunks/BJFVTv9c.js";import"../chunks/Bnwcxk3r.js";const N=()=>{const t=I;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},U={subscribe(t){return N().page.subscribe(t)}};var z=d('<div class="loader svelte-1qeqboy"><div class="react-star svelte-1qeqboy"><div class="nucleus svelte-1qeqboy"></div> <div class="electron electron1 svelte-1qeqboy"></div> <div class="electron electron2 svelte-1qeqboy"></div> <div class="electron electron3 svelte-1qeqboy"></div></div></div>');function B(t){var c=z();p(t,c)}var J=d('<div class="gap-6 max-w-[90rem] px-4 pb-28 mx-auto text-lg"><!></div>'),K=d('<div class="flex justify-center items-center"><!></div>'),M=d('<div class="h2 text-center pb-8"> </div> <!>',1);function ee(t,c){j(c,!0);const[q,x]=G(),$=()=>H(U,"$page",q);let n=m(null),o=m(""),v=m("");k(()=>{var r;i(n,l(new Promise(()=>{}))),i(o,l(((r=$().url)==null?void 0:r.pathname)||"")),s(o)!==void 0&&(console.log(s(o)),s(o)==="/"||s(o)==="/islam-science/"?h(C+"FRONTPAGE").then(a=>{i(n,l(a))}):h(s(o)).then(a=>{i(n,l(a))}));let e=s(o).split("/").pop();e=="/"||e==""?i(v,l(D)):i(v,l((e==null?void 0:e.replace(/_/g," ").toUpperCase())||""))});var f=M();O(e=>{_(()=>P.title=s(v))});var u=A(f),y=g(u,!0);b(u);var T=E(u,2);S(T,()=>s(n),e=>{var r=K(),a=g(r);B(a),b(r),p(e,r)},(e,r)=>{var a=J(),w=g(a);F(w,()=>s(r)),b(a),p(e,a)}),_(()=>R(y,s(v))),p(t,f),L(),x()}export{ee as component};
