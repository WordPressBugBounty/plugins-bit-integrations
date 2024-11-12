var _=Object.defineProperty;var T=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var N=(l,e,i)=>e in l?_(l,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[e]=i,b=(l,e)=>{for(var i in e||(e={}))R.call(e,i)&&N(l,i,e[i]);if(T)for(var i of T(e))D.call(e,i)&&N(l,i,e[i]);return l};import{r as y,f as S,j as t,L as w}from"./main-288.js";import{u as E}from"./bi.197.434.js";import{e as M,_ as c}from"./bi.4.0.js";import{b as g}from"./bi.147.11.js";import{T as d,a as P,g as v,d as A,b as O}from"./bi.525.905.js";import{a as I,h as L}from"./bi.826.3.js";import{T as U}from"./bi.294.669.js";function W({dokanConf:l,setDokanConf:e,loading:i,setLoading:a}){var p,x,s,r;y.useState({show:!1});const n=S(M),{isPro:h}=n,u=(m,o)=>{const j=b({},l);o==="vendorCheckbox"&&(m.target.checked?j.actions[m.target.value]=!0:delete j.actions[m.target.value]),e(b({},j))};return t.jsxs(t.Fragment,{children:[!h&&t.jsx("div",{className:"pt-2",children:t.jsx("span",{className:"actions-note",children:c("The Bit Integrations Pro plugin needs to be installed and activated to utilize these features","bit-integrations")})}),t.jsx("div",{className:"pos-rel d-flx w-8",children:(l.selectedTask===d.CREATE_VENDOR||l.selectedTask===d.UPDATE_VENDOR)&&t.jsxs(t.Fragment,{children:[t.jsx(g,{checked:((p=l.actions)==null?void 0:p.notifyVendor)||!1,onChange:m=>u(m,"vendorCheckbox"),className:"wdt-200 mt-4 mr-2",value:"notifyVendor",title:c("Notify Vendor","bit-integrations"),subTitle:c("Send the vendor an email about their account","bit-integrations"),isInfo:!h}),t.jsx(g,{checked:((x=l.actions)==null?void 0:x.enableSelling)||!1,onChange:m=>u(m,"vendorCheckbox"),className:"wdt-200 mt-4 mr-2",value:"enableSelling",title:c("Enable Selling","bit-integrations"),subTitle:c("Enable selling for this vendor","bit-integrations"),isInfo:!h}),t.jsx(g,{checked:((s=l.actions)==null?void 0:s.publishProduct)||!1,onChange:m=>u(m,"vendorCheckbox"),className:"wdt-200 mt-4 mr-2",value:"publishProduct",title:c("Publish Product Directly","bit-integrations"),subTitle:c("Publish product of this vendor directly","bit-integrations"),isInfo:!h}),t.jsx(g,{checked:((r=l.actions)==null?void 0:r.featureVendor)||!1,onChange:m=>u(m,"vendorCheckbox"),className:"wdt-200 mt-4 mr-2",value:"featureVendor",title:c("Make Vendor Featured","bit-integrations"),subTitle:c("Make this vendor featured","bit-integrations"),isInfo:!h})]})})]})}const F=(l,e,i)=>{const a=b({},e);a.field_map.splice(l,0,{}),i(b({},a))},$=(l,e,i)=>{const a=b({},e);a.field_map.length>1&&a.field_map.splice(l,1),i(b({},a))},V=(l,e,i,a)=>{const n=b({},i);n.field_map[e][l.target.name]=l.target.value,l.target.value==="custom"&&(n.field_map[e].customValue=""),a(b({},n))};function q({i:l,formFields:e,field:i,dokanConf:a,setDokanConf:n}){var p,x;const h=(a==null?void 0:a.staticFields.filter(s=>s.required===!0))||[],u=((p=a==null?void 0:a.staticFields)==null?void 0:p.filter(s=>s.required===!1))||[];return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:s=>V(s,l,a,n),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:e==null?void 0:e.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:"General Smart Codes",children:(x=I)==null?void 0:x.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))})]}),i.formField==="custom"&&t.jsx(U,{onChange:s=>L(s,l,a,n),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:e}),t.jsxs("select",{className:"btcd-paper-inp",disabled:l<h.length,name:"dokanField",value:l<h?h[l].label||"":i.dokanField||"",onChange:s=>V(s,l,a,n),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),l<h.length?t.jsx("option",{value:h[l].key,children:h[l].label},h[l].key):u.map(({key:s,label:r})=>t.jsx("option",{value:s,children:r},s))]})]}),t.jsx("div",{className:"flx integ-fld-wrp",children:l>=h.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>F(l,a,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>$(l,a,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function Y({formFields:l,dokanConf:e,setDokanConf:i,loading:a,setLoading:n,setSnackbar:h}){const u=s=>{const r=b({},e);if(r.selectedTask=s,s){const m=A(s);r.staticFields=m.staticFields,r.field_map=m.fieldMap,s===d.CREATE_VENDOR||s===d.UPDATE_VENDOR?O(r,i,a,n):(s===d.DELETE_VENDOR||s===d.WITHDRAW_REQUEST)&&v(r,i,a,n)}else r.staticFields=[],r.field_map=[];i(b({},r))},p=(s,r)=>{const m=b({},e);m[r]=s,i(b({},m))},x=s=>{const r=b({},e);s.target.checked?r.deleteVendorFieldMap=!0:r.deleteVendorFieldMap=!1,i(b({},r))};return t.jsx(t.Fragment,{children:t.jsxs("div",{children:[t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Task:","bit-integrations")}),t.jsx(E,{style:{width:"450px"},options:P,className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedTask,onChange:s=>u(s),singleSelect:!0})]}),e.selectedTask===d.REFUND_REQUEST&&t.jsx("span",{className:"action-delete-task-note",children:"The Dokan Pro plugin needs to be installed and activated to use this (Refund Request) task."}),(a.euFields||a.vendors)&&t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),(e.selectedTask===d.UPDATE_VENDOR||e.selectedTask===d.DELETE_VENDOR||e.selectedTask===d.WITHDRAW_REQUEST)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Vendor:","bit-integrations")}),t.jsx(E,{style:{width:"450px"},options:e==null?void 0:e.vendors,className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedVendor,onChange:s=>p(s,"selectedVendor"),singleSelect:!0}),t.jsx("button",{onClick:()=>v(e,i,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Vendors","bit-integrations")}'`},type:"button",children:"↻"})]}),e.selectedTask===d.DELETE_VENDOR&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("span",{className:"action-delete-task-note",children:c("To delete a vendor, you can select a vendor from the list above, or you can map fields","bit-integrations")}),t.jsx(g,{checked:e.deleteVendorFieldMap,onChange:s=>x(s),className:" ml-2",value:"select_group",title:c("Map Fields","bit-integrations")})]})]})]}),e.selectedTask===d.WITHDRAW_REQUEST&&t.jsxs("div",{className:"flx mt-3 mb-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:c("Select Payment Method:","bit-integrations")}),t.jsx(E,{style:{width:"450px"},options:[{label:c("PayPal","bit-integrations"),value:"paypal"},{label:c("Bank Transfer","bit-integrations"),value:"bank"},{label:c("Skrill","bit-integrations"),value:"skrill"}],className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedPaymentMethod,onChange:s=>p(s,"selectedPaymentMethod"),singleSelect:!0})]}),(e.selectedTask!==d.DELETE_VENDOR||e.selectedTask===d.DELETE_VENDOR&&e.deleteVendorFieldMap)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-5",children:t.jsx("b",{className:"wdt-100",children:c("Field Map","bit-integrations")})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Dokan Fields","bit-integrations")})})]})]}),((e==null?void 0:e.selectedTask)&&(e==null?void 0:e.selectedTask)!==d.DELETE_VENDOR||e.selectedTask===d.DELETE_VENDOR&&e.deleteVendorFieldMap)&&(e==null?void 0:e.field_map.map((s,r)=>t.jsx(q,{i:r,field:s,dokanConf:e,formFields:l,setDokanConf:i,setSnackbar:h},`rp-m-${r+9}`))),((e==null?void 0:e.selectedTask)&&(e==null?void 0:e.selectedTask)!==d.DELETE_VENDOR||e.selectedTask===d.DELETE_VENDOR&&e.deleteVendorFieldMap)&&t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>F(e.field_map.length,e,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),(e.selectedTask===d.CREATE_VENDOR||e.selectedTask===d.UPDATE_VENDOR)&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(W,{dokanConf:e,setDokanConf:i,loading:a,setLoading:n})]})]})})}export{Y as D};
