var f=Object.defineProperty;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var g=(t,n,s)=>n in t?f(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,d=(t,n)=>{for(var s in n||(n={}))z.call(n,s)&&g(t,s,n[s]);if(h)for(var s of h(n))w.call(n,s)&&g(t,s,n[s]);return t};import{r as j,j as e}from"./main-425.js";import{_ as a}from"./bi.107.0.js";import{z as E}from"./bi.900.437.js";import{f as A}from"./bi.368.922.js";import{T as x,t as I}from"./bi.775.701.js";import"./bi.814.9.js";function D({voxelConf:t,setVoxelConf:n,step:s,setStep:k,loading:r,setLoading:N,isInfo:l}){const[o,y]=j.useState(!1),[c,u]=j.useState({name:""}),{voxel:i}=I,L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},T=m=>{const b=d({},t),p=d({},c);p[m.target.name]="",b[m.target.name]=m.target.value,u(p),n(b)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(x,{title:"Voxel",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(x,{title:"Voxel",docLink:i==null?void 0:i.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:T,name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l}),c.name&&e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),e.jsx("br",{}),!l&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>A(t,u,y,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||r.auth,children:[o?a("Connected ✔","bit-integrations"):a("Connect to Voxel","bit-integrations"),r.auth&&e.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:L,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[a("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{D as default};
