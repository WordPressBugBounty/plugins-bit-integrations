var C=Object.defineProperty;var p=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var u=(s,e,t)=>e in s?C(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,f=(s,e)=>{for(var t in e||(e={}))I.call(e,t)&&u(s,t,e[t]);if(p)for(var t of p(e))N.call(e,t)&&u(s,t,e[t]);return s};import{u as L,o as q,r as d,j as i}from"./main-183.js";import"./bi.554.440.js";import{_ as a}from"./bi.430.0.js";import{S as w}from"./bi.337.13.js";import{S as E}from"./bi.104.939.js";import{I as A,s as D}from"./bi.159.3.js";import T from"./bi.357.206.js";import{h as P,i as U}from"./bi.242.776.js";import{S as z}from"./bi.304.777.js";import"./bi.929.9.js";import"./bi.12.11.js";import"./bi.860.14.js";import"./bi.58.712.js";import"./bi.170.714.js";import"./bi.251.688.js";import"./bi.136.689.js";function se({formFields:s,setFlow:e,flow:t,allIntegURL:x}){const g=L(),{formID:F}=q(),[c,o]=d.useState(!1),[r,b]=d.useState(1),[S,l]=d.useState({show:!1}),h=[{key:"1",label:a("Create List","bit-integrations")},{key:"2",label:a("Create Contact","bit-integrations")},{key:"3",label:a("Unsubscribe Contact","bit-integrations")}],k=[{key:"email",label:a("Email","bit-integrations"),required:!0},{key:"first_name",label:a("First Name","bit-integrations"),required:!1},{key:"last_name",label:a("Last Name","bit-integrations"),required:!1}],y=[{key:"name",label:a("Name","bit-integrations"),required:!0}],j=[{key:"email",label:a("Email","bit-integrations"),required:!0}],[n,m]=d.useState({name:"SendFox",type:"SendFox",listId:"",access_token:"",field_map:[{formField:"",sendFoxFormField:""}],field_map_list:[{formField:"",sendFoxListFormField:""}],field_map_unsubscribe:[{formField:"",sendFoxUnsubscribeFormField:""}],allActions:h,contactFields:k,unsubscribeFields:j,listFields:y,actions:{}}),v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),b(3)};return i.jsxs("div",{children:[i.jsx(w,{snack:S,setSnackbar:l}),i.jsx("div",{className:"txt-center mt-2",children:i.jsx(E,{step:3,active:r})}),i.jsx(T,{formID:F,sendFoxConf:n,setSendFoxConf:m,step:r,setstep:b,isLoading:c,setIsLoading:o,setSnackbar:l}),i.jsxs("div",{className:"btcd-stp-page",style:f({},r===2&&{width:900,height:"auto",overflow:"visible"}),children:[i.jsx(z,{formFields:s,handleInput:_=>P(_,n,m,o),sendFoxConf:n,setSendFoxConf:m,isLoading:c,setIsLoading:o,setSnackbar:l}),i.jsxs("button",{onClick:()=>v(),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:U(n),children:[a("Next","bit-integrations"),"  ",i.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),i.jsx(A,{step:r,saveConfig:()=>D({flow:t,setFlow:e,allIntegURL:x,navigate:g,conf:n,setIsLoading:o,setSnackbar:l}),isLoading:c,dataConf:n,setDataConf:m,formFields:s})]})}export{se as default};
