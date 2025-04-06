var k=Object.defineProperty;var x=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var g=(e,s,t)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t,d=(e,s)=>{for(var t in s||(s={}))w.call(s,t)&&g(e,t,s[t]);if(x)for(var t of x(s))L.call(s,t)&&g(e,t,s[t]);return e};import{f,j as a}from"./main-623.js";import{c as _,_ as r,d as v,e as q}from"./bi.422.0.js";import{a as K,h as M}from"./bi.757.3.js";import{T as V}from"./bi.220.720.js";import{C as $}from"./bi.225.793.js";const D=(e,s,t,l,c,m,n,u)=>{const o=d({},s),{name:p}=e.target;e.target.value!==""?o[p]=e.target.value:delete o[p],t(d({},o))},B=(e,s,t,l)=>{t(!0);const c={api_key:e.api_key,sendy_url:e.sendy_url},m=_(c,"get_all_brands").then(n=>{if(n&&n.success){const u=d({},e);return u.default||(u.default={}),n.data&&(u.default.brandList=n.data),s(d({},u)),t(!1),r("BrandList refreshed successfully","bit-integrations")}else return t(!1),r("BrandList refresh failed. please try again","bit-integrations")});v.promise(m,{success:n=>n,error:r("Error Occurred","bit-integrations"),loading:r("Loading Brand...")})},j=(e,s,t,l)=>{t(!0);const c={api_key:e.api_key,sendy_url:e.sendy_url,brand_id:e.brand_id},m=_(c,"get_all_lists_from_sendy").then(n=>{if(n&&n.success){const u=d({},e);return u.default||(u.default={}),n.data&&(u.default.lists=n.data),s(d({},u)),t(!1),r("Lists refreshed successfully","bit-integrations")}else return t(!1),r("Lists refresh failed. please try again","bit-integrations")});v.promise(m,{success:n=>n,error:r("Error Occurred","bit-integrations"),loading:r("Loading Lists...")})},P=e=>{const s=e==null?void 0:e.subscriberFields.filter(t=>t.required===!0);return s.length>0?s.map(t=>({formField:"",sendyField:t.key})):[{formField:"",sendyField:""}]},H=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.sendyField||!t.formField==="custom"&&!t.customValue):[]).length>0),N=(e,s,t)=>{const l=d({},s);l.field_map.splice(e,0,{}),t(d({},l))},T=(e,s,t)=>{const l=d({},s);l.field_map.length>1&&l.field_map.splice(e,1),t(d({},l))},F=(e,s,t,l)=>{const c=d({},t);c.field_map[s][e.target.name]=e.target.value,e.target.value==="custom"&&(c.field_map[s].customValue=""),e.target.value==="customFieldKey"&&(c.field_map[s].customFieldKey=""),l(d({},c))};function A({i:e,formFields:s,field:t,sendyConf:l,setSendyConf:c}){var p,b;if(((p=l==null?void 0:l.field_map)==null?void 0:p.length)===1&&t.sendyField===""){const i=d({},l),h=P(i);i.field_map=h,c(i)}const m=(l==null?void 0:l.subscriberFields.filter(i=>i.required===!0))||[],n=(l==null?void 0:l.subscriberFields.filter(i=>i.required===!1))||[],u=f(q),{isPro:o}=u;return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:i=>F(i,e,l,c),children:[a.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),a.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:s==null?void 0:s.map(i=>a.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),a.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),a.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),o?"":`(${r("Pro","bit-integrations")})`),children:o&&((b=K)==null?void 0:b.map(i=>a.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),t.formField==="custom"&&a.jsx(V,{onChange:i=>M(i,e,l,c),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:s}),a.jsxs("select",{className:"btcd-paper-inp",disabled:e<m.length,name:"sendyField",value:e<m?m[e].label||"":t.sendyField||"",onChange:i=>F(i,e,l,c),children:[a.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e<m.length?a.jsx("option",{value:m[e].key,children:m[e].label},m[e].key):n.map(({key:i,label:h})=>a.jsx("option",{value:i,children:h},i)),a.jsx("option",{value:"customFieldKey",children:r("Custom Field","bit-integrations")})]}),t.sendyField==="customFieldKey"&&a.jsx($,{field:t,index:e,conf:l,setConf:c,fieldValue:"customFieldKey",fieldLabel:"Custom Field Key",className:"ml-2"})]}),e>=m.length&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>N(e,l,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>T(e,l,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function J({formFields:e,handleInput:s,sendyConf:t,setSendyConf:l,isLoading:c,setIsLoading:m,setSnackbar:n}){var o,p;const u=b=>{const i=d({},t),{name:h}=b.target;b.target.value!==""?i[h]=b.target.value:delete i[h],h==="brand_id"&&j(i,l,m),l(d({},i))};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:r("Brand:","bit-integrations")}),a.jsxs("select",{onChange:u,name:"brand_id",value:t.brand_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"test",children:r("Select Brand","bit-integrations")}),((o=t==null?void 0:t.default)==null?void 0:o.brandList)&&t.default.brandList.map(({brandId:b,brandName:i})=>a.jsx("option",{value:b,children:i},b))]}),a.jsx("button",{onClick:()=>B(t,l,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All List","bit-integrations")}'`},type:"button",disabled:c,children:"↻"}),a.jsx("br",{}),a.jsx("br",{}),(t==null?void 0:t.brand_id)&&a.jsxs(a.Fragment,{children:[a.jsx("b",{className:"wdt-200 d-in-b",children:r("List:","bit-integrations")}),a.jsxs("select",{onChange:u,name:"list_id",value:t.list_id,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"test",children:r("Select List","bit-integrations")}),((p=t==null?void 0:t.default)==null?void 0:p.lists)&&t.default.lists.map(({listId:b,listName:i})=>a.jsx("option",{value:b,children:i},b))]}),a.jsx("button",{onClick:()=>j(t,l,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All List","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),a.jsx("br",{}),a.jsx("div",{className:"mt-5",children:a.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:r("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:r("Sendy Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((b,i)=>a.jsx(A,{i,field:b,sendyConf:t,formFields:e,setSendyConf:l,setSnackbar:n},`rp-m-${i+9}`)),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>N(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("br",{})]})}export{J as S,H as c,D as h};
