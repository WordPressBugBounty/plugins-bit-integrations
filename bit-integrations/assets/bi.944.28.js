var z=Object.defineProperty;var I=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var k=(c,d,o)=>d in c?z(c,d,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[d]=o,x=(c,d)=>{for(var o in d||(d={}))B.call(d,o)&&k(c,o,d[o]);if(I)for(var o of I(d))H.call(d,o)&&k(c,o,d[o]);return c};import{r,e as $,f as J,o as K,u as Q,j as t}from"./main-441.js";import{f as V,$ as W,g as X,c as j,_ as i}from"./bi.452.0.js";import{p as Y}from"./bi.937.704.js";import{S as Z}from"./bi.239.13.js";import{S as tt,I as et,s as st}from"./bi.73.3.js";import{P as f,a as g,c as it,b as at}from"./bi.629.705.js";import"./bi.141.437.js";import"./bi.663.9.js";import"./bi.866.11.js";import"./bi.655.14.js";import"./bi.768.673.js";import"./bi.410.674.js";function ft({allIntegURL:c}){var N,y,P;const[d,o]=r.useState([]),[M,O]=r.useState([]),[s,p]=$(V),[v,T]=$(W),b=J(X);r.useState([]),K();const E=Q(),[D,_]=r.useState([]),[A,F]=r.useState([]),[q,m]=r.useState({show:!1}),[L,R]=r.useState(!1);r.useEffect(()=>{j({},"pods/list",null,"GET").then(e=>{var a,l;e!=null&&e.success&&e!==void 0&&(o(Object.values((a=e.data)==null?void 0:a.post_types)),O((l=e.data)==null?void 0:l.users))}),j({post_type:s==null?void 0:s.post_type},"pods/fields").then(e=>{var a,l;e!=null&&e.success&&e!==void 0&&(_(Object.values((a=e==null?void 0:e.data)==null?void 0:a.podFields)),F(Object.values((l=e==null?void 0:e.data)==null?void 0:l.podFiles)))})},[]);const h=(e,a,l)=>{const n=x({},s);l?n[e]=Number(a):n[e]=a,p(n)},U=(e,a)=>{const l=x({},s);l[e]=a,j({post_type:a},"pods/fields").then(n=>{var C,S,w;n!=null&&n.success&&n!==void 0&&(_(Object.values((C=n==null?void 0:n.data)==null?void 0:C.podFields)),F(Object.values((S=n==null?void 0:n.data)==null?void 0:S.podFiles)),n!=null&&n.data&&(l.pod_map=Object.values(n.data).filter(u=>u.required).map(u=>({formField:"",podField:u.key,required:u.required})),((w=l==null?void 0:l.pod_map)==null?void 0:w.length)<1&&(l.pod_map=[{}])),p(l))})},G=()=>{if(!it(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!at(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}st({flow:v,setFlow:T,allIntegURL:c,conf:s,navigate:E,edit:1,setIsLoading:R,setSnackbar:m})};return t.jsxs("div",{style:{width:900},children:[t.jsx(Z,{snack:q,setSnackbar:m}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Integration Name","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:e=>h(e.target.name,e.target.value),name:"name",value:s.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(tt,{entity:v.triggered_entity,setSnackbar:m}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Post Type","bit-integrations")})}),t.jsxs("select",{name:"post_type",onChange:e=>U(e.target.name,e.target.value),value:s==null?void 0:s.post_type,className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:"Select type"}),d.map((e,a)=>t.jsx("option",{value:e.name,children:e.label},`pod-${a*2}`))]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Post Status","bit-integrations")})}),t.jsxs("select",{name:"post_status",onChange:e=>h(e.target.name,e.target.value),value:s==null?void 0:s.post_status,className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:i("Select Status","bit-integrations")}),t.jsx("option",{value:"publish",children:i("Publish","bit-integrations")}),t.jsx("option",{value:"draft",children:i("Draft","bit-integrations")}),t.jsx("option",{value:"inherit",children:i("Inherit","bit-integrations")}),t.jsx("option",{value:"auto-draft",children:i("Auto-Draft","bit-integrations")}),t.jsx("option",{value:"private ",children:i("Private","bit-integrations")}),t.jsx("option",{value:"pending",children:i("Pending","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Comment Status","bit-integrations")})}),t.jsxs("select",{name:"comment_status",onChange:e=>h(e.target.name,e.target.value),value:s==null?void 0:s.comment_status,className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:i("Select Status","bit-integrations")}),t.jsx("option",{value:"open",children:i("Open","bit-integrations")}),t.jsx("option",{value:"closed",children:i("Closed","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Author","bit-integrations")})}),t.jsxs("select",{name:"post_author",onChange:e=>h(e.target.name,e.target.value),value:s==null?void 0:s.post_author,className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:i("Select Author","bit-integrations")}),t.jsx("option",{value:"logged_in_user",children:"Logged In User"}),M.map((e,a)=>t.jsx("option",{value:e.ID,children:e.display_name},`pod-${a*2}`))]}),t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:i("Post Fields Mapping","bit-integrations")})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Post Fields","bit-integrations")})})]})]}),(N=s==null?void 0:s.post_map)==null?void 0:N.map((e,a)=>t.jsx(f,{i:a,type:"post",field:e,formFields:b,podsConf:s,setPodsConf:p,podFields:Y,fieldType:"fields"},`analytics-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>g("post_map",s.post_map.length,s,p),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:"Pod Fields Mapping"})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Pod Fields","bit-integrations")})})]})]}),(y=s==null?void 0:s.pod_field_map)==null?void 0:y.map((e,a)=>t.jsx(f,{i:a,type:"pod",field:e,formFields:b,podsConf:s,setPodsConf:p,podFields:D,fieldType:"fields"},`analytics-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>g("pod_field_map",s.pod_field_map.length,s,p),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:"Pod File Upload Mapping"})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:i("Pod Fields","bit-integrations")})})]})]}),(P=s==null?void 0:s.pod_file_map)==null?void 0:P.map((e,a)=>t.jsx(f,{i:a,type:"podFile",field:e,formFields:b,podsConf:s,setPodsConf:p,podFields:A,fieldType:"file"},`analytics-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>g("pod_file_map",s.pod_file_map.length,s,p),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),t.jsx(et,{edit:!0,saveConfig:G,isLoading:L,dataConf:s,setDataConf:p,formFields:b})]})}export{ft as default};
