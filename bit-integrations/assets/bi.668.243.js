var A=Object.defineProperty;var c=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,i,a)=>i in e?A(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,p=(e,i)=>{for(var a in i||(i={}))T.call(i,a)&&g(e,a,i[a]);if(c)for(var a of c(i))L.call(i,a)&&g(e,a,i[a]);return e};import{r as j,j as t}from"./main-920.js";import{_ as n}from"./bi.247.0.js";import{z}from"./bi.761.437.js";import{k as w}from"./bi.657.841.js";import{T as k,t as I}from"./bi.898.700.js";import"./bi.140.9.js";function B({capsulecrmConf:e,setCapsuleCRMConf:i,step:a,setStep:y,loading:o,setLoading:N,isInfo:r}){const[l,_]=j.useState(!1),[d,x]=j.useState({api_key:"",api_url:""}),{capsulecrm:s}=I,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,y(2)},b=m=>{const h=p({},e),u=p({},d);u[m.target.name]="",h[m.target.name]=m.target.value,x(u),i(h)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&t.jsx(k,{title:"Capsule CRM",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&t.jsx(k,{title:"Capsule CRM",docLink:s==null?void 0:s.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Your API URL:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_url",value:e.api_url,type:"text",placeholder:n("Your Organisation...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_url}),t.jsx("small",{className:"d-blk mt-3",children:n("Example: {name}.capsulecrm.com","bit-integrations")}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_key",value:e.api_key,type:"text",placeholder:n("API Token...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_key}),e.api_url&&t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:`https://${e.api_url}/preferences/tokens`,target:"_blank",rel:"noreferrer",children:n("CapsuleCRM API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>w(e,i,x,_,o,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||o.auth,children:[l?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),o.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{B as default};
