var E=Object.defineProperty;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var N=(r,t,i)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,b=(r,t)=>{for(var i in t||(t={}))I.call(t,i)&&N(r,i,t[i]);if(y)for(var i of y(t))R.call(t,i)&&N(r,i,t[i]);return r};import{r as v,f as _,j as e}from"./main-586.js";import{e as C,_ as s}from"./bi.612.0.js";import{B as k}from"./bi.313.731.js";import{a2 as z,z as B}from"./bi.960.440.js";import{b as D,r as $}from"./bi.778.765.js";import{T as f,t as F}from"./bi.453.737.js";import"./bi.175.9.js";function J({formID:r,keapConf:t,setKeapConf:i,step:x,setstep:w,isLoading:h,setIsLoading:u,setSnackbar:a,redirectLocation:T,isInfo:l}){const[c,L]=v.useState(!1),[o,p]=v.useState({clientId:"",clientSecret:""}),S=_(C),{keap:n}=F,d=m=>{const g=b({},t),j=b({},o);j[m.target.name]="",g[m.target.name]=m.target.value,p(j),i(g)},A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),$(t,i,u,a),w(2)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(f,{title:"Keap",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(f,{title:"Keap",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),e.jsx(z,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(z,{value:T||`${S.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),e.jsxs("small",{className:"d-blk mt-5",children:[s("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://keys.developer.keap.com/my-apps",target:"_blank",rel:"noreferrer",children:s("Get Keap client id and secret","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:t.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>D(t,i,p,L,u,a),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||h,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),h&&e.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>A(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),e.jsx(k,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
