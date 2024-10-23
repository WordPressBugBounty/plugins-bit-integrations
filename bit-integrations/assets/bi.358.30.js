var G=Object.defineProperty;var C=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var k=(o,d,c)=>d in o?G(o,d,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[d]=c,b=(o,d)=>{for(var c in d||(d={}))U.call(d,c)&&k(o,c,d[c]);if(C)for(var c of C(d))W.call(d,c)&&k(o,c,d[c]);return o};import{r as p,u as B,l as H,e as I,i as K,j as e}from"./main-80.js";import{g as Q,h as T,$ as V,z as X,b as x,d as Y,_ as i,i as Z,G as _,I as ee,F as te}from"./bi.433.0.js";import{p as se}from"./bi.351.678.js";import{r as ie,F as ae,a as ne,C as le,c as de,b as re,d as ce,e as oe}from"./bi.386.705.js";import"./bi.895.650.js";import"./bi.194.651.js";function je({allIntegURL:o}){var w;const[d,c]=p.useState([]),[f,v]=p.useState([]),M=B(),{formID:q,id:D}=H(),[s,h]=I(Q),j=K(T),[F,$]=I(V),[N,g]=p.useState(!1),[A,m]=p.useState({show:!1}),[E,y]=p.useState({fields:[],files:[]}),[z,S]=p.useState({fields:[],files:[]}),[R,P]=p.useState({fields:[],files:[]}),u=(t,n)=>{const a=b({},s);a[t]=n,h(a)};p.useEffect(()=>{const t=X(b({},s));x({},"user/list").then(n=>{const{data:a}=n;c(a)}),x({},"post-types/list").then(n=>{const{data:a}=n;v(a)}),x({post_type:s==null?void 0:s.post_type},"customfield/list").then(n=>{const{data:a}=n;y({fields:a.acf_fields,files:a.acf_files}),S({fields:a.mb_fields,files:a.mb_files}),P({fields:a.je_cpt_fields,files:a.je_cpt_files})}),h(t)},[]);const J=(t,n)=>{const a=b({},s);a[t]=n,x({post_type:n},"customfield/list").then(O=>{const{data:l}=O;y({fields:l.acf_fields,files:l.acf_files}),S({fields:l.mb_fields,files:l.mb_files}),P({fields:l.je_cpt_fields,files:l.je_cpt_files}),l!=null&&l.acf_fields&&(a.acf_map=l.acf_fields.filter(r=>r.required).map(r=>({formField:"",acfField:r.key,required:r.required})),a.acf_map.length<1&&(a.acf_map=[{}])),l!=null&&l.mb_fields&&(a.metabox_map=l.mb_fields.filter(r=>r.required).map(r=>({formField:"",metaboxField:r.key,required:r.required})),a.metabox_map.length<1&&(a.metabox_map=[{}])),l!=null&&l.je_cpt_fields&&(a.je_cpt_meta_map=l.je_cpt_fields.filter(r=>r.required).map(r=>({formField:"",jeCPTField:r.key,required:r.required}))),a.je_cpt_meta_map.length<1&&(a.je_cpt_meta_map=[{}])}),h(a)},L=()=>{if(!de(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!re(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!ce(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}if(!oe(s)){m({show:!0,msg:i("Please map mandatory fields","bit-integrations")});return}g(!0),te(F,$,o,s,M,D,1,g).then(n=>{n.success?m({show:!0,msg:n.data}):m({show:!0,msg:n.data||n})})};return e.jsxs("div",{children:[e.jsx(Y,{snack:A,setSnackbar:m}),e.jsxs("div",{style:{width:900},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>u(t.target.name,t.target.value),name:"name",value:s.name,type:"text",placeholder:i("Integration Name...","bit-integrations")}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(Z,{entity:F.triggered_entity,setSnackbar:m}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:i("Post Type","bit-integrations")}),e.jsx(_,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[i("Select one of the defined WordPress post types Or custom post types for the post","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("div",{children:[e.jsxs("select",{name:"post_type",value:s==null?void 0:s.post_type,onChange:t=>J(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Post Type","bit-integrations")}),f==null?void 0:f.map((t,n)=>e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.title},`acf-${n*2}`))]}),e.jsx("button",{onClick:()=>ie(f,v),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Post Types","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("b",{children:i("Post Status","bit-integrations")}),e.jsx(_,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[i("Select the status for the post. If published status is selected and the post date is in the future, it will automatically be changed to scheduled","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("select",{name:"post_status",value:s==null?void 0:s.post_status,onChange:t=>u(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Status","bit-integrations")}),e.jsx("option",{value:"publish",children:i("Publish","bit-integrations")}),e.jsx("option",{value:"draft",children:i("Draft","bit-integrations")}),e.jsx("option",{value:"auto-draft",children:i("Auto-Draft","bit-integrations")}),e.jsx("option",{value:"private",children:i("Private","bit-integrations")}),e.jsx("option",{value:"pending",children:i("Pending","bit-integrations")})]}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:i("Author","bit-integrations")}),e.jsx(_,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[i("Select the user to be assigned to the post","bit-integrations"),e.jsx("br",{})]})})]}),e.jsx("div",{children:e.jsxs("select",{name:"post_author",value:s==null?void 0:s.post_author,onChange:t=>u(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Author","bit-integrations")}),d==null?void 0:d.map((t,n)=>e.jsx("option",{value:t.ID,children:t.display_name},`acf-${n*2}`))]})}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Comment Status","bit-integrations")})}),e.jsxs("select",{name:"comment_status",value:s==null?void 0:s.comment_status,onChange:t=>u(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:i("Select Status","bit-integrations")}),e.jsx("option",{value:"open",children:i("Open","bit-integrations")}),e.jsx("option",{value:"closed",children:i("Closed","bit-integrations")})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:i("Post Field Mapping","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Post Fields","bit-integrations")})})]})]}),(w=s==null?void 0:s.post_map)==null?void 0:w.map((t,n)=>e.jsx(ae,{i:n,type:"post",field:t,formFields:j,postConf:s,setPostConf:h,customFields:se},`analytics-m-${n+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>ne("post_map",s.post_map.length,s,h),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("div",{children:e.jsx(le,{formID:q,formFields:j,handleInput:t=>u(t,s),postConf:s,setPostConf:h,isLoading:N,setIsLoading:g,setSnackbar:m,acfFields:E,mbFields:z,jeCPTFields:R})}),e.jsx(ee,{edit:!0,saveConfig:L,isLoading:N,dataConf:s,setDataConf:h,formFields:j})]})}export{je as default};
