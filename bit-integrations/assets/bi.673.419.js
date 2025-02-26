var F=Object.defineProperty;var h=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(r,i,a)=>i in r?F(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a,x=(r,i)=>{for(var a in i||(i={}))I.call(i,a)&&N(r,a,i[a]);if(h)for(var a of h(i))L.call(i,a)&&N(r,a,i[a]);return r};import{u as O,r as n,j as s}from"./main-586.js";import{_ as e,d as l}from"./bi.612.0.js";import"./bi.960.440.js";import{S as T}from"./bi.733.13.js";import{S as w}from"./bi.692.945.js";import{I as E,i as D}from"./bi.993.3.js";import H from"./bi.771.267.js";import{h as R,c as C}from"./bi.541.905.js";import{O as z}from"./bi.881.906.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.453.737.js";function ie({formFields:r,setFlow:i,flow:a,allIntegURL:g}){const y=O(),[f,u]=n.useState(!1),[p,k]=n.useState({}),[o,q]=n.useState(1),[S,c]=n.useState({show:!1}),v=[{key:"customer_name",label:e("Full Name","bit-integrations"),required:!0},{key:"mobile_no",label:e("Mobile Number","bit-integrations"),required:!1},{key:"email_id",label:e("Email Address","bit-integrations"),required:!1},{key:"primary_address",label:e("Primary Address","bit-integrations"),required:!1},{key:"customer_primary_contact",label:e("customer Primary Contact","bit-integrations"),required:!1},{key:"customer_primary_address",label:e("customer Primary Address","bit-integrations"),required:!1}],j=[{key:"first_name",label:e("First Name","bit-integrations"),required:!0},{key:"middle_name",label:e("Middle Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!1},{key:"email_id",label:e("Email Address","bit-integrations"),required:!1},{key:"designation",label:e("Designation","bit-integrations"),required:!1},{key:"phone",label:e("Phone Number","bit-integrations"),required:!1},{key:"mobile_no",label:e("Mobile Number","bit-integrations"),required:!1},{key:"gender",label:e("Gender","bit-integrations"),required:!1},{key:"department",label:e("Department","bit-integrations"),required:!1},{key:"company_name",label:e("Company Name","bit-integrations"),required:!1}],P=[{key:"lead_name",label:e("Person Name","bit-integrations"),required:!0},{key:"company_name",label:e("Organization Name","bit-integrations"),required:!0},{key:"email_id",label:e("Email Address","bit-integrations"),required:!1},{key:"title",label:e("Title","bit-integrations"),required:!1},{key:"phone",label:e("Phone Number","bit-integrations"),required:!1},{key:"mobile_no",label:e("Mobile Number","bit-integrations"),required:!1},{key:"fax",label:e("Fax","bit-integrations"),required:!1},{key:"designation",label:e("Designation","bit-integrations"),required:!1},{key:"gender",label:e("Gender","bit-integrations"),required:!1},{key:"campaign_name",label:e("Campaign Name","bit-integrations"),required:!1},{key:"website",label:e("Website","bit-integrations"),required:!1},{key:"notes",label:e("Notes","bit-integrations"),required:!1},{key:"address_title",label:e("Address Title","bit-integrations"),required:!1},{key:"address_line1",label:e("Address Line 1","bit-integrations"),required:!1},{key:"address_line2",label:e("Address Line 2","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"county",label:e("County","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"pincode",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1}],[t,d]=n.useState({name:"OneHashCRM",type:"OneHashCRM",api_key:"",api_secret:"",domain:"",field_map:[{formField:"",oneHashCRMFormField:""}],actionName:"",actionId:"",customerFields:v,contactFields:j,leadFields:P,actions:{}}),M=()=>{u(!0),D(a,i,g,t,y,"","",u).then(m=>{var _;m.success?(l.success((_=m.data)==null?void 0:_.msg),y(g)):l.error(m.data||m)})},A=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!C(t)){l.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="customer"&&!t.selectedCustomerType){l.error(e("Please select Customer Type","bit-integrations"));return}if(t.actionName==="lead"&&!t.selectedLeadStatus){l.error(e("Please select Lead Status","bit-integrations"));return}t.field_map.length>0&&q(b)};return s.jsxs("div",{children:[s.jsx(T,{snack:S,setSnackbar:c}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(w,{step:3,active:o})}),s.jsx(H,{oneHashCRMConf:t,setOneHashCRMConf:d,step:o,setStep:q,loading:p,setLoading:k,setSnackbar:c}),s.jsxs("div",{className:"btcd-stp-page",style:x({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(z,{formFields:r,handleInput:b=>R(b,t,d),oneHashCRMConf:t,setOneHashCRMConf:d,loading:p,setLoading:k,isLoading:f,setIsLoading:u,setSnackbar:c}),(t==null?void 0:t.actionName)&&s.jsxs("button",{onClick:()=>A(3),disabled:!C(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&s.jsx(E,{step:o,saveConfig:()=>M(),isLoading:f,dataConf:t,setDataConf:d,formFields:r})]})}export{ie as default};
