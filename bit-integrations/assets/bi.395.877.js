var J=Object.defineProperty;var U=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var B=(e,d,s)=>d in e?J(e,d,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[d]=s,j=(e,d)=>{for(var s in d||(d={}))Q.call(d,s)&&B(e,s,d[s]);if(U)for(var s of U(d))X.call(d,s)&&B(e,s,d[s]);return e};import{r as Y,j as t,L as z,f as Z}from"./main-263.js";import{u as w,z as x}from"./bi.361.434.js";import{_ as a,e as M}from"./bi.924.0.js";import{a as F}from"./bi.402.9.js";import{b as S}from"./bi.929.11.js";import{g as A,a as p,r as G,b as R}from"./bi.564.876.js";import{M as f,a as C}from"./bi.317.3.js";const W=(e,d,s)=>{const i=j({},d);i.field_map.splice(e,0,{}),s(j({},i))},tt=(e,d,s)=>{const i=j({},d);i.field_map.length>1&&i.field_map.splice(e,1),s(j({},i))},K=(e,d,s,i)=>{const n=j({},s);n.field_map[d][e.target.name]=e.target.value,e.target.value==="custom"&&(n.field_map[d].customValue=""),e.target.value==="customFieldKey"&&(n.field_map[d].customFieldKey=""),i(j({},n))},st=(e,d,s,i,n)=>{const o=j({},s);o.field_map[d][n]=e.target.value,i(j({},o))};function et({perfexCRMConf:e,setPerfexCRMConf:d,loading:s,setLoading:i}){var y,m,T,I,P,l,N,h,k,_;const[n,o]=Y.useState({show:!1,action:()=>{}}),b=(c,v)=>{var O,L,V,$,D,H,q,E;const r=j({},e);v==="direction"?(O=c.target)!=null&&O.checked?r.actions.direction=!0:(o({show:!1}),delete r.actions.direction):v==="contactIsPrimary"?(L=c.target)!=null&&L.checked?r.actions.contactIsPrimary=!0:delete r.actions.contactIsPrimary:v==="permission"?(V=c.target)!=null&&V.checked?(r.permissions=[{id:1,name:a("Invoices permission","bit-integrations")},{id:2,name:a("Estimates permission","bit-integrations")},{id:3,name:a("Contracts permission","bit-integrations")},{id:4,name:a("Proposals permission","bit-integrations")},{id:5,name:a("Support permission","bit-integrations")},{id:6,name:a("Projects permission","bit-integrations")}],r.actions.permission=!0):(o({show:!1}),delete r.actions.permission):v==="leadIsPublic"?($=c.target)!=null&&$.checked?r.actions.leadIsPublic=!0:delete r.actions.leadIsPublic:v==="contactedToday"?(D=c.target)!=null&&D.checked?r.actions.contactedToday=!0:delete r.actions.contactedToday:v==="leadStatus"?(H=c.target)!=null&&H.checked?r.actions.leadStatus=!0:delete r.actions.leadStatus:v==="leadSource"?(q=c.target)!=null&&q.checked?r.actions.leadSource=!0:delete r.actions.leadSource:v==="projectMembers"&&((E=c.target)!=null&&E.checked?(A(r,d,s,i),r.actions.projectMembers=!0):delete r.actions.projectMembers),o({show:v}),d(j({},r))},u=()=>{o({show:!1})},g=(c,v)=>{const r=j({},e);r[v]=c,d(j({},r))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.actionName==="contact"&&t.jsx(S,{checked:(e==null?void 0:e.selectedDirection)||!1,onChange:c=>b(c,"direction"),className:"wdt-200 mt-4 mr-2",value:"direction",title:a("Add Direction","bit - integrations"),subTitle:a("Add Direction")}),e.actionName==="contact"&&t.jsx(S,{checked:((y=e==null?void 0:e.selectedPermission)==null?void 0:y.length)||!1,onChange:c=>b(c,"permission"),className:"wdt-200 mt-4 mr-2",value:"permission",title:a("Add Permissions","bit - integrations"),subTitle:a("Add Permissions for this contact")}),e.actionName==="contact"&&t.jsx(S,{checked:((m=e.actions)==null?void 0:m.contactIsPrimary)||!1,onChange:c=>b(c,"contactIsPrimary"),className:"wdt-200 mt-4 mr-2",value:"contactIsPrimary",title:a("Is it Primary Contact?","bit-integrations"),subTitle:a("Is it Primary Contact?","bit-integrations")}),e.actionName==="lead"&&t.jsx(S,{checked:((T=e.actions)==null?void 0:T.leadIsPublic)||!1,onChange:c=>b(c,"leadIsPublic"),className:"wdt-200 mt-4 mr-2",value:"leadIsPublic",title:a("Public","bit-integrations"),subTitle:a("Is it Public?","bit-integrations")}),e.actionName==="lead"&&t.jsx(S,{checked:((I=e.actions)==null?void 0:I.contactedToday)||!1,onChange:c=>b(c,"contactedToday"),className:"wdt-200 mt-4 mr-2",value:"contactedToday",title:a("Contacted Today","bit-integrations"),subTitle:a("Contacted Today","bit-integrations")}),e.actionName==="lead"&&t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx(S,{checked:((P=e.actions)==null?void 0:P.leadStatus)||!1,onChange:c=>b(c,"leadStatus"),className:"wdt-200 mt-4 mr-2",value:"leadStatus",title:a("Add Lead Status Id","bit-integrations"),subTitle:a("Add Lead Status Id","bit-integrations")}),!((l=e.actions)!=null&&l.leadStatus)&&t.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:a("Lead Status is required","bit-integrations")})]}),e.actionName==="lead"&&t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx(S,{checked:((N=e.actions)==null?void 0:N.leadSource)||!1,onChange:c=>b(c,"leadSource"),className:"wdt-200 mt-4 mr-2",value:"leadSource",title:a("Add Lead Source Id","bit-integrations"),subTitle:a("Add Lead Source Id","bit-integrations")}),!((h=e.actions)!=null&&h.leadSource)&&t.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:a("Lead Source is required","bit-integrations")})]}),e.actionName==="project"&&t.jsx(S,{checked:(e==null?void 0:e.selectedProjectMembers)||!1,onChange:c=>b(c,"projectMembers"),className:"wdt-200 mt-4 mr-2",value:"projectMembers",title:a("Add Project Members","bit-integrations"),subTitle:a("Add Project Members","bit-integrations")}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:n.show==="direction",close:u,action:u,title:a("Direction","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:a("Select Direction","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(w,{options:["rtl","ltr"].map(c=>({label:c,value:c})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedDirection,onChange:c=>g(c,"selectedDirection"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:n.show==="leadStatus",close:u,action:u,title:a("Add Lead Status Id","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Lead Status Id:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:c=>g(c.target.value,"selectedLeadStatusId"),name:"selectedLeadStatusId",value:(e==null?void 0:e.selectedLeadStatusId)||"",type:"number",placeholder:a("Lead Status Id...","bit-integrations")}),t.jsx("span",{className:"icn-btn sh-sm ml-2 mr-2 tooltip info-view mt-1",style:{"--tooltip-txt":`'${a('Go to PerfexCRM Admin area & select the following menu: "SETUP → Leads → Statuses".',"bit-integrations")}'`},children:"!"})]})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:n.show==="leadSource",close:u,action:u,title:a("Add Lead Source Id","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Lead Source Id:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:c=>g(c.target.value,"selectedLeadSourceId"),name:"selectedLeadSourceId",value:(e==null?void 0:e.selectedLeadSourceId)||"",type:"number",placeholder:a("Lead Source Id...","bit-integrations")}),t.jsx("span",{className:"icn-btn sh-sm ml-2 mr-2 tooltip info-view mt-1",style:{"--tooltip-txt":`'${a('Go to PerfexCRM Admin area & select the following menu: "SETUP → Leads → Sources".',"bit-integrations")}'`},children:"!"})]})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:n.show==="permission",close:u,action:u,title:a("Add Permission","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:a("Select Permission","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(w,{options:(k=e==null?void 0:e.permissions)==null?void 0:k.map(c=>({label:c.name,value:c.id.toString()})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedPermission,onChange:c=>g(c,"selectedPermission")})})]}),t.jsxs(F,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:n.show==="projectMembers",close:u,action:u,title:a("Add Project Members","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:a("Select Project Member","bit-integrations")}),s.staffs?t.jsx(z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(w,{options:(_=e==null?void 0:e.staffs)==null?void 0:_.map(c=>({label:c.name,value:c.id.toString()})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedProjectMembers,onChange:c=>g(c,"selectedProjectMembers")}),t.jsx("button",{onClick:()=>A(e,d,s,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${a("Refresh Project Members","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}function at({field:e,index:d,conf:s,setConf:i,fieldValue:n,fieldLabel:o,className:b}){return t.jsx(f,{onChange:u=>st(u,d,s,i,n),label:a(o,"bit-integrations"),className:b,type:"text",value:e[n],placeholder:a(o,"bit-integrations")})}function it({i:e,formFields:d,field:s,perfexCRMConf:i,setPerfexCRMConf:n}){var y;const o=(i==null?void 0:i.perfexCRMFields)&&(i==null?void 0:i.perfexCRMFields.filter(m=>m.required===!0))||[],b=(i==null?void 0:i.perfexCRMFields)&&(i==null?void 0:i.perfexCRMFields.filter(m=>m.required===!1))||[],u=Z(M),{isPro:g}=u;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:m=>K(m,e,i,n),children:[t.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),t.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:d==null?void 0:d.map(m=>t.jsx("option",{value:m.name,children:m.label},`ff-rm-${m.name}`))}),t.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),g?"":`(${a("Pro","bit-integrations")})`),children:g&&((y=C)==null?void 0:y.map(m=>t.jsx("option",{value:m.name,children:m.label},`ff-rm-${m.name}`)))})]}),s.formField==="custom"&&t.jsx(at,{field:s,index:e,conf:i,setConf:n,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<o.length,name:"perfexCRMFormField",value:e<o.length?o[e].key||"":s.perfexCRMFormField||"",onChange:m=>K(m,e,i,n),children:[t.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e<o.length?t.jsx("option",{value:o[e].key,children:o[e].label},o[e].key):b.map(({key:m,label:T})=>t.jsx("option",{value:m,children:T},m))]})]}),e>=o.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>W(e,i,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>tt(e,i,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ut({formFields:e,handleInput:d,perfexCRMConf:s,setPerfexCRMConf:i,loading:n,setLoading:o,isLoading:b,setIsLoading:u,setSnackbar:g}){var T,I,P;const y=l=>{i(N=>x(N,h=>{const{name:k}=l.target;l.target.value!==""?(h.actionName=l.target.value,(l.target.value==="contact"||l.target.value==="lead")&&p(h,i,n,o),l.target.value==="lead"&&(p(h,i,n,o),A(h,i,n,o)),l.target.value==="project"&&(h.billingTypes=[{id:1,name:a("Fixed Rate","bit-integrations")},{id:2,name:a("Project Hours","bit-integrations")},{id:3,name:a("Task Hours","bit-integrations")}],h.projectStatus=[{id:2,name:a("In Progress","bit-integrations")},{id:3,name:a("On Hold","bit-integrations")},{id:4,name:a("Finished","bit-integrations")},{id:5,name:a("Cancelled","bit-integrations")}]),G(h,i,u,g)):(delete h[k],delete h.actionId)}))},m=(l,N)=>{const h=j({},s);h[N]=l,N==="selectedProjectType"&&l==="customer"?p(s,i,n,o):N==="selectedProjectType"&&l==="lead"&&R(s,i,n,o),i(j({},h))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:y,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:a("Select an action","bit-integrations")}),t.jsx("option",{value:"customer","data-action_name":"customer",children:a("Create Customer","bit-integrations")}),t.jsx("option",{value:"contact","data-action_name":"contact",children:a("Create Contact","bit-integrations")}),t.jsx("option",{value:"lead","data-action_name":"lead",children:a("Create Lead","bit-integrations")}),t.jsx("option",{value:"project","data-action_name":"project",children:a("Create project","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),s.actionName==="project"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Project Status:","bit-integrations")}),t.jsx(w,{options:s==null?void 0:s.projectStatus.map(l=>({label:l.name,value:l.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedProjectStatus,onChange:l=>m(l,"selectedProjectStatus"),disabled:b,singleSelect:!0,closeOnSelect:!0})]})]}),s.actionName==="project"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Project Related With:","bit-integrations")}),t.jsx(w,{options:["customer","lead"].map(l=>({label:l.charAt(0).toUpperCase()+l.slice(1),value:l})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedProjectType,onChange:l=>m(l,"selectedProjectType"),disabled:b,singleSelect:!0,closeOnSelect:!0})]})]}),(s.actionName==="contact"||s.actionName==="lead"||s.actionName==="project")&&(s==null?void 0:s.customers)&&!n.customers&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Customer:","bit-integrations")}),t.jsx(w,{options:(T=s==null?void 0:s.customers)==null?void 0:T.map(l=>({label:l.name,value:l.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedCustomer,onChange:l=>m(l,"selectedCustomer"),disabled:n.customers,singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>p(s,i,n,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Customers","bit-integrations")}'`},type:"button",disabled:n.customers,children:"↻"})]})]}),s.actionName==="lead"&&(s==null?void 0:s.staffs)&&!n.staffs&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Assigned By:","bit-integrations")}),t.jsx(w,{options:(I=s==null?void 0:s.staffs)==null?void 0:I.map(l=>({label:l.name,value:l.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedStaff,onChange:l=>m(l,"selectedStaff"),disabled:n.staffs,singleSelect:!0,closeOnSelect:!0}),t.jsx("button",{onClick:()=>A(s,i,n,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Staffs","bit-integrations")}'`},type:"button",disabled:n.staffs,children:"↻"})]})]}),s.actionName==="project"&&(s==null?void 0:s.billingTypes)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Billing Type:","bit-integrations")}),t.jsx(w,{options:(P=s==null?void 0:s.billingTypes)==null?void 0:P.map(l=>({label:l.name,value:l.id.toString()})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedbillingType,onChange:l=>m(l,"selectedbillingType"),disabled:b,singleSelect:!0,closeOnSelect:!0})]})]}),s.actionName==="project"&&(s==null?void 0:s.selectedbillingType)==="1"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Total Rate:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:l=>m(l.target.value,"totalRate"),name:"totalRate",value:s.totalRate||" ",type:"text",placeholder:a("Total Rate...","bit-integrations"),disabled:b})]})]}),s.actionName==="project"&&(s==null?void 0:s.selectedbillingType)==="2"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:a("Rate Per Hour:","bit-integrations")}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:l=>m(l.target.value,"ratePerHour"),name:"ratePerHour",value:s.ratePerHour||" ",type:"text",placeholder:a("Rate Per Hour...","bit-integrations"),disabled:b})]})]}),(b||n.customers||n.staffs||n.leads)&&t.jsx(z,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&!b&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>G(s,i,u,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:a("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:a("PerfexCRM Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((l,N)=>t.jsx(it,{i:N,field:l,perfexCRMConf:s,formFields:e,setPerfexCRMConf:i,setSnackbar:g},`rp-m-${N+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>W(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(et,{perfexCRMConf:s,setPerfexCRMConf:i,formFields:e,loading:n,setLoading:o})]})]})}export{ut as P};