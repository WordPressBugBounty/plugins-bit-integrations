var d=Object.defineProperty;var p=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var f=(a,i,e)=>i in a?d(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e,m=(a,i)=>{for(var e in i||(i={}))o.call(i,e)&&f(a,e,i[e]);if(p)for(var e of p(i))_.call(i,e)&&f(a,e,i[e]);return a};import{c as l,_ as n}from"./bi.51.0.js";import{u as h}from"./bi.613.437.js";const A=(a,i,e)=>{const t=m({},i);t.name=a.target.value,e(m({},t))},b=(a,i,e,t)=>{const g={api_key:a.api_key,api_url:a.api_url};e(!0),l(g,"aCampaign_lists").then(s=>{s&&s.success?s.data.activeCampaignLists?(i(c=>h(c,r=>{r.default||(r.default={}),r.default.activeCampaignLists=s.data.activeCampaignLists})),t({show:!0,msg:n("ActiveCampaign lists refreshed","bit-integrations")})):t({show:!0,msg:n("No ActiveCampaign lists found. Try changing the header row number or try again","bit-integrations")}):t({show:!0,msg:n("ActiveCampaign lists refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},F=(a,i,e,t)=>{const g={api_key:a.api_key,api_url:a.api_url};e(!0),l(g,"aCampaign_accounts").then(s=>{s&&s.success?s.data?(i(c=>h(c,r=>{r.accounts=s.data})),t({show:!0,msg:n("ActiveCampaign accounts refreshed","bit-integrations")})):t({show:!0,msg:n("No ActiveCampaign account found. Try changing the header row number or try again","bit-integrations")}):t({show:!0,msg:n("ActiveCampaign accounts refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},T=(a,i,e,t)=>{const g={api_key:a.api_key,api_url:a.api_url};l(g,"aCampaign_tags").then(s=>{s&&s.success?s.data.activeCampaignTags?(i(c=>h(c,r=>{r.default||(r.default={}),r.default.activeCampaignTags=s.data.activeCampaignTags})),t({show:!0,msg:n("ActiveCampaign tags refreshed","bit-integrations")})):t({show:!0,msg:n("No ActiveCampaign tags found. Try changing the header row number or try again","bit-integrations")}):t({show:!0,msg:n("ActiveCampaign tags refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},q=(a,i,e,t)=>{const g={api_key:a.api_key,api_url:a.api_url};e(!0),l(g,"aCampaign_headers").then(s=>{s&&s.success?s.data.activeCampaignField?(i(c=>h(c,r=>{r.default||(r.default={}),r.default.fields=s.data.activeCampaignField,r.field_map=Object.values(r.default.fields).filter(u=>u.required).map(u=>({formField:"",activeCampaignField:u.fieldId,required:!0}))})),t({show:!0,msg:n("ActiveCampaign fields refreshed","bit-integrations")})):t({show:!0,msg:n("No ActiveCampaign fields found. Try changing the header row number or try again","bit-integrations")}):t({show:!0,msg:n("ActiveCampaign fields refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},C=a=>!((a!=null&&a.field_map?a.field_map.filter(e=>!e.formField&&e.activeCampaignField&&e.required):[]).length>0);export{b as a,F as b,q as c,C as d,A as h,T as r};
