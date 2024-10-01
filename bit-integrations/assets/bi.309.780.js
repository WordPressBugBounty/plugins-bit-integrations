var V=Object.defineProperty;var A=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var M=(a,s,l)=>s in a?V(a,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[s]=l,h=(a,s)=>{for(var l in s||(s={}))$.call(s,l)&&M(a,l,s[l]);if(A)for(var l of A(s))P.call(s,l)&&M(a,l,s[l]);return a};import{r,j as t,L as F,i as R}from"./main-830.js";import{_ as n,m as I,e as _,n as p,j as L,k as q,l as G,o as E,N as H}from"./bi.597.15.js";import{p as O,g as U,a as B}from"./bi.592.781.js";import{T as z}from"./bi.715.660.js";function D({memberpressConf:a,setMemberpressConf:s,formFields:l}){var x,d,g;const[i,o]=r.useState(!1),[u,w]=r.useState({show:!1,action:()=>{}}),v=[{key:"complete",label:n("Complete","bit-integrations")},{key:"pending",label:n("Pending","bit-integrations")},{key:"failed",label:n("Failed","bit-integrations")},{key:"refunded",label:n("Refunded","bit-integrations")}],b=(c,y)=>{var S,k;const j=h({},a);y==="status"&&((S=c.target)!=null&&S.checked?(j.actions.status=!0,w({show:"status"})):(w({show:!1}),delete j.actions.status)),y==="gateway"&&((k=c.target)!=null&&k.checked?(j.actions.gateway=!0,w({show:"gateway"})):(w({show:!1}),delete j.actions.gateway)),s(h({},j))},N=()=>{w({show:!1})},e=(c,y)=>{const j=h({},a);y==="statusId"&&(c!==""?j[y]=c:delete j[y]),y==="gatewayId"&&(c!==""?j[y]=c:delete j[y]),s(h({},j))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(I,{checked:((x=a==null?void 0:a.actions)==null?void 0:x.status)||!1,onChange:c=>b(c,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:n("Add Status","bit-integrations"),subTitle:n("Add status of Membership","bit-integrations")}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:u.show==="status",close:N,action:N,title:n("Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select Status","bit-integrations")}),i?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(p,{className:"msl-wrp-options",defaultValue:a==null?void 0:a.statusId,options:v.map(c=>({label:c.label,value:c.key})),onChange:c=>e(c,"statusId"),singleSelect:!0})})]}),t.jsx(I,{checked:((d=a==null?void 0:a.actions)==null?void 0:d.gateway)||!1,onChange:c=>b(c,"gateway"),className:"wdt-200 mt-4 mr-2",value:"gateway",title:n("Add Type","bit-integrations"),subTitle:n("Add Type","bit-integrations")}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:u.show==="gateway",close:N,action:N,title:n("Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select Gateway","bit-integrations")}),i?t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(p,{className:"msl-wrp-options",defaultValue:a==null?void 0:a.gatewayId,options:((g=a==null?void 0:a.default)==null?void 0:g.allPaymentMethods)&&a.default.allPaymentMethods.map(c=>({label:c.paymentTitle,value:c.paymentId})),onChange:c=>e(c,"gatewayId"),singleSelect:!0}),t.jsx("button",{onClick:()=>O(a,s,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Payment Gateway"'},type:"button",disabled:i,children:"↻"})]})]})]})}const J=(a,s,l)=>{const i=h({},s);i.field_map.splice(a,0,{}),l(h({},i))},K=(a,s,l)=>{const i=h({},s);i.field_map.length>1&&i.field_map.splice(a,1),l(h({},i))},T=(a,s,l,i)=>{const o=h({},l);o.field_map[s][a.target.name]=a.target.value,a.target.value==="custom"&&(o.field_map[s].customValue=""),i(h({},o))};function Q({i:a,formFields:s,field:l,memberpressConf:i,setMemberpressConf:o}){var N;r.useEffect(()=>{var e;if(((e=i==null?void 0:i.field_map)==null?void 0:e.length)===1&&l.memberpressFormField===""){const x=h({},i),d=U(x);x.field_map=d,o(x)}},[]);const u=(i==null?void 0:i.memberpressFields.filter(e=>e.required===!0))||[],w=(i==null?void 0:i.memberpressFields.filter(e=>e.required===!1))||[],v=R(L),{isPro:b}=v;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:e=>T(e,a,i,o),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:s==null?void 0:s.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),b?"":`(${n("Pro","bit-integrations")})`),children:b&&((N=q)==null?void 0:N.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),l.formField==="custom"&&t.jsx(z,{onChange:e=>G(e,a,i,o),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:s}),t.jsxs("select",{className:"btcd-paper-inp",disabled:a<u.length,name:"memberpressFormField",value:a<u.length?u[a].key||"":l.memberpressFormField||"",onChange:e=>T(e,a,i,o),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),a<u.length?t.jsx("option",{value:u[a].key,children:u[a].label},u[a].key):w.map(({key:e,label:x})=>t.jsx("option",{value:e,children:x},e))]})]}),a>=u.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>J(a,i,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>K(a,i,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function f({formFields:a,handleInput:s,memberpressConf:l,setMemberpressConf:i,isLoading:o,setIsLoading:u,setSnackbar:w,allIntegURL:v,isInfo:b,edit:N}){var x;const e=(d,g)=>{const c=h({},l);g==="selectedMembership"&&(d!==""?c[g]=d:delete c[g]),i(h({},c))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:n("Actions:","bit-integrations")}),t.jsxs("select",{onChange:s,name:"mainAction",value:l==null?void 0:l.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:n("Select Actions","bit-integrations")}),(l==null?void 0:l.allActions)&&l.allActions.map(({key:d,label:g})=>t.jsx("option",{value:d,children:g},d))]}),t.jsx("br",{}),t.jsx("br",{}),["1","2"].includes(l==null?void 0:l.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Membership:","bit-integrations")}),t.jsx(p,{className:"w-5",defaultValue:l==null?void 0:l.selectedMembership,options:((x=l==null?void 0:l.default)==null?void 0:x.allMemberShips)&&l.default.allMemberShips.map(d=>({label:d.membershipTitle,value:d.membershipId.toString()})),onChange:d=>e(d,"selectedMembership"),singleSelect:!0}),t.jsx("button",{onClick:()=>B(l,i,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch All Membership","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]})]}),t.jsx("br",{}),t.jsx("br",{}),o&&t.jsx(F,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsxs(t.Fragment,{children:[["1"].includes(l==null?void 0:l.mainAction)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Memberpress Fields","bit-integrations")})})]}),l.field_map.map((d,g)=>t.jsx(Q,{i:g,field:d,memberpressConf:l,formFields:a,setMemberpressConf:i},`dash-m-${g+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>E(l.field_map.length,l,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),t.jsx("br",{}),t.jsx("br",{}),l.mainAction==="1"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(D,{memberpressConf:l,setMemberpressConf:i,formFields:a})]})]}),t.jsx("br",{}),t.jsx(H,{note:n("Some integrations will only work for logged-in users.","bit-integrations")})]})}export{f as M};
