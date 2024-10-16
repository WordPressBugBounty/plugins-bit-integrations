var S=Object.defineProperty;var _=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var N=(i,e,s)=>e in i?S(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,h=(i,e)=>{for(var s in e||(e={}))I.call(e,s)&&N(i,s,e[s]);if(_)for(var s of _(e))M.call(e,s)&&N(i,s,e[s]);return i};import{j as t,i as P,L as F}from"./main-29.js";import{m as $,_ as n,H as R,j as q,k as V,n as T,A as U}from"./bi.860.15.js";import{g as v,a as o}from"./bi.335.878.js";const A=(i,e,s)=>{const a=h({},e);a.field_map.splice(i,0,{}),s(h({},a))},E=(i,e,s)=>{const a=h({},e);a.field_map.length>1&&a.field_map.splice(i,1),s(h({},a))},y=(i,e,s,a)=>{const l=h({},s);l.field_map[e][i.target.name]=i.target.value,i.target.value==="custom"&&(l.field_map[e].customValue=""),i.target.value==="customFieldKey"&&(l.field_map[e].customFieldKey=""),a(h({},l))},H=(i,e,s,a,l)=>{const m=h({},s);m.field_map[e][l]=i.target.value,a(h({},m))};function K({woodpeckerConf:i,setWoodpeckerConf:e}){var a;const s=(l,m)=>{const p=h({},i);m==="update"&&(l.target.checked?p.actions.update=!0:delete p.actions.update),e(h({},p))};return t.jsx("div",{className:"pos-rel d-flx flx-wrp",children:i.actionName!=="create_company"&&t.jsx($,{checked:((a=i.actions)==null?void 0:a.update)||!1,onChange:l=>s(l,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:n("Update Prospects","bit-integrations"),subTitle:n("Update Responses with Prospects existing Data?","bit-integrations")})})}function L({field:i,index:e,conf:s,setConf:a,fieldValue:l,fieldLabel:m,className:p}){return t.jsx(R,{onChange:u=>H(u,e,s,a,l),label:n(m,"bit-integrations"),className:p,type:"text",value:i[l],placeholder:n(m,"bit-integrations")})}function B({i,formFields:e,field:s,woodpeckerConf:a,setWoodpeckerConf:l}){var x;const m=(a==null?void 0:a.woodpeckerAllFields)&&(a==null?void 0:a.woodpeckerAllFields.filter(c=>c.required===!0))||[],p=(a==null?void 0:a.woodpeckerAllFields)&&(a==null?void 0:a.woodpeckerAllFields.filter(c=>c.required===!1))||[],u=P(q),{isPro:b}=u;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:c=>y(c,i,a,l),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:e==null?void 0:e.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),b?"":`(${n("Pro","bit-integrations")})`),children:b&&((x=V)==null?void 0:x.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),s.formField==="custom"&&t.jsx(L,{field:s,index:i,conf:a,setConf:l,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:i<m.length,name:"woodpeckerFormField",value:i<m.length?m[i].key||"":s.woodpeckerFormField||"",onChange:c=>y(c,i,a,l),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),i<m.length?t.jsx("option",{value:m[i].key,children:m[i].label},m[i].key):p.map(({key:c,label:d})=>t.jsx("option",{value:c,children:d},c))]})]}),i>=m.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>A(i,a,l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>E(i,a,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function J({formFields:i,handleInput:e,woodpeckerConf:s,setWoodpeckerConf:a,loading:l,setLoading:m,isLoading:p,setIsLoading:u,setSnackbar:b}){const x=d=>{a(g=>U(g,r=>{const{name:j}=d.target;d.target.value!==""?(r.actionName=d.target.value,r.actionName==="adding_prospects_to_the_prospects_list"||r.actionName==="adding_prospects_to_the_campaign"?(r.woodpeckerAllFields=r.prospectsFields,r.actionName==="adding_prospects_to_the_campaign"&&v(r,a,l,m)):r.woodpeckerAllFields=r.companyFields,r.field_map=o(r)):delete r[j]}))},c=(d,g)=>{const r=h({},s);r[g]=d,g==="selectedPipeline"&&(s==null||s.pipelines.forEach(j=>{j.id.toString()===d&&(r.stages=j.stages)})),a(h({},r))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:x,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:n("Select an action","bit-integrations")}),t.jsx("option",{value:"adding_prospects_to_the_prospects_list","data-action_name":"Adding prospects to the Prospects list",children:n("Adding prospects to the Prospects list","bit-integrations")}),t.jsx("option",{value:"adding_prospects_to_the_campaign","data-action_name":"Adding prospects to the Campaign",children:n("Adding prospects to the Campaign","bit-integrations")}),t.jsx("option",{value:"create_company","data-action_name":"Create Company",children:n("Create Company","bit-integrations")})]}),t.jsx("br",{}),l.campaign&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName==="adding_prospects_to_the_campaign"&&(s==null?void 0:s.campaigns)&&!l.campaign&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Campaign:","bit-integrations")}),t.jsx(T,{options:s==null?void 0:s.campaigns.map(d=>({label:d.name,value:d.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCampaign,onChange:d=>c(d,"selectedCampaign"),disabled:l.campaign,singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>v(s,a,l,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh Campaigns","bit-integrations")}'`},type:"button",disabled:l.campaign,children:"↻"})]})]}),p&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&!p&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:n("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Woodpecker Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((d,g)=>t.jsx(B,{i:g,field:d,woodpeckerConf:s,formFields:i,setWoodpeckerConf:a,setSnackbar:b},`rp-m-${g+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>A(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(K,{woodpeckerConf:s,setWoodpeckerConf:a})]})]})}export{J as W};
