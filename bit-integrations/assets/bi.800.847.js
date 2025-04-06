var $=Object.defineProperty;var g=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var T=(a,e,i)=>e in a?$(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,n=(a,e)=>{for(var i in e||(e={}))V.call(e,i)&&T(a,i,e[i]);if(g)for(var i of g(e))f.call(e,i)&&T(a,i,e[i]);return a};import{r as N,f as O,j as t,L as M}from"./main-623.js";import{e as S,_ as s}from"./bi.422.0.js";import{x as P}from"./bi.1.443.js";import{a as k}from"./bi.331.9.js";import{b as v}from"./bi.727.11.js";import{P as q,a as E}from"./bi.468.726.js";import{g as A,a as U,b as z,f as B}from"./bi.911.846.js";import{a as H,h as D}from"./bi.757.3.js";import{T as J}from"./bi.220.720.js";function K({getResponseConf:a,setGetResponseConf:e,formFields:i,loading:l,setLoading:r}){var b,F;const[m,x]=N.useState({show:!1,action:()=>{}}),p=O(S),{isPro:o}=p,j=(d,y)=>{var w;const h=n({},a);y==="tag"?((w=d.target)!=null&&w.checked?(A(a,e,r),h.actions.tags=!0):(x({show:!1}),delete h.actions.tags),x({show:"tag"})):y==="update"?d.target.checked?h.actions.update=!0:delete h.actions.update:y==="dayOfCycle"&&(d.target.checked?h.actions.dayOfCycle=!0:delete h.actions.dayOfCycle,x({show:"dayOfCycle"})),e(n({},h))},u=()=>{x({show:!1})},c=(d,y)=>{const h=n({},a);y==="selectedTags"?h.selectedTags=d:y==="dayOfCycle"&&(h.dayOfCycle=d),e(n({},h))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(v,{checked:(a==null?void 0:a.selectedTags.length)||!1,onChange:d=>j(d,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:s("Add Tags","bit-integrations"),subTitle:s("Add tags contact","bit-integrations")}),t.jsx(v,{checked:((b=a.actions)==null?void 0:b.update)||!1,onChange:d=>j(d,"update"),className:"wdt-200 mt-4 mr-2",value:"update_contact",title:s("Update Contact","bit-integrations"),subTitle:s("Update Responses with GetResponse exist contact?","bit-integrations")}),t.jsx(v,{checked:(a==null?void 0:a.dayOfCycle)||!1,onChange:d=>j(d,"dayOfCycle"),className:"wdt-200 mt-4 mr-2",value:"dayOfCycle",isInfo:!o,title:t.jsx(q,{title:s("Autoresponder day","bit-integrations")}),subTitle:t.jsx(E,{title:s("Autoresponder day","bit-integrations"),subTitle:s("The day on which the contact is in the Autoresponder cycle","bit-integrations"),proVersion:"2.1.9"})}),t.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:m.show==="tag",close:u,action:u,title:s("Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select contact Tags","bit-integrations")}),l.tags?t.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(P,{options:(F=a==null?void 0:a.tags)==null?void 0:F.map(d=>({label:d.name,value:d.tagId})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedTags,onChange:d=>c(d,"selectedTags")}),t.jsx("button",{onClick:()=>A(a,e,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${s("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]})]}),o&&t.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:m.show==="dayOfCycle",close:u,action:u,title:s("Autoresponder day","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Autoresponder day","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp mt-1",onChange:d=>c(d.target.value,"dayOfCycle"),type:"number",name:"dayOfCycle",value:a.dayOfCycle,placeholder:s("Autoresponder day...","bit-integrations")})]})]})}const I=(a,e,i)=>{const l=n({},e);l.field_map.splice(a,0,{}),i(n({},l))},L=(a,e,i)=>{const l=n({},e);l.field_map.length>1&&l.field_map.splice(a,1),i(n({},l))},_=(a,e,i,l)=>{const r=n({},i);r.field_map[e][a.target.name]=a.target.value,a.target.value==="custom"&&(r.field_map[e].customValue=""),l(n({},r))};function Q({i:a,formFields:e,field:i,getResponseConf:l,setGetResponseConf:r}){var j,u;if(((j=l==null?void 0:l.field_map)==null?void 0:j.length)===1&&i.getResponseFormField===""){const c=n({},l),b=U(c);c.field_map=b,r(c)}const m=(l==null?void 0:l.contactsFields.filter(c=>c.required===!0))||[],x=(l==null?void 0:l.contactsFields.filter(c=>c.required===!1))||[],p=O(S),{isPro:o}=p;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:c=>_(c,a,l,r),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),t.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:e==null?void 0:e.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),t.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(s("General Smart Codes %s","bit-integrations"),o?"":`(${s("Pro","bit-integrations")})`),children:o&&((u=H)==null?void 0:u.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),i.formField==="custom"&&t.jsx(J,{onChange:c=>D(c,a,l,r),label:s("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:s("Custom Value","bit-integrations"),formFields:e}),t.jsxs("select",{className:"btcd-paper-inp",disabled:a<m.length,name:"getResponseFormField",value:a<m?m[a].label||"":i.getResponseFormField||"",onChange:c=>_(c,a,l,r),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),a<m.length?t.jsx("option",{value:m[a].key,children:m[a].label},m[a].key):x.map(({key:c,label:b})=>t.jsx("option",{value:c,children:b},c))]})]}),a>=m.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>I(a,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>L(a,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function lt({formFields:a,handleInput:e,getResponseConf:i,setGetResponseConf:l,loading:r,setLoading:m,setSnackbar:x}){const[p,o]=N.useState({name:"",auth_token:""}),[j,u]=N.useState(!1);return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:s("Campaigns:","bit-integrations")}),t.jsxs("select",{onChange:e,name:"campaignId",value:i.campaignId,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:s("Select Campaign","bit-integrations")}),(i==null?void 0:i.campaigns)&&i.campaigns.map(({campaignId:c,name:b})=>t.jsx("option",{value:c,children:b},c))]}),t.jsx("button",{onClick:()=>z(i,l,o,u,r,m,"refreshCampaigns"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Fetch All Campaigns","bit-integrations")}'`},type:"button",disabled:r.customFields,children:"↻"}),(r.customFields||r.field)&&t.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(i==null?void 0:i.campaignId)&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsxs("b",{className:"wdt-100",children:[s("Field Map","bit-integrations"),t.jsx("button",{onClick:()=>B(i,l,m,"manual"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:r.field,children:"↻"})]})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("GetResponse Fields","bit-integrations")})})]}),(i==null?void 0:i.campaignId)&&(i==null?void 0:i.field_map.map((c,b)=>t.jsx(Q,{i:b,field:c,getResponseConf:i,formFields:a,setGetResponseConf:l,setSnackbar:x},`rp-m-${b+9}`))),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>I(i.field_map.length,i,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(K,{getResponseConf:i,setGetResponseConf:l,formFields:a,loading:r,setLoading:m})]})]})}export{lt as G};
