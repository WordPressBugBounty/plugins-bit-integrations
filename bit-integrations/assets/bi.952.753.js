var g=Object.defineProperty;var o=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var c=(a,t,e)=>t in a?g(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,d=(a,t)=>{for(var e in t||(t={}))u.call(t,e)&&c(a,e,t[e]);if(o)for(var e of o(t))b.call(t,e)&&c(a,e,t[e]);return a};import{c as h,_ as l,s as m}from"./bi.560.0.js";const w=(a,t,e)=>{const i=d({},t);i.name=a.target.value,e(d({},i))},T=(a,t,e,i)=>{e(!0);const r={api_key:a.api_key};h(r,"sblue_refresh_lists").then(s=>{if(s&&s.success){const f=d({},a);f.default||(f.default={}),s.data.sblueList&&(f.default.sblueList=s.data.sblueList),i({show:!0,msg:l("List refreshed","bit-integrations")}),t(d({},f))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?i({show:!0,msg:m(l("List refresh failed Cause: %s. please try again","bit-integrations"),s.data.data||s.data)}):i({show:!0,msg:l("List failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},F=(a,t,e)=>{const i={api_key:a.api_key};h(i,"sblue_refresh_template").then(r=>{if(r&&r.success){const s=d({},a);s.default||(s.default={}),r.data.sblueTemplates&&(s.default.sblueTemplates=r.data.sblueTemplates),e({show:!0,msg:l("Templates refreshed","bit-integrations")}),t(d({},s))}else r&&r.data&&r.data.data||!r.success&&typeof r.data=="string"?e({show:!0,msg:m(l("Templates refresh failed Cause: %s. please try again","bit-integrations"),r.data.data||r.data)}):e({show:!0,msg:l("Templates failed. please try again","bit-integrations")})})},L=(a,t,e,i)=>{const r={api_key:a.api_key};h(r,"sblue_headers").then(s=>{if(s&&s.success){const f=d({},a);if(s.data.sendinBlueField){f.default.fields=s.data.sendinBlueField;const{fields:p}=f.default;f.field_map=Object.values(p).filter(n=>n.required).map(n=>({formField:"",sendinBlueField:n.fieldId,required:!0})),i({show:!0,msg:l("Sendinblue fields refreshed","bit-integrations")})}else i({show:!0,msg:l("No Sendinblue fields found. Try changing the header row number or try again","bit-integrations")});t(d({},f))}else i({show:!0,msg:l("Sendinblue fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},q=a=>{var e;const t=a!=null&&a.field_map?a.field_map.filter(i=>!i.formField&&i.sendinBlueField&&i.required):[];return!(a.lists&&((e=a.lists)==null?void 0:e.length)===void 0||t.length>0)};export{T as a,L as b,q as c,w as h,F as r};
