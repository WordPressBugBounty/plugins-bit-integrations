var T=Object.defineProperty;var g=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var p=(i,e,a)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,m=(i,e)=>{for(var a in e||(e={}))z.call(e,a)&&p(i,a,e[a]);if(g)for(var a of g(e))L.call(e,a)&&p(i,a,e[a]);return i};import{r as j,j as t}from"./main-814.js";import{_ as s}from"./bi.317.0.js";import{z as I,a8 as w}from"./bi.8.440.js";import{k as E}from"./bi.830.864.js";import{T as k,t as S}from"./bi.492.709.js";import"./bi.765.9.js";function Y({coppercrmConf:i,setCopperCRMConf:e,step:a,setStep:y,loading:r,setLoading:N,isInfo:l}){const[o,v]=j.useState(!1),[d,c]=j.useState({api_key:"",api_email:""}),{coppercrm:n}=S,_=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,y(2)},b=u=>{const h=m({},i),x=m({},d);x[u.target.name]="",h[u.target.name]=u.target.value,c(x),e(h)},A=`
  <h4>${s("Get api secret key","bit-integrations")}</h4>
  <ul>
      <li>${s("First go to your Copper dashboard.","bit-integrations")}</li>
      <li>${s("Then click Settings from Navbar.","bit-integrations")}</li>
      <li>${s('Click "Integrations", Then click "API Keys"',"bit-integrations")}</li>
  </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"Copper CRM",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"Copper CRM",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("bapi_email",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:i.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Your API Email:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_email",value:i.api_email,type:"text",placeholder:s("Your Company...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_email}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_key",value:i.api_key,type:"text",placeholder:s("API Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_key}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(i,e,c,v,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),r.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:_,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:A})]})}export{Y as default};
