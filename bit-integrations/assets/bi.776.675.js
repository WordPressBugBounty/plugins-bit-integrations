var f=Object.defineProperty;var g=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(e,s,t)=>s in e?f(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,c=(e,s)=>{for(var t in s||(s={}))m.call(s,t)&&h(e,t,s[t]);if(g)for(var t of g(s))w.call(s,t)&&h(e,t,s[t]);return e};import{_ as i,b as p,c as b}from"./bi.860.15.js";const _=(e,s,t,l,d,n,r,a)=>{const o=c({},s),{name:u}=e.target;e.target.value!==""?o[u]=e.target.value:delete o[u],t(c({},o))},z=(e,s,t,l)=>{t(!0);const d={username:e.username,password:e.password},n=p(null,"rapidmail_get_all_recipients",d,"GET").then(r=>{if(r&&r.success){const a=c({},e);return a.default||(a.default={}),r.data.recipientlists&&(a.default.recipientlists=r.data.recipientlists),s(c({},a)),t(!1),i("Recipientlist refreshed successfully","bit-integrations")}else return t(!1),i("Recipientlist refresh failed. please try again","bit-integrations")});b.promise(n,{success:r=>r,error:i("Error Occurred","bit-integrations"),loading:i("Loading Recipientslist...")})},A=e=>{const s=e==null?void 0:e.recipientsFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",rapidmailFormField:t.key})):[{formField:"",rapidmailFormField:""}]},R=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.rapidmailFormField||!t.formField==="custom"&&!t.customValue):[]).length>0),k=(e,s,t,l,d,n)=>{if(!e.username||!e.password){t({username:e.username?"":i("Username can't be empty","bit-integrations"),password:e.password?"":i("Password can't be empty","bit-integrations")});return}t({}),d(!0);const r={username:e.username,password:e.password};p(r,"rapidmail_authorization").then(a=>a).then(a=>{if(a&&a.success){const o=c({},e);o.tokenDetails=a.data,s(o),l(!0),n({show:!0,msg:i("Authorized Successfully","bit-integrations")})}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?n({show:!0,msg:`${i("Authorization failed Cause:","bit-integrations")}${a.data.data||a.data}. ${i("please try again","bit-integrations")}`}):n({show:!0,msg:i("Authorization failed. please try again","bit-integrations")});d(!1)})};export{z as a,k as b,R as c,A as g,_ as h};
