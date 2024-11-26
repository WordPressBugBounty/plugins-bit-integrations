var L=Object.defineProperty;var F=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var T=(e,a,n)=>a in e?L(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,b=(e,a)=>{for(var n in a||(a={}))U.call(a,n)&&T(e,n,a[n]);if(F)for(var n of F(a))E.call(a,n)&&T(e,n,a[n]);return e};import{f as B,r as M,j as s,L as y}from"./main-615.js";import{e as O,_ as t,s as z}from"./bi.394.0.js";import{a as G,h as H,b as J}from"./bi.819.3.js";import{u as I}from"./bi.991.437.js";import{a as v}from"./bi.179.9.js";import{b as u}from"./bi.405.11.js";import{s as $,g as A,a as Z}from"./bi.960.754.js";import{T as D}from"./bi.178.673.js";function K({fluentSupportConf:e,setFluentSupportConf:a,formID:n,formFields:l,setSnackbar:r}){var _,w;const d=B(O),{isPro:h,version:j}=d,[m,o]=M.useState(!1),[c,g]=M.useState({show:!1}),p=(i,k)=>{const N=b({},e);i!==""?N.actions[k]=i:delete N.actions[k],a(b({},N))},R=[{label:t("Normal","bit-integrations"),value:"normal"},{label:t("Critical","bit-integrations"),value:"critical"},{label:t("Medium","bit-integrations"),value:"medium"}],V=()=>{var i;(i=e.default)!=null&&i.agents||$(n,e,a,o,r),g({show:"support_staff"})},q=()=>{var i;(i=e.default)!=null&&i.businessInboxes||A(n,e,a,o,r),g({show:"business_inboxes"})},x=()=>{g({show:!1})};return s.jsxs("div",{className:"pos-rel",children:[s.jsxs("div",{className:"d-flx flx-wrp",children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[s.jsx(u,{onChange:V,checked:"support_staff"in e.actions,className:"wdt-200 mt-4 mr-2",value:"support_staff",title:t("Support Staff","bit-integrations"),subTitle:t("Add a Support Staff to ticket pushed to fluentSupport.","bit-integrations")}),!e.actions.support_staff&&s.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:t("Support Staff is required","bit-integrations")})]}),s.jsx(u,{onChange:q,checked:"business_inbox"in e.actions,className:"wdt-200 mt-4 mr-2",value:"business_inbox",title:t("Business Inbox","bit-integrations"),subTitle:t("Add Business Inbox on Ticket in fluentSupport.","bit-integrations")}),s.jsx(u,{onChange:()=>g({show:"client_priority"}),checked:"client_priority"in e.actions,className:"wdt-200 mt-4 mr-2",value:"client_priority",title:t("Client Priority","bit-integrations"),subTitle:t("Add Client Priority on Ticket in fluentSupport.","bit-integrations")}),s.jsx(u,{onChange:()=>g({show:"attachment"}),checked:"attachment"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",isInfo:!h,title:t(`Attachment ${h?"":"(Pro)"}`,"bit-integrations"),subTitle:h?t("Supported Types: Photos, CSV, PDF/Docs, Zip, JSON and max file size: 2.0MB","bit-integrations"):z(t("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.1.7",t("Upsert Record","bit-integrations"))})]}),s.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:c.show==="support_staff",close:x,action:x,title:t("Ticket Owner","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),m?s.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsxs("div",{className:"flx flx-between mt-2",children:[s.jsxs("select",{value:e.actions.support_staff,className:"btcd-paper-inp",onChange:i=>p(i.target.value,"support_staff"),children:[s.jsx("option",{value:"",children:t("Select Support Staff","bit-integrations")}),((_=e==null?void 0:e.default)==null?void 0:_.agents)&&e.default.agents.map(i=>s.jsx("option",{value:`${i.id}`,children:`${i.first_name||i.last_name?i.first_name+" "+i.last_name:i.email}`},i.id))]}),s.jsx("button",{onClick:()=>$(n,e,a,o,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Support Staff"'},type:"button",disabled:m,children:"↻"})]})]}),s.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:c.show==="client_priority",close:x,action:x,title:t("Select Priority","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),s.jsx("div",{className:"mt-2",children:t("Select client priority to ticket.","bit-integrations")}),s.jsx(I,{singleSelect:!0,defaultValue:e.actions.client_priority,className:"mt-2 w-9",onChange:i=>p(i,"client_priority"),options:R})]}),s.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:c.show==="business_inboxes",close:x,action:x,title:t("Business Inbox","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),m?s.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsxs("div",{className:"flx flx-between mt-2",children:[s.jsxs("select",{value:e.actions.business_inbox,className:"btcd-paper-inp",onChange:i=>p(i.target.value,"business_inbox"),children:[s.jsx("option",{value:"",children:t("Select Business Inbox","bit-integrations")}),((w=e==null?void 0:e.default)==null?void 0:w.businessInboxes)&&e.default.businessInboxes.map(i=>s.jsx("option",{value:`${i.id}`,children:i.name},i.id))]}),s.jsx("button",{onClick:()=>A(n,e,a,o,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Support Staff"'},type:"button",disabled:m,children:"↻"})]})]}),h&&s.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:c.show==="attachment",close:x,action:x,title:t("Select Attachment","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2"}),s.jsx("div",{className:"mt-2",children:t("Select File Upload Fields","bit-integrations")}),s.jsx(I,{defaultValue:e.actions.attachment,className:"mt-2 w-9",onChange:i=>p(i,"attachment"),options:l.filter(i=>i.type==="file").map(i=>({label:i.label,value:i.name})),singleSelect:!0,closeOnSelect:!0})]})]})}const Q=(e,a,n)=>{const l=b({},a);l.field_map.splice(e,0,{}),n(b({},l))},W=(e,a,n)=>{const l=b({},a);l.field_map.length>1&&l.field_map.splice(e,1),n(b({},l))},P=(e,a,n,l)=>{const r=b({},n);r.field_map[a][e.target.name]=e.target.value,e.target.value==="custom"&&(r.field_map[a].customValue=""),l(b({},r))};function X({i:e,formFields:a,field:n,fluentSupportConf:l,setFluentSupportConf:r}){var o;const d=(l==null?void 0:l.fluentSupportFields.filter(c=>c.required===!0))||[],h=(l==null?void 0:l.fluentSupportFields.filter(c=>c.required===!1))||[],j=B(O),{isPro:m}=j;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:c=>P(c,e,l,r),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),s.jsx("optgroup",{label:t("Form Fields","bit-integrations"),children:a==null?void 0:a.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),s.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(t("General Smart Codes %s","bit-integrations"),m?"":`(${t("Pro","bit-integrations")})`),children:m&&((o=G)==null?void 0:o.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),n.formField==="custom"&&s.jsx(D,{onChange:c=>H(c,e,l,r),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:t("Custom Value","bit-integrations"),formFields:a}),s.jsxs("select",{className:"btcd-paper-inp",disabled:e<d.length,name:"fluentSupportFormField",value:e<d.length?d[e].key||"":n.fluentSupportFormField||"",onChange:c=>P(c,e,l,r),children:[s.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),e<d.length?s.jsx("option",{value:d[e].key,children:d[e].label},d[e].key):h.map(({key:c,label:g})=>s.jsx("option",{value:c,children:g},c))]})]}),e>=d.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>Q(e,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>W(e,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ls({formID:e,formFields:a,handleInput:n,fluentSupportConf:l,setFluentSupportConf:r,isLoading:d,setIsLoading:h,setSnackbar:j}){return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("br",{}),d&&s.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),!d&&l.field_map&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:t("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>Z(l,r,h,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh Custom Ticket Fields","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:t("fluentSupport Fields","bit-integrations")})})]}),l.field_map.map((m,o)=>s.jsx(X,{i:o,field:m,fluentSupportConf:l,formFields:a,setFluentSupportConf:r},`desk-m-${o+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>J(l.field_map.length,l,r),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:t("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(K,{fluentSupportConf:l,setFluentSupportConf:r,formID:e,formFields:a,setSnackbar:j})]})]})}export{ls as F};
