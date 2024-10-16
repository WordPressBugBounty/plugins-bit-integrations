var k=Object.defineProperty;var I=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var T=(m,d,e)=>d in m?k(m,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):m[d]=e,n=(m,d)=>{for(var e in d||(d={}))R.call(d,e)&&T(m,e,d[e]);if(I)for(var e of I(d))M.call(d,e)&&T(m,e,d[e]);return m};import{j as s,i as V,r as q,L as O}from"./main-29.js";import{m as E,_ as i,j as H,k as S,H as U,T as P,n as A,o as B}from"./bi.860.15.js";import{r as _,a as D,b as $}from"./bi.548.809.js";function G({convertKitConf:m,setConvertKitConf:d}){var l;const e=(r,c)=>{const p=n({},m);c==="update"&&(r.target.checked?p.actions.update=!0:delete p.actions.update),d(n({},p))};return s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(E,{checked:((l=m.actions)==null?void 0:l.update)||!1,onChange:r=>e(r,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:sprintf(i("Update %s","bit-integrations"),"Kit(ConvertKit)"),subTitle:sprintf(i("Update Responses with %s existing email?","bit-integrations"),"Kit(ConvertKit)")})})}function z({i:m,formFields:d,field:e,convertKitConf:l,setConvertKitConf:r}){var j,g,t,u;const c=e.required,p=((j=l==null?void 0:l.default)==null?void 0:j.fields)&&Object.values((g=l==null?void 0:l.default)==null?void 0:g.fields).filter(a=>!a.required),y=V(H),{isPro:N}=y,F=a=>{const b=n({},l);b.field_map.splice(a,0,{}),r(b)},o=a=>{const b=n({},l);b.field_map.length>1&&b.field_map.splice(a,1),r(b)},h=(a,b)=>{const x=n({},l);x.field_map[b][a.target.name]=a.target.value,a.target.value==="custom"&&(x.field_map[b].customValue=""),r(x)},w=(a,b)=>{const x=n({},l);x.field_map[b].customValue=a.target.value,r(x)};return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>h(a,m),children:[s.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),s.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:d==null?void 0:d.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),s.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${i("General Smart Codes","bit-integrations")} ${N?"":`(${i("Pro","bit-integrations")})`}`,children:N&&((t=S)==null?void 0:t.map(a=>s.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.formField==="custom"&&s.jsx(U,{onChange:a=>w(a,m),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:i("Custom Value","bit-integrations")}),s.jsxs("select",{className:"btcd-paper-inp",name:"convertKitField",value:e.convertKitField,onChange:a=>h(a,m),disabled:c,children:[s.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),c?((u=l==null?void 0:l.default)==null?void 0:u.fields)&&Object.values(l.default.fields).map(a=>s.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`)):p&&p.map(a=>s.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`))]})]}),!c&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>F(m),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),s.jsx("button",{onClick:()=>o(m),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(P,{})})]})]})}function Y({formID:m,formFields:d,convertKitConf:e,setConvertKitConf:l,isLoading:r,setIsLoading:c,setSnackbar:p}){var o,h,w,j,g;const y=t=>{const u=n({},e);t?u.tagIds=t?t.split(","):[]:delete u.tagIds,l(n({},u))},N=t=>{const u=t.target.value,a=n({},e);u?a.formId=u:delete a.formId,$(a,l,c,p)},F=(o=e==null?void 0:e.default)==null?void 0:o.convertKitForms;return q.useEffect(()=>{F&&_(e,l,c,p)},[F]),s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:i("Form:","bit-integrations")}),s.jsxs("select",{value:e==null?void 0:e.formId,name:"formId",id:"",className:"btcd-paper-inp w-5",onChange:N,children:[s.jsx("option",{value:"",children:i("Select Form","bit-integrations")}),((h=e==null?void 0:e.default)==null?void 0:h.convertKitForms)&&Object.keys(e.default.convertKitForms).map(t=>s.jsx("option",{value:e.default.convertKitForms[t].formId,children:e.default.convertKitForms[t].formName},`${t+1}`))]}),s.jsx("button",{onClick:()=>D(e,l,c,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh ConvertKit form"'},type:"button",disabled:r,children:"↻"}),s.jsx("br",{}),s.jsx("br",{}),s.jsxs("div",{className:"d-flx",children:[s.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:i("Tags:","bit-integrations")}),s.jsx(A,{defaultValue:(w=e==null?void 0:e.tagIds)==null?void 0:w.toString(),className:"btcd-paper-drpdwn w-5",options:((j=e==null?void 0:e.default)==null?void 0:j.convertKitTags)&&Object.keys(e.default.convertKitTags).map(t=>({label:e.default.convertKitTags[t].tagName,value:e.default.convertKitTags[t].tagId.toString()})),onChange:t=>y(t)}),s.jsx("button",{onClick:()=>_(e,l,c,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${sprintf(i("Refresh %s Tags","bit-integrations"),"Kit(ConvertKit)")}'`},type:"button",disabled:r,children:"↻"})]}),s.jsx("br",{}),r&&s.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:i("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>$(e,l,c,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${sprintf(i("Refresh %s Field","bit-integrations"),"Kit(ConvertKit)")}'`},type:"button",disabled:r,children:"↻"})]}),((e==null?void 0:e.formId)||((g=e==null?void 0:e.default)==null?void 0:g.fields))&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:i("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:sprintf(i("%s Fields","bit-integrations"),"Kit(ConvertKit)")})})]}),e.field_map.map((t,u)=>s.jsx(z,{i:u,field:t,convertKitConf:e,formFields:d,setConvertKitConf:l},`ConvertKit-m-${u+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>B(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(G,{convertKitConf:e,setConvertKitConf:l})]})]})}export{Y as C};
