var E=Object.defineProperty;var _=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var k=(r,s,n)=>s in r?E(r,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[s]=n,m=(r,s)=>{for(var n in s||(s={}))M.call(s,n)&&k(r,n,s[n]);if(_)for(var n of _(s))W.call(s,n)&&k(r,n,s[n]);return r};import{o as q,r as p,u as $,j as t}from"./main-441.js";import{a8 as B,y as D}from"./bi.141.437.js";import{c as z,_ as c}from"./bi.452.0.js";import{S as A}from"./bi.239.13.js";import{C as G,g as H}from"./bi.73.3.js";import{u as y,U as O,C as J,R as K,c as Q}from"./bi.705.728.js";import{b as V}from"./bi.866.11.js";import{C as w}from"./bi.399.685.js";import{T as U,t as X}from"./bi.292.699.js";import"./bi.663.9.js";import"./bi.655.14.js";import"./bi.768.673.js";import"./bi.410.674.js";function me({formFields:r,setFlow:s,flow:n,allIntegURL:L}){var j,v;const{formID:g}=q(),[C,h]=p.useState({show:!1}),[N,R]=p.useState([]),S=$(),[b,f]=p.useState(!1),{registration:o}=X,[e,d]=p.useState({name:"WP User Registration",type:"WP User Registration",user_map:[{}],meta_map:[{}],condition:{action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]}});p.useEffect(()=>{var u,l;const a=m({},e);z({},"role/list",null,"GET").then(i=>{i!=null&&i.success&&i!==void 0&&R(Object.values(i==null?void 0:i.data))}),(l=(u=a==null?void 0:a.user_map)==null?void 0:u[0])!=null&&l.userField||(a.user_map=y.filter(i=>i.required).map(i=>({formField:"",userField:i.key,required:i.required}))),d(a)},[]);const T=()=>{if(!e.action_type){h({show:!0,msg:c("Please select action type","bit-integrations")});return}if(!e.user_role&&e.action_type!=="updated_user"){h({show:!0,msg:c("User Role can't be empty","bit-integrations")});return}if(!Q(e)&&e.action_type!=="updated_user"){h({show:!0,msg:c("Please map mandatory fields","bit-integrations")});return}f(!0),H(n,s,L,e,S,"","",f)},P=(a,u)=>{const l=m({},e);u?l.condition.action_behavior=a:l.condition.action_behavior="",d(l)},x=a=>{const u=m({},e),{name:l,value:i}=a.target;a.target.checked&&(u[l]=i),d(m({},u))},F=`
  <ul>
  <li>${c("The user must be logged in when updating profile","bit-integrations")}</li>
  <li>${c("The user cannot change the value of the username field when updating the user profile.","bit-integrations")}</li>
     
  </ul>`,I=`
  <ul>
  <li>${c("If the Username and Password fields are blank then the user will take the value of the email field as the field and the password will be auto-generated.","bit-integrations")}</li>
  </ul>`;return t.jsxs("div",{style:{width:900},children:[t.jsx(A,{snack:C,setSnackbar:h}),(o==null?void 0:o.youTubeLink)&&t.jsx(U,{title:"WP User Registration",youTubeLink:o==null?void 0:o.youTubeLink}),(o==null?void 0:o.docLink)&&t.jsx(U,{title:"WP User Registration",docLink:o==null?void 0:o.docLink}),t.jsx("br",{})," ",t.jsxs("div",{children:[t.jsx(w,{radio:!0,name:"action_type",onChange:x,checked:(e==null?void 0:e.action_type)==="new_user",value:"new_user",title:c("New User Create","bit-integrations")}),t.jsx(w,{radio:!0,name:"action_type",onChange:x,checked:(e==null?void 0:e.action_type)==="updated_user",value:"updated_user",title:c("Updated User","bit-integrations")})]}),t.jsx("br",{}),t.jsx("div",{children:t.jsx(O,{formFields:r,formID:g,userConf:e,setUserConf:d,roles:N,userFields:y})}),t.jsx("div",{children:t.jsx(J,{formFields:r,formID:g,userConf:e,setUserConf:d})}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:c("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(K,{userConf:e,setUserConf:d}),t.jsx("br",{}),t.jsx(B,{note:(e==null?void 0:e.action_type)==="updated_user"?F:I}),(e==null?void 0:e.condition)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flx",children:t.jsx(V,{onChange:a=>P(a.target.value,a.target.checked),checked:((j=e==null?void 0:e.condition)==null?void 0:j.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:c("Conditional Logics","bit_integration")})}),t.jsx("br",{}),((v=e==null?void 0:e.condition)==null?void 0:v.action_behavior)==="cond"&&t.jsx(G,{formFields:r,dataConf:e,setDataConf:d})]}),t.jsxs("button",{className:"btn f-left btcd-btn-lg purple sh-sm flx",type:"button",onClick:()=>T(),disabled:b,children:[c("Save","bit-integrations"),b&&t.jsx(D,{size:20,clr:"#022217",className:"ml-2"})]})]})}export{me as default};
