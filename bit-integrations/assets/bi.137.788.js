var U=Object.defineProperty;var M=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var q=(s,i,r)=>i in s?U(s,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[i]=r,x=(s,i)=>{for(var r in i||(i={}))z.call(i,r)&&q(s,r,i[r]);if(M)for(var r of M(i))E.call(i,r)&&q(s,r,i[r]);return s};import{j as e,f as W,r as o,L as P}from"./main-404.js";import{_ as d,e as B}from"./bi.51.0.js";import{M as R,a as G,h as D}from"./bi.488.3.js";import{T as J,b as k}from"./bi.484.11.js";import{g as K,a as f,b as S}from"./bi.813.787.js";import{T as Q}from"./bi.841.674.js";import{x as A}from"./bi.613.437.js";import{a as T}from"./bi.964.9.js";const I=(s,i,r,l,a)=>{const p=x({},i);a?l?p.relatedlists[a-1].upload_field_map.splice(s,0,{}):p.relatedlists[a-1].field_map.splice(s,0,{}):l?p.upload_field_map.splice(s,0,{}):p.field_map.splice(s,0,{}),r(x({},p))},X=(s,i,r,l,a)=>{const p=x({},i);a?l?p.relatedlists[a-1].upload_field_map.length>1&&p.relatedlists[a-1].upload_field_map.splice(s,1):p.relatedlists[a-1].field_map.length>1&&p.relatedlists[a-1].field_map.splice(s,1):l?p.upload_field_map.length>1&&p.upload_field_map.splice(s,1):p.field_map.length>1&&p.field_map.splice(s,1),r(x({},p))},$=(s,i,r,l,a,p)=>{const b=x({},r);p?a?b.relatedlists[p-1].upload_field_map[i][s.target.name]=s.target.value:b.relatedlists[p-1].field_map[i][s.target.name]=s.target.value:a?b.upload_field_map[i][s.target.name]=s.target.value:b.field_map[i][s.target.name]=s.target.value,s.target.value==="custom"&&(p?b.relatedlists[p-1].field_map[i].customValue="":b.field_map[i].customValue=""),l(x({},b))},Y=(s,i,r,l)=>{const a=x({},r);a.address_field[i].customValue=s.target.value,l(x({},a))},Z=(s,i,r,l)=>{const a=x({},r);a.phone_field[i].customValue=s.target.value,l(x({},a))},n=(s,i,r,l,a,p)=>{const b=x({},r);b.address_field[i][s.target.name]=s.target.value,l(x({},b))},O=(s,i,r,l)=>{const a=x({},r);a.phone_field[i][s.target.name]=s.target.value,l(x({},a))},H=(s,i,r)=>{const l=x({},i);l.phone_field||(l.address_field=[]),l.address_field.push({}),r(x({},l))},L=(s,i,r)=>{const l=x({},i);l.address_field&&l.address_field.length>1&&l.address_field.splice(s,1),r(x({},l))},C=(s,i,r)=>{const l=x({},i);l.phone_field&&l.phone_field.length>1&&l.phone_field.splice(s,1),r(x({},l))};function ee({i:s,formFields:i,field:r,constantContactConf:l,setConstantContactConf:a,addressField:p}){const b=r.required,_=p.filter(m=>!m.required);return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsx("div",{className:"pos-rel flx",children:e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:m=>n(m,s,l,a),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),i.map(m=>m.type!=="file"&&e.jsx("option",{value:m.name,children:m.label},`ff-zhcrm-${m.name}`)),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")})]}),r.formField==="custom"&&e.jsx(R,{onChange:m=>Y(m,s,l,a),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue,placeholder:d("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"constantContactAddressField",value:r.constantContactAddressField||"",onChange:m=>n(m,s,l,a),disabled:b,children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),b?Object.values(p).map((m,g)=>e.jsx("option",{value:m.tag,children:m.name},`add-${g*2}`)):Object.values(_).map((m,g)=>e.jsx("option",{value:m.tag,children:m.name},`add-${g*2}`))]})]})}),!b&&e.jsxs(e.Fragment,{children:[(l==null?void 0:l.address_field.length)<5&&e.jsx("button",{onClick:()=>H(s,l,a),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>L(s,l,a),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})}function le({i:s,formFields:i,field:r,constantContactConf:l,setConstantContactConf:a,phoneField:p}){const b=r.required,_=p.filter(m=>!m.required);return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsx("div",{className:"pos-rel flx",children:e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:m=>O(m,s,l,a),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),i.map(m=>m.type!=="file"&&e.jsx("option",{value:m.name,children:m.label},`ff-zhcrm-${m.name}`)),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")})]}),r.formField==="custom"&&e.jsx(R,{onChange:m=>Z(m,s,l,a),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue,placeholder:d("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"constantContactPhoneField",value:r.constantContactPhoneField||"",onChange:m=>O(m,s,l,a),disabled:b,children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),b?Object.values(p).map((m,g)=>e.jsx("option",{value:m.tag,children:m.name},`add-${g*2}`)):Object.values(_).map((m,g)=>e.jsx("option",{value:m.tag,children:m.name},`add-${g*2}`))]})]})}),!b&&e.jsx("button",{onClick:()=>C(s,l,a),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(J,{})})]})}function ie({i:s,formFields:i,field:r,constantContactConf:l,setConstantContactConf:a}){var g,c,F,w;if(((g=l==null?void 0:l.field_map)==null?void 0:g.length)===1&&r.constantContactFormField===""){const u=x({},l),v=K(u);u.field_map=v,a(u)}const p=((c=l==null?void 0:l.default)==null?void 0:c.constantContactFields.filter(u=>u.required===!0))||[],b=((F=l==null?void 0:l.default)==null?void 0:F.constantContactFields.filter(u=>u.required===!1))||[],_=W(B),{isPro:m}=_;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:u=>$(u,s,l,a),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:i==null?void 0:i.map(u=>e.jsx("option",{value:u.name,children:u.label},`ff-rm-${u.name}`))}),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(d("General Smart Codes %s","bit-integrations"),m?"":`(${d("Pro","bit-integrations")})`),children:m&&((w=G)==null?void 0:w.map(u=>e.jsx("option",{value:u.name,children:u.label},`ff-rm-${u.name}`)))})]}),r.formField==="custom"&&e.jsx(Q,{onChange:u=>D(u,s,l,a),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<p.length,name:"constantContactFormField",value:s<p?p[s].label||"":r.constantContactFormField||"",onChange:u=>$(u,s,l,a),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),s<p.length?e.jsx("option",{value:p[s].key,children:p[s].label},p[s].key):b.map(({key:u,label:v})=>e.jsx("option",{value:u,children:v},u))]})]}),s>=p.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>I(s,l,a),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>X(s,l,a),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function se({id:s,constantContactConf:i,setConstantContactConf:r,address:l,phone:a,isLoading:p,setIsLoading:b}){var v,N,V;const[_,m]=o.useState({show:!1,action:()=>{}}),g=(h,j)=>{const t=x({},i);j==="update"&&(h.target.checked?t.actions.update=!0:delete t.actions.update),j==="list_ids"&&(f(s,i,r,p,b),h.target.checked?t.actions.list=!0:delete t.actions.list,m({show:j})),j==="tag_ids"&&(S(s,i,r,p,b),h.target.checked?t.actions.tag=!0:delete t.actions.tag,m({show:j})),j==="address_type"&&(h.target.checked?(t.actions.address=!0,t.address_field=l.filter(y=>y.required).map(y=>({formField:"",constantContactAddressField:y.tag,required:!0}))):i.address_type===""&&(delete t.actions.address,t.address_field=""),m({show:j})),j==="phone_type"&&(h.target.checked?(t.actions.phone=!0,t.phone_field=a.filter(y=>y.required).map(y=>({formField:"",constantContactPhoneField:y.tag,required:!0}))):i.phone_type===""&&(delete t.actions.phone,t.phone_field=""),m({show:j})),r(x({},t))},c=()=>{m({show:!1})},F=(h,j)=>{const t=x({},i);j==="list_ids"&&h.length?t.actions.list=!0:j==="list_ids"&&h.length<1&&delete t.actions.list,j==="address_type"&&h.length?t.actions.address=!0:j==="address_type"&&h.length<1&&(delete t.actions.address,t.address_field=[]),j==="phone_type"&&h.length?t.actions.phone=!0:j==="phone_type"&&h.length<1&&(delete t.actions.phone,t.phone_field=[]),t[j]=h,r(x({},t))},w=[{label:d("Home","bit-integrations"),value:"home"},{label:d("Work","bit-integrations"),value:"work"},{label:d("Other","bit-integrations"),value:"other"}],u=[{label:d("Home","bit-integrations"),value:"home"},{label:d("Work","bit-integrations"),value:"work"},{label:d("Mobile","bit-integrations"),value:"mobile"},{label:d("Fax","bit-integrations"),value:"fax"},{label:d("Other","bit-integrations"),value:"other"}];return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(k,{checked:(i==null?void 0:i.address_type)||!1,onChange:h=>g(h,"address_type"),className:"wdt-200 mt-4 mr-2",value:"address",title:d("Add Address Field","bit-integrations"),subTitle:d("Add Address Field","bit-integrations")}),e.jsx(k,{checked:(i==null?void 0:i.phone_type)||!1,onChange:h=>g(h,"phone_type"),className:"wdt-200 mt-4 mr-2",value:"phone",title:d("Add Phone Field","bit-integrations"),subTitle:d("Add Phone Field","bit-integrations")}),e.jsx(k,{checked:i.tag_ids.length||!1,onChange:h=>g(h,"tag_ids"),className:"wdt-200 mt-4 mr-2",value:"tag_ids",title:d("Tags","bit-integrations"),subTitle:d("Add Tags","bit-integrations")}),e.jsx(k,{checked:(i==null?void 0:i.list_ids.length)||!1,onChange:h=>g(h,"list_ids"),className:"wdt-200 mt-4 mr-2",value:"list_ids",title:d("Lists","bit-integrations"),subTitle:d("Add Lists","bit-integrations")}),e.jsx(k,{checked:((v=i==null?void 0:i.actions)==null?void 0:v.update)||!1,onChange:h=>g(h,"update"),className:"wdt-200 mt-4 mr-2",value:"update",title:d("Update Contact","bit-integrations"),subTitle:d("Update Contact","bit-integrations")})]}),e.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:d("Ok","bit-integrations"),show:_.show==="address_type",close:c,action:c,title:d("Address Type","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(A,{className:"msl-wrp-options",defaultValue:i==null?void 0:i.address_type,options:w.map(h=>({label:h.label,value:h.value})),onChange:h=>F(h,"address_type"),customValue:!0,singleSelect:!0})})]}),e.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:d("Ok","bit-integrations"),show:_.show==="phone_type",close:c,action:c,title:d("Phone Type","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(A,{className:"msl-wrp-options",defaultValue:i==null?void 0:i.phone_type,options:u.map(h=>({label:h.label,value:h.value})),onChange:h=>F(h,"phone_type"),customValue:!0,singleSelect:!0})})]}),e.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:d("Ok","bit-integrations"),show:_.show==="list_ids",close:c,action:c,title:d("Lists","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),p.list?e.jsx(P,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(A,{className:"msl-wrp-options",defaultValue:i==null?void 0:i.list_ids,options:(N=i==null?void 0:i.lists)==null?void 0:N.map(h=>({label:h.listName,value:h.listId})),onChange:h=>F(h,"list_ids"),customValue:!0}),e.jsx("button",{onClick:()=>f(i,r,p,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${d("Refresh Lists","bit-integrations")}'`},type:"button",disabled:p.list,children:"↻"})]})]})," ",e.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:d("Ok","bit-integrations"),show:_.show==="tag_ids",close:c,action:c,title:d("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),p.tag?e.jsx(P,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(A,{className:"msl-wrp-options",defaultValue:i==null?void 0:i.tag_ids,options:(V=i==null?void 0:i.tags)==null?void 0:V.map(h=>({label:h.tagName,value:h.tagId})),onChange:h=>F(h,"tag_ids"),customValue:!0}),e.jsx("button",{onClick:()=>S(i,r,p,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${d("Refresh Tags","bit-integrations")}'`},type:"button",disabled:p.tag,children:"↻"})]})]})]})}function xe({id:s,formFields:i,handleInput:r,constantContactConf:l,setConstantContactConf:a,isLoading:p,setIsLoading:b,setSnackbar:_}){var c,F,w,u;const m=[{tag:"street",name:d("Street","bit-integrations"),required:!1},{tag:"city",name:d("City","bit-integrations"),required:!1},{tag:"state",name:d("State","bit-integrations"),required:!1},{tag:"postal_code",name:d("Postal Code","bit-integrations"),required:!1},{tag:"country",name:d("Country","bit-integrations"),required:!1}],g=[{tag:"phone_number",name:d("Phone Number","bit-integrations"),required:!0}];return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:d("Source:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"source_type",value:l.source_type,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:d("Select Source","bit-integrations")}),e.jsx("option",{value:"Contact",children:d("Contact","bit-integrations")}),e.jsx("option",{value:"Account",children:d("Account","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.source_type)!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("ConstantContact Fields","bit-integrations")})})]}),l==null?void 0:l.field_map.map((v,N)=>e.jsx(ie,{i:N,field:v,constantContactConf:l,formFields:i,setConstantContactConf:a,setSnackbar:_},`rp-m-${N+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(l.field_map.length,l,a,!1),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.source_type)!==""&&((c=l.actions)==null?void 0:c.address)&&l.address_type!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Address Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Address Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Constant Contact Address Fields","bit-integrations")})})]}),(F=l==null?void 0:l.address_field)==null?void 0:F.map((v,N)=>e.jsx(ee,{i:N,field:v,constantContactConf:l,formFields:i,setConstantContactConf:a,addressField:m},`sheet-m-${N+9}`)),(l==null?void 0:l.address_field.length)<5&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>H(l.address_field.length,l,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{})," ",(l==null?void 0:l.source_type)!==""&&((w=l.actions)==null?void 0:w.phone)&&l.phone_type!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Phone Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Phone Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Constant Contact Phone Fields","bit-integrations")})})]}),(u=l==null?void 0:l.phone_field)==null?void 0:u.map((v,N)=>e.jsx(le,{i:N,field:v,constantContactConf:l,formFields:i,setConstantContactConf:a,phoneField:g},`sheet-m-${N+9}`))]}),e.jsx("br",{}),e.jsx("br",{}),(l==null?void 0:l.source_type)!==""&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(se,{id:s,constantContactConf:l,setConstantContactConf:a,address:m,phone:g,isLoading:p,setIsLoading:b})]})]})}export{xe as C};
