var g=Object.defineProperty;var r=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var o=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,n=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&o(e,a,t[a]);if(r)for(var a of r(t))m.call(t,a)&&o(e,a,t[a]);return e};import{c as p,_ as h}from"./bi.223.0.js";const _=(e,t,a,i)=>{const f=n({},e),d={bot_api_key:f.bot_api_key};a(!0),p(d,"refresh_get_updates").then(s=>{s&&s.success?(f.default||(f.default={}),s.data.telegramChatLists&&(f.default.telegramChatLists=s.data.telegramChatLists),i({show:!0,msg:h("Chat list refreshed","bit-integrations")}),t(n({},f))):s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?i({show:!0,msg:`${h("Chat list refresh failed Cause:","bit-integrations")}${s.data.data||s.data}. ${h("please try again","bit-integrations")}`}):i({show:!0,msg:h("Chat list refresh failed. please try again","bit-integrations")}),a(!1)}).catch(()=>a(!1))},b=(e,t,a)=>{const i=n({},t);i.name=e.target.value,a(n({},i))};export{b as h,_ as r};
