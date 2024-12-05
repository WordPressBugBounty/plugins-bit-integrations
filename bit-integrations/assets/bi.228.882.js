var u=Object.defineProperty,k=Object.defineProperties;var b=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var p=(e,s,a)=>s in e?u(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,m=(e,s)=>{for(var a in s||(s={}))f.call(s,a)&&p(e,a,s[a]);if(l)for(var a of l(s))y.call(s,a)&&p(e,a,s[a]);return e},n=(e,s)=>k(e,b(s));import{u as h}from"./bi.188.437.js";import{_ as r,c as _,d as F}from"./bi.671.0.js";const q=(e,s,a)=>{const c=m({},s),{name:o}=e.target;e.target.value!==""?c[o]=e.target.value:delete c[o],a(m({},c))},x=(e,s,a,c)=>{a(!0);const o={api_token:e.api_token,domain:e.domain,action_name:e.actionName};_(o,"perfexcrm_custom_fields").then(i=>{i&&i.success?(s(d=>h(d,t=>(t.perfexCRMFields="",t.field_map=[{formField:"",perfexCRMFormField:""}],i.data&&(t.actionName==="customer"?t.perfexCRMFields=t.customerFields:t.actionName==="contact"?t.perfexCRMFields=t.contactFields:t.actionName==="lead"?t.perfexCRMFields=t.leadFields:t.actionName==="project"&&(t.perfexCRMFields=t.projectFields),t.perfexCRMFields=[...t.perfexCRMFields,...i.data],t.field_map=P(t)),t))),c({show:!0,msg:r("Custom fields refreshed","bit-integrations")})):c({show:!0,msg:r("Custom fields refresh failed. please try again","bit-integrations")}),a(!1)}).catch(()=>a(!1))},P=e=>{const s=(e==null?void 0:e.perfexCRMFields)&&(e==null?void 0:e.perfexCRMFields.filter(a=>a.required===!0&&a.key!=="owner"&&a.key!=="pipeline"));return s.length>0?s.map(a=>({formField:"",perfexCRMFormField:a.key})):[{formField:"",perfexCRMFormField:""}]},S=e=>!((e!=null&&e.field_map?e.field_map.filter(a=>!a.formField||!a.perfexCRMFormField||a.formField==="custom"&&!a.customValue||a.perfexCRMFormField==="customFieldKey"&&!a.customFieldKey):[]).length>0),j=(e,s,a,c,o,i)=>{if(!e.api_token||!e.domain){a({api_token:e.api_token?"":r("API Token can't be empty","bit-integrations"),domain:e.domain?"":r("API URL can't be empty","bit-integrations")});return}a({}),i(n(m({},o),{auth:!0}));const d={api_token:e.api_token,domain:e.domain};_(d,"perfexcrm_authentication").then(t=>{if(t&&t.success){c(!0),i(n(m({},o),{auth:!1})),F.success(r("Authorized Successfully","bit-integrations"));return}i(n(m({},o),{auth:!1})),F.error(String(t==null?void 0:t.data)?t==null?void 0:t.data:r("Authorized failed, Please enter valid API Token or Access API URL","bit-integrations"))})},w=(e,s,a,c)=>{c(n(m({},a),{customers:!0}));const o={api_token:e.api_token,domain:e.domain};_(o,"perfexcrm_fetch_all_customers").then(i=>{if(i&&i.success){s(d=>h(d,t=>{i.data&&(t.customers=i.data)})),c(n(m({},a),{customers:!1})),F.success(r("Customer fetched successfully","bit-integrations"));return}c(n(m({},a),{customers:!1})),F.error(r(String(i==null?void 0:i.data)?i==null?void 0:i.data:"Customer Not Found!","bit-integrations"))})},v=(e,s,a,c)=>{c(n(m({},a),{leads:!0}));const o={api_token:e.api_token,domain:e.domain};_(o,"perfexcrm_fetch_all_leads").then(i=>{if(i&&i.success){s(d=>h(d,t=>{i.data&&(t.leads=i.data)})),c(n(m({},a),{leads:!1})),F.success(r("Lead fetched successfully","bit-integrations"));return}c(n(m({},a),{leads:!1})),F.error(r(String(i==null?void 0:i.data)?i==null?void 0:i.data:"Lead Not Found!","bit-integrations"))})},I=(e,s,a,c)=>{c(n(m({},a),{staffs:!0}));const o={api_token:e.api_token,domain:e.domain};_(o,"perfexcrm_fetch_all_staffs").then(i=>{if(i&&i.success){s(d=>h(d,t=>{i.data&&(t.staffs=i.data)})),c(n(m({},a),{staffs:!1})),F.success(r("Project Member fetched successfully","bit-integrations"));return}c(n(m({},a),{staffs:!1})),F.error(String(i==null?void 0:i.data)?i==null?void 0:i.data:r("Project Member Not Found!","bit-integrations"))})};export{w as a,v as b,S as c,I as g,q as h,j as p,x as r};
