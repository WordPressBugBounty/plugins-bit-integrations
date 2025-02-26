var I=Object.defineProperty;var v=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var y=(s,i,a)=>i in s?I(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,S=(s,i)=>{for(var a in i||(i={}))P.call(i,a)&&y(s,a,i[a]);if(v)for(var a of v(i))W.call(i,a)&&y(s,a,i[a]);return s};import{u as D,r as n,j as r}from"./main-586.js";import{_ as e,d as o}from"./bi.612.0.js";import"./bi.960.440.js";import{S as M}from"./bi.733.13.js";import{S as T}from"./bi.692.945.js";import{I as A,i as z}from"./bi.993.3.js";import B from"./bi.259.285.js";import{c as L}from"./bi.166.938.js";import{L as G}from"./bi.627.939.js";import"./bi.175.9.js";import"./bi.980.11.js";import"./bi.520.14.js";import"./bi.453.737.js";import"./bi.151.789.js";function ae({formFields:s,setFlow:i,flow:a,allIntegURL:p}){const b=D(),[g,u]=n.useState(!1),[f,_]=n.useState({}),[l,x]=n.useState(1),[q,d]=n.useState({show:!1}),j=[{label:e("License key","bit-integrations"),key:"license_key",required:!0}],F=[{label:e("Valid for (days)","bit-integrations"),key:"valid_for",required:!1},{label:e("Expires at","bit-integrations"),key:"expires_at",required:!1},{label:e("Maximum activation count","bit-integrations"),key:"times_activated_max",required:!1}],w=[{label:e("Name","bit-integrations"),key:"name",required:!0},{label:e("Character map","bit-integrations"),key:"charset",required:!0},{label:e("Number of chunks","bit-integrations"),key:"chunks",required:!0},{label:e("Chunk length","bit-integrations"),key:"chunk_length",required:!0},{label:e("Maximum activation count","bit-integrations"),key:"times_activated_max",required:!1},{label:e("Separator","bit-integrations"),key:"separator",required:!1},{label:e("Prefix","bit-integrations"),key:"prefix",required:!1},{label:e("Suffix","bit-integrations"),key:"suffix",required:!1},{label:e("Expires in	(days)","bit-integrations"),key:"expires_in",required:!1}],C=[{name:"create_license",label:e("Create a license","bit-integrations"),is_pro:!1},{name:"update_license",label:e("Update a license","bit-integrations"),is_pro:!0},{name:"activate_license",label:e("Activate a license","bit-integrations"),is_pro:!0},{name:"deactivate_license",label:e("Deactivate a license","bit-integrations"),is_pro:!0},{name:"delete_license",label:e("Delete a License","bit-integrations"),is_pro:!0},{name:"reactivate_license",label:e("Reactivate a License","bit-integrations"),is_pro:!0},{name:"create_generator",label:e("Create a generator","bit-integrations"),is_pro:!0},{name:"update_generator",label:e("Update a Generator","bit-integrations"),is_pro:!0}],[t,m]=n.useState({name:"License Manager For WooCommerce",type:"License Manager For WooCommerce",base_url:window.location.origin,api_key:"",api_secret:"",field_map:[{formField:"",lmfwcFormField:""}],lmfwcFields:[],module:"",licenseFields:j,generalFields:F,generatorFields:w,modules:C}),N=()=>{u(!0),z(a,i,p,t,b,"","",u).then(c=>{var h;c.success?(o.success((h=c.data)==null?void 0:h.msg),b(p)):o.error(c.data||c)})},E=k=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t.module!="update_license"&&!L(t)){o.error(e("Please map mandatory fields","bit-integrations"));return}if(t.module==="create_license"&&!(t!=null&&t.selectedStatus)){o.error(e("Please select Status","bit-integrations"));return}if(t.module==="update_license"&&!(t!=null&&t.selectedLicense)){o.error(e("Please select Status","bit-integrations"));return}t.field_map.length>0&&x(k)};return r.jsxs("div",{children:[r.jsx(M,{snack:q,setSnackbar:d}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(T,{step:3,active:l})}),r.jsx(B,{licenseManagerConf:t,setLicenseManagerConf:m,step:l,setStep:x,loading:f,setLoading:_,setSnackbar:d}),r.jsxs("div",{className:"btcd-stp-page",style:S({},l===2&&{width:900,minHeight:"400px",height:"auto",overflow:"visible"}),children:[r.jsx(G,{formFields:s,licenseManagerConf:t,setLicenseManagerConf:m,loading:f,setLoading:_,isLoading:g,setIsLoading:u,setSnackbar:d}),(t==null?void 0:t.module)&&r.jsxs("button",{onClick:()=>E(3),disabled:!L(t),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),(t==null?void 0:t.module)&&r.jsx(A,{step:l,saveConfig:()=>N(),isLoading:g,dataConf:t,setDataConf:m,formFields:s})]})}export{ae as default};
