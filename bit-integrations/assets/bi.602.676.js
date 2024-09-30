import{i as u,j as s,L as v}from"./main-692.js";import{j as N,q as b,_ as t,k as y,l as $,o as F,r as _,T as z}from"./bi.751.13.js";import{r as R,a as T}from"./bi.346.675.js";import{T as w}from"./bi.588.657.js";function E({i:d,formFields:x,field:c,marketingHubConf:e,setMarketingHubConf:i}){var r,m,h,a,p;const n=c.zohoFormField===""||((r=e.default.fields[e.list].required)==null?void 0:r.indexOf(c.zohoFormField))===-1,j=u(N),{isPro:o}=j;return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:c.formField||"",onChange:l=>b(l,d,e,i),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),s.jsx("optgroup",{label:t("Form Fields","bit-integrations"),children:x.map(l=>l.type!=="file"&&s.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`))}),s.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${t("General Smart Codes","bit-integrations")} ${o?"":`(${t("Pro","bit-integrations")})`}`,children:o&&((m=y)==null?void 0:m.map(l=>s.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),c.formField==="custom"&&s.jsx(w,{onChange:l=>$(l,d,e,i),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:c.customValue,placeholder:t("Custom Value","bit-integrations"),formFields:x}),s.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:c.zohoFormField||"",disabled:!n,onChange:l=>b(l,d,e,i),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),n?((p=(a=(h=e==null?void 0:e.default)==null?void 0:h.fields)==null?void 0:a[e.list])==null?void 0:p.fields)&&e.default.fields[e.list].fields.map(l=>l!=="Contact Email"&&s.jsx("option",{value:l,children:l},`${l}-1`)):s.jsx("option",{value:"Contact Email",children:t("Contact Email","bit-integrations")},"contact_email")]})]}),s.jsx("button",{onClick:()=>F(d,e,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),n&&s.jsx("button",{onClick:()=>_(d,e,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx(z,{})})]})}function q({formID:d,formFields:x,handleInput:c,marketingHubConf:e,setMarketingHubConf:i,isLoading:n,setIsLoading:j,setSnackbar:o}){var r,m,h;return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:t("List:","bit-integrations")}),s.jsxs("select",{onChange:a=>c(a),name:"list",value:e.list,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:t("Select List","bit-integrations")}),((r=e==null?void 0:e.default)==null?void 0:r.lists)&&Object.values(e.default.lists).map(a=>s.jsx("option",{value:a.listkey,children:a.listname},a.listkey))]}),s.jsx("button",{onClick:()=>R(d,e,i,j,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh MarketingHub Lists","bit-integrations")}'`},type:"button",disabled:n,children:"↻"}),s.jsx("br",{}),s.jsx("br",{}),n&&s.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.list&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:t("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>T(d,e,i,j,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh MarketingHub Contact Fields","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),((h=(m=e.default)==null?void 0:m.fields)==null?void 0:h[e.list])&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("Zoho Fields","bit-integrations")})})]}),e.field_map.map((a,p)=>s.jsx(E,{i:p,field:a,marketingHubConf:e,formFields:x,setMarketingHubConf:i},`marketingHub-m-${p+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>F(e.field_map.length,e,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})]})}export{q as Z};
