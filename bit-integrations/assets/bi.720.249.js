var L=Object.defineProperty;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var j=(i,e,a)=>e in i?L(i,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[e]=a,c=(i,e)=>{for(var a in e||(e={}))T.call(e,a)&&j(i,a,e[a]);if(g)for(var a of g(e))z.call(e,a)&&j(i,a,e[a]);return i};import{r as p,j as t}from"./main-29.js";import{_ as s,L as I,N as w}from"./bi.860.15.js";import{k as E}from"./bi.497.841.js";import{T as k,t as S}from"./bi.244.714.js";function M({coppercrmConf:i,setCopperCRMConf:e,step:a,setStep:y,loading:r,setLoading:N,isInfo:l}){const[o,v]=p.useState(!1),[d,h]=p.useState({api_key:"",api_email:""}),{coppercrm:n}=S,_=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),i!=null&&i.default,y(2)},b=u=>{const m=c({},i),x=c({},d);x[u.target.name]="",m[u.target.name]=u.target.value,h(x),e(m)},A=`
  <h4>${s("Get api secret key","bit-integrations")}</h4>
  <ul>
      <li>${s("First go to your Copper dashboard.","bit-integrations")}</li>
      <li>${s("Then click Settings from Navbar.","bit-integrations")}</li>
      <li>${s('Click "Integrations", Then click "API Keys"',"bit-integrations")}</li>
  </ul>`;return t.jsxs("div",{className:"btcd-stp-page",style:{width:a===1&&900,height:a===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(k,{title:"Copper CRM",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(k,{title:"Copper CRM",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("bapi_email",{children:s("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"name",value:i.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:l}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("Your API Email:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_email",value:i.api_email,type:"text",placeholder:s("Your Company...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_email}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:s("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:b,name:"api_key",value:i.api_key,type:"text",placeholder:s("API Token...","bit-integrations"),disabled:l}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:d.api_key}),t.jsx("br",{}),t.jsx("br",{}),!l&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>E(i,e,h,v,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?s("Authorized ✔","bit-integrations"):s("Authorize","bit-integrations"),r.auth&&t.jsx(I,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:_,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[s("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]}),t.jsx(w,{note:A})]})}export{M as default};