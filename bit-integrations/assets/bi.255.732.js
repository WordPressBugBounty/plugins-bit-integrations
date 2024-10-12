var v=Object.defineProperty;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var j=(t,l,n)=>l in t?v(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,u=(t,l)=>{for(var n in l||(l={}))F.call(l,n)&&j(t,n,l[n]);if(p)for(var n of p(l))y.call(l,n)&&j(t,n,l[n]);return t};import{r as T,j as e,L as w,i as M,l as I}from"./main-579.js";import{m as $,_ as d,e as S,n as V,j as R,k as A,l as q}from"./bi.919.15.js";import{g as _,a as O,r as P}from"./bi.532.731.js";import{T as E}from"./bi.850.660.js";function L({keapConf:t,setKeapConf:l,loading:n,setLoading:s}){var h;const[c,i]=T.useState({show:!1,action:()=>{}}),r=(m,o)=>{var b;const a=u({},t);o==="tag"&&((b=m.target)!=null&&b.checked?(_(t,l,s),a.actions.tags=!0):(i({show:!1}),delete a.actions.tags),i({show:"tag"})),o==="update"&&(m.target.checked?a.actions.update=!0:delete a.actions.update),o==="doubleOptIn"&&(m.target.checked?a.actions.doubleOptIn=!0:delete a.actions.doubleOptIn),l(u({},a))},g=()=>{i({show:!1})},x=m=>{const o=u({},t);o.selectedTags=m,l(u({},o))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx($,{checked:(t==null?void 0:t.selectedTags)||!1,onChange:m=>r(m,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:d("Add Tags","bit - integrations"),subTitle:d("Add Tags")}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:d("Ok","bit-integrations"),show:c.show==="tag",close:g,action:g,title:d("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:d("Select tags","bit-integrations")}),n.tags?e.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(V,{options:(h=t==null?void 0:t.tags)==null?void 0:h.map(m=>({label:m.name,value:m.id})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTags,onChange:m=>x(m)}),e.jsx("button",{onClick:()=>_(t,l,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${d("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const z=t=>{const l={},s=window.location.href.replace(`${window.opener.location.href}/redirect`,"").split("&");s&&s.forEach(c=>{const i=c.split("=");i[1]&&(l[i[0]]=i[1])}),localStorage.setItem(`__${t}`,JSON.stringify(l)),window.close()},f=(t,l,n,s,c)=>{const i=u({},l);c?s?i.relatedlists[c-1].upload_field_map.splice(t,0,{}):i.relatedlists[c-1].field_map.splice(t,0,{}):s?i.upload_field_map.splice(t,0,{}):i.field_map.splice(t,0,{}),n(u({},i))},G=(t,l,n,s,c)=>{const i=u({},l);c?s?i.relatedlists[c-1].upload_field_map.length>1&&i.relatedlists[c-1].upload_field_map.splice(t,1):i.relatedlists[c-1].field_map.length>1&&i.relatedlists[c-1].field_map.splice(t,1):s?i.upload_field_map.length>1&&i.upload_field_map.splice(t,1):i.field_map.length>1&&i.field_map.splice(t,1),n(u({},i))},N=(t,l,n,s,c,i)=>{const r=u({},n);i?c?r.relatedlists[i-1].upload_field_map[l][t.target.name]=t.target.value:r.relatedlists[i-1].field_map[l][t.target.name]=t.target.value:c?r.upload_field_map[l][t.target.name]=t.target.value:r.field_map[l][t.target.name]=t.target.value,t.target.value==="custom"&&(i?r.relatedlists[i-1].field_map[l].customValue="":r.field_map[l].customValue=""),s(u({},r))};function W({i:t,formFields:l,field:n,keapConf:s,setKeapConf:c}){var m,o;if(((m=s==null?void 0:s.field_map)==null?void 0:m.length)===1&&n.keapField===""){const a=u({},s),b=O(a);a.field_map=b,c(a)}const i=s!=null&&s.customFields?[...s==null?void 0:s.contactFields,...s==null?void 0:s.customFields]:s==null?void 0:s.contactFields,r=i.filter(a=>a.required===!0)||[],g=i.filter(a=>a.required===!1)||[],x=M(R),{isPro:h}=x;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:a=>N(a,t,s,c),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:l==null?void 0:l.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(d("General Smart Codes %s","bit-integrations"),h?"":`(${d("Pro","bit-integrations")})`),children:h&&((o=A)==null?void 0:o.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),n.formField==="custom"&&e.jsx(E,{onChange:a=>q(a,t,s,c),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:l}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<r.length,name:"keapField",value:t<r.length?r[t].key||"":n.keapField||"",onChange:a=>N(a,t,s,c),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),t<r.length?e.jsx("option",{value:r[t].key,children:r[t].label},r[t].key):g.map(({key:a,label:b})=>e.jsx("option",{value:a,children:b},a))]})]}),t>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>f(t,s,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>G(t,s,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Q({formID:t,formFields:l,handleInput:n,keapConf:s,setKeapConf:c,isLoading:i,setIsLoading:r,setSnackbar:g,a:x}){const{id:h}=I();return e.jsxs(e.Fragment,{children:[i&&e.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>P(h,s,c,r,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh Lemlist Field","bit-integrations")}'`},type:"button",disabled:i,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Keap Fields","bit-integrations")})})]}),s.field_map.map((m,o)=>e.jsx(W,{i:o,field:m,keapConf:s,formFields:l,setKeapConf:c},`keap-m-${o+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>f(s.field_map.length,s,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(L,{keapConf:s,setKeapConf:c,formFields:l,loading:i,setLoading:r}),e.jsx("br",{}),e.jsx("br",{})]})]})}export{Q as K,z as s};
