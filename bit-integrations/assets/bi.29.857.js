var Q=Object.defineProperty;var K=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var R=(e,n,l)=>n in e?Q(e,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[n]=l,m=(e,n)=>{for(var l in n||(n={}))W.call(n,l)&&R(e,l,n[l]);if(K)for(var l of K(n))X.call(n,l)&&R(e,l,n[l]);return e};import{r as Z,j as t,L as k,f as L}from"./main-119.js";import{x as c}from"./bi.276.437.js";import{_ as i,e as f}from"./bi.686.0.js";import{a as S}from"./bi.900.9.js";import{b as P}from"./bi.301.11.js";import{g as U,a as q,b as B,d as E,e as p,f as G,i as H,j as Y}from"./bi.135.856.js";import{M as C,a as tt}from"./bi.316.3.js";function et({coppercrmConf:e,setCopperCRMConf:n,loading:l,setLoading:s}){var h,x,u,F,O,r,A;const[d,b]=Z.useState({show:!1,action:()=>{}}),j=[{label:i("Yes","bit-integrations"),value:"yes"},{label:i("No","bit-integrations"),value:"no"}],y=[{label:i("New Business","bit-integrations"),value:"New Business"},{label:i("Existing Business","bit-integrations"),value:"Existing Business"}],v=(a,w)=>{var _,T,M,V,$,I;const o=m({},e);w==="opportunity"?(_=a.target)!=null&&_.checked?(U(e,n,s),o.actions.opportunity=!0):(b({show:!1}),delete o.actions.opportunity):w==="owner"?(T=a.target)!=null&&T.checked?(q(e,n,s),o.actions.owner=!0):(b({show:!1}),delete o.actions.owner):w==="company"?(M=a.target)!=null&&M.checked?(B(e,n,s),o.actions.company=!0):(b({show:!1}),delete o.actions.company):w==="pipelineStage"?(V=a.target)!=null&&V.checked?(E(e,n,s),o.actions.pipelineStage=!0):(b({show:!1}),delete o.actions.pipelineStage):w==="followUp"?($=a.target)!=null&&$.checked?o.actions.followUp=!0:(b({show:!1}),delete o.actions.followUp):w==="opportunityType"&&((I=a.target)!=null&&I.checked?o.actions.opportunityType=!0:(b({show:!1}),delete o.actions.opportunityType)),b({show:w}),n(m({},o))},g=()=>{b({show:!1})},N=(a,w)=>{const o=m({},e);o[w]=a,n(m({},o))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(e.actionName==="person"||e.actionName==="company"||e.actionName==="opportunity"||e.actionName==="task")&&t.jsx(P,{checked:((h=e==null?void 0:e.selectedOwner)==null?void 0:h.length)||!1,onChange:a=>v(a,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:i("Add Owner","bit - integrations"),subTitle:i("Add an owner")}),e.actionName==="opportunity"&&t.jsx(P,{checked:((x=e==null?void 0:e.selectedCompany)==null?void 0:x.length)||!1,onChange:a=>v(a,"company"),className:"wdt-200 mt-4 mr-2",value:"company",title:i("Add Company","bit - integrations"),subTitle:i("Add an company")}),e.actionName==="opportunity"&&t.jsx(P,{checked:((u=e==null?void 0:e.selectedPipelineStage)==null?void 0:u.length)||!1,onChange:a=>v(a,"pipelineStage"),className:"wdt-200 mt-4 mr-2",value:"pipelineStage",title:i("Add PipelineStage","bit - integrations"),subTitle:i("Add a pipelineStage")}),t.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="opportunity",close:g,action:g,title:i("Opportunities","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select Opportunity","bit-integrations")}),l.opportunities?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(c,{options:(F=e==null?void 0:e.opportunities)==null?void 0:F.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedOpportunity,onChange:a=>N(a,"selectedOpportunity"),singleSelect:!0}),t.jsx("button",{onClick:()=>U(e,n,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Opportunities","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="owner",close:g,action:g,title:i("Owners","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select Owner","bit-integrations")}),l.owners?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(c,{options:(O=e==null?void 0:e.owners)==null?void 0:O.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedOwner,onChange:a=>N(a,"selectedOwner"),singleSelect:!0}),t.jsx("button",{onClick:()=>q(e,n,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Owners","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="company",close:g,action:g,title:i("Companies","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select Company","bit-integrations")}),l.companies?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(c,{options:(r=e==null?void 0:e.companies)==null?void 0:r.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedCompany,onChange:a=>N(a,"selectedCompany"),singleSelect:!0}),t.jsx("button",{onClick:()=>B(e,n,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Companies","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="pipelineStage",close:g,action:g,title:i("PipelineStages","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select PipelineStage","bit-integrations")}),l.pipelineStages?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(c,{options:(A=e==null?void 0:e.pipelineStages)==null?void 0:A.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedPipelineStage,onChange:a=>N(a,"selectedPipelineStage"),singleSelect:!0}),t.jsx("button",{onClick:()=>E(e,n,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh PipelineStages","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="followUp",close:g,action:g,title:i("Follow Up","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"flx flx-center mt-2",children:t.jsx(c,{options:j==null?void 0:j.map(a=>({label:a.label,value:a.value})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedFollowUp,onChange:a=>N(a,"selectedFollowUp"),singleSelect:!0})})]}),t.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="opportunityType",close:g,action:g,title:i("Opportunity types","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"flx flx-center mt-2",children:t.jsx(c,{options:y==null?void 0:y.map(a=>({label:a.label,value:a.value})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedOpportunityType,onChange:a=>N(a,"selectedOpportunityType"),singleSelect:!0})})]})]})}const J=(e,n,l)=>{const s=m({},n);s.field_map.splice(e,0,{}),l(m({},s))},st=(e,n,l)=>{const s=m({},n);s.field_map.length>1&&s.field_map.splice(e,1),l(m({},s))},z=(e,n,l,s)=>{const d=m({},l);d.field_map[n][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[n].customValue=""),e.target.value==="customFieldKey"&&(d.field_map[n].customFieldKey=""),s(m({},d))},lt=(e,n,l,s,d)=>{const b=m({},l);b.field_map[n][d]=e.target.value,s(m({},b))};function D({field:e,index:n,conf:l,setConf:s,fieldValue:d,fieldLabel:b,className:j}){return t.jsx(C,{onChange:y=>lt(y,n,l,s,d),label:i(b,"bit-integrations"),className:j,type:"text",value:e[d],placeholder:i(b,"bit-integrations")})}function it({i:e,formFields:n,field:l,coppercrmConf:s,setCopperCRMConf:d}){var h,x;let b=[];s.actionName==="company"?b=s==null?void 0:s.companyFields:s.actionName==="person"?b=s==null?void 0:s.personFields:s.actionName==="opportunity"?b=s==null?void 0:s.opportunityFields:s.actionName==="task"&&(b=s==null?void 0:s.taskFields);const j=b.filter(u=>u.required===!0)||[],y=b.filter(u=>u.required===!1)||[],v=s.customFields?[...y,...s==null?void 0:s.customFields]:y;if(((h=s==null?void 0:s.field_map)==null?void 0:h.length)===1&&l.coppercrmFormField===""){const u=m({},s),F=p(u);u.field_map=F,d(u)}const g=L(f),{isPro:N}=g;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:u=>z(u,e,s,d),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:n==null?void 0:n.map(u=>t.jsx("option",{value:u.name,children:u.label},`ff-rm-${u.name}`))}),t.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),N?"":`(${i("Pro","bit-integrations")})`),children:N&&((x=tt)==null?void 0:x.map(u=>t.jsx("option",{value:u.name,children:u.label},`ff-rm-${u.name}`)))})]}),l.formField==="custom"&&t.jsx(D,{field:l,index:e,conf:s,setConf:d,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<j.length,name:"coppercrmFormField",value:e<j?j[e].label||"":l.coppercrmFormField||"",onChange:u=>z(u,e,s,d),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e<j.length?t.jsx("option",{value:j[e].key,children:j[e].label},j[e].key):v.map(({key:u,label:F})=>t.jsx("option",{value:u,children:F},u)),(s.actionName==="company"||s.actionName==="person"||s.actionName==="opportunity"||s.actionName==="task")&&t.jsx("option",{value:"customFieldKey",children:i("Custom Field","bit-integrations")})]}),l.coppercrmFormField==="customFieldKey"&&t.jsx(D,{field:l,index:e,conf:s,setConf:d,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),e>=j.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>J(e,s,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>st(e,s,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function gt({formFields:e,handleInput:n,coppercrmConf:l,setCopperCRMConf:s,loading:d,setLoading:b,setSnackbar:j}){var g,N;const y=h=>{const x=m({},l);x.field_map=[{formField:"",coppercrmFormField:""}];const{name:u}=h.target;h.target.value!==""?(x[u]=h.target.value,Y(x,s,b),h.target.value==="opportunity"&&G(x,s,b)):delete x[u],s(m({},x))},v=(h,x)=>{const u=m({},l);u[x]=h,x==="selectedCRMPeople"&&h!==""&&l.actionName==="opportunity"&&(u.selectedCRMPipelines="",H(u,s,b)),s(m({},u))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:y,name:"actionName",value:l.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select an action","bit-integrations")}),t.jsx("option",{value:"company",children:i("Create Company","bit-integrations")}),t.jsx("option",{value:"person",children:i("Create Person","bit-integrations")}),t.jsx("option",{value:"opportunity",children:i("Create Opportunity","bit-integrations")}),t.jsx("option",{value:"task",children:i("Create Task","bit-integrations")})]}),(d.CRMPeoples||d.CRMPipelines)&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.actionName==="opportunity"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Select People:","bit-integrations")}),t.jsx(c,{options:(g=l==null?void 0:l.CRMPeoples)==null?void 0:g.map(h=>({label:h.name,value:h.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedCRMPeople,onChange:h=>v(h,"selectedCRMPeople"),disabled:d.CRMPeoples,singleSelect:!0}),t.jsx("button",{onClick:()=>G(l,s,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh peoples","bit-integrations")}'`},type:"button",disabled:d.CRMPeoples,children:"↻"})]})]}),l.actionName==="opportunity"&&l.selectedCRMPeople&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Pipeline:","bit-integrations")}),t.jsx(c,{options:(N=l==null?void 0:l.CRMPipelines)==null?void 0:N.map(h=>({label:h.name,value:h.id})),className:"msl-wrp-options dropdown-custom-width",defaultValue:l==null?void 0:l.selectedCRMPipelines,onChange:h=>v(h,"selectedCRMPipelines"),disabled:d.CRMPipelines,singleSelect:!0}),t.jsx("button",{onClick:()=>H(l,s,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh pipelines","bit-integrations")}'`},type:"button",disabled:d.CRMPipelines,children:"↻"})]})]}),d.customFields&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.actionName&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>Y(l,s,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh fields","bit-integrations")}'`},type:"button",disabled:d.CRMPipelines,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("CopperCRM Fields","bit-integrations")})})]}),l==null?void 0:l.field_map.map((h,x)=>t.jsx(it,{i:x,field:h,coppercrmConf:l,formFields:e,setCopperCRMConf:s,setSnackbar:j},`rp-m-${x+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>J(l.field_map.length,l,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(et,{coppercrmConf:l,setCopperCRMConf:s,formFields:e,loading:d,setLoading:b})]})]})}export{gt as C};
