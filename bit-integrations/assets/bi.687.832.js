var N=Object.defineProperty;var x=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(a,l,e)=>l in a?N(a,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[l]=e,m=(a,l)=>{for(var e in l||(l={}))g.call(l,e)&&j(a,e,l[e]);if(x)for(var e of x(l))_.call(l,e)&&j(a,e,l[e]);return a};import{r as y,f as w,j as t,L as I}from"./main-119.js";import"./bi.276.437.js";import{e as k,_ as i}from"./bi.686.0.js";import{a as M,h as A,b as S}from"./bi.316.3.js";import{T as q}from"./bi.570.675.js";const z=(a,l,e,s,r,c)=>{const o=m({},l),{name:u}=a.target;a.target.value!==""?o[u]=a.target.value:delete o[u],o[a.target.name]=a.target.value,e(m({},o))},L=a=>{const l=a==null?void 0:a.giveWpFields.filter(e=>e.required===!0);return l.length>0?l.map(e=>({formField:"",giveWpFormField:e.key})):[{formField:"",giveWpFormField:""}]},B=a=>!((a.field_map?a.field_map.filter(e=>!e.formField||!e.giveWpFormField):[]).length>0),$=(a,l,e)=>{const s=m({},l);s.field_map.splice(a,0,{}),e(m({},s))},V=(a,l,e)=>{const s=m({},l);s.field_map.length>1&&s.field_map.splice(a,1),e(m({},s))},p=(a,l,e,s)=>{const r=m({},e);r.field_map[l][a.target.name]=a.target.value,a.target.value==="custom"&&(r.field_map[l].customValue=""),s(m({},r))};function R({i:a,formFields:l,field:e,giveWpConf:s,setGiveWpConf:r}){var h;y.useEffect(()=>{var n;if(((n=s==null?void 0:s.field_map)==null?void 0:n.length)===1&&e.giveWpFormField===""){const d=m({},s),F=L(d);d.field_map=F,r(d)}},[]);const c=(s==null?void 0:s.giveWpFields.filter(n=>n.required===!0))||[],o=(s==null?void 0:s.giveWpFields.filter(n=>n.required===!1))||[],u=w(k),{isPro:b}=u;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:n=>p(n,a,s,r),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:l==null?void 0:l.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),t.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),b?"":`(${i("Pro","bit-integrations")})`),children:b&&((h=M)==null?void 0:h.map(n=>t.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),e.formField==="custom"&&t.jsx(q,{onChange:n=>A(n,a,s,r),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:l}),t.jsxs("select",{className:"btcd-paper-inp",disabled:a<c.length,name:"giveWpFormField",value:a<c.length?c[a].key||"":e.giveWpFormField||"",onChange:n=>p(n,a,s,r),children:[t.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),a<c.length?t.jsx("option",{value:c[a].key,children:c[a].label},c[a].key):o.map(({key:n,label:d})=>t.jsx("option",{value:n,children:d},n))]})]}),a>=c.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>$(a,s,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>V(a,s,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function H({formFields:a,handleInput:l,giveWpConf:e,setGiveWpConf:s,isLoading:r,setIsLoading:c,setSnackbar:o,allIntegURL:u,isInfo:b,edit:h}){return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:i("Actions:","bit-integrations")}),t.jsxs("select",{onChange:l,name:"mainAction",value:e==null?void 0:e.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select Actions","bit-integrations")}),(e==null?void 0:e.allActions)&&e.allActions.map(({key:n,label:d})=>t.jsx("option",{value:n,children:d},n))]}),t.jsx("br",{}),t.jsx("br",{}),r&&t.jsx(I,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx(t.Fragment,{children:["1"].includes(e==null?void 0:e.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("GiveWp Fields","bit-integrations")})})]}),e.field_map.map((n,d)=>t.jsx(R,{i:d,field:n,giveWpConf:e,formFields:a,setGiveWpConf:s},`dash-m-${d+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>S(e.field_map.length,e,s),className:"icn-btn sh-sm",type:"button",children:"+"})})]})}),t.jsx("br",{})]})}export{H as G,B as c,z as h};
