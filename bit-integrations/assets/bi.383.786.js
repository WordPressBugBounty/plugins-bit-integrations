var F=Object.defineProperty;var m=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var g=(a,t,s)=>t in a?F(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,l=(a,t)=>{for(var s in t||(t={}))_.call(t,s)&&g(a,s,t[s]);if(m)for(var s of m(t))b.call(t,s)&&g(a,s,t[s]);return a};import{c as d,_ as r}from"./bi.828.0.js";import{u as w}from"./bi.266.440.js";const B=(a,t,s,n,i,o,e,f,p)=>{const c=l({},t);if(e){const u=l({},f);u[a.target.name]="",p(l({},u))}c[a.target.name]=a.target.value,s(l({},c))},T=(a,t,s,n,i)=>{n(!0);const o={formID:a,password:t.password,userName:t.userName};d(o,"fluent_support_get_all_support_staff").then(e=>{if(e&&e.success){const f=l({},t);f.default||(f.default={}),e.data&&(f.default.agents=e.data),i({show:!0,msg:r("Support Staff refreshed","bit-integrations")}),s(l({},f))}else i({show:!0,msg:r("Support Staff refresh failed. please try again","bit-integrations")});n(!1)}).catch(()=>n(!1))},$=(a,t,s,n)=>{s(!0),d(null,"fluent_support_get_custom_fields").then(i=>{t(o=>w(o,e=>{i&&i.success&&i.data?(e.fluentSupportFields=[...e.basicFields,...i.data],e.field_map=h([...e.basicFields,...i.data]),i.data.length>0?n({show:!0,msg:r("Custom Ticket Fields refreshed","bit-integrations")}):n({show:!0,msg:r("Custom Ticket Fields not found!","bit-integrations")})):(e.fluentSupportFields=e.basicFields,e.field_map=h(e.basicFields),n({show:!0,msg:(i==null?void 0:i.data)||r("Custom Ticket Fields failed. please try again","bit-integrations")}))})),s(!1)}).catch(()=>s(!1))},z=(a,t,s,n,i)=>{n(!0),d("","fluent_support_get_all_business_inboxes").then(o=>{if(o&&o.success){const e=l({},t);e.default||(e.default={}),o.data&&(e.default.businessInboxes=o.data),i({show:!0,msg:r("Business Inboxes refreshed","bit-integrations")}),s(l({},e))}else i({show:!0,msg:r("Business Inboxes refresh failed. please try again","bit-integrations")});n(!1)}).catch(()=>n(!1))},h=a=>{console.log(a);const t=a.filter(s=>s.required===!0);return t.length>0?t.map(s=>({formField:"",fluentSupportFormField:s.key})):[{formField:"",fluentSupportFormField:""}]},A=a=>!((a!=null&&a.field_map?a.field_map.filter(s=>!s.formField||!s.fluentSupportFormField||!s.formField==="custom"&&!s.customValue):[]).length>0),D=(a,t,s,n,i,o)=>{s({}),i(!0),d(null,"fluentSupport_authorization").then(e=>e).then(e=>{if(e&&e.success){const f=l({},a);t(f),n(!0),o({show:!0,msg:r("Connected Successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?o({show:!0,msg:`${r("Cunnection failed Cause:","bit-integrations")}${e.data.data||e.data}. ${r("please try again","bit-integrations")}`}):o({show:!0,msg:r("Cunnection failed. please try again","bit-integrations")});i(!1)})};export{$ as a,D as b,A as c,z as g,B as h,T as s};
