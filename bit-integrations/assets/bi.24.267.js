var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var g=(t,e,s)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,l=(t,e)=>{for(var s in e||(e={}))z.call(e,s)&&g(t,s,e[s]);if(x)for(var s of x(e))f.call(e,s)&&g(t,s,e[s]);return t};import{r as j,j as i}from"./main-80.js";import{_ as n,L as A}from"./bi.433.0.js";import{b as I}from"./bi.103.892.js";import{T as h,t as S}from"./bi.717.703.js";function D({theEventsCalendarConf:t,setTheEventsCalendarConf:e,step:s,setStep:k,loading:r,setLoading:T,isInfo:u}){const[a,L]=j.useState(!1),[c,b]=j.useState({name:""}),{theEventsCalendar:o}=S,N=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},y=m=>{const d=l({},t),p=l({},c);p[m.target.name]="",d[m.target.name]=m.target.value,b(p),e(d)};return i.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(o==null?void 0:o.youTubeLink)&&i.jsx(h,{title:"The Events Calendar",youTubeLink:o==null?void 0:o.youTubeLink}),(o==null?void 0:o.docLink)&&i.jsx(h,{title:"The Events Calendar",docLink:o==null?void 0:o.docLink}),i.jsx("div",{className:"mt-3",children:i.jsx("b",{children:n("Integration Name:","bit-integrations")})}),i.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:y,name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:u}),c.name&&i.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),i.jsx("br",{}),!u&&i.jsxs("div",{children:[i.jsxs("button",{onClick:()=>I(t,b,L,r,T),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:a||r.auth,children:[a?n("Connected ✔","bit-integrations"):n("Connect to The Events Calendar","bit-integrations"),r.auth&&i.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),i.jsx("br",{}),i.jsxs("button",{onClick:N,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!a,children:[n("Next","bit-integrations"),i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{D as default};
