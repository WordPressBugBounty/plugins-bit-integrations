var z=Object.defineProperty;var M=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var f=(e,r,n)=>r in e?z(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,v=(e,r)=>{for(var n in r||(r={}))S.call(r,n)&&f(e,n,r[n]);if(M)for(var n of M(r))L.call(r,n)&&f(e,n,r[n]);return e};import{r as P,j as t,L as F,f as V}from"./main-615.js";import{_ as i,e as q}from"./bi.394.0.js";import{c as $,a as E,h as U,b as Z,d as B}from"./bi.819.3.js";import{u as G}from"./bi.991.437.js";import{a as w}from"./bi.179.9.js";import{b as y,T as H}from"./bi.405.11.js";import{r as A,a as R,b as J,d as K,e as Q}from"./bi.980.742.js";import{T as W}from"./bi.178.673.js";function X({deskConf:e,setDeskConf:r,formID:n,formFields:a,setSnackbar:c}){var o,l,_,T,O,I;const[m,d]=P.useState(!1),[p,b]=P.useState({show:!1}),u=(s,x)=>{const N=v({},e);x==="ticket_owner"?s!==""?N.actions.ticket_owner=s:delete N.actions.ticket_owner:x==="product"?s!==""?N.actions.product=s:delete N.actions.product:x==="attachments"&&(s!==""?N.actions.attachments=s:delete N.actions.attachments),r(v({},N))},j=()=>{var s,x;(x=(s=e.default)==null?void 0:s.owners)!=null&&x[e.orgId]||A(n,e,r,d,c),b({show:"ticket_owner"})},g=()=>{var s,x;(x=(s=e.default)==null?void 0:s.products)!=null&&x[e.department]||R(n,e,r,d,c),b({show:"product"})},h=()=>{b({show:!1})};return t.jsxs("div",{className:"pos-rel",children:[t.jsxs("div",{className:"d-flx flx-wrp",children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[t.jsx(y,{onChange:j,checked:"ticket_owner"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Ticket_Owner",title:i("Ticket Owner","bit-integrations"),subTitle:i("Add a owner to ticket pushed to Zoho Desk.","bit-integrations")}),!e.actions.ticket_owner&&t.jsx("small",{style:{marginLeft:30,marginTop:10,color:"red"},children:i("ticket owner is required","bit-integrations")})]}),t.jsx(y,{onChange:g,checked:"product"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Product_Name",title:i("Product Name","bit-integrations"),subTitle:i("Add a product to ticket pushed to Zoho Desk.","bit-integrations")}),t.jsx(y,{onChange:()=>b({show:"attachments"}),checked:"attachments"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:i("Attachments","bit-integrations"),subTitle:i("Add attachments from trigger-end to ticket pushed to Zoho Desk.","bit-integrations")})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:p.show==="ticket_owner",close:h,action:h,title:i("Ticket Owner","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),m?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:e.actions.ticket_owner,className:"btcd-paper-inp",onChange:s=>u(s.target.value,"ticket_owner"),children:[t.jsx("option",{value:"",children:i("Select Owner","bit-integrations")}),(_=(l=(o=e.default)==null?void 0:o.owners)==null?void 0:l[e.orgId])==null?void 0:_.map(s=>t.jsx("option",{value:s.ownerId,children:s.ownerName},s.ownerId))]}),t.jsx("button",{onClick:()=>A(n,e,r,d,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Ticket Owners"'},type:"button",disabled:m,children:"↻"})]})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:p.show==="product",close:h,action:h,title:i("Product Name","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),m?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsxs("select",{value:e.actions.product,className:"btcd-paper-inp",onChange:s=>u(s.target.value,"product"),children:[t.jsx("option",{value:"",children:i("Select Product","bit-integrations")}),(I=(O=(T=e.default)==null?void 0:T.products)==null?void 0:O[e.department])==null?void 0:I.map(s=>t.jsx("option",{value:s.productId,children:s.productName},s.productId))]}),t.jsx("button",{onClick:()=>R(n,e,r,d,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Products"'},type:"button",disabled:m,children:"↻"})]})]}),t.jsxs(w,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:p.show==="attachments",close:h,action:h,title:i("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:i("Select File Upload Fields","bit-integrations")}),t.jsx(G,{defaultValue:e.actions.attachments,className:"mt-2 w-9",onChange:s=>u(s,"attachments"),options:a.filter(s=>s.type==="file").map(s=>({label:s.label,value:s.name}))})]})]})}function Y({i:e,formFields:r,field:n,deskConf:a,setDeskConf:c}){var u,j,g,h,o;const{orgId:m}=a,d=n.zohoFormField===""||((u=a.default.fields[m].required)==null?void 0:u.indexOf(n.zohoFormField))===-1,p=V(q),{isPro:b}=p;return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:l=>$(l,e,a,c),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:r.map(l=>l.type!=="file"&&t.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`))}),t.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`${i("General Smart Codes","bit-integrations")} ${b?"":`(${i("Pro","bit-integrations")})`}`,children:b&&((j=E)==null?void 0:j.map(l=>t.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),n.formField==="custom"&&t.jsx(W,{onChange:l=>U(l,e,a,c),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:r}),t.jsxs("select",{className:"btcd-paper-inp",name:"zohoFormField",value:n.zohoFormField||"",disabled:!d,onChange:l=>$(l,e,a,c),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),((o=(h=(g=a.default)==null?void 0:g.fields)==null?void 0:h[m])==null?void 0:o.fields)&&Object.values(a.default.fields[m].fields).map(l=>d?l.required===!1&&t.jsx("option",{value:l.apiName,children:l.displayLabel},l.displayLabel):t.jsx("option",{value:l.apiName,children:l.displayLabel},l.displayLabel))]})]}),d&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>Z(e,a,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>B(e,a,c),className:"icn-btn sh-sm",type:"button","aria-label":"btn",children:t.jsx(H,{})})]})]})}function nt({formID:e,formFields:r,handleInput:n,deskConf:a,setDeskConf:c,isLoading:m,setIsLoading:d,setSnackbar:p}){var b,u,j,g,h;return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Portal:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"orgId",value:a.orgId,className:"btcd-paper-inp w-7",children:[t.jsx("option",{value:"",children:i("Select Portal","bit-integrations")}),((b=a==null?void 0:a.default)==null?void 0:b.organizations)&&Object.values(a.default.organizations).map(o=>t.jsx("option",{value:o.orgId,children:o.portalName},o.orgId))]}),t.jsx("button",{onClick:()=>J(e,a,c,d,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Desk Portals","bit-integrations")}'`},type:"button",disabled:m,children:"↻"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Department:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"department",value:a.department,className:"btcd-paper-inp w-7",children:[t.jsx("option",{value:"",children:i("Select Department","bit-integrations")}),((j=(u=a==null?void 0:a.default)==null?void 0:u.departments)==null?void 0:j[a.orgId])&&Object.values(a.default.departments[a.orgId]).map(o=>t.jsx("option",{value:o.departmentId,children:o.departmentName},o.departmentId))]}),t.jsx("button",{onClick:()=>K(e,a,c,d,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Desk Departments","bit-integrations")}'`},type:"button",disabled:m,children:"↻"}),t.jsx("br",{}),t.jsx("br",{}),m&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.department&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:i("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>Q(e,a,c,d,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Desk Fields","bit-integrations")}'`},type:"button",disabled:m,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),((h=(g=a.default)==null?void 0:g.fields)==null?void 0:h[a==null?void 0:a.orgId])&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Zoho Fields","bit-integrations")})})]}),a.field_map.map((o,l)=>t.jsx(Y,{i:l,field:o,deskConf:a,formFields:r,setDeskConf:c},`desk-m-${l+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>Z(a.field_map.length,a,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(X,{deskConf:a,setDeskConf:c,formID:e,formFields:r,setSnackbar:p})]})]})]})}export{nt as Z};
