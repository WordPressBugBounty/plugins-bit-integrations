var b=Object.defineProperty,p=Object.defineProperties;var F=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var l=(e,s,t)=>s in e?b(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,r=(e,s)=>{for(var t in s||(s={}))h.call(s,t)&&l(e,t,s[t]);if(_)for(var t of _(s))g.call(s,t)&&l(e,t,s[t]);return e},n=(e,s)=>p(e,F(s));import{_ as i,c as w,d as m}from"./bi.107.0.js";const q=(e,s,t)=>{const u=r({},s),{name:a}=e.target;e.target.value!==""?u[a]=e.target.value:delete u[a],t(r({},u))},v=e=>{const s=e==null?void 0:e.staticFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",smailyFormField:t.key})):[{formField:"",smailyFormField:""}]},I=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.smailyFormField||t.formField==="custom"&&!t.customValue||t.smailyFormField==="customFieldKey"&&!t.customFieldKey):[]).length>0),P=(e,s,t,u,a,d)=>{if(!e.name||!e.subdomain||!e.api_user_name||!e.api_user_password){t({name:e.name?"":i("Integration Name can't be empty","bit-integrations"),subdomain:e.subdomain?"":i("Subdomain can't be empty","bit-integrations"),api_user_name:e.api_user_name?"":i("Api user name can't be empty","bit-integrations"),api_user_password:e.api_user_password?"":i("Api user password can't be empty","bit-integrations")});return}t({}),d(n(r({},a),{auth:!0}));const c={subdomain:e.subdomain,api_user_name:e.api_user_name,api_user_password:e.api_user_password};w(c,"smaily_authentication").then(o=>{if(o&&o.success){u(!0),d(n(r({},a),{auth:!1})),m.success(i("Authorized Successfully","bit-integrations"));return}d(n(r({},a),{auth:!1})),m.error(i("Authorized failed, Please enter valid subdomain name & API credentials","bit-integrations"))})};export{I as c,v as g,q as h,P as s};
