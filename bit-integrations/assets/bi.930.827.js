var y=Object.defineProperty;var d=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var f=(e,a,t)=>a in e?y(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,o=(e,a)=>{for(var t in a||(a={}))F.call(a,t)&&f(e,t,a[t]);if(d)for(var t of d(a))m.call(a,t)&&f(e,t,a[t]);return e};import{_ as n,c as g,V as h}from"./bi.560.0.js";const k=(e,a,t)=>{const l=o({},a),{name:r}=e.target;e.target.value!==""?l[r]=e.target.value:delete l[r],t(o({},l))},p=(e,a,t,l,r,s)=>{if(!e.api_key){t({api_key:e.api_key?"":n("Api Key can't be empty","bit-integrations")});return}t({}),r(!0);const c={username:e.userName,api_key:e.api_key};g(c,"kirimEmail_authorization").then(i=>i).then(i=>{if(i&&i.success){const u=o({},e);u.default||(u.default={}),i.data&&(u.default.allLists=i.data),a(u),l(!0),s({show:!0,msg:n("Authorized Successfully","bit-integrations")})}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?s({show:!0,msg:`${n("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${n("please try again","bit-integrations")}`}):s({show:!0,msg:n("Authorization failed. please try again","bit-integrations")});r(!1)})},A=(e,a,t,l)=>{t(!0);const r={username:e.userName,api_key:e.api_key};g(r,"kirimEmail_fetch_all_list").then(s=>{if(s&&s.success){const c=o({},e);c.default||(c.default={}),s.data&&(c.default.allLists=s.data),a(o({},c)),t(!1),h.success(n("All list fetched successfully","bit-integrations"));return}t(!1),h.error(n("Kirim Email list fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},w=e=>!((e?e==null?void 0:e.filter(t=>!t.formField||!t.kirimEmailFormField):[]).length>0),z=e=>{const a=e==null?void 0:e.subscriberFields.filter(t=>t.required===!0);return a.length>0?a.map(t=>({formField:"",kirimEmailFormField:t.key})):[{formField:"",kirimEmailFormField:""}]};export{A as a,p as b,w as c,z as g,k as h};
