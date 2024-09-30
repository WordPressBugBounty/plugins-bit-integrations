var K=Object.defineProperty;var k=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var w=(r,t,s)=>t in r?K(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s,x=(r,t)=>{for(var s in t||(t={}))P.call(t,s)&&w(r,s,t[s]);if(k)for(var s of k(t))_.call(t,s)&&w(r,s,t[s]);return r};import{r as u,j as e,u as C,l as I}from"./main-692.js";import{_ as a,n as T,z as V,d as D,a0 as B,I as E,s as f}from"./bi.751.13.js";import{S as z}from"./bi.579.899.js";import{T as S,t as F}from"./bi.719.710.js";function U({formID:r,customApiConf:t,setCustomApiConf:s,step:b,setStep:j,isLoading:m,setIsLoading:v,setSnackbar:y,redirectLocation:o,isInfo:l}){u.useState(!1);const{customApi:i}=F,p=[{label:a("API Key","bit-integrations"),value:"apikey"},{label:a("Bearer Token","bit-integrations"),value:"bearer"},{label:a("Basic Auth","bit-integrations"),value:"basic"}],c=[{label:a("Header","bit-integrations"),value:"header"},{label:a("Query String","bit-integrations"),value:"query"}],n=d=>{const h=x({},t);h[d.target.name]=d.target.value,s(h)},g=(d,h)=>{const N=V(t);d?N[h]=d:delete N[h],s(x({},N))};function L(d){switch(d){case"apikey":return!t.key||!t.value||!t.apiKeyAddTo;case"bearer":return!t.key||!t.token;case"basic":return!t.username||!t.password;default:return!0}}return e.jsxs("div",{className:"btcd-stp-page",style:{width:b===1&&900,height:b===1&&"1000px"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(S,{title:"Custom Api",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(S,{title:"Custom Api",docLink:i==null?void 0:i.docLink}),e.jsxs("div",{className:"d-flx",children:[e.jsx("div",{className:"wdt-200 d-in-b mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l})]}),e.jsx("br",{}),e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{className:"wdt-200 d-in-b mt-3",children:a("Select Auth Protocol:","bit-integrations")}),e.jsx(T,{defaultValue:t.authType,className:"btcd-paper-drpdwn w-5",singleSelect:!0,options:p,onChange:d=>g(d,"authType")})]}),t.authType==="apikey"&&e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"key",value:t.key,type:"text",placeholder:a("Key","bit-integrations"),disabled:l})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Value:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"value",value:t.value,type:"text",placeholder:a("Value","bit-integrations"),disabled:l})]}),e.jsx("b",{className:"wdt-200 d-in-b mt-3",children:a("Add to:","bit-integrations")}),e.jsx(T,{defaultValue:t.apiKeyAddTo,className:"btcd-paper-drpdwn w-5 mt-2",singleSelect:!0,options:c,onChange:d=>g(d,"apiKeyAddTo")})]}),t.authType==="bearer"&&e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"key",value:t.key,type:"text",placeholder:a("Key","bit-integrations"),disabled:l})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Token:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"token",value:t.token,type:"text",placeholder:a("Token","bit-integrations"),disabled:l})]})]}),t.authType==="basic"&&e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-2",onChange:n,name:"key",value:t.key,type:"text",placeholder:a("Key","bit-integrations"),disabled:l})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("User Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"username",value:t.username,type:"text",placeholder:a("User Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Password:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:n,name:"password",value:t.password,type:"text",placeholder:a("Password...","bit-integrations"),disabled:l})]}),e.jsx("br",{}),e.jsx("div",{style:x({},b===1&&{width:900,height:"auto",overflow:"visible"}),children:e.jsxs("button",{onClick:()=>j(2),disabled:L(t.authType)||m,className:"btn btcd-btn-lg purple sh-sm ",type:"button",children:[a("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})})]})}function G({formFields:r,setFlow:t,flow:s,allIntegURL:b}){const j=C(),{formID:m}=I(),[v,y]=u.useState(!1),[o,l]=u.useState(1),[i,p]=u.useState({show:!1}),[c,n]=u.useState({name:"CustomApi",type:"CustomApi",url:"",field_map:[{formField:"",customApiFormField:""}],actions:{}}),g=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),l(3)};return e.jsxs("div",{children:[e.jsx(D,{snack:i,setSnackbar:p}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(z,{step:3,active:o})}),e.jsx(U,{formID:m,customApiConf:c,setCustomApiConf:n,step:o,setStep:l,isLoading:v,setIsLoading:y,setSnackbar:p}),e.jsxs("div",{className:"btcd-stp-page",style:x({},o===2&&{width:900,height:"1000px",overflow:"visible"}),children:[e.jsx(B,{formID:m,formFields:r,customApiConf:c,setCustomApiConf:n,create:!0,step:!0,setStep:!0}),e.jsxs("button",{onClick:()=>g(),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",children:[a("Next","bit-integrations")," ",e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(E,{step:o,saveConfig:()=>f({flow:s,setFlow:t,allIntegURL:b,navigate:j,conf:c,setIsLoading:y,setSnackbar:p}),isLoading:v,dataConf:c,setDataConf:n,formFields:r})]})}export{G as default};
