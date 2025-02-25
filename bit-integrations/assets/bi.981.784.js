var V=Object.defineProperty;var N=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var F=(t,n,e)=>n in t?V(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,p=(t,n)=>{for(var e in n||(n={}))f.call(n,e)&&F(t,e,n[e]);if(N)for(var e of N(n))M.call(n,e)&&F(t,e,n[e]);return t};import{f as R,j as s,r as v,L as A}from"./main-212.js";import{e as G,_ as a}from"./bi.717.0.js";import{a as I,h as $}from"./bi.164.3.js";import{g as U,a as w,m as q}from"./bi.13.783.js";import{T as O}from"./bi.870.692.js";import{x as y}from"./bi.894.440.js";import{a as k}from"./bi.303.9.js";import{b as _}from"./bi.830.11.js";const S=(t,n,e)=>{const l=p({},n);l.field_map.splice(t,0,{}),e(p({},l))},E=(t,n,e)=>{const l=p({},n);l.field_map.length>1&&l.field_map.splice(t,1),e(p({},l))},T=(t,n,e,l)=>{const r=p({},e);r.field_map[n][t.target.name]=t.target.value,t.target.value==="custom"&&(r.field_map[n].customValue=""),l(p({},r))};function z({i:t,formFields:n,field:e,mailerLiteConf:l,setMailerLiteConf:r}){var j,x;if(((j=l==null?void 0:l.field_map)==null?void 0:j.length)===1&&e.mailerLiteFormField===""){const i=p({},l),b=U(i);i.field_map=b}const o=(l==null?void 0:l.mailerLiteFields.filter(i=>i.required===!0))||[],m=(l==null?void 0:l.mailerLiteFields.filter(i=>i.required===!1))||[],h=R(G),{isPro:g}=h;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:i=>T(i,t,l,r),children:[s.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),s.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:n==null?void 0:n.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),g?"":`(${a("Pro","bit-integrations")})`),children:g&&((x=I)==null?void 0:x.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),e.formField==="custom"&&s.jsx(O,{onChange:i=>$(i,t,l,r),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:n}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<o.length,name:"mailerLiteFormField",value:t<o?o[t].label||"":e.mailerLiteFormField||"",onChange:i=>T(i,t,l,r),children:[s.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),t<o.length?s.jsx("option",{value:o[t].key,children:o[t].label},o[t].key):m.map(({key:i,label:b})=>s.jsx("option",{value:i,children:b},i))]})]}),t>=o.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>S(t,l,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>E(t,l,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function B({mailerLiteConf:t,setMailerLiteConf:n,loading:e,setLoading:l}){var x,i,b;const[r,o]=v.useState({show:!1,action:()=>{}}),m=(c,u)=>{const d=p({},t);u==="group"&&(w(t,n,e,l),c.target.checked?d.actions.group=!0:delete d.actions.group,o({show:u})),u==="mailer_lite_type"&&(c.target.checked?d.actions.mailer_lite_type=!0:delete d.actions.mailer_lite_type,o({show:u})),u==="update"&&(c.target.checked?d.actions.update=!0:delete d.actions.update),u==="double_opt_in"&&(c.target.checked?d.actions.double_opt_in=!0:delete d.actions.double_opt_in),n(p({},d))},h=()=>{o({show:!1})},g=(c,u)=>{const d=p({},t);u==="group_ids"&&c.length?(d.actions.group=!0,d.actions.update=!0):u==="group_ids"&&c.length<1&&delete d.actions.group,u==="mailer_lite_type"&&c.length?d.actions.mailer_lite_type=!0:u==="mailer_lite_type"&&c.length<1&&delete d.actions.mailer_lite_type,d[u]=c,n(p({},d))},j=[{label:a("Active","bit-integrations"),value:"active"},{label:a("Unsubscribed","bit-integrations"),value:"unsubscribed"},{label:a("Bounced","bit-integrations"),value:"bounced"},{label:a("Spam Complaints","bit-integrations"),value:"junk"},{label:a("Unconfirmed","bit-integrations"),value:"unconfirmed"}];return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"pos-rel d-flx w-8",children:[s.jsx(_,{checked:(t==null?void 0:t.group_ids.length)||!1,onChange:c=>m(c,"group"),className:"wdt-200 mt-4 mr-2",value:"group",title:a("Groups","bit-integrations"),subTitle:a("Add Groups","bit-integrations")}),s.jsx(_,{checked:(t==null?void 0:t.mailer_lite_type)||!1,onChange:c=>m(c,"mailer_lite_type"),className:"wdt-200 mt-4 mr-2",value:"type",title:a("Type","bit-integrations"),subTitle:a("Add Type","bit-integrations")}),s.jsx(_,{checked:((x=t.actions)==null?void 0:x.double_opt_in)||!1,onChange:c=>m(c,"double_opt_in"),className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:a("Double Opt-in","bit-integrations"),subTitle:a("Add Double Opt-in","bit-integrations")}),s.jsx(_,{checked:((i=t.actions)==null?void 0:i.update)||!1,isInfo:t==null?void 0:t.group_ids.length,onChange:c=>m(c,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:a("Update subscriber","bit-integrations"),subTitle:a("Update Responses with MailerLite exist Subscriber?","bit-integrations")})]}),s.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:r.show==="group",close:h,action:h,title:a("Groups","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.group?s.jsx(A,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsxs("div",{className:"flx flx-between mt-2",children:[s.jsx(y,{className:"msl-wrp-options",defaultValue:t==null?void 0:t.group_ids,options:(b=t==null?void 0:t.groups)==null?void 0:b.map(c=>({label:c.name,value:c.group_id})),onChange:c=>g(c,"group_ids"),customValue:!0}),s.jsx("button",{onClick:()=>w(t,n,e,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${a("Refresh Groups","bit-integrations")}'`},type:"button",disabled:e.group,children:"↻"})]})]}),s.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:r.show==="mailer_lite_type",close:h,action:h,title:a("Type","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),s.jsx("div",{className:"flx flx-between mt-2",children:s.jsx(y,{className:"msl-wrp-options",defaultValue:t==null?void 0:t.mailer_lite_type,options:j.map(c=>({label:c.label,value:c.value})),onChange:c=>g(c,"mailer_lite_type"),customValue:!0,singleSelect:!0})})]})]})}function Z({formFields:t,handleInput:n,mailerLiteConf:e,setMailerLiteConf:l,loading:r,setLoading:o,setSnackbar:m}){const[h,g]=v.useState({name:"",auth_token:""}),[j,x]=v.useState(!1);return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsxs("b",{className:"wdt-100",children:[a("Field Map","bit-integrations"),s.jsx("button",{onClick:()=>q(e,l,g,x,r,o,"refreshFields"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Fields"'},type:"button",disabled:r.field,children:"↻"})]})}),s.jsx("br",{}),r.field&&s.jsx(A,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:a("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:a("MailerLite Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((i,b)=>s.jsx(z,{i:b,field:i,mailerLiteConf:e,formFields:t,setMailerLiteConf:l,setSnackbar:m},`rp-m-${b+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>S(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(B,{mailerLiteConf:e,setMailerLiteConf:l,formFields:t,loading:r,setLoading:o})]})]})}export{Z as M};
