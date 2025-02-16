var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var N=(t,n,s)=>n in t?y(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,b=(t,n)=>{for(var s in n||(n={}))_.call(n,s)&&N(t,s,n[s]);if(v)for(var s of v(n))T.call(n,s)&&N(t,s,n[s]);return t};import{r as j,j as e,f,L as k}from"./main-320.js";import{_ as c,e as S}from"./bi.576.0.js";import{aj as I,x as O}from"./bi.795.440.js";import{a as A}from"./bi.155.9.js";import{b as u}from"./bi.440.11.js";import{g as M,m as V}from"./bi.435.815.js";import{a as q,h as R}from"./bi.337.3.js";import{T as $}from"./bi.468.689.js";function z({mailBlusterConf:t,setMailBlusterConf:n}){var h,m;const[s,a]=j.useState({show:!1,action:()=>{}}),d=(l,p)=>{var i;const r=b({},t);p==="tag"&&((i=l.target)!=null&&i.checked?r.actions.tags=!0:(a({show:!1}),delete r.actions.tags),a({show:"tag"})),p==="update"&&(l.target.checked?r.actions.update=!0:delete r.actions.update),p==="doubleOptIn"&&(l.target.checked?r.actions.doubleOptIn=!0:delete r.actions.doubleOptIn),n(b({},r))},o=()=>{a({show:!1})},x=l=>{const p=b({},t);p.selectedTags=l,n(b({},p))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(u,{checked:(t==null?void 0:t.selectedTags.length)||!1,onChange:l=>d(l,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:c("Add Tags","bit - integrations"),subTitle:c("Note: If tag already exists, it will be only attached to the lead. Otherwise, it will be created first and then get attached.","bit - integrations")}),e.jsx(u,{checked:((h=t.actions)==null?void 0:h.update)||!1,onChange:l=>d(l,"update"),className:"wdt-200 mt-4 mr-2",value:"update_contact",title:c("Update Lead","bit-integrations"),subTitle:c("Override the existing lead info by responses.","bit-integrations")}),e.jsx(u,{checked:((m=t.actions)==null?void 0:m.doubleOptIn)||!1,onChange:l=>d(l,"doubleOptIn"),className:"wdt-200 mt-4 mr-2",value:"doubleOptIn",title:c("Double Opt-in","bit-integrations"),subTitle:c("Add Double Opt-in","bit-integrations")}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:s.show==="tag",close:o,action:o,title:c("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"mt-2 ml-7 flx",children:[c("Create contact Tags","bit-integrations"),e.jsx(I,{Cooltip:!0,width:250,icnSize:17,className:"ml-2 mr-18",children:e.jsxs("div",{className:"txt-body",children:[c("Note: create custom options by pressing enter or comma","bit-integrations"),e.jsx("br",{})]})})]}),e.jsx("div",{className:"flx flx-center mt-2",children:e.jsx(O,{options:"",className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTags,onChange:l=>x(l),customValue:!0})})]})]})}const w=(t,n,s)=>{const a=b({},n);a.field_map.splice(t,0,{}),s(b({},a))},E=(t,n,s)=>{const a=b({},n);a.field_map.length>1&&a.field_map.splice(t,1),s(b({},a))},F=(t,n,s,a)=>{const d=b({},s);d.field_map[n][t.target.name]=t.target.value,t.target.value==="custom"&&(d.field_map[n].customValue=""),a(b({},d))};function L({i:t,formFields:n,field:s,mailBlusterConf:a,setMailBlusterConf:d}){var p,r;if(((p=a==null?void 0:a.field_map)==null?void 0:p.length)===1&&s.mailBlusterFormField===""){const i=b({},a),g=M(i);i.field_map=g,d(i)}const o=(a==null?void 0:a.staticFields.filter(i=>i.required===!0))||[],h=[...(a==null?void 0:a.staticFields.filter(i=>i.required===!1))||[],...a.customFields],m=f(S),{isPro:l}=m;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:i=>F(i,t,a,d),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:n==null?void 0:n.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),l?"":`(${c("Pro","bit-integrations")})`),children:l&&((r=q)==null?void 0:r.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),s.formField==="custom"&&e.jsx($,{onChange:i=>R(i,t,a,d),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:n}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<o.length,name:"mailBlusterFormField",value:t<o?o[t].label||"":s.mailBlusterFormField||"",onChange:i=>F(i,t,a,d),children:[e.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t<o.length?e.jsx("option",{value:o[t].key,children:o[t].label},o[t].key):h.map(({key:i,label:g})=>e.jsx("option",{value:i,children:g},i))]})]}),t>=o.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>w(t,a,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>E(t,a,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function X({formFields:t,handleInput:n,mailBlusterConf:s,setMailBlusterConf:a,loading:d,setLoading:o,setSnackbar:x}){const[h,m]=j.useState({name:"",auth_token:""}),[l,p]=j.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:c("Type:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"subscribed",value:s.subscribed,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:c("Select subscription type","bit-integrations")}),e.jsx("option",{value:"true",children:c("Subscribed","bit-integrations")}),e.jsx("option",{value:"false",children:c("Unsubscribed","bit-integrations")})]}),d.customFields&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.subscribed&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsxs("b",{className:"wdt-100",children:[c("Field Map","bit-integrations"),e.jsx("button",{onClick:()=>V(s,a,m,p,d,o,"refreshCustomFields"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:d.customFields,children:"↻"})]})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:c("MailBluster Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((r,i)=>e.jsx(L,{i,field:r,mailBlusterConf:s,formFields:t,setMailBlusterConf:a,setSnackbar:x},`rp-m-${i+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>w(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(z,{mailBlusterConf:s,setMailBlusterConf:a,formFields:t,loading:d,setLoading:o})]})]})}export{X as M};
