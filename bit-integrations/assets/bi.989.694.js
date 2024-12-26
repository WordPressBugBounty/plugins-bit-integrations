import{f as u,j as s,L as v}from"./main-119.js";import{e as N,_ as t}from"./bi.686.0.js";import{c as b,a as y,h as $,b as F,d as _}from"./bi.316.3.js";import{r as z,a as R}from"./bi.665.693.js";import{T}from"./bi.301.11.js";import{T as w}from"./bi.570.675.js";function E({i:d,formFields:x,field:c,marketingHubConf:e,setMarketingHubConf:i}){var n,m,h,a,p;const o=c.zohoFormField===""||((n=e.default.fields[e.list].required)==null?void 0:n.indexOf(c.zohoFormField))===-1,j=u(N),{isPro:r}=j;return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:c.formField||"",onChange:l=>b(l,d,e,i),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),s.jsx("optgroup",{label:t("Form Fields","bit-integrations"),children:x.map(l=>l.type!=="file"&&s.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`))}),s.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${t("General Smart Codes","bit-integrations")} ${r?"":`(${t("Pro","bit-integrations")})`}`,children:r&&((m=y)==null?void 0:m.map(l=>s.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),c.formField==="custom"&&s.jsx(w,{onChange:l=>$(l,d,e,i),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:c.customValue,placeholder:t("Custom Value","bit-integrations"),formFields:x}),s.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:c.zohoFormField||"",disabled:!o,onChange:l=>b(l,d,e,i),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),o?((p=(a=(h=e==null?void 0:e.default)==null?void 0:h.fields)==null?void 0:a[e.list])==null?void 0:p.fields)&&e.default.fields[e.list].fields.map(l=>l!=="Contact Email"&&s.jsx("option",{value:l,children:l},`${l}-1`)):s.jsx("option",{value:"Contact Email",children:t("Contact Email","bit-integrations")},"contact_email")]})]}),s.jsx("button",{onClick:()=>F(d,e,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),o&&s.jsx("button",{onClick:()=>_(d,e,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx(T,{})})]})}function M({formID:d,formFields:x,handleInput:c,marketingHubConf:e,setMarketingHubConf:i,isLoading:o,setIsLoading:j,setSnackbar:r}){var n,m,h;return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:t("List:","bit-integrations")}),s.jsxs("select",{onChange:a=>c(a),name:"list",value:e.list,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:t("Select List","bit-integrations")}),((n=e==null?void 0:e.default)==null?void 0:n.lists)&&Object.values(e.default.lists).map(a=>s.jsx("option",{value:a.listkey,children:a.listname},a.listkey))]}),s.jsx("button",{onClick:()=>z(d,e,i,j,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh MarketingHub Lists","bit-integrations")}'`},type:"button",disabled:o,children:"↻"}),s.jsx("br",{}),s.jsx("br",{}),o&&s.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.list&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:t("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>R(d,e,i,j,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh MarketingHub Contact Fields","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),((h=(m=e.default)==null?void 0:m.fields)==null?void 0:h[e.list])&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("Zoho Fields","bit-integrations")})})]}),e.field_map.map((a,p)=>s.jsx(E,{i:p,field:a,marketingHubConf:e,formFields:x,setMarketingHubConf:i},`marketingHub-m-${p+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>F(e.field_map.length,e,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})]})}export{M as Z};
