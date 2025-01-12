var k=Object.defineProperty;var T=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var I=(i,t,s)=>t in i?k(i,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[t]=s,h=(i,t)=>{for(var s in t||(t={}))O.call(t,s)&&I(i,s,t[s]);if(T)for(var s of T(t))q.call(t,s)&&I(i,s,t[s]);return i};import{j as e,f as S,L as U}from"./main-425.js";import{_ as m,e as A}from"./bi.107.0.js";import{x as $}from"./bi.900.437.js";import{a as H,M as P,b as B}from"./bi.25.3.js";import{b as D,T as E}from"./bi.563.11.js";import{r as M,a as R,b as V}from"./bi.653.824.js";function G({convertKitConf:i,setConvertKitConf:t}){var l;const s=(b,p)=>{const r=h({},i);p==="update"&&(b.target.checked?r.actions.update=!0:delete r.actions.update),t(h({},r))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:(!(i!=null&&i.module)||(i==null?void 0:i.module)==="add_subscriber_to_a_form")&&e.jsx(D,{checked:((l=i.actions)==null?void 0:l.update)||!1,onChange:b=>s(b,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:sprintf(m("Update %s","bit-integrations"),"Kit(ConvertKit)"),subTitle:sprintf(m("Update Responses with %s existing email?","bit-integrations"),"Kit(ConvertKit)")})})}function z({i,formFields:t,field:s,convertKitConf:l,setConvertKitConf:b}){var _,N,d,u;const p=s.required,r=((_=l==null?void 0:l.default)==null?void 0:_.fields)&&Object.values((N=l==null?void 0:l.default)==null?void 0:N.fields).filter(a=>!a.required),y=S(A),{isPro:j}=y,F=a=>{const x=h({},l);x.field_map.splice(a,0,{}),b(x)},n=a=>{const x=h({},l);x.field_map.length>1&&x.field_map.splice(a,1),b(x)},g=(a,x)=>{const c=h({},l);c.field_map[x][a.target.name]=a.target.value,a.target.value==="custom"&&(c.field_map[x].customValue=""),b(c)},w=(a,x)=>{const c=h({},l);c.field_map[x].customValue=a.target.value,b(c)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:a=>g(a,i),children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),e.jsx("optgroup",{label:m("Form Fields","bit-integrations"),children:t==null?void 0:t.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("option",{value:"custom",children:m("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${m("General Smart Codes","bit-integrations")} ${j?"":`(${m("Pro","bit-integrations")})`}`,children:j&&((d=H)==null?void 0:d.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),s.formField==="custom"&&e.jsx(P,{onChange:a=>w(a,i),label:m("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:m("Custom Value","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp",name:"convertKitField",value:s.convertKitField,onChange:a=>g(a,i),disabled:p,children:[e.jsx("option",{value:"",children:m("Select Field","bit-integrations")}),p?((u=l==null?void 0:l.default)==null?void 0:u.fields)&&Object.values(l.default.fields).map(a=>e.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`)):r&&r.map(a=>e.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`))]})]}),!p&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>F(i),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>n(i),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(E,{})})]})]})}function o({formID:i,formFields:t,convertKitConf:s,setConvertKitConf:l,isLoading:b,setIsLoading:p,setSnackbar:r}){var F,n,g,w,_,N;const y=d=>{const u=h({},s);d?u.tagIds=d?d.split(","):[]:delete u.tagIds,l(h({},u))},j=(d,u)=>{const a=h({},s);d?a[u]=d:delete a[u],l(h({},a)),u==="module"&&(V(a,l,p,r),R(s,l,p,r)),u==="module"&&d==="add_subscriber_to_a_form"&&M(s,l,p,r)};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:m("Select Module:","bit-integrations")}),e.jsx($,{defaultValue:s==null?void 0:s.module,className:"btcd-paper-drpdwn w-5",options:[{label:"Add subscriber to a form",value:"add_subscriber_to_a_form"},{label:"Update a subscriber",value:"update_a_subscriber"},{label:"Add tags to a subscriber",value:"add_tags_to_a_subscriber"},{label:"Remove tags to a subscriber",value:"remove_tags_to_a_subscriber"}],onChange:d=>j(d,"module"),singleSelect:!0,selectOnClose:!0})]}),(!(s!=null&&s.module)||(s==null?void 0:s.module)==="add_subscriber_to_a_form")&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:m("Form:","bit-integrations")}),e.jsxs("select",{value:s==null?void 0:s.formId,name:"formId",id:"",className:"btcd-paper-inp w-5",onChange:d=>j(d.target.value,"formId"),children:[e.jsx("option",{value:"",children:m("Select Form","bit-integrations")}),((F=s==null?void 0:s.default)==null?void 0:F.convertKitForms)&&Object.keys(s.default.convertKitForms).map(d=>e.jsx("option",{value:s.default.convertKitForms[d].formId,children:s.default.convertKitForms[d].formName},`${d+1}`))]}),e.jsx("button",{onClick:()=>M(s,l,p,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh ConvertKit form"'},type:"button",disabled:b,children:"↻"})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:m("Tags:","bit-integrations")}),e.jsx($,{defaultValue:(n=s==null?void 0:s.tagIds)==null?void 0:n.toString(),className:"btcd-paper-drpdwn w-5",options:((g=s==null?void 0:s.default)==null?void 0:g.convertKitTags)&&Object.keys(s.default.convertKitTags).map(d=>({label:s.default.convertKitTags[d].tagName,value:s.default.convertKitTags[d].tagId.toString()})),onChange:d=>y(d)}),e.jsx("button",{onClick:()=>R(s,l,p,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${sprintf(m("Refresh %s Tags","bit-integrations"),"Kit(ConvertKit)")}'`},type:"button",disabled:b,children:"↻"})]}),e.jsx("br",{}),b&&e.jsx(U,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:m("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>V(s,l,p,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${sprintf(m("Refresh %s Field","bit-integrations"),"Kit(ConvertKit)")}'`},type:"button",disabled:b,children:"↻"})]}),((s==null?void 0:s.formId)||((w=s==null?void 0:s.default)==null?void 0:w.fields))&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:m("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:sprintf(m("%s Fields","bit-integrations"),"Kit(ConvertKit)")})})]}),s.field_map.map((d,u)=>e.jsx(z,{i:u,field:d,convertKitConf:s,formFields:t,setConvertKitConf:l},`ConvertKit-m-${u+9}`)),((_=s==null?void 0:s.default)==null?void 0:_.fields)&&((N=Object.keys(s.default.fields))==null?void 0:N.length)>1&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>B(s.field_map.length,s,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:m("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(G,{convertKitConf:s,setConvertKitConf:l})]})]})}export{o as C};
