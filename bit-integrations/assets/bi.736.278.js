var S=Object.defineProperty;var b=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var h=(t,a,i)=>a in t?S(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i,d=(t,a)=>{for(var i in a||(a={}))T.call(a,i)&&h(t,i,a[i]);if(b)for(var i of b(a))z.call(a,i)&&h(t,i,a[i]);return t};import{r as g,j as n}from"./main-814.js";import{_ as o}from"./bi.317.0.js";import{z as f}from"./bi.8.440.js";import{s as w}from"./bi.332.913.js";import{T as j,t as E}from"./bi.492.709.js";import"./bi.765.9.js";function D({sureMembersConf:t,setSureMembersConf:a,step:i,setStep:k,loading:s,setLoading:N,isInfo:m}){const[r,y]=g.useState(!1),[c,p]=g.useState({name:""}),{sureMembers:e}=E,L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},v=l=>{const u=d({},t),x=d({},c);x[l.target.name]="",u[l.target.name]=l.target.value,p(x),a(u)};return n.jsxs("div",{className:"btcd-stp-page",style:{width:i===1&&900,height:i===1&&"auto"},children:[(e==null?void 0:e.youTubeLink)&&n.jsx(j,{title:"SureMembers",youTubeLink:e==null?void 0:e.youTubeLink}),(e==null?void 0:e.docLink)&&n.jsx(j,{title:"SureMembers",docLink:e==null?void 0:e.docLink}),n.jsx("div",{className:"mt-3",children:n.jsx("b",{children:o("Integration Name:","bit-integrations")})}),n.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"name",value:t.name,type:"text",placeholder:o("Integration Name...","bit-integrations"),disabled:m}),c.name&&n.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),n.jsx("br",{}),!m&&n.jsxs("div",{children:[n.jsxs("button",{onClick:()=>w(t,p,y,s,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:r||s.auth,children:[r?o("Connected ✔","bit-integrations"):o("Connect to SureMembers","bit-integrations"),s.auth&&n.jsx(f,{size:"20",clr:"#022217",className:"ml-2"})]}),n.jsx("br",{}),n.jsxs("button",{onClick:L,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!r,children:[o("Next","bit-integrations"),n.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{D as default};
