(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[508],{1502:function(e,t,s){Promise.resolve().then(s.bind(s,6917))},6917:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return T}});var a=s(9268),i=s(5862),r=s(5846),n=s.n(r),l=s(6394),c=s.n(l),d=s(6006);s(691),s(7353),s(1765),s(2343),s(5303),s(2595),s(4737);var o=s(551),x=s.n(o);s(176);var m=function(e){let{data:t,time:s,width:i,height:r,captionStyle:n,slideNumberStyle:l,radius:c,slideNumber:o,style:m,captionPosition:p,dots:h,automatic:u,pauseIconColor:w,pauseIconSize:g,slideBackgroundColor:j,slideImageFit:y,thumbnails:f,thumbnailWidth:v,showNavBtn:b=!0}=e,[k,N]=(0,d.useState)(0),[C,_]=(0,d.useState)(!1),[S,E]=(0,d.useState)(0),W=e=>{k+e>=t.length?N(0):k+e<0?N(t.length-1):N(k+e)};return(0,d.useEffect)(()=>{var e,s=document.getElementsByClassName("carousel-item"),a=document.getElementsByClassName("dot");for(e=0;e<t.length;e++)s[e].style.display="none";if(f){var i=document.getElementsByClassName("thumbnail");for(e=0;e<i.length;e++)i[e].className=i[e].className.replace(" active-thumbnail","");void 0!==i[k]&&(i[k].className+=" active-thumbnail"),function(e){let t=e.offsetLeft+e.offsetWidth,s=e.parentNode.offsetLeft+e.parentNode.offsetWidth;t>=s+e.parentNode.scrollLeft?e.parentNode.scroll({left:t-s,behavior:"smooth"}):t<=e.parentNode.offsetLeft+e.parentNode.scrollLeft&&e.parentNode.scroll({left:e.offsetLeft-e.parentNode.offsetLeft,behavior:"smooth"})}(document.getElementById("thumbnail-".concat(k)))}void 0!==s[k]&&(s[k].style.display="block"),void 0!==a[k]&&(a[k].className+=" active")},[k,C]),(0,a.jsxs)("div",{style:m,className:"px-5 w-full  box overflow-hidden  xl:w-3/5 xl:pl-20",children:[(0,a.jsx)("div",{children:(0,a.jsx)(x(),{onSwipeRight:()=>{W(-1),E(!S)},onSwipeLeft:()=>{W(1),E(!S)},children:(0,a.jsxs)("div",{className:"carousel-container ",style:{height:r||"100%",height:r||"400px",borderRadius:c},children:[t.map((e,s)=>(0,a.jsxs)("div",{className:"carousel-item fade",onMouseDown:e=>{u&&_(!0)},onMouseUp:e=>{u&&_(!1)},onMouseLeave:e=>{u&&_(!1)},onTouchStart:e=>{u&&_(!0)},onTouchEnd:e=>{u&&_(!1)},children:[o&&(0,a.jsxs)("div",{className:"slide-number",style:l,children:[s+1," / ",t.length]}),(0,a.jsx)("img",{src:e.image,alt:e.caption,className:"carousel-image",style:{borderRadius:c,objectFit:y||"cover"}}),C&&(0,a.jsx)("div",{className:"pause-icon pause",style:{color:w||"white",fontSize:g||"40px"},children:"II"}),(0,a.jsx)("div",{className:"carousel-caption-".concat(p||"bottom"),style:n,dangerouslySetInnerHTML:{__html:e.caption}})]},s)),b&&(0,a.jsx)("a",{className:"prev",onClick:e=>{W(-1),E(!S)},children:(0,a.jsx)("img",{className:"w-10",src:"https://www.zensor.com.tw/images/Icon-Img/right-arrow-2-2.png",alt:""})}),b&&(0,a.jsx)("a",{className:"next",onClick:e=>{W(1),E(!S)},children:(0,a.jsx)("img",{className:"w-10",src:"https://www.zensor.com.tw/images/Icon-Img/right-arrow-2-2.png",alt:""})}),h&&(0,a.jsx)("div",{className:"dots",children:t.map((e,t)=>(0,a.jsx)("span",{className:"dot",onClick:e=>{N(t),E(!S)}},t))})]})})}),f&&(0,a.jsx)("div",{className:"thumbnails",id:"thumbnail-div",style:{maxWidth:i},children:t.map((e,t)=>(0,a.jsx)("img",{width:v||"100px",src:e.image,alt:e.caption,className:"thumbnail",id:"thumbnail-".concat(t),onClick:e=>{N(t),E(!S)}},t))})]})};function p(){return(0,a.jsx)("div",{className:"flex flex-wrap gap-4",children:(0,a.jsxs)("div",{className:"wrap  bg-amber-100 rounded-full opacity-60 px-7 py-1 flex",children:[(0,a.jsx)(n(),{href:"../Products",children:(0,a.jsx)("p",{className:"text-black",children:"Back to products"})}),(0,a.jsx)("span",{className:"mx-5 color-black",children:"/"}),(0,a.jsx)(n(),{href:"../Products",children:(0,a.jsx)("p",{className:"text-black",children:"Back to products"})})]})})}var h=s(8894),u=s.n(h);let w=[{name:"Google Pixel Creator Labs",client:"Grow",description:"A partnership between Google & SN37.",src:"google.jpg",year:2023},{name:"Decimal",client:"Decimal",description:"Portfolio site for Decimal.",src:"decimal.jpg",year:2023},{name:"MAVEN 11",client:"analogueagency",description:"New web design for the blockchain investment fund Maven 11.",src:"maven.jpg",year:2022},{name:"Wix Playground Homepage",client:"Wix Playground",description:"Wix Playground is powered by the Wix.com design team.",src:"wix.jpg",year:2022},{name:"POWELL—STUDIO",client:"POWELL—STUDIO",description:"The online presence for Powell—Studio.",src:"powell.jpg",year:2023},{name:"ROCKETPANDA",client:"ET Studio",description:"An Italian animation studio.",src:"panda.jpg",year:2022},{name:"C2 Montreal",client:"Ingamana",description:"C2 Montr\xe9al is Canada's premier creative-business event.",src:"c2.jpg",year:2021},{name:"Design Is Funny",client:"Shader Studio",description:"Funny is the design work of Daniele Buffa.",src:"funny.jpg",year:2020}];var g=s(3754),j=s.n(g);function y(e){let{projects:t,reversed:s}=e,i=(0,d.useRef)(null),r=(0,d.useRef)(null),n=null,l=s?100:0,o=s?100:0,x=e=>{let{clientX:t}=e;l=t/window.innerWidth*100,n||(n=window.requestAnimationFrame(m))},m=()=>{let e=l-o;o+=.15*e;let t=66.66-.33*o,s=33.33+.33*o;console.log(s),i.current.style.width="".concat(t,"%"),r.current.style.width="".concat(s,"%"),Math.round(l)==Math.round(o)?(window.cancelAnimationFrame(n),n=null):window.requestAnimationFrame(m)};return(0,a.jsxs)("div",{onMouseMove:e=>{x(e)},className:j().double,children:[(0,a.jsxs)("div",{ref:i,className:j().imageContainer,children:[(0,a.jsx)("div",{className:j().stretchyWrapper,children:(0,a.jsx)(c(),{src:"/images/".concat(t[0].src),fill:!0,alt:"image"})}),(0,a.jsxs)("div",{className:j().body,children:[(0,a.jsx)("h3",{children:t[0].name}),(0,a.jsx)("p",{children:t[0].description}),(0,a.jsx)("p",{children:t[0].year})]})]}),(0,a.jsxs)("div",{ref:r,className:j().imageContainer,children:[(0,a.jsx)("div",{className:j().stretchyWrapper,children:(0,a.jsx)(c(),{src:"/images/".concat(t[1].src),fill:!0,alt:"image"})}),(0,a.jsxs)("div",{className:j().body,children:[(0,a.jsx)("h3",{children:t[1].name}),(0,a.jsx)("p",{children:t[1].description}),(0,a.jsx)("p",{children:t[1].year})]})]})]})}var f=s(9201),v=s(6684),b=s(3438),k=s(7694),N=s(9534),C=s(2555),_=s(4828),S=s(7356);function E(){let{isOpen:e,onOpen:t,onOpenChange:s}=(0,f.q)(),[i,r]=d.useState("auto");return(0,a.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,a.jsx)(v.A,{onPress:t,className:"max-w-fit",children:"Open Modal"}),(0,a.jsx)(b.X,{label:"Select modal placement",orientation:"horizontal",value:i,onValueChange:r}),(0,a.jsx)(k.R,{isOpen:e,placement:i,onOpenChange:s,children:(0,a.jsx)(N.A,{children:e=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(C.k,{className:"flex flex-col gap-1",children:"Modal Title"}),(0,a.jsxs)(_.I,{children:[(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."}),(0,a.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam."})]}),(0,a.jsxs)(S.R,{children:[(0,a.jsx)(v.A,{color:"danger",variant:"light",onClick:e,children:"Close"}),(0,a.jsx)(v.A,{color:"primary",onPress:e,children:"Action"})]})]})})})]})}let W={offscreen:{y:100,opacity:0},onscreen:{y:0,opacity:1,transition:{type:"FadeUp",bounce:.4,duration:1}}},P=[.6,-.05,.01,.99],F={animate:{transition:{staggerChildren:.05}}},I={initial:{y:60,opacity:0,transition:{duration:.6,ease:P}},animate:{y:0,opacity:1,transition:{duration:.6,ease:P}}},L=[{image:"https://blenderartists.org/uploads/default/original/4X/5/4/f/54f2cbb9c456be76911967e686ca5898ac6a065d.jpeg",caption:"<div>\n        San Francisco<br/><span>Next line</span>\n      </div>"},{image:"https://cdn.artstation.com/p/thumbnails/001/142/295/thumb.jpg",caption:"<div>San Francisco</div>"},{image:"https://t3.ftcdn.net/jpg/05/34/83/84/360_F_534838467_DTE9QWKuWpXXgJMxzcfh6WVfimYWcNdO.jpg",caption:"<div>San Francisco</div>"},{image:"https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902891_1280.jpg",caption:"<div>San Francisco</div>"},{image:"https://cdn.pixabay.com/photo/2023/04/06/05/33/cute-boy-cartoon-7902892_1280.jpg",caption:"<div>San Francisco</div>"},{image:"https://img.freepik.com/premium-psd/psd-cartoon-character-3d-render-illustration_493627-96.jpg?w=2000",caption:"Darjeeling"}],M={fontSize:"2em",fontWeight:"bold"};var T=e=>(0,a.jsxs)(i.E.div,{initial:"initial",animate:"animate",exit:{opacity:0},children:[(0,a.jsx)(p,{}),(0,a.jsx)("div",{className:"fullscreen",children:(0,a.jsxs)("div",{className:"product  flex-col md:flex-row border py-9",children:[(0,a.jsx)(m,{animate:{x:0,opacity:1},initial:{x:200,opacity:0},exit:{opacity:0},transition:{delay:.2},data:L,time:3e3,captionStyle:M,radius:"10px",slideNumber:!1,captionPosition:"bottom",automatic:!1,dots:!1,pauseIconColor:"white",pauseIconSize:"40px",slideImageFit:"cover",thumbnails:!0,thumbnailWidth:"100px",showNavBtn:!0}),(0,a.jsx)("div",{className:"product-details",children:(0,a.jsxs)(i.E.div,{variants:F,className:"inner w-full pl-5 pr-2",children:[(0,a.jsx)(n(),{href:"../products"}),(0,a.jsx)(i.E.div,{variants:I,children:(0,a.jsx)("span",{className:"category",children:"Humming Probe UX200"})}),(0,a.jsx)(i.E.h1,{variants:I,children:"UX200｜酸鹼趨勢檢測儀"}),(0,a.jsxs)(i.E.p,{variants:I,children:["・pH chart 曲線圖",(0,a.jsx)("br",{}),"・7.0”彩色觸控屏幕",(0,a.jsx)("br",{}),"・演算法自動終點判斷",(0,a.jsx)("br",{}),"・防水防塵等級"]}),(0,a.jsxs)(i.E.div,{variants:I,className:"additonals",children:[(0,a.jsx)("span",{children:"Soy Free"}),(0,a.jsx)("span",{children:"Gluten Free"})]}),(0,a.jsxs)(i.E.div,{variants:I,className:"qty-price",children:[(0,a.jsxs)("div",{className:"qty",children:[(0,a.jsx)("div",{className:"minus",children:"-"}),(0,a.jsx)("div",{className:"amount",children:"1"}),(0,a.jsx)("div",{className:"add",children:"+"})]}),(0,a.jsx)("span",{className:"price"})]}),(0,a.jsx)(i.E.div,{variants:I,className:"btn-row",children:(0,a.jsx)(E,{})})]})}),(0,a.jsx)("div",{})]})}),(0,a.jsx)("section",{className:"w-full section-about border border-b-orange-700 ",children:(0,a.jsx)("div",{class:"Container items-center flex justify-center w-full pt-10",children:(0,a.jsx)("div",{className:"wrap flex flex-col justify-center items-center w-3/4",children:(0,a.jsx)(i.E.div,{className:"card",initial:"offscreen",whileInView:"onscreen",viewport:{once:!0,amount:.5},transition:{staggerChildren:.3},children:(0,a.jsx)(i.E.h2,{className:"text-center mb-4 text-3xl font-extrabold  tracking-tight text-gray-900 md:text-4xl lg:text-5xl lg:leading-loose  dark:text-white",variants:W,children:" 關於胃幽門螺旋桿菌"})})})})}),(0,a.jsx)("section",{className:"w-full section-about border border-b-orange-700 ",children:(0,a.jsx)("div",{class:"Container items-center flex justify-center w-full pt-10",children:(0,a.jsx)("div",{className:"wrap flex flex-col justify-center items-center w-4/5 md:w-3/5",children:(0,a.jsx)("div",{className:"relative flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"450",children:(0,a.jsxs)("div",{className:"section-title flex flex-col w-full py-10 justify-center items-center",children:[(0,a.jsx)("h3",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center",children:"什麼是胃幽門螺旋桿菌"}),(0,a.jsx)("p",{className:"mb-6 text-m font-normal text-gray-800 lg:text-normal  text-left md:text-center   dark:text-gray-400",children:"感染幽門螺旋桿菌後，不同個體的反應會有所不同：某些個體可能不會出現明顯的症狀，即使他們已被幽門螺旋桿菌感染。另一些個體可能會因感染導致胃酸過量，進而引發幽門部胃炎和十二指腸潰瘍等併發症。另一類個體感染幽門螺旋桿菌後，可能進展為慢性胃炎，此狀況更增加罹患胃癌的風險。"})]})})})})}),(0,a.jsx)("section",{className:"w-full section-global border border-b-orange-700 ",children:(0,a.jsx)("div",{class:"Container items-center flex justify-center w-full pt-10",children:(0,a.jsx)("div",{className:"wrap flex flex-col justify-center items-center w-4/5 md:w-3/5",children:(0,a.jsx)("div",{className:"relative flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"450",children:(0,a.jsxs)("div",{className:"section-title flex flex-col w-full py-10 justify-center items-center",children:[(0,a.jsx)("h3",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center",children:"全球有幾乎一半的人感染胃幽門螺旋桿菌"}),(0,a.jsx)("p",{className:"mb-6 text-m font-normal text-gray-800 lg:text-normal text-left md:text-center   dark:text-gray-400",children:"胃幽門螺旋桿菌的感染方式主要通過飲食或口腔傳染。這種細菌可以存在於受感染者的唾液、口腔、嘔吐物或粪便中。它可以透過直接接觸、共用餐具、飲食中被污染的食物或水等途徑傳播。此外，感染者也可以通過接觸受感染者的嘔吐物或粪便而感染。"})]})})})})}),(0,a.jsx)("section",{className:"section-table",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"table-wrap border  mt-20",children:(0,a.jsxs)("div",{class:"w-4/5 mx-auto",children:[(0,a.jsx)("div",{className:"relative flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"450",children:(0,a.jsx)("div",{className:"section-title flex flex-col w-full py-10 justify-center items-center",children:(0,a.jsx)("h3",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center",children:"胃幽門螺旋桿菌感染的診斷方式比較"})})}),(0,a.jsx)("div",{class:"flex flex-col",children:(0,a.jsx)("div",{class:"overflow-x-auto shadow-md sm:rounded-lg",children:(0,a.jsx)("div",{class:"inline-block min-w-full align-middle",children:(0,a.jsx)("div",{class:"overflow-hidden ",children:(0,a.jsxs)("table",{class:"min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700",children:[(0,a.jsx)("thead",{class:"bg-gray-800 text-gray-100 dark:bg-gray-700",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{scope:"col",class:"p-4",children:(0,a.jsx)("div",{class:"flex items-center",children:(0,a.jsx)("label",{for:"checkbox-all",class:"sr-only",children:"checkbox"})})}),(0,a.jsx)("th",{scope:"col",rowSpan:2,class:"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400",children:"侵入式 / 非侵入式"}),(0,a.jsx)("th",{scope:"col",class:"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-100  uppercase dark:text-gray-400",children:"侵入式"}),(0,a.jsx)("th",{scope:"col",colSpan:4,class:"py-3 px-6 text-xs font-medium tracking-wider text-center text-gray-100  uppercase dark:text-gray-400",children:"非侵入式"})]})}),(0,a.jsxs)("tbody",{class:"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700",children:[(0,a.jsxs)("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[(0,a.jsx)("td",{class:"p-4 w-4",children:(0,a.jsx)("div",{class:"flex items-center",children:(0,a.jsx)("label",{for:"checkbox-table-1",class:"sr-only",children:"checkbox"})})}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:(0,a.jsx)(c(),{})}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:" "}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-right whitespace-nowrap"})]}),(0,a.jsxs)("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[(0,a.jsx)("td",{class:"p-4 w-4"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"檢測方法"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"內視鏡"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"糞便抗體檢測"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"血清檢測"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"13C 尿素呼吸法"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-right whitespace-nowrap",children:(0,a.jsx)("a",{href:"#",class:"text-blue-600 dark:text-blue-500 hover:underline",children:"快速尿素呼吸法-UBT"})})]}),(0,a.jsxs)("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[(0,a.jsx)("td",{class:"p-4 w-4",children:(0,a.jsx)("div",{class:"flex items-center",children:(0,a.jsx)("label",{for:"checkbox-table-2",class:"sr-only",children:"樣品型態"})})}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"樣品型態"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"胃部組織"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"糞便"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"血液"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"呼出氣體"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"呼出氣體"})]}),(0,a.jsxs)("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[(0,a.jsx)("td",{class:"p-4 w-4"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"檢測時間"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"1-2 hr"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"3-7 day"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"3-7 day"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"3-7 day"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"⌃ 1 hr "})]}),(0,a.jsxs)("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[(0,a.jsx)("td",{class:"p-4 w-4"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"費用/NT"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"高"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"低"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"低"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"中"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"中"})]}),(0,a.jsxs)("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[(0,a.jsx)("td",{class:"p-4 w-4"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"優缺點"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"不舒服"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"可評估治療前後的療效"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"不能評估治療前後的療效，只能判斷是否曾經感染過HP"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"可評估治療前後的療效"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"可評估治療前後的療效"})]}),(0,a.jsxs)("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",children:[(0,a.jsx)("td",{class:"p-4 w-4"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"準確度"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"高"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"低"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"低"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-500 whitespace-nowrap dark:text-white",children:"高"}),(0,a.jsx)("td",{class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white",children:"高"})]})]})]})})})})}),(0,a.jsxs)("p",{class:"mt-5",children:["This table component is part of a larger, open-source library of Tailwind CSS components. Learn more by going to the official ",(0,a.jsx)("a",{class:"text-blue-600 hover:underline",href:"#",target:"_blank",children:"Flowbite Documentation"}),"."]})]})})})}),(0,a.jsx)("section",{className:"w-full section-about border border-b-orange-700 ",children:(0,a.jsxs)("div",{class:"Container items-center flex flex-col ",children:[(0,a.jsx)("div",{className:"wrap flex flex-col justify-center items-center w-4/5 md:w-3/5",children:(0,a.jsx)("div",{className:"relative flex justify-center mb-8","data-aos":"fade-up","data-aos-delay":"450",children:(0,a.jsx)("div",{className:"section-title flex flex-col w-full py-10 justify-center items-center",children:(0,a.jsx)("h3",{className:"mb-4 text-3xl font-extrabold leading-none tracking-tight text-pink-600  lg:text-4xl dark:text-white text-center",children:"兩種版本的快速BUT檢測組滿足不同用戶需求"})})})}),(0,a.jsx)("main",{children:(0,a.jsx)("div",{className:u().gallery,children:(0,a.jsx)(y,{projects:[w[2],w[3]],reversed:!0})})})]})})]})},176:function(){},3754:function(e){e.exports={double:"two_double__bibe4",imageContainer:"two_imageContainer___uEKY",stretchyWrapper:"two_stretchyWrapper__wh1Mq",body:"two_body__UvOY8"}},8894:function(e){e.exports={main:"twoColumn_main__sqmVC"}}},function(e){e.O(0,[629,862,394,465,807,714,667,488,744],function(){return e(e.s=1502)}),_N_E=e.O()}]);