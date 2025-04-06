var Z=Object.defineProperty;var P=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var q=(a,c,l)=>c in a?Z(a,c,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[c]=l,p=(a,c)=>{for(var l in c||(c={}))f.call(c,l)&&q(a,l,c[l]);if(P)for(var l of P(c))C.call(c,l)&&q(a,l,c[l]);return a};import{r as z,j as t,L as F,f as k}from"./main-623.js";import{x as j}from"./bi.1.443.js";import{_ as e,e as tt}from"./bi.422.0.js";import{a as y}from"./bi.331.9.js";import{b as K}from"./bi.727.11.js";import{g as U,a as B,b as E,d as D,e as G,f as at,i as H,j as Y,k as J,l as Q}from"./bi.852.893.js";import{M as lt,a as it}from"./bi.757.3.js";function et({zendeskConf:a,setZendeskConf:c,loading:l,setLoading:i}){var w,n,r,x,M,S,R;const[m,o]=z.useState({show:!1,action:()=>{}}),h=[{label:e("Yes","bit-integrations"),value:"yes"},{label:e("No","bit-integrations"),value:"no"}],N=[{label:e("New Business","bit-integrations"),value:"New Business"},{label:e("Existing Business","bit-integrations"),value:"Existing Business"}],v=(s,d)=>{var O,T,A,_,V,$,I;const u=p({},a);d==="lead"?(O=s.target)!=null&&O.checked?(U(a,c,i),u.actions.lead=!0):(o({show:!1}),delete u.actions.lead):d==="parentOrganization"?(T=s.target)!=null&&T.checked?(B(a,c,i),u.actions.parentOrganization=!0):(o({show:!1}),delete u.actions.parentOrganization):d==="team"?(A=s.target)!=null&&A.checked?(E(a,c,i),u.actions.team=!0):(o({show:!1}),delete u.actions.team):d==="currency"?(_=s.target)!=null&&_.checked?(D(a,c,i),u.actions.currency=!0):(o({show:!1}),delete u.actions.currency):d==="stage"?(V=s.target)!=null&&V.checked?(G(a,c,i),u.actions.stage=!0):(o({show:!1}),delete u.actions.stage):d==="followUp"?($=s.target)!=null&&$.checked?u.actions.followUp=!0:(o({show:!1}),delete u.actions.followUp):d==="leadType"&&((I=s.target)!=null&&I.checked?u.actions.leadType=!0:(o({show:!1}),delete u.actions.leadType)),o({show:d}),c(p({},u))},b=()=>{o({show:!1})},g=(s,d)=>{const u=p({},a);u[d]=s,c(p({},u))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[a.actionName==="organization"&&t.jsx(K,{checked:((w=a==null?void 0:a.selectedParentOrganization)==null?void 0:w.length)||!1,onChange:s=>v(s,"parentOrganization"),className:"wdt-200 mt-4 mr-2",value:"parentOrganization",title:e("Add ParentOrganization","bit - integrations"),subTitle:e("Add an parentOrganization")}),a.actionName==="deal"&&t.jsx(K,{checked:((n=a==null?void 0:a.selectedStage)==null?void 0:n.length)||!1,onChange:s=>v(s,"stage"),className:"wdt-200 mt-4 mr-2",value:"stage",title:e("Add Stage","bit - integrations"),subTitle:e("Add a stage")}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:e("Ok","bit-integrations"),show:m.show==="lead",close:b,action:b,title:e("Leads","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:e("Select Lead","bit-integrations")}),l.leads?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(j,{options:(r=a==null?void 0:a.leads)==null?void 0:r.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedLead,onChange:s=>g(s,"selectedLead"),singleSelect:!0}),t.jsx("button",{onClick:()=>U(a,c,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${e("Refresh Leads","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:e("Ok","bit-integrations"),show:m.show==="parentOrganization",close:b,action:b,title:e("ParentOrganizations","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:e("Select ParentOrganization","bit-integrations")}),l.parentOrganizations?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(j,{options:(x=a==null?void 0:a.parentOrganizations)==null?void 0:x.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedParentOrganization,onChange:s=>g(s,"selectedParentOrganization"),singleSelect:!0}),t.jsx("button",{onClick:()=>B(a,c,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${e("Refresh ParentOrganizations","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:e("Ok","bit-integrations"),show:m.show==="team",close:b,action:b,title:e("Teams","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:e("Select Team","bit-integrations")}),l.teams?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(j,{options:(M=a==null?void 0:a.teams)==null?void 0:M.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedTeam,onChange:s=>g(s,"selectedTeam"),singleSelect:!0}),t.jsx("button",{onClick:()=>E(a,c,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${e("Refresh Teams","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:e("Ok","bit-integrations"),show:m.show==="currency",close:b,action:b,title:e("Currencies","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:e("Select Currency","bit-integrations")}),l.currencies?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(j,{options:(S=a==null?void 0:a.currencies)==null?void 0:S.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedCurrency,onChange:s=>g(s,"selectedCurrency"),singleSelect:!0}),t.jsx("button",{onClick:()=>D(a,c,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${e("Refresh Currencies","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:e("Ok","bit-integrations"),show:m.show==="stage",close:b,action:b,title:e("Stages","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:e("Select Stage","bit-integrations")}),l.stages?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(j,{options:(R=a==null?void 0:a.stages)==null?void 0:R.map(s=>({label:s.name,value:s.id})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedStage,onChange:s=>g(s,"selectedStage"),singleSelect:!0}),t.jsx("button",{onClick:()=>G(a,c,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${e("Refresh Stages","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:e("Ok","bit-integrations"),show:m.show==="followUp",close:b,action:b,title:e("Follow Up","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"flx flx-center mt-2",children:t.jsx(j,{options:h==null?void 0:h.map(s=>({label:s.label,value:s.value})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedFollowUp,onChange:s=>g(s,"selectedFollowUp"),singleSelect:!0})})]}),t.jsxs(y,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:e("Ok","bit-integrations"),show:m.show==="leadType",close:b,action:b,title:e("Lead types","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"flx flx-center mt-2",children:t.jsx(j,{options:N==null?void 0:N.map(s=>({label:s.label,value:s.value})),className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedLeadType,onChange:s=>g(s,"selectedLeadType"),singleSelect:!0})})]})]})}const L=(a,c,l)=>{const i=p({},c);i.field_map.splice(a,0,{}),l(p({},i))},st=(a,c,l)=>{const i=p({},c);i.field_map.length>1&&i.field_map.splice(a,1),l(p({},i))},W=(a,c,l,i)=>{const m=p({},l);m.field_map[c][a.target.name]=a.target.value,a.target.value==="custom"&&(m.field_map[c].customValue=""),a.target.value==="customFieldKey"&&(m.field_map[c].customFieldKey=""),i(p({},m))},ct=(a,c,l,i,m)=>{const o=p({},l);o.field_map[c][m]=a.target.value,i(p({},o))};function X({field:a,index:c,conf:l,setConf:i,fieldValue:m,fieldLabel:o,className:h}){return t.jsx(lt,{onChange:N=>ct(N,c,l,i,m),label:e(o,"bit-integrations"),className:h,type:"text",value:a[m],placeholder:e(o,"bit-integrations")})}function rt({i:a,formFields:c,field:l,zendeskConf:i,setZendeskConf:m}){var w,n;let o=[];i.actionName==="organization"?o=i==null?void 0:i.organizationFields:i.actionName==="contact"?o=i==null?void 0:i.contactFields:i.actionName==="lead"?o=i==null?void 0:i.leadFields:i.actionName==="deal"&&(o=i==null?void 0:i.dealFields);const h=o.filter(r=>r.required===!0)||[],v=[...o.filter(r=>r.required===!1)||[],...(i==null?void 0:i.customFields)||[]];if(((w=i==null?void 0:i.field_map)==null?void 0:w.length)===1&&l.zendeskFormField===""){const r=p({},i),x=at(r);r.field_map=x,m(r)}const b=k(tt),{isPro:g}=b;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:r=>W(r,a,i,m),children:[t.jsx("option",{value:"",children:e("Select Field","bit-integrations")}),t.jsx("optgroup",{label:e("Form Fields","bit-integrations"),children:c==null?void 0:c.map(r=>t.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`))}),t.jsx("option",{value:"custom",children:e("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(e("General Smart Codes %s","bit-integrations"),g?"":`(${e("Pro","bit-integrations")})`),children:g&&((n=it)==null?void 0:n.map(r=>t.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),l.formField==="custom"&&t.jsx(X,{field:l,index:a,conf:i,setConf:m,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:a<h.length,name:"zendeskFormField",value:a<h?h[a].label||"":l.zendeskFormField||"",onChange:r=>W(r,a,i,m),children:[t.jsx("option",{value:"",children:e("Select Field","bit-integrations")}),a<h.length?t.jsx("option",{value:h[a].key,children:h[a].label},h[a].key):v.map(({key:r,label:x})=>t.jsx("option",{value:r,children:x},r)),(i.actionName==="organization"||i.actionName==="contact"||i.actionName==="lead"||i.actionName==="deal")&&t.jsx("option",{value:"customFieldKey",children:e("Custom Field","bit-integrations")})]}),l.zendeskFormField==="customFieldKey"&&t.jsx(X,{field:l,index:a,conf:i,setConf:m,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),a>=h.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>L(a,i,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>st(a,i,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function gt({formFields:a,handleInput:c,zendeskConf:l,setZendeskConf:i,loading:m,setLoading:o,setSnackbar:h}){var b,g,w;const N=n=>{const r=p({},l);r.field_map=[{formField:"",zendeskFormField:""}];const{name:x}=n.target;n.target.value!==""?(r[x]=n.target.value,Q(r,i,o),n.target.value==="lead"?H(r,i,o):n.target.value==="deal"&&Y(r,i,o)):delete r[x],i(p({},r))},v=(n,r)=>{const x=p({},l);x[r]=n,(r==="selectedCRMCompany"||r==="selectedCRMContact")&&n!==""&&(l.actionName==="lead"||l.actionName==="deal")&&(x.selectedCRMSources="",J(x,i,o)),i(p({},x))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:e("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:N,name:"actionName",value:l.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:e("Select an action","bit-integrations")}),t.jsx("option",{value:"organization",children:e("Create Organization","bit-integrations")}),t.jsx("option",{value:"contact",children:e("Create Contact","bit-integrations")}),t.jsx("option",{value:"lead",children:e("Create Lead","bit-integrations")}),t.jsx("option",{value:"deal",children:e("Create Deal","bit-integrations")})]}),(m.CRMCompanies||m.CRMContacts||m.CRMSources)&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.actionName==="lead"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:e("Select Company:","bit-integrations")}),t.jsx(j,{options:(b=l==null?void 0:l.CRMCompanies)==null?void 0:b.map(n=>({label:n.name,value:n.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedCRMCompany,onChange:n=>v(n,"selectedCRMCompany"),disabled:m.CRMCompanies,singleSelect:!0}),t.jsx("button",{onClick:()=>H(l,i,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${e("Refresh Companies","bit-integrations")}'`},type:"button",disabled:m.CRMCompanies,children:"↻"})]})]}),l.actionName==="deal"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:e("Select Contact:","bit-integrations")}),t.jsx(j,{options:(g=l==null?void 0:l.CRMContacts)==null?void 0:g.map(n=>({label:n.name,value:n.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedCRMContact,onChange:n=>v(n,"selectedCRMContact"),disabled:m.CRMContacts,singleSelect:!0}),t.jsx("button",{onClick:()=>Y(l,i,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${e("Refresh Contacts","bit-integrations")}'`},type:"button",disabled:m.CRMContacts,children:"↻"})]})]}),(l.actionName==="lead"||l.actionName==="deal")&&(l.selectedCRMCompany||l.selectedCRMContact)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:e("Select Source:","bit-integrations")}),t.jsx(j,{options:(w=l==null?void 0:l.CRMSources)==null?void 0:w.map(n=>({label:n.name,value:n.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedCRMSources,onChange:n=>v(n,"selectedCRMSources"),disabled:m.CRMSources,singleSelect:!0}),t.jsx("button",{onClick:()=>J(l,i,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${e("Refresh Sources","bit-integrations")}'`},type:"button",disabled:m.CRMSources,children:"↻"})]})]}),m.customFields&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.actionName&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:e("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>Q(l,i,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${e("Refresh fields","bit-integrations")}'`},type:"button",disabled:m.CRMSources,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:e("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:e("Zendesk Fields","bit-integrations")})})]}),l==null?void 0:l.field_map.map((n,r)=>t.jsx(rt,{i:r,field:n,zendeskConf:l,formFields:a,setZendeskConf:i,setSnackbar:h},`rp-m-${r+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>L(l.field_map.length,l,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:e("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(et,{zendeskConf:l,setZendeskConf:i,formFields:a,loading:m,setLoading:o})]})]})}export{gt as Z};
