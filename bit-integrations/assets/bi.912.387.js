var L=Object.defineProperty;var h=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(r,i,a)=>i in r?L(r,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[i]=a,S=(r,i)=>{for(var a in i||(i={}))M.call(i,a)&&x(r,a,i[a]);if(h)for(var a of h(i))T.call(i,a)&&x(r,a,i[a]);return r};import{u as E,r as n,j as s}from"./main-404.js";import"./bi.613.437.js";import{_ as e,d as l}from"./bi.51.0.js";import{S as Z}from"./bi.896.13.js";import{S as D}from"./bi.53.923.js";import{I as R,i as A}from"./bi.488.3.js";import O from"./bi.476.245.js";import{h as B,c as _}from"./bi.613.844.js";import{Z as V}from"./bi.537.845.js";import"./bi.964.9.js";import"./bi.484.11.js";import"./bi.565.14.js";import"./bi.116.700.js";function ae({formFields:r,setFlow:i,flow:a,allIntegURL:f}){const g=E(),[C,k]=n.useState(!1),[y,m]=n.useState({}),[o,p]=n.useState(1),[N,c]=n.useState({show:!1}),v=[{key:"name",label:e("Name","bit-integrations"),required:!0},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"mobile",label:e("Mobile","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!1},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"line1",label:e("Street","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"fax",label:e("Fax","bit-integrations"),required:!1},{key:"facebook",label:e("Facebook","bit-integrations"),required:!1},{key:"skype",label:e("Skype","bit-integrations"),required:!1},{key:"linkedin",label:e("LinkedIn","bit-integrations"),required:!1},{key:"twitter",label:e("Twitter","bit-integrations"),required:!1}],F=[{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!0},{key:"title",label:e("Title","bit-integrations"),required:!1},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"mobile",label:e("Mobile","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!1},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"line1",label:e("Street","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"fax",label:e("Fax","bit-integrations"),required:!1},{key:"facebook",label:e("Facebook","bit-integrations"),required:!1},{key:"skype",label:e("Skype","bit-integrations"),required:!1},{key:"linkedin",label:e("LinkedIn","bit-integrations"),required:!1},{key:"twitter",label:e("Twitter","bit-integrations"),required:!1}],j=[{key:"first_name",label:e("First Name","bit-integrations"),required:!1},{key:"last_name",label:e("Last Name","bit-integrations"),required:!0},{key:"title",label:e("Title","bit-integrations"),required:!1},{key:"phone",label:e("Phone","bit-integrations"),required:!1},{key:"mobile",label:e("Mobile","bit-integrations"),required:!1},{key:"fax",label:e("Fax","bit-integrations"),required:!1},{key:"website",label:e("Website","bit-integrations"),required:!1},{key:"email",label:e("Email","bit-integrations"),required:!1},{key:"description",label:e("Description","bit-integrations"),required:!1},{key:"line1",label:e("Street","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"state",label:e("State","bit-integrations"),required:!1},{key:"postal_code",label:e("Postal Code","bit-integrations"),required:!1},{key:"country",label:e("Country","bit-integrations"),required:!1},{key:"facebook",label:e("Facebook","bit-integrations"),required:!1},{key:"skype",label:e("Skype","bit-integrations"),required:!1},{key:"linkedin",label:e("LinkedIn","bit-integrations"),required:!1},{key:"twitter",label:e("Twitter","bit-integrations"),required:!1}],w=[{key:"name",label:e("Deal Name","bit-integrations"),required:!0},{key:"value",label:e("Value","bit-integrations"),required:!1},{key:"estimated_close_date",label:e("Estimated Close Date","bit-integrations"),required:!1},{key:"added_at",label:e("Added On","bit-integrations"),required:!1},{key:"last_stage_change_at",label:e("Last Moved Stage On","bit-integrations"),required:!1}],[t,b]=n.useState({name:"Zendesk",type:"Zendesk",api_key:"",field_map:[{formField:"",zendeskFormField:""}],actionName:"",organizationFields:v,contactFields:F,leadFields:j,dealFields:w,actions:{}}),P=()=>{k(!0),A(a,i,f,t,g,"","",k).then(u=>{var q;u.success?(l.success((q=u.data)==null?void 0:q.msg),g(f)):l.error(u.data||u)})},I=d=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!_(t)){l.error(e("Please map mandatory fields","bit-integrations"));return}if(t.actionName==="lead"||t.actionName==="deal"){if(!t.selectedCRMCompany){l.error(e("Please select a company","bit-integrations"));return}if(!t.selectedCRMContact){l.error(e("Please select a contact","bit-integrations"));return}if(!t.selectedCRMSources&&t.actionName==="lead"){l.error(e("Please select a Source","bit-integrations"));return}}t.field_map.length>0&&p(d)};return s.jsxs("div",{children:[s.jsx(Z,{snack:N,setSnackbar:c}),s.jsx("div",{className:"txt-center mt-2",children:s.jsx(D,{step:3,active:o})}),s.jsx(O,{zendeskConf:t,setZendeskConf:b,step:o,setStep:p,loading:y,setLoading:m,setSnackbar:c}),s.jsxs("div",{className:"btcd-stp-page",style:S({},o===2&&{width:900,height:"auto",overflow:"visible"}),children:[s.jsx(V,{formFields:r,handleInput:d=>B(d,t,b),zendeskConf:t,setZendeskConf:b,loading:y,setLoading:m,setSnackbar:c}),(t==null?void 0:t.actionName)&&s.jsxs("button",{onClick:()=>I(3),disabled:!_(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.actionName)&&s.jsx(R,{step:o,saveConfig:()=>P(),isLoading:C,dataConf:t,setDataConf:b,formFields:r})]})}export{ae as default};
