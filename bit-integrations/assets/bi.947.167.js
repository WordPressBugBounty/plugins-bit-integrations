var v=Object.defineProperty;var N=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var y=(l,e,i)=>e in l?v(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,m=(l,e)=>{for(var i in e||(e={}))f.call(e,i)&&y(l,i,e[i]);if(N)for(var i of N(e))I.call(e,i)&&y(l,i,e[i]);return l};import{r as k,f as O,j as t}from"./main-955.js";import{e as R,_ as s}from"./bi.223.0.js";import{$ as A,x as E}from"./bi.326.431.js";import{b as $,g as C}from"./bi.433.669.js";import{T as w,t as P}from"./bi.701.706.js";import"./bi.696.9.js";function q({flowID:l,oneDriveConf:e,setOneDriveConf:i,step:b,setStep:z,isLoading:p,setIsLoading:u,setSnackbar:x,redirectLocation:L,isInfo:r}){const[n,S]=k.useState(!1),[c,h]=k.useState({clientId:"",clientSecret:""}),T=O(R),{oneDrive:a}=P,_=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),C(l,e,i,u),z(2)},d=o=>{const g=m({},e),j=m({},c);j[o.target.name]="",g[o.target.name]=o.target.value,h(j),i(g)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(w,{title:"OneDrive",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(w,{title:"OneDrive",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),t.jsx(A,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:x}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(A,{value:L||`${T.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:x}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To Get Client Id & Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://portal.azure.com/#blade/Microsoft_AAD_RegisteredApps/ApplicationsListBlade",target:"_blank",rel:"noreferrer",children:s("Azure Portal","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("OneDrive Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:e.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:c.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("OneDrive Client Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:e.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:c.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>$(e,i,S,u,h),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:n||p,children:[n?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),p&&t.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:_,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!n,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{q as default};
