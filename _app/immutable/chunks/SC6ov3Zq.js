import{a3 as b,_ as E,a4 as V,z as R,a5 as W,a6 as j,C as B,a7 as H,a8 as k,a9 as Y,aa as q,ab as x,ac as T,K as w,J as I,F as z,O as v,ad as F,ae as $,af as G,ag as J,ah as K,ai as U,aj as X,M as Q,p as Z,c as ee,E as S,k as te}from"./ItuYW4b1.js";import{b as re}from"./Bbn32ruV.js";function _e(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ae=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function pe(e){return ae.includes(e)}const ne={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function he(e){return e=e.toLowerCase(),ne[e]??e}const oe=["touchstart","touchmove"];function ie(e){return oe.includes(e)}const se=["textarea","script","style","title"];function ve(e){return se.includes(e)}function ue(e){var t=V,a=R;b(null),E(null);try{return e()}finally{b(t),E(a)}}const D=new Set,L=new Set;function ce(e,t,a,s={}){function o(r){if(s.capture||y.call(t,r),!r.cancelBubble)return ue(()=>a==null?void 0:a.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,o,s)}):t.addEventListener(e,o,s),o}function ye(e,t,a,s,o){var r={capture:s,passive:o},u=ce(e,t,a,r);(t===document.body||t===window||t===document)&&H(()=>{t.removeEventListener(e,u,r)})}function ge(e){for(var t=0;t<e.length;t++)D.add(e[t]);for(var a of L)a(e)}function y(e){var O;var t=this,a=t.ownerDocument,s=e.type,o=((O=e.composedPath)==null?void 0:O.call(e))||[],r=o[0]||e.target,u=0,_=e.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var p=o.indexOf(t);if(p===-1)return;d<=p&&(u=d)}if(r=o[u]||e.target,r!==t){j(e,"currentTarget",{configurable:!0,get(){return r||a}});var m=V,c=R;b(null),E(null);try{for(var n,i=[];r!==null;){var l=r.assignedSlot||r.parentNode||r.host||null;try{var f=r["__"+s];if(f!==void 0&&!r.disabled)if(B(f)){var[P,...C]=f;P.apply(r,[e,...C])}else f.call(r,e)}catch(g){n?i.push(g):n=g}if(e.cancelBubble||l===t||l===null)break;r=l}if(n){for(let g of i)queueMicrotask(()=>{throw g});throw n}}finally{e.__root=t,delete e.currentTarget,b(m),E(c)}}}let A=!0;function we(e){A=e}function be(e,t){var a=t==null?"":typeof t=="object"?t+"":t;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a+"")}function le(e,t){return M(e,t)}function Ee(e,t){k(),t.intro=t.intro??!1;const a=t.target,s=S,o=v;try{for(var r=Y(a);r&&(r.nodeType!==8||r.data!==q);)r=x(r);if(!r)throw T;w(!0),I(r),z();const u=M(e,{...t,anchor:r});if(v===null||v.nodeType!==8||v.data!==F)throw $(),T;return w(!1),u}catch(u){if(u===T)return t.recover===!1&&G(),k(),J(a),w(!1),le(e,t);throw u}finally{w(s),I(o)}}const h=new Map;function M(e,{target:t,anchor:a,props:s={},events:o,context:r,intro:u=!0}){k();var _=new Set,d=c=>{for(var n=0;n<c.length;n++){var i=c[n];if(!_.has(i)){_.add(i);var l=ie(i);t.addEventListener(i,y,{passive:l});var f=h.get(i);f===void 0?(document.addEventListener(i,y,{passive:l}),h.set(i,1)):h.set(i,f+1)}}};d(K(D)),L.add(d);var p=void 0,m=U(()=>{var c=a??t.appendChild(X());return Q(()=>{if(r){Z({});var n=ee;n.c=r}o&&(s.$$events=o),S&&re(c,null),A=u,p=e(c,s)||{},A=!0,S&&(R.nodes_end=v),r&&te()}),()=>{var l;for(var n of _){t.removeEventListener(n,y);var i=h.get(n);--i===0?(document.removeEventListener(n,y),h.delete(n)):h.set(n,i)}L.delete(d),c!==a&&((l=c.parentNode)==null||l.removeChild(c))}});return N.set(p,m),p}let N=new WeakMap;function me(e,t){const a=N.get(e);return a?(N.delete(e),a(t)):Promise.resolve()}export{we as a,_e as b,ce as c,ge as d,pe as e,A as f,ye as g,Ee as h,ve as i,le as m,he as n,be as s,me as u};
