var m=Object.defineProperty;var _=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var v=(s,n,d)=>n in s?m(s,n,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[n]=d,u=(s,n)=>{for(var d in n||(n={}))w.call(n,d)&&v(s,d,n[d]);if(_)for(var d of _(n))y.call(n,d)&&v(s,d,n[d]);return s};import{f,j as e,L as A}from"./main-247.js";import{u as I}from"./bi.393.437.js";import{e as S,_ as r}from"./bi.456.0.js";import{a as V,h as L}from"./bi.427.3.js";import{g as M,a as $}from"./bi.649.777.js";import{T as q}from"./bi.510.673.js";const N=(s,n,d,t,c)=>{const a=u({},n);c?t?a.relatedlists[c-1].upload_field_map.splice(s,0,{}):a.relatedlists[c-1].field_map.splice(s,0,{}):t?a.upload_field_map.splice(s,0,{}):a.field_map.splice(s,0,{}),d(u({},a))},R=(s,n,d,t,c)=>{const a=u({},n);c?t?a.relatedlists[c-1].upload_field_map.length>1&&a.relatedlists[c-1].upload_field_map.splice(s,1):a.relatedlists[c-1].field_map.length>1&&a.relatedlists[c-1].field_map.splice(s,1):t?a.upload_field_map.length>1&&a.upload_field_map.splice(s,1):a.field_map.length>1&&a.field_map.splice(s,1),d(u({},a))},F=(s,n,d,t,c,a)=>{const o=u({},d);a?c?o.relatedlists[a-1].upload_field_map[n][s.target.name]=s.target.value:o.relatedlists[a-1].field_map[n][s.target.name]=s.target.value:c?o.upload_field_map[n][s.target.name]=s.target.value:o.field_map[n][s.target.name]=s.target.value,s.target.value==="custom"&&(a?o.relatedlists[a-1].field_map[n].customValue="":o.field_map[n].customValue=""),t(u({},o))};function T({i:s,field:n,formFields:d,kirimEmailConf:t,setKirimEmailConf:c}){var g,x,h,p;if(((g=t==null?void 0:t.field_map)==null?void 0:g.length)===1&&n.kirimEmailFormField===""){const l=u({},t),b=M(l);l.field_map=b,c(l)}const a=((x=t==null?void 0:t.subscriberFields)==null?void 0:x.filter(l=>l.required===!0))||[],o=((h=t==null?void 0:t.subscriberFields)==null?void 0:h.filter(l=>l.required===!1))||[],i=f(S),{isPro:j}=i;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:l=>F(l,s,t,c),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:d==null?void 0:d.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),j?"":`(${r("Pro","bit-integrations")})`),children:j&&((p=V)==null?void 0:p.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),n.formField==="custom"&&e.jsx(q,{onChange:l=>L(l,s,t,c),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:d}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<a.length,name:"kirimEmailFormField",value:s<a.length?a[s].key||"":n.kirimEmailFormField||"",onChange:l=>F(l,s,t,c),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),s<a.length?e.jsx("option",{value:a[s].key,children:a[s].label},a[s].key):o.map(({key:l,label:b})=>e.jsx("option",{value:l,children:b},l))]})]}),s>=a.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>N(s,t,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>R(s,t,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function O({formID:s,formFields:n,handleInput:d,kirimEmailConf:t,setKirimEmailConf:c,isLoading:a,setIsLoading:o,setSnackbar:i,a:j}){var h;const g=p=>{const l=u({},t),{name:b}=p.target;p.target.value!==""?l[b]=p.target.value:delete l[b],l[p.target.name]=p.target.value,c(u({},l))},x=(p,l)=>{const b=u({},t);l==="listId"&&(p!==""?b[l]=p:delete b[l]),c(u({},b))};return e.jsxs(e.Fragment,{children:[a&&e.jsx(A,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:r("Actions:","bit-integrations")}),e.jsxs("select",{onChange:g,name:"mainAction",value:t==null?void 0:t.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:r("Select Actions","bit-integrations")}),(t==null?void 0:t.allActions)&&t.allActions.map(({key:p,label:l})=>e.jsx("option",{value:p,children:l},p))]}),e.jsx("br",{}),e.jsx("br",{}),t.mainAction==="1"&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select List:","bit-integrations")}),e.jsx(I,{className:"w-5",defaultValue:t==null?void 0:t.listId,options:((h=t==null?void 0:t.default)==null?void 0:h.allLists)&&(t==null?void 0:t.default.allLists.map(p=>({label:p.name,value:p.id}))),onChange:p=>x(p,"listId"),singleSelect:!0}),e.jsx("button",{onClick:()=>$(t,c,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All lists","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:r("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Kirim Email Fields","bit-integrations")})})]}),t.field_map.map((p,l)=>e.jsx(T,{i:l,field:p,formFields:n,kirimEmailConf:t,setKirimEmailConf:c},`keap-m-${l+9}`)),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>N(t.field_map.length,t,c),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})}export{O as K};
