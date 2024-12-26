var D=Object.defineProperty;var S=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var y=(a,t,r)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,u=(a,t)=>{for(var r in t||(t={}))P.call(t,r)&&y(a,r,t[r]);if(S)for(var r of S(t))A.call(t,r)&&y(a,r,t[r]);return a};import{_ as c,c as f,d as m}from"./bi.686.0.js";import{u as p}from"./bi.276.437.js";const q=(a,t,r,n,d,o,l,e,s)=>{const i=u({},t);if(l){const g=u({},e);g[a.target.name]="",s(u({},g))}i[a.target.name]=a.target.value,r(u({},i))},I=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_campaign_list").then(e=>e&&e.success?(r(s=>{var g;const i=u({},s);return i.default||(i.default={}),(g=i.default)!=null&&g.campaignLists||(i.default.campaignLists={}),e.data.allCampaignLists&&(i.default.campaignLists=e.data.allCampaignLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),n(!1),c("Campaign list refreshed","bit-integrations")):(n(!1),c("Campaign list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Campaign list...")})},E=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_case_origin").then(e=>e&&e.success?(r(s=>p(s,i=>{i.caseOrigins=e.data})),n(!1),c("Case Origin refreshed","bit-integrations")):(n(!1),c("Case Origin refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Case Origin...")})},$=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_case_type").then(e=>e&&e.success?(r(s=>p(s,i=>{i.caseTypes=e.data})),n(!1),c("Type refreshed","bit-integrations")):(n(!1),c("Type refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading type...")})},v=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_case_reason").then(e=>e&&e.success?(r(s=>p(s,i=>{i.caseReasons=e.data})),n(!1),c("Reason refreshed","bit-integrations")):(n(!1),c("Reason refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Reason...")})},z=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_case_status").then(e=>e&&e.success?(r(s=>p(s,i=>{i.caseStatus=e.data})),n(!1),c("Status refreshed","bit-integrations")):(n(!1),c("Status refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Status...")})},V=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_case_priority").then(e=>e&&e.success?(r(s=>p(s,i=>{i.casePriority=e.data})),n(!1),c("Priority refreshed","bit-integrations")):(n(!1),c("Priority refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Priority...")})},M=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_case_potential_liability").then(e=>e&&e.success?(r(s=>p(s,i=>{i.casePotentialLiability=e.data})),n(!1),c("Potential Liability refreshed","bit-integrations")):(n(!1),c("Potential Liability refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Potential Liability...")})},T=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_case_sla_violation").then(e=>e&&e.success?(r(s=>p(s,i=>{i.caseSLAViolation=e.data})),n(!1),c("SLA Violation refreshed","bit-integrations")):(n(!1),c("SLA Violation refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading SLA Violation...")})},U=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};f(o,"selesforce_lead_list").then(l=>l&&l.success?(r(e=>{var i;const s=u({},e);return s.default||(s.default={}),(i=s.default)!=null&&i.leadLists||(s.default.leadLists={}),l.data.leadLists&&(s.default.leadLists=l.data.leadLists),l.data.tokenDetails&&(s.tokenDetails=l.data.tokenDetails),s}),n(!1),c("Lead list refreshed","bit-integrations")):(n(!1),c("Lead list refresh failed. please try again","bit-integrations"))).catch(()=>n(!1))},j=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_contact_list").then(e=>e&&e.success?(r(s=>{var g;const i=u({},s);return i.default||(i.default={}),(g=i.default)!=null&&g.contactLists||(i.default.contactLists={}),e.data.contactLists&&(i.default.contactLists=e.data.contactLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),n(!1),c("Contact list refresh successfully.","bit-integrations")):(n(!1),c("Contact list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Contact list...")})},x=(a,t,r,n,d,o)=>{d(!0);const l={formID:a,actionName:t,clientId:r.clientId,clientSecret:r.clientSecret,tokenDetails:r.tokenDetails},e=f(l,"selesforce_custom_field").then(s=>{var b,h;const i=s&&s.success?s==null?void 0:s.data:[],g=s&&s.success?"Custom field refresh successfully.":(b=s==null?void 0:s.data[0])!=null&&b.message?"Custom field: "+((h=s==null?void 0:s.data[0])==null?void 0:h.message):"Custom field refresh failed. please try again";return n(_=>{const k=_;return k.field_map=[{formField:"",salesmateFormField:""}],s!=null&&s.data&&(k.selesforceFields=i),k.field_map=R(k),k}),d(!1),g});m.promise(e,{success:s=>s,error:c("Error Occurred","bit-integrations"),loading:c(`Loading ${t} list...`)})},H=(a,t,r,n)=>{const d={clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};r(!0),f(d,"selesforce_custom_action").then(o=>{var l,e;r(!1),t(s=>p(s,i=>{o.success&&(i.selesforceActionModules=[...i.action_modules,...o==null?void 0:o.data])})),m.success(o&&o.success?"Custom Action refresh successfully.":(l=o==null?void 0:o.data[0])!=null&&l.message?"Custom Action: "+((e=o==null?void 0:o.data[0])==null?void 0:e.message):"Custom Action refresh failed. please try again")})},J=(a,t,r,n,d)=>{n(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=f(o,"selesforce_account_list").then(e=>e&&e.success?(r(s=>{var g;const i=u({},s);return i.default||(i.default={}),(g=i.default)!=null&&g.accountLists||(i.default.accountLists={}),e.data.accountLists&&(i.default.accountLists=e.data.accountLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),n(!1),c("Account list refreshed","bit-integrations")):(n(!1),c("Account list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Account list...")})},N=a=>!((a!=null&&a.field_map?a.field_map.filter(r=>!r.formField||!r.selesforceField||!r.formField==="custom"&&!r.customValue):[]).length>0),R=(a,t)=>{let r=[];r=(a==null?void 0:a.selesforceFields)||[];const n=r.filter(d=>d.required===!0);return n.length>0?n.map(d=>({formField:"",selesforceField:d.key})):[{formField:"",selesforceField:""}]},W=(a,t,r,n,d,o)=>{if(!a.clientId||!a.clientSecret){r({clientId:a.clientId?"":c("Client Id can't be empty","bit-integrations"),clientSecret:a.clientSecret?"":c("Secret key can't be empty","bit-integrations")});return}d(!0);const l=`https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=${a.clientId}&prompt=login%20consent&redirect_uri=${encodeURIComponent(window.location.href)}/redirect`,e=window.open(l,"salesforce","width=400,height=609,toolbar=off"),s=setInterval(()=>{if(e.closed){clearInterval(s);let i={},g=!1;const b=localStorage.getItem("__salesforce");if(b&&(g=!0,i=JSON.parse(b),localStorage.removeItem("__salesforce")),console.log(i),!i.code||i.error||!i||!g){const h=i.error?`Cause: ${i.error}`:"";o({show:!0,msg:`${c("Authorization Failed","bit-integrations")} ${h}. ${c("please try again","bit-integrations")}`}),d(!1)}else{const h=u({},a);h.accountServer=i["accounts-server"],L(i,h,t,n,d,o)}}},500)},L=(a,t,r,n,d,o)=>{const l=u({},a);l.clientId=t.clientId,l.clientSecret=t.clientSecret,l.redirectURI=`${encodeURIComponent(window.location.href)}/redirect`,f(l,"selesforce_generate_token").then(e=>{if(e&&e.success){const s=u({},t);s.tokenDetails=e.data,r(s),n(!0),o({show:!0,msg:c("Authorized Successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?o({show:!0,msg:`${c("Authorization failed Cause:","bit-integrations")}${e.data.data||e.data}. ${c("please try again","bit-integrations")}`}):o({show:!0,msg:c("Authorization failed. please try again","bit-integrations")});d(!1)})};export{I as a,J as b,N as c,j as d,z as e,E as f,H as g,q as h,V as i,M as j,T as k,$ as l,v as m,U as n,x as o,W as p};
