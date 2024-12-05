var k=Object.defineProperty;var a=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var _=(u,c,s)=>c in u?k(u,c,{enumerable:!0,configurable:!0,writable:!0,value:s}):u[c]=s,j=(u,c)=>{for(var s in c||(c={}))M.call(c,s)&&_(u,s,c[s]);if(a)for(var s of a(c))q.call(c,s)&&_(u,s,c[s]);return u};import{j as e,f as O,r as E,L as J}from"./main-34.js";import{_ as r,e as U}from"./bi.671.0.js";import{x as I,u as $}from"./bi.188.437.js";import{a as H,h as L,b as P}from"./bi.633.3.js";import{b as B,T as D}from"./bi.22.11.js";import{r as R,a as G,b as A,c as V}from"./bi.676.710.js";import{T as z}from"./bi.623.673.js";function K({activeCampaingConf:u,setActiveCampaingConf:c}){var t;const s=(b,h)=>{const i=j({},u);h==="update"&&(b.target.checked?i.actions.update=!0:delete i.actions.update),c(j({},i))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(B,{checked:((t=u.actions)==null?void 0:t.update)||!1,onChange:b=>s(b,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:r("Update ActiveCampaign","bit-integrations"),subTitle:r("Update Responses with ActiveCampaign existing email?","bit-integrations")})})}function Q({i:u,formFields:c,field:s,activeCampaingConf:t,setActiveCampaingConf:b}){var m,n,N,p;const h=s.required,i=((m=t==null?void 0:t.default)==null?void 0:m.fields)&&Object.values((n=t==null?void 0:t.default)==null?void 0:n.fields).filter(l=>!l.required),w=O(U),{isPro:y}=w,T=l=>{const d=j({},t);d.field_map.splice(l,0,{}),b(d)},F=l=>{const d=j({},t);d.field_map.length>1&&d.field_map.splice(l,1),b(d)},o=(l,d)=>{const x=j({},t);x.field_map[d][l.target.name]=l.target.value,l.target.value==="custom"&&(x.field_map[d].customValue=""),b(x)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:l=>o(l,u),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:c==null?void 0:c.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${r("General Smart Codes","bit-integrations")} ${y?"":`(${r("Pro","bit-integrations")})`}`,children:y&&((N=H)==null?void 0:N.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),s.formField==="custom"&&e.jsx(z,{onChange:l=>L(l,u,t,b),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:c}),e.jsxs("select",{className:"btcd-paper-inp",name:"activeCampaignField",value:s.activeCampaignField,onChange:l=>o(l,u),disabled:h,children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),h?((p=t==null?void 0:t.default)==null?void 0:p.fields)&&Object.values(t.default.fields).map(l=>e.jsx("option",{value:l.fieldId,children:l.fieldName},`${l.fieldId}-1`)):i&&i.map(l=>e.jsx("option",{value:l.fieldId,children:l.fieldName},`${l.fieldId}-1`))]})]}),!h&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>T(u),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>F(u),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(D,{})})]})]})}function C({formID:u,formFields:c,activeCampaingConf:s,setActiveCampaingConf:t,isLoading:b,setIsLoading:h,setSnackbar:i}){var m,n,N,p;const w=l=>{const d=j({},s);l?d.tagIds=l?l.split(","):[]:delete d.tagIds,t(j({},d))},y=l=>{console.log(l),t(d=>$(d,x=>{l?x.selectedAccount=l:delete x.selectedAccount}))},T=l=>{t(d=>$(d,x=>{x.job_title=l}))},F=l=>{const d=l.target.value,x=j({},s);d?(x.listId=d,V(x,t,h,i),A(x,t,h,i)):delete x.listId,t(j({},x))},o=(m=s==null?void 0:s.default)==null?void 0:m.activeCampaignLists;return E.useEffect(()=>{o&&R(s,t,h,i)},[o]),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("List:","bit-integrations")}),e.jsxs("select",{value:s==null?void 0:s.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:F,children:[e.jsx("option",{value:"",children:r("Select List","bit-integrations")}),((n=s==null?void 0:s.default)==null?void 0:n.activeCampaignLists)&&Object.keys(s.default.activeCampaignLists).map(l=>e.jsx("option",{value:s.default.activeCampaignLists[l].listId,children:s.default.activeCampaignLists[l].listName},`${l+1}`))]}),e.jsx("button",{onClick:()=>G(s,t,h,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Activecapmaign list"'},type:"button",disabled:b,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:r("Tags:","bit-integrations")}),e.jsx(I,{defaultValue:s==null?void 0:s.tagIds,className:"btcd-paper-drpdwn w-5",options:((N=s==null?void 0:s.default)==null?void 0:N.activeCampaignTags)&&Object.keys(s.default.activeCampaignTags).map(l=>({label:s.default.activeCampaignTags[l].tagName,value:s.default.activeCampaignTags[l].tagId})),onChange:l=>w(l)}),e.jsx("button",{onClick:()=>R(s,t,h,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Activecapmaign Tags","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),e.jsx("br",{}),(s==null?void 0:s.accounts)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:r("Account:","bit-integrations")}),e.jsx(I,{defaultValue:s==null?void 0:s.selectedAccount,className:"btcd-paper-drpdwn w-5",options:(s==null?void 0:s.accounts)&&s.accounts.map(l=>({label:l.name,value:l.id})),onChange:y,singleSelect:!0}),e.jsx("button",{onClick:()=>A(s,t,h,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Activecapmaign Tags","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),e.jsx("br",{})]}),(s==null?void 0:s.selectedAccount)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:r("Job Title:","bit-integrations")}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:l=>T(l.target.value),name:"job_title",value:s.job_title,type:"text",placeholder:r("Job Title...","bit-integrations")})]}),e.jsx("br",{})]}),b&&e.jsx(J,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:r("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>V(s,t,h,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Activecapmaign Field","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),((s==null?void 0:s.listId)||((p=s==null?void 0:s.default)==null?void 0:p.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("ActiveCampaign Fields","bit-integrations")})})]}),s.field_map.map((l,d)=>e.jsx(Q,{i:d,field:l,activeCampaingConf:s,formFields:c,setActiveCampaingConf:t},`Activecampaign-m-${d+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>P(s.field_map.length,s,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(K,{activeCampaingConf:s,setActiveCampaingConf:t})]})]})}export{C as A};
