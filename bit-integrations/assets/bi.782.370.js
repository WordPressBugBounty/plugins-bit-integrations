var K=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var w=(r,t,s)=>t in r?K(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,x=(r,t)=>{for(var s in t||(t={}))P.call(t,s)&&w(r,s,t[s]);if(k)for(var s of k(t))_.call(t,s)&&w(r,s,t[s]);return r};import{r as m,j as e,u as f,o as C}from"./main-288.js";import{u as T,x as I}from"./bi.197.434.js";import{_ as a}from"./bi.4.0.js";import{S as V}from"./bi.470.13.js";import{S as D}from"./bi.982.916.js";import{m as B,I as E,s as F}from"./bi.826.3.js";import{T as S,t as U}from"./bi.255.712.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";function q({formID:r,customApiConf:t,setCustomApiConf:s,step:o,setStep:j,isLoading:u,setIsLoading:v,setSnackbar:y,redirectLocation:b,isInfo:l}){m.useState(!1);const{customApi:i}=U,p=[{label:a("API Key","bit-integrations"),value:"apikey"},{label:a("Bearer Token","bit-integrations"),value:"bearer"},{label:a("Basic Auth","bit-integrations"),value:"basic"}],c=[{label:a("Header","bit-integrations"),value:"header"},{label:a("Query String","bit-integrations"),value:"query"}],n=d=>{const h=x({},t);h[d.target.name]=d.target.value,s(h)},g=(d,h)=>{const N=I(t);d?N[h]=d:delete N[h],s(x({},N))};function L(d){switch(d){case"apikey":return!t.key||!t.value||!t.apiKeyAddTo;case"bearer":return!t.key||!t.token;case"basic":return!t.username||!t.password;default:return!0}}return e.jsxs("div",{className:"btcd-stp-page",style:{width:o===1&&900,height:o===1&&"1000px"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(S,{title:"Custom Api",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(S,{title:"Custom Api",docLink:i==null?void 0:i.docLink}),e.jsxs("div",{className:"d-flx",children:[e.jsx("div",{className:"wdt-200 d-in-b mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l})]}),e.jsx("br",{}),e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{className:"wdt-200 d-in-b mt-3",children:a("Select Auth Protocol:","bit-integrations")}),e.jsx(T,{defaultValue:t.authType,className:"btcd-paper-drpdwn w-5",singleSelect:!0,options:p,onChange:d=>g(d,"authType")})]}),t.authType==="apikey"&&e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"key",value:t.key,type:"text",placeholder:a("Key","bit-integrations"),disabled:l})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Value:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"value",value:t.value,type:"text",placeholder:a("Value","bit-integrations"),disabled:l})]}),e.jsx("b",{className:"wdt-200 d-in-b mt-3",children:a("Add to:","bit-integrations")}),e.jsx(T,{defaultValue:t.apiKeyAddTo,className:"btcd-paper-drpdwn w-5 mt-2",singleSelect:!0,options:c,onChange:d=>g(d,"apiKeyAddTo")})]}),t.authType==="bearer"&&e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"key",value:t.key,type:"text",placeholder:a("Key","bit-integrations"),disabled:l})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Token:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"token",value:t.token,type:"text",placeholder:a("Token","bit-integrations"),disabled:l})]})]}),t.authType==="basic"&&e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"key",value:t.key,type:"text",placeholder:a("Key","bit-integrations"),disabled:l})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("User Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"username",value:t.username,type:"text",placeholder:a("User Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Password:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"password",value:t.password,type:"text",placeholder:a("Password...","bit-integrations"),disabled:l})]}),e.jsx("br",{}),e.jsx("div",{style:x({},o===1&&{width:900,height:"auto",overflow:"visible"}),children:e.jsxs("button",{onClick:()=>j(2),disabled:L(t.authType)||u,className:"btn btcd-btn-lg purple sh-sm ",type:"button",children:[a("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})})]})}function Z({formFields:r,setFlow:t,flow:s,allIntegURL:o}){const j=f(),{formID:u}=C(),[v,y]=m.useState(!1),[b,l]=m.useState(1),[i,p]=m.useState({show:!1}),[c,n]=m.useState({name:"CustomApi",type:"CustomApi",url:"",field_map:[{formField:"",customApiFormField:""}],actions:{}}),g=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),l(3)};return e.jsxs("div",{children:[e.jsx(V,{snack:i,setSnackbar:p}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(D,{step:3,active:b})}),e.jsx(q,{formID:u,customApiConf:c,setCustomApiConf:n,step:b,setStep:l,isLoading:v,setIsLoading:y,setSnackbar:p}),e.jsxs("div",{className:"btcd-stp-page",style:x({},b===2&&{width:900,height:"1000px",overflow:"visible"}),children:[e.jsx(B,{formID:u,formFields:r,customApiConf:c,setCustomApiConf:n,create:!0,step:!0,setStep:!0}),e.jsxs("button",{onClick:()=>g(),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",children:[a("Next","bit-integrations")," ",e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(E,{step:b,saveConfig:()=>F({flow:s,setFlow:t,allIntegURL:o,navigate:j,conf:c,setIsLoading:y,setSnackbar:p}),isLoading:v,dataConf:c,setDataConf:n,formFields:r})]})}export{Z as default};
