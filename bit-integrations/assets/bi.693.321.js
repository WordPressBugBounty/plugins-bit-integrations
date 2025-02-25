var G=Object.defineProperty;var C=Object.getOwnPropertySymbols;var H=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var q=(m,o,c)=>o in m?G(m,o,{enumerable:!0,configurable:!0,writable:!0,value:c}):m[o]=c,x=(m,o)=>{for(var c in o||(o={}))H.call(o,c)&&q(m,c,o[c]);if(C)for(var c of C(o))K.call(o,c)&&q(m,c,o[c]);return m};import{r as u,u as Q,o as V,j as e}from"./main-212.js";import{c as v,_ as s}from"./bi.717.0.js";import{aj as N}from"./bi.894.440.js";import{S as X}from"./bi.954.13.js";import{S as Y}from"./bi.787.945.js";import{r as Z,F as ee,a as te,C as se,c as ie,b as ae,d as ne,e as re}from"./bi.509.749.js";import{p as I}from"./bi.111.722.js";import{I as le,i as oe}from"./bi.164.3.js";import{T as M,t as ce}from"./bi.600.737.js";import"./bi.303.9.js";import"./bi.830.11.js";import"./bi.914.14.js";import"./bi.870.692.js";import"./bi.323.693.js";function Se({formFields:m,setFlow:o,flow:c,allIntegURL:P}){var F;const[j,L]=u.useState([]),[g,y]=u.useState([]),S=Q(),{formID:D}=V(),[k,_]=u.useState(!1),[h,T]=u.useState(1),[A,p]=u.useState({show:!1}),[E,W]=u.useState({fields:[],files:[]}),[$,z]=u.useState({fields:[],files:[]}),[J,O]=u.useState({fields:[],files:[]}),{postCreation:d}=ce,[n,b]=u.useState({name:"WP Post Creation",type:"WP Post Creation",post_map:[{post_author:"logged_in_user"}],acf_map:[{}],acf_file_map:[{}],metabox_map:[{}],metabox_file_map:[{}],je_cpt_meta_map:[{}],je_cpt_file_map:[{}]}),f=(t,i)=>{const a=x({},n);a[t]=i,b(a)};u.useEffect(()=>{v({},"user/list").then(i=>{const{data:a}=i;L(a)}),v({},"post-types/list").then(i=>{const{data:a}=i;y(a)});const t=x({},n);t.post_map=I.filter(i=>i.required).map(i=>({formField:"",postField:i.key,required:i.required})),b(t)},[]);const B=(t,i)=>{const a=x({},n);a[t]=i,v({post_type:i},"customfield/list").then(U=>{const{data:r}=U;W({fields:r.acf_fields,files:r.acf_files}),z({fields:r.mb_fields,files:r.mb_files}),O({fields:r.je_cpt_fields,files:r.je_cpt_files}),r!=null&&r.acf_fields&&(a.acf_map=r.acf_fields.filter(l=>l.required).map(l=>({formField:"",acfField:l.key,required:l.required})),a.acf_map.length<1&&(a.acf_map=[{}])),r!=null&&r.mb_fields&&(a.metabox_map=r.mb_fields.filter(l=>l.required).map(l=>({formField:"",metaboxField:l.key,required:l.required})),a.metabox_map.length<1&&(a.metabox_map=[{}])),r!=null&&r.je_cpt_fields&&(a.je_cpt_meta_map=r.je_cpt_fields.filter(l=>l.required).map(l=>({formField:"",jeCPTField:l.key,required:l.required}))),a.je_cpt_meta_map.length<1&&(a.je_cpt_meta_map=[{}])}),b(a)},w=t=>{if(setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!ie(n)){p({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(!n.post_type){p({show:!0,msg:s("Post Type can't be empty","bit-integrations")});return}if(!n.post_status){p({show:!0,msg:s("Post Status can't be empty","bit-integrations")});return}if(t===3){if(!ae(n)){p({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(!ne(n)){p({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}if(!re(n)){p({show:!0,msg:s("Please map mandatory fields","bit-integrations")});return}}T(t)},R=()=>{_(!0),oe(c,o,P,n,S,"","",_).then(i=>{var a;i.success?(p({show:!0,msg:(a=i.data)==null?void 0:a.msg}),S(P)):p({show:!0,msg:i.data||i})})};return e.jsxs("div",{children:[e.jsx(X,{snack:A,setSnackbar:p}),(d==null?void 0:d.youTubeLink)&&e.jsx(M,{title:"WP Post Creation",youTubeLink:d==null?void 0:d.youTubeLink}),(d==null?void 0:d.docLink)&&e.jsx(M,{title:"WP Post Creation",docLink:d==null?void 0:d.docLink}),e.jsx("div",{className:"txt-center mt-2",children:e.jsx(Y,{step:3,active:h})}),e.jsxs("div",{className:"btcd-stp-page",style:{width:h===1&&900,height:h===1&&"auto"},children:[e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>f(t.target.name,t.target.value),name:"name",value:n.name,type:"text",placeholder:s("Integration Name...","bit-integrations")}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:s("Post Type","bit-integrations")}),e.jsx(N,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[s("Select one of the defined WordPress post types Or custom post types for the post","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("div",{children:[e.jsxs("select",{name:"post_type",onChange:t=>B(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-1",children:[e.jsx("option",{disabled:!0,selected:!0,children:"bit-integrations"}),g==null?void 0:g.map((t,i)=>e.jsx("option",{value:t==null?void 0:t.id,children:t==null?void 0:t.title},`acf-${i*2}`))]}),e.jsx("button",{onClick:()=>Z(g,y),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh Post Types","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"mt-3",children:[e.jsx("b",{children:s("Post Status","bit-integrations")}),e.jsx(N,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:[s("Select the status for the post. If published status is selected and the post date is in the future, it will automatically be changed to scheduled","bit-integrations"),e.jsx("br",{})]})})]}),e.jsxs("select",{name:"post_status",onChange:t=>f(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:s("Select Status","bit-integrations")}),e.jsx("option",{value:"publish",children:s("Publish","bit-integrations")}),e.jsx("option",{value:"draft",children:s("Draft","bit-integrations")}),e.jsx("option",{value:"auto-draft",children:s("Auto-Draft","bit-integrations")}),e.jsx("option",{value:"private",children:s("Private","bit-integrations")}),e.jsx("option",{value:"pending",children:s("Pending","bit-integrations")})]}),e.jsxs("div",{className:"mt-3 flx",children:[e.jsx("b",{children:s("Author","bit-integrations")}),e.jsx(N,{width:250,icnSize:17,className:"ml-2",children:e.jsxs("div",{className:"txt-body",children:["bit-integrations",e.jsx("br",{})]})})]}),e.jsx("div",{children:e.jsxs("select",{name:"post_author",onChange:t=>f(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:s("Select Author","bit-integrations")}),e.jsx("option",{value:"logged_in_user",children:s("Logged In User","bit-integrations")}),j==null?void 0:j.map((t,i)=>e.jsx("option",{value:t.ID,children:t.display_name},`acf-${i*2}`))]})}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Comment Status","bit-integrations")})}),e.jsxs("select",{name:"comment_status",onChange:t=>f(t.target.name,t.target.value),className:"btcd-paper-inp w-5 mt-2",children:[e.jsx("option",{disabled:!0,selected:!0,children:s("Select Status","bit-integrations")}),e.jsx("option",{value:"open",children:s("Open","bit-integrations")}),e.jsx("option",{value:"closed",children:s("Closed","bit-integrations")})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:s("Post Field Mapping","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:s("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:s("Post Fields","bit-integrations")})})]})]}),(F=n==null?void 0:n.post_map)==null?void 0:F.map((t,i)=>e.jsx(ee,{i,type:"post",field:t,formFields:m,postConf:n,setPostConf:b,customFields:I},`analytics-m-${i+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>te("post_map",n.post_map.length,n,b),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsxs("button",{onClick:()=>w(2),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[s("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsxs("div",{className:"btcd-stp-page",style:x({},h===2&&{width:900,height:"auto",overflow:"visible"}),children:[e.jsx(se,{formID:D,formFields:m,handleInput:t=>f(t,n),postConf:n,setPostConf:b,isLoading:k,setIsLoading:_,setSnackbar:p,acfFields:E,mbFields:$,jeCPTFields:J}),e.jsxs("button",{onClick:()=>w(3),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",children:[s("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(le,{step:h,saveConfig:()=>R(),isLoading:k,dataConf:n,setDataConf:b,formFields:m})]})}export{Se as default};
