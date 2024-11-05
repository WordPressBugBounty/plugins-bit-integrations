var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var T=(a,e,i)=>e in a?S(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,m=(a,e)=>{for(var i in e||(e={}))V.call(e,i)&&T(a,i,e[i]);if(g)for(var i of g(e))P.call(e,i)&&T(a,i,e[i]);return a};import{r as N,i as O,j as t,L as M}from"./main-80.js";import{j as $,m as v,_ as l,e as k,n as q,k as E,l as U}from"./bi.433.0.js";import{g as A,a as f,b as z,f as B}from"./bi.907.772.js";import{T as H}from"./bi.895.650.js";function D({getResponseConf:a,setGetResponseConf:e,formFields:i,loading:c,setLoading:r}){var b,w;const[n,o]=N.useState({show:!1,action:()=>{}}),p=O($),{isPro:u}=p,j=(d,y)=>{var F;const h=m({},a);y==="tag"?((F=d.target)!=null&&F.checked?(A(a,e,r),h.actions.tags=!0):(o({show:!1}),delete h.actions.tags),o({show:"tag"})):y==="update"?d.target.checked?h.actions.update=!0:delete h.actions.update:y==="dayOfCycle"&&(d.target.checked?h.actions.dayOfCycle=!0:delete h.actions.dayOfCycle,o({show:"dayOfCycle"})),e(m({},h))},x=()=>{o({show:!1})},s=(d,y)=>{const h=m({},a);y==="selectedTags"?h.selectedTags=d:y==="dayOfCycle"&&(h.dayOfCycle=d),e(m({},h))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(v,{checked:(a==null?void 0:a.selectedTags.length)||!1,onChange:d=>j(d,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:l("Add Tags","bit-integrations"),subTitle:l("Add tags contact","bit-integrations")}),t.jsx(v,{checked:((b=a.actions)==null?void 0:b.update)||!1,onChange:d=>j(d,"update"),className:"wdt-200 mt-4 mr-2",value:"update_contact",title:l("Update Contact","bit-integrations"),subTitle:l("Update Responses with GetResponse exist contact?","bit-integrations")}),t.jsx(v,{checked:(a==null?void 0:a.dayOfCycle)||!1,onChange:d=>j(d,"dayOfCycle"),className:"wdt-200 mt-4 mr-2",value:"dayOfCycle",title:`${l("Autoresponder day","bit-integrations")} ${u?"":`(${l("Pro","bit-integrations")})`}`,subTitle:u?l("The day on which the contact is in the Autoresponder cycle","bit-integrations"):sprintf(l("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.1.9",l("Autoresponder day","bit-integrations")),isInfo:!u}),t.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:n.show==="tag",close:x,action:x,title:l("Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:l("Select contact Tags","bit-integrations")}),c.tags?t.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(q,{options:(w=a==null?void 0:a.tags)==null?void 0:w.map(d=>({label:d.name,value:d.tagId})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedTags,onChange:d=>s(d,"selectedTags")}),t.jsx("button",{onClick:()=>A(a,e,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]})]}),u&&t.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:n.show==="dayOfCycle",close:x,action:x,title:l("Autoresponder day","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:l("Autoresponder day","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp mt-1",onChange:d=>s(d.target.value,"dayOfCycle"),type:"number",name:"dayOfCycle",value:a.dayOfCycle,placeholder:l("Autoresponder day...","bit-integrations")})]})]})}const I=(a,e,i)=>{const c=m({},e);c.field_map.splice(a,0,{}),i(m({},c))},J=(a,e,i)=>{const c=m({},e);c.field_map.length>1&&c.field_map.splice(a,1),i(m({},c))},_=(a,e,i,c)=>{const r=m({},i);r.field_map[e][a.target.name]=a.target.value,a.target.value==="custom"&&(r.field_map[e].customValue=""),c(m({},r))};function K({i:a,formFields:e,field:i,getResponseConf:c,setGetResponseConf:r}){var j,x;if(((j=c==null?void 0:c.field_map)==null?void 0:j.length)===1&&i.getResponseFormField===""){const s=m({},c),b=f(s);s.field_map=b,r(s)}const n=(c==null?void 0:c.contactsFields.filter(s=>s.required===!0))||[],o=(c==null?void 0:c.contactsFields.filter(s=>s.required===!1))||[],p=O($),{isPro:u}=p;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:s=>_(s,a,c,r),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:e==null?void 0:e.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),t.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),u?"":`(${l("Pro","bit-integrations")})`),children:u&&((x=E)==null?void 0:x.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),i.formField==="custom"&&t.jsx(H,{onChange:s=>U(s,a,c,r),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:e}),t.jsxs("select",{className:"btcd-paper-inp",disabled:a<n.length,name:"getResponseFormField",value:a<n?n[a].label||"":i.getResponseFormField||"",onChange:s=>_(s,a,c,r),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),a<n.length?t.jsx("option",{value:n[a].key,children:n[a].label},n[a].key):o.map(({key:s,label:b})=>t.jsx("option",{value:s,children:b},s))]})]}),a>=n.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>I(a,c,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>J(a,c,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Z({formFields:a,handleInput:e,getResponseConf:i,setGetResponseConf:c,loading:r,setLoading:n,setSnackbar:o}){const[p,u]=N.useState({name:"",auth_token:""}),[j,x]=N.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:l("Campaigns:","bit-integrations")}),t.jsxs("select",{onChange:e,name:"campaignId",value:i.campaignId,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Campaign","bit-integrations")}),(i==null?void 0:i.campaigns)&&i.campaigns.map(({campaignId:s,name:b})=>t.jsx("option",{value:s,children:b},s))]}),t.jsx("button",{onClick:()=>z(i,c,u,x,r,n,"refreshCampaigns"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch All Campaigns","bit-integrations")}'`},type:"button",disabled:r.customFields,children:"↻"}),(r.customFields||r.field)&&t.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(i==null?void 0:i.campaignId)&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsxs("b",{className:"wdt-100",children:[l("Field Map","bit-integrations"),t.jsx("button",{onClick:()=>B(i,c,n,"manual"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:r.field,children:"↻"})]})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("GetResponse Fields","bit-integrations")})})]}),(i==null?void 0:i.campaignId)&&(i==null?void 0:i.field_map.map((s,b)=>t.jsx(K,{i:b,field:s,getResponseConf:i,formFields:a,setGetResponseConf:c,setSnackbar:o},`rp-m-${b+9}`))),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>I(i.field_map.length,i,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(D,{getResponseConf:i,setGetResponseConf:c,formFields:a,loading:r,setLoading:n})]})]})}export{Z as G};