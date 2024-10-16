var D=Object.defineProperty;var S=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var y=(a,t,c)=>t in a?D(a,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[t]=c,p=(a,t)=>{for(var c in t||(t={}))F.call(t,c)&&y(a,c,t[c]);if(S)for(var c of S(t))P.call(t,c)&&y(a,c,t[c]);return a};import{_ as r,b as u,c as m,A as h}from"./bi.860.15.js";const O=(a,t,c,s,d,o,l,e,n)=>{const i=p({},t);if(l){const g=p({},e);g[a.target.name]="",n(p({},g))}i[a.target.name]=a.target.value,c(p({},i))},q=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_campaign_list").then(e=>e&&e.success?(c(n=>{var g;const i=p({},n);return i.default||(i.default={}),(g=i.default)!=null&&g.campaignLists||(i.default.campaignLists={}),e.data.allCampaignLists&&(i.default.campaignLists=e.data.allCampaignLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),s(!1),r("Campaign list refreshed","bit-integrations")):(s(!1),r("Campaign list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Campaign list...")})},I=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_origin").then(e=>e&&e.success?(c(n=>h(n,i=>{i.caseOrigins=e.data})),s(!1),r("Case Origin refreshed","bit-integrations")):(s(!1),r("Case Origin refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Case Origin...")})},E=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_type").then(e=>e&&e.success?(c(n=>h(n,i=>{i.caseTypes=e.data})),s(!1),r("Type refreshed","bit-integrations")):(s(!1),r("Type refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading type...")})},$=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_reason").then(e=>e&&e.success?(c(n=>h(n,i=>{i.caseReasons=e.data})),s(!1),r("Reason refreshed","bit-integrations")):(s(!1),r("Reason refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Reason...")})},v=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_status").then(e=>e&&e.success?(c(n=>h(n,i=>{i.caseStatus=e.data})),s(!1),r("Status refreshed","bit-integrations")):(s(!1),r("Status refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Status...")})},z=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_priority").then(e=>e&&e.success?(c(n=>h(n,i=>{i.casePriority=e.data})),s(!1),r("Priority refreshed","bit-integrations")):(s(!1),r("Priority refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Priority...")})},M=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_potential_liability").then(e=>e&&e.success?(c(n=>h(n,i=>{i.casePotentialLiability=e.data})),s(!1),r("Potential Liability refreshed","bit-integrations")):(s(!1),r("Potential Liability refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Potential Liability...")})},V=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_case_sla_violation").then(e=>e&&e.success?(c(n=>h(n,i=>{i.caseSLAViolation=e.data})),s(!1),r("SLA Violation refreshed","bit-integrations")):(s(!1),r("SLA Violation refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading SLA Violation...")})},T=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails};u(o,"selesforce_lead_list").then(l=>l&&l.success?(c(e=>{var i;const n=p({},e);return n.default||(n.default={}),(i=n.default)!=null&&i.leadLists||(n.default.leadLists={}),l.data.leadLists&&(n.default.leadLists=l.data.leadLists),l.data.tokenDetails&&(n.tokenDetails=l.data.tokenDetails),n}),s(!1),r("Lead list refreshed","bit-integrations")):(s(!1),r("Lead list refresh failed. please try again","bit-integrations"))).catch(()=>s(!1))},U=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_contact_list").then(e=>e&&e.success?(c(n=>{var g;const i=p({},n);return i.default||(i.default={}),(g=i.default)!=null&&g.contactLists||(i.default.contactLists={}),e.data.contactLists&&(i.default.contactLists=e.data.contactLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),s(!1),r("Contact list refresh successfully.","bit-integrations")):(s(!1),r("Contact list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Contact list...")})},j=(a,t,c,s,d,o)=>{d(!0);const l={formID:a,actionName:t,clientId:c.clientId,clientSecret:c.clientSecret,tokenDetails:c.tokenDetails},e=u(l,"selesforce_custom_field").then(n=>{var k,b;const i=n&&n.success?n==null?void 0:n.data:[],g=n&&n.success?"Custom field refresh successfully.":(k=n==null?void 0:n.data[0])!=null&&k.message?"Custom field: "+((b=n==null?void 0:n.data[0])==null?void 0:b.message):"Custom field refresh failed. please try again";return s(_=>{const f=_;return f.field_map=[{formField:"",salesmateFormField:""}],n!=null&&n.data&&(t==="contact-create"?f.selesforceFields=[...f.contactFields,...i]:t==="lead-create"?f.selesforceFields=[...f.leadFields,...i]:t==="account-create"?f.selesforceFields=[...f.accountFields,...i]:t==="campaign-create"?f.selesforceFields=[...f.campaignFields,...i]:t==="add-campaign-member"?f.selesforceFields=[...f.campaignMemberStatus,...i]:t==="opportunity-create"?f.selesforceFields=[...f.opportunityFields,...i]:t==="event-create"?f.selesforceFields=[...f.eventFields,...i]:t==="case-create"?f.selesforceFields=[...f.caseFields,...i]:f.selesforceFields=i),f.field_map=A(f),f}),d(!1),g});m.promise(e,{success:n=>n,error:r("Error Occurred","bit-integrations"),loading:r(`Loading ${t} list...`)})},x=(a,t,c,s)=>{const d={clientId:a.clientId,clientSecret:a.clientSecret,tokenDetails:a.tokenDetails};c(!0),u(d,"selesforce_custom_action").then(o=>{var l,e;c(!1),t(n=>h(n,i=>{o.success&&(i.selesforceActionModules=[...i.action_modules,...o==null?void 0:o.data])})),m.success(o&&o.success?"Custom Action refresh successfully.":(l=o==null?void 0:o.data[0])!=null&&l.message?"Custom Action: "+((e=o==null?void 0:o.data[0])==null?void 0:e.message):"Custom Action refresh failed. please try again")})},H=(a,t,c,s,d)=>{s(!0);const o={formID:a,clientId:t.clientId,clientSecret:t.clientSecret,tokenDetails:t.tokenDetails},l=u(o,"selesforce_account_list").then(e=>e&&e.success?(c(n=>{var g;const i=p({},n);return i.default||(i.default={}),(g=i.default)!=null&&g.accountLists||(i.default.accountLists={}),e.data.accountLists&&(i.default.accountLists=e.data.accountLists),e.data.tokenDetails&&(i.tokenDetails=e.data.tokenDetails),i}),s(!1),r("Account list refreshed","bit-integrations")):(s(!1),r("Account list refresh failed. please try again","bit-integrations")));m.promise(l,{success:e=>e,error:r("Error Occurred","bit-integrations"),loading:r("Loading Account list...")})},J=a=>!((a!=null&&a.field_map?a.field_map.filter(c=>!c.formField||!c.selesforceField||!c.formField==="custom"&&!c.customValue):[]).length>0),A=(a,t)=>{let c=[];c=(a==null?void 0:a.selesforceFields)||[];const s=c.filter(d=>d.required===!0);return s.length>0?s.map(d=>({formField:"",selesforceField:d.key})):[{formField:"",selesforceField:""}]},W=(a,t,c,s,d,o)=>{if(!a.clientId||!a.clientSecret){c({clientId:a.clientId?"":r("Client Id can't be empty","bit-integrations"),clientSecret:a.clientSecret?"":r("Secret key can't be empty","bit-integrations")});return}d(!0);const l=`https://login.salesforce.com/services/oauth2/authorize?response_type=code&client_id=${a.clientId}&prompt=login%20consent&redirect_uri=${encodeURIComponent(window.location.href)}/redirect`,e=window.open(l,"salesforce","width=400,height=609,toolbar=off"),n=setInterval(()=>{if(e.closed){clearInterval(n);let i={},g=!1;const k=localStorage.getItem("__salesforce");if(k&&(g=!0,i=JSON.parse(k),localStorage.removeItem("__salesforce")),console.log(i),!i.code||i.error||!i||!g){const b=i.error?`Cause: ${i.error}`:"";o({show:!0,msg:`${r("Authorization Failed","bit-integrations")} ${b}. ${r("please try again","bit-integrations")}`}),d(!1)}else{const b=p({},a);b.accountServer=i["accounts-server"],R(i,b,t,s,d,o)}}},500)},R=(a,t,c,s,d,o)=>{const l=p({},a);l.clientId=t.clientId,l.clientSecret=t.clientSecret,l.redirectURI=`${encodeURIComponent(window.location.href)}/redirect`,u(l,"selesforce_generate_token").then(e=>{if(e&&e.success){const n=p({},t);n.tokenDetails=e.data,c(n),s(!0),o({show:!0,msg:r("Authorized Successfully","bit-integrations")})}else e&&e.data&&e.data.data||!e.success&&typeof e.data=="string"?o({show:!0,msg:`${r("Authorization failed Cause:","bit-integrations")}${e.data.data||e.data}. ${r("please try again","bit-integrations")}`}):o({show:!0,msg:r("Authorization failed. please try again","bit-integrations")});d(!1)})};export{q as a,H as b,J as c,U as d,v as e,I as f,x as g,O as h,z as i,M as j,V as k,E as l,$ as m,T as n,j as o,W as p};