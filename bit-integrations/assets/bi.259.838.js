var I=Object.defineProperty,S=Object.defineProperties;var R=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var b=(t,i,e)=>i in t?I(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,l=(t,i)=>{for(var e in i||(i={}))v.call(i,e)&&b(t,e,i[e]);if($)for(var e of $(i))q.call(i,e)&&b(t,e,i[e]);return t},_=(t,i)=>S(t,R(i));import{_ as c,b as p,c as h}from"./bi.433.0.js";const U=(t,i,e)=>{const a=l({},i),{name:r}=t.target;t.target.value!==""?a[r]=t.target.value:delete a[r],e(l({},a))},k=t=>{let i=[];t.actionName==="campaign"?i=t==null?void 0:t.campaignFields:t.actionName==="contact"&&(i=t==null?void 0:t.contactFields);const e=i&&i.filter(a=>a.required===!0);return e.length>0?e.map(a=>({formField:"",lionDeskFormField:a.key})):[{formField:"",lionDeskFormField:""}]},P=t=>!((t!=null&&t.field_map?t.field_map.filter(e=>!e.formField||!e.lionDeskFormField||e.formField==="custom"&&!e.customValue||e.lionDeskFormField==="customFieldKey"&&!e.customFieldKey):[]).length>0),K=t=>{const i={},a=window.location.href.replace(`${window.opener.location.href}/redirect`,"").split("&");a&&a.forEach(r=>{const s=r.split("=");s[1]&&(i[s[0]]=s[1])}),localStorage.setItem(`__${t}`,JSON.stringify(i)),window.close()},W=(t,i,e,a,r,s,o,u,g)=>{if(!e.clientId||!e.clientSecret){r({clientId:e.clientId?"":c("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":c("Secret key can't be empty","bit-integrations")});return}o(!0);const n=`https://api-v2.liondesk.com/oauth2/authorize?response_type=code&client_id=${e.clientId}&state=${encodeURIComponent(window.location.href)}/redirect&redirect_uri=${encodeURIComponent(`${g.api.base}`)}/redirect&scope=['write','read']`,f=window.open(n,t,"width=400,height=609,toolbar=off"),y=setInterval(()=>{if(f.closed){clearInterval(y);let d={},w=!1;const F=localStorage.getItem(`__${t}`);if(F&&(w=!0,d=JSON.parse(F),localStorage.removeItem(`__${t}`)),!d.code||d.error||!d||!w){const m=d.error?`Cause: ${d.error}`:"";u({show:!0,msg:`${c("Authorization Failed","bit-integrations")} ${m}. ${c("please try again","bit-integrations")}`}),o(!1)}else{const m=l({},e);m.accountServer=d["accounts-server"],z(i,d,m,a,s,o,u,g)}}},500)},z=(t,i,e,a,r,s,o,u)=>{const g=l({},i);g.clientId=e.clientId,g.clientSecret=e.clientSecret,g.redirectURI=`${u.api.base}/redirect`,p(g,`${t}_generate_token`).then(n=>n).then(n=>{if(n&&n.success){const f=l({},e);f.tokenDetails=n.data,a(f),r(!0),o({show:!0,msg:c("Authorized Successfully","bit-integrations")})}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?o({show:!0,msg:`${c("Authorization failed Cause:","bit-integrations")}${n.data.data||n.data}. ${c("please try again","bit-integrations")}`}):o({show:!0,msg:c("Authorization failed. please try again","bit-integrations")});s(!1)})},E=(t,i,e,a)=>{e(!0);const r={token_details:t.tokenDetails,client_id:t.clientId,client_secret:t.clientSecret,redirect_uri:`${a.api.base}/redirect`};p(r,"lionDesk_fetch_custom_fields").then(s=>{if(s&&s.success){e(!1),s.data?(i(o=>{const u=l({},o);return u.customFields=s.data,u}),h.success(c("Custom fields also fetched successfully","bit-integrations"))):h.error(c("No custom fields found","bit-integrations"));return}e(!1),h.error(c(`Custom fields fetching failed ${s.data}`,"bit-integrations"))})},J=(t,i,e)=>{e(_(l({},e),{tags:!0}));const a={token_details:t.tokenDetails,client_id:t.clientId,client_secret:t.clientSecret,redirect_uri:t.redirectURI};p(a,"lionDesk_fetch_all_tags").then(r=>{if(r&&r.success){e(_(l({},e),{tags:!1})),r.data?(i(s=>{const o=l({},s);return o.tags=r.data,o}),h.success(c("Tags fetched successfully","bit-integrations"))):h.error(c("No Tags found","bit-integrations"));return}e(_(l({},e),{tags:!1})),h.error(c(`Tags fetching failed ${r.data}`,"bit-integrations"))})};export{k as a,E as b,P as c,W as d,J as g,U as h,K as s};
