var Q=Object.defineProperty;var K=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var R=(e,a,s)=>a in e?Q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,x=(e,a)=>{for(var s in a||(a={}))W.call(a,s)&&R(e,s,a[s]);if(K)for(var s of K(a))X.call(a,s)&&R(e,s,a[s]);return e};import{r as Z,j as t,L as u,f as L}from"./main-252.js";import{x as v}from"./bi.269.440.js";import{_ as n,e as f}from"./bi.63.0.js";import{a as F}from"./bi.456.9.js";import{b as k}from"./bi.494.11.js";import{g as U,a as q,b as B,d as E,e as C,f as z,i as G,j as H}from"./bi.848.850.js";import{M as tt,a as et}from"./bi.163.3.js";function it({capsulecrmConf:e,setCapsuleCRMConf:a,loading:s,setLoading:i}){var b,h,d,p,O,T,M,S;const[o,r]=Z.useState({show:!1,action:()=>{}}),j=[{label:n("Yes","bit-integrations"),value:"yes"},{label:n("No","bit-integrations"),value:"no"}],y=[{label:n("New Business","bit-integrations"),value:"New Business"},{label:n("Existing Business","bit-integrations"),value:"Existing Business"}],c=(l,w)=>{var A,_,P,V,$,I;const g=x({},e);w==="opportunity"?(A=l.target)!=null&&A.checked?(U(e,a,i),g.actions.opportunity=!0):(r({show:!1}),delete g.actions.opportunity):w==="owner"?(_=l.target)!=null&&_.checked?(q(e,a,i),g.actions.owner=!0):(r({show:!1}),delete g.actions.owner):w==="team"?(P=l.target)!=null&&P.checked?(B(e,a,i),g.actions.team=!0):(r({show:!1}),delete g.actions.team):w==="currency"?(V=l.target)!=null&&V.checked?(E(e,a,i),g.actions.currency=!0):(r({show:!1}),delete g.actions.currency):w==="followUp"?($=l.target)!=null&&$.checked?g.actions.followUp=!0:(r({show:!1}),delete g.actions.followUp):w==="opportunityType"&&((I=l.target)!=null&&I.checked?g.actions.opportunityType=!0:(r({show:!1}),delete g.actions.opportunityType)),r({show:w}),a(x({},g))},m=()=>{r({show:!1})},N=(l,w)=>{const g=x({},e);g[w]=l,a(x({},g))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(e.actionName==="person"||e.actionName==="organisation"||e.actionName==="opportunity"||e.actionName==="project")&&t.jsx(k,{checked:((b=e==null?void 0:e.selectedOwner)==null?void 0:b.length)||!1,onChange:l=>c(l,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:n("Add Owner","bit - integrations"),subTitle:n("Add an owner")}),(e.actionName==="person"||e.actionName==="organisation"||e.actionName==="opportunity"||e.actionName==="project")&&t.jsx(k,{checked:((h=e==null?void 0:e.selectedTeam)==null?void 0:h.length)||!1,onChange:l=>c(l,"team"),className:"wdt-200 mt-4 mr-2",value:"team",title:n("Add Team","bit - integrations"),subTitle:n("Add an team")}),e.actionName==="opportunity"&&t.jsx(k,{checked:((d=e==null?void 0:e.selectedCurrency)==null?void 0:d.length)||!1,onChange:l=>c(l,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:n("Add Currency","bit - integrations"),subTitle:n("Add a currency")}),e.actionName==="project"&&t.jsx(k,{checked:((p=e==null?void 0:e.selectedOpportunity)==null?void 0:p.length)||!1,onChange:l=>c(l,"opportunity"),className:"wdt-200 mt-4 mr-2",value:"opportunity",title:n("Add Opportunity","bit - integrations"),subTitle:n("Add a opportunity")}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="opportunity",close:m,action:m,title:n("Opportunities","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select Opportunity","bit-integrations")}),s.opportunities?t.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(v,{options:(O=e==null?void 0:e.opportunities)==null?void 0:O.map(l=>({label:l.name,value:l.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedOpportunity,onChange:l=>N(l,"selectedOpportunity"),singleSelect:!0}),t.jsx("button",{onClick:()=>U(e,a,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Opportunities","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="owner",close:m,action:m,title:n("Owners","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select Owner","bit-integrations")}),s.owners?t.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(v,{options:(T=e==null?void 0:e.owners)==null?void 0:T.map(l=>({label:l.name,value:l.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedOwner,onChange:l=>N(l,"selectedOwner"),singleSelect:!0}),t.jsx("button",{onClick:()=>q(e,a,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Owners","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="team",close:m,action:m,title:n("Teams","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select Team","bit-integrations")}),s.teams?t.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(v,{options:(M=e==null?void 0:e.teams)==null?void 0:M.map(l=>({label:l.name,value:l.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedTeam,onChange:l=>N(l,"selectedTeam"),singleSelect:!0}),t.jsx("button",{onClick:()=>B(e,a,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Teams","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="currency",close:m,action:m,title:n("Currencies","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select Currency","bit-integrations")}),s.currencies?t.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(v,{options:(S=e==null?void 0:e.currencies)==null?void 0:S.map(l=>({label:l.name,value:l.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedCurrency,onChange:l=>N(l,"selectedCurrency"),singleSelect:!0}),t.jsx("button",{onClick:()=>E(e,a,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Currencies","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="followUp",close:m,action:m,title:n("Follow Up","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"flx flx-center mt-2",children:t.jsx(v,{options:j==null?void 0:j.map(l=>({label:l.label,value:l.value})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedFollowUp,onChange:l=>N(l,"selectedFollowUp"),singleSelect:!0})})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:o.show==="opportunityType",close:m,action:m,title:n("Opportunity types","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"flx flx-center mt-2",children:t.jsx(v,{options:y==null?void 0:y.map(l=>({label:l.label,value:l.value})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedOpportunityType,onChange:l=>N(l,"selectedOpportunityType"),singleSelect:!0})})]})]})}const J=(e,a,s)=>{const i=x({},a);i.field_map.splice(e,0,{}),s(x({},i))},st=(e,a,s)=>{const i=x({},a);i.field_map.length>1&&i.field_map.splice(e,1),s(x({},i))},Y=(e,a,s,i)=>{const o=x({},s);o.field_map[a][e.target.name]=e.target.value,e.target.value==="custom"&&(o.field_map[a].customValue=""),e.target.value==="customFieldKey"&&(o.field_map[a].customFieldKey=""),i(x({},o))},nt=(e,a,s,i,o)=>{const r=x({},s);r.field_map[a][o]=e.target.value,i(x({},r))};function D({field:e,index:a,conf:s,setConf:i,fieldValue:o,fieldLabel:r,className:j}){return t.jsx(tt,{onChange:y=>nt(y,a,s,i,o),label:n(r,"bit-integrations"),className:j,type:"text",value:e[o],placeholder:n(r,"bit-integrations")})}function lt({i:e,formFields:a,field:s,capsulecrmConf:i,setCapsuleCRMConf:o}){var b,h;let r=[];i.actionName==="organisation"?r=i==null?void 0:i.organisationFields:i.actionName==="person"?r=i==null?void 0:i.personFields:i.actionName==="opportunity"?r=i==null?void 0:i.opportunityFields:i.actionName==="project"&&(r=i==null?void 0:i.projectFields);const j=r.filter(d=>d.required===!0)||[],y=r.filter(d=>d.required===!1)||[],c=i.customFields?[...y,...i==null?void 0:i.customFields]:y;if(((b=i==null?void 0:i.field_map)==null?void 0:b.length)===1&&s.capsulecrmFormField===""){const d=x({},i),p=C(d);d.field_map=p,o(d)}const m=L(f),{isPro:N}=m;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:d=>Y(d,e,i,o),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:a==null?void 0:a.map(d=>t.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),N?"":`(${n("Pro","bit-integrations")})`),children:N&&((h=et)==null?void 0:h.map(d=>t.jsx("option",{value:d.name,children:d.label},`ff-rm-${d.name}`)))})]}),s.formField==="custom"&&t.jsx(D,{field:s,index:e,conf:i,setConf:o,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<j.length,name:"capsulecrmFormField",value:e<j?j[e].label||"":s.capsulecrmFormField||"",onChange:d=>Y(d,e,i,o),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e<j.length?t.jsx("option",{value:j[e].key,children:j[e].label},j[e].key):c.map(({key:d,label:p})=>t.jsx("option",{value:d,children:p},d)),(i.actionName==="organisation"||i.actionName==="person"||i.actionName==="opportunity"||i.actionName==="project")&&t.jsx("option",{value:"customFieldKey",children:n("Custom Field","bit-integrations")})]}),s.capsulecrmFormField==="customFieldKey"&&t.jsx(D,{field:s,index:e,conf:i,setConf:o,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),e>=j.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>J(e,i,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>st(e,i,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function jt({formFields:e,handleInput:a,capsulecrmConf:s,setCapsuleCRMConf:i,loading:o,setLoading:r,setSnackbar:j}){var m,N;const y=b=>{const h=x({},s);h.field_map=[{formField:"",capsulecrmFormField:""}];const{name:d}=b.target;b.target.value!==""?(h[d]=b.target.value,H(h,i,r),(b.target.value==="opportunity"||b.target.value==="project")&&z(h,i,r)):delete h[d],i(x({},h))},c=(b,h)=>{const d=x({},s);d[h]=b,h==="selectedCRMParty"&&b!==""&&s.actionName==="opportunity"&&(d.selectedCRMMilestones="",G(d,i,r)),i(x({},d))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:y,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:n("Select an action","bit-integrations")}),t.jsx("option",{value:"organisation",children:n("Create Organization","bit-integrations")}),t.jsx("option",{value:"person",children:n("Create Person","bit-integrations")}),t.jsx("option",{value:"opportunity",children:n("Create Opportunity","bit-integrations")}),t.jsx("option",{value:"project",children:n("Create Project","bit-integrations")})]}),(o.CRMParties||o.CRMMilestones)&&t.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(s.actionName==="opportunity"||s.actionName==="project")&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Party:","bit-integrations")}),t.jsx(v,{options:(m=s==null?void 0:s.CRMParties)==null?void 0:m.map(b=>({label:b.name,value:b.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCRMParty,onChange:b=>c(b,"selectedCRMParty"),disabled:o.CRMParties,singleSelect:!0}),t.jsx("button",{onClick:()=>z(s,i,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh parties","bit-integrations")}'`},type:"button",disabled:o.CRMParties,children:"↻"})]})]}),s.actionName==="opportunity"&&s.selectedCRMParty&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Milestone:","bit-integrations")}),t.jsx(v,{options:(N=s==null?void 0:s.CRMMilestones)==null?void 0:N.map(b=>({label:b.name,value:b.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCRMMilestones,onChange:b=>c(b,"selectedCRMMilestones"),disabled:o.CRMMilestones,singleSelect:!0}),t.jsx("button",{onClick:()=>G(s,i,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh Milestones","bit-integrations")}'`},type:"button",disabled:o.CRMMilestones,children:"↻"})]})]}),o.customFields&&t.jsx(u,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&!o.customFields&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>H(s,i,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh fields","bit-integrations")}'`},type:"button",disabled:o.CRMMilestones,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("CapsuleCRM Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((b,h)=>t.jsx(lt,{i:h,field:b,capsulecrmConf:s,formFields:e,setCapsuleCRMConf:i,setSnackbar:j},`rp-m-${h+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>J(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(it,{capsulecrmConf:s,setCapsuleCRMConf:i,formFields:e,loading:o,setLoading:r})]})]})}export{jt as C};
