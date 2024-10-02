var F=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var _=(a,i,s)=>i in a?F(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,v=(a,i)=>{for(var s in i||(i={}))L.call(i,s)&&_(a,s,i[s]);if(x)for(var s of x(i))T.call(i,s)&&_(a,s,i[s]);return a};import{u as w,r,j as n}from"./main-650.js";import{_ as e,d as E,I as P,F as A,c as b}from"./bi.541.15.js";import{S as M}from"./bi.326.902.js";import z from"./bi.630.268.js";import{h as B,c as N}from"./bi.46.877.js";import{W as D}from"./bi.92.878.js";import"./bi.770.713.js";function V({formFields:a,setFlow:i,flow:s,allIntegURL:g}){const f=w(),[y,u]=r.useState(!1),[m,k]=r.useState({}),[l,q]=r.useState(1),[j,c]=r.useState({show:!1}),S=[{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"company",label:e("Company","bit-integrations"),required:!1},{key:"industry",label:e("Industry","bit-integrations"),required:!1},{key:"website",label:e("Website","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"linkedin_url",label:e("Linkedin URL","bit-integrations"),required:!1},{key:"tags",label:e("Tags","bit-integrations"),required:!1},{key:"title",label:e("Title","bit-integrations"),required:!1},{key:"address",label:e("Address","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"snipet1",label:e("snipet1","bit-integrations"),required:!1},{key:"snipet2",label:e("snipet2","bit-integrations"),required:!1},{key:"snipet3",label:e("snipet3","bit-integrations"),required:!1},{key:"snipet4",label:e("snipet4","bit-integrations"),required:!1},{key:"snippet1",label:e("snippet1","bit-integrations"),required:!1},{key:"snippet2",label:e("snippet2","bit-integrations"),required:!1},{key:"snippet3",label:e("snippet3","bit-integrations"),required:!1},{key:"snippet4",label:e("snippet4","bit-integrations"),required:!1},{key:"snippet5",label:e("snippet5","bit-integrations"),required:!1},{key:"snippet6",label:e("snippet6","bit-integrations"),required:!1},{key:"snippet7",label:e("snippet7","bit-integrations"),required:!1},{key:"snippet8",label:e("snippet8","bit-integrations"),required:!1},{key:"snippet9",label:e("snippet9","bit-integrations"),required:!1},{key:"snippet10",label:e("snippet10","bit-integrations"),required:!1},{key:"snippet11",label:e("snippet11","bit-integrations"),required:!1},{key:"snippet12",label:e("snippet12","bit-integrations"),required:!1},{key:"snippet13",label:e("snippet13","bit-integrations"),required:!1},{key:"snippet14",label:e("snippet14","bit-integrations"),required:!1},{key:"snippet15",label:e("snippet15","bit-integrations"),required:!1}],C=[{key:"name",label:e("Company Name","bit-integrations"),required:!0}],[t,o]=r.useState({name:"Woodpecker",type:"Woodpecker",api_key:"",field_map:[{formField:"",woodpeckerFormField:""}],actionName:"",actionId:"",prospectsFields:S,companyFields:C,actions:{}}),I=()=>{u(!0),A(s,i,g,t,f,"","",u).then(d=>{var h;d.success?(b.success((h=d.data)==null?void 0:h.msg),f(g)):b.error(d.data||d)})},W=p=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(t)){b.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="adding_prospects_to_the_campaign"&&!t.selectedCampaign){b.error(e("Please select a Campaign","bit-integrations"));return}t.field_map.length>0&&q(p)};return n.jsxs("div",{children:[n.jsx(E,{snack:j,setSnackbar:c}),n.jsx("div",{className:"txt-center mt-2",children:n.jsx(M,{step:3,active:l})}),n.jsx(z,{woodpeckerConf:t,setWoodpeckerConf:o,step:l,setStep:q,loading:m,setLoading:k,setSnackbar:c}),n.jsxs("div",{className:"btcd-stp-page",style:v({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[n.jsx(D,{formFields:a,handleInput:p=>B(p,t,o),woodpeckerConf:t,setWoodpeckerConf:o,loading:m,setLoading:k,isLoading:y,setIsLoading:u,setSnackbar:c}),(t==null?void 0:t.actionName)&&n.jsxs("button",{onClick:()=>W(3),disabled:!N(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&n.jsx(P,{step:l,saveConfig:()=>I(),isLoading:y,dataConf:t,setDataConf:o,formFields:a})]})}export{V as default};
