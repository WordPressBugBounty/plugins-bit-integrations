var A=Object.defineProperty;var j=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var y=(a,e,i)=>e in a?A(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,p=(a,e)=>{for(var i in e||(e={}))I.call(e,i)&&y(a,i,e[i]);if(j)for(var i of j(e))C.call(e,i)&&y(a,i,e[i]);return a};import{r as N,j as t}from"./main-252.js";import{B as E}from"./bi.122.707.js";import{_ as r}from"./bi.63.0.js";import{a1 as v,z as R}from"./bi.269.440.js";import{p as B}from"./bi.56.790.js";import{T as w,t as _}from"./bi.41.709.js";import"./bi.456.9.js";function G({formID:a,salesforceConf:e,setSalesforceConf:i,step:b,setStep:k,isLoading:u,setIsLoading:z,setSnackbar:l,redirectLocation:L,isInfo:s}){const[d,S]=N.useState(!1),[c,x]=N.useState({dataCenter:"",clientId:"",clientSecret:""}),{salesforce:n}=_,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),k(2)},o=m=>{const h=p({},e),g=p({},c);g[m.target.name]="",h[m.target.name]=m.target.value,x(g),i(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(w,{title:"Salesforce",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(w,{title:"Salesforce",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"wdt-200 d-in-b mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("br",{}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:s}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Homepage URL:","bit-integrations")})}),t.jsx(v,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:s}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(v,{value:L||`${window.location.href}/redirect`,className:"field-key-cpy w-6 ml-0",setSnackbar:l,readOnly:s}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:e.clientId,type:"text",placeholder:r("client ID...","bit-integrations"),disabled:s}),t.jsx("div",{style:{color:"red"},children:c.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:e.clientSecret,type:"text",placeholder:r("client Secret...","bit-integrations"),disabled:s}),t.jsx("div",{style:{color:"red"},children:c.clientSecret}),!s&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>B(e,i,x,S,z,l),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:d||u,children:[d?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),u&&t.jsx(R,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!d,children:[r("Next","bit-integrations"),t.jsx(E,{className:"ml-1 rev-icn"})]})]})]})}export{G as default};
