var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var j=(e,s,i)=>s in e?L(e,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[s]=i,d=(e,s)=>{for(var i in s||(s={}))T.call(s,i)&&j(e,i,s[i]);if(g)for(var i of g(s))P.call(s,i)&&j(e,i,s[i]);return e};import{r as y,j as t}from"./main-263.js";import{_ as n}from"./bi.924.0.js";import{y as f,a8 as E}from"./bi.361.434.js";import{b as U,a as $}from"./bi.590.682.js";import{T as N,t as S}from"./bi.372.711.js";import"./bi.402.9.js";function D({rapidmailConf:e,setRapidmailConf:s,step:i,setstep:w,isLoading:u,setIsLoading:m,setSnackbar:v,isInfo:r}){const[o,k]=y.useState(!1),[l,h]=y.useState({username:"",password:""}),{rapidmail:a}=S,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),!(e!=null&&e.default)&&$(e,s,m),w(2)},c=b=>{const p=d({},e),x=d({},l);x[b.target.name]="",p[b.target.name]=b.target.value,h(x),s(p)},A=`
    <h4>${n("Step of creating username and password:","bit-integrations")}</h4>
    <ul>
      <li>${n("Goto","bit-integrations")}Goto <a href="https://my.rapidmail.com/api/v3/userlist.html#/">Generate API User</a> and create an api user.</li>
      <li>${n("Copy the <b>Username</b> and paste into <b>Username</b> field of your authorization form.","bit-integrations")}</li>
      <li>${n("Copy the <b>Password</b> and paste into <b>Password</b> field of your authorization form.","bit-integrations")}</li>
      <li>${n("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&t.jsx(N,{title:"Rapidmail",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&t.jsx(N,{title:"Rapidmail",docLink:a==null?void 0:a.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:r}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("User Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"username",value:e.username,type:"text",placeholder:n("User Name...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:l.username}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Password:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:c,name:"password",value:e.password,type:"text",placeholder:n("Password...","bit-integrations"),disabled:r}),t.jsx("div",{style:{color:"red"},children:l.password}),!r&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>U(e,s,h,k,m,v),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||u,children:[o?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),u&&t.jsx(f,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:z,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(E,{note:A})]})}export{D as default};
