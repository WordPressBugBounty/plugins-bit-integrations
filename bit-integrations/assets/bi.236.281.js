var z=Object.defineProperty;var x=Object.getOwnPropertySymbols;var f=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var h=(t,i,s)=>i in t?z(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,m=(t,i)=>{for(var s in i||(i={}))f.call(i,s)&&h(t,s,i[s]);if(x)for(var s of x(i))w.call(i,s)&&h(t,s,i[s]);return t};import{r as g,j as e}from"./main-556.js";import{_ as n}from"./bi.562.0.js";import{z as E}from"./bi.838.440.js";import{e as A}from"./bi.428.949.js";import{T as j,t as D}from"./bi.448.755.js";import"./bi.657.9.js";function q({dokanConf:t,setDokanConf:i,step:s,setStep:N,loading:a,setLoading:y,isInfo:u}){const[o,L]=g.useState(!1),[c,b]=g.useState({name:""}),{dokan:r}=D,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,N(2)},T=l=>{const p=m({},t),d=m({},c);d[l.target.name]="",p[l.target.name]=l.target.value,b(d),i(p)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(r==null?void 0:r.youTubeLink)&&e.jsx(j,{title:"Dokan",youTubeLink:r==null?void 0:r.youTubeLink}),(r==null?void 0:r.docLink)&&e.jsx(j,{title:"Dokan",docLink:r==null?void 0:r.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:n("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:T,name:"name",value:t.name,type:"text",placeholder:n("Integration Name...","bit-integrations"),disabled:u}),c.name&&e.jsx("div",{style:{color:"red",fontSize:"15px"},children:c.name}),e.jsx("br",{}),!u&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>A(t,b,L,a,y),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:o||a.auth,children:[o?n("Connected ✔","bit-integrations"):n("Connect to Dokan","bit-integrations"),a.auth&&e.jsx(E,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!o,children:[n("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{q as default};
