var S=Object.defineProperty;var g=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var v=(e,l,c)=>l in e?S(e,l,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[l]=c,F=(e,l)=>{for(var c in l||(l={}))$.call(l,c)&&v(e,c,l[c]);if(g)for(var c of g(l))q.call(l,c)&&v(e,c,l[c]);return e};import{f as k,j as t,L as w}from"./main-236.js";import{d as I,_ as r}from"./bi.844.0.js";import{z as M,a9 as D}from"./bi.95.443.js";import{a as N,b as _,d as P}from"./bi.188.749.js";import{g as R,a as y}from"./bi.236.844.js";import{a as V,h as T}from"./bi.986.3.js";import{T as z}from"./bi.685.724.js";function A({i:e,field:l,formFields:c,moosendConf:i,setMoosendConf:m}){var x;const b=k(I),{isPro:h}=b,p=(i==null?void 0:i.moosendFields.filter(a=>a.required===!0))||[],u=(i==null?void 0:i.moosendFields.filter(a=>a.required===!1))||[];return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formFields",onChange:a=>{N(a,e,i,m)},value:l.formFields||"",children:[t.jsx("option",{value:"",children:r("Select Field")}),t.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:c==null?void 0:c.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),t.jsx("option",{value:"custom",children:r("Custom...")}),t.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),h?"":`(${r("Pro","bit-integrations")})`),children:h&&((x=V)==null?void 0:x.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),l.formFields==="custom"&&t.jsx(z,{onChange:a=>T(a,e,i,m),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:c}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<p.length,name:"moosendFormFields",onChange:a=>{N(a,e,i,m)},value:e<p.length?p[e].key||"":l.moosendFormFields||"",children:[t.jsx("option",{value:"",children:r("Select Field")}),e<p.length?t.jsx("option",{value:p[e].key,children:p[e].label},p[e].key):u.map(({key:a,label:d})=>t.jsx("option",{value:a,children:d},a))]})]}),(i==null?void 0:i.method)==="1"&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>_(e,i,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>P(e,i,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Q({moosendConf:e,setMoosendConf:l,formFields:c,loading:i,setLoading:m}){var a;const b=k(I),{isPro:h}=b,p=[{key:"1",name:r("Subscribe","bit-integrations")},{key:"0",name:r("Unsubscribe","bit-integrations")},{key:"2",name:r("Unsubscribe from list","bit-integrations")}],u=d=>{const s=F({},e),{name:j,value:n}=d.target;switch(n!==""?s[j]=n:delete s[j],j){case"listId":if(n!==""){s.basicFields||(s.basicFields=s.moosendFields);const L=h?U(s,n):[...s.basicFields];s.moosendFields=L,s.field_map=y(s)}break;case"method":s.listId="",s.moosendFields=(s==null?void 0:s.basicFields)||s.moosendFields||[],s.field_map=y(s);break}l(F({},s))},x=`<h4>${r("Custom Field Available in Pro (v2.3.1)","bit-integrations")}</h4>
  <p>${r("With the release of version 2.3.1, Pro users can now take advantage of the custom field feature.","bit-integrations")}</p>`;return t.jsxs("div",{className:"mt-2",children:[!i.page&&t.jsxs("div",{className:"flx mt-2",children:[t.jsx("b",{className:"wdt-200 d-in-b ",children:r("Method:")}),t.jsxs("select",{onChange:u,name:"method",value:e==null?void 0:e.method,className:"btcd-paper-inp w-5 mx-0",children:[t.jsx("option",{value:"",children:r("Select Method")}),p.map(d=>t.jsx("option",{value:d.key,children:d.name},d.key))]})]}),e.method&&e.method!=="0"&&t.jsxs("div",{className:"flx mt-2",children:[t.jsx("b",{className:"wdt-200 d-in-b ",children:r("List:")}),t.jsxs("select",{onChange:u,name:"listId",value:e==null?void 0:e.listId,className:"btcd-paper-inp w-5 mx-0",children:[t.jsx("option",{value:"",children:r("Select List")}),((a=e==null?void 0:e.default)==null?void 0:a.lists)&&e.default.lists.map(d=>t.jsx("option",{value:d.ID,children:d.Name},d.ID))]}),t.jsx("button",{onClick:()=>R(e,l,i,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:i.list,children:"↻"}),i.list&&t.jsx(M,{size:"20",clr:"#022217",className:"ml-2"})]}),(e==null?void 0:e.method)&&t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:r("Field Map")}),t.jsx("div",{className:"btcd-hr mt-2 mb-4"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:r("Form Fields")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:r("Moosend Fields")})})]}),e==null?void 0:e.field_map.map((d,s)=>t.jsx(A,{i:s,field:d,formFields:c,moosendConf:e,setMoosendConf:l},`ko-m-${s+8}`)),(e==null?void 0:e.method)==="1"&&t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>_(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),!h&&t.jsx(D,{note:x}),i.page&&t.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}const U=(e,l)=>{var m;const c=e.default.lists.find(b=>b.ID===l),i=((m=c==null?void 0:c.CustomFieldsDefinition)==null?void 0:m.map(b=>({key:`custom_field_${b.ID}`,label:b.Name,required:b.IsRequired})))||[];return[...e.basicFields,...i]};export{Q as M};
