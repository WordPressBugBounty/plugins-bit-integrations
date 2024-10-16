var m=Object.defineProperty,y=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var o=(i,s,e)=>s in i?m(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e,a=(i,s)=>{for(var e in s||(s={}))k.call(s,e)&&o(i,e,s[e]);if(f)for(var e of f(s))b.call(s,e)&&o(i,e,s[e]);return i},l=(i,s)=>y(i,P(s));import{_ as c,b as _,c as u}from"./bi.860.15.js";const w=(i,s,e)=>{const r=a({},s),{name:t}=i.target;i.target.value!==""?r[t]=i.target.value:delete r[t],e(a({},r))},M=i=>{let s=[];i.actionName==="company"?s=i==null?void 0:i.companyFields:i.actionName==="person"?s=i==null?void 0:i.personFields:i.actionName==="opportunity"?s=i==null?void 0:i.opportunityFields:i.actionName==="task"&&(s=i==null?void 0:i.taskFields);const e=s==null?void 0:s.filter(r=>r.required===!0);return e.length>0?e.map(r=>({formField:"",coppercrmFormField:r.key})):[{formField:"",coppercrmFormField:""}]},A=i=>!((i!=null&&i.field_map?i.field_map.filter(e=>!e.formField||!e.coppercrmFormField||e.formField==="custom"&&!e.customValue||e.coppercrmFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),R=(i,s,e,r,t,n)=>{if(!i.api_email||!i.api_key){e({api_email:i.api_email?"":c("API Email can't be empty","bit-integrations"),api_key:i.api_key?"":c("API Key can't be empty","bit-integrations")});return}e({}),n(l(a({},t),{auth:!0}));const h={api_key:i.api_key,api_email:i.api_email};_(h,"coppercrm_authentication").then(p=>{if(p&&p.success){r(!0),n(l(a({},t),{auth:!1})),u.success(c("Authorized Successfully","bit-integrations"));return}n(l(a({},t),{auth:!1})),u.error(c("Authorized failed, Please enter valid api_email name & API key","bit-integrations"))})},g=(i,s,e)=>{e(l(a({},e),{customFields:!0}));const r={api_key:i.api_key,api_email:i.api_email,action:i.actionName};_(r,"coppercrm_fetch_custom_fields").then(t=>{if(t&&t.success){const n=a({},i);t.data&&(n.customFields=t.data),s(n),e(l(a({},e),{customFields:!1})),t.data?u.success(c("Custom fields also fetched successfully","bit-integrations")):u.error(c("No custom fields found","bit-integrations"));return}e(l(a({},e),{customFields:!1})),u.error(c("Custom fields fetching failed","bit-integrations"))})},q=(i,s,e)=>{e(l(a({},e),{opportunities:!0}));const r={api_key:i.api_key,api_email:i.api_email};_(r,"coppercrm_fetch_all_opportunities").then(t=>{if(t&&t.success){const n=a({},i);t.data&&(n.opportunities=t.data),s(n),e(l(a({},e),{opportunities:!1})),u.success(c("Opportunities fetched successfully","bit-integrations"));return}e(l(a({},e),{opportunities:!1})),u.error(c("Opportunities fetching failed","bit-integrations"))})},S=(i,s,e)=>{e(l(a({},e),{owners:!0}));const r={api_key:i.api_key,api_email:i.api_email};_(r,"coppercrm_fetch_all_owners").then(t=>{if(t&&t.success){const n=a({},i);t.data&&(n.owners=t.data),s(n),e(l(a({},e),{owners:!1})),u.success(c("Owners fetched successfully","bit-integrations"));return}e(l(a({},e),{owners:!1})),u.error(c("Owners fetching failed","bit-integrations"))})},N=(i,s,e)=>{e(l(a({},e),{companies:!0}));const r={api_key:i.api_key,api_email:i.api_email};_(r,"coppercrm_fetch_all_companies").then(t=>{if(t&&t.success){const n=a({},i);t.data&&(n.companies=t.data),s(n),e(l(a({},e),{companies:!1})),u.success(c("Companies fetched successfully","bit-integrations"));return}e(l(a({},e),{companies:!1})),u.error(c("Companies fetching failed","bit-integrations"))})},O=(i,s,e)=>{e(l(a({},e),{pipelineStages:!0}));const r={api_key:i.api_key,api_email:i.api_email,action_name:i.actionName};_(r,"coppercrm_fetch_all_pipelineStages").then(t=>{if(t&&t.success){const n=a({},i);t.data&&(n.pipelineStages=t.data),s(n),e(l(a({},e),{pipelineStages:!1})),u.success(c("PipelineStages fetched successfully","bit-integrations"));return}e(l(a({},e),{pipelineStages:!1})),u.error(c("PipelineStages fetching failed","bit-integrations"))})},I=(i,s,e)=>{e(l(a({},e),{CRMPeoples:!0}));const r={api_key:i.api_key,api_email:i.api_email,action_name:i.actionName};_(r,"coppercrm_fetch_all_CRMPeoples").then(t=>{if(t&&t.success){const n=a({},i);t.data&&(n.CRMPeoples=t.data),s(n),e(l(a({},e),{CRMPeoples:!1})),u.success(c("Peoples fetched successfully","bit-integrations"));return}e(l(a({},e),{CRMPeoples:!1})),u.error(c("Peoples fetching failed","bit-integrations"))})},v=(i,s,e)=>{e(l(a({},e),{CRMPipelines:!0}));const r={api_key:i.api_key,api_email:i.api_email};_(r,"coppercrm_fetch_all_CRMPipelines").then(t=>{if(t&&t.success){const n=a({},i);t.data&&(n.CRMPipelines=t.data),s(n),e(l(a({},e),{CRMPipelines:!1})),u.success(c("Pipelines fetched successfully","bit-integrations"));return}e(l(a({},e),{CRMPipelines:!1})),u.error(c("Pipelines fetching failed","bit-integrations"))})};export{S as a,N as b,A as c,O as d,M as e,I as f,q as g,w as h,v as i,g as j,R as k};
