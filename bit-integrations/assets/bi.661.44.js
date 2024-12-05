var U=Object.defineProperty;var C=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var k=(c,r,o)=>r in c?U(c,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):c[r]=o,b=(c,r)=>{for(var o in r||(r={}))W.call(r,o)&&k(c,o,r[o]);if(C)for(var o of C(r))B.call(r,o)&&k(c,o,r[o]);return c};import{r as p,u as G,o as H,e as I,f as K,j as e}from"./main-34.js";import{f as Q,g as T,$ as V,c as x,_ as i}from"./bi.671.0.js";import{y as X,af as _}from"./bi.188.437.js";import{p as Y}from"./bi.575.704.js";import{S as Z}from"./bi.213.13.js";import{S as ee,I as te,i as se}from"./bi.633.3.js";import{r as ie,F as ae,a as ne,C as le,c as re,b as de,d as oe,e as ce}from"./bi.473.729.js";import"./bi.914.9.js";import"./bi.22.11.js";import"./bi.690.14.js";import"./bi.623.673.js";import"./bi.808.674.js";function Se({allIntegURL:c}){var w;const[r,o]=p.useState([]),[u,v]=p.useState([]),M=G(),{formID:q,id:D}=H(),[s,f]=I(Q),j=K(T),[F,$]=I(V),[N,g]=p.useState(!1),[A,m]=p.useState({show:!1}),[E,S]=p.useState({fields:[],files:[]}),[R,y]=p.useState({fields:[],files:[]}),[z,P]=p.useState({fields:[],files:[]}),h=(t,n)=>{const a=b({},s);a[t]=n,f(a)};p.useEffect(()=>{const t=X(b({},s));x({},"user/list").then(n=>{const{data:a}=n;o(a)}),x({},"post-types/list").then(n=>{const{data:a}=n;v(a)}),x({post_type:s==null?void 0:s.post_type},"customfield/list").then(n=>{const{data:a}=n;S({fields:a.acf_fields,files:a.acf_files}),y({fields:a.mb_fields,files:a.mb_files}),P({fields:a.je_cpt_fields,files:a.je_cpt_files})}),f(t)},[]);const J=(t,n)=>{const a=b({},s);a[t]=n,x({post_type:n},"customfield/list").then(O=>{const{data:l}=O;S({fields:l.acf_fields,files:l.acf_files}),y({fields:l.mb_fields,files:l.mb_files}),P({fields:l.je_cpt_fields,files:l.je_cpt_files}),l!=null&&l.acf_fields&&(a.acf_map=l.acf_fields.filter(d=>d.required).map(d=>({formField:"",acfField:d.key,required:d.required})),a.acf_map.length<1&&(a.acf_map=[{}])),l!=null&&l.mb_fields&&(a.metabox_map=l.mb_fields.filter(d=>d.required).map(d=>({formField:"",metaboxField:d.key,required:d.required})),a.metabox_map.length<1&&(a.metabox_map=[{}])),l!=null&&l.je_cpt_fields&&(a.je_cpt_meta_map=l.je_cpt_fields.filter(d=>d.required).map(d=>({formField:"",jeCPTField:d.key,required:d.required}))),a.je_cpt_meta_map.length<1&&(a.je_cpt_meta_map=[{}])}),f(a)},L=()=>{if(!re(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!de(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!oe(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!ce(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}g(!0),se(F,$,c,s,M,D,1,g).then(n=>{n.success?m({show:!0,msg:n.data}):m({show:!0,msg:n.data||n})})};return e.jsxs("div",{children:[e.jsx(Z,{snack:A,setSnackbar:m}),e.jsxs("div",{style:{width:900},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>h(t.target.name,t.target.value),name:"name",value:s.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(ee,{entity:F.triggered_entity,setSnackbar:m}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:i("Post Type","bit-integrations")}),e.jsx(_,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[i("Select one of the defined WordPress post types Or custom post types for the post","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("div",{children:[e.jsxs("select",{name:"post_type",value:s==null?void 0:s.post_type,onChange:t=>J(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Post Type","bit-integrations")}),u==null?void 0:u.map((t,n)=>e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.title},`acf-${n*2}`))]}),e.jsx("button",{onClick:()=>ie(u,v),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Post Types","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("b",{children:i("Post Status","bit-integrations")}),e.jsx(_,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[i("Select the status for the post. If published status is selected and the post date is in the future, it will automatically be changed to scheduled","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("select",{name:"post_status",value:s==null?void 0:s.post_status,onChange:t=>h(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Status","bit-integrations")}),e.jsx("option",{value:"publish",children:i("Publish","bit-integrations")}),e.jsx("option",{value:"draft",children:i("Draft","bit-integrations")}),e.jsx("option",{value:"auto-draft",children:i("Auto-Draft","bit-integrations")}),e.jsx("option",{value:"private",children:i("Private","bit-integrations")}),e.jsx("option",{value:"pending",children:i("Pending","bit-integrations")})]}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:i("Author","bit-integrations")}),e.jsx(_,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[i("Select the user to be assigned to the post","bit-integrations"),e.jsx("br",{})]})})]}),e.jsx("div",{children:e.jsxs("select",{name:"post_author",value:s==null?void 0:s.post_author,onChange:t=>h(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Author","bit-integrations")}),r==null?void 0:r.map((t,n)=>e.jsx("option",{value:t.ID,children:t.display_name},`acf-${n*2}`))]})}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Comment Status","bit-integrations")})}),e.jsxs("select",{name:"comment_status",value:s==null?void 0:s.comment_status,onChange:t=>h(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Status","bit-integrations")}),e.jsx("option",{value:"open",children:i("Open","bit-integrations")}),e.jsx("option",{value:"closed",children:i("Closed","bit-integrations")})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:i("Post Field Mapping","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Post Fields","bit-integrations")})})]})]}),(w=s==null?void 0:s.post_map)==null?void 0:w.map((t,n)=>e.jsx(ae,{i:n,type:"post",field:t,formFields:j,postConf:s,setPostConf:f,customFields:Y},`analytics-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>ne("post_map",s.post_map.length,s,f),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("div",{children:e.jsx(le,{formID:q,formFields:j,handleInput:t=>h(t,s),postConf:s,setPostConf:f,isLoading:N,setIsLoading:g,setSnackbar:m,acfFields:E,mbFields:R,jeCPTFields:z})}),e.jsx(te,{edit:!0,saveConfig:L,isLoading:N,dataConf:s,setDataConf:f,formFields:j})]})}export{Se as default};
