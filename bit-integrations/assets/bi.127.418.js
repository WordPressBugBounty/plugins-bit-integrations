var A=Object.defineProperty;var h=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var x=(r,i,a)=>i in r?A(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a,v=(r,i)=>{for(var a in i||(i={}))F.call(i,a)&&x(r,a,i[a]);if(h)for(var a of h(i))z.call(i,a)&&x(r,a,i[a]);return r};import{u as D,r as l,j as s}from"./main-615.js";import{_ as e,d as n}from"./bi.394.0.js";import"./bi.991.437.js";import{S as E}from"./bi.700.13.js";import{S as L}from"./bi.440.922.js";import{I as M,g as R}from"./bi.819.3.js";import T from"./bi.857.267.js";import{h as O,c as N}from"./bi.893.886.js";import{S as Z}from"./bi.257.887.js";import"./bi.179.9.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.681.699.js";function ie({formFields:r,setFlow:i,flow:a,allIntegURL:f}){const m=D(),[p,c]=l.useState(!1),[y,k]=l.useState({}),[o,q]=l.useState(1),[P,g]=l.useState({show:!1}),j=[{key:"name",label:e("Account name","bit-integrations"),required:!0},{key:"website",label:e("Account website","bit-integrations"),required:!1},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"size",label:e("Size","bit-integrations"),required:!1},{key:"email",label:e("Account email","bit-integrations"),required:!1},{key:"phone_number",label:e("Phone","bit-integrations"),required:!1},{key:"street",label:e("Street","bit-integrations"),required:!1},{key:"zip",label:e("Zip/Postal Code","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"region",label:e("State/Region","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],_=[{key:"firstname",label:e("First Name","bit-integrations"),required:!0},{key:"Prefix",label:e("Prefix","bit-integrations"),required:!1},{key:"middle",label:e("Middle Name","bit-integrations"),required:!1},{key:"lastname",label:e("Last Name","bit-integrations"),required:!1},{key:"email",label:e("Email Address","bit-integrations"),required:!0},{key:"suffix",label:e("Suffix","bit-integrations"),required:!1},{key:"phone_number",label:e("Phone Number","bit-integrations"),required:!1},{key:"role",label:e("Role","bit-integrations"),required:!1},{key:"organisation",label:e("Organisation","bit-integrations"),required:!1},{key:"street",label:e("Street","bit-integrations"),required:!1},{key:"zip",label:e("Zip/Postal Code","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"region",label:e("State/Region","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],C=[{key:"name",label:e("Opportunity name","bit-integrations"),required:!0},{key:"value",label:e("Value","bit-integrations"),required:!1},{key:"start_date",label:e("Start Date","bit-integrations"),required:!1},{key:"close_date",label:e("Close Date","bit-integrations"),required:!1}],[t,d]=l.useState({name:"Salesflare",type:"Salesflare",api_key:"",field_map:[{formField:"",salesflareFormField:""}],actionName:"",actionId:"",accountFields:j,contactFields:_,opportunitiyFields:C,actions:{}}),I=()=>{c(!0),R(a,i,f,t,m,"","",c).then(u=>{var S;u.success?(n.success((S=u.data)==null?void 0:S.msg),m(f)):n.error(u.data||u)})},w=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!N(t)){n.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="opportunities"){if(!t.selectedAccount){n.error(e("Please select an Account","bit-integrations"));return}if(!t.selectedPipeline){n.error(e("Please select a Pipeline","bit-integrations"));return}if(t.selectedPipeline&&!t.selectedStage){n.error(e("Please select a Stage","bit-integrations"));return}}t.field_map.length>0&&q(b)};return s.jsxs("div",{children:[s.jsx(E,{snack:P,setSnackbar:g}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(L,{step:3,active:o})}),s.jsx(T,{salesflareConf:t,setSalesflareConf:d,step:o,setStep:q,loading:y,setLoading:k,setSnackbar:g}),s.jsxs("div",{className:"btcd-stp-page",style:v({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(Z,{formFields:r,handleInput:b=>O(b,t,d),salesflareConf:t,setSalesflareConf:d,loading:y,setLoading:k,isLoading:p,setIsLoading:c,setSnackbar:g}),(t==null?void 0:t.actionName)&&s.jsxs("button",{onClick:()=>w(3),disabled:!N(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&s.jsx(M,{step:o,saveConfig:()=>I(),isLoading:p,dataConf:t,setDataConf:d,formFields:r})]})}export{ie as default};
