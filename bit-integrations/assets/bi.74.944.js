var m=Object.defineProperty,d=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var h=(t,s,e)=>s in t?m(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,i=(t,s)=>{for(var e in s||(s={}))F.call(s,e)&&h(t,e,s[e]);if(p)for(var e of p(s))k.call(s,e)&&h(t,e,s[e]);return t},n=(t,s)=>d(t,y(s));import{_ as f,b as _,c as o}from"./bi.312.95.js";const P=(t,s,e)=>{const a=i({},s),{name:r}=t.target;t.target.value!==""?a[r]=t.target.value:delete a[r],e(i({},a))},g=t=>{const s=(t==null?void 0:t.salesflareAllFields)&&(t==null?void 0:t.salesflareAllFields.filter(e=>e.required===!0&&e.key!=="owner"&&e.key!=="pipeline"));return s.length>0?s.map(e=>({formField:"",salesflareFormField:e.key})):[{formField:"",salesflareFormField:""}]},q=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.salesflareFormField||e.formField==="custom"&&!e.customValue||e.salesflareFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),S=(t,s,e,a,r)=>{if(!t.api_key){s({api_key:t.api_key?"":f("API Key can't be empty","bit-integrations")});return}s({}),r(n(i({},a),{auth:!0}));const c={api_key:t.api_key};_(c,"salesflare_authentication").then(u=>{if(u&&u.success){e(!0),r(n(i({},a),{auth:!1})),o.success(f("Authorized Successfully","bit-integrations"));return}r(n(i({},a),{auth:!1})),o.error(f("Authorized failed, Please enter valid API Key","bit-integrations"))})},w=(t,s,e,a)=>{e(!0);const r={api_key:t.api_key,action_name:t.actionName};_(r,"Salesflare_custom_fields").then(c=>{c&&c.success?(s(u=>{const l=u;return l.field_map=[{formField:"",salesmateFormField:""}],c.data&&(l.salesflareAllFields=[],l.salesflareAllFields=[...l.salesflareFields,...c.data]),l.field_map=g(l),l}),a({show:!0,msg:f("Salesflare custom fields refreshed","bit-integrations")})):a({show:!0,msg:f("Salesflare custom fields not found.","bit-integrations")}),e(!1)}).catch(()=>e(!1))},K=(t,s,e)=>{e(n(i({},e),{tags:!0}));const a={api_key:t.api_key};_(a,"Salesflare_fetch_all_tags").then(r=>{if(r&&r.success){s(c=>{const u=i({},c);return u.tags=r.data,u}),o.success(f("Tags fetched successfully","bit-integrations")),e(n(i({},e),{tags:!1}));return}e(n(i({},e),{tags:!1})),o.error(f("Tags fetching failed","bit-integrations"))})},v=(t,s,e,a)=>{a(n(i({},e),{account:!0}));const r={api_key:t.api_key};_(r,"Salesflare_fetch_all_account").then(c=>{if(c&&c.success){s(u=>{const l=i({},u);return l.accounts=c.data,l}),o.success(f("Accounts fetched successfully","bit-integrations")),a(n(i({},e),{account:!1}));return}a(n(i({},e),{account:!1})),o.error(f("Accounts fetching failed","bit-integrations"))})},z=(t,s,e,a)=>{a(n(i({},e),{pipeline:!0}));const r={api_key:t.api_key};_(r,"Salesflare_fetch_all_pipelines").then(c=>{if(c&&c.success){s(u=>{const l=i({},u);return l.pipelines=c.data,l}),o.success(f("Pipelines fetched successfully","bit-integrations")),a(n(i({},e),{pipeline:!1}));return}a(n(i({},e),{pipeline:!1})),o.error(f("Pipelines fetching failed","bit-integrations"))})};export{v as a,z as b,q as c,S as d,K as g,P as h,w as s};
