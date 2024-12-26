var S=Object.defineProperty;var _=Object.getOwnPropertySymbols;var o=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var N=(i,e,s)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,p=(i,e)=>{for(var s in e||(e={}))o.call(e,s)&&N(i,s,e[s]);if(_)for(var s of _(e))M.call(e,s)&&N(i,s,e[s]);return i};import{j as t,f as I,L as F}from"./main-119.js";import{x as P,u as $}from"./bi.276.437.js";import{_ as n,e as R}from"./bi.686.0.js";import{b as q}from"./bi.301.11.js";import{g as v,a as V}from"./bi.670.893.js";import{M as T,a as U}from"./bi.316.3.js";const A=(i,e,s)=>{const a=p({},e);a.field_map.splice(i,0,{}),s(p({},a))},E=(i,e,s)=>{const a=p({},e);a.field_map.length>1&&a.field_map.splice(i,1),s(p({},a))},y=(i,e,s,a)=>{const l=p({},s);l.field_map[e][i.target.name]=i.target.value,i.target.value==="custom"&&(l.field_map[e].customValue=""),i.target.value==="customFieldKey"&&(l.field_map[e].customFieldKey=""),a(p({},l))},K=(i,e,s,a,l)=>{const c=p({},s);c.field_map[e][l]=i.target.value,a(p({},c))};function L({woodpeckerConf:i,setWoodpeckerConf:e}){var a;const s=(l,c)=>{const h=p({},i);c==="update"&&(l.target.checked?h.actions.update=!0:delete h.actions.update),e(p({},h))};return t.jsx("div",{className:"pos-rel d-flx flx-wrp",children:i.actionName!=="create_company"&&t.jsx(q,{checked:((a=i.actions)==null?void 0:a.update)||!1,onChange:l=>s(l,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:n("Update Prospects","bit-integrations"),subTitle:n("Update Responses with Prospects existing Data?","bit-integrations")})})}function B({field:i,index:e,conf:s,setConf:a,fieldValue:l,fieldLabel:c,className:h}){return t.jsx(T,{onChange:u=>K(u,e,s,a,l),label:n(c,"bit-integrations"),className:h,type:"text",value:i[l],placeholder:n(c,"bit-integrations")})}function D({i,formFields:e,field:s,woodpeckerConf:a,setWoodpeckerConf:l}){var x;const c=(a==null?void 0:a.woodpeckerAllFields)&&(a==null?void 0:a.woodpeckerAllFields.filter(m=>m.required===!0))||[],h=(a==null?void 0:a.woodpeckerAllFields)&&(a==null?void 0:a.woodpeckerAllFields.filter(m=>m.required===!1))||[],u=I(R),{isPro:b}=u;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:m=>y(m,i,a,l),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:e==null?void 0:e.map(m=>t.jsx("option",{value:m.name,children:m.label},`ff-rm-${m.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),b?"":`(${n("Pro","bit-integrations")})`),children:b&&((x=U)==null?void 0:x.map(m=>t.jsx("option",{value:m.name,children:m.label},`ff-rm-${m.name}`)))})]}),s.formField==="custom"&&t.jsx(B,{field:s,index:i,conf:a,setConf:l,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:i<c.length,name:"woodpeckerFormField",value:i<c.length?c[i].key||"":s.woodpeckerFormField||"",onChange:m=>y(m,i,a,l),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),i<c.length?t.jsx("option",{value:c[i].key,children:c[i].label},c[i].key):h.map(({key:m,label:d})=>t.jsx("option",{value:m,children:d},m))]})]}),i>=c.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>A(i,a,l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>E(i,a,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Y({formFields:i,handleInput:e,woodpeckerConf:s,setWoodpeckerConf:a,loading:l,setLoading:c,isLoading:h,setIsLoading:u,setSnackbar:b}){const x=d=>{a(g=>$(g,r=>{const{name:j}=d.target;d.target.value!==""?(r.actionName=d.target.value,r.actionName==="adding_prospects_to_the_prospects_list"||r.actionName==="adding_prospects_to_the_campaign"?(r.woodpeckerAllFields=r.prospectsFields,r.actionName==="adding_prospects_to_the_campaign"&&v(r,a,l,c)):r.woodpeckerAllFields=r.companyFields,r.field_map=V(r)):delete r[j]}))},m=(d,g)=>{const r=p({},s);r[g]=d,g==="selectedPipeline"&&(s==null||s.pipelines.forEach(j=>{j.id.toString()===d&&(r.stages=j.stages)})),a(p({},r))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:x,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:n("Select an action","bit-integrations")}),t.jsx("option",{value:"adding_prospects_to_the_prospects_list","data-action_name":"Adding prospects to the Prospects list",children:n("Adding prospects to the Prospects list","bit-integrations")}),t.jsx("option",{value:"adding_prospects_to_the_campaign","data-action_name":"Adding prospects to the Campaign",children:n("Adding prospects to the Campaign","bit-integrations")}),t.jsx("option",{value:"create_company","data-action_name":"Create Company",children:n("Create Company","bit-integrations")})]}),t.jsx("br",{}),l.campaign&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName==="adding_prospects_to_the_campaign"&&(s==null?void 0:s.campaigns)&&!l.campaign&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Campaign:","bit-integrations")}),t.jsx(P,{options:s==null?void 0:s.campaigns.map(d=>({label:d.name,value:d.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCampaign,onChange:d=>m(d,"selectedCampaign"),disabled:l.campaign,singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>v(s,a,l,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh Campaigns","bit-integrations")}'`},type:"button",disabled:l.campaign,children:"↻"})]})]}),h&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&!h&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Woodpecker Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((d,g)=>t.jsx(D,{i:g,field:d,woodpeckerConf:s,formFields:i,setWoodpeckerConf:a,setSnackbar:b},`rp-m-${g+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>A(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(L,{woodpeckerConf:s,setWoodpeckerConf:a})]})]})}export{Y as W};
