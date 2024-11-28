var V=Object.defineProperty;var P=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var m=(e,n,a)=>n in e?V(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,p=(e,n)=>{for(var a in n||(n={}))E.call(n,a)&&m(e,a,n[a]);if(P)for(var a of P(n))O.call(n,a)&&m(e,a,n[a]);return e};import{r as U,j as t,L as w,f as K}from"./main-441.js";import{u as A}from"./bi.141.437.js";import{_ as i,e as G}from"./bi.452.0.js";import{a as T}from"./bi.663.9.js";import{b as x}from"./bi.866.11.js";import{g as I,a as $,b as H}from"./bi.973.889.js";import{M as Y,a as z}from"./bi.73.3.js";function D({moxiecrmConf:e,setMoxieCRMConf:n,loading:a,setLoading:l}){var h,j,N,v;const[d,c]=U.useState({show:!1,action:()=>{}});i("Yes","bit-integrations"),i("No","bit-integrations"),i("New Business","bit-integrations"),i("Existing Business","bit-integrations"),i("Client","bit-integrations"),i("Prospect","bit-integrations");const r=(s,g)=>{var F,y,S,_,k;const u=p({},e);g==="opportunity"?(F=s.target)!=null&&F.checked?(getAllOpportunities(e,n,l),u.actions.opportunity=!0):(c({show:!1}),delete u.actions.opportunity):g==="client"?(y=s.target)!=null&&y.checked?(I(e,n,l),u.actions.client=!0):(c({show:!1}),delete u.actions.client):g==="pipelineStage"?(S=s.target)!=null&&S.checked?($(e,n,l),u.actions.pipelineStage=!0):(c({show:!1}),delete u.actions.pipelineStage):g==="followUp"?(_=s.target)!=null&&_.checked?u.actions.followUp=!0:(c({show:!1}),delete u.actions.followUp):g==="opportunityType"&&((k=s.target)!=null&&k.checked?u.actions.opportunityType=!0:(c({show:!1}),delete u.actions.opportunityType)),c({show:g}),n(p({},u))},b=()=>{c({show:!1})},o=(s,g)=>{const u=p({},e);u[g]=s,n(p({},u))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(e.actionName==="contact"||e.actionName==="opportunity")&&t.jsx(x,{checked:((h=e==null?void 0:e.selectedClient)==null?void 0:h.length)||!1,onChange:s=>r(s,"client"),className:"wdt-200 mt-4 mr-2",value:"client",title:i("Add Client","bit - integrations"),subTitle:i("Add an client")}),e.actionName==="opportunity"&&t.jsx(x,{checked:((j=e==null?void 0:e.selectedPipelineStage)==null?void 0:j.length)||!1,onChange:s=>r(s,"pipelineStage"),className:"wdt-200 mt-4 mr-2",value:"pipelineStage",title:i("Add PipelineStage","bit - integrations"),subTitle:i("Add a pipelineStage")}),t.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="client",close:b,action:b,title:i("Clients","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select Client","bit-integrations")}),a.clients?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(A,{options:(N=e==null?void 0:e.clients)==null?void 0:N.map(s=>({label:s.name,value:s.name})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedClient,onChange:s=>o(s,"selectedClient"),singleSelect:!0}),t.jsx("button",{onClick:()=>I(e,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Clients","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="pipelineStage",close:b,action:b,title:i("PipelineStages","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select PipelineStage","bit-integrations")}),a.pipelineStages?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(A,{options:(v=e==null?void 0:e.pipelineStages)==null?void 0:v.map(s=>({label:s.name,value:s.name})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedPipelineStage,onChange:s=>o(s,"selectedPipelineStage"),singleSelect:!0}),t.jsx("button",{onClick:()=>$(e,n,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh PipelineStages","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const B=(e,n,a)=>{const l=p({},n);l.field_map.splice(e,0,{}),a(p({},l))},J=(e,n,a)=>{const l=p({},n);l.field_map.length>1&&l.field_map.splice(e,1),a(p({},l))},q=(e,n,a,l)=>{const d=p({},a);d.field_map[n][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[n].customValue=""),e.target.value==="customFieldKey"&&(d.field_map[n].customFieldKey=""),l(p({},d))},Q=(e,n,a,l,d)=>{const c=p({},a);c.field_map[n][d]=e.target.value,l(p({},c))};function W({field:e,index:n,conf:a,setConf:l,fieldValue:d,fieldLabel:c,className:r}){return t.jsx(Y,{onChange:b=>Q(b,n,a,l,d),label:i(c,"bit-integrations"),className:r,type:"text",value:e[d],placeholder:i(c,"bit-integrations")})}function X({i:e,formFields:n,field:a,moxiecrmConf:l,setMoxieCRMConf:d}){var N,v;let c=[];l.actionName==="client"?c=l==null?void 0:l.clientFields:l.actionName==="contact"?c=l==null?void 0:l.contactFields:l.actionName==="opportunity"&&(c=l==null?void 0:l.opportunityFields);const r=c.filter(s=>s.required===!0)||[],b=c.filter(s=>s.required===!1)||[],o=l.customFields?[...b,...l==null?void 0:l.customFields]:b;if(((N=l==null?void 0:l.field_map)==null?void 0:N.length)===1&&a.moxiecrmFormField===""){const s=p({},l),g=H(s);s.field_map=g,d(s)}const h=K(G),{isPro:j}=h;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:s=>q(s,e,l,d),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:n==null?void 0:n.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),t.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),j?"":`(${i("Pro","bit-integrations")})`),children:j&&((v=z)==null?void 0:v.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),a.formField==="custom"&&t.jsx(W,{field:a,index:e,conf:l,setConf:d,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<r.length,name:"moxiecrmFormField",value:e<r?r[e].label||"":a.moxiecrmFormField||"",onChange:s=>q(s,e,l,d),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e<r.length?t.jsx("option",{value:r[e].key,children:r[e].label},r[e].key):o.map(({key:s,label:g})=>t.jsx("option",{value:s,children:g},s))]})]}),e>=r.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>B(e,l,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>J(e,l,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function lt({formFields:e,handleInput:n,moxiecrmConf:a,setMoxieCRMConf:l,loading:d,setLoading:c,setSnackbar:r}){const b=o=>{const h=p({},a);h.field_map=[{formField:"",moxiecrmFormField:""}];const{name:j}=o.target;o.target.value!==""?h[j]=o.target.value:delete h[j],l(p({},h))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:b,name:"actionName",value:a.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select an action","bit-integrations")}),t.jsx("option",{value:"client",children:i("Create Client","bit-integrations")}),t.jsx("option",{value:"contact",children:i("Create Contact","bit-integrations")}),t.jsx("option",{value:"opportunity",children:i("Create Opportunity","bit-integrations")})]}),a.actionName==="client"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Record Type:","bit-integrations")}),t.jsxs("select",{onChange:b,name:"recordType",value:a.recordType,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"Client",children:i("Client","bit-integrations")}),t.jsx("option",{value:"Prospect",children:i("Prospect","bit-integrations")})]})]}),d.customFields&&t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.actionName&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("MoxieCRM Fields","bit-integrations")})})]}),a==null?void 0:a.field_map.map((o,h)=>t.jsx(X,{i:h,field:o,moxiecrmConf:a,formFields:e,setMoxieCRMConf:l,setSnackbar:r},`rp-m-${h+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>B(a.field_map.length,a,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(D,{moxiecrmConf:a,setMoxieCRMConf:l,formFields:e,loading:d,setLoading:c})]})]})}export{lt as M};
