var V=Object.defineProperty;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var _=(n,a,i)=>a in n?V(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,b=(n,a)=>{for(var i in a||(a={}))I.call(a,i)&&_(n,i,a[i]);if(w)for(var i of w(a))M.call(a,i)&&_(n,i,a[i]);return n};import{j as e,f as k,L as R}from"./main-119.js";import{_ as c,e as L}from"./bi.686.0.js";import{a as T,M as q,b as O}from"./bi.316.3.js";import{b as S,T as U}from"./bi.301.11.js";import{r as H,a as y}from"./bi.160.862.js";function P({lemlistConf:n,setLemlistConf:a}){var s;const i=(d,l)=>{const u=b({},n);l==="update"&&(d.target.checked?u.actions.update=!0:delete u.actions.update),a(b({},u))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(S,{checked:((s=n.actions)==null?void 0:s.update)||!1,onChange:d=>i(d,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:c("Update Lemlist","bit-integrations"),subTitle:c("Update Responses with Lemlist existing email?","bit-integrations")})})}function A({i:n,formFields:a,field:i,lemlistConf:s,setLemlistConf:d}){var g,v,N,F;const l=i.required,u=((g=s==null?void 0:s.default)==null?void 0:g.fields)&&Object.values((v=s==null?void 0:s.default)==null?void 0:v.fields).filter(t=>!t.required),j=k(L),{isPro:h}=j,p=t=>{const r=b({},s);r.field_map.splice(t,0,{}),d(r)},m=t=>{const r=b({},s);r.field_map.length>1&&r.field_map.splice(t,1),d(r)},x=(t,r)=>{const o=b({},s);o.field_map[r][t.target.name]=t.target.value,t.target.value==="custom"&&(o.field_map[r].customValue=""),d(o)},$=(t,r)=>{const o=b({},s);o.field_map[r].customValue=t.target.value,d(o)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:t=>x(t,n),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:c("List Fields","bit-integrations"),children:a==null?void 0:a.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${c("General Smart Codes","bit-integrations")} ${h?"":`(${c("Pro","bit-integrations")})`}`,children:h&&((N=T)==null?void 0:N.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),i.formField==="custom"&&e.jsx(q,{onChange:t=>$(t,n),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:c("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"lemlistField",value:i.lemlistField||"",onChange:t=>x(t,n),disabled:l,children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),l?((F=s==null?void 0:s.default)==null?void 0:F.fields)&&Object.values(s.default.fields).map(t=>e.jsx("option",{value:t.fieldValue,children:t.fieldName},`${t.fieldValue}`)):u&&u.map(t=>e.jsx("option",{value:t.fieldValue,children:t.fieldName},`${t.fieldValue}`))]})]}),!l&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>p(n),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>m(n),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(U,{})})]})]})}function K({formFields:n,lemlistConf:a,setLemlistConf:i,isLoading:s,setIsLoading:d,setSnackbar:l}){var j,h;const u=p=>{const m=p.target.value,x=b({},a);m&&(x.campaignId=m),y(x,i,d,l)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("Campaigns:","bit-integrations")}),e.jsxs("select",{value:a==null?void 0:a.campaignId,name:"campaignId",id:"",className:"btcd-paper-inp w-5",onChange:u,children:[e.jsx("option",{value:"",children:c("Select Campaigns","bit-integrations")}),((j=a==null?void 0:a.default)==null?void 0:j.lemlistCampaigns)&&Object.keys(a.default.lemlistCampaigns).map(p=>e.jsx("option",{value:a.default.lemlistCampaigns[p].campaignId,children:a.default.lemlistCampaigns[p].campaignName},`${p+1}`))]}),e.jsx("button",{onClick:()=>H(a,i,d,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Lemlist campaign"'},type:"button",disabled:s,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),s&&e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:c("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>y(a,i,d,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh Lemlist Field","bit-integrations")}'`},type:"button",disabled:s,children:"↻"})]}),((a==null?void 0:a.campaignsId)||((h=a==null?void 0:a.default)==null?void 0:h.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("List Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Lemlist Fields","bit-integrations")})})]}),a.field_map.map((p,m)=>e.jsx(A,{i:m,field:p,lemlistConf:a,formFields:n,setLemlistConf:i},`Lemlist-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>O(a.field_map.length,a,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(P,{lemlistConf:a,setLemlistConf:i})]})]})}export{K as L};
