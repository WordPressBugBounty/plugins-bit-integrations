var c=Object.defineProperty;var o=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;var f=(s,i,e)=>i in s?c(s,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[i]=e,l=(s,i)=>{for(var e in i||(i={}))h.call(i,e)&&f(s,e,i[e]);if(o)for(var e of o(i))u.call(i,e)&&f(s,e,i[e]);return s};import{c as m,i as d}from"./bi.223.0.js";const _=(s,i,e)=>{const t=l({},i);t.name=s.target.value,e(l({},t))},F=(s,i,e,t)=>{e(!0);const n={client_id:s.client_id,api_key:s.api_key};m(n,"campaign_monitor_lists").then(r=>{if(r&&r.success){const a=l({},s);r.data?(a.default||(a.default={}),a.default.campaignMonitorLists=r.data,t({show:!0,msg:d("CampaignMonitor Lists refreshed","bit-integrations")})):t({show:!0,msg:d("No CampaignMonitor Lists found. Try changing the header row number or try again","bit-integrations")}),i(l({},a))}else t({show:!0,msg:d("CampaignMonitor Lists refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},y=(s,i,e,t)=>{e(!0);const n={client_id:s.client_id,api_key:s.api_key,listId:s.listId};m(n,"campaign_monitor_custom_fields").then(r=>{r&&r.success?(i(a=>(a.customFields=r.data?r.data:[],a)),t({show:!0,msg:d("CampaignMonitor Custom fields refreshed.","bit-integrations")})):t({show:!0,msg:d("CampaignMonitor Custom fields refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},w=s=>{let i=s.subscriberFields;const e=i&&i.filter(t=>t.required===!0);return e.length>0?e.map(t=>({formField:"",campaignMonitorField:t.key})):[{formField:"",campaignMonitorField:""}]},b=s=>!((s!=null&&s.field_map?s.field_map.filter(e=>!e.formField&&e.campaignMonitorField&&e.required):[]).length>0);export{y as a,b as c,w as g,_ as h,F as r};
