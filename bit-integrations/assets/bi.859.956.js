var k=Object.defineProperty;var u=Object.getOwnPropertySymbols;var b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var g=(e,t,s)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,f=(e,t)=>{for(var s in t||(t={}))b.call(t,s)&&g(e,s,t[s]);if(u)for(var s of u(t))v.call(t,s)&&g(e,s,t[s]);return e};import{_ as i,b as l,c as d}from"./bi.312.95.js";const A=(e,t,s)=>{const r=f({},t),{name:a}=e.target;e.target.value!==""?r[a]=e.target.value:delete r[a],s(f({},r))},_=(e,t,s)=>{if(!e.accessToken){setError({accessToken:e.accessToken?"":i("Access Token can't be empty","bit-integrations")});return}s(!0);const r={accessToken:e.accessToken};l(r,"discord_fetch_servers").then(a=>{if(a&&a.success){t(o=>{const c=f({},o);return c.default||(c.default={}),a.data&&(c.servers=a.data),c}),s(!1),d.success(i("Servers fetched successfully","bit-integrations"));return}s(!1),d.error(i("Servers fetching failed","bit-integrations"))})},C=(e,t,s)=>{if(console.log("confTmp",e.selectedServer),!e.accessToken){setError({accessToken:e.accessToken?"":i("Access Token can't be empty","bit-integrations")});return}s(!0);const r={accessToken:e.accessToken,serverId:e.selectedServer};l(r,"discord_fetch_channels").then(a=>{if(a&&a.success){t(o=>{const c=f({},o);return c.default||(c.default={}),a.data&&(c.channels=a.data),c}),s(!1),d.success(i("Channels fetched successfully","bit-integrations"));return}s(!1),d.error(i("Channels fetching failed","bit-integrations"))})},w=(e,t,s,r,a,o)=>{if(!e.accessToken){s({accessToken:e.accessToken?"":i("Access Token can't be empty","bit-integrations")});return}s({}),a(!0);const c={accessToken:e.accessToken};l(c,"handle_authorize").then(n=>n).then(n=>{if(n&&n.success){const h=f({},e);h.tokenDetails=n.data,t(h),r(!0),o({show:!0,msg:i("Authorized Successfully","bit-integrations")})}else n&&n.data&&n.data.data||!n.success&&typeof n.data=="string"?o({show:!0,msg:`${i("Authorization failed Cause:","bit-integrations")}${n.data.data||n.data}. ${i("please try again","bit-integrations")}`}):o({show:!0,msg:i("Authorization failed. please try again","bit-integrations")});a(!1)})};export{C as a,w as b,_ as g,A as h};
