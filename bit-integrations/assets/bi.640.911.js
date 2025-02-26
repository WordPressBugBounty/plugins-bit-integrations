var V=Object.defineProperty;var P=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var m=(e,n,a)=>n in e?V(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,p=(e,n)=>{for(var a in n||(n={}))E.call(n,a)&&m(e,a,n[a]);if(P)for(var a of P(n))O.call(n,a)&&m(e,a,n[a]);return e};import{r as U,j as t,L as w,f as K}from"./main-586.js";import{x as A}from"./bi.960.440.js";import{_ as i,e as G}from"./bi.612.0.js";import{a as T}from"./bi.175.9.js";import{b as x}from"./bi.980.11.js";import{g as I,a as $,b as H}from"./bi.202.910.js";import{M as Y,a as z}from"./bi.993.3.js";function D({moxiecrmConf:e,setMoxieCRMConf:n,loading:a,setLoading:s}){var h,j,N,v;const[d,c]=U.useState({show:!1,action:()=>{}});i("Yes","bit-integrations"),i("No","bit-integrations"),i("New Business","bit-integrations"),i("Existing Business","bit-integrations"),i("Client","bit-integrations"),i("Prospect","bit-integrations");const r=(l,g)=>{var F,y,S,_,k;const u=p({},e);g==="opportunity"?(F=l.target)!=null&&F.checked?(getAllOpportunities(e,n,s),u.actions.opportunity=!0):(c({show:!1}),delete u.actions.opportunity):g==="client"?(y=l.target)!=null&&y.checked?(I(e,n,s),u.actions.client=!0):(c({show:!1}),delete u.actions.client):g==="pipelineStage"?(S=l.target)!=null&&S.checked?($(e,n,s),u.actions.pipelineStage=!0):(c({show:!1}),delete u.actions.pipelineStage):g==="followUp"?(_=l.target)!=null&&_.checked?u.actions.followUp=!0:(c({show:!1}),delete u.actions.followUp):g==="opportunityType"&&((k=l.target)!=null&&k.checked?u.actions.opportunityType=!0:(c({show:!1}),delete u.actions.opportunityType)),c({show:g}),n(p({},u))},b=()=>{c({show:!1})},o=(l,g)=>{const u=p({},e);u[g]=l,n(p({},u))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(e.actionName==="contact"||e.actionName==="opportunity")&&t.jsx(x,{checked:((h=e==null?void 0:e.selectedClient)==null?void 0:h.length)||!1,onChange:l=>r(l,"client"),className:"wdt-200 mt-4 mr-2",value:"client",title:i("Add Client","bit - integrations"),subTitle:i("Add an client")}),e.actionName==="opportunity"&&t.jsx(x,{checked:((j=e==null?void 0:e.selectedPipelineStage)==null?void 0:j.length)||!1,onChange:l=>r(l,"pipelineStage"),className:"wdt-200 mt-4 mr-2",value:"pipelineStage",title:i("Add PipelineStage","bit - integrations"),subTitle:i("Add a pipelineStage")}),t.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="client",close:b,action:b,title:i("Clients","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select Client","bit-integrations")}),a.clients?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(A,{options:(N=e==null?void 0:e.clients)==null?void 0:N.map(l=>({label:l.name,value:l.name})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedClient,onChange:l=>o(l,"selectedClient"),singleSelect:!0}),t.jsx("button",{onClick:()=>I(e,n,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Clients","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:d.show==="pipelineStage",close:b,action:b,title:i("PipelineStages","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:i("Select PipelineStage","bit-integrations")}),a.pipelineStages?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(A,{options:(v=e==null?void 0:e.pipelineStages)==null?void 0:v.map(l=>({label:l.name,value:l.name})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedPipelineStage,onChange:l=>o(l,"selectedPipelineStage"),singleSelect:!0}),t.jsx("button",{onClick:()=>$(e,n,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh PipelineStages","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const B=(e,n,a)=>{const s=p({},n);s.field_map.splice(e,0,{}),a(p({},s))},J=(e,n,a)=>{const s=p({},n);s.field_map.length>1&&s.field_map.splice(e,1),a(p({},s))},q=(e,n,a,s)=>{const d=p({},a);d.field_map[n][e.target.name]=e.target.value,e.target.value==="custom"&&(d.field_map[n].customValue=""),e.target.value==="customFieldKey"&&(d.field_map[n].customFieldKey=""),s(p({},d))},Q=(e,n,a,s,d)=>{const c=p({},a);c.field_map[n][d]=e.target.value,s(p({},c))};function W({field:e,index:n,conf:a,setConf:s,fieldValue:d,fieldLabel:c,className:r}){return t.jsx(Y,{onChange:b=>Q(b,n,a,s,d),label:i(c,"bit-integrations"),className:r,type:"text",value:e[d],placeholder:i(c,"bit-integrations")})}function X({i:e,formFields:n,field:a,moxiecrmConf:s,setMoxieCRMConf:d}){var N,v;let c=[];s.actionName==="client"?c=s==null?void 0:s.clientFields:s.actionName==="contact"?c=s==null?void 0:s.contactFields:s.actionName==="opportunity"&&(c=s==null?void 0:s.opportunityFields);const r=c.filter(l=>l.required===!0)||[],b=c.filter(l=>l.required===!1)||[],o=s.customFields?[...b,...s==null?void 0:s.customFields]:b;if(((N=s==null?void 0:s.field_map)==null?void 0:N.length)===1&&a.moxiecrmFormField===""){const l=p({},s),g=H(l);l.field_map=g,d(l)}const h=K(G),{isPro:j}=h;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:l=>q(l,e,s,d),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:n==null?void 0:n.map(l=>t.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),t.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),j?"":`(${i("Pro","bit-integrations")})`),children:j&&((v=z)==null?void 0:v.map(l=>t.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),a.formField==="custom"&&t.jsx(W,{field:a,index:e,conf:s,setConf:d,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<r.length,name:"moxiecrmFormField",value:e<r?r[e].label||"":a.moxiecrmFormField||"",onChange:l=>q(l,e,s,d),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e<r.length?t.jsx("option",{value:r[e].key,children:r[e].label},r[e].key):o.map(({key:l,label:g})=>t.jsx("option",{value:l,children:g},l))]})]}),e>=r.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>B(e,s,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>J(e,s,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function st({formFields:e,handleInput:n,moxiecrmConf:a,setMoxieCRMConf:s,loading:d,setLoading:c,setSnackbar:r}){const b=o=>{const h=p({},a);h.field_map=[{formField:"",moxiecrmFormField:""}];const{name:j}=o.target;o.target.value!==""?h[j]=o.target.value:delete h[j],s(p({},h))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:b,name:"actionName",value:a.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select an action","bit-integrations")}),t.jsx("option",{value:"client",children:i("Create Client","bit-integrations")}),t.jsx("option",{value:"contact",children:i("Create Contact","bit-integrations")}),t.jsx("option",{value:"opportunity",children:i("Create Opportunity","bit-integrations")})]}),a.actionName==="client"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Record Type:","bit-integrations")}),t.jsxs("select",{onChange:b,name:"recordType",value:a.recordType,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"Client",children:i("Client","bit-integrations")}),t.jsx("option",{value:"Prospect",children:i("Prospect","bit-integrations")})]})]}),d.customFields&&t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.actionName&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("MoxieCRM Fields","bit-integrations")})})]}),a==null?void 0:a.field_map.map((o,h)=>t.jsx(X,{i:h,field:o,moxiecrmConf:a,formFields:e,setMoxieCRMConf:s,setSnackbar:r},`rp-m-${h+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>B(a.field_map.length,a,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(D,{moxiecrmConf:a,setMoxieCRMConf:s,formFields:e,loading:d,setLoading:c})]})]})}export{st as M};
