var jn=Array.isArray,tn=Array.prototype.indexOf,Bn=Array.from,Un=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,nn=Object.getOwnPropertyDescriptors,Hn=Object.prototype,Vn=Array.prototype,en=Object.getPrototypeOf;function Gn(t){return typeof t=="function"}const Kn=()=>{};function $n(t){return t()}function gt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,B=8,it=16,k=32,U=64,K=128,g=256,$=512,v=1024,S=2048,F=4096,P=8192,tt=16384,rn=32768,At=65536,Zn=1<<17,ln=1<<19,xt=1<<20,dt=Symbol("$state"),zn=Symbol("legacy props"),Wn=Symbol("");function kt(t){return t===this.v}function sn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function St(t){return!sn(t,this.v)}function an(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function un(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function on(t){throw new Error("https://svelte.dev/e/effect_orphan")}function fn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Qn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Xn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function te(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function ne(){nt=!0}const ee=1,re=2,le=4,se=8,ae=16,ue=1,oe=2,fe=4,ie=1,_e=2,vn="[",pn="[!",hn="]",Ot={},ce=Symbol(),ve="http://www.w3.org/2000/svg";function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function dn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function wt(t){o=t}function pe(t){return It().get(t)}function he(t,n){return It().set(t,n),n}function de(t,n=!1,e){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(o.l={s:null,u:null,r1:[],r2:_t(!1)})}function we(t){const n=o;if(n!==null){const a=n.e;if(a!==null){var e=i,r=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];J(s.effect),W(s.reaction),Lt(s.fn)}}finally{J(e),W(r)}}o=n.p,n.m=!0}return{}}function et(){return!nt||o!==null&&o.l===null}function It(t){return o===null&&dn(),o.c??(o.c=new Map(wn(o)||void 0))}function wn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}function _t(t,n){var e={f:0,v:t,reactions:null,equals:kt,rv:0,wv:0};return e}function ye(t){return yn(_t(t))}function Ee(t,n=!1){var r;const e=_t(t);return n||(e.equals=St),nt&&o!==null&&o.l!==null&&((r=o.l).s??(r.s=[])).push(e),e}function yn(t){return u!==null&&!x&&u.f&y&&(m===null?Nn([t]):m.push(t)),t}function me(t,n){return u!==null&&!x&&et()&&u.f&(y|it)&&(m===null||!m.includes(t))&&cn(),En(t,n)}function En(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=$t(),Dt(t,S),et()&&i!==null&&i.f&v&&!(i.f&(k|U))&&(A===null?Cn([t]):A.push(t))),n}function Dt(t,n){var e=t.reactions;if(e!==null)for(var r=et(),l=e.length,s=0;s<l;s++){var a=e[s],_=a.f;_&S||!r&&a===i||(T(a,n),_&(v|g)&&(_&y?Dt(a,F):lt(a)))}}let I=!1;function ge(t){I=t}let E;function M(t){if(t===null)throw Rt(),Ot;return E=t}function Te(){return M(N(E))}function Ae(t){if(I){if(N(E)!==null)throw Rt(),Ot;E=t}}function xe(t=1){if(I){for(var n=t,e=E;n--;)e=N(e);E=e}}function ke(){for(var t=0,n=E;;){if(n.nodeType===8){var e=n.data;if(e===hn){if(t===0)return n;t-=1}else(e===vn||e===pn)&&(t+=1)}var r=N(n);n.remove(),n=r}}var yt,Nt,Ct;function Se(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Nt=ht(n,"firstChild").get,Ct=ht(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function st(t=""){return document.createTextNode(t)}function at(t){return Nt.call(t)}function N(t){return Ct.call(t)}function Oe(t,n){if(!I)return at(t);var e=at(E);if(e===null)e=E.appendChild(st());else if(n&&e.nodeType!==3){var r=st();return e==null||e.before(r),M(r),r}return M(e),e}function Re(t,n){if(!I){var e=at(t);return e instanceof Comment&&e.data===""?N(e):e}return E}function Ie(t,n=1,e=!1){let r=I?E:t;for(var l;n--;)l=r,r=N(r);if(!I)return r;var s=r==null?void 0:r.nodeType;if(e&&s!==3){var a=st();return r===null?l==null||l.after(a):r.before(a),M(a),a}return M(r),r}function De(t){t.textContent=""}function bt(t){var n=y|S,e=u!==null&&u.f&y?u:null;return i===null||e!==null&&e.f&g?n|=g:i.f|=xt,{ctx:o,deps:null,effects:null,equals:kt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??i}}function Ne(t){const n=bt(t);return n.equals=St,n}function qt(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)D(n[e])}}function mn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function gn(t){var n,e=i;J(mn(t));try{qt(t),n=zt(t)}finally{J(e)}return n}function Pt(t){var n=gn(t),e=(R||t.f&g)&&t.deps!==null?F:v;T(t,e),t.equals(n)||(t.v=n,t.wv=$t())}function Ft(t){i===null&&u===null&&on(),u!==null&&u.f&g&&i===null&&un(),ct&&an()}function Tn(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function L(t,n,e,r=!0){var l=(t&U)!==0,s=i,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(e){var _=b;try{Et(!0),vt(a),a.f|=rn}catch(C){throw D(a),C}finally{Et(_)}}else n!==null&&lt(a);var w=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(xt|K))===0;if(!w&&!l&&r&&(s!==null&&Tn(a,s),u!==null&&u.f&y)){var c=u;(c.effects??(c.effects=[])).push(a)}return a}function Ce(t){const n=L(B,null,!1);return T(n,v),n.teardown=t,n}function be(t){Ft();var n=i!==null&&(i.f&k)!==0&&o!==null&&!o.m;if(n){var e=o;(e.e??(e.e=[])).push({fn:t,effect:i,reaction:u})}else{var r=Lt(t);return r}}function qe(t){return Ft(),An(t)}function Pe(t){const n=L(U,t,!0);return(e={})=>new Promise(r=>{e.outro?Sn(n,()=>{D(n),r(void 0)}):(D(n),r(void 0))})}function Lt(t){return L(Tt,t,!1)}function An(t){return L(B,t,!0)}function Fe(t,n=[],e=bt){const r=n.map(e);return xn(()=>t(...r.map(Mn)))}function xn(t,n=0){return L(B|it|n,t,!0)}function Le(t,n=!0){return L(B|k,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const e=ct,r=u;mt(!0),W(null);try{n.call(null)}finally{mt(e),W(r)}}}function Yt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;D(e,n),e=r}}function kn(t){for(var n=t.first;n!==null;){var e=n.next;n.f&k||D(n),n=e}}function D(t,n=!0){var e=!1;if((n||t.f&ln)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var s=r===l?null:N(r);r.remove(),r=s}e=!0}Yt(t,n&&!e),X(t,0),T(t,tt);var a=t.transitions;if(a!==null)for(const w of a)w.stop();Mt(t);var _=t.parent;_!==null&&_.first!==null&&jt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function jt(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Sn(t,n){var e=[];Bt(t,e,!0),On(e,()=>{D(t),n&&n()})}function On(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var l of t)l.out(r)}else n()}function Bt(t,n,e){if(!(t.f&P)){if(t.f^=P,t.transitions!==null)for(const a of t.transitions)(a.is_global||e)&&n.push(a);for(var r=t.first;r!==null;){var l=r.next,s=(r.f&At)!==0||(r.f&k)!==0;Bt(r,n,s?e:!1),r=l}}}function Me(t){Ut(t,!0)}function Ut(t,n){if(t.f&P){t.f^=P,t.f&v||(t.f^=v),H(t)&&(T(t,S),lt(t));for(var e=t.first;e!==null;){var r=e.next,l=(e.f&At)!==0||(e.f&k)!==0;Ut(e,l?n:!1),e=r}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const Rn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Z=!1,z=!1,ut=[],ot=[];function Ht(){Z=!1;const t=ut.slice();ut=[],gt(t)}function Vt(){z=!1;const t=ot.slice();ot=[],gt(t)}function Ye(t){Z||(Z=!0,queueMicrotask(Ht)),ut.push(t)}function je(t){z||(z=!0,Rn(Vt)),ot.push(t)}function In(){Z&&Ht(),z&&Vt()}const Gt=0,Dn=1;let V=!1,G=Gt,Y=!1,j=null,b=!1,ct=!1;function Et(t){b=t}function mt(t){ct=t}let O=[],q=0;let u=null,x=!1;function W(t){u=t}let i=null;function J(t){i=t}let m=null;function Nn(t){m=t}let p=null,d=0,A=null;function Cn(t){A=t}let Kt=1,Q=0,R=!1;function $t(){return++Kt}function H(t){var c;var n=t.f;if(n&S)return!0;if(n&F){var e=t.deps,r=(n&g)!==0;if(e!==null){var l,s,a=(n&$)!==0,_=r&&i!==null&&!R,w=e.length;if(a||_){for(l=0;l<w;l++)s=e[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=$)}for(l=0;l<w;l++)if(s=e[l],H(s)&&Pt(s),s.wv>t.wv)return!0}(!r||i!==null&&!R)&&T(t,v)}return!1}function bn(t,n){for(var e=n;e!==null;){if(e.f&K)try{e.fn(t);return}catch{e.f^=K}e=e.parent}throw V=!1,t}function qn(t){return(t.f&tt)===0&&(t.parent===null||(t.parent.f&K)===0)}function rt(t,n,e,r){if(V){if(e===null&&(V=!1),qn(n))throw t;return}e!==null&&(V=!0);{bn(t,n);return}}function Zt(t,n,e=0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var s=r[l];s.f&y?Zt(s,n,e+1):n===s&&(e===0?T(s,S):s.f&v&&T(s,F),lt(s))}}function zt(t){var pt;var n=p,e=d,r=A,l=u,s=R,a=m,_=o,w=x,c=t.f;p=null,d=0,A=null,u=c&(k|U)?null:t,R=(c&g)!==0&&(!b||(l===null||w)&&t.parent!==null),m=null,wt(t.ctx),x=!1,Q++;try{var C=(0,t.fn)(),h=t.deps;if(p!==null){var f;if(X(t,d),h!==null&&d>0)for(h.length=d+p.length,f=0;f<p.length;f++)h[d+f]=p[f];else t.deps=h=p;if(!R)for(f=d;f<h.length;f++)((pt=h[f]).reactions??(pt.reactions=[])).push(t)}else h!==null&&d<h.length&&(X(t,d),h.length=d);if(et()&&A!==null&&!(t.f&(y|F|S)))for(f=0;f<A.length;f++)Zt(A[f],t);return l!==null&&Q++,C}finally{p=n,d=e,A=r,u=l,R=s,m=a,wt(_),x=w}}function Pn(t,n){let e=n.reactions;if(e!==null){var r=tn.call(e,t);if(r!==-1){var l=e.length-1;l===0?e=n.reactions=null:(e[r]=e[l],e.pop())}}e===null&&n.f&y&&(p===null||!p.includes(n))&&(T(n,F),n.f&(g|$)||(n.f^=$),qt(n),X(n,0))}function X(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)Pn(t,e[r])}function vt(t){var n=t.f;if(!(n&tt)){T(t,v);var e=i,r=o;i=t;try{n&it?kn(t):Yt(t),Mt(t);var l=zt(t);t.teardown=typeof l=="function"?l:null,t.wv=Kt;var s=t.deps,a}catch(_){rt(_,t,e,r||t.ctx)}finally{i=e}}}function Wt(){if(q>1e3){q=0;try{fn()}catch(t){if(j!==null)rt(t,j,null);else throw t}}q++}function Jt(t){var n=t.length;if(n!==0){Wt();var e=b;b=!0;try{for(var r=0;r<n;r++){var l=t[r];l.f&v||(l.f^=v);var s=[];Qt(l,s),Fn(s)}}finally{b=e}}}function Fn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if(!(r.f&(tt|P)))try{H(r)&&(vt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?jt(r):r.fn=null))}catch(l){rt(l,r,null,r.ctx)}}}function Ln(){if(Y=!1,q>1001)return;const t=O;O=[],Jt(t),Y||(q=0,j=null)}function lt(t){G===Gt&&(Y||(Y=!0,queueMicrotask(Ln))),j=t;for(var n=t;n.parent!==null;){n=n.parent;var e=n.f;if(e&(U|k)){if(!(e&v))return;n.f^=v}}O.push(n)}function Qt(t,n){var e=t.first,r=[];t:for(;e!==null;){var l=e.f,s=(l&k)!==0,a=s&&(l&v)!==0,_=e.next;if(!a&&!(l&P))if(l&B){if(s)e.f^=v;else{var w=u;try{u=e,H(e)&&vt(e)}catch(f){rt(f,e,null,e.ctx)}finally{u=w}}var c=e.first;if(c!==null){e=c;continue}}else l&Tt&&r.push(e);if(_===null){let f=e.parent;for(;f!==null;){if(t===f)break t;var C=f.next;if(C!==null){e=C;continue t}f=f.parent}}e=_}for(var h=0;h<r.length;h++)c=r[h],n.push(c),Qt(c,n)}function Xt(t){var n=G,e=O;try{Wt();const l=[];G=Dn,O=l,Y=!1,Jt(e);var r=t==null?void 0:t();return In(),(O.length>0||l.length>0)&&Xt(),q=0,j=null,r}finally{G=n,O=e}}async function Be(){await Promise.resolve(),Xt()}function Mn(t){var n=t.f,e=(n&y)!==0;if(u!==null&&!x){m!==null&&m.includes(t)&&_n();var r=u.deps;t.rv<Q&&(t.rv=Q,p===null&&r!==null&&r[d]===t?d++:p===null?p=[t]:p.push(t))}else if(e&&t.deps===null&&t.effects===null){var l=t,s=l.parent;s!==null&&!(s.f&g)&&(l.f^=g)}return e&&(l=t,H(l)&&Pt(l)),t.v}function Ue(t){var n=x;try{return x=!0,t()}finally{x=n}}const Yn=-7169;function T(t,n){t.f=t.f&Yn|n}function He(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(dt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&dt in e&&ft(e)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{ft(t[r],n)}catch{}const e=en(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=nn(e);for(let l in r){const s=r[l].get;if(s)try{s.call(t)}catch{}}}}}export{ee as $,Xn as A,en as B,jn as C,xn as D,I as E,Te as F,At as G,pn as H,ke as I,M as J,ge as K,Me as L,Le as M,Sn as N,E as O,Qn as P,Zn as Q,le as R,dt as S,St as T,ce as U,se as V,zn as W,re as X,k as Y,U as Z,J as _,be as a,Ee as a0,ae as a1,Ne as a2,W as a3,u as a4,Ye as a5,Un as a6,Ce as a7,Se as a8,at as a9,Gn as aA,ue as aB,oe as aC,he as aD,pe as aE,xe as aF,sn as aG,vn as aa,N as ab,Ot as ac,hn as ad,Rt as ae,Jn as af,De as ag,Bn as ah,Pe as ai,st as aj,ie as ak,_e as al,Lt as am,An as an,Xt as ao,ye as ap,Be as aq,D as ar,Kn as as,ve as at,Wn as au,nn as av,je as aw,it as ax,rn as ay,fe as az,Ue as b,o as c,$n as d,He as e,bt as f,Mn as g,nt as h,ne as i,Re as j,we as k,dn as l,Oe as m,Ae as n,Hn as o,de as p,Vn as q,gt as r,Ie as s,Fe as t,qe as u,_t as v,te as w,me as x,ht as y,i as z};
