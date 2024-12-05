var M=Object.defineProperty;var k=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var I=(t,s,i)=>s in t?M(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,d=(t,s)=>{for(var i in s||(s={}))$.call(s,i)&&I(t,i,s[i]);if(k)for(var i of k(s))V.call(s,i)&&I(t,i,s[i]);return t};import{f as q,j as e,r as S,L as R}from"./main-34.js";import{e as z,_ as l}from"./bi.671.0.js";import{a as E,h as O,b as P}from"./bi.633.3.js";import{g as U,a as F,d as B,b as _,s as G}from"./bi.408.856.js";import{T as H,b as y}from"./bi.22.11.js";import{T as J}from"./bi.623.673.js";import{af as p,x as T}from"./bi.188.437.js";import{a as A}from"./bi.914.9.js";function K({i:t,formFields:s,field:i,dripConf:c,setDripConf:u}){var h,n,j;const m=(c==null?void 0:c.dripFormFields.filter(a=>a.required===!0))||[],v=((h=c==null?void 0:c.dripFormFields)==null?void 0:h.filter(a=>a.required===!1))||[];if(((n=c==null?void 0:c.field_map)==null?void 0:n.length)===1&&i.dripField===""){const a=d({},c),o=U(a);a.field_map=o,u(a)}const x=q(z),{isPro:g}=x,N=a=>{const o=d({},c);o.field_map.splice(a,0,{}),u(o)},b=a=>{const o=d({},c);o.field_map.length>1&&o.field_map.splice(a,1),u(o)},r=(a,o)=>{const w=d({},c);w.field_map[o][a.target.name]=a.target.value,a.target.value==="custom"&&(w.field_map[o].customValue=""),u(w)};return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:a=>r(a,t),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Campaign Fields","bit-integrations"),children:s==null?void 0:s.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${l("General Smart Codes","bit-integrations")} ${g?"":`(${l("Pro","bit-integrations")})`}`,children:g&&((j=E)==null?void 0:j.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),i.formField==="custom"&&e.jsx(J,{onChange:a=>O(a,t,c,u),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:s}),e.jsxs("select",{className:"btcd-paper-inp",name:"dripField",value:t<m?m[t].label||"":i.dripField||"",onChange:a=>r(a,t),disabled:t<m.length,children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t<m.length?e.jsx("option",{value:m[t].key,children:m[t].label},m[t].key):v.map(({key:a,label:o})=>e.jsx("option",{value:a,children:o},a))]})]}),t>=m.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>N(t),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),e.jsx("button",{onClick:()=>b(t),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:e.jsx(H,{})})]})]})}function Q({dripConf:t,setDripConf:s,loading:i,setLoading:c}){var N,b,r,h;const[u,m]=S.useState({show:!1}),v=(n,j)=>{var o,w;const a=d({},t);j==="tagsAdd"&&((o=n.target)!=null&&o.checked?(F(t,s,c),a.actions.tagsAdd=!0):(m({show:!1}),delete a.actions.tagsAdd),m({show:"tagsAdd"})),j==="tagsRemove"&&((w=n.target)!=null&&w.checked?(F(t,s,c),a.actions.tagsRemove=!0):(m({show:!1}),delete a.actions.tagsRemove),m({show:"tagsRemove"})),j==="status"&&(n.target.checked?a.actions.status=!0:(delete a.actions.status,m({show:!1})),m({show:"status"})),s(d({},a))},x=()=>{m({show:!1})},g=(n,j)=>{const a=d({},t);a[j]=n,s(d({},a))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(y,{checked:(t==null?void 0:t.selectedStatus)||!1,onChange:n=>v(n,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:l("Status","bit-integrations"),subTitle:l("Set the subscriber status","bit-integrations")}),e.jsx(y,{checked:((N=t==null?void 0:t.selectedTags)==null?void 0:N.length)||!1,onChange:n=>v(n,"tagsAdd"),className:"wdt-200 mt-4 mr-2",value:"tagsAdd",title:l("Add Tags","bit - integrations"),subTitle:l("Select tags for subscriber")}),e.jsx(y,{checked:((b=t==null?void 0:t.selectedRemoveTags)==null?void 0:b.length)||!1,onChange:n=>v(n,"tagsRemove"),className:"wdt-200 mt-4 mr-2",value:"tagsRemove",title:l("Remove Tags","bit - integrations"),subTitle:l("Remove tags from subscriber")}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:u.show==="status",close:x,action:x,title:l("Status","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"mt-2 flx",children:[l("Select subscriber status","bit-integrations"),e.jsx(p,{width:250,icnSize:17,className:"ml-1",children:e.jsx("div",{className:"txt-body",children:"If omitted, the status will be set to active."})})]}),e.jsx("div",{className:"mt-2",children:e.jsx(T,{options:[{label:l("Active","bit-integrations"),value:"active"},{label:l("Unsubscribed","bit-integrations"),value:"unsubscribed"}],className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedStatus,onChange:n=>g(n,"selectedStatus"),singleSelect:!0,style:{width:"100%"}})})]}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:u.show==="tagsAdd",close:x,action:x,title:l("Add Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"mt-2 flx",children:[l("Select tags","bit-integrations"),e.jsx(p,{width:350,icnSize:17,className:"ml-1",children:e.jsx("div",{className:"txt-body",children:l("Choose from the existing tags, or create and add new ones by typing them and pressing enter or comma (,)","bit-integrations")})})]}),i.tags?e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(T,{options:(r=t==null?void 0:t.tags)==null?void 0:r.map(n=>({label:n,value:n})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTags,onChange:n=>g(n,"selectedTags"),customValue:!0}),e.jsx("button",{onClick:()=>F(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:u.show==="tagsRemove",close:x,action:x,title:l("Remove Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:l("Select tags for remove","bit-integrations")}),i.tags?e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(T,{options:(h=t==null?void 0:t.tags)==null?void 0:h.map(n=>({label:n,value:n})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedRemoveTags,onChange:n=>g(n,"selectedRemoveTags")}),e.jsx("button",{onClick:()=>F(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}function te({formFields:t,dripConf:s,setDripConf:i,loading:c,setLoading:u}){const[m,v]=S.useState({name:"",api_token:""}),[x,g]=S.useState(!1),N=b=>{const r=b.target.value,h=d({},s);r?(h.selectedAccountId=r,_(h,i,u)):(h.selectedAccountId=r,h.dripFormFields=G),i(d({},h))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Account:","bit-integrations")}),e.jsxs("select",{value:s==null?void 0:s.selectedAccountId,name:"accountId",id:"",className:"btcd-paper-inp w-5",onChange:N,children:[e.jsx("option",{value:"",children:l("Select an account","bit-integrations")}),s==null?void 0:s.accounts.map(b=>e.jsx("option",{value:b.accountId,children:b.accountName},b.accountId))]}),e.jsx("button",{onClick:()=>B(s,i,v,g,c,u,"accounts"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Accounts"'},type:"button",disabled:c==null?void 0:c.accounts,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),(c.accounts||c.customFields)&&e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")}),(s==null?void 0:s.selectedAccountId)&&e.jsx("button",{onClick:()=>_(s,i,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:c==null?void 0:c.customFields,children:"↻"})]}),(s==null?void 0:s.selectedAccountId)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Drip Fields","bit-integrations")})})]}),s.field_map.map((b,r)=>e.jsx(K,{i:r,field:b,dripConf:s,formFields:t,setDripConf:i},`Drip-m-${r+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>P(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Q,{dripConf:s,setDripConf:i,loading:c,setLoading:u})]})]})}export{te as D};
