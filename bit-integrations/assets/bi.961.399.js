var F=Object.defineProperty;var h=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var q=(a,i,s)=>i in a?F(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,x=(a,i)=>{for(var s in i||(i={}))C.call(i,s)&&q(a,s,i[s]);if(h)for(var s of h(i))D.call(i,s)&&q(a,s,i[s]);return a};import{u as E,r as n,j as r}from"./main-556.js";import{_ as e,d as u}from"./bi.562.0.js";import"./bi.838.440.js";import{S as P}from"./bi.686.13.js";import{S as A}from"./bi.229.963.js";import{I as T,g as B}from"./bi.308.3.js";import M from"./bi.374.256.js";import{s as z,h as G,c as S}from"./bi.259.901.js";import{L as H}from"./bi.548.902.js";import"./bi.657.9.js";import"./bi.510.11.js";import"./bi.244.14.js";import"./bi.448.755.js";function ie({formFields:a,setFlow:i,flow:s,allIntegURL:f}){const g=E(),[m,o]=n.useState(!1),[_,v]=n.useState({}),[l,y]=n.useState(1),[N,p]=n.useState({show:!1}),j=[{key:"name",label:"Name",required:!0}],L=[{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"mobile_phone",label:e("Mobile Phone","bit-integrations"),required:!1},{key:"home_phone",label:e("Home Phone","bit-integrations"),required:!1},{key:"office_phone",label:e("Office Phone","bit-integrations"),required:!1},{key:"fax",label:e("Fax","bit-integrations"),required:!1},{key:"company",label:e("Company","bit-integrations"),required:!1},{key:"birthday",label:e("Birthday","bit-integrations"),required:!1},{key:"anniversary",label:e("Anniversary","bit-integrations"),required:!1},{key:"spouse_name",label:e("Spouse Name","bit-integrations"),required:!1},{key:"spouse_email",label:e("Spouse Email","bit-integrations"),required:!1},{key:"spouse_phone",label:e("Spouse Phone","bit-integrations"),required:!1},{key:"spouse_birthday",label:e("Spouse Birthday","bit-integrations"),required:!1},{key:"type",label:e("Address type","bit-integrations"),required:!1},{key:"street_address_1",label:e("Street Address 1","bit-integrations"),required:!1},{key:"street_address_2",label:e("Street Address 2","bit-integrations"),required:!1},{key:"zip",label:e("Zip","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1}],[t,d]=n.useState({name:"LionDesk",type:"LionDesk",clientId:"",clientSecret:"",field_map:[{formField:"",lionDeskFormField:""}],actionName:"",actionId:"",campaignFields:j,contactFields:L,actions:{}});n.useEffect(()=>{window.opener&&z("lionDesk")},[]);const I=()=>{o(!0),B(s,i,f,t,g,"","",o).then(c=>{var k;c.success?(u.success((k=c.data)==null?void 0:k.msg),g(f)):u.error(c.data||c)})},w=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!S(t)){u.error(e("Please map mandatory fields","bit-integrations"));return}t.field_map.length>0&&y(b)};return r.jsxs("div",{children:[r.jsx(P,{snack:N,setSnackbar:p}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(A,{step:3,active:l})}),r.jsx(M,{lionDeskConf:t,setLionDeskConf:d,step:l,setStep:y,setSnackbar:p,isLoading:m,setIsLoading:o}),r.jsxs("div",{className:"btcd-stp-page",style:x({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(H,{formFields:a,handleInput:b=>G(b,t,d),lionDeskConf:t,setLionDeskConf:d,loading:_,setLoading:v,isLoading:m,setIsLoading:o,setSnackbar:p}),(t==null?void 0:t.actionName)&&r.jsxs("button",{onClick:()=>w(3),disabled:!S(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&r.jsx(T,{step:l,saveConfig:()=>I(),isLoading:m,dataConf:t,setDataConf:d,formFields:a})]})}export{ie as default};
