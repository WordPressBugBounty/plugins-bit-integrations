var P=Object.defineProperty;var k=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(r,a,s)=>a in r?P(r,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[a]=s,p=(r,a)=>{for(var s in a||(a={}))E.call(a,s)&&v(r,s,a[s]);if(k)for(var s of k(a))M.call(a,s)&&v(r,s,a[s]);return r};import{u as q,o as A,r as h,e as w,f as z,j as e}from"./main-794.js";import{a9 as B,z as D}from"./bi.266.440.js";import{$ as W,g as H,f as G,_ as o}from"./bi.828.0.js";import{S as J}from"./bi.961.13.js";import{S as K,C as O,s as Q}from"./bi.499.3.js";import{u as y,U as V,C as X,R as Y,c as Z}from"./bi.395.760.js";import{b as ee}from"./bi.690.11.js";import{C as U}from"./bi.870.717.js";import{T as L,t as te}from"./bi.510.749.js";import"./bi.685.9.js";import"./bi.811.14.js";import"./bi.257.704.js";import"./bi.35.705.js";function fe({allIntegURL:r}){var j,_;const a=q(),{formID:s}=A(),[C,u]=h.useState({show:!1}),[F,se]=h.useState([]),[x,N]=h.useState(!1),[f,R]=w(W),b=z(H),[t,d]=w(G),{registration:n}=te;h.useEffect(()=>{var l,c;const i=p({},t);(c=(l=i==null?void 0:i.user_map)==null?void 0:l[0])!=null&&c.userField||(i.user_map=y.filter(m=>m.required).map(m=>({formField:"",userField:m.key,required:m.required}))),d(i)},[]);const S=()=>{if(!t.action_type){u({show:!0,msg:o("Please select action type","bit-integrations")});return}if(!t.user_role&&t.action_type!=="updated_user"){u({show:!0,msg:o("User Role can't be empty","bit-integrations")});return}if(!Z(t)&&t.action_type!=="updated_user"){u({show:!0,msg:o("Please map mandatory fields","bit-integrations")});return}Q({flow:f,setFlow:R,allIntegURL:r,conf:t,navigate:a,edit:1,setIsLoading:N,setSnackbar:u})},T=(i,l)=>{const c=p({},t);l?c.condition.action_behavior=i:c.condition.action_behavior="",d(c)},g=i=>{const l=p({},t),{name:c,value:m}=i.target;i.target.checked&&(l[c]=m),d(p({},l))},$=`
  <ul>
  <li>${o("The user must be logged in when updating profile","bit-integrations")}</li>
  <li>${o("The user cannot change the value of the username field when updating the user profile.","bit-integrations")}</li>
     
  </ul>`,I=`
  <ul>
  <li>${o("If the Username and Password fields are blank then the user will take the value of the email field as the field and the password will be auto-generated.","bit-integrations")}</li>  
  </ul>`;return e.jsxs("div",{style:{width:900},children:[e.jsx(J,{snack:C,setSnackbar:u}),(n==null?void 0:n.youTubeLink)&&e.jsx(L,{title:"WP User Registration",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(L,{title:"WP User Registration",docLink:n==null?void 0:n.docLink}),e.jsx("br",{}),e.jsx("br",{}),e.jsx(K,{entity:f.triggered_entity,setSnackbar:u}),e.jsxs("div",{className:"flx mt-3",children:[e.jsx("div",{className:"wdt-200 d-in-b",children:o("Action type","bit-integrations")}),e.jsx(U,{radio:!0,name:"action_type",onChange:g,checked:(t==null?void 0:t.action_type)==="new_user",value:"new_user",title:o("New User Create","bit-integrations")}),e.jsx(U,{radio:!0,name:"action_type",onChange:g,checked:(t==null?void 0:t.action_type)==="updated_user",value:"updated_user",title:o("Updated User","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx(V,{formFields:b,formID:s,userConf:t,setUserConf:d,roles:F,userFields:y}),e.jsx("br",{})]}),e.jsxs("div",{children:[e.jsx(X,{formFields:b,formID:s,userConf:t,setUserConf:d}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:o("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Y,{userConf:t,setUserConf:d}),e.jsx("br",{}),e.jsx(B,{note:(t==null?void 0:t.action_type)==="updated_user"?$:I}),(t==null?void 0:t.condition)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flx",children:e.jsx(ee,{onChange:i=>T(i.target.value,i.target.checked),checked:((j=t==null?void 0:t.condition)==null?void 0:j.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:o("Conditional Logics","bit_integration")})}),e.jsx("br",{}),((_=t==null?void 0:t.condition)==null?void 0:_.action_behavior)==="cond"&&e.jsx(O,{formFields:b,dataConf:t,setDataConf:d})]}),e.jsxs("button",{className:"btn f-left btcd-btn-lg purple sh-sm flx",type:"button",onClick:S,disabled:x,children:[o("Update","bit-integrations"),x&&e.jsx(D,{size:20,clr:"#022217",className:"ml-2"})]})]})}export{fe as default};
