var f=Object.defineProperty;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(t,a,e)=>a in t?f(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,m=(t,a)=>{for(var e in a||(a={}))j.call(a,e)&&h(t,e,a[e]);if(x)for(var e of x(a))w.call(a,e)&&h(t,e,a[e]);return t};import{r as k,j as s}from"./main-955.js";import{_ as i}from"./bi.223.0.js";import{x as z}from"./bi.326.431.js";import{k as A}from"./bi.953.900.js";import{T as N,t as I}from"./bi.701.706.js";import"./bi.696.9.js";function D({jetEngineConf:t,setJetEngineConf:a,step:e,setStep:y,loading:o,setLoading:L,isInfo:d}){const[n,v]=k.useState(!1),[c,u]=k.useState({name:""}),{jetEngine:r}=I,g=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,y(2)},T=l=>{const b=m({},t),p=m({},c);p[l.target.name]="",b[l.target.name]=l.target.value,u(p),a(b)};return s.jsxs("div",{className:"btcd-stp-page",style:{width:e===1&&900,height:e===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&s.jsx(N,{title:"jet Engine",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&s.jsx(N,{title:"jet Engine",docLink:r==null?void 0:r.docLink}),s.jsx("div",{className:"mt-3",children:s.jsx("b",{children:i("Integration Name:","bit-integrations")})}),s.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:T,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:d}),c.name&&s.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),s.jsx("br",{}),!d&&s.jsxs("div",{children:[s.jsxs("button",{onClick:()=>A(t,u,v,o,L),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:n||o.auth,children:[n?i("Connected ✔","bit-integrations"):i("Connect to JetEngine","bit-integrations"),o.auth&&s.jsx(z,{size:"20",clr:"#022217",className:"ml-2"})]}),s.jsx("br",{}),s.jsxs("button",{onClick:g,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!n,children:[i("Next","bit-integrations"),s.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{D as default};