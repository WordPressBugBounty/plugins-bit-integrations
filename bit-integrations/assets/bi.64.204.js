var z=Object.defineProperty;var k=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var j=(i,e,s)=>e in i?z(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,c=(i,e)=>{for(var s in e||(e={}))L.call(e,s)&&j(i,s,e[s]);if(k)for(var s of k(e))v.call(e,s)&&j(i,s,e[s]);return i};import{r as N,j as t}from"./main-777.js";import{B as _}from"./bi.361.707.js";import{_ as r}from"./bi.157.0.js";import{z as w}from"./bi.463.440.js";import{a as E,f as S}from"./bi.765.768.js";import{T as A,t as I}from"./bi.805.709.js";import"./bi.681.9.js";function J({formID:i,acumbamailConf:e,setAcumbamailConf:s,step:d,setstep:f,isLoading:h,setIsLoading:m,setSnackbar:B,redirectLocation:P,isInfo:o}){const{acumbamail:n}=I,[a,y]=N.useState(!1),[p,u]=N.useState({dataCenter:"",clientId:""}),T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),f(2),S(e,s,m)},b=l=>{const x=c({},e),g=c({},p);g[l.target.name]="",x[l.target.name]=l.target.value,u(g),s(x)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(A,{title:"Acumbamail",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(A,{title:"Acumbamail",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:o}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get Client Auth token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://acumbamail.com/en/apidoc/",target:"_blank",rel:"noreferrer",children:r("Acumbamail doc","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Auth Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"auth_token",value:e.auth_token,type:"text",placeholder:r("Auth Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:p.auth_token}),!o&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>E(e,s,u,y,m),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:a||h,children:[a?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),h&&t.jsx(w,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!a,children:[r("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]})]})}export{J as default};
