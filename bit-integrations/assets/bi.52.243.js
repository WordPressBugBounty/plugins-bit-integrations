var T=Object.defineProperty;var j=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var h=(t,a,r)=>a in t?T(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,p=(t,a)=>{for(var r in a||(a={}))I.call(a,r)&&h(t,r,a[r]);if(j)for(var r of j(a))L.call(a,r)&&h(t,r,a[r]);return t};import{r as k,j as e}from"./main-777.js";import{_ as i}from"./bi.157.0.js";import{z}from"./bi.463.440.js";import{k as w}from"./bi.107.848.js";import{T as N,t as P}from"./bi.805.709.js";import"./bi.681.9.js";function B({insightlyConf:t,setInsightlyConf:a,step:r,setStep:g,loading:l,setLoading:_,isInfo:n}){const[o,v]=k.useState(!1),[c,u]=k.useState({api_key:"",api_url:""}),{insightly:s}=P,A=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,g(2)},d=m=>{const b=p({},t),x=p({},c);x[m.target.name]="",b[m.target.name]=m.target.value,u(x),a(b)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:r===1&&900,height:r===1&&"auto"},children:[(s==null?void 0:s.youTubeLink)&&e.jsx(N,{title:"Insightly",youTubeLink:s==null?void 0:s.youTubeLink}),(s==null?void 0:s.docLink)&&e.jsx(N,{title:"Insightly",docLink:s==null?void 0:s.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:n}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Your API URL:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_url",value:t.api_url,type:"text",placeholder:i("Your Organisation...","bit-integrations"),disabled:n}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.api_url}),e.jsx("small",{className:"d-blk mt-3",children:i("Example: {name}.insightly.com","bit-integrations")}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("API Key:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:d,name:"api_key",value:t.api_key,type:"text",placeholder:i("API Token...","bit-integrations"),disabled:n}),e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.api_key}),t.api_url&&e.jsxs("small",{className:"d-blk mt-3",children:[i("To Get API Token, Please Visit","bit-integrations")," ",e.jsx("a",{className:"btcd-link",href:`https://crm.${t.api_url}/Users/UserSettings#`,target:"_blank",rel:"noreferrer",children:i("Insightly API Token","bit-integrations")})]}),e.jsx("br",{}),e.jsx("br",{}),!n&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>w(t,a,u,v,l,_),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||l.auth,children:[o?i("Authorized ✔","bit-integrations"):i("Authorize","bit-integrations"),l.auth&&e.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:A,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[i("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{B as default};
