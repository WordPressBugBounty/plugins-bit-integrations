var E=Object.defineProperty;var _=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var k=(c,s,n)=>s in c?E(c,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[s]=n,m=(c,s)=>{for(var n in s||(s={}))M.call(s,n)&&k(c,n,s[n]);if(_)for(var n of _(s))W.call(s,n)&&k(c,n,s[n]);return c};import{l as q,r as h,u as D,j as t}from"./main-650.js";import{b as $,_ as r,d as B,N as z,m as A,D as G,L as H,F as O}from"./bi.541.15.js";import{u as y,U as J,C as K,R as Q,c as V}from"./bi.906.714.js";import{C as w}from"./bi.845.672.js";import{T as U,t as X}from"./bi.770.713.js";import"./bi.619.660.js";import"./bi.119.661.js";function oe({formFields:c,setFlow:s,flow:n,allIntegURL:L}){var j,v;const{formID:g}=q(),[N,p]=h.useState({show:!1}),[R,C]=h.useState([]),T=D(),[b,x]=h.useState(!1),{registration:o}=X,[e,d]=h.useState({name:"WP User Registration",type:"WP User Registration",user_map:[{}],meta_map:[{}],condition:{action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]}});h.useEffect(()=>{var u,l;const a=m({},e);$({},"role/list",null,"GET").then(i=>{i!=null&&i.success&&i!==void 0&&C(Object.values(i==null?void 0:i.data))}),(l=(u=a==null?void 0:a.user_map)==null?void 0:u[0])!=null&&l.userField||(a.user_map=y.filter(i=>i.required).map(i=>({formField:"",userField:i.key,required:i.required}))),d(a)},[]);const F=()=>{if(!e.action_type){p({show:!0,msg:r("Please select action type","bit-integrations")});return}if(!e.user_role&&e.action_type!=="updated_user"){p({show:!0,msg:r("User Role can't be empty","bit-integrations")});return}if(!V(e)&&e.action_type!=="updated_user"){p({show:!0,msg:r("Please map mandatory fields","bit-integrations")});return}x(!0),O(n,s,L,e,T,"","",x)},P=(a,u)=>{const l=m({},e);u?l.condition.action_behavior=a:l.condition.action_behavior="",d(l)},f=a=>{const u=m({},e),{name:l,value:i}=a.target;a.target.checked&&(u[l]=i),d(m({},u))},S=`
  <ul>
  <li>${r("The user must be logged in when updating profile","bit-integrations")}</li>
  <li>${r("The user cannot change the value of the username field when updating the user profile.","bit-integrations")}</li>
     
  </ul>`,I=`
  <ul>
  <li>${r("If the Username and Password fields are blank then the user will take the value of the email field as the field and the password will be auto-generated.","bit-integrations")}</li>
  </ul>`;return t.jsxs("div",{style:{width:900},children:[t.jsx(B,{snack:N,setSnackbar:p}),(o==null?void 0:o.youTubeLink)&&t.jsx(U,{title:"WP User Registration",youTubeLink:o==null?void 0:o.youTubeLink}),(o==null?void 0:o.docLink)&&t.jsx(U,{title:"WP User Registration",docLink:o==null?void 0:o.docLink}),t.jsx("br",{})," ",t.jsxs("div",{children:[t.jsx(w,{radio:!0,name:"action_type",onChange:f,checked:(e==null?void 0:e.action_type)==="new_user",value:"new_user",title:r("New User Create","bit-integrations")}),t.jsx(w,{radio:!0,name:"action_type",onChange:f,checked:(e==null?void 0:e.action_type)==="updated_user",value:"updated_user",title:r("Updated User","bit-integrations")})]}),t.jsx("br",{}),t.jsx("div",{children:t.jsx(J,{formFields:c,formID:g,userConf:e,setUserConf:d,roles:R,userFields:y})}),t.jsx("div",{children:t.jsx(K,{formFields:c,formID:g,userConf:e,setUserConf:d})}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:r("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(Q,{userConf:e,setUserConf:d}),t.jsx("br",{}),t.jsx(z,{note:(e==null?void 0:e.action_type)==="updated_user"?S:I}),(e==null?void 0:e.condition)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flx",children:t.jsx(A,{onChange:a=>P(a.target.value,a.target.checked),checked:((j=e==null?void 0:e.condition)==null?void 0:j.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:r("Conditional Logics","bit_integration")})}),t.jsx("br",{}),((v=e==null?void 0:e.condition)==null?void 0:v.action_behavior)==="cond"&&t.jsx(G,{formFields:c,dataConf:e,setDataConf:d})]}),t.jsxs("button",{className:"btn f-left btcd-btn-lg purple sh-sm flx",type:"button",onClick:()=>F(),disabled:b,children:[r("Save","bit-integrations"),b&&t.jsx(H,{size:20,clr:"#022217",className:"ml-2"})]})]})}export{oe as default};
