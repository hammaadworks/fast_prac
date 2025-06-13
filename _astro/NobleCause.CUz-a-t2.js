import{j as a}from"./jsx-runtime.D_zvdyIk.js";import{R as f,r as o}from"./index.C7R7J_0t.js";import{A as $}from"./index.BabUyBxb.js";import{m as N}from"./proxy.9bkKzbbY.js";import{H as K}from"./heading-sparkle.DoQzxhe9.js";import"./utils.Bzm_o1ou.js";import"./proxy.CAIGcwyj.js";var C={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},S=f.createContext&&f.createContext(C),X=["attr","size","title"];function Q(e,n){if(e==null)return{};var t=U(e,n),r,l;if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(l=0;l<m.length;l++)r=m[l],!(n.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}function U(e,n){if(e==null)return{};var t={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function x(){return x=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},x.apply(this,arguments)}function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable})),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?k(Object(t),!0).forEach(function(r){J(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function J(e,n,t){return n=V(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function V(e){var n=Z(e,"string");return typeof n=="symbol"?n:n+""}function Z(e,n){if(typeof e!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var r=t.call(e,n);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}function I(e){return e&&e.map((n,t)=>f.createElement(n.tag,y({key:t},n.attr),I(n.child)))}function W(e){return n=>f.createElement(ee,x({attr:y({},e.attr)},n),I(e.child))}function ee(e){var n=t=>{var{attr:r,size:l,title:m}=e,v=Q(e,X),h=l||t.size||"1em",u;return t.className&&(u=t.className),e.className&&(u=(u?u+" ":"")+e.className),f.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,v,{className:u,style:y(y({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),m&&f.createElement("title",null,m),e.children)};return S!==void 0?f.createElement(S.Consumer,null,t=>n(t)):n(C)}function te(e){return W({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"},child:[]}]})(e)}function ne(e){return W({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function re(e){return e<=1024?60:e>=1456?Math.max(60,86+.06018*(e-1456)):60+26*((e-1024)/432)}const ae=({testimonials:e,autoplay:n=!0,colors:t={},fontSizes:r={}})=>{const l=t.name??"#000",m=t.designation??"#6b7280",v=t.testimony??"#4b5563",h=t.arrowBackground??"#141414",u=t.arrowForeground??"#f1f1f7",A=t.arrowHoverBackground??"#00a6fb",H=r.name??"1.5rem",B=r.designation??"0.925rem",M=r.quote??"1.125rem",[d,w]=o.useState(0),[q,P]=o.useState(!1),[D,z]=o.useState(!1),[R,G]=o.useState(1200),j=o.useRef(null),p=o.useRef(null),c=o.useMemo(()=>e.length,[e]),O=o.useMemo(()=>e[d],[d,e]);o.useEffect(()=>{function i(){j.current&&G(j.current.offsetWidth)}return i(),window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o.useEffect(()=>(n&&(p.current=setInterval(()=>{w(i=>(i+1)%c)},5e3)),()=>{p.current&&clearInterval(p.current)}),[n,c]),o.useEffect(()=>{const i=s=>{s.key==="ArrowLeft"&&E(),s.key==="ArrowRight"&&L()};return window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)},[d,c]);const L=o.useCallback(()=>{w(i=>(i+1)%c),p.current&&clearInterval(p.current)},[c]),E=o.useCallback(()=>{w(i=>(i-1+c)%c),p.current&&clearInterval(p.current)},[c]);function T(i){const s=re(R),g=s*.8,b=i===d,_=(d-1+c)%c===i,Y=(d+1)%c===i;return b?{zIndex:3,opacity:1,pointerEvents:"auto",transform:"translateX(0px) translateY(0px) scale(1) rotateY(0deg)",transition:"all 0.8s cubic-bezier(.4,2,.3,1)"}:_?{zIndex:2,opacity:1,pointerEvents:"auto",transform:`translateX(-${s}px) translateY(-${g}px) scale(0.85) rotateY(15deg)`,transition:"all 0.8s cubic-bezier(.4,2,.3,1)"}:Y?{zIndex:2,opacity:1,pointerEvents:"auto",transform:`translateX(${s}px) translateY(-${g}px) scale(0.85) rotateY(-15deg)`,transition:"all 0.8s cubic-bezier(.4,2,.3,1)"}:{zIndex:1,opacity:0,pointerEvents:"none",transition:"all 0.8s cubic-bezier(.4,2,.3,1)"}}const F={initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20}};return a.jsxs("div",{className:"testimonial-container",children:[a.jsxs("div",{className:"testimonial-grid",children:[a.jsx("div",{className:"image-container",ref:j,children:e.map((i,s)=>a.jsx("img",{src:i.src,alt:i.name,className:"testimonial-image","data-index":s,style:T(s)},i.src))}),a.jsxs("div",{className:"testimonial-content",children:[a.jsx($,{mode:"wait",children:a.jsxs(N.div,{variants:F,initial:"initial",animate:"animate",exit:"exit",transition:{duration:.3,ease:"easeInOut"},children:[a.jsx("h3",{className:"name",style:{color:l,fontSize:H},children:O.name}),a.jsx("p",{className:"designation",style:{color:m,fontSize:B},children:O.designation}),a.jsx(N.p,{className:"quote",style:{color:v,fontSize:M},children:O.quote.split(`
`).map((i,s)=>a.jsx("div",{style:{marginBottom:"1rem"},children:i.split(" ").map((g,b)=>a.jsxs(N.span,{initial:{filter:"blur(10px)",opacity:0,y:5},animate:{filter:"blur(0px)",opacity:1,y:0},transition:{duration:.22,ease:"easeInOut",delay:.025*b},style:{display:"inline-block"},children:[g," "]},`${s}-${b}`))},s))})]},d)}),a.jsxs("div",{className:"arrow-buttons",children:[a.jsx("button",{className:"arrow-button prev-button",onClick:E,style:{backgroundColor:q?A:h},onMouseEnter:()=>P(!0),onMouseLeave:()=>P(!1),"aria-label":"Previous testimonial",children:a.jsx(te,{size:28,color:u})}),a.jsx("button",{className:"arrow-button next-button",onClick:L,style:{backgroundColor:D?A:h},onMouseEnter:()=>z(!0),onMouseLeave:()=>z(!1),"aria-label":"Next testimonial",children:a.jsx(ne,{size:28,color:u})})]})]})]}),a.jsx("style",{children:`
        .testimonial-container {
          width: 100%;
          max-width: 56rem;
          padding: 2rem;
        }
        .testimonial-grid {
          display: grid;
          gap: 5rem;
        }
        .image-container {
          position: relative;
          width: 100%;
          height: 24rem;
          perspective: 1000px;
        }
        .testimonial-image {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 1.5rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .testimonial-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .name {
          font-weight: bold;
          margin-bottom: 0.25rem;
        }
        .designation {
          margin-bottom: 2rem;
        }
        .quote {
          line-height: 1.75;
        }
        .arrow-buttons {
          display: flex;
          gap: 1.5rem;
          padding-top: 3rem;
        }
        .arrow-button {
          width: 2.7rem;
          height: 2.7rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.3s;
          border: none;
        }
        .word {
          display: inline-block;
        }
        @media (min-width: 768px) {
          .testimonial-grid {
            grid-template-columns: 1fr 1fr;
          }
          .arrow-buttons {
            padding-top: 0;
          }
        }
      `})]})},ie=[{quote:"Alhamdulillah, the couple has decided to begin their journey together by encouraging loved ones to give in charity instead of bringing gifts. 🎁💖 Donations will support orphans at the Muslim Orphanage in Bangalore — a cause close to their hearts. May ALLAH SWT accept this noble intention and fill their marriage with barakah.",name:"The Muslim Orphanage",designation:"A call to sadaqah over gifts",src:"https://images.unsplash.com/photo-1521790367261-13e09d3d0250?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3"},{quote:`Donation Details:
🏢 Muslim Orphanage, Bangalore
🏦 Bank: HDFC Bank
🔢 A/C No: 50200012345678
🔁 IFSC: HDFC0000123
📱 UPI: muslimorphanage@hdfcbank
📞 Queries/Receipt: +91-9876543210
May this sadaqah become a source of happiness and success in this world and the next.`,name:"🤝 How to Contribute",designation:"Support the orphanage directly",src:"https://images.unsplash.com/photo-1549187774-b4e9b0445b06?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3"},{quote:"Jazakum Allahu Khayran for your kindness and support. 🌸 May ALLAH SWT reward you abundantly and grant the couple a life of sakoon, mercy, and love. All praise and thanks are due to ALLAH SWT alone. 🤲",name:"💐 Gratitude & Du'a",designation:"All praise is to ALLAH SWT",src:"https://images.unsplash.com/photo-1531986362435-16b427eb9c3b?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3"}];function pe(){return a.jsx("section",{className:"w-full bg-secondary py-16 md:py-24 px-4 sm:px-6 md:px-8",children:a.jsxs("div",{className:"mx-auto max-w-4xl text-center",children:[a.jsx(K,{heading:"Noble Charity",description:"A simple gesture, a lasting reward."}),a.jsx("div",{className:"bg-[#f7f7fa] p-20 rounded-lg min-h-[300px] flex flex-wrap gap-6 items-center justify-center relative",children:a.jsx("div",{className:"items-center justify-center relative flex",style:{maxWidth:"1456px"},children:a.jsx(ae,{testimonials:ie,autoplay:!1,colors:{name:"#0a0a0a",designation:"#454545",testimony:"#171717",arrowBackground:"#141414",arrowForeground:"#f1f1f7",arrowHoverBackground:"#00A6FB"},fontSizes:{name:"28px",designation:"20px",quote:"20px"}})})})]})})}export{pe as NobleCause};
