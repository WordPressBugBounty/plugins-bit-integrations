var _=Object.defineProperty;var b=Object.getOwnPropertySymbols;var c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var m=(t,a,e)=>a in t?_(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,r=(t,a)=>{for(var e in a||(a={}))c.call(a,e)&&m(t,e,a[e]);if(b)for(var e of b(a))f.call(a,e)&&m(t,e,a[e]);return t};import{_ as n,b as l}from"./bi.597.15.js";const y=(t,a,e,u,d,o,g,i)=>{const s=r({},a),{name:h}=t.target;t.target.value!==""?s[h]=t.target.value:delete s[h],e(r({},s))},A=(t,a,e,u,d,o)=>{if(!t.sid||!t.token||!t.from_num){e({sid:t.sid?"":n("Account SID can't be empty","bit-integrations"),token:t.token?"":n("Auth Token can't be empty","bit-integrations"),from_num:t.from_num?"":n("Phone number can't be empty","bit-integrations")});return}e({}),d(!0);const g={sid:t.sid,token:t.token,from_num:t.from_num};l(g,"twilio_authorization").then(i=>i).then(i=>{if(i&&i.success){const s=r({},t);s.tokenDetails=i.data,a(s),u(!0),o({show:!0,msg:n("Authorized Successfully","bit-integrations")})}else i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?o({show:!0,msg:`${n("Authorization failed Cause:","bit-integrations")}${i.data.data||i.data}. ${n("please try again","bit-integrations")}`}):o({show:!0,msg:n("Authorization failed. please try again","bit-integrations")});d(!1)})};export{A as a,y as h};
