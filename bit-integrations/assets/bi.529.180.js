var I=Object.defineProperty;var N=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(r,t,i)=>t in r?I(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,u=(r,t)=>{for(var i in t||(t={}))L.call(t,i)&&y(r,i,t[i]);if(N)for(var i of N(t))S.call(t,i)&&y(r,i,t[i]);return r};import{r as v,j as e}from"./main-320.js";import{B as E}from"./bi.27.727.js";import{_ as n}from"./bi.576.0.js";import{a2 as k,z as C}from"./bi.795.440.js";import{e as R,r as M}from"./bi.21.715.js";import{T as w,t as _}from"./bi.382.733.js";import"./bi.155.9.js";function V({formID:r,mailChimpConf:t,setMailChimpConf:i,step:b,setstep:f,isLoading:x,setIsLoading:p,setSnackbar:l,redirectLocation:z,isInfo:a}){const[o,T]=v.useState(!1),[c,h]=v.useState({dataCenter:"",clientId:"",clientSecret:""}),{mailchimp:s}=_,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),f(2),M(i,p,l)},d=m=>{const g=u({},t),j=u({},c);j[m.target.name]="",g[m.target.name]=m.target.value,h(j),i(g)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&e.jsx(w,{title:"Mail chimp",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&e.jsx(w,{title:"Mail chimp",docLink:s==null?void 0:s.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:a}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Homepage URL:","bit-integrations")})}),e.jsx(k,{value:`${window.location.origin}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Authorized Redirect URIs:","bit-integrations")})}),e.jsx(k,{value:z||`${window.location.href}`,className:"field-key-cpy w-6 ml-0",readOnly:a,setSnackbar:l}),e.jsxs("small",{className:"d-blk mt-5",children:[n("To get Client ID and SECRET , Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:"https://us7.admin.mailchimp.com/account/oauth2/",target:"_blank",rel:"noreferrer",children:n("Mail Chimp API Console","bit-integrations")})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Client id:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientId",value:t.clientId,type:"text",placeholder:n("client ID...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.clientId}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Client secret:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"clientSecret",value:t.clientSecret,type:"text",placeholder:n("client Secret...","bit-integrations"),disabled:a}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.clientSecret}),!a&&e.jsxs(e.Fragment,{children:[e.jsxs("button",{onClick:()=>R("mailChimp","mChimp",t,i,h,T,p,l),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||x,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),x&&e.jsx(C,{size:20,clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:A,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),e.jsx(E,{className:"ml-1 rev-icn"})]})]})]})}export{V as default};
