var E=Object.defineProperty;var y=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var N=(r,t,i)=>t in r?E(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,b=(r,t)=>{for(var i in t||(t={}))I.call(t,i)&&N(r,i,t[i]);if(y)for(var i of y(t))R.call(t,i)&&N(r,i,t[i]);return r};import{r as v,i as _,j as e}from"./main-80.js";import{j as C,_ as s,Y as w,L as k}from"./bi.433.0.js";import{B}from"./bi.29.687.js";import{b as D,r as $}from"./bi.355.721.js";import{T as z,t as F}from"./bi.717.703.js";function V({formID:r,keapConf:t,setKeapConf:i,step:x,setstep:T,isLoading:h,setIsLoading:u,setSnackbar:a,redirectLocation:L,isInfo:l}){const[c,f]=v.useState(!1),[d,p]=v.useState({clientId:"",clientSecret:""}),S=_(C),{keap:n}=F,o=m=>{const g=b({},t),j=b({},d);j[m.target.name]="",g[m.target.name]=m.target.value,p(j),i(g)},A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),$(t,i,u,a),T(2)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:x===1&&900,height:x===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(z,{title:"Keap",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(z,{title:"Keap",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Homepage URL:","bit-integrations")})}),e.jsx(w,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(w,{value:L||`${S.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:l,setSnackbar:a}),e.jsxs("small",{className:"d-blk mt-5",children:[s("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://keys.developer.keap.com/my-apps",target:"_blank",rel:"noreferrer",children:s("Get Keap client id and secret","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:t.clientId,type:"text",placeholder:s("client ID...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:s("client Secret...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.clientSecret}),!l&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>D(t,i,p,f,u,a),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||h,children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),h&&e.jsx(k,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:()=>A(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),e.jsx(B,{className:"ml-1 rev-icn"})]})]})]})}export{V as default};