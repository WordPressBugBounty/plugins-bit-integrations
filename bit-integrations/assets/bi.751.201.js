var T=Object.defineProperty;var k=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(i,e,s)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,c=(i,e)=>{for(var s in e||(e={}))v.call(e,s)&&j(i,s,e[s]);if(k)for(var s of k(e))z.call(e,s)&&j(i,s,e[s]);return i};import{r as N,j as t}from"./main-579.js";import{B as _}from"./bi.367.697.js";import{_ as r,L as w}from"./bi.919.15.js";import{a as E,f as S}from"./bi.428.744.js";import{T as A,t as I}from"./bi.339.713.js";function q({formID:i,acumbamailConf:e,setAcumbamailConf:s,step:d,setstep:f,isLoading:h,setIsLoading:p,setSnackbar:B,redirectLocation:P,isInfo:o}){const{acumbamail:n}=I,[a,y]=N.useState(!1),[u,m]=N.useState({dataCenter:"",clientId:""}),L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),f(2),S(e,s,p)},b=l=>{const x=c({},e),g=c({},u);g[l.target.name]="",x[l.target.name]=l.target.value,m(g),s(x)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:d===1&&900,height:d===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(A,{title:"Acumbamail",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(A,{title:"Acumbamail",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:o}),t.jsxs("small",{className:"d-blk mt-3",children:[r("To Get Client Auth token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://acumbamail.com/en/apidoc/",target:"_blank",rel:"noreferrer",children:r("Acumbamail doc","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:r("Auth Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"auth_token",value:e.auth_token,type:"text",placeholder:r("Auth Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:u.auth_token}),!o&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>E(e,s,m,y,p),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:a||h,children:[a?r("Authorized ✔","bit-integrations"):r("Authorize","bit-integrations"),h&&t.jsx(w,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:L,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!a,children:[r("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]})]})}export{q as default};
