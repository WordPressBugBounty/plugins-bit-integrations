var g=Object.defineProperty;var c=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var o=(e,s,i)=>s in e?g(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,l=(e,s)=>{for(var i in s||(s={}))m.call(s,i)&&o(e,i,s[i]);if(c)for(var i of c(s))_.call(s,i)&&o(e,i,s[i]);return e};import{c as h,i as d}from"./bi.4.0.js";const w=(e,s,i)=>{const a=l({},s);a.name=e.target.value,i(l({},a))},M=(e,s,i,a)=>{const f={account_id:e.account_id,api_key:e.api_key};h(f,"mailify_lists").then(r=>{if(r&&r.success){const t=l({},e);r.data?(t.default||(t.default={}),t.default.mailifyLists=r.data,a({show:!0,msg:d("Mailify lists refreshed","bit-integrations")})):a({show:!0,msg:d("No Mailify lists found. Try changing the header row number or try again","bit-integrations")}),s(l({},t))}else a({show:!0,msg:d("Mailify lists refresh failed. please try again","bit-integrations")});i(!1)}).catch(()=>i(!1))},F=(e,s,i,a)=>{const f={account_id:e.account_id,api_key:e.api_key,list_id:e.listId};h(f,"mailify_headers").then(r=>{if(r&&r.success){const t=l({},e);if(r.data.mailifyField){t.default||(t.default={}),t.default.fields=r.data.mailifyField;const{fields:u}=t.default;t.field_map=Object.values(u).filter(n=>n.required).map(n=>({formField:"",mailifyField:n.fieldValue,required:!0})),a({show:!0,msg:d("Mailify fields refreshed","bit-integrations")})}else a({show:!0,msg:d("No Mailify fields found. Try changing the header row number or try again","bit-integrations")});s(l({},t))}else a({show:!0,msg:d("Mailify fields refresh failed. please try again","bit-integrations")});i(!1)}).catch(()=>i(!1))},b=e=>!((e!=null&&e.field_map?e.field_map.filter(i=>!i.formField&&i.mailifyField&&i.required):[]).length>0);export{F as a,b as c,w as h,M as r};
