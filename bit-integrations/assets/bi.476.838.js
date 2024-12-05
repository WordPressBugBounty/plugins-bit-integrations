var k=Object.defineProperty,b=Object.defineProperties;var n=Object.getOwnPropertyDescriptors;var P=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;var f=(e,t,a)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,r=(e,t)=>{for(var a in t||(t={}))F.call(t,a)&&f(e,a,t[a]);if(P)for(var a of P(t))o.call(t,a)&&f(e,a,t[a]);return e},c=(e,t)=>b(e,n(t));import{_ as l,c as p,d as _}from"./bi.671.0.js";const R=(e,t,a)=>{const u=r({},t),{name:s}=e.target;e.target.value!==""?u[s]=e.target.value:delete u[s],a(r({},u))},A=e=>{let t=[];e.actionName==="organisation"?t=e==null?void 0:e.organisationFields:e.actionName==="contact"?t=e==null?void 0:e.contactFields:e.actionName==="opportunity"?t=e==null?void 0:e.opportunityFields:e.actionName==="project"?t=e==null?void 0:e.projectFields:e.actionName==="task"?t=e==null?void 0:e.taskFields:e.actionName==="lead"&&(t=e==null?void 0:e.leadFields);const a=t==null?void 0:t.filter(u=>u.required===!0);return a.length>0?a.map(u=>({formField:"",insightlyFormField:u.key})):[{formField:"",insightlyFormField:""}]},q=e=>!((e!=null&&e.field_map?e.field_map.filter(a=>!a.formField||!a.insightlyFormField||a.formField==="custom"&&!a.customValue||a.insightlyFormField==="customFieldKey"&&!a.customFieldKey):[]).length>0),w=e=>{const t=e!=null&&e.selectedLeadSource?e==null?void 0:e.selectedLeadSource:"",a=e!=null&&e.selectedLeadStatus?e==null?void 0:e.selectedLeadStatus:"";return t!=""&&a!=""},N=(e,t,a,u,s,i)=>{if(!e.api_url||!e.api_key){a({api_url:e.api_url?"":l("API URL can't be empty","bit-integrations"),api_key:e.api_key?"":l("Api Key can't be empty","bit-integrations")});return}a({}),i(c(r({},s),{auth:!0}));const d={api_key:e.api_key,api_url:e.api_url};p(d,"insightly_authentication").then(S=>{if(S&&S.success){u(!0),i(c(r({},s),{auth:!1})),_.success(l("Authorized Successfully","bit-integrations"));return}i(c(r({},s),{auth:!1})),_.error(l("Authorized failed, Please enter valid api_url name & API key","bit-integrations"))})},j=(e,t,a)=>{a(c(r({},a),{organisations:!0}));const u={api_key:e.api_key,api_url:e.api_url};p(u,"insightly_fetch_all_organisations").then(s=>{if(s&&s.success){const i=r({},e);s.data&&(i.organisations=s.data),t(i),a(c(r({},a),{organisations:!1})),_.success(l("Organisations fetched successfully","bit-integrations"));return}a(c(r({},a),{organisations:!1})),_.error(l("Organisations fetching failed","bit-integrations"))})},v=(e,t,a)=>{a(c(r({},a),{categories:!0}));const u={api_key:e.api_key,api_url:e.api_url,action_name:e.actionName};p(u,"insightly_fetch_all_categories").then(s=>{if(s&&s.success){const i=r({},e);s.data&&(i.categories=s.data),t(i),a(c(r({},a),{categories:!1})),_.success(l("Categories fetched successfully","bit-integrations"));return}a(c(r({},a),{categories:!1})),_.error(l("Categories fetching failed","bit-integrations"))})},I=(e,t,a)=>{a(c(r({},a),{statuses:!0}));const u={api_key:e.api_key,api_url:e.api_url};p(u,"insightly_fetch_all_statuses").then(s=>{if(s&&s.success){const i=r({},e);s.data&&(i.statuses=s.data),t(i),a(c(r({},a),{statuses:!1})),_.success(l("Status fetched successfully","bit-integrations"));return}a(c(r({},a),{statuses:!1})),_.error(l("Status fetching failed","bit-integrations"))})},K=(e,t,a)=>{a(c(r({},a),{LeadSources:!0}));const u={api_key:e.api_key,api_url:e.api_url};p(u,"insightly_fetch_all_LeadSources").then(s=>{if(s&&s.success){t(i=>{const d=r({},i);return d.default||(d.default={}),s.data&&(d.LeadSources=s.data),d}),a(c(r({},a),{LeadSources:!1})),_.success(l("Lead Statuses fetched successfully","bit-integrations"));return}a(c(r({},a),{LeadSources:!1})),_.error(l("Lead Statuses fetching failed","bit-integrations"))})},O=(e,t,a)=>{a(c(r({},a),{LeadStatues:!0}));const u={api_key:e.api_key,api_url:e.api_url};p(u,"insightly_fetch_all_LeadStatuses").then(s=>{if(s&&s.success){t(i=>{const d=r({},i);return d.default||(d.default={}),s.data&&(d.LeadStatuses=s.data),d}),a(c(r({},a),{LeadStatuses:!1})),_.success(l("Lead Statuses fetched successfully","bit-integrations"));return}a(c(r({},a),{LeadStatuses:!1})),_.error(l("Lead Statuses fetching failed","bit-integrations"))})},z=(e,t,a)=>{a(c(r({},a),{CRMPipelines:!0}));const u={api_key:e.api_key,api_url:e.api_url,action_name:e.actionName};p(u,"insightly_fetch_all_CRMPipelines").then(s=>{if(s&&s.success){const i=r({},e);s.data&&(i.CRMPipelines=s.data),t(i),a(c(r({},a),{CRMPipelines:!1})),_.success(l("Pipelines fetched successfully","bit-integrations"));return}a(c(r({},a),{CRMPipelines:!1})),_.error(l("Pipelines fetching failed","bit-integrations"))})},x=(e,t,a)=>{a(c(r({},a),{CRMPipelineStages:!0}));const u={api_key:e.api_key,api_url:e.api_url,selectedCRMPipeline:e.selectedCRMPipeline};p(u,"insightly_fetch_all_CRMPipelineStages").then(s=>{if(s&&s.success){const i=r({},e);s.data&&(i.CRMPipelineStages=s.data),t(i),a(c(r({},a),{CRMPipelineStages:!1})),_.success(l("Pipeline stages fetched successfully","bit-integrations"));return}a(c(r({},a),{CRMPipelineStages:!1})),_.error(l("Pipeline stages fetching failed","bit-integrations"))})};export{v as a,I as b,q as c,A as d,O as e,K as f,j as g,R as h,z as i,x as j,N as k,w as l};
