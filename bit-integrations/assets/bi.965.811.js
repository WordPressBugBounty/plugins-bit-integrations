var k=Object.defineProperty;var v=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var N=(e,s,a)=>s in e?k(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,r=(e,s)=>{for(var a in s||(s={}))M.call(s,a)&&N(e,a,s[a]);if(v)for(var a of v(s))L.call(s,a)&&N(e,a,s[a]);return e};import{r as d,j as t,L as y,f as A}from"./main-404.js";import{x as $}from"./bi.613.437.js";import{_ as c,e as q}from"./bi.51.0.js";import{b as R}from"./bi.484.11.js";import{a as T}from"./bi.964.9.js";import{g as F,a as V,s as I}from"./bi.383.810.js";import{a as E,h as S}from"./bi.488.3.js";import{T as f}from"./bi.841.674.js";function z({sendGridConf:e,setSendGridConf:s,loading:a,setLoading:l}){var h,b;const[o,n]=d.useState({show:!1,action:()=>{}}),j=m=>{const p=r({},e);m.target.checked?(F(e,s,l),p.actions.lists=!0):(n({show:!1}),delete p.actions.lists),n({show:"lists"}),s(r({},p))},u=()=>{n({show:!1})},x=m=>{const p=r({},e);p.selectedLists=m,s(r({},p))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(R,{checked:((h=e==null?void 0:e.selectedLists)==null?void 0:h.length)||!1,onChange:m=>j(m),className:"wdt-200 mt-4 mr-2",value:"add_to_lists",title:c("Select Lists","bit-integrations"),subTitle:c("Add contact to lists")}),t.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:o.show==="lists",close:u,action:u,title:c("Lists","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select contact lists","bit-integrations")}),a.lists?t.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx($,{options:(b=e==null?void 0:e.lists)==null?void 0:b.map(m=>({label:m.name,value:m.id})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLists,onChange:m=>x(m)}),t.jsx("button",{onClick:()=>F(e,s,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Lists","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const _=(e,s,a)=>{const l=r({},s);l.field_map.splice(e,0,{}),a(r({},l))},P=(e,s,a)=>{const l=r({},s);l.field_map.length>1&&l.field_map.splice(e,1),a(r({},l))},w=(e,s,a,l)=>{const o=r({},a);o.field_map[s][e.target.name]=e.target.value,e.target.value==="custom"&&(o.field_map[s].customValue=""),l(r({},o))};function B({i:e,formFields:s,field:a,sendGridConf:l,setSendGridConf:o}){var b,m,p;const n=(l==null?void 0:l.staticFields.filter(i=>i.required===!0))||[],u=[...((b=l==null?void 0:l.staticFields)==null?void 0:b.filter(i=>i.required===!1))||[],...l.customFields];if(((m=l==null?void 0:l.field_map)==null?void 0:m.length)===1&&a.sendGridFormField===""){const i=r({},l),g=V(i);i.field_map=g,o(i)}const x=A(q),{isPro:h}=x;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:i=>w(i,e,l,o),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:s==null?void 0:s.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),h?"":`(${c("Pro","bit-integrations")})`),children:h&&((p=E)==null?void 0:p.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),a.formField==="custom"&&t.jsx(f,{onChange:i=>S(i,e,l,o),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:s}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<n.length,name:"sendGridFormField",value:e<n?n[e].label||"":a.sendGridFormField||"",onChange:i=>w(i,e,l,o),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),e<n.length?t.jsx("option",{value:n[e].key,children:n[e].label},n[e].key):u.map(({key:i,label:g})=>t.jsx("option",{value:i,children:g},i))]})]}),e>=n.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>_(e,l,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>P(e,l,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Y({formFields:e,sendGridConf:s,setSendGridConf:a,loading:l,setLoading:o,setSnackbar:n}){const[j,u]=d.useState({name:"",auth_token:""}),[x,h]=d.useState(!1);return t.jsxs("div",{children:[t.jsx("div",{className:"mt-5",children:t.jsxs("b",{className:"wdt-100",children:[c("Field Map","bit-integrations"),t.jsx("button",{onClick:()=>I(s,a,u,h,l,o,"refreshLists"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:l.customFields,children:"↻"})]})}),l.customFields&&t.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("SendGrid Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((b,m)=>t.jsx(B,{i:m,field:b,sendGridConf:s,formFields:e,setSendGridConf:a,setSnackbar:n},`rp-m-${m+9}`)),t.jsxs("div",{children:[t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>_(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(z,{sendGridConf:s,setSendGridConf:a,loading:l,setLoading:o})]})]})}export{Y as S};
