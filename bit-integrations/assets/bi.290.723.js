var g=Object.defineProperty;var o=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var n=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&n(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&n(e,a,t[a]);return e};import{c as p,_ as f}from"./bi.63.0.js";import{u as l}from"./bi.269.440.js";const u=(e,t,a,r)=>{const i=h({},e),d={bot_api_key:i.bot_api_key};a(!0),p(d,"refresh_get_updates").then(s=>{s&&s.success?(i.default||(i.default={}),s.data.telegramChatLists&&(i.default.telegramChatLists=s.data.telegramChatLists),r({show:!0,msg:f("Chat list refreshed","bit-integrations")}),t(h({},i))):s&&s.data&&s.data.data||!s.success&&typeof s.data=="string"?r({show:!0,msg:`${f("Chat list refresh failed Cause:","bit-integrations")}${s.data.data||s.data}. ${f("please try again","bit-integrations")}`}):r({show:!0,msg:f("Chat list refresh failed. please try again","bit-integrations")}),a(!1)}).catch(()=>a(!1))},y=(e,t,a)=>{a(r=>l(r,i=>{i.name=e.target.value}))};export{y as h,u as r};
