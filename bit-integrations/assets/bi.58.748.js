var b=Object.defineProperty;var g=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var w=(a,s,e)=>s in a?b(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,c=(a,s)=>{for(var e in s||(s={}))I.call(s,e)&&w(a,e,s[e]);if(g)for(var e of g(s))k.call(s,e)&&w(a,e,s[e]);return a};import{_ as d,c as h,s as p}from"./bi.317.0.js";const q=(a,s,e,o,n)=>{const t=c({},s),{name:i}=a.target;a.target.value!==""?(t[i]=a.target.value,i==="boardId"&&(B(t,e,o,n),$(t,e,o,n))):delete t[i],e(c({},t))},A=(a,s,e,o,n)=>{o(!0);const t={formID:a,clientId:s.clientId,accessToken:s.accessToken};h(t,"trello_fetch_all_board").then(i=>{if(i&&i.success){const r=c({},s);r.default||(r.default={}),i.data.allBoardlist&&(r.default.allBoardlist=i.data.allBoardlist),n({show:!0,msg:d("Board list refreshed","bit-integrations")}),e(c({},r))}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?n({show:!0,msg:p(d("Board list refresh failed Cause: %s. please try again","bit-integrations"),i.data.data||i.data)}):n({show:!0,msg:d("Board list failed. please try again","bit-integrations")});o(!1)}).catch(()=>o(!1))},B=(a,s,e,o)=>{e(!0);const n={clientId:a.clientId,boardId:a.boardId,accessToken:a.accessToken};h(n,"trello_fetch_all_list_Individual_board").then(t=>{var i;if(t&&t.success){const r=c({},a);r.default||(r.default={}),(i=t.data)!=null&&i.alllists&&(r.default.alllists=t.data.alllists),o({show:!0,msg:d("Board list refreshed","bit-integrations")}),s(c({},r))}else t&&t.data&&t.data.data||!t.success&&typeof t.data=="string"?o({show:!0,msg:p(d("Board list refresh failed Cause: %s. please try again","bit-integrations"),t.data.data||t.data)}):o({show:!0,msg:d("Board list failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},$=(a,s,e,o)=>{e(!0);const n={clientId:a.clientId,boardId:a.boardId,accessToken:a.accessToken};h(n,"trello_fetch_all_custom_fields").then(t=>{if(t&&t.success){const i=c({},a);i.customFields=t.data,i.custom_field_map=T(t.data),o({show:!0,msg:d("Custom Fields refreshed","bit-integrations")}),s(c({},i))}else t&&t.data&&t.data.data||!t.success&&typeof t.data=="string"?o({show:!0,msg:p(d("Custom Fields refresh failed Cause: %s. please try again","bit-integrations"),t.data.data||t.data)}):o({show:!0,msg:d("Custom Fields failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},C=a=>{const s={},o=window.location.href.replace(`${window.opener.location.href}`,"").split("&");o&&o.forEach(n=>{const t=n.split("=");t[1]&&(s[t[0]]=t[1])}),localStorage.setItem(`__${a}`,JSON.stringify(s)),window.close()},M=(a,s,e,o,n,t,i,r)=>{if(!e.clientId){n({clientId:e.clientId?"":d("Client Id can't be empty","bit-integrations")});return}i(!0);const _=`https://trello.com/1/authorize?expiration=never&name=MyPersonalToken&scope=read,write&response_type=token&key=${e.clientId}&return_url=${encodeURIComponent(window.location.href)}/&response_type=token`,F=window.open(_,a,"width=400,height=609,toolbar=off"),y=setInterval(()=>{if(F.closed){clearInterval(y);let l={},u=!1;const m=localStorage.getItem(`__${a}`);if(m&&(u=!0,l=JSON.parse(m),localStorage.removeItem(`__${a}`),l.token&&(l.code=l.token)),!l.code||l.error||!l||!u){const f=l.error?`Cause: ${l.error}`:"";r({show:!0,msg:`${d("Authorization Failed","bit-integrations")} ${f}. ${d("please try again","bit-integrations")}`}),i(!1)}else{const f=c({},e);f.accessToken=l.code,o(f),t(!0),r({show:!0,msg:d("Authorized Successfully","bit-integrations")})}}i(!1)},500)},T=a=>{const s=a.filter(e=>e.required===!0);return s.length>0?s.map(e=>({formField:"",trelloFormField:e.key})):[{formField:"",trelloFormField:""}]},P=a=>!((a.field_map?a.field_map.filter(e=>!e.formField&&!e.trelloFormField):[]).length>0);export{A as a,B as b,M as c,P as d,$ as f,T as g,q as h,C as s};
