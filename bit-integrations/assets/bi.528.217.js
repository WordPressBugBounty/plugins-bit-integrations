var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(s,i,a)=>i in s?z(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,b=(s,i)=>{for(var a in i||(i={}))v.call(i,a)&&g(s,a,i[a]);if(x)for(var a of x(i))I.call(i,a)&&g(s,a,i[a]);return s};import{r as k,j as t}from"./main-556.js";import{_ as e}from"./bi.562.0.js";import{z as L,a9 as P}from"./bi.838.440.js";import{a as _}from"./bi.555.708.js";import{T as j,t as w}from"./bi.448.755.js";import"./bi.657.9.js";function V({omniSendConf:s,setOmniSendConf:i,step:a,setstep:y,loading:r,setLoading:N,setSnackbar:E,isInfo:o}){const[l,T]=k.useState(!1),[m,d]=k.useState({name:"",api_key:""}),{omniSend:n}=w,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),y(2)},p=c=>{const u=b({},s),h=b({},m);h[c.target.name]="",u[c.target.name]=c.target.value,d(h),i(u)},f=`
    <h4>${e("Step of generate API token:","bit-integrations")}</h4>
    <ul>
      <li>${e("Goto","bit-integrations")} <a href="https://app.omnisend.com/o/my-account/integrations/api-keys">${e("Generate API Token","bit-integrations")}</a></li>
      <li>${e("Copy the <b>Token</b> and paste into <b>API Token</b> field of your authorization form.","bit-integrations")}</li>
      <li>${e("Finally, click <b>Authorize</b> button.","bit-integrations")}</li>
  </ul>
  `;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(j,{title:"Omnisend",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(j,{title:"Omnisend",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:s.name,type:"text",placeholder:e("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:e("API Token:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:s.api_key,type:"text",placeholder:e("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[e("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.omnisend.com/o/my-account/integrations/api-keys",target:"_blank",rel:"noreferrer",children:e("OmniSend API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>_(s,i,d,T,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:l||r.auth,children:[l?e("Authorized ✔","bit-integrations"):e("Authorize","bit-integrations"),r.auth&&t.jsx(L,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!l,children:[e("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(P,{note:f})]})}export{V as default};
