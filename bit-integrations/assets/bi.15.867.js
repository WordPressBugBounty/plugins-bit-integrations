var k=Object.defineProperty;var y=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var w=(l,s,i)=>s in l?k(l,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[s]=i,m=(l,s)=>{for(var i in s||(s={}))R.call(s,i)&&w(l,i,s[i]);if(y)for(var i of y(s))T.call(s,i)&&w(l,i,s[i]);return l};import{j as e,f as q,L as V}from"./main-425.js";import{_ as a,e as L}from"./bi.107.0.js";import{a as S,b as o}from"./bi.25.3.js";import{b as U,T as P}from"./bi.563.11.js";import{g as A,r as B,a as I}from"./bi.530.866.js";import{T as E}from"./bi.178.675.js";function G({campaignMonitorConf:l,setCampaignMonitorConf:s}){var d;const i=(c,n)=>{const r=m({},l);n==="update"&&(c.target.checked?r.actions.update=!0:delete r.actions.update),s(m({},r))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(U,{checked:((d=l.actions)==null?void 0:d.update)||!1,onChange:c=>i(c,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:a("Update CampaignMonitor","bit-integrations"),subTitle:a("Update Responses with CampaignMonitor existing email?","bit-integrations")})})}function H({i:l,formFields:s,field:i,campaignMonitorConf:d,setCampaignMonitorConf:c}){var v,_;let n=d.subscriberFields;const r=n.filter(t=>t.required===!0)||[],p=[...n.filter(t=>t.required===!1)||[],...(d==null?void 0:d.customFields)||[]],b=q(L),{isPro:h}=b;((v=d==null?void 0:d.field_map)==null?void 0:v.length)===1&&i.campaignMonitorField===""&&c(t=>(t.field_map=A(t),t));const j=t=>{const u=m({},d);u.field_map.splice(t,0,{}),c(u)},g=t=>{const u=m({},d);u.field_map.length>1&&u.field_map.splice(t,1),c(u)},N=(t,u)=>{const x=m({},d);x.field_map[u][t.target.name]=t.target.value,t.target.value==="custom"&&(x.field_map[u].customValue=""),c(x)},$=(t,u)=>{const x=m({},d);x.field_map[u].customValue=t.target.value,c(x)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:t=>N(t,l),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("List Fields","bit-integrations"),children:s==null?void 0:s.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${a("General Smart Codes","bit-integrations")} ${h?"":`(${a("Pro","bit-integrations")})`}`,children:h&&((_=S)==null?void 0:_.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),i.formField==="custom"&&e.jsx(E,{onChange:t=>$(t,l),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:s}),e.jsxs("select",{className:"btcd-paper-inp",name:"campaignMonitorField",value:l<r.length?r[l].key||"":i.campaignMonitorField||"",onChange:t=>N(t,l),disabled:l<r.length,children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),l<r.length?e.jsx("option",{value:r[l].key,children:r[l].label},r[l].key):p.map(({key:t,label:u})=>e.jsx("option",{value:t,children:u},t))]})]}),l>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>j(l),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>g(l),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(P,{})})]})]})}function X({formFields:l,campaignMonitorConf:s,setCampaignMonitorConf:i,isLoading:d,setIsLoading:c,setSnackbar:n}){var F,p;const r=b=>{const h=b.target.value,j=m({},s);h&&(j.listId=h),i(j),I(j,i,c,n)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Subscriber List:","bit-integrations")}),e.jsxs("select",{value:s==null?void 0:s.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:r,children:[e.jsx("option",{value:"",children:a("Select Subscriber List","bit-integrations")}),((F=s==null?void 0:s.default)==null?void 0:F.campaignMonitorLists)&&s.default.campaignMonitorLists.map(b=>e.jsx("option",{value:b.listId,children:b.listName},`${b.listId}`))]}),e.jsx("button",{onClick:()=>B(s,i,c,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CampaignMonitor campaign"'},type:"button",disabled:d,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),d&&e.jsx(V,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>I(s,i,c,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CampaignMonitor Field","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),!d&&((s==null?void 0:s.listId)||((p=s==null?void 0:s.default)==null?void 0:p.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("List Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("CampaignMonitor Fields","bit-integrations")})})]}),s.field_map.map((b,h)=>e.jsx(H,{i:h,field:b,campaignMonitorConf:s,formFields:l,setCampaignMonitorConf:i},`CampaignMonitor-m-${h+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>o(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(G,{campaignMonitorConf:s,setCampaignMonitorConf:i})]})]})}export{X as C};
