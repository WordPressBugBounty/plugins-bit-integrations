var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(t,n,s)=>n in t?T(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,u=(t,n)=>{for(var s in n||(n={}))z.call(n,s)&&h(t,s,n[s]);if(x)for(var s of x(n))w.call(n,s)&&h(t,s,n[s]);return t};import{r as g,j as e}from"./main-556.js";import{_ as a}from"./bi.562.0.js";import{z as E}from"./bi.838.440.js";import{d as f}from"./bi.329.944.js";import{T as j,t as A}from"./bi.448.755.js";import"./bi.657.9.js";function q({mailsterConf:t,setMailsterConf:n,step:s,setStep:k,loading:o,setLoading:N,isInfo:l}){const[r,y]=g.useState(!1),[c,b]=g.useState({name:""}),{mailster:i}=A,L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},v=d=>{const m=u({},t),p=u({},c);p[d.target.name]="",m[d.target.name]=d.target.value,b(p),n(m)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(j,{title:"Mailster",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(j,{title:"Mailster",docLink:i==null?void 0:i.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:l}),c.name&&e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),e.jsx("br",{}),!l&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>f(t,n,b,y,o,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:r||o.auth,children:[r?a("Connected ✔","bit-integrations"):a("Connect to Mailster","bit-integrations"),o.auth&&e.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:L,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!r,children:[a("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{q as default};
