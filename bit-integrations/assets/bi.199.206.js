var L=Object.defineProperty;var x=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(e,i,a)=>i in e?L(e,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[i]=a,d=(e,i)=>{for(var a in i||(i={}))T.call(i,a)&&k(e,a,i[a]);if(x)for(var a of x(i))_.call(i,a)&&k(e,a,i[a]);return e};import{r as j,j as t}from"./main-650.js";import{_ as s,L as S,N as P}from"./bi.541.15.js";import{a as f,g as w}from"./bi.685.751.js";import{T as y,t as K}from"./bi.770.713.js";function F({vboutConf:e,setVboutConf:i,step:a,setstep:N,loading:r,setLoading:m,setSnackbar:E,isInfo:l}){const[o,A]=j.useState(!1),[h,p]=j.useState({name:"",auth_token:""}),{vbout:n}=K,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,N(2),e.list_id||w(e,i,r,m)},b=c=>{const u=d({},e),g=d({},h);g[c.target.name]="",u[c.target.name]=c.target.value,p(g),i(u)},I=`
    <h4>${s("Step of get API Key:","bit-integrations")}</h4>
    <ul>
      <li>${s("Goto Settings and click on","bit-integrations")} <a href="https://app.vbout.com/Settings">${s("API Integrations","bit-integrations")}</a></li>
      <li>${s("Copy the <b>Key</b> and paste into <b>API Key</b> field of your authorization form.","bit-integrations")}</li>
      <li>${s("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(y,{title:"VBOUT",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(y,{title:"VBOUT",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:l}),t.jsxs("small",{className:"d-blk mt-3",children:[s("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.vbout.com/Settings",target:"_blank",rel:"noreferrer",children:s("Vbout API Key","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"auth_token",value:e.auth_token,type:"text",placeholder:s("API Key...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.auth_token}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>f(e,i,p,A,r,m),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),r.auth&&t.jsx(S,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:z,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{note:I})]})}export{F as default};
