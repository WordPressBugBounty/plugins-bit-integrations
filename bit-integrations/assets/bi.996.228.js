var T=Object.defineProperty;var g=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(n,e,i)=>e in n?T(n,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[e]=i,m=(n,e)=>{for(var i in e||(e={}))L.call(e,i)&&j(n,i,e[i]);if(g)for(var i of g(e))_.call(e,i)&&j(n,i,e[i]);return n};import{r as N,f,j as t}from"./main-425.js";import{e as E,_ as a}from"./bi.107.0.js";import{a1 as P,z as R}from"./bi.900.437.js";import{a as D,g as F}from"./bi.317.813.js";import{T as y,t as $}from"./bi.775.701.js";import"./bi.814.9.js";function J({flowID:n,pCloudConf:e,setPCloudConf:i,step:b,setStep:k,isLoading:h,setIsLoading:v,setSnackbar:I,redirectLocation:S,isInfo:r}){const[l,w]=N.useState(!1),[c,x]=N.useState({clientId:"",clientSecret:""}),z=f(E),{pCloud:s}=$,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),F(e,i,"fetch"),k(2)},o=d=>{const p=m({},e),u=m({},c);u[d.target.name]="",p[d.target.name]=d.target.value,x(u),i(p)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(y,{title:"pCloud",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(y,{title:"pCloud",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(P,{value:S||`${z.api.base}/redirect`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:I}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To Get Client Id & Secret, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://docs.pcloud.com/my_apps/",target:"_blank",rel:"noreferrer",children:a("pCloud API apps","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("PCloud Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientId",value:e.clientId,type:"text",placeholder:a("client ID...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:c.clientId}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("PCloud Client Secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:o,name:"clientSecret",value:e.clientSecret,type:"text",placeholder:a("client Secret...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:c.clientSecret}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>D(e,i,w,v,x),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||h,children:[l?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),h&&t.jsx(R,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{J as default};
