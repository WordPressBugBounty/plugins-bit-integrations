var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(e,s,a)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,d=(e,s)=>{for(var a in s||(s={}))T.call(s,a)&&j(e,a,s[a]);if(g)for(var a of g(s))P.call(s,a)&&j(e,a,s[a]);return e};import{r as y,j as t}from"./main-29.js";import{_ as n,L as E,N as U}from"./bi.860.15.js";import{b as $,a as f}from"./bi.776.675.js";import{T as N,t as S}from"./bi.244.714.js";function I({rapidmailConf:e,setRapidmailConf:s,step:a,setstep:w,isLoading:u,setIsLoading:m,setSnackbar:v,isInfo:r}){const[o,k]=y.useState(!1),[l,h]=y.useState({username:"",password:""}),{rapidmail:i}=S,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!(e!=null&&e.default)&&f(e,s,m),w(2)},c=b=>{const p=d({},e),x=d({},l);x[b.target.name]="",p[b.target.name]=b.target.value,h(x),s(p)},A=`
    <h4>${n("Step of creating username and password:","bit-integrations")}</h4>
    <ul>
      <li>${n("Goto","bit-integrations")}Goto <a href="https://my.rapidmail.com/api/v3/userlist.html#/">Generate API User</a> and create an api user.</li>
      <li>${n("Copy the <b>Username</b> and paste into <b>Username</b> field of your authorization form.","bit-integrations")}</li>
      <li>${n("Copy the <b>Password</b> and paste into <b>Password</b> field of your authorization form.","bit-integrations")}</li>
      <li>${n("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&t.jsx(N,{title:"Rapidmail",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&t.jsx(N,{title:"Rapidmail",docLink:i==null?void 0:i.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("User Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"username",value:e.username,type:"text",placeholder:n("User Name...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:l.username}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Password:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"password",value:e.password,type:"text",placeholder:n("Password...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:l.password}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>$(e,s,h,k,m,v),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||u,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),u&&t.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:z,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(U,{note:A})]})}export{I as default};