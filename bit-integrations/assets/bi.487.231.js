var P=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var g=(t,i,s)=>i in t?P(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,p=(t,i)=>{for(var s in i||(i={}))z.call(i,s)&&g(t,s,i[s]);if(x)for(var s of x(i))S.call(i,s)&&g(t,s,i[s]);return t};import{r as j,j as e}from"./main-404.js";import{_ as n}from"./bi.51.0.js";import{z as I,a8 as T}from"./bi.613.437.js";import{s as L}from"./bi.508.817.js";import{T as w,t as $}from"./bi.116.700.js";import"./bi.964.9.js";function R({smailyConf:t,setSmailyConf:i,step:s,setStep:_,loading:l,setLoading:N,isInfo:r}){const[c,k]=j.useState(!1),[o,b]=j.useState({name:"",subdomain:"",api_user_name:"",api_user_password:""}),{smaily:a}=$,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,_(2)},d=u=>{const m=p({},t),h=p({},o);h[u.target.name]="",m[u.target.name]=u.target.value,b(h),i(m)},A=`<h4>${n("To create API username and password, do the following.","bit-integrations")}</h4>
  <ol>
  <li>${n("Click on your","bit-integrations")} <a href="https://www.sendsmaily.net/account/login/" target="_blank">account</a>${n("name in the upper right corner of the page.","bit-integrations")}</li>
  <li>${n("From a dropdown menu choose “Preferences”.","bit-integrations")}</li>
  <li>${n("Click on the “Integrations” tab.","bit-integrations")}</li>
  <li>${n("And then underneath API Passwords click on “Create a new user”.","bit-integrations")}</li>
  </ol>`;return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(w,{title:"Smaily",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(w,{title:"Smaily",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.name}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Subdomain Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"subdomain",value:t.subdomain,type:"text",placeholder:n("Your Account","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.subdomain}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("API User Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_user_name",value:t.api_user_name,type:"text",placeholder:n("API user name...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.api_user_name}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("API User Password:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_user_password",value:t.api_user_password,type:"text",placeholder:n("API user password...","bit-integrations"),disabled:r}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.api_user_password}),t.subdomain&&e.jsxs("small",{className:"d-blk mt-3",children:[n("To Get subdomain, API user name and password Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://${t.subdomain}.sendsmaily.net/account/profile/#api`,target:"_blank",rel:"noreferrer",children:n("Smaily API Token","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!r&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>L(t,i,b,k,l,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l.auth,children:[c?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),l.auth&&e.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[n("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(T,{note:A})]})}export{R as default};
