var M=Object.defineProperty;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var p=(a,i,s)=>i in a?M(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,f=(a,i)=>{for(var s in i||(i={}))N.call(i,s)&&p(a,s,i[s]);if(g)for(var s of g(i))T.call(i,s)&&p(a,s,i[s]);return a};import{u as G,l as P,i as F,r as c,j as n}from"./main-165.js";import{j as C,_ as t,d as E,I as L,s as U}from"./bi.312.95.js";import{S as D}from"./bi.354.971.js";import R from"./bi.492.281.js";import{h as z,c as B,b as O}from"./bi.271.817.js";import{G as Z}from"./bi.257.818.js";import"./bi.430.769.js";import"./bi.40.785.js";import"./bi.290.745.js";import"./bi.50.729.js";import"./bi.953.732.js";import"./bi.422.733.js";function ae({formFields:a,setFlow:i,flow:s,allIntegURL:h}){var b;const y=G(),{formID:k}=P(),_=F(C),{siteURL:x}=_,[o,m]=c.useState(!1),[l,u]=c.useState(1),[A,r]=c.useState({show:!1}),j=[{key:"email",label:t("Email","bit-integrations"),required:!0},{key:"first_name",label:t("First Name","bit-integrations"),required:!1},{key:"last_name",label:t("Last Name","bit-integrations"),required:!1},{key:"user_id",label:t("User Id","bit-integrations"),required:!1},{key:"owner_id",label:t("Owner Id","bit-integrations"),required:!1},{key:"note",label:t("Note","bit-integrations"),required:!1}],w=[{key:"primary_phone",label:t("Primary Phone","bit-integrations"),required:!1},{key:"street_address_1",label:t("Street Address 1","bit-integrations"),required:!1},{key:"street_address_2",label:t("Street Address 2","bit-integrations"),required:!1},{key:"postal_zip",label:t("Postal Zip","bit-integrations"),required:!1},{key:"city",label:t("City","bit-integrations"),required:!1},{key:"country",label:t("Country","bit-integrations"),required:!1}],q=[{key:"1",label:t("Create Contact","bit-integrations")},{key:"2",label:t("Add tag to user","bit-integrations")}],[e,d]=c.useState({name:"Groundhogg",type:"Groundhogg",domainName:x,token:"",public_key:"",id:"",mainAction:"",addTagToUser:"",emailAddress:"",showMeta:!1,optin_status:"1",field_map:[{formField:"",GroundhoggMapField:""}],field_map_meta:[{formField:"",GroundhoggMetaMapField:""}],contactsFields:j,contactMetaFields:w,allActions:q,address_field:[],actions:{}}),v=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e.mainAction==="1"&&!B(e)){r({show:!0,msg:t("Please map fields to continue.","bit-integrations")});return}if(e.showMeta&&!O(e)){r({show:!0,msg:t("Please map fields to continue.","bit-integrations")});return}if(e.mainAction==="2"&&(e==null?void 0:e.emailAddress)===""){r({show:!0,msg:t("Please select Email field to continue.","bit-integrations")});return}if(e.mainAction==="2"&&(e==null?void 0:e.addTagToUser)===""){r({show:!0,msg:t("Please select All Tags field to continue.","bit-integrations")});return}e.listId!==""&&u(3)},I=!(e.mainAction==="2"&&e.addTagToUser!=="");return n.jsxs("div",{children:[n.jsx(E,{snack:A,setSnackbar:r}),n.jsx("div",{className:"txt-center mt-2",children:n.jsx(D,{step:3,active:l})}),n.jsx(R,{formID:k,groundhoggConf:e,setGroundhoggConf:d,step:l,setstep:u,isLoading:o,setIsLoading:m,setSnackbar:r}),n.jsxs("div",{className:"btcd-stp-page",style:f({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[n.jsx(Z,{formFields:a,handleInput:S=>z(S,e,d),groundhoggConf:e,setGroundhoggConf:d,isLoading:o,setIsLoading:m,setSnackbar:r}),n.jsxs("button",{onClick:()=>v(),disabled:(e.mainAction==="2"?I:!(((b=e.field_map)==null?void 0:b.length)>=1))||o,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),n.jsx(L,{step:l,saveConfig:()=>U({flow:s,setFlow:i,allIntegURL:h,navigate:y,conf:e,setIsLoading:m,setSnackbar:r}),isLoading:o,dataConf:e,setDataConf:d,formFields:a})]})}export{ae as default};
