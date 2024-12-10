var m=Object.defineProperty;var b=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var _=(e,t,a)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))k.call(t,a)&&_(e,a,t[a]);if(b)for(var a of b(t))U.call(t,a)&&_(e,a,t[a]);return e};import{_ as o,c as u}from"./bi.247.0.js";const $=(e,t,a,l,f,i,r,n,s)=>{let g=d({},t);if(r){const c=d({},n);c[e.target.name]="",s(d({},c))}switch(g[e.target.name]=e.target.value,e.target.name){case"listId":g=listChange(g,l,a,f,i);break}a(d({},g))},S=(e,t,a,l)=>{a(!0);const f={clientId:e.clientId,clientSecret:e.clientSecret,baseUrl:e.baseUrl,tokenDetails:e.tokenDetails};u(f,"mautic_get_fields").then(i=>{var r,n;if(i&&i.success){const s=d({},e);i.data&&(s.default||(s.default={}),(r=s.default)!=null&&r.fields||(s.default.fields={}),s.default.fields=i.data,s.field_map=D(i.data)),(n=i.data)!=null&&n.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),l({show:!0,msg:o("Fields refreshed","bit-integrations")}),t(d({},s))}else l({show:!0,msg:o("Fields refresh failed. please try again","bit-integrations")});a(!1)}).catch(()=>a(!1))},A=(e,t,a,l)=>{a(!0);const f={clientId:e.clientId,clientSecret:e.clientSecret,baseUrl:e.baseUrl,tokenDetails:e.tokenDetails};u(f,"mautic_get_tags").then(i=>{var r,n;if(i&&i.success){const s=d({},e);i.data&&(s.default||(s.default={}),(r=s.default)!=null&&r.tags||(s.default.tags={}),s.default.tags=i.data),(n=i.data)!=null&&n.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),l({show:!0,msg:o("Tags refreshed","bit-integrations")}),t(d({},s))}else l({show:!0,msg:o("Tags refresh failed. please try again","bit-integrations")});a(!1)}).catch(()=>a(!1))},R=(e,t,a,l)=>{a(!0);const f={clientId:e.clientId,clientSecret:e.clientSecret,baseUrl:e.baseUrl,tokenDetails:e.tokenDetails};u(f,"mautic_get_users").then(i=>{var r,n;if(i&&i.success){const s=d({},e);i.data&&(s.default||(s.default={}),(r=s.default)!=null&&r.users||(s.default.users={}),s.default.users=i.data.allUsers),(n=i.data)!=null&&n.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),l({show:!0,msg:o("Contact Owner refreshed","bit-integrations")}),t(d({},s))}else l({show:!0,msg:o("Contact Owner refresh failed. please try again","bit-integrations")});a(!1)}).catch(()=>a(!1))},q=e=>{const t={},l=window.location.href.replace(`${window.opener.location.href}`,"").split("&");l&&l.forEach(f=>{const i=f.split("=");i[1]&&(t[i[0]]=i[1])}),localStorage.setItem(`__${e}`,JSON.stringify(t)),window.close()},v=(e,t,a,l,f,i,r)=>{if(!t.clientId||!t.clientSecret||!t.baseUrl){l({clientId:t.clientId?"":o("Client Id can't be empty","bit-integrations"),clientSecret:t.clientSecret?"":o("Secret key can't be empty","bit-integrations"),baseUrl:t.baseUrl?"":o("Base Url can't be empty","bit-integrations")});return}i(!0);const n=`${t.baseUrl}/oauth/v2/authorize?client_id=${t.clientId}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code`,s=window.open(n,e,"width=400,height=609,toolbar=off"),g=setInterval(()=>{if(s.closed){clearInterval(g);let c={},w=!1;const p=localStorage.getItem(`__${e}`);if(p&&(w=!0,c=JSON.parse(p),localStorage.removeItem(`__${e}`),c.code.search("#"))){const[h]=c.code.split("#");c.code=h}if(!c.code||c.error||!c||!w){const h=c.error?`Cause: ${c.error}`:"";r({show:!0,msg:`${o("Authorization failed","bit-integrations")} ${h}. ${o("please try again","bit-integrations")}`}),i(!1)}else{const h=d({},t);h.accountServer=c["accounts-server"],y(c,h,a,f,i,r)}}},500)},y=(e,t,a,l,f,i)=>{const r=d({},e);r.clientId=t.clientId,r.clientSecret=t.clientSecret,r.baseUrl=t.baseUrl,r.redirectURI=window.location.href,u(r,"mautic_generate_token").then(n=>n).then(n=>{if(n&&n.success){const s=d({},t);s.tokenDetails=n.data,a(s),l(!0),i({show:!0,msg:o("Authorized Successfully","bit-integrations")})}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?i({show:!0,msg:`${o("Authorization failed Cause:","bit-integrations")}${n.data.data||n.data}. ${o("please try again","bit-integrations")}`}):i({show:!0,msg:o("Authorization failed. please try again","bit-integrations")});f(!1)})},z=e=>!((e.field_map?e.field_map.filter(a=>!a.formField&&!a.mauticField):[]).length>0),D=e=>{const t=e.filter(a=>a.required===!0);return t.length>0?t.map(a=>({formField:"",mauticField:a.fieldAlias})):[{formField:"",mauticField:""}]};export{R as a,S as b,z as c,v as d,A as g,$ as h,q as s};
