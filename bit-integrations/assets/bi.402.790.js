var b=Object.defineProperty;var w=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var _=(e,i,t)=>i in e?b(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,o=(e,i)=>{for(var t in i||(i={}))F.call(i,t)&&_(e,t,i[t]);if(w)for(var t of w(i))S.call(i,t)&&_(e,t,i[t]);return e};import{_ as l,b as h,c as f,A as k}from"./bi.919.15.js";const R=(e,i,t,c,n)=>{const a=o({},i),{name:s}=e.target;e.target.value!==""?(a[s]=e.target.value,A(a,t,c,n),$(a,t,c,n)):delete a[s],t(o({},a))},v=(e,i,t,c)=>{t(!0);const n={tokenDetails:e.tokenDetails,clientId:e.clientId,clientSecret:e.clientSecret};h(n,"mailup_fetch_all_list").then(a=>{if(a&&a.success){const s=o({},e);a.data&&(s.allList=a.data),c({show:!0,msg:l("Mailup all Lists fetched successfully.","bit-integrations")}),i(o({},s))}else c({show:!0,msg:l("Mailup lists fetching failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},$=(e,i,t,c)=>{t(!0);const n={tokenDetails:e.tokenDetails,clientId:e.clientId,clientSecret:e.clientSecret};h(n,"mailup_fetch_all_field").then(a=>{a&&a.success?(i(s=>k(s,d=>{d.staticFields=a.data,d.field_map=D(d)})),c({show:!0,msg:l("Mailup all fields fetched successfully","bit-integrations")})):c({show:!0,msg:l("Mailup fields fetching failed. please try again","bit-integrations")}),t(!1)}).catch(()=>t(!1))},A=(e,i,t,c)=>{t(!0);const n={tokenDetails:e.tokenDetails,clientId:e.clientId,clientSecret:e.clientSecret,listId:e.listId};h(n,"mailup_fetch_all_group").then(a=>{if(a&&a.success){const s=o({},e);a.data&&(s.allGroup=a.data),c({show:!0,msg:l("All groups fetched successfully","bit-integrations")}),i(o({},s))}else c({show:!0,msg:l("Groups fetching failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},M=e=>{const i={},c=window.location.href.replace(`${window.opener.location.href}`,"").split("&");c&&c.forEach(n=>{const a=n.split("=");a[1]&&(i[a[0]]=a[1])}),localStorage.setItem(`__${e}`,JSON.stringify(i)),window.close()},P=(e,i,t,c,n,a,s)=>{if(!i.clientId){c({clientId:i.clientId?"":l("Client ID can't be empty","bit-integrations")});return}if(!i.clientSecret){c({clientSecret:i.clientSecret?"":l("Client Secret can't be empty","bit-integrations")});return}a(!0);const d=`https://services.mailup.com/Authorization/OAuth/LogOn?client_id=${i.clientId}&response_type=code&redirect_uri=${encodeURIComponent(window.location.href)}`,m=window.open(d,e,"width=400,height=609,toolbar=off"),y=setInterval(()=>{if(m.closed){clearInterval(y);let r={},g=!1;const p=localStorage.getItem(`__${e}`);if(p&&(g=!0,r=JSON.parse(p),localStorage.removeItem(`__${e}`),r.token&&(r.code=r.token)),!r.code||r.error||!r||!g){const u=r.error?`Cause: ${r.error}`:"";s({show:!0,msg:`${l("Authorization Failed","bit-integrations")} ${u}. ${l("please try again","bit-integrations")}`}),a(!1)}else{const u=o({},i);I(r,u,t,n,a)}}a(!1)},500)},I=(e,i,t,c,n)=>{const a=o({},e);a.clientId=i.clientId,a.clientSecret=i.clientSecret,h(a,"mailup_authorization").then(s=>{if(s&&s.success){const d=o({},i);d.tokenDetails=s.data,t(d),c(!0),f.success(l("Authorized Successfully","bit-integrations"))}else s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?f.error(`${l("Authorization failed Cause:","bit-integrations")}${s.data.data||s.data}. ${l("please try again","bit-integrations")}`):f.error(l("Authorization failed. please try again","bit-integrations"));n(!1)})},D=e=>{const i=e==null?void 0:e.staticFields.filter(t=>t.required===!0);return i.length>0?i.map(t=>({formField:"",mailupFormField:t.key})):[{formField:"",mailupFormField:""}]},G=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.mailupFormField||!t.formField==="custom"&&!t.customValue):[]).length>0);export{A as a,$ as b,G as c,P as d,v as f,R as h,M as s};
