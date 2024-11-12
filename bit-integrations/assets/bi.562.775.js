var D=Object.defineProperty;var S=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(a,t,r)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[t]=r,p=(a,t)=>{for(var r in t||(t={}))F.call(t,r)&&y(a,r,t[r]);if(S)for(var r of S(t))P.call(t,r)&&y(a,r,t[r]);return a};import{_ as c,c as u,d as m}from"./bi.4.0.js";import{z as h}from"./bi.197.434.js";const q=(a,t,r,s,d,o,l,e,n)=>{const i=p({},t);if(l){const g=p({},e);g[a.target.name]="",n(p({},g))}i[a.target.name]=a.target.value,r(p({},i))},I=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_campaign_list").then(e=>e&&e.success?(r(n=>{var g;const i=p({},n);return i.default||(i.default={}),(g=i.default)!=null&&g.campaignLists||(i.default.campaignLists={}),e.data.allCampaignLists&&(i.default.campaignLists=e.data.allCampaignLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),s(!1),c("Campaign list refreshed","bit-integrations")):(s(!1),c("Campaign list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Campaign list...")})},E=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_origin").then(e=>e&&e.success?(r(n=>h(n,i=>{i.caseOrigins=e.data})),s(!1),c("Case Origin refreshed","bit-integrations")):(s(!1),c("Case Origin refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Case Origin...")})},$=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_type").then(e=>e&&e.success?(r(n=>h(n,i=>{i.caseTypes=e.data})),s(!1),c("Type refreshed","bit-integrations")):(s(!1),c("Type refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading type...")})},v=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_reason").then(e=>e&&e.success?(r(n=>h(n,i=>{i.caseReasons=e.data})),s(!1),c("Reason refreshed","bit-integrations")):(s(!1),c("Reason refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Reason...")})},z=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_status").then(e=>e&&e.success?(r(n=>h(n,i=>{i.caseStatus=e.data})),s(!1),c("Status refreshed","bit-integrations")):(s(!1),c("Status refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Status...")})},M=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_priority").then(e=>e&&e.success?(r(n=>h(n,i=>{i.casePriority=e.data})),s(!1),c("Priority refreshed","bit-integrations")):(s(!1),c("Priority refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Priority...")})},V=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_potential_liability").then(e=>e&&e.success?(r(n=>h(n,i=>{i.casePotentialLiability=e.data})),s(!1),c("Potential Liability refreshed","bit-integrations")):(s(!1),c("Potential Liability refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Potential Liability...")})},T=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_sla_violation").then(e=>e&&e.success?(r(n=>h(n,i=>{i.caseSLAViolation=e.data})),s(!1),c("SLA Violation refreshed","bit-integrations")):(s(!1),c("SLA Violation refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading SLA Violation...")})},U=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};u(o,"selesforce_lead_list").then(l=>l&&l.success?(r(e=>{var i;const n=p({},e);return n.default||(n.default={}),(i=n.default)!=null&&i.leadLists||(n.default.leadLists={}),l.data.leadLists&&(n.default.leadLists=l.data.leadLists),l.data.tokenDetails&&(n.tokenDetails=l.data.tokenDetails),n}),s(!1),c("Lead list refreshed","bit-integrations")):(s(!1),c("Lead list refresh failed. please try again","bit-integrations"))).catch(()=>s(!1))},j=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_contact_list").then(e=>e&&e.success?(r(n=>{var g;const i=p({},n);return i.default||(i.default={}),(g=i.default)!=null&&g.contactLists||(i.default.contactLists={}),e.data.contactLists&&(i.default.contactLists=e.data.contactLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),s(!1),c("Contact list refresh successfully.","bit-integrations")):(s(!1),c("Contact list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Contact list...")})},x=(a,t,r,s,d,o)=>{d(!0);const l={formID:a,actionName:t,clientId:r.clientId,clientSecret:r.clientSecret,tokenDetails:r.tokenDetails},e=u(l,"selesforce_custom_field").then(n=>{var k,b;const i=n&&n.success?n==null?void 0:n.data:[],g=n&&n.success?"Custom field refresh successfully.":(k=n==null?void 0:n.data[0])!=null&&k.message?"Custom field: "+((b=n==null?void 0:n.data[0])==null?void 0:b.message):"Custom field refresh failed. please try again";return s(_=>{const f=_;return f.field_map=[{formField:"",salesmateFormField:""}],n!=null&&n.data&&(t==="contact-create"?f.selesforceFields=[...f.contactFields,...i]:t==="lead-create"?f.selesforceFields=[...f.leadFields,...i]:t==="account-create"?f.selesforceFields=[...f.accountFields,...i]:t==="campaign-create"?f.selesforceFields=[...f.campaignFields,...i]:t==="add-campaign-member"?f.selesforceFields=[...f.campaignMemberStatus,...i]:t==="opportunity-create"?f.selesforceFields=[...f.opportunityFields,...i]:t==="event-create"?f.selesforceFields=[...f.eventFields,...i]:t==="case-create"?f.selesforceFields=[...f.caseFields,...i]:f.selesforceFields=i),f.field_map=A(f),f}),d(!1),g});m.promise(e,{success:n=>n,error:c("Error Occurred","bit-integrations"),loading:c(`Loading ${t} list...`)})},H=(a,t,r,s)=>{const d={clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};r(!0),u(d,"selesforce_custom_action").then(o=>{var l,e;r(!1),t(n=>h(n,i=>{o.success&&(i.selesforceActionModules=[...i.action_modules,...o==null?void 0:o.data])})),m.success(o&&o.success?"Custom Action refresh successfully.":(l=o==null?void 0:o.data[0])!=null&&l.message?"Custom Action: "+((e=o==null?void 0:o.data[0])==null?void 0:e.message):"Custom Action refresh failed. please try again")})},J=(a,t,r,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_account_list").then(e=>e&&e.success?(r(n=>{var g;const i=p({},n);return i.default||(i.default={}),(g=i.default)!=null&&g.accountLists||(i.default.accountLists={}),e.data.accountLists&&(i.default.accountLists=e.data.accountLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),s(!1),c("Account list refreshed","bit-integrations")):(s(!1),c("Account list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:c("Error Occurred","bit-integrations"),loading:c("Loading Account list...")})},W=a=>!((a!=null&&a.field_map?a.field_map.filter(r=>!r.formField||!r.selesforceField||!r.formField==="custom"&&!r.customValue):[]).length>0),A=(a,t)=>{let r=[];r=(a==null?void 0:a.selesforceFields)||[];const s=r.filter(d=>d.required===!0);return s.length>0?s.map(d=>({formField:"",selesforceField:d.key})):[{formField:"",selesforceField:""}]},Z=(a,t,r,s,d,o)=>{if(!a.clientId||!a.clientSecret){r({clientId:a.clientId?"":c("Client Id can't be empty","bit-integrations"),clientSecret:a.clientSecret?"":c("Secret key can't be empty","bit-integrations")});return}d(!0);const l=`https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=${a.clientId}&prompt=login%20consent&redirect_uri=${encodeURIComponent(window.location.href)}/redirect`,e=window.open(l,"salesforce","width=400,height=609,toolbar=off"),n=setInterval(()=>{if(e.closed){clearInterval(n);let i={},g=!1;const k=localStorage.getItem("__salesforce");if(k&&(g=!0,i=JSON.parse(k),localStorage.removeItem("__salesforce")),console.log(i),!i.code||i.error||!i||!g){const b=i.error?`Cause: ${i.error}`:"";o({show:!0,msg:`${c("Authorization Failed","bit-integrations")} ${b}. ${c("please try again","bit-integrations")}`}),d(!1)}else{const b=p({},a);b.accountServer=i["accounts-server"],R(i,b,t,s,d,o)}}},500)},R=(a,t,r,s,d,o)=>{const l=p({},a);l.clientId=t.clientId,l.clientSecret=t.clientSecret,l.redirectURI=`${encodeURIComponent(window.location.href)}/redirect`,u(l,"selesforce_generate_token").then(e=>{if(e&&e.success){const n=p({},t);n.tokenDetails=e.data,r(n),s(!0),o({show:!0,msg:c("Authorized Successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?o({show:!0,msg:`${c("Authorization failed Cause:","bit-integrations")}${e.data.data||e.data}. ${c("please try again","bit-integrations")}`}):o({show:!0,msg:c("Authorization failed. please try again","bit-integrations")});d(!1)})};export{I as a,J as b,W as c,j as d,z as e,E as f,H as g,q as h,M as i,V as j,T as k,$ as l,v as m,U as n,x as o,Z as p};
