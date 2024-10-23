var y=Object.defineProperty;var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var D=(e,t,i)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,r=(e,t)=>{for(var i in t||(t={}))v.call(t,i)&&D(e,i,t[i]);if(g)for(var i of g(t))M.call(t,i)&&D(e,i,t[i]);return e};import{_ as c,b as F,A as q}from"./bi.433.0.js";const V=(e,t,i)=>{const n=r({},t),{name:a}=e.target;e.target.value!==""?n[a]=e.target.value:delete n[a],i(r({},n))},B=(e,t,i,n,a,s)=>{if(!e.numberID||!e.businessAccountID||!e.token){i({numberID:e.numberID?"":c("Phone number ID can't be empty or invalid","bit-integrations"),businessAccountID:e.businessAccountID?"":c("WhatsApp Business Account ID can't be empty or invalid","bit-integrations"),token:e.token?"":c("Access Token can't be empty or invalid","bit-integrations")});return}const u={numberID:e.numberID,businessAccountID:e.businessAccountID,token:e.token};a(!0),F(u,"whats_app_authorization").then(l=>{if(a(!1),l&&l.success){n(!0),s({show:!0,msg:c("Authorized Successfully","bit-integrations")});return}s({show:!0,msg:(l==null?void 0:l.data)||c("Authorized failed","bit-integrations")})})},W=(e,t,i,n)=>{if(!e.numberID||!e.businessAccountID||!e.token){setError({numberID:e.numberID?"":c("Phone number ID can't be empty or invalid","bit-integrations"),businessAccountID:e.businessAccountID?"":c("WhatsApp Business Account ID can't be empty or invalid","bit-integrations"),token:e.token?"":c("Access Token can't be empty or invalid","bit-integrations")});return}const a={numberID:e.numberID,businessAccountID:e.businessAccountID,token:e.token};i(!0),F(a,"whats_app_all_template").then(s=>{var u,l,o,d,m,b;if(i(!1),(l=(u=s==null?void 0:s.data)==null?void 0:u.error)!=null&&l.message)console.log((d=(o=s==null?void 0:s.data)==null?void 0:o.error)==null?void 0:d.message),n({show:!0,msg:c((b=(m=s==null?void 0:s.data)==null?void 0:m.error)==null?void 0:b.message,"bit-integrations")});else if(s&&s.success){t(_=>q(_,k=>{k.allTemplates=(s==null?void 0:s.data)||[]})),n({show:!0,msg:c("Template Fetched Successfully","bit-integrations")});return}})},h=e=>{const t=e.filter(i=>i.required===!0);return t.length>0?t.map(i=>({formField:"",whatsAppFormField:i.key})):[{formField:"",whatsAppFormField:""}]},I=e=>!((e?e.filter(i=>i.formField&&i.whatsAppFormField):[]).length>0),E=e=>{let t=!1;return((e==null?void 0:e.messageType)===""||(e==null?void 0:e.messageType)==="template"&&e.templateName===""||(e==null?void 0:e.messageType)==="text"&&e.body===""||(e==null?void 0:e.messageType)==="media"&&(e.upload_field===""||e.mediaType==="")||(e==null?void 0:e.messageType)==="contact"&&I(e.contact_field_map))&&(t=!0),I(e.field_map)||t},N=(e,t,i,n="field_map")=>{const a=r({},t);a[n].splice(e,0,{}),i(r({},a))},j=(e,t,i,n="field_map")=>{const a=r({},t);a[n].length>1&&a[n].splice(e,1),i(r({},a))},x=(e,t,i,n,a="field_map")=>{const s=r({},i);s[a][t][e.target.name]=e.target.value,e.target.value==="custom"&&(s[a][t].customValue=""),n(r({},s))},G=(e,t,i,n,a,s="field_map")=>{const u=r({},i);a?u.relatedlists[a-1][s][t].customValue=e.target.value:u[s][t].customValue=e,n(r({},u))};export{x as a,G as b,E as c,N as d,j as e,h as f,W as g,V as h,B as i};
