var q=Object.defineProperty;var _=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var x=(i,s,a)=>s in i?q(i,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[s]=a,b=(i,s)=>{for(var a in s||(s={}))k.call(s,a)&&x(i,a,s[a]);if(_)for(var a of _(s))A.call(s,a)&&x(i,a,s[a]);return i};import{r as g,f as o,j as t,L as I}from"./main-119.js";import{x as U}from"./bi.276.437.js";import{e as v,_ as c}from"./bi.686.0.js";import{a as N,h as P,M as V,b as R}from"./bi.316.3.js";import{g as E,a as G,b as T,f as z}from"./bi.951.763.js";import{T as H}from"./bi.570.675.js";const B=(i,s,a)=>{const l=b({},s);l.field_map.splice(i,0,{}),a(b({},l))},D=(i,s,a)=>{const l=b({},s);l.field_map.length>1&&l.field_map.splice(i,1),a(b({},l))},w=(i,s,a,l)=>{const r=b({},a);r.field_map[s][i.target.name]=i.target.value,i.target.value==="custom"&&(r.field_map[s].customValue=""),l(b({},r))},y=(i,s,a,l)=>{const r=b({},a);r.field_map_list[s][i.target.name]=i.target.value,i.target.value==="custom"&&(r.field_map_list[s].customValue=""),l(b({},r))},J=(i,s,a,l)=>{const r=b({},a);r.field_map_list[s].customValue=i.target.value,l(b({},r))},L=(i,s,a)=>{const l=b({},s);l.field_map_list.splice(i,0,{}),a(b({},l))},$=(i,s,a)=>{const l=b({},s);l.field_map_list.length>1&&l.field_map_list.splice(i,1),a(b({},l))},M=(i,s,a,l)=>{const r=b({},a);r.field_map_unsubscribe[s][i.target.name]=i.target.value,i.target.value==="custom"&&(r.field_map_unsubscribe[s].customValue=""),l(b({},r))},K=(i,s,a,l)=>{const r=b({},a);r.field_map_unsubscribe[s].customValue=i.target.value,l(b({},r))};function O({i,formFields:s,field:a,sendFoxConf:l,setSendFoxConf:r}){var p;g.useEffect(()=>{var e;if(((e=l==null?void 0:l.field_map)==null?void 0:e.length)===1&&a.sendFoxFormField===""){const m=b({},l),j=E(m);m.field_map=j,r(m)}});const n=(l==null?void 0:l.contactFields.filter(e=>e.required===!0))||[],d=(l==null?void 0:l.contactFields.filter(e=>e.required===!1))||[],h=o(v),{isPro:u}=h;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:e=>w(e,i,l,r),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:s==null?void 0:s.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),u?"":`(${c("Pro","bit-integrations")})`),children:u&&((p=N)==null?void 0:p.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),a.formField==="custom"&&t.jsx(H,{onChange:e=>P(e,i,l,r),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:s}),t.jsxs("select",{className:"btcd-paper-inp",disabled:i<n.length,name:"sendFoxFormField",value:i<n.length?n[i].key||"":a.sendFoxFormField||"",onChange:e=>w(e,i,l,r),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),i<n.length?t.jsx("option",{value:n[i].key,children:n[i].label},n[i].key):d.map(({key:e,label:m})=>t.jsx("option",{value:e,children:m},e))]})]}),i>=n.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>B(i,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>D(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Q({i,formFields:s,field:a,sendFoxConf:l,setSendFoxConf:r}){var p;g.useEffect(()=>{var e;if(((e=l==null?void 0:l.field_map_list)==null?void 0:e.length)===1&&a.sendFoxListFormField===""){const m=b({},l),j=G(m);m.field_map_list=j,r(m)}});const n=(l==null?void 0:l.listFields.filter(e=>e.required===!0))||[],d=(l==null?void 0:l.listFields.filter(e=>e.required===!1))||[],h=o(v),{isPro:u}=h;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:e=>y(e,i,l,r),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:s==null?void 0:s.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),u?"":`(${c("Pro","bit-integrations")})`),children:u&&((p=N)==null?void 0:p.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),a.formField==="custom"&&t.jsx(V,{onChange:e=>J(e,i,l,r),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:c("Custom Value","bit-integrations")}),t.jsxs("select",{className:"btcd-paper-inp",disabled:i<n.length,name:"sendFoxListFormField",value:i<n.length?n[i].key||"":a.sendFoxListFormField||"",onChange:e=>y(e,i,l,r),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),i<n.length?t.jsx("option",{value:n[i].key,children:n[i].label},n[i].key):d.map(({key:e,label:m})=>t.jsx("option",{value:e,children:m},e))]})]}),i>=n.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>L(i,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>$(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function W({i,formFields:s,field:a,sendFoxConf:l,setSendFoxConf:r}){var p;g.useEffect(()=>{var e;if(((e=l==null?void 0:l.field_map_unsubscribe)==null?void 0:e.length)===1&&a.sendFoxUnsubscribeFormField===""){const m=b({},l),j=T(m);m.field_map_unsubscribe=j,r(m)}});const n=(l==null?void 0:l.unsubscribeFields.filter(e=>e.required===!0))||[],d=(l==null?void 0:l.unsubscribeFields.filter(e=>e.required===!1))||[],h=o(v),{isPro:u}=h;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:e=>M(e,i,l,r),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:s==null?void 0:s.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),u?"":`(${c("Pro","bit-integrations")})`),children:u&&((p=N)==null?void 0:p.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),a.formField==="custom"&&t.jsx(V,{onChange:e=>K(e,i,l,r),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:c("Custom Value","bit-integrations")}),t.jsxs("select",{className:"btcd-paper-inp",disabled:i<n.length,name:"sendFoxUnsubscribeFormField",value:i<n.length?n[i].key||"":a.sendFoxUnsubscribeFormField||"",onChange:e=>M(e,i,l,r),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),i<n.length?t.jsx("option",{value:n[i].key,children:n[i].label},n[i].key):d.map(({key:e,label:m})=>t.jsx("option",{value:e,children:m},e))]})]}),i>=n.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>L(i,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>$(i,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function tt({formFields:i,handleInput:s,sendFoxConf:a,setSendFoxConf:l,isLoading:r,setIsLoading:n,setSnackbar:d}){var p;const h=(((p=a==null?void 0:a.default)==null?void 0:p.allLists)||[]).map(({id:e,name:m})=>({label:m,value:`${e}`})),u=e=>{const m=b({},a);e?m.listId=e:m.listId="",l(b({},m))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:c("Actions:","bit-integrations")}),t.jsxs("select",{onChange:s,name:"mainAction",value:a.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:c("Select Actions","bit-integrations")}),a.allActions&&a.allActions.map(({key:e,label:m})=>t.jsx("option",{value:e,children:m},e))]}),t.jsx("br",{}),t.jsx("br",{}),r&&t.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.mainAction==="1"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("SendFox List Fields","bit-integrations")})})]}),a==null?void 0:a.field_map_list.map((e,m)=>t.jsx(Q,{i:m,field:e,sendFoxConf:a,formFields:i,setSendFoxConf:l,setSnackbar:d},`rp-m-${m+9}`))]}),a.mainAction==="2"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"d-flx",children:[t.jsx("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:c("All List:","bit-integrations")}),t.jsx(U,{options:h,className:"btcd-paper-drpdwn w-5",defaultValue:a.listId,onChange:e=>u(e),customValue:!0}),t.jsx("button",{onClick:()=>z(a,l,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh SendFox List","bit-integrations")}'`},type:"button",disabled:r,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("SendFox Fields","bit-integrations")})})]}),(a==null?void 0:a.listId)&&(a==null?void 0:a.field_map.map((e,m)=>t.jsx(O,{i:m,field:e,sendFoxConf:a,formFields:i,setSendFoxConf:l,setSnackbar:d},`rp-m-${m+9}`))),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>R(a.field_map.length,a,l,!1),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),a.mainAction==="3"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("SendFox Unsubscribe Fields","bit-integrations")})})]}),a==null?void 0:a.field_map_unsubscribe.map((e,m)=>t.jsx(W,{i:m,field:e,sendFoxConf:a,formFields:i,setSendFoxConf:l,setSnackbar:d},`rp-m-${m+9}`))]}),t.jsx("br",{})]})}export{tt as S};
