import{t as _,s as L,a as f,h as z,c as D}from"../chunks/B_H2C272.js";import{p as R,k as x,l as u,t as j,a6 as B,g as e,j as q,a as F,i as y,s as J,a7 as k,v as b,a8 as K}from"../chunks/BYs6UUtQ.js";import{e as M,s as N,i as P,h as Q,a as V,g as E,R as W,T as Y,G as Z,b as ee}from"../chunks/BrKQH9TO.js";import{p as G,s as ae,a as h,b as te,i as I}from"../chunks/BPFpQDH6.js";import{i as O}from"../chunks/D3LbDVUg.js";import{b as se}from"../chunks/BpZO5KxE.js";import{s as re}from"../chunks/U9q5z7jn.js";var oe=_('<a class="block w-full h-full"><div class="card preset-filled-surface-100-900 border-[1px] border-surface-200-800 w-full h-full max-w-md px-4 py-8 flex text-center justify-center flex-col m-auto"><h2 class="text-2xl font-bold"> </h2></div></a>'),ie=_('<div class="grid grid-cols-1 gap-6 max-w-[90rem] place-items-center px-4 pb-28 mx-auto svelte-jkhqg8"></div>');function le(a,s){R(s,!1);let v=G(s,"data",8),p=G(s,"path",8);O();var i=ie();M(i,5,()=>v().data,P,(m,l)=>{var r=oe(),g=x(r),c=x(g),T=x(c,!0);u(c),u(g),u(r),j((w,t)=>{N(r,"href",`${se??""}${w??""}/${t??""}`),L(T,e(l))},[()=>p().replace("/",""),()=>e(l).toLowerCase().replace(/\s+/g,"_")],B),f(m,r)}),u(i),f(a,i),q()}const pe=()=>{const a=re;return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},updated:a.updated}},ce={subscribe(a){return pe().page.subscribe(a)}};var ne=_('<div class="max-w-[90rem] place-items-center px-4 pb-28 mx-auto space-y-8 text-lg"><!></div>');function de(a,s){R(s,!1);let v=G(s,"data",8);O();var p=ne(),i=x(p);Q(i,()=>v().data),u(p),f(a,p),q()}var ue=_('<div class="h2 text-center pb-8"> </div> <!>',1);function _e(a,s){R(s,!0);const[v,p]=ae(),i=()=>te(ce,"$page",v);let m=k(null),l=k(""),r=k("");F(()=>{var o;b(l,h(((o=i().url)==null?void 0:o.pathname)||"")),e(l)!==void 0&&(e(l)==="/"?E(W).then(n=>{b(m,h(n))}):E(e(l)).then(n=>{b(m,h(n))}));let t=e(l).split("/").pop();t=="/"||t==""?b(r,h(Y)):b(r,h((t==null?void 0:t.replace(/_/g," ").toUpperCase())||""))});var g=ue();z(t=>{j(()=>K.title=e(r))});var c=y(g),T=x(c,!0);u(c);var w=J(c,2);V(w,()=>e(m),null,(t,o)=>{var n=D(),S=y(n);{var A=d=>{le(d,{get data(){return e(o)},get path(){return i().url.pathname}})},H=d=>{var C=D(),U=y(C);{var X=$=>{de($,{get data(){return e(o)}})};I(U,$=>{e(o)&&e(o).type===ee&&$(X)},!0)}f(d,C)};I(S,d=>{e(o)&&e(o).type===Z?d(A):d(H,!1)})}f(t,n)}),j(()=>L(T,e(r))),f(a,g),q(),p()}export{_e as component};
