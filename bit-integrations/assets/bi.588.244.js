var v=Object.defineProperty;var x=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var g=(e,i,s)=>i in e?v(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s,d=(e,i)=>{for(var s in i||(i={}))L.call(i,s)&&g(e,s,i[s]);if(x)for(var s of x(i))_.call(i,s)&&g(e,s,i[s]);return e};import{r as j,j as t}from"./main-29.js";import{_ as n,L as z}from"./bi.860.15.js";import{e as I}from"./bi.980.832.js";import{T as k,t as w}from"./bi.244.714.js";function G({asanaConf:e,setAsanaConf:i,step:s,setStep:y,loading:l,setLoading:N,isInfo:o}){const[a,A]=j.useState(!1),[m,b]=j.useState({api_key:""}),{asana:r}=w,T=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),e!=null&&e.default,y(2)},p=c=>{const u=d({},e),h=d({},m);h[c.target.name]="",u[c.target.name]=c.target.value,b(h),i(u)};return t.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&t.jsx(k,{title:"Asana",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&t.jsx(k,{title:"Asana",docLink:r==null?void 0:r.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"name",value:e.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:o}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:n("API Key:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:p,name:"api_key",value:e.api_key,type:"text",placeholder:n("API Token...","bit-integrations"),disabled:o}),t.jsx("div",{style:{color:"red",fontSize:"15px"},children:m.api_key}),t.jsxs("small",{className:"d-blk mt-3",children:[n("To Get API Token, Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://app.asana.com/0/my-apps",target:"_blank",rel:"noreferrer",children:n("Asana API Token","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),!o&&t.jsxs("div",{children:[t.jsxs("button",{onClick:()=>I(e,i,b,A,l,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:a||l.auth,children:[a?n("Authorized ✔","bit-integrations"):n("Authorize","bit-integrations"),l.auth&&t.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:T,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!a,children:[n("Next","bit-integrations"),t.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{G as default};
