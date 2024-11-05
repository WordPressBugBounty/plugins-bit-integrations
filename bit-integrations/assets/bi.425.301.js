var J=Object.defineProperty;var k=Object.getOwnPropertySymbols;var K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var w=(o,d,c)=>d in o?J(o,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[d]=c,x=(o,d)=>{for(var c in d||(d={}))K.call(d,c)&&w(o,c,d[c]);if(k)for(var c of k(d))Q.call(d,c)&&w(o,c,d[c]);return o};import{r as p,u as V,j as t}from"./main-263.js";import{c as T,_ as s}from"./bi.924.0.js";import{C as W,g as X}from"./bi.317.3.js";import{P as j,a as f,c as Y,b as Z}from"./bi.886.697.js";import{S as tt}from"./bi.428.13.js";import{p as et}from"./bi.206.696.js";import{y as it}from"./bi.361.434.js";import{b as st}from"./bi.929.11.js";import{T as I,t as at}from"./bi.372.711.js";import"./bi.686.14.js";import"./bi.885.668.js";import"./bi.169.669.js";import"./bi.402.9.js";function ft({formFields:o,setFlow:d,flow:c,allIntegURL:M}){var _,N,y;const[L,D]=p.useState([]),[O,$]=p.useState([]),[E,q]=p.useState([]),[g,A]=p.useState([]),U=V(),[z,v]=p.useState(!1),{podLinks:r}=at,[i,m]=p.useState({name:"Pods",type:"Pods",post_map:[{post_author:"logged_in_user"}],pod_field_map:[{}],pod_file_map:[{}],condition:{action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]}}),[B,b]=p.useState({show:!1}),h=(e,a,l)=>{const n=x({},i);l?n[e]=Number(a):n[e]=a,m(n)},G=(e,a)=>{const l=x({},i);l[e]=a,T({post_type:a},"pods/fields").then(n=>{var F,P,S,C;n!=null&&n.success&&n!==void 0&&(D(Object.values((F=n==null?void 0:n.data)==null?void 0:F.podFields)),$(Object.values((P=n==null?void 0:n.data)==null?void 0:P.podFiles)),n!=null&&n.data&&(l.pod_field_map=Object.values((S=n==null?void 0:n.data)==null?void 0:S.podFields).filter(u=>u.required).map(u=>({formField:"",podFormField:u.key,required:u.required})),((C=l==null?void 0:l.pod_field_map)==null?void 0:C.length)<1&&(l.pod_field_map=[{}])),m(l))})};p.useEffect(()=>{T({},"pods/list","","GET").then(e=>{const{data:a}=e;A(a==null?void 0:a.post_types),q(a.users)})},[]);const R=(e,a)=>{const l=x({},i);a?l.condition.action_behavior=e:l.condition.action_behavior="",m(l)},H=()=>{if(!i.post_type){b({show:!0,msg:s("Pod can't be empty","bit-integrations")});return}if(!i.post_status){b({show:!0,msg:s("Post Status can't be empty","bit-integrations")});return}if(!Y(i)){b({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(!Z(i)){b({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}v(!0),X(c,d,M,i,U,"","",v)};return t.jsxs("div",{style:{width:900},children:[t.jsx(tt,{snack:B,setSnackbar:b}),(r==null?void 0:r.youTubeLink)&&t.jsx(I,{title:"PODS",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(I,{title:"PODS",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:e=>h(e.target.name,e.target.value),name:"name",value:i.name,type:"text",placeholder:s("Integration Name...","bit-integrations")}),t.jsxs("div",{className:"mt-3",children:[t.jsx("b",{children:s("Pod","bit-integrations")})," ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("select",{name:"post_type",onChange:e=>G(e.target.name,e.target.value),className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:"Select type"}),g==null?void 0:g.map((e,a)=>t.jsx("option",{value:e.name,children:e.label},`pod-${a*2}`))]}),t.jsxs("div",{className:"mt-3",children:[t.jsx("b",{children:s("Post Status","bit-integrations")})," ",t.jsx("span",{style:{color:"red"},children:"*"})]}),t.jsxs("select",{name:"post_status",onChange:e=>h(e.target.name,e.target.value),className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:s("Select Status","bit-integrations")}),t.jsx("option",{value:"publish",children:s("Publish","bit-integrations")}),t.jsx("option",{value:"draft",children:s("Draft","bit-integrations")}),t.jsx("option",{value:"inherit",children:s("Inherit","bit-integrations")}),t.jsx("option",{value:"auto-draft",children:s("Auto-Draft","bit-integrations")}),t.jsx("option",{value:"private ",children:s("Private","bit-integrations")}),t.jsx("option",{value:"pending",children:s("Pending","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Comment Status","bit-integrations")})}),t.jsxs("select",{name:"comment_status",onChange:e=>h(e.target.name,e.target.value),className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:s("Select Status","bit-integrations")}),t.jsx("option",{value:"open",children:s("Open","bit-integrations")}),t.jsx("option",{value:"closed",children:s("Closed","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Author","bit-integrations")})}),t.jsxs("select",{name:"post_author",onChange:e=>h(e.target.name,e.target.value),className:"btcd-paper-inp w-5 mt-1",children:[t.jsx("option",{disabled:!0,selected:!0,children:s("Select Author","bit-integrations")}),t.jsx("option",{value:"logged_in_user",children:s("Logged In User","bit-integrations")}),E.map((e,a)=>t.jsx("option",{value:e.ID,children:e.display_name},`pod-${a*2}`))]}),t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:s("Post Fields Mapping","bit-integrations")})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Post Fields","bit-integrations")})})]})]}),(_=i==null?void 0:i.post_map)==null?void 0:_.map((e,a)=>t.jsx(j,{i:a,type:"post",field:e,formFields:o,podsConf:i,setPodsConf:m,podFields:et,fieldType:"fields"},`analytics-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>f("post_map",i.post_map.length,i,m),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:s("Pod Fields Mapping","bit-integrations")})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Pod Fields","bit-integrations")})})]})]}),i.pod_field_map.map((e,a)=>t.jsx(j,{i:a,type:"pod",field:e,formFields:o,podsConf:i,setPodsConf:m,podFields:L,fieldType:"fields"},`analytics-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>f("pod_field_map",i.pod_field_map.length,i,m),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsxs("div",{children:[t.jsx("div",{className:"mt-3 mb-1",children:t.jsx("b",{children:s("Pod File Upload Mapping","bit-integrations")})}),t.jsx("div",{className:"btcd-hr"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Pod Fields","bit-integrations")})})]})]}),i.pod_file_map.map((e,a)=>t.jsx(j,{i:a,type:"podFile",field:e,formFields:o,podsConf:i,setPodsConf:m,podFields:O,fieldType:"file"},`analytics-m-${a+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>f("pod_file_map",i.pod_file_map.length,i,m),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(i==null?void 0:i.condition)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flx",children:t.jsx(st,{onChange:e=>R(e.target.value,e.target.checked),checked:((N=i==null?void 0:i.condition)==null?void 0:N.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:s("Conditional Logics","bit_integration")})}),t.jsx("br",{}),((y=i==null?void 0:i.condition)==null?void 0:y.action_behavior)==="cond"&&t.jsx(W,{formFields:o,dataConf:i,setDataConf:m})]}),t.jsxs("button",{className:"btn f-left btcd-btn-lg purple sh-sm flx",type:"button",onClick:()=>H(),children:[s("Save","bit-integrations")," ",z&&t.jsx(it,{size:20,clr:"#022217",className:"ml-2"})]})]})}export{ft as default};
