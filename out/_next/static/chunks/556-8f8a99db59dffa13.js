"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[556],{6040:function(e,t,n){n.d(t,{Lj:function(){return r},y7:function(){return o}});var r={ease:[.36,.66,.4,1],easeIn:[.4,0,1,1],easeOut:[0,0,.2,1],easeInOut:[.4,0,.2,1],spring:[.155,1.105,.295,1.12],springOut:[.57,-.15,.62,.07],softSpring:[.16,1.11,.3,1.02]};r.easeOut,r.easeIn;var o={scaleSpring:{enter:{transform:"scale(1)",opacity:1,transition:{type:"spring",bounce:0,duration:.3}},exit:{transform:"scale(0.6)",opacity:0,transition:{type:"easeOut",duration:.2}}},scaleSpringOpacity:{initial:{opacity:0,transform:"scale(0.6)"},enter:{opacity:1,transform:"scale(1)",transition:{type:"spring",bounce:0,duration:.3}},exit:{opacity:0,transform:"scale(0.3)",transition:{type:"spring",bounce:0,duration:.4}}},scale:{enter:{scale:1},exit:{scale:.95}},scaleFadeIn:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.25,ease:r.easeIn}},exit:{transform:"scale(0.95)",opacity:0,transition:{duration:.2,ease:r.easeOut}}},scaleInOut:{enter:{transform:"scale(1)",opacity:1,transition:{duration:.4,ease:r.ease}},exit:{transform:"scale(1.03)",opacity:0,transition:{duration:.3,ease:r.ease}}},fade:{enter:{opacity:1,transition:{duration:.4,ease:r.ease}},exit:{opacity:0,transition:{duration:.3,ease:r.ease}}},collapse:{enter:{opacity:1,height:"auto",transition:{height:{type:"spring",bounce:0,duration:.3},opacity:{easings:"ease",duration:.4}}},exit:{opacity:0,height:0,transition:{easings:"ease",duration:.3}}}}},1245:function(e,t,n){n.d(t,{bd:function(){return w},Xe:function(){return L},bU:function(){return b},qb:function(){return E}});var r=n(6006),o=n(4436);class i{getStringForLocale(e,t){let n=this.strings[t];n||(n=function(e,t,n="en-US"){if(t[e])return t[e];let r=Intl.Locale?new Intl.Locale(e).language:e.split("-")[0];if(t[r])return t[r];for(let e in t)if(e.startsWith(r+"-"))return t[e];return t[n]}(t,this.strings,this.defaultLocale),this.strings[t]=n);let r=n[e];if(!r)throw Error(`Could not find intl message ${e} in ${t} locale`);return r}constructor(e,t="en-US"){this.strings={...e},this.defaultLocale=t}}let l=new Map,s=new Map;class a{format(e,t){let n=this.strings.getStringForLocale(e,this.locale);return"function"==typeof n?n(t,this):n}plural(e,t,n="cardinal"){let r=t["="+e];if(r)return"function"==typeof r?r():r;let o=this.locale+":"+n,i=l.get(o);return i||(i=new Intl.PluralRules(this.locale,{type:n}),l.set(o,i)),"function"==typeof(r=t[i.select(e)]||t.other)?r():r}number(e){let t=s.get(this.locale);return t||(t=new Intl.NumberFormat(this.locale),s.set(this.locale,t)),t.format(e)}select(e,t){let n=e[t]||e.other;return"function"==typeof n?n():n}constructor(e,t){this.locale=e,this.strings=t}}let u=new Set(["Arab","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),c=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function d(e){if(Intl.Locale){let t=new Intl.Locale(e).maximize().script;return u.has(t)}let t=e.split("-")[0];return c.has(t)}function f(){let e="undefined"!=typeof navigator&&(navigator.language||navigator.userLanguage)||"en-US";try{Intl.DateTimeFormat.supportedLocalesOf([e])}catch(t){e="en-US"}return{locale:e,direction:d(e)?"rtl":"ltr"}}let p=f(),m=new Set;function h(){for(let e of(p=f(),m))e(p)}function g(){let e=(0,o.Av)(),[t,n]=(0,r.useState)(p);return((0,r.useEffect)(()=>(0===m.size&&window.addEventListener("languagechange",h),m.add(n),()=>{m.delete(n),0===m.size&&window.removeEventListener("languagechange",h)}),[]),e)?{locale:"en-US",direction:"ltr"}:t}let v=r.createContext(null);function w(e){let{locale:t,children:n}=e,o=g(),i=t?{locale:t,direction:d(t)?"rtl":"ltr"}:o;return r.createElement(v.Provider,{value:i},n)}function b(){let e=g();return(0,r.useContext)(v)||e}let y=new WeakMap;function E(e){let{locale:t}=b(),n=(0,r.useMemo)(()=>{let t;return(t=y.get(e))||(t=new i(e),y.set(e,t)),t},[e]);return(0,r.useMemo)(()=>new a(t,n),[t,n])}let x=new Map;function L(e){let{locale:t}=b(),n=t+(e?Object.entries(e).sort((e,t)=>e[0]<t[0]?-1:1).join():"");if(x.has(n))return x.get(n);let r=new Intl.Collator(t,e);return x.set(n,r),r}},9770:function(e,t,n){n.d(t,{U4:function(){return D},aV:function(){return K},Xj:function(){return H},N3:function(){return A},RP:function(){return _},Ir:function(){return M},Bq:function(){return Z},tN:function(){return T},IB:function(){return N}});var r=n(6006),o=n(7562),i=n(596),l=n(1245),s=n(1154),a=n(9755),u=n(8431),c=n(4436);let d={border:0,clip:"rect(0 0 0 0)",clipPath:"inset(50%)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px",whiteSpace:"nowrap"};function f(e){let{children:t,elementType:n="div",isFocusable:o,style:l,...s}=e,{visuallyHiddenProps:u}=function(e={}){let{style:t,isFocusable:n}=e,[o,i]=(0,r.useState)(!1),{focusWithinProps:l}=(0,a.L_)({isDisabled:!n,onFocusWithinChange:e=>i(e)}),s=(0,r.useMemo)(()=>o?t:t?{...d,...t}:d,[o]);return{visuallyHiddenProps:{...l,style:s}}}(e);return r.createElement(n,(0,i.dG)(s,u),t)}let p={top:"top",bottom:"top",left:"left",right:"left"},m={top:"bottom",bottom:"top",left:"right",right:"left"},h={top:"left",left:"top"},g={top:"height",left:"width"},v={width:"totalWidth",height:"totalHeight"},w={},b="undefined"!=typeof document&&window.visualViewport;function y(e,t,n,r,o){let i=r.scroll[e],l=r[g[e]],s=t-o-i,a=t+o-i+n;return s<0?-s:a>l?Math.max(l-a,-s):0}function E(e){if(w[e])return w[e];let[t,n]=e.split(" "),r=p[t]||"right",o=h[r];p[n]||(n="center");let i=g[r],l=g[o];return w[e]={placement:t,crossPlacement:n,axis:r,crossAxis:o,size:i,crossSize:l},w[e]}function x(e,t,n,r,i,l,s,a,u,c){let{placement:d,crossPlacement:f,axis:p,crossAxis:h,size:g,crossSize:w}=r,b={};b[h]=e[h],"center"===f?b[h]+=(e[w]-n[w])/2:f!==h&&(b[h]+=e[w]-n[w]),b[h]+=l;let y=e[h]-n[w]+u+c,E=e[h]+e[w]-u-c;if(b[h]=(0,o.uZ)(b[h],y,E),d===p){let n=a?s[g]:t[v[g]];b[m[p]]=Math.floor(n-e[p]+i)}else b[p]=Math.floor(e[p]+e[g]+i);return b}function L(e,t,n,r,o,i){let{placement:l,axis:s,size:a}=i;return l===s?Math.max(0,n[s]-e[s]-e.scroll[s]+t[s]-r[s]-r[m[s]]-o):Math.max(0,e[a]+e[s]+e.scroll[s]-t[s]-n[s]-n[a]-r[s]-r[m[s]]-o)}function C(e){let{top:t,left:n,width:r,height:o}=e.getBoundingClientRect(),{scrollTop:i,scrollLeft:l,clientTop:s,clientLeft:a}=document.documentElement;return{top:t+i-s,left:n+l-a,width:r,height:o}}function O(e,t){let n,r=window.getComputedStyle(e);if("fixed"===r.position){let{top:t,left:r,width:o,height:i}=e.getBoundingClientRect();n={top:t,left:r,width:o,height:i}}else{n=C(e);let r=C(t),o=window.getComputedStyle(t);r.top+=(parseInt(o.borderTopWidth,10)||0)-t.scrollTop,r.left+=(parseInt(o.borderLeftWidth,10)||0)-t.scrollLeft,n.top-=r.top,n.left-=r.left}return n.top-=parseInt(r.marginTop,10)||0,n.left-=parseInt(r.marginLeft,10)||0,n}function S(e){let t=window.getComputedStyle(e);return"none"!==t.transform||/transform|perspective/.test(t.willChange)||"none"!==t.filter||"paint"===t.contain||"backdropFilter"in t&&"none"!==t.backdropFilter||"WebkitBackdropFilter"in t&&"none"!==t.WebkitBackdropFilter}let I=new WeakMap,P="undefined"!=typeof document&&window.visualViewport;function T(e){let{direction:t}=(0,l.bU)(),{arrowSize:n=0,targetRef:s,overlayRef:a,scrollRef:u=a,placement:c="bottom",containerPadding:d=12,shouldFlip:f=!0,boundaryElement:p="undefined"!=typeof document?document.body:null,offset:h=0,crossOffset:g=0,shouldUpdatePosition:v=!0,isOpen:w=!0,onClose:T,maxHeight:k,arrowBoundaryOffset:M=0}=e,[N,R]=(0,r.useState)({position:{},arrowOffsetLeft:void 0,arrowOffsetTop:void 0,maxHeight:void 0,placement:void 0}),F=[v,c,a.current,s.current,u.current,d,f,p,h,g,w,t,k,M,n],z=(0,r.useCallback)(()=>{if(!1===v||!w||!a.current||!s.current||!u.current||!p)return;let e=function(e){let t,{placement:n,targetNode:r,overlayNode:i,scrollNode:l,padding:s,shouldFlip:a,boundaryElement:u,offset:c,crossOffset:d,maxHeight:f,arrowSize:p=0,arrowBoundaryOffset:h=0}=e,g=i instanceof HTMLElement?function(e){let t=e.offsetParent;if(t&&t===document.body&&"static"===window.getComputedStyle(t).position&&!S(t)&&(t=document.documentElement),null==t)for(t=e.parentElement;t&&!S(t);)t=t.parentElement;return t||document.documentElement}(i):document.documentElement,v=g===document.documentElement,w=window.getComputedStyle(g).position,I=v?C(r):O(r,g);if(!v){let{marginTop:e,marginLeft:t}=window.getComputedStyle(r);I.top+=parseInt(e,10)||0,I.left+=parseInt(t,10)||0}let P=C(i),T={top:parseInt((t=window.getComputedStyle(i)).marginTop,10)||0,bottom:parseInt(t.marginBottom,10)||0,left:parseInt(t.marginLeft,10)||0,right:parseInt(t.marginRight,10)||0};return P.width+=T.left+T.right,P.height+=T.top+T.bottom,function(e,t,n,r,i,l,s,a,u,c,d,f,p,h,g){var v;let w=E(e),{size:b,crossAxis:C,crossSize:O,placement:S,crossPlacement:I}=w,P=x(t,a,n,w,c,d,u,f,h,g),T=c,k=L(a,u,t,i,l+c,w);if(s&&r[b]>k){let e=E(`${m[S]} ${I}`),r=x(t,a,n,e,c,d,u,f,h,g);L(a,u,t,i,l+c,e)>k&&(w=e,P=r,T=c)}let M=y(C,P[C],n[O],a,l);P[C]+=M;let N=null!=(v=P).top?Math.max(0,a.height+a.top+a.scroll.top-(u.top+v.top)-(i.top+i.bottom+l)):Math.max(0,t.top+u.top-(a.top+a.scroll.top)-(i.top+i.bottom+l));p&&p<N&&(N=p),n.height=Math.min(n.height,N),M=y(C,(P=x(t,a,n,w,T,d,u,f,h,g))[C],n[O],a,l),P[C]+=M;let R={},F=t[C]+.5*t[O]-n[C],z=h/2+g,A=n[O]-h/2-g,H=t[C]-n[C]+h/2,W=t[C]+t[O]-n[C]-h/2,D=(0,o.uZ)(F,H,W);return R[C]=(0,o.uZ)(D,z,A),{position:P,maxHeight:N,arrowOffsetLeft:R.left,arrowOffsetTop:R.top,placement:w.placement}}(n,I,P,{top:l.scrollTop,left:l.scrollLeft,width:l.scrollWidth,height:l.scrollHeight},T,s,a,function(e){let t=0,n=0,r=0,o=0,i=0,l=0,s={};if("BODY"===e.tagName){var a,u;let i=document.documentElement;r=i.clientWidth,o=i.clientHeight,t=null!==(a=null==b?void 0:b.width)&&void 0!==a?a:r,n=null!==(u=null==b?void 0:b.height)&&void 0!==u?u:o,s.top=i.scrollTop||e.scrollTop,s.left=i.scrollLeft||e.scrollLeft}else({width:t,height:n,top:i,left:l}=C(e)),s.top=e.scrollTop,s.left=e.scrollLeft,r=t,o=n;return{width:t,height:n,totalWidth:r,totalHeight:o,scroll:s,top:i,left:l}}(u),"BODY"===u.tagName?C(g):O(g,u),c,d,!!w&&"static"!==w,f,p,h)}({placement:"rtl"===t?c.replace("start","right").replace("end","left"):c.replace("start","left").replace("end","right"),overlayNode:a.current,targetNode:s.current,scrollNode:u.current,padding:d,shouldFlip:f,boundaryElement:p,offset:h,crossOffset:g,maxHeight:k,arrowSize:n,arrowBoundaryOffset:M});Object.keys(e.position).forEach(t=>a.current.style[t]=e.position[t]+"px"),a.current.style.maxHeight=null!=e.maxHeight?e.maxHeight+"px":void 0,R(e)},F);(0,i.bt)(z,F),(0,i.bt)(()=>(window.addEventListener("resize",z,!1),()=>{window.removeEventListener("resize",z,!1)}),[z]),(0,i.yU)({ref:a,onResize:z});let A=(0,r.useRef)(!1);(0,i.bt)(()=>{let e;let t=()=>{A.current=!0,clearTimeout(e),e=setTimeout(()=>{A.current=!1},500),z()};return null==P||P.addEventListener("resize",t),null==P||P.addEventListener("scroll",t),()=>{null==P||P.removeEventListener("resize",t),null==P||P.removeEventListener("scroll",t)}},[z]);let H=(0,r.useCallback)(()=>{A.current||T()},[T,A]);return function(e){let{triggerRef:t,isOpen:n,onClose:o}=e;(0,r.useEffect)(()=>{if(!n||null===o)return;let e=e=>{let n=e.target;if(!t.current||n instanceof Node&&!n.contains(t.current))return;let r=o||I.get(t.current);r&&r()};return window.addEventListener("scroll",e,!0),()=>{window.removeEventListener("scroll",e,!0)}},[n,o,t])}({triggerRef:s,isOpen:w,onClose:T&&H}),{overlayProps:{style:{position:"absolute",zIndex:1e5,...N.position,maxHeight:N.maxHeight}},placement:N.placement,arrowProps:{"aria-hidden":"true",role:"presentation",style:{left:N.arrowOffsetLeft,top:N.arrowOffsetTop}},updatePosition:z}}let k=[];function M(e,t){let{onClose:n,shouldCloseOnBlur:o,isOpen:i,isDismissable:l=!1,isKeyboardDismissDisabled:u=!1,shouldCloseOnInteractOutside:c}=e;(0,r.useEffect)(()=>(i&&k.push(t),()=>{let e=k.indexOf(t);e>=0&&k.splice(e,1)}),[i,t]);let d=()=>{k[k.length-1]===t&&n&&n()};(0,a.Fc)({ref:t,onInteractOutside:l?e=>{(!c||c(e.target))&&(k[k.length-1]===t&&(e.stopPropagation(),e.preventDefault()),d())}:null,onInteractOutsideStart:e=>{(!c||c(e.target))&&k[k.length-1]===t&&(e.stopPropagation(),e.preventDefault())}});let{focusWithinProps:f}=(0,a.L_)({isDisabled:!o,onBlurWithin:e=>{!(e.relatedTarget&&(0,s.cW)(e.relatedTarget))&&(!c||c(e.relatedTarget))&&n()}});return{overlayProps:{onKeyDown:e=>{"Escape"!==e.key||u||(e.stopPropagation(),e.preventDefault(),d())},...f},underlayProps:{onPointerDown:e=>{e.target===e.currentTarget&&e.preventDefault()}}}}function N(e,t,n){let o,{type:l}=e,{isOpen:s}=t;(0,r.useEffect)(()=>{n&&n.current&&I.set(n.current,t.close)}),"menu"===l?o=!0:"listbox"===l&&(o="listbox");let a=(0,i.Me)();return{triggerProps:{"aria-haspopup":o,"aria-expanded":s,"aria-controls":s?a:null,onPress:t.toggle},overlayProps:{id:a}}}"undefined"!=typeof document&&window.visualViewport;let R=r.createContext(null);function F(e){let{children:t}=e,n=(0,r.useContext)(R),[o,i]=(0,r.useState)(0),l=(0,r.useMemo)(()=>({parent:n,modalCount:o,addModal(){i(e=>e+1),n&&n.addModal()},removeModal(){i(e=>e-1),n&&n.removeModal()}}),[n,o]);return r.createElement(R.Provider,{value:l},t)}function z(e){let t;let{modalProviderProps:n}={modalProviderProps:{"aria-hidden":!!(t=(0,r.useContext)(R))&&t.modalCount>0||null}};return r.createElement("div",{"data-overlay-container":!0,...e,...n})}function A(e){return r.createElement(F,null,r.createElement(z,e))}function H(e){let t=(0,c.Av)(),{portalContainer:n=t?null:document.body,...o}=e;if(r.useEffect(()=>{if(null==n?void 0:n.closest("[data-overlay-container]"))throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[n]),!n)return null;let i=r.createElement(A,o);return u.createPortal(i,n)}var W={};function D(e){var t;let{onDismiss:n,...o}=e,s=(0,l.qb)((t=W)&&t.__esModule?t.default:t),a=(0,i.bE)(o,s.format("dismiss"));return r.createElement(f,null,r.createElement("button",{...a,tabIndex:-1,onClick:()=>{n&&n()}}))}W={"ar-AE":{dismiss:`تجاهل`},"bg-BG":{dismiss:`Отхвърляне`},"cs-CZ":{dismiss:"Odstranit"},"da-DK":{dismiss:"Luk"},"de-DE":{dismiss:`Schlie\xdfen`},"el-GR":{dismiss:`Απόρριψη`},"en-US":{dismiss:"Dismiss"},"es-ES":{dismiss:"Descartar"},"et-EE":{dismiss:`L\xf5peta`},"fi-FI":{dismiss:`Hylk\xe4\xe4`},"fr-FR":{dismiss:"Rejeter"},"he-IL":{dismiss:`התעלם`},"hr-HR":{dismiss:"Odbaci"},"hu-HU":{dismiss:`Elutas\xedt\xe1s`},"it-IT":{dismiss:"Ignora"},"ja-JP":{dismiss:`閉じる`},"ko-KR":{dismiss:`무시`},"lt-LT":{dismiss:"Atmesti"},"lv-LV":{dismiss:`Nerādīt`},"nb-NO":{dismiss:"Lukk"},"nl-NL":{dismiss:"Negeren"},"pl-PL":{dismiss:"Zignoruj"},"pt-BR":{dismiss:"Descartar"},"pt-PT":{dismiss:"Dispensar"},"ro-RO":{dismiss:"Revocare"},"ru-RU":{dismiss:`Пропустить`},"sk-SK":{dismiss:`Zrušiť`},"sl-SI":{dismiss:"Opusti"},"sr-SP":{dismiss:"Odbaci"},"sv-SE":{dismiss:"Avvisa"},"tr-TR":{dismiss:"Kapat"},"uk-UA":{dismiss:`Скасувати`},"zh-CN":{dismiss:`取消`},"zh-TW":{dismiss:`關閉`}};let B=new WeakMap,U=[];function _(e,t=document.body){let n=new Set(e),r=new Set,o=e=>{for(let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))n.add(t);let t=e=>{if(n.has(e)||r.has(e.parentElement)&&"row"!==e.parentElement.getAttribute("role"))return NodeFilter.FILTER_REJECT;for(let t of n)if(e.contains(t))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:t}),l=t(e);if(l===NodeFilter.FILTER_ACCEPT&&i(e),l!==NodeFilter.FILTER_REJECT){let e=o.nextNode();for(;null!=e;)i(e),e=o.nextNode()}},i=e=>{var t;let n=null!==(t=B.get(e))&&void 0!==t?t:0;("true"!==e.getAttribute("aria-hidden")||0!==n)&&(0===n&&e.setAttribute("aria-hidden","true"),r.add(e),B.set(e,n+1))};U.length&&U[U.length-1].disconnect(),o(t);let l=new MutationObserver(e=>{for(let t of e)if("childList"===t.type&&0!==t.addedNodes.length&&![...n,...r].some(e=>e.contains(t.target))){for(let e of t.removedNodes)e instanceof Element&&(n.delete(e),r.delete(e));for(let e of t.addedNodes)(e instanceof HTMLElement||e instanceof SVGElement)&&("true"===e.dataset.liveAnnouncer||"true"===e.dataset.reactAriaTopLayer)?n.add(e):e instanceof Element&&o(e)}});l.observe(t,{childList:!0,subtree:!0});let s={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return U.push(s),()=>{for(let e of(l.disconnect(),r)){let t=B.get(e);1===t?(e.removeAttribute("aria-hidden"),B.delete(e)):B.set(e,t-1)}s===U[U.length-1]?(U.pop(),U.length&&U[U.length-1].observe()):U.splice(U.indexOf(s),1)}}let j=r.createContext(null);function K(e){let t,n=(0,c.Av)(),{portalContainer:o=n?null:document.body,isExiting:i}=e,[l,a]=(0,r.useState)(!1),d=(0,r.useMemo)(()=>({contain:l,setContain:a}),[l,a]);return o?(t=e.disableFocusManagement?r.createElement(j.Provider,{value:d},e.children):r.createElement(j.Provider,{value:d},r.createElement(s.MT,{restoreFocus:!0,contain:l&&!i},e.children)),u.createPortal(t,o)):null}function Z(){let e=(0,r.useContext)(j),t=null==e?void 0:e.setContain;(0,i.bt)(()=>{null==t||t(!0)},[t])}},5126:function(e,t,n){n.d(t,{d:function(){return i}});var r=n(6006),o=n(7562);function i(e){let[t,n]=(0,o.zk)(e.isOpen,e.defaultOpen||!1,e.onOpenChange),i=(0,r.useCallback)(()=>{n(!0)},[n]),l=(0,r.useCallback)(()=>{n(!1)},[n]),s=(0,r.useCallback)(()=>{n(!t)},[n,t]);return{isOpen:t,setOpen:n,open:i,close:l,toggle:s}}},7562:function(e,t,n){n.d(t,{uZ:function(){return i},zk:function(){return o}});var r=n(6006);function o(e,t,n){let[o,i]=(0,r.useState)(e||t),l=(0,r.useRef)(void 0!==e),s=void 0!==e;(0,r.useEffect)(()=>{let e=l.current;e!==s&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${s?"controlled":"uncontrolled"}.`),l.current=s},[s]);let a=s?e:o,u=(0,r.useCallback)((e,...t)=>{let r=(e,...t)=>{n&&!Object.is(a,e)&&n(e,...t),s||(a=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((n,...o)=>{let i=e(s?a:n,...o);return(r(i,...t),s)?n:i})):(s||i(e),r(e,...t))},[s,a,n]);return[a,u]}function i(e,t=-1/0,n=1/0){return Math.min(Math.max(e,t),n)}}}]);