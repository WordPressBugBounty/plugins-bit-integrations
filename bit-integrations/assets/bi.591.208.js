var z=Object.defineProperty;var g=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var j=(t,i,n)=>i in t?z(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,b=(t,i)=>{for(var n in i||(i={}))f.call(i,n)&&j(t,n,i[n]);if(g)for(var n of g(i))I.call(i,n)&&j(t,n,i[n]);return t};import{r as k,j as e}from"./main-270.js";import{_ as s}from"./bi.340.0.js";import{z as M,a9 as P}from"./bi.88.440.js";import{m as _}from"./bi.870.788.js";import{T as v,t as S}from"./bi.104.742.js";import"./bi.724.9.js";function D({mailerLiteConf:t,setMailerLiteConf:i,step:n,setstep:N,loading:o,setLoading:y,setSnackbar:E,isInfo:l}){const[c,T]=k.useState(!1),[h,u]=k.useState({name:"",auth_token:""}),{mailerLite:a}=S,m=t.version==="v2"?"https://dashboard.mailerlite.com/integrations/api":"https://app.mailerlite.com/integrations/api/",A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,N(2)},r=d=>{const p=b({},t),x=b({},h);x[d.target.name]="",p[d.target.name]=d.target.value,u(x),i(p)},w=`
    <h4>${s("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${s("Goto","bit-integrations")} <a href=${m}>Generate API Token</a></li>
      <li>${s("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${s("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return e.jsxs("div",{className:"btcd-stp-page",style:{width:n===1&&900,height:n===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(v,{title:"MailerLite",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(v,{title:"MailerLite",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"name",value:t.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:l}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("Select Version:")})}),e.jsxs("div",{className:"flex items-center w-6 mt-3",children:[e.jsx("input",{id:"MailerLiteClassic",type:"radio",name:"version",value:"v1",className:"hidden",checked:t.version==="v1",onChange:r}),e.jsxs("label",{for:"MailerLiteClassic",children:[e.jsx("span",{className:"w-4 h-4 inline-block mr-1 border border-grey"}),"MailerLite Classic"]})]}),e.jsxs("div",{className:"flex items-center mr-4 mt-2 mb-4",children:[e.jsx("input",{id:"MailerLiteNew",type:"radio",name:"version",value:"v2",className:"hidden",checked:t.version==="v2",onChange:r}),e.jsxs("label",{for:"MailerLiteNew",children:[e.jsx("span",{className:"w-4 h-4 inline-block mr-1 border border-grey"}),"MailerLite New"]})]}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:s("API Token:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:r,name:"auth_token",value:t.auth_token,type:"text",placeholder:s("API Token...","bit-integrations"),disabled:l}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:h.auth_token}),e.jsxs("small",{className:"d-blk mt-3",children:[s("To Get API Token, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:m,target:"_blank",rel:"noreferrer",children:s("MailerLite API Token","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!l&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>_(t,i,u,T,o,y,"authorization"),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||o.auth||t.version===void 0||t.version==="",children:[c?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),o.auth&&e.jsx(M,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[s("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),e.jsx(P,{note:w})]})}export{D as default};
