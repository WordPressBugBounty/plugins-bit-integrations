var g=Object.defineProperty,F=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var _=(t,s,e)=>s in t?g(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))p.call(s,e)&&_(t,e,s[e]);if(h)for(var e of h(s))q.call(s,e)&&_(t,e,s[e]);return t},n=(t,s)=>F(t,y(s));import{_ as i,c as m,d as u}from"./bi.4.0.js";const w=(t,s,e)=>{const l=a({},s);l.name=t.target.value,e(a({},l))},P=(t,s,e,l,r,c,d="authentication")=>{const o=a({},t);if(!o.name||!o.api_token){e({name:o.name?"":i("Integration name can't be empty","bit-integrations"),api_token:o.api_token?"":i("Access Api Token Key can't be empty","bit-integrations")});return}let b;d==="authentication"?(c(n(a({},r),{auth:!0})),b="Authorization Failed"):d==="accounts"&&(c(n(a({},r),{accounts:!0})),b="Accounts fetching failed");const k={api_token:o.api_token};m(k,"drip_authorize").then(f=>{f!=null&&f.success?(o.accounts=f.data,d==="authentication"?(l(!0),u.success("Authorized Successfully")):d==="accounts"&&u.success("Accounts fetched Successfully")):u.error(b),s(a({},o)),c(n(a({},r),{auth:!1,accounts:!1}))})},M=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.dripField||!e.formField==="custom"&&!e.customValue):[]).length>0),S=t=>{const s=t==null?void 0:t.dripFormFields.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",dripField:e.key})):[{formField:"",dripField:""}]},T=(t,s,e)=>{e(n(a({},e),{customFields:!0}));const l={apiToken:t.api_token,selectedAccountId:t.selectedAccountId};m(l,"drip_fetch_all_custom_fields").then(r=>{if(r&&r.success){const c=a({},t);r.data&&(c.dripFormFields=[...A,...r.data]),s(c),e(n(a({},e),{customFields:!1})),u.success(i("Custom fields fetch successfully","bit-integrations"));return}e(n(a({},e),{customFields:!1})),u.error(i("Custom fields fetch failed","bit-integrations"))})},E=(t,s,e)=>{e(n(a({},e),{tags:!0}));const l={apiToken:t.api_token,selectedAccountId:t.selectedAccountId};m(l,"drip_fetch_all_tags").then(r=>{if(r&&r.success){const c=a({},t);r.data&&(c.tags=r.data),s(c),e(n(a({},e),{tags:!1})),u.success(i("Tags fetched successfully","bit-integrations"));return}e(n(a({},e),{customFields:!1})),u.error(i("Tags fetching failed","bit-integrations"))})},A=[{key:"email",label:i("Email","bit-integrations"),required:!0},{key:"first_name",label:i("First Name","bit-integrations"),required:!1},{key:"last_name",label:i("Last Name","bit-integrations"),required:!1},{key:"address1",label:i("Address 1","bit-integrations"),required:!1},{key:"address2",label:i("Address 2","bit-integrations"),required:!1},{key:"city",label:i("City","bit-integrations"),required:!1},{key:"state",label:i("State","bit-integrations"),required:!1},{key:"zip",label:i("Zip","bit-integrations"),required:!1},{key:"country",label:i("Country","bit-integrations"),required:!1},{key:"phone",label:i("Phone","bit-integrations"),required:!1},{key:"time_zone",label:i("Time Zone","bit-integrations"),required:!1},{key:"ip_address",label:i("IP Address","bit-integrations"),required:!1}];export{E as a,T as b,M as c,P as d,S as g,w as h,A as s};