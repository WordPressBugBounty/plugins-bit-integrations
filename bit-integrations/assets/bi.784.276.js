var L=Object.defineProperty;var p=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var j=(r,t,n)=>t in r?L(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,m=(r,t)=>{for(var n in t||(t={}))T.call(t,n)&&j(r,n,t[n]);if(p)for(var n of p(t))f.call(t,n)&&j(r,n,t[n]);return r};import{r as N,j as e}from"./main-270.js";import{B as S}from"./bi.448.736.js";import{_ as s}from"./bi.340.0.js";import{z as B}from"./bi.88.440.js";import{i as E}from"./bi.336.792.js";import{T as k,t as A}from"./bi.104.742.js";import"./bi.724.9.js";function J({formID:r,whatsAppConf:t,setWhatsAppConf:n,step:u,setstep:v,isLoading:b,setIsLoading:y,setSnackbar:I,redirectLocation:W,isInfo:a}){const[c,z]=N.useState(!1),[l,x]=N.useState({dataCenter:"",clientId:""}),{whatsApp:i}=A,D=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),v(2)},o=d=>{const g=m({},t),h=m({},l);h[d.target.name]="",g[d.target.name]=d.target.value,x(h),n(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(k,{title:"WhatsApp",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(k,{title:"WhatsApp",docLink:i==null?void 0:i.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Phone number ID:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"numberID",value:t.numberID,type:"text",placeholder:s("Number ID...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("WhatsApp Business Account ID:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"businessAccountID",value:t.businessAccountID,type:"text",placeholder:s("Business Account ID...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Access Token:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"token",value:t.token,type:"text",placeholder:s("Access Token...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.clientId}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>E(t,n,x,z,y,I),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||b,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),b&&e.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:D,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),e.jsx(S,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
