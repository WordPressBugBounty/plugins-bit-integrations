var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(t,e,s)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,l=(t,e)=>{for(var s in e||(e={}))f.call(e,s)&&g(t,s,e[s]);if(x)for(var s of x(e))w.call(e,s)&&g(t,s,e[s]);return t};import{r as j,j as i}from"./main-794.js";import{_ as r}from"./bi.828.0.js";import{z as A}from"./bi.266.440.js";import{b as I}from"./bi.103.949.js";import{T as h,t as S}from"./bi.510.749.js";import"./bi.685.9.js";function G({theEventsCalendarConf:t,setTheEventsCalendarConf:e,step:s,setStep:k,loading:n,setLoading:T,isInfo:u}){const[a,N]=j.useState(!1),[c,b]=j.useState({name:""}),{theEventsCalendar:o}=S,y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},L=m=>{const d=l({},t),p=l({},c);p[m.target.name]="",d[m.target.name]=m.target.value,b(p),e(d)};return i.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(o==null?void 0:o.youTubeLink)&&i.jsx(h,{title:"The Events Calendar",youTubeLink:o==null?void 0:o.youTubeLink}),(o==null?void 0:o.docLink)&&i.jsx(h,{title:"The Events Calendar",docLink:o==null?void 0:o.docLink}),i.jsx("div",{className:"mt-3",children:i.jsx("b",{children:r("Integration Name:","bit-integrations")})}),i.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:L,name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:u}),c.name&&i.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),i.jsx("br",{}),!u&&i.jsxs("div",{children:[i.jsxs("button",{onClick:()=>I(t,b,N,n,T),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:a||n.auth,children:[a?r("Connected ✔","bit-integrations"):r("Connect to The Events Calendar","bit-integrations"),n.auth&&i.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),i.jsx("br",{}),i.jsxs("button",{onClick:y,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!a,children:[r("Next","bit-integrations"),i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
