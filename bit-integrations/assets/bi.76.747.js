var ot=Object.defineProperty;var Z=Object.getOwnPropertySymbols;var mt=Object.prototype.hasOwnProperty,rt=Object.prototype.propertyIsEnumerable;var L=(e,s,r)=>s in e?ot(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,x=(e,s)=>{for(var r in s||(s={}))mt.call(s,r)&&L(e,r,s[r]);if(Z)for(var r of Z(s))rt.call(s,r)&&L(e,r,s[r]);return e};import{f as lt,j as t,r as k,L as w}from"./main-615.js";import{u as C,z as pt}from"./bi.991.437.js";import{e as it,_ as l}from"./bi.394.0.js";import{a as at,h as dt,M as ut}from"./bi.819.3.js";import{T as xt}from"./bi.178.673.js";import{a as N}from"./bi.179.9.js";import{b as h}from"./bi.405.11.js";import{g as _,b as f}from"./bi.690.748.js";const ct=(e,s,r,a,n)=>{const c=x({},s);n?a?c.relatedlists[n-1].upload_field_map.splice(e,0,{}):c.relatedlists[n-1].field_map.splice(e,0,{}):a?c.upload_field_map.splice(e,0,{}):c.field_map.splice(e,0,{}),r(x({},c))},st=(e,s,r)=>{const a=x({},s);a.field_map_contact.splice(e,0,{}),r(x({},a))},bt=(e,s,r,a,n)=>{const c=x({},s);n?a?c.relatedlists[n-1].upload_field_map.length>1&&c.relatedlists[n-1].upload_field_map.splice(e,1):c.relatedlists[n-1].field_map.length>1&&c.relatedlists[n-1].field_map.splice(e,1):a?c.upload_field_map.length>1&&c.upload_field_map.splice(e,1):c.field_map.length>1&&c.field_map.splice(e,1),r(x({},c))},gt=(e,s,r)=>{const a=x({},s);a.field_map_contact.length>1&&a.field_map_contact.splice(e,1),r(x({},a))},tt=(e,s,r,a,n,c)=>{const u=x({},r);c?n?u.relatedlists[c-1].upload_field_map[s][e.target.name]=e.target.value:u.relatedlists[c-1].field_map[s][e.target.name]=e.target.value:n?u.upload_field_map[s][e.target.name]=e.target.value:u.field_map[s][e.target.name]=e.target.value,e.target.value==="custom"&&(c?u.relatedlists[c-1].field_map[s].customValue="":u.field_map[s].customValue=""),a(x({},u))},et=(e,s,r,a)=>{const n=x({},r);n.field_map_contact[s][e.target.name]=e.target.value,a(x({},n))},jt=(e,s,r,a,n)=>{const c=x({},r);n?c.relatedlists[n-1].field_map[s].customValue=e.target.value:c.field_map[s].customValue=e.target.value,a(x({},c))};function vt({i:e,formFields:s,field:r,freshdeskConf:a,setFreshdeskConf:n}){var v,g,j;const c=(a==null?void 0:a.ticketFields)&&((v=a==null?void 0:a.ticketFields)==null?void 0:v.filter(o=>o.required===!0))||[],u=(a==null?void 0:a.ticketFields)&&((g=a==null?void 0:a.ticketFields)==null?void 0:g.filter(o=>o.required===!1))||[],m=lt(it),{isPro:b}=m;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:o=>tt(o,e,a,n),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:s==null?void 0:s.map(o=>t.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`))}),t.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),b?"":`(${l("Pro","bit-integrations")})`),children:b&&((j=at)==null?void 0:j.map(o=>t.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`)))})]}),r.formField==="custom"&&t.jsx(xt,{onChange:o=>dt(o,e,a,n),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:s}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<c.length,name:"freshdeskFormField",value:e<c.length?c[e].key||"":r.freshdeskFormField||"",onChange:o=>tt(o,e,a,n),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e<c.length?t.jsx("option",{value:c[e].key,children:c[e].label},c[e].key):u.map(({key:o,label:y})=>t.jsx("option",{value:o,children:y},o))]})]}),e>=c.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>ct(e,a,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>bt(e,a,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ht({freshdeskConf:e,setFreshdeskConf:s,formFields:r,setSnackbar:a}){var F,S,M,A,P,$,O,R,V,I,q,G,H,U;const[n,c]=k.useState(!1),[u,m]=k.useState({show:!1,action:()=>{}}),b=(i,d)=>{var T,B,E,z,D,J,K,Q,W,X,Y;const p=x({},e);d==="ticket_type"&&((T=i.target)!=null&&T.checked?(p.actions.ticket_type=!0,m({show:"ticket_type"})):(m({show:!1}),delete p.actions.ticket_type,delete p.selected_ticket_type)),d==="source"&&(console.log((B=i.target)==null?void 0:B.checked),(E=i.target)!=null&&E.checked?(p.actions.source=!0,m({show:"source"})):(m({show:!1}),delete p.actions.source,delete p.selected_ticket_source)),d==="group"&&(console.log((z=i.target)==null?void 0:z.checked),(D=i.target)!=null&&D.checked?(p.actions.group=!0,m({show:"group"})):(m({show:!1}),delete p.actions.group,delete p.selected_ticket_group)),d==="product"&&(console.log((J=i.target)==null?void 0:J.checked),(K=i.target)!=null&&K.checked?(p.actions.product=!0,m({show:"product"})):(m({show:!1}),delete p.actions.product,delete p.selected_ticket_product)),d==="agent"&&(console.log((Q=i.target)==null?void 0:Q.checked),(W=i.target)!=null&&W.checked?(p.actions.agent=!0,m({show:"agent"})):(m({show:!1}),delete p.actions.agent,delete p.selected_ticket_agent)),d==="status"&&((X=i.target)!=null&&X.checked?(p.actions.status=!0,m({show:"status"})):(m({show:!1}),delete p.actions.status,delete p.status)),d==="priority"&&((Y=i.target)!=null&&Y.checked?(p.actions.priority=!0,m({show:"priority"})):(m({show:!1}),delete p.actions.priority,delete p.priority)),d==="updateContact"&&(i.target.checked?p.updateContact=!0:delete p.updateContact),d==="Attachments"&&(i.target.value!==""?p.actions.attachments=i.target.value:delete p.actions.attachments),d==="file"&&(i.target.value!==""?p.actions.file=i.target.value:delete p.actions.file),s(x({},p))},v=()=>{m({show:!1})},g=i=>{const d=x({},e);d.status=i,s(d)},j=i=>{const d=x({},e);d.priority=i,s(d)},o=(i,d)=>{s(p=>pt(p,T=>{T[d]=i}))},y=[{label:l("Open","bit-integrations"),value:"2"},{label:l("Pending","bit-integrations"),value:"3"},{label:l("Resolved","bit-integrations"),value:"4"},{label:l("Closed","bit-integrations"),value:"5"}],nt=[{label:l("Low","bit-integrations"),value:"1"},{label:l("Medium","bit-integrations"),value:"2"},{label:l("High","bit-integrations"),value:"3"},{label:l("Urgent","bit-integrations"),value:"4"}];return t.jsxs("div",{className:"d-flx flx-wrp",children:[t.jsxs("div",{className:"pos-rel d-flx flx-col",children:[t.jsx(h,{checked:((F=e==null?void 0:e.actions)==null?void 0:F.status)||!1,onChange:i=>b(i,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:l("Status","bit-integrations"),subTitle:l("Add Ticket Status","bit-integrations")}),t.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:l("This Required","bit-integrations")}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:u.show==="status",close:v,action:v,title:l("Position","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:l("Select Status","bit-integrations")}),n?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(C,{options:y,className:"msl-wrp-options",singleSelect:!0,defaultValue:e.status,onChange:i=>g(i)})})]})]}),t.jsxs("div",{className:"pos-rel d-flx flx-col",children:[t.jsx(h,{checked:((S=e==null?void 0:e.actions)==null?void 0:S.priority)||!1,onChange:i=>b(i,"priority"),className:"wdt-200 mt-4 mr-2",value:"priority",title:l("Priority","bit-integrations"),subTitle:l("Add Ticket Priority","bit-integrations")}),t.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:l("This Required","bit-integrations")}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:u.show==="priority",close:v,action:v,title:l("Position","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:l("Select Priority","bit-integrations")}),n?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(C,{options:nt,className:"msl-wrp-options",singleSelect:!0,defaultValue:e.priority,onChange:i=>j(i)})})]})]}),t.jsxs("div",{className:"pos-rel d-flx",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(h,{onChange:i=>b(i,"ticket_type"),checked:((M=e==null?void 0:e.actions)==null?void 0:M.ticket_type)||!1,className:"wdt-200 mt-4 mr-2",value:"ticket_type",title:l("Ticket Type","bit-integrations"),subTitle:l("Add Ticket type","bit-integrations")})}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:u.show==="ticket_type",close:()=>m({show:!1}),action:()=>m({show:!1}),title:l("Select type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select ticket type","bit-integrations")}),n?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}):t.jsxs("div",{className:"flx",children:[t.jsxs("select",{onChange:i=>o(i.target.value,"selected_ticket_type"),name:"ticket_type",value:e.selected_ticket_type,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select ticket type","bit-integrations")}),(A=e==null?void 0:e.ticketType)==null?void 0:A.map((i,d)=>t.jsx("option",{value:i,children:i},d))]}),t.jsx("button",{onClick:()=>_(e,s,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Ticket Field & Types","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]})]}),t.jsxs("div",{className:"pos-rel d-flx w-8l",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(h,{onChange:i=>b(i,"source"),checked:((P=e==null?void 0:e.actions)==null?void 0:P.source)||!1,className:"wdt-200 mt-4 mr-2",value:"source",title:l("Source","bit-integrations"),subTitle:l("Add Ticket Source","bit-integrations")})}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:u.show==="source",close:()=>m({show:!1}),action:()=>m({show:!1}),title:l("Select Source","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select ticket source","bit-integrations")}),n?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}):t.jsxs("div",{className:"flx",children:[t.jsxs("select",{onChange:i=>o(i.target.value,"selected_ticket_source"),name:"source",value:e.selected_ticket_source,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select ticket source","bit-integrations")}),(e==null?void 0:e.sources)&&(($=Object.keys(e==null?void 0:e.sources))==null?void 0:$.map((i,d)=>t.jsx("option",{value:e==null?void 0:e.sources[i],children:i},d)))]}),t.jsx("button",{onClick:()=>_(e,s,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Ticket Field & Sources","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]})]}),t.jsxs("div",{className:"pos-rel d-flx w-8l",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(h,{onChange:i=>b(i,"group"),checked:((O=e==null?void 0:e.actions)==null?void 0:O.group)||!1,className:"wdt-200 mt-4 mr-2",value:"group",title:l("Group","bit-integrations"),subTitle:l("Add Ticket Group","bit-integrations")})}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:u.show==="group",close:()=>m({show:!1}),action:()=>m({show:!1}),title:l("Select group","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select ticket Group","bit-integrations")}),n?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}):t.jsxs("div",{className:"flx",children:[t.jsxs("select",{onChange:i=>o(i.target.value,"selected_ticket_group"),name:"group",value:e.selected_ticket_group,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select ticket group","bit-integrations")}),(e==null?void 0:e.groups)&&((R=Object.keys(e==null?void 0:e.groups))==null?void 0:R.map((i,d)=>t.jsx("option",{value:e==null?void 0:e.groups[i],children:i},d)))]}),t.jsx("button",{onClick:()=>_(e,s,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Ticket Field & Groups","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]})]}),t.jsxs("div",{className:"pos-rel d-flx w-8l",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(h,{onChange:i=>b(i,"product"),checked:((V=e==null?void 0:e.actions)==null?void 0:V.product)||!1,className:"wdt-200 mt-4 mr-2",value:"product",title:l("Product","bit-integrations"),subTitle:l("Add Product in Ticket","bit-integrations")})}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:u.show==="product",close:()=>m({show:!1}),action:()=>m({show:!1}),title:l("Select Product","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select product","bit-integrations")}),n?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}):t.jsxs("div",{className:"flx",children:[t.jsxs("select",{onChange:i=>o(i.target.value,"selected_ticket_product"),name:"product",value:e.selected_ticket_product,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select Product","bit-integrations")}),(e==null?void 0:e.products)&&((I=Object.keys(e==null?void 0:e.products))==null?void 0:I.map((i,d)=>t.jsx("option",{value:e==null?void 0:e.products[i],children:i},d)))]}),t.jsx("button",{onClick:()=>_(e,s,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Ticket Field & products","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]})]}),t.jsxs("div",{className:"pos-rel d-flx w-8l",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(h,{onChange:i=>b(i,"agent"),checked:((q=e==null?void 0:e.actions)==null?void 0:q.agent)||!1,className:"wdt-200 mt-4 mr-2",value:"agent",title:l("Agent","bit-integrations"),subTitle:l("Add Agent in Ticket","bit-integrations")})}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:u.show==="agent",close:()=>m({show:!1}),action:()=>m({show:!1}),title:l("Select Agent","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select agent","bit-integrations")}),n?t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}):t.jsxs("div",{className:"flx",children:[t.jsxs("select",{onChange:i=>o(i.target.value,"selected_ticket_agent"),name:"agent",value:e.selected_ticket_agent,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select Agent","bit-integrations")}),(e==null?void 0:e.agents)&&((G=Object.keys(e==null?void 0:e.agents))==null?void 0:G.map((i,d)=>t.jsx("option",{value:e==null?void 0:e.agents[i],children:i},d)))]}),t.jsx("button",{onClick:()=>_(e,s,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Ticket Field & agents","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]})]}),t.jsxs("div",{className:"pos-rel d-flx w-8l",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(h,{onChange:()=>m({show:"attachments"}),checked:"attachments"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:l("Photo","bit-integrations"),subTitle:l("Add Photo on Freshdsk Account.","bit-integrations")})}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:u.show==="attachments",close:()=>m({show:!1}),action:()=>m({show:!1}),title:l("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:i=>b(i,"Attachments"),name:"attachments",value:(H=e.actions)==null?void 0:H.attachments,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select file upload field","bit-integrations")}),r.filter(i=>i.type==="file").map(i=>t.jsx("option",{value:i.name,children:i.label},i.name+1))]})]})]}),t.jsxs("div",{className:"pos-rel d-flx",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(h,{onChange:()=>m({show:"file"}),checked:"file"in e.actions,className:"wdt-200 mt-4 mr-2",value:"file",title:l("File","bit-integrations"),subTitle:l("Add File from Bit Integrations to send Freshdsk.","bit-integrations")})}),t.jsxs(N,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:u.show==="file",close:()=>m({show:!1}),action:()=>m({show:!1}),title:l("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:i=>b(i,"file"),name:"file",value:(U=e.actions)==null?void 0:U.file,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select file upload field","bit-integrations")}),r.filter(i=>i.type==="file").map(i=>t.jsx("option",{value:i.name,children:i.label},i.name+1))]})]})]}),t.jsx("div",{className:"pos-rel d-flx",children:t.jsx(h,{checked:(e==null?void 0:e.updateContact)||!1,onChange:i=>b(i,"updateContact"),className:"wdt-200 mt-4 mr-2",value:"updateContact",title:l("Update","bit-integrations"),subTitle:l("Update Contact or Create Contact","bit-integrations")})})]})}function Nt({i:e,formFields:s,field:r,freshdeskConf:a,setFreshdeskConf:n}){var v,g,j;const c=(a==null?void 0:a.contactFields)&&((v=a==null?void 0:a.contactFields)==null?void 0:v.filter(o=>o.required===!0))||[],u=(a==null?void 0:a.contactFields)&&((g=a==null?void 0:a.contactFields)==null?void 0:g.filter(o=>o.required===!1))||[],m=lt(it),{isPro:b}=m;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:o=>et(o,e,a,n),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:s==null?void 0:s.map(o=>t.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`))}),t.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),b?"":`(${l("Pro","bit-integrations")})`),children:b&&((j=at)==null?void 0:j.map(o=>t.jsx("option",{value:o.name,children:o.label},`ff-rm-${o.name}`)))})]}),r.formField==="custom"&&t.jsx(ut,{onChange:o=>jt(o,e,a,n),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue,placeholder:l("Custom Value","bit-integrations")}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<c.length,name:"contactFreshdeskFormField",value:e<c.length?c[e].key||"":r.contactFreshdeskFormField||"",onChange:o=>et(o,e,a,n),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e<c.length?t.jsx("option",{value:c[e].key,children:c[e].label},c[e].key):u.map(({key:o,label:y})=>t.jsx("option",{value:o,children:y},o))]})]}),e>=c.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>st(e,a,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>gt(e,a,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function $t({formID:e,formFields:s,handleInput:r,freshdeskConf:a,setFreshdeskConf:n,isLoading:c,setIsLoading:u,setSnackbar:m,a:b}){const v=(g,j)=>{var y;const o=x({},a);j==="contactShow"&&((y=g.target)!=null&&y.checked?(o.contactShow=!0,f(o,n,u,m)):delete o.contactShow),n(x({},o))};return t.jsxs(t.Fragment,{children:[c&&t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>_(a,n,u,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Ticket Field","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Freshdesk Ticket Fields","bit-integrations")})})]}),a.field_map.map((g,j)=>t.jsx(vt,{i:j,field:g,freshdeskConf:a,formFields:s,setFreshdeskConf:n},`keap-m-${j+9}`)),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>ct(a.field_map.length,a,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx(h,{checked:(a==null?void 0:a.contactShow)||!1,onChange:g=>v(g,"contactShow"),className:"wdt-200 mt-4 mr-2",value:"priority",title:l("Show contact field","bit-integrations"),subTitle:l("if want add more field in contact","bit-integrations")}),a.contactShow&&c&&t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.contactShow&&!c&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>f(a,n,u,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Contact Field","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Freshdesk Contact Fields","bit-integrations")})})]}),a.field_map_contact.map((g,j)=>t.jsx(Nt,{i:j,field:g,freshdeskConf:a,formFields:s,setFreshdeskConf:n},`keap-m-${j+9}`))]}),t.jsx("br",{}),t.jsx("br",{}),a.contactShow&&!c&&t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>st(a.field_map_contact.length,a,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(ht,{freshdeskConf:a,setFreshdeskConf:n,formFields:s,isLoading:c,setIsLoading:u,setSnackbar:m})]})]})}export{$t as F};
