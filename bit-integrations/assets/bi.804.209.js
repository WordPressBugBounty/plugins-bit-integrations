var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var k=(e,i,s)=>i in e?T(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,d=(e,i)=>{for(var s in i||(i={}))_.call(i,s)&&k(e,s,i[s]);if(x)for(var s of x(i))L.call(i,s)&&k(e,s,i[s]);return e};import{r as j,j as t}from"./main-212.js";import{_ as a}from"./bi.717.0.js";import{z as S,a9 as P}from"./bi.894.440.js";import{a as f,g as w}from"./bi.434.785.js";import{T as y,t as K}from"./bi.600.737.js";import"./bi.303.9.js";function R({vboutConf:e,setVboutConf:i,step:s,setstep:A,loading:r,setLoading:m,setSnackbar:E,isInfo:l}){const[o,N]=j.useState(!1),[h,p]=j.useState({name:"",auth_token:""}),{vbout:n}=K,z=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,A(2),e.list_id||w(e,i,r,m)},b=c=>{const u=d({},e),g=d({},h);g[c.target.name]="",u[c.target.name]=c.target.value,p(g),i(u)},I=`
    <h4>${a("Step of get API Key:","bit-integrations")}</h4>
    <ul>
      <li>${a("Goto Settings and click on","bit-integrations")} <a href="https://app.vbout.com/Settings">${a("API Integrations","bit-integrations")}</a></li>
      <li>${a("Copy the <b>Key</b> and paste into <b>API Key</b> field of your authorization form.","bit-integrations")}</li>
      <li>${a("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(y,{title:"VBOUT",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(y,{title:"VBOUT",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:e.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l}),t.jsxs("small",{className:"d-blk mt-3",children:[a("To get API key, please visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.vbout.com/Settings",target:"_blank",rel:"noreferrer",children:a("Vbout API Key","bit-integrations")})]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:a("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"auth_token",value:e.auth_token,type:"text",placeholder:a("API Key...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.auth_token}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>f(e,i,p,N,r,m),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?a("Authorized ✔","bit-integrations"):a("Authorize","bit-integrations"),r.auth&&t.jsx(S,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:z,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[a("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{note:I})]})}export{R as default};
