var m=Object.defineProperty;var b=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(e,o,t)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,s=(e,o)=>{for(var t in o||(o={}))I.call(o,t)&&f(e,t,o[t]);if(b)for(var t of b(o))_.call(o,t)&&f(e,t,o[t]);return e};import{_ as n,c as u,b as $}from"./bi.541.15.js";const y=(e,o,t)=>{const i=s({},o),{name:c}=e.target;e.target.value!==""?i[c]=e.target.value:delete i[c],t(s({},i))},k=e=>!((e?e.filter(t=>!t.formField||!t.googleContactsFormField):[]).length>0),v=(e,o,t,i,c)=>{if(!e.clientId||!e.clientSecret){c({clientId:e.clientId?"":n("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":n("Client Secret can't be empty","bit-integrations")});return}i(!0);const a=`https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/contacts&access_type=offline&prompt=consent&response_type=code&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${btcbi.api.base}/redirect`)}&client_id=${e.clientId}`,d=window.open(a,"googleContacts","width=400,height=609,toolbar=off"),F=setInterval(()=>{if(d.closed){clearInterval(F);let r={},p=!1;const h=localStorage.getItem("__googleContacts");if(h&&(p=!0,r=JSON.parse(h),localStorage.removeItem("__googleContacts")),!r.code||r.error||!r||!p){const g=r.error?`Cause: ${r.error}`:"";u.error(`${n("Authorization Failed","bit-integrations")} ${g}. ${n("please try again","bit-integrations")}`),i(!1)}else{const g=s({},e);g.accountServer=r["accounts-server"],w(r,g,o,t,i)}}},500)},w=(e,o,t,i,c)=>{const l=s({},e);l.clientId=o.clientId,l.clientSecret=o.clientSecret,l.redirectURI=`${btcbi.api.base}/redirect`,$(l,"googleContacts_authorization").then(a=>{if(a&&a.success){const d=s({},o);d.tokenDetails=a.data,t(d),i(!0),u.success(n("Authorized Successfully","bit-integrations"))}else a&&a.data&&a.data.data||!a.success&&typeof a.data=="string"?u.error(`${n("Authorization failed Cause:","bit-integrations")}${a.data.data||a.data}. ${n("please try again","bit-integrations")}`):u.error(n("Authorization failed. please try again","bit-integrations"));c(!1)})},R=e=>{const o=e==null?void 0:e.default.filter(t=>t.required===!0);return o.length>0?o.map(t=>({formField:"",googleContactsFormField:t.key})):[{formField:"",googleContactsFormField:""}]};export{v as a,k as c,R as g,y as h};
