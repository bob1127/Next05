"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[282],{4166:function(e,t,n){n.d(t,{VS:function(){return r},Yv:function(){return l},Yx:function(){return a},sK:function(){return o}});var r=e=>{let t={top:{originY:1},bottom:{originY:0},left:{originX:1},right:{originX:0},"top-start":{originX:0,originY:1},"top-end":{originX:1,originY:1},"bottom-start":{originX:0,originY:0},"bottom-end":{originX:1,originY:0},"right-start":{originX:0,originY:0},"right-end":{originX:0,originY:1},"left-start":{originX:1,originY:0},"left-end":{originX:1,originY:1}};return(null==t?void 0:t[e])||{}},a=e=>({top:"top",bottom:"bottom",left:"left",right:"right","top-start":"top start","top-end":"top end","bottom-start":"bottom start","bottom-end":"bottom end","left-start":"left top","left-end":"left bottom","right-start":"right top","right-end":"right bottom"})[e],l=(e,t)=>{if(t.includes("-")){let[n]=t.split("-");if(n.includes(e))return!1}return!0},o=(e,t)=>{if(t.includes("-")){let[,n]=t.split("-");return`${e}-${n}`}return e}},5765:function(e,t,n){n.d(t,{l:function(){return a}});var r=n(1080);function a(...e){return t=>{e.forEach(e=>(function(e,t){if(null!=e){if((0,r.mf)(e)){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}})(e,t))}}},6992:function(e,t,n){n.d(t,{v:function(){return o}});var r=n(2420),a=n(8824),l=n(7423),o=(0,a.tv)({slots:{base:["z-10","inline-flex","flex-col","items-center","justify-center","box-border","subpixel-antialiased","px-4","py-1","outline-none","box-border",...l.Dh],trigger:["z-10"],backdrop:["hidden"],arrow:["-z-10","absolute","rotate-45","bg-inherit","w-2.5","h-2.5","rounded-sm","data-[placement=top]:-bottom-1","data-[placement=top]:-translate-x-1/2","data-[placement=top-start]:-bottom-1","data-[placement=top-start]:-translate-x-8","data-[placement=top-end]:-bottom-1","data-[placement=top-end]:translate-x-6","data-[placement=bottom]:-top-1","data-[placement=bottom]:-translate-x-1/2","data-[placement=bottom-start]:-top-1","data-[placement=bottom-start]:-translate-x-8","data-[placement=bottom-end]:-top-1","data-[placement=bottom-end]:translate-x-6","data-[placement=left]:-right-1","data-[placement=left]:-translate-y-1/2","data-[placement=left-start]:-right-1","data-[placement=left-start]:-translate-y-3","data-[placement=left-end]:-right-1","data-[placement=left-end]:translate-y-0.5","data-[placement=right]:-left-1","data-[placement=right]:-translate-y-1/2","data-[placement=right-start]:-left-1","data-[placement=right-start]:-translate-y-3","data-[placement=right-end]:-left-1","data-[placement=right-end]:translate-y-0.5"]},variants:{size:{sm:{base:"text-tiny"},md:{base:"text-small"},lg:{base:"text-medium"}},color:{default:{base:"bg-content1",arrow:"shadow-small"},foreground:{base:r.J.solid.foreground},primary:{base:r.J.solid.primary},secondary:{base:r.J.solid.secondary},success:{base:r.J.solid.success},warning:{base:r.J.solid.warning},danger:{base:r.J.solid.danger}},radius:{none:{base:"rounded-none"},sm:{base:"rounded-small"},md:{base:"rounded-medium"},lg:{base:"rounded-large"},full:{base:"rounded-full"}},shadow:{sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},backdrop:{transparent:{},opaque:{backdrop:"bg-overlay/50 backdrop-opacity-disabled"},blur:{backdrop:"backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"}},triggerScaleOnOpen:{true:{trigger:["aria-expanded:scale-[0.97]","aria-expanded:opacity-70","subpixel-antialiased"]},false:{}},disableAnimation:{true:{base:"animate-none"}}},defaultVariants:{color:"default",radius:"lg",size:"md",shadow:"md",backdrop:"transparent",disableAnimation:!1,triggerScaleOnOpen:!0},compoundVariants:[{backdrop:["opaque","blur"],class:{backdrop:"block w-full h-full fixed inset-0 -z-30"}}]})},5282:function(e,t,n){n.d(t,{e:function(){return Y}});var r=n(6006),a=n(5126);let l={},o=0,i=!1,s=null,d=null;var u=n(596),c=n(9755),p=n(1154),m=n(9770),b=n(1921),f=n(6992),g=n(8997),h=n(1080),v=n(5765),y=n(1063),x=n(4166),k=n(8105),w=n(9171),E=n(6040),j=n(8611),O={},P=n(9268),X=(0,b.Gp)((e,t)=>{let n;let{Component:X,children:Y,content:T,isOpen:z,portalContainer:C,placement:N,disableAnimation:S,motionProps:$,showArrow:G,getTriggerProps:I,getTooltipProps:J,getArrowProps:M}=function(e){let[t,n]=(0,b.oe)(e,f.v.variantKeys),{ref:k,as:w,isOpen:E,content:j,children:O,defaultOpen:P,onOpenChange:X,isDisabled:Y,trigger:T,shouldFlip:z=!0,containerPadding:C=12,placement:N="top",delay:S=0,closeDelay:$=500,showArrow:G=!1,offset:I=7,crossOffset:J=0,isDismissable:M,shouldCloseOnBlur:D=!0,portalContainer:R,isKeyboardDismissDisabled:H=!1,shouldCloseOnInteractOutside:V,className:_,onClose:A,motionProps:K,classNames:B,...L}=t,q=function(e={}){let{delay:t=1500,closeDelay:n=500}=e,{isOpen:u,open:c,close:p}=(0,a.d)(e),m=(0,r.useMemo)(()=>`${++o}`,[]),b=(0,r.useRef)(),f=()=>{l[m]=v},g=()=>{for(let e in l)e!==m&&(l[e](!0),delete l[e])},h=()=>{clearTimeout(b.current),b.current=null,g(),f(),i=!0,c(),s&&(clearTimeout(s),s=null),d&&(clearTimeout(d),d=null)},v=e=>{e||n<=0?(clearTimeout(b.current),b.current=null,p()):b.current||(b.current=setTimeout(()=>{b.current=null,p()},n)),s&&(clearTimeout(s),s=null),i&&(d&&clearTimeout(d),d=setTimeout(()=>{delete l[m],d=null,i=!1},Math.max(500,n)))},y=()=>{g(),f(),u||s||i?u||h():s=setTimeout(()=>{s=null,i=!0,h()},t)};return(0,r.useEffect)(()=>()=>{clearTimeout(b.current),l[m]&&delete l[m]},[m]),{isOpen:u,open:e=>{e||!(t>0)||b.current?h():y()},close:v}}({delay:S,closeDelay:$,isDisabled:Y,defaultOpen:P,isOpen:E,onOpenChange:e=>{null==X||X(e),e||null==A||A()}}),F=(0,r.useRef)(null),U=(0,r.useRef)(null),W=(0,r.useId)(),Q=q.isOpen&&!Y;(0,r.useImperativeHandle)(k,()=>(0,y.fg)(U));let{triggerProps:Z,tooltipProps:ee}=function(e,t,n){let{isDisabled:a,trigger:l}=e,o=(0,u.Me)(),i=(0,r.useRef)(!1),s=(0,r.useRef)(!1),d=()=>{(i.current||s.current)&&t.open(s.current)},m=e=>{i.current||s.current||t.close(e)};(0,r.useEffect)(()=>{let e=e=>{n&&n.current&&"Escape"===e.key&&(e.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[n,t]);let{hoverProps:b}=(0,c.XI)({isDisabled:a,onHoverStart:()=>{"focus"!==l&&("pointer"===(0,c.Jz)()?i.current=!0:i.current=!1,d())},onHoverEnd:()=>{"focus"!==l&&(s.current=!1,i.current=!1,m())}}),{pressProps:f}=(0,c.r7)({onPressStart:()=>{s.current=!1,i.current=!1,m(!0)}}),{focusableProps:g}=(0,p.kc)({isDisabled:a,onFocus:()=>{(0,c.E)()&&(s.current=!0,d())},onBlur:()=>{s.current=!1,i.current=!1,m(!0)}},n);return{triggerProps:{"aria-describedby":t.isOpen?o:void 0,...(0,u.dG)(g,b,f)},tooltipProps:{id:o}}}({isDisabled:Y,trigger:T},q,F),{tooltipProps:et}=function(e,t){let n=(0,u.zL)(e,{labelable:!0}),{hoverProps:r}=(0,c.XI)({onHoverStart:()=>null==t?void 0:t.open(!0),onHoverEnd:()=>null==t?void 0:t.close()});return{tooltipProps:(0,u.dG)(n,r,{role:"tooltip"})}}({isOpen:Q,...(0,u.dG)(t,ee)},q),{overlayProps:en,arrowProps:er,placement:ea}=(0,m.tN)({isOpen:Q,targetRef:F,placement:(0,x.Yx)(N),overlayRef:U,offset:G?I+3:I,crossOffset:J,shouldFlip:z,containerPadding:C}),{overlayProps:el}=(0,m.Ir)({isOpen:Q,onClose:q.close,isDismissable:M,shouldCloseOnBlur:D,isKeyboardDismissDisabled:H,shouldCloseOnInteractOutside:V},U),eo=(0,r.useMemo)(()=>{var t,r,a;return(0,f.v)({...n,radius:null!=(t=null==e?void 0:e.radius)?t:"md",size:null!=(r=null==e?void 0:e.size)?r:"md",shadow:null!=(a=null==e?void 0:e.shadow)?a:"sm"})},[...Object.values(n),null==e?void 0:e.radius,null==e?void 0:e.size,null==e?void 0:e.shadow]),ei=(0,g.W)(null==B?void 0:B.base,_),es=(0,r.useCallback)((e={},t=null)=>({...(0,u.dG)(Z,e),ref:(0,v.l)(t,F),"aria-describedby":Q?W:void 0}),[Z,Q,W,q]),ed=(0,r.useCallback)(()=>({ref:U,"data-open":(0,h.PB)(Q),"data-disabled":(0,h.PB)(Y),"data-placement":(0,x.sK)(ea,N),className:eo.base({class:ei}),...(0,u.dG)(et,el,L),style:(0,u.dG)(en.style,L.style,t.style),id:W}),[ei,el,L,U,en,eo,W,et]),eu=(0,r.useCallback)(()=>({className:eo.arrow({class:null==B?void 0:B.arrow}),"data-placement":(0,x.sK)(ea,N),...er}),[er,ea,N,eo,B]);return{Component:w||"div",content:j,children:O,isOpen:Q,triggerRef:F,showArrow:G,portalContainer:R,placement:N,disableAnimation:null==e?void 0:e.disableAnimation,isDisabled:Y,motionProps:K,getTriggerProps:es,getTooltipProps:ed,getArrowProps:eu}}({...e,ref:t});try{let e=r.Children.only(Y);n=(0,r.cloneElement)(e,I(e.props,e.ref))}catch(e){n=(0,P.jsx)("span",{}),function(e,t,...n){var r;let a=t?` [${t}]`:" ",l=`[Next UI]${a}: ${e}`;"undefined"==typeof console||O[l]||(O[l]=!0,(null==(r=null==j?void 0:j.env)?void 0:r.NODE_ENV)==="production")||console.warn(l,n)}("Tooltip must have only one child node. Please, check your code.")}let D=(0,r.useMemo)(()=>G?(0,P.jsx)("span",{...M()}):null,[G,M]),R=(0,r.useMemo)(()=>{let{className:e,...t}=J();return(0,P.jsx)("div",{...t,children:(0,P.jsx)(k.E.div,{animate:"enter",exit:"exit",initial:"exit",style:{...(0,x.VS)(N)},variants:E.y7.scaleSpring,...$,children:(0,P.jsxs)(X,{className:e,children:[T,D]})})})},[J,N,$,X,T,D]);return(0,P.jsxs)(P.Fragment,{children:[n,S&&z?(0,P.jsx)(m.Xj,{portalContainer:C,children:(0,P.jsxs)(X,{...J(),children:[T,D]})}):(0,P.jsx)(w.M,{children:z?(0,P.jsx)(m.Xj,{portalContainer:C,children:R}):null})]})});X.displayName="NextUI.Tooltip";var Y=X}}]);