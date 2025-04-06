var w=Object.defineProperty;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var F=(t,e,a)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))y.call(e,a)&&F(t,a,e[a]);if(g)for(var a of g(e))k.call(e,a)&&F(t,a,e[a]);return t};import{j as s,f as I,r as v,L}from"./main-623.js";import{x as S}from"./bi.1.443.js";import{_ as l,e as $}from"./bi.422.0.js";import{b as E}from"./bi.727.11.js";import{g as V,m as A,a as T}from"./bi.74.857.js";import{a as R,h as q}from"./bi.757.3.js";import{T as z}from"./bi.220.720.js";function G({mailjetConf:t,setMailjetConf:e}){var r;const a=c=>{const n=d({},t);c.target.checked?n.actions.IsExcludedFromCampaigns=!0:delete n.actions.IsExcludedFromCampaigns,e(d({},n))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(E,{checked:((r=t.actions)==null?void 0:r.IsExcludedFromCampaigns)||!1,onChange:c=>a(c),className:"wdt-200 mt-4 mr-2",value:"update_subscriber",title:l("Is excluded from campaigns","bit-integrations"),subTitle:l("Indicates whether the contact is added to the exclusion list for campaigns or not. An excluded contact will not be receiving any marketing emails.","bit-integrations")})})}const _=(t,e,a)=>{const r=d({},e);r.field_map.splice(t,0,{}),a(d({},r))},P=(t,e,a)=>{const r=d({},e);r.field_map.length>1&&r.field_map.splice(t,1),a(d({},r))},N=(t,e,a,r)=>{const c=d({},a);c.field_map[e][t.target.name]=t.target.value,t.target.value==="custom"&&(c.field_map[e].customValue=""),r(d({},c))};function B({i:t,formFields:e,field:a,mailjetConf:r,setMailjetConf:c}){var p,u,m;const n=(r==null?void 0:r.staticFields.filter(i=>i.required===!0))||[],x=((p=r==null?void 0:r.customFields)==null?void 0:p.filter(i=>i.required===!1))||[];if(((u=r==null?void 0:r.field_map)==null?void 0:u.length)===1&&a.mailjetFormField===""){const i=d({},r),o=V(i);i.field_map=o,c(i)}const b=I($),{isPro:h}=b;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:i=>N(i,t,r,c),children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),s.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:e==null?void 0:e.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),h?"":`(${l("Pro","bit-integrations")})`),children:h&&((m=R)==null?void 0:m.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),a.formField==="custom"&&s.jsx(z,{onChange:i=>q(i,t,r,c),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:e}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<n.length,name:"mailjetFormField",value:t<n?n[t].label||"":a.mailjetFormField||"",onChange:i=>N(i,t,r,c),children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t<n.length?s.jsx("option",{value:n[t].key,children:n[t].label},n[t].key):x.map(({key:i,label:o})=>s.jsx("option",{value:i,children:o},i))]})]}),t>=n.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>_(t,r,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>P(t,r,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function W({formFields:t,mailjetConf:e,setMailjetConf:a,loading:r,setLoading:c,setSnackbar:n}){var m;const[x,b]=v.useState({name:"",auth_token:""}),[h,p]=v.useState(!1),u=i=>{const o=d({},e);o.selectedLists=i,a(d({},o))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx mt-2",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Lists:","bit-integrations")}),s.jsx(S,{options:(m=e==null?void 0:e.lists)==null?void 0:m.map(i=>({label:i.name,value:i.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLists,onChange:i=>u(i)}),s.jsx("button",{onClick:()=>A(e,a,b,p,r,c,"refreshLists"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]}),r.lists&&s.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsxs("b",{className:"wdt-100",children:[l("Field Map","bit-integrations"),s.jsx("button",{onClick:()=>T(e,a,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:r.customFields,children:"↻"})]})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Mailjet Fields","bit-integrations")})})]}),(e==null?void 0:e.selectedLists)&&(e==null?void 0:e.field_map.map((i,o)=>s.jsx(B,{i:o,field:i,mailjetConf:e,formFields:t,setMailjetConf:a,setSnackbar:n},`rp-m-${o+9}`))),(e==null?void 0:e.selectedLists)&&s.jsxs("div",{children:[s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>_(e.field_map.length,e,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(G,{mailjetConf:e,setMailjetConf:a})]})]})]})}export{W as M};
