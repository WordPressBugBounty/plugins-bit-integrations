var _=Object.defineProperty;var b=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var m=(t,e,a)=>e in t?_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))k.call(e,a)&&m(t,a,e[a]);if(b)for(var a of b(e))y.call(e,a)&&m(t,a,e[a]);return t};import{_ as c,b as u}from"./bi.751.13.js";const D=(t,e,a,l,f,i,r,n,s)=>{let g=d({},e);if(r){const o=d({},n);o[t.target.name]="",s(d({},o))}switch(g[t.target.name]=t.target.value,t.target.name){case"listId":g=listChange(g,l,a,f,i);break}a(d({},g))},S=(t,e,a,l)=>{a(!0);const f={clientId:t.clientId,clientSecret:t.clientSecret,baseUrl:t.baseUrl,tokenDetails:t.tokenDetails};u(f,"mautic_get_fields").then(i=>{var r,n;if(i&&i.success){const s=d({},t);i.data&&(s.default||(s.default={}),(r=s.default)!=null&&r.fields||(s.default.fields={}),s.default.fields=i.data,s.field_map=I(i.data)),(n=i.data)!=null&&n.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),l({show:!0,msg:c("Fields refreshed","bit-integrations")}),e(d({},s))}else l({show:!0,msg:c("Fields refresh failed. please try again","bit-integrations")});a(!1)}).catch(()=>a(!1))},A=(t,e,a,l)=>{a(!0);const f={clientId:t.clientId,clientSecret:t.clientSecret,baseUrl:t.baseUrl,tokenDetails:t.tokenDetails};u(f,"mautic_get_tags").then(i=>{var r,n;if(i&&i.success){const s=d({},t);i.data&&(s.default||(s.default={}),(r=s.default)!=null&&r.tags||(s.default.tags={}),s.default.tags=i.data),(n=i.data)!=null&&n.tokenDetails&&(s.tokenDetails=i.data.tokenDetails),l({show:!0,msg:c("Tags refreshed","bit-integrations")}),e(d({},s))}else l({show:!0,msg:c("Tags refresh failed. please try again","bit-integrations")});a(!1)}).catch(()=>a(!1))},R=t=>{const e={},l=window.location.href.replace(`${window.opener.location.href}`,"").split("&");l&&l.forEach(f=>{const i=f.split("=");i[1]&&(e[i[0]]=i[1])}),localStorage.setItem(`__${t}`,JSON.stringify(e)),window.close()},v=(t,e,a,l,f,i,r)=>{if(!e.clientId||!e.clientSecret||!e.baseUrl){l({clientId:e.clientId?"":c("Client Id can't be empty","bit-integrations"),clientSecret:e.clientSecret?"":c("Secret key can't be empty","bit-integrations"),baseUrl:e.baseUrl?"":c("Base Url can't be empty","bit-integrations")});return}i(!0);const n=`${e.baseUrl}/oauth/v2/authorize?client_id=${e.clientId}&redirect_uri=${encodeURIComponent(window.location.href)}&response_type=code`,s=window.open(n,t,"width=400,height=609,toolbar=off"),g=setInterval(()=>{if(s.closed){clearInterval(g);let o={},p=!1;const w=localStorage.getItem(`__${t}`);if(w&&(p=!0,o=JSON.parse(w),localStorage.removeItem(`__${t}`),o.code.search("#"))){const[h]=o.code.split("#");o.code=h}if(!o.code||o.error||!o||!p){const h=o.error?`Cause: ${o.error}`:"";r({show:!0,msg:`${c("Authorization failed","bit-integrations")} ${h}. ${c("please try again","bit-integrations")}`}),i(!1)}else{const h=d({},e);h.accountServer=o["accounts-server"],F(o,h,a,f,i,r)}}},500)},F=(t,e,a,l,f,i)=>{const r=d({},t);r.clientId=e.clientId,r.clientSecret=e.clientSecret,r.baseUrl=e.baseUrl,r.redirectURI=window.location.href,u(r,"mautic_generate_token").then(n=>n).then(n=>{if(n&&n.success){const s=d({},e);s.tokenDetails=n.data,a(s),l(!0),i({show:!0,msg:c("Authorized Successfully","bit-integrations")})}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?i({show:!0,msg:`${c("Authorization failed Cause:","bit-integrations")}${n.data.data||n.data}. ${c("please try again","bit-integrations")}`}):i({show:!0,msg:c("Authorization failed. please try again","bit-integrations")});f(!1)})},q=t=>!((t.field_map?t.field_map.filter(a=>!a.formField&&!a.mauticField):[]).length>0),I=t=>{const e=t.filter(a=>a.required===!0);return e.length>0?e.map(a=>({formField:"",mauticField:a.fieldAlias})):[{formField:"",mauticField:""}]};export{S as a,v as b,q as c,A as g,D as h,R as s};
