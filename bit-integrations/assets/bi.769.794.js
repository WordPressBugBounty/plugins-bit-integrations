var w=Object.defineProperty;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var F=(t,e,a)=>e in t?w(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,d=(t,e)=>{for(var a in e||(e={}))y.call(e,a)&&F(t,a,e[a]);if(g)for(var a of g(e))k.call(e,a)&&F(t,a,e[a]);return t};import{j as s,i as I,r as v,L}from"./main-830.js";import{m as S,_ as r,j as $,k as E,l as V,n as A}from"./bi.597.15.js";import{g as T,m as R,a as q}from"./bi.821.793.js";import{T as z}from"./bi.715.660.js";function G({mailjetConf:t,setMailjetConf:e}){var c;const a=l=>{const n=d({},t);l.target.checked?n.actions.IsExcludedFromCampaigns=!0:delete n.actions.IsExcludedFromCampaigns,e(d({},n))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(S,{checked:((c=t.actions)==null?void 0:c.IsExcludedFromCampaigns)||!1,onChange:l=>a(l),className:"wdt-200 mt-4 mr-2",value:"update_subscriber",title:r("Is excluded from campaigns","bit-integrations"),subTitle:r("Indicates whether the contact is added to the exclusion list for campaigns or not. An excluded contact will not be receiving any marketing emails.","bit-integrations")})})}const _=(t,e,a)=>{const c=d({},e);c.field_map.splice(t,0,{}),a(d({},c))},P=(t,e,a)=>{const c=d({},e);c.field_map.length>1&&c.field_map.splice(t,1),a(d({},c))},N=(t,e,a,c)=>{const l=d({},a);l.field_map[e][t.target.name]=t.target.value,t.target.value==="custom"&&(l.field_map[e].customValue=""),c(d({},l))};function B({i:t,formFields:e,field:a,mailjetConf:c,setMailjetConf:l}){var m,u,p;const n=(c==null?void 0:c.staticFields.filter(i=>i.required===!0))||[],x=((m=c==null?void 0:c.customFields)==null?void 0:m.filter(i=>i.required===!1))||[];if(((u=c==null?void 0:c.field_map)==null?void 0:u.length)===1&&a.mailjetFormField===""){const i=d({},c),o=T(i);i.field_map=o,l(i)}const b=I($),{isPro:h}=b;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:i=>N(i,t,c,l),children:[s.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),s.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:e==null?void 0:e.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),h?"":`(${r("Pro","bit-integrations")})`),children:h&&((p=E)==null?void 0:p.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),a.formField==="custom"&&s.jsx(z,{onChange:i=>V(i,t,c,l),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:e}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<n.length,name:"mailjetFormField",value:t<n?n[t].label||"":a.mailjetFormField||"",onChange:i=>N(i,t,c,l),children:[s.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),t<n.length?s.jsx("option",{value:n[t].key,children:n[t].label},n[t].key):x.map(({key:i,label:o})=>s.jsx("option",{value:i,children:o},i))]})]}),t>=n.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>_(t,c,l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>P(t,c,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function J({formFields:t,mailjetConf:e,setMailjetConf:a,loading:c,setLoading:l,setSnackbar:n}){var p;const[x,b]=v.useState({name:"",auth_token:""}),[h,m]=v.useState(!1),u=i=>{const o=d({},e);o.selectedLists=i,a(d({},o))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx mt-2",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Lists:","bit-integrations")}),s.jsx(A,{options:(p=e==null?void 0:e.lists)==null?void 0:p.map(i=>({label:i.name,value:i.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLists,onChange:i=>u(i)}),s.jsx("button",{onClick:()=>R(e,a,b,m,c,l,"refreshLists"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]}),c.lists&&s.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsxs("b",{className:"wdt-100",children:[r("Field Map","bit-integrations"),s.jsx("button",{onClick:()=>q(e,a,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:c.customFields,children:"↻"})]})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Mailjet Fields","bit-integrations")})})]}),(e==null?void 0:e.selectedLists)&&(e==null?void 0:e.field_map.map((i,o)=>s.jsx(B,{i:o,field:i,mailjetConf:e,formFields:t,setMailjetConf:a,setSnackbar:n},`rp-m-${o+9}`))),(e==null?void 0:e.selectedLists)&&s.jsxs("div",{children:[s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>_(e.field_map.length,e,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:r("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(G,{mailjetConf:e,setMailjetConf:a})]})]})]})}export{J as M};
