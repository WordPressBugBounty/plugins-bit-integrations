var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var j=(n,e,s)=>e in n?L(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s,o=(n,e)=>{for(var s in e||(e={}))w.call(e,s)&&j(n,s,e[s]);if(g)for(var s of g(e))S.call(e,s)&&j(n,s,e[s]);return n};import{r as k,j as t}from"./main-80.js";import{B as _}from"./bi.29.687.js";import{_ as i,Y as E,L as I}from"./bi.433.0.js";import{c as C}from"./bi.308.737.js";import{T as N,t as B}from"./bi.717.703.js";function V({formID:n,sendFoxConf:e,setSendFoxConf:s,step:m,setstep:y,isLoading:d,setIsLoading:f,setSnackbar:T,redirectLocation:A,isInfo:r}){const[c,v]=k.useState(!1),[u,b]=k.useState({dataCenter:"",clientId:""}),{sendFox:a}=B,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},h=l=>{const p=o({},e),x=o({},u);x[l.target.name]="",p[l.target.name]=l.target.value,b(x),s(p)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:m===1&&900,height:m===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(N,{title:"SendFox",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(N,{title:"SendFox",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"name",value:e.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Authorized Redirect URIs:","bit-integrations")})}),t.jsx(E,{value:A||`${window.location.href}`,className:"field-key-cpy w-6 ml-0",readOnly:r,setSnackbar:T}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Access Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:h,name:"access_token",value:e.access_token,type:"text",placeholder:i("Access Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:u.access_token}),t.jsxs("small",{className:"d-blk mt-3",children:[i("To Get Client Auth token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://sendfox.com/account/oauth",target:"_blank",rel:"noreferrer",children:i("SendFox Access Token","bit-integrations")})]}),!r&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:()=>C(e,s,b,v,f),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||d,children:[c?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),d&&t.jsx(I,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:z,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[i("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]})]})}export{V as default};
