var _=Object.defineProperty,w=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var F=(e,i,t)=>i in e?_(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,l=(e,i)=>{for(var t in i||(i={}))I.call(i,t)&&F(e,t,i[t]);if(b)for(var t of b(i))y.call(i,t)&&F(e,t,i[t]);return e},f=(e,i)=>w(e,S(i));import{_ as o,b as m}from"./bi.919.15.js";const v=(e,i,t,s,r,c,n,a,u)=>{let d=l({},i);if(n){const h=l({},a);h[e.target.name]="",u(l({},h))}d[e.target.name]=e.target.value,t(l({},d))},z=(e,i,t,s,r,c)=>{if(!e.clientId||!e.clientSecret){t({clientId:e.clientId?"":o("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":o("Secret key can't be empty","bit-integrations")});return}r(!0);const n=`https://accounts.infusionsoft.com/app/oauth/authorize?scope=full&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}&client_id=${e.clientId}`,a=window.open(n,"keap","width=400,height=609,toolbar=off"),u=setInterval(()=>{if(a.closed){clearInterval(u);let d={},h=!1;const p=localStorage.getItem("__keap");if(p&&(h=!0,d=JSON.parse(p),localStorage.removeItem("__keap")),!d.code||d.error||!d||!h){const g=d.error?`Cause: ${d.error}`:"";c({show:!0,msg:`${o("Authorization failed","bit-integrations")} ${g}. ${o("please try again","bit-integrations")}`}),r(!1)}else{const g=l({},e);g.accountServer=d["accounts-server"],$(d,g,i,s,r,c)}}},500)},$=(e,i,t,s,r,c)=>{const n=l({},e);n.clientId=i.clientId,n.clientSecret=i.clientSecret,n.redirectURI=`${btcbi.api.base}/redirect`,m(n,"keap_generate_token").then(a=>a).then(a=>{if(a&&a.success){const u=l({},i);u.tokenDetails=a.data,t(u),s(!0),c({show:!0,msg:o("Authorized Successfully","bit-integrations")})}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?c({show:!0,msg:`${o("Authorization failed Cause:","bit-integrations")}${a.data.data||a.data}. ${o("please try again","bit-integrations")}`}):c({show:!0,msg:o("Authorization failed. please try again","bit-integrations")});r(!1)})},A=e=>!((e.field_map?e.field_map.filter(t=>!t.formField&&!t.keapField):[]).length>0),k=e=>{const t=[...e==null?void 0:e.contactFields,...e==null?void 0:e.customFields].filter(s=>s.required===!0);return t.length>0?t.map(s=>({formField:"",keapField:s.key})):[{formField:"",keapField:""}]},D=(e,i,t)=>{t(f(l({},t),{tags:!0}));const s={clientId:e.clientId,clientSecret:e.clientSecret,tokenDetails:e.tokenDetails};m(s,"keap_fetch_all_tags").then(r=>{if(r&&r.success){const c=l({},e);r.data&&(c.tags=r.data),i(c),t(!1),setSnackbar({show:!0,msg:o("Tag Fetched Successfully","bit-integrations")});return}t(f(l({},t),{tags:!1})),setSnackbar({show:!0,msg:o("Tag Couldn't Fetched Successfully","bit-integrations")})})},q=(e,i,t,s,r)=>{s(!0);const c={id:e,clientId:i.clientId,clientSecret:i.clientSecret,tokenDetails:i.tokenDetails};m(c,"keap_fetch_all_custom_fields").then(n=>{if(n&&n.success){const a=l({},i);n.data&&(a.customFields=n.data,a.field_map=k(a)),t(a),s(!1),r({show:!0,msg:o("Custom Field Fetched Successfully","bit-integrations")});return}s(!1),r({show:!0,msg:o("Custom Field Couldn't Fetched Successfully","bit-integrations")})})};export{k as a,z as b,A as c,D as g,v as h,q as r};
