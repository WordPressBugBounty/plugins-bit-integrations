var P=Object.defineProperty;var y=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(a,i,d)=>i in a?P(a,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):a[i]=d,o=(a,i)=>{for(var d in i||(i={}))q.call(i,d)&&F(a,d,i[d]);if(y)for(var d of y(i))z.call(i,d)&&F(a,d,i[d]);return a};import{_ as n,c as u,V as w,s as g}from"./bi.560.0.js";const N=(a,i,d,s,l,e,t,r,m,c)=>{let f=o({},d);if(i===0){if(r){const h=o({},m);h[a.target.name]="",c(o({},h))}a.target.value!==""?a.target.name!=="module"?f.moduleData[a.target.name]=parseInt(a.target.value):(f.moduleData={},f.moduleData[a.target.name]=a.target.value):delete f.moduleData[a.target.name]}else f.relatedlists||(f.relatedlists=[]),a.target.value!==""?a.target.name!=="module"?f.relatedlists[i-1][a.target.name]=parseInt(a.target.value):(f.relatedlists[i-1].moduleData={},f.relatedlists[i-1][a.target.name]=a.target.value):delete f.relatedlists[i-1][a.target.name];switch(a.target.name){case"module":f=k(i,l,f,s,e,t);break}s(o({},f))},R=(a,i)=>{i(a)},k=(a,i,d,s,l,e)=>{var m,c,f,h;const t=o({},d);t.relatedlists[a-1]||(t.relatedlists[a-1]={});const r=a===0?t.moduleData.module:t.relatedlists[a-1].module;return a===0?(t.actions={},t.field_map=[{formField:"",pipeDriveFormField:""}],t.relatedlists=[],["Leads","Deals","Activities","Notes"].includes(r)&&(!t.default.organizations&&A(t,s,l,e),!t.default.persons&&O(t,s,l,e)),r!==""&&r!==void 0?setTimeout(()=>{p(r,t,s,a)},1e3):t.field_map=(c=(m=t.default.modules)==null?void 0:m[r])!=null&&c.requiredFields?_(a,t):[{formField:"",pipeDriveFormField:""}]):(t.relatedlists[a-1].actions={},t.relatedlists[a-1].field_map=[{formField:"",pipeDriveFormField:""}],r!==""&&r!==void 0?setTimeout(()=>{p(r,t,s,a)},1e3):t.relatedlists[a-1].field_map=(h=(f=t.default.modules)==null?void 0:f[r])!=null&&h.requiredFields?_(a,t):[{formField:"",pipeDriveFormField:""}]),t},p=(a,i,d,s)=>{const l={api_key:i.api_key,module:a};u(l,"PipeDrive_refresh_fields").then(e=>{var t,r,m,c;if(e&&e.success){const f=o({},i);f.default.modules[a].fields||(f.default.modules[a].fields={}),e.data&&(f.default.modules[a].fields=e.data,s===0?f.field_map=(r=(t=f.default.modules)==null?void 0:t[a])!=null&&r.requiredFields?_(s,f):[{formField:"",pipeDriveFormField:""}]:f.relatedlists[s-1].field_map=(c=(m=f.default.modules)==null?void 0:m[a])!=null&&c.requiredFields?_(s,f):[{formField:"",pipeDriveFormField:""}]),d(o({},f))}})},A=(a,i,d,s)=>{d(!0);const l={api_key:a.api_key,type:"organizations"};u(l,"PipeDrive_fetch_meta_data").then(e=>{if(e&&e.success){const t=o({},a);t.default.organizations||(t.default.organizations={}),e.data&&(t.default.organizations=e.data),i(o({},t)),s({show:!0,msg:n("Organizations refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?s({show:!0,msg:g(n("Organizations refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):s({show:!0,msg:n("Organizations refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},O=(a,i,d,s)=>{d(!0);const l={api_key:a.api_key,type:"persons"};u(l,"PipeDrive_fetch_meta_data").then(e=>{if(e&&e.success){const t=o({},a);t.default.persons||(t.default.persons={}),e.data&&(t.default.persons=e.data),i(o({},t)),s({show:!0,msg:n("Persons refreshed","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?s({show:!0,msg:g(n("Persons refresh failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):s({show:!0,msg:n("Persons refresh failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},V=(a,i,d,s)=>{d(!0);const l={api_key:a.api_key,type:"users"};u(l,"PipeDrive_fetch_meta_data").then(e=>{if(e&&e.success){const t=o({},a);t.default.owners||(t.default.owners={}),e.data&&(t.default.owners=e.data),i(o({},t)),s({show:!0,msg:n("Owners fetched successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?s({show:!0,msg:g(n("Owners fetch failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):s({show:!0,msg:n("Owners fetch failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},b=(a,i,d,s)=>{d(!0);const l={api_key:a.api_key,type:"leadLabels"};u(l,"PipeDrive_fetch_meta_data").then(e=>{if(e&&e.success){const t=o({},a);t.default.leadLabels||(t.default.leadLabels={}),e.data&&(t.default.leadLabels=e.data),i(o({},t)),s({show:!0,msg:n("Labels fetched successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?s({show:!0,msg:g(n("Labels fetch failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):s({show:!0,msg:n("Labels fetch failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},j=(a,i,d,s)=>{d(!0);const l={api_key:a.api_key,type:"currencies"};u(l,"PipeDrive_fetch_meta_data").then(e=>{if(e&&e.success){const t=o({},a);t.default.currencies||(t.default.currencies={}),e.data&&(t.default.currencies=e.data),i(o({},t)),s({show:!0,msg:n("Currencies fetched successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?s({show:!0,msg:g(n("Currencies fetch failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):s({show:!0,msg:n("Currencies fetch failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},K=(a,i,d,s)=>{d(!0);const l={api_key:a.api_key,type:"stages"};u(l,"PipeDrive_fetch_meta_data").then(e=>{if(e&&e.success){const t=o({},a);t.default.stages||(t.default.stages={}),e.data&&(t.default.stages=e.data),i(o({},t)),s({show:!0,msg:n("Stages fetched successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?s({show:!0,msg:g(n("Stages fetch failed Cause: %s. please try again","bit-integrations"),e.data.data||e.data)}):s({show:!0,msg:n("Stages fetch failed. please try again","bit-integrations")});d(!1)}).catch(()=>d(!1))},_=(a,i)=>{var l,e,t,r;const d=a===0?i.moduleData.module:i.relatedlists[a-1].module,s=(r=(t=(e=(l=i==null?void 0:i.default)==null?void 0:l.modules)==null?void 0:e[d])==null?void 0:t.fields)==null?void 0:r.filter(m=>m.required===!0);return(s==null?void 0:s.length)>0?s.map(m=>({formField:"",pipeDriveFormField:m.key})):[{formField:"",pipeDriveFormField:""}]},B=a=>{const i=a!=null&&a.field_map?a.field_map.filter(s=>{var l,e,t,r;return!s.formField&&s.pipeDriveFormField&&((r=(t=(e=(l=a==null?void 0:a.default)==null?void 0:l.modules)==null?void 0:e[a.moduleData.module])==null?void 0:t.requiredFields)==null?void 0:r.indexOf(s.pipeDriveFormField))!==-1}):[],d=a.relatedlists.map(s=>s.field_map.filter(l=>!l.formField&&l.pipeDriveFormField));return!(i.length>0||d.some(s=>s.length))},E=a=>{var i,d,s,l,e;return!(((i=a.moduleData)==null?void 0:i.module)!==""&&((l=(s=a.default.modules)==null?void 0:s[(d=a==null?void 0:a.moduleData)==null?void 0:d.module])!=null&&l.required)&&["Leads","Deals","Activities","Notes"].includes(a.moduleData.module)&&a.moduleData.organization_id===void 0&&((e=a.moduleData)==null?void 0:e.person_id)===void 0)},G=(a,i,d,s)=>{if(!a.api_key){i({api_key:a.api_key?"":n("API Key can't be empty","bit-integrations")});return}i({}),s(!0);const l={api_key:a.api_key,type:"persons"};u(l,"PipeDrive_fetch_meta_data").then(e=>{if(e&&e.success){d(!0),s(!1),w.success(n("Authorized Successfully","bit-integrations"));return}s(!1),w.error(n("Authorized failed","bit-integrations"))})};export{E as a,b,B as c,K as d,j as e,R as f,V as g,N as h,O as i,G as j,A as r};
