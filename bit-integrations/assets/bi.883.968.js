var E=Object.defineProperty,T=Object.defineProperties;var W=Object.getOwnPropertyDescriptors;var v=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var S=(e,t,d)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[t]=d,r=(e,t)=>{for(var d in t||(t={}))Y.call(t,d)&&S(e,d,t[d]);if(v)for(var d of v(t))z.call(t,d)&&S(e,d,t[d]);return e},y=(e,t)=>T(e,W(t));import{j as l,f as q,L as B}from"./main-246.js";import{x as o,a9 as H,u as J}from"./bi.675.443.js";import{_ as i,d as G}from"./bi.560.0.js";import{g as $,a as k,b as O,d as V,e as P,f as _}from"./bi.600.967.js";import{M as K,a as Q}from"./bi.545.3.js";import{c as A,g as U}from"./bi.719.818.js";const I=(e,t,d)=>{const m=r({},t);m.field_map.splice(e,0,{}),d(r({},m))},X=(e,t,d)=>{const m=r({},t);m.field_map.length>1&&m.field_map.splice(e,1),d(r({},m))},R=(e,t,d,m)=>{const b=r({},d);b.field_map[t][e.target.name]=e.target.value,e.target.value==="custom"&&(b.field_map[t].customValue=""),m(r({},b))},Z=(e,t,d,m,b)=>{const c=r({},d);c.field_map[t][b]=e.target.value,m(r({},c))};function L({field:e,index:t,conf:d,setConf:m,fieldValue:b,fieldLabel:c,className:w}){return l.jsx(K,{onChange:h=>Z(h,t,d,m,b),label:i(c,"bit-integrations"),className:w,type:"text",value:e[b],placeholder:i(c,"bit-integrations")})}function g({i:e,formFields:t,field:d,licenseManagerConf:m,setLicenseManagerConf:b}){var j;const c=(m==null?void 0:m.lmfwcFields)&&m.lmfwcFields.filter(u=>u.required===!0)||[],w=(m==null?void 0:m.lmfwcFields)&&m.lmfwcFields.filter(u=>u.required===!1)||[],h=q(G),{isPro:F}=h;return l.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:l.jsxs("div",{className:"pos-rel flx",children:[l.jsxs("div",{className:"flx integ-fld-wrp",children:[l.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:u=>R(u,e,m,b),children:[l.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),l.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:t==null?void 0:t.map(u=>l.jsx("option",{value:u.name,children:u.label},`ff-rm-${u.name}`))}),l.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),l.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),F?"":`(${i("Pro","bit-integrations")})`),children:F&&((j=Q)==null?void 0:j.map(u=>l.jsx("option",{value:u.name,children:u.label},`ff-rm-${u.name}`)))})]}),d.formField==="custom"&&l.jsx(L,{field:d,index:e,conf:m,setConf:b,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),l.jsxs("select",{className:"btcd-paper-inp",disabled:e<c.length,name:"lmfwcFormField",value:e<c.length?c[e].key||"":d.lmfwcFormField||"",onChange:u=>R(u,e,m,b),children:[l.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e<c.length?l.jsx("option",{value:c[e].key,children:c[e].label},c[e].key):w.map(({key:u,label:N})=>l.jsx("option",{value:u,children:N},u))]})]}),e>=c.length&&l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>I(e,m,b),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),l.jsx("button",{onClick:()=>X(e,m,b),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:l.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function dt({formFields:e,licenseManagerConf:t,setLicenseManagerConf:d,loading:m,setLoading:b,isLoading:c,setIsLoading:w,setSnackbar:h}){var N;const F=q(G),{isPro:j}=F,u=(s,x)=>{d(a=>J(a,p=>{p[x]=s,x==="module"&&(s==="create_license"||s==="update_license")?(O(t,d,b),V(t,d,b),P(t,d,b),s==="update_license"?($(t,d,b),p.lmfwcFields=[{label:i("License key","bit-integrations"),key:"license_key",required:!1},...p.generalFields]):p.lmfwcFields=[...p.licenseFields,...p.generalFields],p.field_map=_(p.lmfwcFields),p.module_note=`<p><b>${i("Note","bit-integrations")}</b>: ${i("You can also use Valid for (the number of days) instead of Expires at","bit-integrations")}, <b>${i("please do not use both at a time","bit-integrations")}</b></p>`):x==="module"&&["activate_license","delete_license"].includes(s)?(p.lmfwcFields=p.licenseFields,p.field_map=_(p.lmfwcFields)):x==="module"&&["deactivate_license","reactivate_license"].includes(s)?(p.lmfwcFields=[...p.licenseFields,{label:i("Activation Token","bit-integrations"),key:"token",required:!1}],p.field_map=_(p.lmfwcFields)):x==="module"&&(s==="create_generator"||s==="update_generator")&&(s==="update_generator"?(k(t,d,b),p.lmfwcFields=p.generatorFields.map(D=>y(r({},D),{required:!1}))):p.lmfwcFields=p.generatorFields,p.field_map=_(p.lmfwcFields))}))};return l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),l.jsx(o,{title:"Action",defaultValue:t==null?void 0:t.module,className:"mt-2 w-5",onChange:s=>u(s,"module"),options:(N=t==null?void 0:t.modules)==null?void 0:N.map(s=>({label:A(j,s.is_pro)?s.label:U(s.label),value:s.name,disabled:!A(j,s.is_pro)})),singleSelect:!0,closeOnSelect:!0})]}),(c||m.customer||m.product||m.license||m.generator)&&l.jsx(B,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.module)&&t.module==="update_license"&&!c&&l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:i("Select License:","bit-integrations")}),l.jsx(o,{options:(t==null?void 0:t.licenses)&&t.licenses.map(s=>({label:s,value:s})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedLicense,onChange:s=>u(s,"selectedLicense"),singleSelect:!0,closeOnSelect:!0}),l.jsx("button",{onClick:()=>$(t,d,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh License","bit-integrations")}'`},type:"button",disabled:m.license,children:"↻"})]})]}),(t==null?void 0:t.module)&&t.module==="update_generator"&&!c&&l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Generator:","bit-integrations")}),l.jsx(o,{options:(t==null?void 0:t.generators)&&t.generators.map(s=>({label:s.name,value:`${s.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedGenerator,onChange:s=>u(s,"selectedGenerator"),singleSelect:!0,closeOnSelect:!0}),l.jsx("button",{onClick:()=>k(t,d,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Generator","bit-integrations")}'`},type:"button",disabled:m.generator,children:"↻"})]})]}),(t==null?void 0:t.module)&&(t.module==="create_license"||t.module==="update_license")&&!c&&l.jsxs(l.Fragment,{children:[l.jsx("br",{}),l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Status:","bit-integrations")}),l.jsx(o,{options:[{id:"sold",name:"Sold"},{id:"delivered",name:"Delivered"},{id:"active",name:"Active"},{id:"inactive",name:"Inactive"}].map(s=>({label:s.name,value:`${s.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedStatus,onChange:s=>u(s,"selectedStatus"),singleSelect:!0,closeOnSelect:!0})]}),l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Customer:","bit-integrations")}),l.jsx(o,{options:(t==null?void 0:t.customers)&&t.customers.map(s=>({label:s.name,value:`${s.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedCustomer,onChange:s=>u(s,"selectedCustomer"),singleSelect:!0,closeOnSelect:!0}),l.jsx("button",{onClick:()=>O(t,d,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Customers","bit-integrations")}'`},type:"button",disabled:m.customer,children:"↻"})]}),l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Product:","bit-integrations")}),l.jsx(o,{options:(t==null?void 0:t.products)&&t.products.map(s=>({label:s.name,value:`${s.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedProduct,onChange:s=>u(s,"selectedProduct"),singleSelect:!0,closeOnSelect:!0}),l.jsx("button",{onClick:()=>V(t,d,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Products","bit-integrations")}'`},type:"button",disabled:m.product,children:"↻"})]}),l.jsx("br",{}),l.jsxs("div",{className:"flx",children:[l.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Order:","bit-integrations")}),l.jsx(o,{options:(t==null?void 0:t.orders)&&t.orders.map(s=>({label:s.name,value:`${s.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:t==null?void 0:t.selectedOrder,onChange:s=>u(s,"selectedOrder"),singleSelect:!0,closeOnSelect:!0}),l.jsx("button",{onClick:()=>P(t,d,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Orders","bit-integrations")}'`},type:"button",disabled:m.order,children:"↻"})]})]}),t.module&&!c&&l.jsxs("div",{children:[l.jsx("br",{}),l.jsx("div",{className:"mt-5",children:l.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),l.jsx("br",{}),l.jsx("div",{className:"btcd-hr mt-1"}),l.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:i("Form Fields","bit-integrations")})}),l.jsx("div",{className:"txt-dp",children:l.jsx("b",{children:i("License Manager Fields","bit-integrations")})})]}),t.field_map.map((s,x)=>l.jsx(g,{i:x,field:s,licenseManagerConf:t,formFields:e,setLicenseManagerConf:d,setSnackbar:h},`rp-m-${x+9}`)),!["activate_license","delete_license"].includes(t.module)&&l.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:l.jsx("button",{onClick:()=>I(t.field_map.length,t,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),l.jsx("br",{}),l.jsx("br",{}),(t==null?void 0:t.module_note)&&l.jsx(H,{note:t==null?void 0:t.module_note})]})]})}export{dt as L};
