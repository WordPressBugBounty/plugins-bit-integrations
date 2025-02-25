var $=Object.defineProperty;var y=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var _=(i,r,s)=>r in i?$(i,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[r]=s,p=(i,r)=>{for(var s in r||(r={}))k.call(r,s)&&_(i,s,r[s]);if(y)for(var s of y(r))w.call(r,s)&&_(i,s,r[s]);return i};import{f as z,j as e,L as M}from"./main-212.js";import{e as R,_ as a}from"./bi.717.0.js";import{r as T,a as V}from"./bi.624.701.js";import{T as g}from"./bi.830.11.js";import{a as E,h as L}from"./bi.164.3.js";import{T as S}from"./bi.870.692.js";const f=(i,r,s)=>{const t=p({},r);t.field_map.splice(i,0,{}),s(t)};function Z({i,formFields:r,field:s,campaignsConf:t,setCampaignsConf:n}){var u,o,x,v,N;const m=z(R),{isPro:b}=m,d=s.zohoFormField===""||((u=t.default.fields[t.list].required)==null?void 0:u.indexOf(s.zohoFormField))===-1,j=l=>{const c=p({},t);c.field_map.length>1&&c.field_map.splice(l,1),n(c)},h=(l,c)=>{const F=p({},t);F.field_map[c][l.target.name]=l.target.value,l.target.value==="custom"&&(F.field_map[c].customValue=""),n(F)};return e.jsxs("div",{className:`flx flx-around mt-2 ${d&&"mr-1"}`,children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>h(l,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:r.map(l=>l.type!=="file"&&e.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),b?"":`(${a("Pro","bit-integrations")})`),children:b&&((o=E)==null?void 0:o.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(S,{onChange:l=>L(l,i,t,n),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:s.zohoFormField||"",disabled:!d,onChange:l=>h(l,i),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),d?((N=(v=(x=t==null?void 0:t.default)==null?void 0:x.fields)==null?void 0:v[t.list])==null?void 0:N.fields)&&t.default.fields[t.list].fields.map(l=>l!=="Contact Email"&&e.jsx("option",{value:l,children:l},`${l}-1`)):e.jsx("option",{value:"Contact Email",children:a("Contact Email","bit-integrations")},"contact_email")]}),e.jsx("button",{onClick:()=>f(i,t,n),className:`icn-btn sh-sm ml-2 ${!d&&"mr-8"}`,type:"button",children:"+"}),d&&e.jsx("button",{onClick:()=>j(i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(g,{})})]})}function J({formID:i,formFields:r,handleInput:s,campaignsConf:t,setCampaignsConf:n,isLoading:m,setIsLoading:b,setSnackbar:d}){var j,h,u;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("List:","bit-integrations")}),e.jsxs("select",{onChange:o=>s(o),name:"list",value:t.list,className:"btcd-paper-inp w-7",children:[e.jsx("option",{value:"",children:a("Select List","bit-integrations")}),((j=t==null?void 0:t.default)==null?void 0:j.lists)&&Object.values(t.default.lists).map(o=>e.jsx("option",{value:o.listkey,children:o.listname},o.listkey))]}),e.jsx("button",{onClick:()=>T(i,t,n,b,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Campaigns Lists","bit-integrations")}'`},type:"button",disabled:m,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),m&&e.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.list&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>V(i,t,n,b,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Campaigns Contact Fields","bit-integrations")}'`},type:"button",disabled:m,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),((u=(h=t.default)==null?void 0:h.fields)==null?void 0:u[t.list])&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),t.field_map.map((o,x)=>e.jsx(Z,{i:x,field:o,campaignsConf:t,formFields:r,setCampaignsConf:n},`campaigns-m-${x+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>f(t.field_map.length,t,n),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})]})}export{J as Z};
