var F=Object.defineProperty,y=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var m=(t,s,e)=>s in t?F(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))v.call(s,e)&&m(t,e,s[e]);if(h)for(var e of h(s))b.call(s,e)&&m(t,e,s[e]);return t},c=(t,s)=>y(t,d(s));import{_ as l,c as _,d as u}from"./bi.223.0.js";const A=(t,s,e)=>{const i=a({},s),{name:r}=t.target;t.target.value!==""?i[r]=t.target.value:delete i[r],e(a({},i))},P=t=>{const s=t.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",livestormFormField:e.key})):[{formField:"",livestormFormField:""}]},q=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.livestormFormField||e.formField==="custom"&&!e.customValue||e.livestormFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),S=(t,s,e,i,r,n)=>{if(!t.api_key){e({api_key:t.api_key?"":l("API Key can't be empty","bit-integrations")});return}e({}),n(c(a({},r),{auth:!0}));const f={api_key:t.api_key};_(f,"livestorm_authentication").then(o=>{if(o&&o.success){i(!0),n(c(a({},r),{auth:!1})),u.success(l("Authorized Successfully","bit-integrations"));return}n(c(a({},r),{auth:!1})),u.error(l((o==null?void 0:o.data)||"Authorized failed, Please enter valid API Key","bit-integrations"))})},K=(t,s,e)=>{e(c(a({},e),{event:!0}));const i={api_key:t.api_key};_(i,"livestorm_fetch_all_events").then(r=>{if(r&&r.success){if(r.data){s(n=>(n.events=r.data.events,n.allFields=r.data.allFields,n)),e(c(a({},e),{event:!1})),u.success(l("Events fetched successfully","bit-integrations"));return}e(c(a({},e),{event:!1})),u.error(l("Events Not Found!","bit-integrations"));return}e(c(a({},e),{event:!1})),u.error(l("Events fetching failed","bit-integrations"))})},E=(t,s,e,i)=>{i(c(a({},i),{session:!0}));const r={api_key:t.api_key,event_id:e};_(r,"livestorm_fetch_all_sessions").then(n=>{if(n&&n.success){if(n.data){s(f=>(f.sessions=n.data,f)),i(c(a({},i),{session:!1})),u.success(l("Sessions fetched successfully","bit-integrations"));return}i(c(a({},i),{session:!1})),u.error(l("Sessions Not Found!","bit-integrations"));return}i(c(a({},i),{session:!1})),u.error(l("Sessions fetching failed","bit-integrations"))})};export{E as a,P as b,q as c,K as g,A as h,S as l};
