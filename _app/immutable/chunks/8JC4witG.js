import{i as m,h as H,H as L,j as O,k as g,s as c,l as A,m as C,n as _,o as I,p as Y,q as j,t as k,v as M,w as S,x as V,y as $,z as q,c as z,A as w,B,C as P}from"./B4Hih7uB.js";import{a as W,r as N,h,i as F}from"./BOXUTW7i.js";import{a as G}from"./DlBT4VyL.js";let R=!0;function X(t){R=t}function Z(t,e){var r=e==null?"":typeof e=="object"?e+"":e;r!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=r,t.nodeValue=r+"")}function J(t,e){return b(t,e)}function x(t,e){m(),e.intro=e.intro??!1;const r=e.target,u=w,l=_;try{for(var a=H(r);a&&(a.nodeType!==8||a.data!==L);)a=O(a);if(!a)throw g;c(!0),A(a),C();const i=b(t,{...e,anchor:a});if(_===null||_.nodeType!==8||_.data!==I)throw Y(),g;return c(!1),i}catch(i){if(i===g)return e.recover===!1&&j(),m(),k(r),c(!1),J(t,e);throw i}finally{c(u),A(l)}}const d=new Map;function b(t,{target:e,anchor:r,props:u={},events:l,context:a,intro:i=!0}){m();var v=new Set,y=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!v.has(n)){v.add(n);var f=F(n);e.addEventListener(n,h,{passive:f});var E=d.get(n);E===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,E+1)}}};y(M(W)),N.add(y);var p=void 0,D=S(()=>{var o=r??e.appendChild(V());return $(()=>{if(a){q({});var s=z;s.c=a}l&&(u.$$events=l),w&&G(o,null),R=i,p=t(o,u)||{},R=!0,w&&(B.nodes_end=_),a&&P()}),()=>{var f;for(var s of v){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}N.delete(y),o!==r&&((f=o.parentNode)==null||f.removeChild(o))}});return T.set(p,D),p}let T=new WeakMap;function ee(t,e){const r=T.get(t);return r?(T.delete(t),r(e)):Promise.resolve()}export{X as a,R as b,x as h,J as m,Z as s,ee as u};
