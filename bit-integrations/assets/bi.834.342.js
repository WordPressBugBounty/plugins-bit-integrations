var M=Object.defineProperty;var b=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var g=(a,i,s)=>i in a?M(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,f=(a,i)=>{for(var s in i||(i={}))N.call(i,s)&&g(a,s,i[s]);if(b)for(var s of b(i))T.call(i,s)&&g(a,s,i[s]);return a};import{u as G,o as P,f as F,r as c,j as r}from"./main-615.js";import"./bi.991.437.js";import{e as C,_ as t}from"./bi.394.0.js";import{S as E}from"./bi.700.13.js";import{S as L}from"./bi.440.922.js";import U from"./bi.71.204.js";import{h as D,c as R,b as z}from"./bi.68.759.js";import{G as B}from"./bi.950.760.js";import{I as O,s as Z}from"./bi.819.3.js";import"./bi.179.9.js";import"./bi.560.697.js";import"./bi.681.699.js";import"./bi.405.11.js";import"./bi.1.14.js";import"./bi.315.686.js";import"./bi.989.10.js";import"./bi.178.673.js";import"./bi.985.674.js";function ce({formFields:a,setFlow:i,flow:s,allIntegURL:h}){var p;const y=G(),{formID:k}=P(),_=F(C),{siteURL:x}=_,[o,m]=c.useState(!1),[l,u]=c.useState(1),[A,n]=c.useState({show:!1}),w=[{key:"email",label:t("Email","bit-integrations"),required:!0},{key:"first_name",label:t("First Name","bit-integrations"),required:!1},{key:"last_name",label:t("Last Name","bit-integrations"),required:!1},{key:"user_id",label:t("User Id","bit-integrations"),required:!1},{key:"owner_id",label:t("Owner Id","bit-integrations"),required:!1},{key:"note",label:t("Note","bit-integrations"),required:!1}],j=[{key:"primary_phone",label:t("Primary Phone","bit-integrations"),required:!1},{key:"street_address_1",label:t("Street Address 1","bit-integrations"),required:!1},{key:"street_address_2",label:t("Street Address 2","bit-integrations"),required:!1},{key:"postal_zip",label:t("Postal Zip","bit-integrations"),required:!1},{key:"city",label:t("City","bit-integrations"),required:!1},{key:"country",label:t("Country","bit-integrations"),required:!1}],q=[{key:"1",label:t("Create Contact","bit-integrations")},{key:"2",label:t("Add tag to user","bit-integrations")}],[e,d]=c.useState({name:"Groundhogg",type:"Groundhogg",domainName:x,token:"",public_key:"",id:"",mainAction:"",addTagToUser:"",emailAddress:"",showMeta:!1,optin_status:"1",field_map:[{formField:"",GroundhoggMapField:""}],field_map_meta:[{formField:"",GroundhoggMetaMapField:""}],contactsFields:w,contactMetaFields:j,allActions:q,address_field:[],actions:{}}),v=()=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e.mainAction==="1"&&!R(e)){n({show:!0,msg:t("Please map fields to continue.","bit-integrations")});return}if(e.showMeta&&!z(e)){n({show:!0,msg:t("Please map fields to continue.","bit-integrations")});return}if(e.mainAction==="2"&&(e==null?void 0:e.emailAddress)===""){n({show:!0,msg:t("Please select Email field to continue.","bit-integrations")});return}if(e.mainAction==="2"&&(e==null?void 0:e.addTagToUser)===""){n({show:!0,msg:t("Please select All Tags field to continue.","bit-integrations")});return}e.listId!==""&&u(3)},S=!(e.mainAction==="2"&&e.addTagToUser!=="");return r.jsxs("div",{children:[r.jsx(E,{snack:A,setSnackbar:n}),r.jsx("div",{className:"txt-center mt-2",children:r.jsx(L,{step:3,active:l})}),r.jsx(U,{formID:k,groundhoggConf:e,setGroundhoggConf:d,step:l,setstep:u,isLoading:o,setIsLoading:m,setSnackbar:n}),r.jsxs("div",{className:"btcd-stp-page",style:f({},l===2&&{width:900,height:"auto",overflow:"visible"}),children:[r.jsx(B,{formFields:a,handleInput:I=>D(I,e,d),groundhoggConf:e,setGroundhoggConf:d,isLoading:o,setIsLoading:m,setSnackbar:n}),r.jsxs("button",{onClick:()=>v(),disabled:(e.mainAction==="2"?S:!(((p=e.field_map)==null?void 0:p.length)>=1))||o,className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[t("Next","bit-integrations"),"  ",r.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),r.jsx(O,{step:l,saveConfig:()=>Z({flow:s,setFlow:i,allIntegURL:h,navigate:y,conf:e,setIsLoading:m,setSnackbar:n}),isLoading:o,dataConf:e,setDataConf:d,formFields:a})]})}export{ce as default};
