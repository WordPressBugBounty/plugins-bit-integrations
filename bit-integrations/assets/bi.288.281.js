var T=Object.defineProperty;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(t,n,s)=>n in t?T(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,o=(t,n)=>{for(var s in n||(n={}))z.call(n,s)&&g(t,s,n[s]);if(h)for(var s of h(n))E.call(n,s)&&g(t,s,n[s]);return t};import{r as j,j as e}from"./main-246.js";import{_ as a}from"./bi.560.0.js";import{z as A}from"./bi.675.443.js";import{f as I}from"./bi.545.958.js";import{T as p,t as S}from"./bi.142.765.js";import"./bi.947.9.js";function D({wpforoConf:t,setWPForoConf:n,step:s,setStep:k,loading:r,setLoading:N,isInfo:d}){const[c,y]=j.useState(!1),[l,u]=j.useState({name:""}),{wpforo:i}=S,L=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},v=m=>{const b=o({},t),x=o({},l);x[m.target.name]="",b[m.target.name]=m.target.value,u(x),n(b)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(i==null?void 0:i.youTubeLink)&&e.jsx(p,{title:"wpforo",youTubeLink:i==null?void 0:i.youTubeLink}),(i==null?void 0:i.docLink)&&e.jsx(p,{title:"wpforo",docLink:i==null?void 0:i.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:a("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"name",value:t.name,type:"text",placeholder:a("Integration Name...","bit-integrations"),disabled:d}),l.name&&e.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.name}),e.jsx("br",{}),!d&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>I(t,u,y,r,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||r.auth,children:[c?a("Connected ✔","bit-integrations"):a("Connect to WPForo","bit-integrations"),r.auth&&e.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:L,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[a("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{D as default};
