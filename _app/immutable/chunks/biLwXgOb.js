import{U as x,V,W as z,X as m,Y as W,g as P,Z as c,_ as h,$ as N,B as C,a0 as X,a1 as J,S as Q,a2 as k,A as B,m as p,a3 as ee,a4 as re,a5 as ae,l as ne,s as q,a6 as U,y as K,a7 as M,n as te,a8 as ie,a9 as fe,aa as se,ab as ue,b as j,ac as le,ad as _e,E as de,ae as ve,af as ce,ag as oe,O as Z,ah as be,f as $,ai as ge,aj as ye,ak as he}from"./B4Hih7uB.js";function I(r,t=null,b){if(typeof r!="object"||r===null||x in r)return r;const d=J(r);if(d!==V&&d!==z)return r;var f=new Map,_=Q(r),o=m(0);_&&f.set("length",m(r.length));var y;return new Proxy(r,{defineProperty(s,e,a){(!("value"in a)||a.configurable===!1||a.enumerable===!1||a.writable===!1)&&X();var i=f.get(e);return i===void 0?(i=m(a.value),f.set(e,i)):h(i,I(a.value,y)),!0},deleteProperty(s,e){var a=f.get(e);if(a===void 0)e in s&&f.set(e,m(c));else{if(_&&typeof e=="string"){var i=f.get("length"),n=Number(e);Number.isInteger(n)&&n<i.v&&h(i,n)}h(a,c),G(o)}return!0},get(s,e,a){var v;if(e===x)return r;var i=f.get(e),n=e in s;if(i===void 0&&(!n||(v=N(s,e))!=null&&v.writable)&&(i=m(I(n?s[e]:c,y)),f.set(e,i)),i!==void 0){var u=P(i);return u===c?void 0:u}return Reflect.get(s,e,a)},getOwnPropertyDescriptor(s,e){var a=Reflect.getOwnPropertyDescriptor(s,e);if(a&&"value"in a){var i=f.get(e);i&&(a.value=P(i))}else if(a===void 0){var n=f.get(e),u=n==null?void 0:n.v;if(n!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return a},has(s,e){var u;if(e===x)return!0;var a=f.get(e),i=a!==void 0&&a.v!==c||Reflect.has(s,e);if(a!==void 0||C!==null&&(!i||(u=N(s,e))!=null&&u.writable)){a===void 0&&(a=m(i?I(s[e],y):c),f.set(e,a));var n=P(a);if(n===c)return!1}return i},set(s,e,a,i){var R;var n=f.get(e),u=e in s;if(_&&e==="length")for(var v=a;v<n.v;v+=1){var w=f.get(v+"");w!==void 0?h(w,c):v in s&&(w=m(c),f.set(v+"",w))}n===void 0?(!u||(R=N(s,e))!=null&&R.writable)&&(n=m(void 0),h(n,I(a,y)),f.set(e,n)):(u=n.v!==c,h(n,I(a,y)));var g=Reflect.getOwnPropertyDescriptor(s,e);if(g!=null&&g.set&&g.set.call(i,a),!u){if(_&&typeof e=="string"){var S=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&h(S,O+1)}G(o)}return!0},ownKeys(s){P(o);var e=Reflect.ownKeys(s).filter(n=>{var u=f.get(n);return u===void 0||u.v!==c});for(var[a,i]of f)i.v!==c&&!(a in s)&&e.push(a);return e},setPrototypeOf(){W()}})}function G(r,t=1){h(r,r.v+t)}function Re(r,t,b=!1){B&&p();var d=r,f=null,_=null,o=c,y=b?ee:0,s=!1;const e=(i,n=!0)=>{s=!0,a(n,i)},a=(i,n)=>{if(o===(o=i))return;let u=!1;if(B){const v=d.data===re;!!o===v&&(d=ae(),ne(d),q(!1),u=!0)}o?(f?U(f):n&&(f=K(()=>n(d))),_&&M(_,()=>{_=null})):(_?U(_):n&&(_=K(()=>n(d))),f&&M(f,()=>{f=null})),u&&q(!0)};k(()=>{s=!1,t(e),s||a(null,null)},y),B&&(d=te)}let T=!1;function Pe(r){var t=T;try{return T=!1,[r(),T]}finally{T=t}}const me={get(r,t){if(!r.exclude.includes(t))return r.props[t]},set(r,t){return!1},getOwnPropertyDescriptor(r,t){if(!r.exclude.includes(t)&&t in r.props)return{enumerable:!0,configurable:!0,value:r.props[t]}},has(r,t){return r.exclude.includes(t)?!1:t in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(t=>!r.exclude.includes(t))}};function Ee(r,t,b){return new Proxy({props:r,exclude:t},me)}function H(r){for(var t=C,b=C;t!==null&&!(t.f&(ce|oe));)t=t.parent;try{return Z(t),r()}finally{Z(b)}}function Ie(r,t,b,d){var Y;var f=(b&be)!==0,_=!de||(b&ve)!==0,o=(b&le)!==0,y=(b&ye)!==0,s=!1,e;o?[e,s]=Pe(()=>r[t]):e=r[t];var a=x in r||_e in r,i=o&&(((Y=N(r,t))==null?void 0:Y.set)??(a&&t in r&&(l=>r[t]=l)))||void 0,n=d,u=!0,v=!1,w=()=>(v=!0,u&&(u=!1,y?n=j(d):n=d),n);e===void 0&&d!==void 0&&(i&&_&&ie(),e=w(),i&&i(e));var g;if(_)g=()=>{var l=r[t];return l===void 0?w():(u=!0,v=!1,l)};else{var S=H(()=>(f?$:he)(()=>r[t]));S.f|=fe,g=()=>{var l=P(S);return l!==void 0&&(n=void 0),l===void 0?n:l}}if(!(b&se))return g;if(i){var O=r.$$legacy;return function(l,E){return arguments.length>0?((!_||!E||O||s)&&i(E?g():l),l):g()}}var R=!1,F=!1,D=ge(e),A=H(()=>$(()=>{var l=g(),E=P(D);return R?(R=!1,F=!0,E):(F=!1,D.v=l)}));return f||(A.equals=ue),function(l,E){if(arguments.length>0){const L=E?P(A):_&&o?I(l):l;return A.equals(L)||(R=!0,h(D,L),v&&n!==void 0&&(n=L),j(()=>P(A))),l}return P(A)}}export{I as a,Re as i,Ie as p,Ee as r};
