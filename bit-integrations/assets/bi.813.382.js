var M=Object.defineProperty;var D=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(a,i,r)=>i in a?M(a,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[i]=r,c=(a,i)=>{for(var r in i||(i={}))F.call(i,r)&&k(a,r,i[r]);if(D)for(var r of D(i))B.call(i,r)&&k(a,r,i[r]);return a};import{u as x,r as n,j as s}from"./main-288.js";import"./bi.197.434.js";import{_ as e,d as l}from"./bi.4.0.js";import{S as j}from"./bi.470.13.js";import{S as H}from"./bi.982.916.js";import{I as v,g as Y}from"./bi.826.3.js";import U from"./bi.888.241.js";import{h as G,c as I,l as w}from"./bi.109.833.js";import{I as W}from"./bi.872.834.js";import"./bi.627.9.js";import"./bi.147.11.js";import"./bi.223.14.js";import"./bi.255.712.js";function le({formFields:a,setFlow:i,flow:r,allIntegURL:g}){const E=x(),[p,A]=n.useState(!1),[T,y]=n.useState({}),[o,f]=n.useState(1),[q,S]=n.useState({show:!1}),O=[{key:"ORGANISATION_NAME",label:e("Name","bit-integrations"),required:!0},{key:"PHONE",label:e("Phone","bit-integrations"),required:!1},{key:"PHONE_FAX",label:e("Fax","bit-integrations"),required:!1},{key:"WEBSITE",label:e("Website","bit-integrations"),required:!1},{key:"SOCIAL_FACEBOOK",label:e("Facebook","bit-integrations"),required:!1},{key:"SOCIAL_LINKEDIN",label:e("Linkedin","bit-integrations"),required:!1},{key:"SOCIAL_TWITTER",label:e("Twitter","bit-integrations"),required:!1},{key:"ADDRESS_BILLING_STREET",label:e("Address Billing Street","bit-integrations"),required:!1},{key:"ADDRESS_BILLING_CITY",label:e("Address Billing City","bit-integrations"),required:!1},{key:"ADDRESS_BILLING_STATE",label:e("Address Billing State","bit-integrations"),required:!1},{key:"ADDRESS_BILLING_COUNTRY",label:e("Address Billing Country","bit-integrations"),required:!1},{key:"ADDRESS_BILLING_POSTCODE",label:e("Address Billing Postcode","bit-integrations"),required:!1},{key:"ADDRESS_SHIP_STREET",label:e("Address Shipping Street","bit-integrations"),required:!1},{key:"ADDRESS_SHIP_STATE",label:e("Address Shipping State","bit-integrations"),required:!1},{key:"ADDRESS_SHIP_POSTCODE",label:e("Address Shipping Postcode","bit-integrations"),required:!1},{key:"ADDRESS_SHIP_COUNTRY",label:e("Address Shipping Country","bit-integrations"),required:!1}],N=[{key:"TITLE",label:e("Task Name","bit-integrations"),required:!0},{key:"DUE_DATE",label:e("Due Date","bit-integrations"),required:!1},{key:"COMPLETED_DATE_UTC",label:e("Completed Date","bit-integrations"),required:!1},{key:"DETAILS",label:e("Description","bit-integrations"),required:!1},{key:"PERCENT_COMPLETE",label:e("Progress ( % )","bit-integrations"),required:!1},{key:"START_DATE",label:e("Start Date","bit-integrations"),required:!1}],R=[{key:"FIRST_NAME",label:e("First Name","bit-integrations"),required:!1},{key:"LAST_NAME",label:e("Last Name","bit-integrations"),required:!0},{key:"TITLE",label:e("Title","bit-integrations"),required:!1},{key:"ORGANISATION_NAME",label:e("Organization","bit-integrations"),required:!1},{key:"LEAD_RATING",label:e("Lead Rating","bit-integrations"),required:!1},{key:"EMAIL",label:e("Email Address","bit-integrations"),required:!1},{key:"PHONE",label:e("Phone","bit-integrations"),required:!1},{key:"MOBILE",label:e("Mobile Phone","bit-integrations"),required:!1},{key:"FAX",label:e("Fax","bit-integrations"),required:!1},{key:"WEBSITE",label:e("Website","bit-integrations"),required:!1},{key:"INDUSTRY",label:e("Industry","bit-integrations"),required:!1},{key:"EMPLOYEE_COUNT",label:e("Number of Employees","bit-integrations"),required:!1},{key:"ADDRESS_STREET",label:e("Address Street","bit-integrations"),required:!1},{key:"ADDRESS_CITY",label:e("Address City","bit-integrations"),required:!1},{key:"ADDRESS_STATE",label:e("Address State","bit-integrations"),required:!1},{key:"ADDRESS_POSTCODE",label:e("Address Postcode","bit-integrations"),required:!1},{key:"ADDRESS_COUNTRY",label:e("Address Country","bit-integrations"),required:!1},{key:"LEAD_DESCRIPTION",label:e("Description","bit-integrations"),required:!1}],m=[{key:"FIRST_NAME",label:e("First Name","bit-integrations"),required:!0},{key:"EMAIL_ADDRESS",label:e("Email","bit-integrations"),required:!0},{key:"LAST_NAME",label:e("Last Name","bit-integrations"),required:!1},{key:"TITLE",label:e("Title","bit-integrations"),required:!1},{key:"PHONE",label:e("Phone","bit-integrations"),required:!1},{key:"PHONE_FAX",label:e("Fax","bit-integrations"),required:!1},{key:"DATE_OF_BIRTH",label:e("Date of Birth","bit-integrations"),required:!1},{key:"SOCIAL_FACEBOOK",label:e("Facebook","bit-integrations"),required:!1},{key:"SOCIAL_LINKEDIN",label:e("Linkedin","bit-integrations"),required:!1},{key:"SOCIAL_TWITTER",label:e("Twitter","bit-integrations"),required:!1},{key:"ADDRESS_MAIL_STREET",label:e("Address Mail Street","bit-integrations"),required:!1},{key:"ADDRESS_MAIL_CITY",label:e("Address Mail City","bit-integrations"),required:!1},{key:"ADDRESS_MAIL_STATE",label:e("Address Mail State","bit-integrations"),required:!1},{key:"ADDRESS_MAIL_COUNTRY",label:e("Address Mail Country","bit-integrations"),required:!1},{key:"ADDRESS_MAIL_POSTCODE",label:e("Address Mail Postcode","bit-integrations"),required:!1},{key:"ADDRESS_OTHER_STREET",label:e("Address Other Street","bit-integrations"),required:!1},{key:"ADDRESS_OTHER_STATE",label:e("Address Other State","bit-integrations"),required:!1},{key:"ADDRESS_OTHER_POSTCODE",label:e("Address Other Postcode","bit-integrations"),required:!1},{key:"ADDRESS_OTHER_COUNTRY",label:e("Address Other Country","bit-integrations"),required:!1}],L=[{key:"OPPORTUNITY_NAME",label:e("Opportunity Name","bit-integrations"),required:!0},{key:"OPPORTUNITY_DETAILS",label:e("Opportunity Details","bit-integrations"),required:!1},{key:"BID_AMOUNT",label:e("Bid Amount","bit-integrations"),required:!1},{key:"ACTUAL_CLOSE_DATE",label:e("Actual Close Date","bit-integrations"),required:!1},{key:"PROBABILITY",label:e("Probability Of Winning","bit-integrations"),required:!1},{key:"FORECAST_CLOSE_DATE",label:e("Forecast Close Date","bit-integrations"),required:!1}],C=[{key:"PROJECT_NAME",label:e("Project Name","bit-integrations"),required:!0},{key:"PROJECT_DETAILS",label:e("Description","bit-integrations"),required:!1}],[t,d]=n.useState({name:"Insightly",type:"Insightly",api_key:"",api_url:"",field_map:[{formField:"",insightlyFormField:""}],actionName:"",organisationFields:O,contactFields:m,taskFields:N,leadFields:R,opportunityFields:L,projectFields:C,actions:{}}),P=()=>{A(!0),Y(r,i,g,t,E,"","",A).then(u=>{var _;u.success?(l.success((_=u.data)==null?void 0:_.msg),E(g)):l.error(u.data||u)})},h=b=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!I(t)){l.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="opportunity"||t.actionName==="project"){if(!t.selectedCRMPipeline){l.error(e("Please select a pipeline","bit-integrations"));return}if(!t.selectedCRMPipelineStages){l.error(e("Please select a pipeline stage","bit-integrations"));return}}if(t.actionName==="lead"&&!w(t)){l.error(e("Please select Lead Status or Lead Source","bit-integrations"));return}t.field_map.length>0&&f(b)};return s.jsxs("div",{children:[s.jsx(j,{snack:q,setSnackbar:S}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(H,{step:3,active:o})}),s.jsx(U,{insightlyConf:t,setInsightlyConf:d,step:o,setStep:f,loading:T,setLoading:y,setSnackbar:S}),s.jsxs("div",{className:"btcd-stp-page",style:c({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(W,{formFields:a,handleInput:b=>G(b,t,d),insightlyConf:t,setInsightlyConf:d,loading:T,setLoading:y,setSnackbar:S}),(t==null?void 0:t.actionName)&&s.jsxs("button",{onClick:()=>h(3),disabled:!I(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&s.jsx(v,{step:o,saveConfig:()=>P(),isLoading:p,dataConf:t,setDataConf:d,formFields:a})]})}export{le as default};
