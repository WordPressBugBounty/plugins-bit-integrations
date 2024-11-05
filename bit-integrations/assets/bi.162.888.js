var z=Object.defineProperty;var q=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var E=(e,r,s)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,x=(e,r)=>{for(var s in r||(r={}))B.call(r,s)&&E(e,s,r[s]);if(q)for(var s of q(r))D.call(r,s)&&E(e,s,r[s]);return e};import{r as G,j as a,L as w,f as H}from"./main-263.js";import{u as T,z as L}from"./bi.361.434.js";import{_ as i,e as U}from"./bi.924.0.js";import{a as S}from"./bi.402.9.js";import{b as N}from"./bi.929.11.js";import{g as J,a as W,b as X,d as Y,e as Z,f as h,i as f}from"./bi.917.887.js";import{M,a as R}from"./bi.317.3.js";const Q=(e,r,s)=>{const c=x({},r);c.field_map.splice(e,0,{}),s(x({},c))},C=(e,r,s)=>{const c=x({},r);c.field_map.length>1&&c.field_map.splice(e,1),s(x({},c))},K=(e,r,s,c)=>{const m=x({},s);m.field_map[r][e.target.name]=e.target.value,e.target.value==="custom"&&(m.field_map[r].customValue=""),e.target.value==="customFieldKey"&&(m.field_map[r].customFieldKey=""),c(x({},m))},ee=(e,r,s,c,m)=>{const o=x({},s);o.field_map[r][m]=e.target.value,c(x({},o))};function ae({nutshellCRMConf:e,setNutshellCRMConf:r,loading:s,setLoading:c}){var v,d,y,p,F,A,k;const[m,o]=G.useState({show:!1,action:()=>{}}),b=(t,j)=>{var u,P,_,O,I,V,$;const l=x({},e);j==="priority"?(u=t.target)!=null&&u.checked?l.actions.Priority=!0:(o({show:!1}),delete l.actions.Priority):j==="Contact"?(P=t.target)!=null&&P.checked?(J(e,r,c),l.actions.Contact=!0):delete l.actions.Contact:j==="Product"?(_=t.target)!=null&&_.checked?(W(e,r,c),l.actions.Product=!0):delete l.actions.Contact:j==="Source"?(O=t.target)!=null&&O.checked?(X(e,r,c),l.actions.Source=!0):delete l.actions.Contact:j==="Tag"?(I=t.target)!=null&&I.checked?(Y(e,r,c),l.actions.Tag=!0):delete l.actions.Contact:j==="Company"?(V=t.target)!=null&&V.checked?(Z(e,r,c),l.actions.Company=!0):delete l.actions.Company:j==="CompanyType"&&(($=t.target)!=null&&$.checked?(h(e,r,c),l.actions.CompanyType=!0):delete l.actions.CompanyType),o({show:j}),r(x({},l))},n=()=>{o({show:!1})},g=(t,j)=>{const l=x({},e);l[j]=t,r(x({},l))};return a.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.actionName==="lead"&&a.jsx(N,{checked:((v=e.actions)==null?void 0:v.Priority)||!1,onChange:t=>b(t,"priority"),className:"wdt-200 mt-4 mr-2",value:"priority",title:i("Priority","bit-integrations"),subTitle:i("Priority","bit-integrations")}),(e.actionName==="lead"||e.actionName==="people")&&a.jsx(N,{checked:(e==null?void 0:e.selectedCompany)||!1,onChange:t=>b(t,"Company"),className:"wdt-200 mt-4 mr-2",value:"Company",title:i("Add Company","bit - integrations"),subTitle:i("Add Company")}),e.actionName==="lead"&&a.jsx(N,{checked:(e==null?void 0:e.selectedProduct)||!1,onChange:t=>b(t,"Product"),className:"wdt-200 mt-4 mr-2",value:"Product",title:i("Add Product","bit - integrations"),subTitle:i("Add Product")}),e.actionName==="lead"&&a.jsx(N,{checked:(e==null?void 0:e.selectedSource)||!1,onChange:t=>b(t,"Source"),className:"wdt-200 mt-4 mr-2",value:"Source",title:i("Add Source","bit - integrations"),subTitle:i("Add Source")}),e.actionName==="lead"&&a.jsx(N,{checked:(e==null?void 0:e.selectedTag)||!1,onChange:t=>b(t,"Tag"),className:"wdt-200 mt-4 mr-2",value:"Tag",title:i("Add Tag","bit - integrations"),subTitle:i("Add Tag")}),(e.actionName==="company"||e.actionName==="lead")&&a.jsx(N,{checked:(e==null?void 0:e.selectedContact)||!1,onChange:t=>b(t,"Contact"),className:"wdt-200 mt-4 mr-2",value:"Contact",title:i("Add Contact","bit - integrations"),subTitle:i("Add Contact")}),e.actionName==="company"&&a.jsx(N,{checked:(e==null?void 0:e.selectedCompanyType)||!1,onChange:t=>b(t,"CompanyType"),className:"wdt-200 mt-4 mr-2",value:"CompanyType",title:i("Add CompanyType","bit - integrations"),subTitle:i("Add CompanyType")}),a.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:m.show==="Company",close:n,action:n,title:i("Add Company","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"mt-2",children:i("Select Company","bit-integrations")}),s.companies?a.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsx("div",{className:"flx flx-between mt-2",children:a.jsx(T,{options:(d=e==null?void 0:e.companies)==null?void 0:d.map(t=>({label:t.name,value:t.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedCompany,onChange:t=>g(t,"selectedCompany"),singleSelect:!0,closeOnSelect:!0})})]}),a.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:m.show==="Contact",close:n,action:n,title:i("Add Contact","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"mt-2",children:i("Select Contact","bit-integrations")}),s.contacts?a.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsx("div",{className:"flx flx-between mt-2",children:a.jsx(T,{options:(y=e==null?void 0:e.contacts)==null?void 0:y.map(t=>({label:t.name,value:t.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedContact,onChange:t=>g(t,"selectedContact"),singleSelect:!0,closeOnSelect:!0})})]}),a.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:m.show==="Product",close:n,action:n,title:i("Add Product","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"mt-2",children:i("Select Product","bit-integrations")}),s.products?a.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsx("div",{className:"flx flx-between mt-2",children:a.jsx(T,{options:(p=e==null?void 0:e.products)==null?void 0:p.map(t=>({label:t.name,value:t.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedProduct,onChange:t=>g(t,"selectedProduct"),singleSelect:!0,closeOnSelect:!0})})]}),a.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:m.show==="Source",close:n,action:n,title:i("Add Source","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"mt-2",children:i("Select Source","bit-integrations")}),s.sources?a.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsx("div",{className:"flx flx-between mt-2",children:a.jsx(T,{options:(F=e==null?void 0:e.sources)==null?void 0:F.map(t=>({label:t.name,value:t.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedSource,onChange:t=>g(t,"selectedSource"),singleSelect:!0,closeOnSelect:!0})})]}),a.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:m.show==="Tag",close:n,action:n,title:i("Add Tag","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"mt-2",children:i("Select tag","bit-integrations")}),s.tags?a.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsx("div",{className:"flx flx-between mt-2",children:a.jsx(T,{options:(A=e==null?void 0:e.tags)==null?void 0:A.map(t=>({label:t.name,value:t.name})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedTag,onChange:t=>g(t,"selectedTag"),singleSelect:!0,closeOnSelect:!0})})]}),a.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:m.show==="CompanyType",close:n,action:n,title:i("Add CompanyType","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"mt-2",children:i("Select CompanyType","bit-integrations")}),s.companyTypes?a.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsx("div",{className:"flx flx-between mt-2",children:a.jsx(T,{options:(k=e==null?void 0:e.companyTypes)==null?void 0:k.map(t=>({label:t.name,value:t.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedCompanyType,onChange:t=>g(t,"selectedCompanyType"),singleSelect:!0,closeOnSelect:!0})})]})]})}function te({field:e,index:r,conf:s,setConf:c,fieldValue:m,fieldLabel:o,className:b}){return a.jsx(M,{onChange:n=>ee(n,r,s,c,m),label:i(o,"bit-integrations"),className:b,type:"text",value:e[m],placeholder:i(o,"bit-integrations")})}function ie({i:e,formFields:r,field:s,nutshellCRMConf:c,setNutshellCRMConf:m}){var v;const o=(c==null?void 0:c.nutshellCRMFields)&&(c==null?void 0:c.nutshellCRMFields.filter(d=>d.required===!0))||[],b=(c==null?void 0:c.nutshellCRMFields)&&(c==null?void 0:c.nutshellCRMFields.filter(d=>d.required===!1))||[],n=H(U),{isPro:g}=n;return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:d=>K(d,e,c,m),children:[a.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),a.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:r==null?void 0:r.map(d=>a.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`))}),a.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),a.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),g?"":`(${i("Pro","bit-integrations")})`),children:g&&((v=R)==null?void 0:v.map(d=>a.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`)))})]}),s.formField==="custom"&&a.jsx(te,{field:s,index:e,conf:c,setConf:m,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),a.jsxs("select",{className:"btcd-paper-inp",disabled:e<o.length,name:"nutshellCRMFormField",value:e<o.length?o[e].key||"":s.nutshellCRMFormField||"",onChange:d=>K(d,e,c,m),children:[a.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e<o.length?a.jsx("option",{value:o[e].key,children:o[e].label},o[e].key):b.map(({key:d,label:y})=>a.jsx("option",{value:d,children:y},d))]})]}),e>=o.length&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>Q(e,c,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>C(e,c,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function pe({formFields:e,handleInput:r,nutshellCRMConf:s,setNutshellCRMConf:c,loading:m,setLoading:o,isLoading:b,setIsLoading:n,setSnackbar:g}){const v=d=>{c(y=>L(y,p=>{const{name:F}=d.target;d.target.value!==""?(p.actionName=d.target.value,p.actionName==="people"?p.nutshellCRMFields=p.peopleFields:p.actionName==="company"?p.nutshellCRMFields=p.companyFields:p.actionName==="lead"&&(p.nutshellCRMFields=p.leadFields,p.leadStatus=["Lead","Open","Replied","Opportunity","Quotation","Lost Quotation","Interested","Converted","Do Not Company"]),p.field_map=f(p)):delete p[F]}))};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),a.jsxs("select",{onChange:v,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:i("Select an action","bit-integrations")}),a.jsx("option",{value:"company","data-action_name":"company",children:i("Create Company","bit-integrations")}),a.jsx("option",{value:"people","data-action_name":"people",children:i("Create People","bit-integrations")}),a.jsx("option",{value:"lead","data-action_name":"lead",children:i("Create Lead","bit-integrations")})]}),a.jsx("br",{}),b&&a.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&!b&&a.jsxs("div",{children:[a.jsx("br",{}),a.jsx("div",{className:"mt-5",children:a.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),a.jsx("br",{}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:i("NutshellCRM Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((d,y)=>a.jsx(ie,{i:y,field:d,nutshellCRMConf:s,formFields:e,setNutshellCRMConf:c,setSnackbar:g},`rp-m-${y+9}`)),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>Q(s.field_map.length,s,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsx(ae,{nutshellCRMConf:s,setNutshellCRMConf:c,formFields:e,loading:m,setLoading:o})]})]})}export{pe as N};
