var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var N=(r,e,i)=>e in r?I(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,h=(r,e)=>{for(var i in e||(e={}))L.call(e,i)&&N(r,i,e[i]);if(y)for(var i of y(e))T.call(e,i)&&N(r,i,e[i]);return r};import{r as v,j as t}from"./main-615.js";import{B as S}from"./bi.560.697.js";import{_ as s}from"./bi.394.0.js";import{a1 as E,y as B}from"./bi.991.437.js";import{d as C,f as R}from"./bi.817.804.js";import{T as k,t as U}from"./bi.681.699.js";import"./bi.179.9.js";function G({formID:r,mailupConf:e,setMailupConf:i,step:x,setStep:z,isLoading:b,setIsLoading:p,setSnackbar:l,redirectLocation:f,isInfo:a}){const[c,w]=v.useState(!1),[o,u]=v.useState({dataCenter:"",clientId:""}),{mailup:n}=U,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),z(2),R(e,i,p,l)},d=m=>{const g=h({},e),j=h({},o);j[m.target.name]="",g[m.target.name]=m.target.value,u(j),i(g)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"MailUp",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"MailUp",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:a}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(E,{value:f||`${window.location.href}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:e.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:e.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:a}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.clientSecret}),!a&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>C("mailup",e,i,u,w,p,l),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||b,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),b&&t.jsx(B,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),t.jsx(S,{className:"ml-1 rev-icn"})]})]})]})}export{G as default};
