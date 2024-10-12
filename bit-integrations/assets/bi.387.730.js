var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var x=(e,l,t)=>l in e?L(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,b=(e,l)=>{for(var t in l||(l={}))q.call(l,t)&&x(e,t,l[t]);if(g)for(var t of g(l))M.call(l,t)&&x(e,t,l[t]);return e};import{j as a,i as K}from"./main-579.js";import{b as _,_ as r,c as v,H as $,A as f,j as B,k as P,l as V}from"./bi.919.15.js";import{T as A}from"./bi.850.660.js";const J=(e,l,t,s,c,m,n,d)=>{const p=b({},l),{name:o}=e.target;e.target.value!==""?p[o]=e.target.value:delete p[o],t(b({},p))},T=(e,l,t,s)=>{t(!0);const c={api_key:e.api_key,sendy_url:e.sendy_url},m=_(c,"get_all_brands").then(n=>{if(n&&n.success){const d=b({},e);return d.default||(d.default={}),n.data&&(d.default.brandList=n.data),l(b({},d)),t(!1),r("BrandList refreshed successfully","bit-integrations")}else return t(!1),r("BrandList refresh failed. please try again","bit-integrations")});v.promise(m,{success:n=>n,error:r("Error Occurred","bit-integrations"),loading:r("Loading Brand...")})},j=(e,l,t,s)=>{t(!0);const c={api_key:e.api_key,sendy_url:e.sendy_url,brand_id:e.brand_id},m=_(c,"get_all_lists_from_sendy").then(n=>{if(n&&n.success){const d=b({},e);return d.default||(d.default={}),n.data&&(d.default.lists=n.data),l(b({},d)),t(!1),r("Lists refreshed successfully","bit-integrations")}else return t(!1),r("Lists refresh failed. please try again","bit-integrations")});v.promise(m,{success:n=>n,error:r("Error Occurred","bit-integrations"),loading:r("Loading Lists...")})},E=e=>{const l=e==null?void 0:e.subscriberFields.filter(t=>t.required===!0);return l.length>0?l.map(t=>({formField:"",sendyField:t.key})):[{formField:"",sendyField:""}]},Q=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.sendyField||!t.formField==="custom"&&!t.customValue):[]).length>0),N=(e,l,t)=>{const s=b({},l);s.field_map.splice(e,0,{}),t(b({},s))},R=(e,l,t)=>{const s=b({},l);s.field_map.length>1&&s.field_map.splice(e,1),t(b({},s))},F=(e,l,t,s)=>{const c=b({},t);c.field_map[l][e.target.name]=e.target.value,e.target.value==="custom"&&(c.field_map[l].customValue=""),e.target.value==="customFieldKey"&&(c.field_map[l].customFieldKey=""),s(b({},c))};function O({field:e,index:l,conf:t,handle:s,setConf:c,fieldValue:m,fieldLabel:n,className:d}){const p=(o,u,i,h)=>{i(k=>f(k,w=>{w.field_map[u][h]=o.target.value}))};return a.jsx($,{onChange:o=>p(o,l,c,m),label:r(n,"bit-integrations"),className:d,type:"text",value:e[m],placeholder:r(n,"bit-integrations")})}function S({i:e,formFields:l,field:t,sendyConf:s,setSendyConf:c}){var o,u;if(((o=s==null?void 0:s.field_map)==null?void 0:o.length)===1&&t.sendyField===""){const i=b({},s),h=E(i);i.field_map=h,c(i)}const m=(s==null?void 0:s.subscriberFields.filter(i=>i.required===!0))||[],n=(s==null?void 0:s.subscriberFields.filter(i=>i.required===!1))||[],d=K(B),{isPro:p}=d;return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:i=>F(i,e,s,c),children:[a.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),a.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:l==null?void 0:l.map(i=>a.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),a.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),a.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),p?"":`(${r("Pro","bit-integrations")})`),children:p&&((u=P)==null?void 0:u.map(i=>a.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),t.formField==="custom"&&a.jsx(A,{onChange:i=>V(i,e,s,c),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:l}),a.jsxs("select",{className:"btcd-paper-inp",disabled:e<m.length,name:"sendyField",value:e<m?m[e].label||"":t.sendyField||"",onChange:i=>F(i,e,s,c),children:[a.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e<m.length?a.jsx("option",{value:m[e].key,children:m[e].label},m[e].key):n.map(({key:i,label:h})=>a.jsx("option",{value:i,children:h},i)),a.jsx("option",{value:"customFieldKey",children:r("Custom Field","bit-integrations")})]}),t.sendyField==="customFieldKey"&&a.jsx(O,{field:t,index:e,conf:s,setConf:c,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),e>=m.length&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>N(e,s,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>R(e,s,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function U({formFields:e,handleInput:l,sendyConf:t,setSendyConf:s,isLoading:c,setIsLoading:m,setSnackbar:n}){var p,o;const d=u=>{const i=b({},t),{name:h}=u.target;u.target.value!==""?i[h]=u.target.value:delete i[h],h==="brand_id"&&j(i,s,m),s(b({},i))};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:r("Brand:","bit-integrations")}),a.jsxs("select",{onChange:d,name:"brand_id",value:t.brand_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"test",children:r("Select Brand","bit-integrations")}),((p=t==null?void 0:t.default)==null?void 0:p.brandList)&&t.default.brandList.map(({brandId:u,brandName:i})=>a.jsx("option",{value:u,children:i},u))]}),a.jsx("button",{onClick:()=>T(t,s,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All List","bit-integrations")}'`},type:"button",disabled:c,children:"↻"}),a.jsx("br",{}),a.jsx("br",{}),(t==null?void 0:t.brand_id)&&a.jsxs(a.Fragment,{children:[a.jsx("b",{className:"wdt-200 d-in-b",children:r("List:","bit-integrations")}),a.jsxs("select",{onChange:d,name:"list_id",value:t.list_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"test",children:r("Select List","bit-integrations")}),((o=t==null?void 0:t.default)==null?void 0:o.lists)&&t.default.lists.map(({listId:u,listName:i})=>a.jsx("option",{value:u,children:i},u))]}),a.jsx("button",{onClick:()=>j(t,s,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All List","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),a.jsx("br",{}),a.jsx("div",{className:"mt-5",children:a.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:r("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:r("Sendy Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((u,i)=>a.jsx(S,{i,field:u,sendyConf:t,formFields:e,setSendyConf:s,setSnackbar:n},`rp-m-${i+9}`)),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>N(t.field_map.length,t,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("br",{})]})}export{U as S,Q as c,J as h};
