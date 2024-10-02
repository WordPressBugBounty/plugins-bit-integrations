var q=Object.defineProperty;var I=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var O=(t,s,a)=>s in t?q(t,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[s]=a,g=(t,s)=>{for(var a in s||(s={}))P.call(s,a)&&O(t,a,s[a]);if(I)for(var a of I(s))D.call(s,a)&&O(t,a,s[a]);return t};import{r as E,j as e,L as p,i as W}from"./main-650.js";import{m as k,_ as i,e as _,n as S,H as B,j as G,k as Q}from"./bi.541.15.js";import{g as R,a as T,b as U}from"./bi.368.858.js";function z({companyHubConf:t,setCompanyHubConf:s,loading:a,setLoading:l}){var v,n,r,j,w,u;const[h,d]=E.useState({show:!1,action:()=>{}}),m=(c,F)=>{var M,A,$;const x=g({},t);F==="company"?(M=c.target)!=null&&M.checked?(x.companies===void 0&&(x.companies=R(t,s,l)),x.actions.company=!0):(d({show:!1}),delete x.actions.company):F==="source"?(A=c.target)!=null&&A.checked?(x.sources===void 0&&(x.sources=["Web","Call","Referral","Other"]),x.actions.source=!0):(d({show:!1}),delete x.actions.source):F==="contact"&&(($=c.target)!=null&&$.checked?(x.contacts===void 0&&(x.contacts=T(t,s,l)),x.actions.contact=!0):(d({show:!1}),delete x.actions.contact)),d({show:F}),s(g({},x))},o=()=>{d({show:!1})},N=(c,F)=>{s(x=>(x[F]=c,x))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(t.actionName==="contact"||t.actionName==="deal")&&e.jsx(k,{checked:((v=t==null?void 0:t.selectedCompany)==null?void 0:v.length)||!1,onChange:c=>m(c,"company"),className:"wdt-200 mt-4 mr-2",value:"company",title:i("Add Company","bit - integrations"),subTitle:i("Add Company")}),t.actionName==="contact"&&e.jsx(k,{checked:((n=t==null?void 0:t.selectedSource)==null?void 0:n.length)||!1,onChange:c=>m(c,"source"),className:"wdt-200 mt-4 mr-2",value:"source",title:i("Add Source","bit - integrations"),subTitle:i("Add Contact Source")}),t.actionName==="deal"&&e.jsx(k,{checked:((r=t==null?void 0:t.selectedContact)==null?void 0:r.length)||!1,onChange:c=>m(c,"contact"),className:"wdt-200 mt-4 mr-2",value:"contact",title:i("Add Contact","bit - integrations"),subTitle:i("Add Contact")}),e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:h.show==="company",close:o,action:o,title:i("Company","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Company","bit-integrations")}),a.companies?e.jsx(p,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(S,{options:(j=t==null?void 0:t.companies)==null?void 0:j.map(c=>({label:c.name,value:`${c.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedCompany,onChange:c=>N(c,"selectedCompany"),singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>R(t,s,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Companies","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:h.show==="source",close:o,action:o,title:i("Source","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Source","bit-integrations")}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(S,{options:(w=t==null?void 0:t.sources)==null?void 0:w.map(c=>({label:c,value:c})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedSource,onChange:c=>N(c,"selectedSource"),singleSelect:!0,closeOnSelect:!0})})]}),e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:h.show==="contact",close:o,action:o,title:i("Contact","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Contact","bit-integrations")}),a.contact?e.jsx(p,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(S,{options:(u=t==null?void 0:t.contacts)==null?void 0:u.map(c=>({label:c.name,value:`${c.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedContact,onChange:c=>N(c,"selectedContact"),singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>T(t,s,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Contacts","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const V=(t,s,a)=>{const l=g({},s);l.field_map.splice(t,0,{}),a(g({},l))},J=(t,s,a)=>{const l=g({},s);l.field_map.length>1&&l.field_map.splice(t,1),a(g({},l))},b=(t,s,a,l)=>{const h=g({},a);h.field_map[s][t.target.name]=t.target.value,t.target.value==="custom"&&(h.field_map[s].customValue=""),l(g({},h))},K=(t,s,a,l,h)=>{const d=g({},a);d.field_map[s][h]=t.target.value,l(g({},d))};function L({field:t,index:s,conf:a,setConf:l,fieldValue:h,fieldLabel:d,className:m}){return e.jsx(B,{onChange:o=>K(o,s,a,l,h),label:i(d,"bit-integrations"),className:m,type:"text",value:t[h],placeholder:i(d,"bit-integrations")})}function X({i:t,formFields:s,field:a,companyHubConf:l,setCompanyHubConf:h}){var n;let d=[];l.actionName==="contact"?d=l==null?void 0:l.contactFields:l.actionName==="company"?d=l==null?void 0:l.companyFields:l.actionName==="deal"&&(d=l==null?void 0:l.dealFields);const m=d.filter(r=>r.required===!0)||[],o=d.filter(r=>r.required===!1)||[],N=W(G),{isPro:v}=N;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:r=>b(r,t,l,h),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:s==null?void 0:s.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),v?"":`(${i("Pro","bit-integrations")})`),children:v&&((n=Q)==null?void 0:n.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),a.formField==="custom"&&e.jsx(L,{field:a,index:t,conf:l,setConf:h,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<m.length,name:"companyHubFormField",value:t<m.length?m[t].key||"":a.companyHubFormField||"",onChange:r=>b(r,t,l,h),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t<m.length?e.jsx("option",{value:m[t].key,children:m[t].label},m[t].key):o.map(({key:r,label:j})=>e.jsx("option",{value:r,children:j},r))]})]}),t>=m.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>V(t,l,h),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>J(t,l,h),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function y({formFields:t,companyHubConf:s,setCompanyHubConf:a,loading:l,setLoading:h,isLoading:d,setIsLoading:m,setSnackbar:o}){const N=n=>{const r=g({},s),{name:j}=n.target;if(n.target.value!==""){r[j]=n.target.value;let w=[];n.target.value==="contact"?w=s==null?void 0:s.contactFields:n.target.value==="company"?w=s==null?void 0:s.companyFields:n.target.value==="deal"&&(w=s==null?void 0:s.dealFields),r.field_map=U(w)}else delete r[j],delete r.actionId;a(r)},v=(n,r)=>{a(j=>(j[r]=n,j))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:N,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select an action","bit-integrations")}),e.jsx("option",{value:"contact","data-action_name":"contact",children:i("Create Contact","bit-integrations")}),e.jsx("option",{value:"company","data-action_name":"company",children:i("Create Company","bit-integrations")}),e.jsx("option",{value:"deal","data-action_name":"deal",children:i("Create Deal","bit-integrations")})]}),d&&e.jsx(p,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName==="deal"&&!d&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Deal Stage:","bit-integrations")}),e.jsx(S,{options:["Prospecting","Qualification","Discussion","Proposal","Review","Closed Won","Closed Lost"].map(n=>({label:n,value:n})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedStage,onChange:n=>v(n,"selectedStage"),singleSelect:!0,closeOnSelect:!0})]})]}),s.actionName&&!d&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")}),e.jsx("button",{className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh fields","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("CompanyHub Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((n,r)=>e.jsx(X,{i:r,field:n,companyHubConf:s,formFields:t,setCompanyHubConf:a,setSnackbar:o},`rp-m-${r+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>V(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(z,{companyHubConf:s,setCompanyHubConf:a,formFields:t,loading:l,setLoading:h})]})]})}export{y as C};