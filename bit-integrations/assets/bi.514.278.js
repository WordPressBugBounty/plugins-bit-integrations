var w=Object.defineProperty;var x=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var h=(t,i,s)=>i in t?w(t,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[i]=s,m=(t,i)=>{for(var s in i||(i={}))z.call(i,s)&&h(t,s,i[s]);if(x)for(var s of x(i))E.call(i,s)&&h(t,s,i[s]);return t};import{r as g,j as e}from"./main-830.js";import{_ as r,L as f}from"./bi.597.15.js";import{e as A}from"./bi.602.896.js";import{T as j,t as D}from"./bi.972.713.js";function P({dokanConf:t,setDokanConf:i,step:s,setStep:L,loading:a,setLoading:N,isInfo:u}){const[c,y]=g.useState(!1),[o,b]=g.useState({name:""}),{dokan:n}=D,v=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,L(2)},T=l=>{const d=m({},t),p=m({},o);p[l.target.name]="",d[l.target.name]=l.target.value,b(p),i(d)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&e.jsx(j,{title:"Dokan",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&e.jsx(j,{title:"Dokan",docLink:n==null?void 0:n.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:r("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:T,name:"name",value:t.name,type:"text",placeholder:r("Integration Name...","bit-integrations"),disabled:u}),o.name&&e.jsx("div",{style:{color:"red",fontSize:"15px"},children:o.name}),e.jsx("br",{}),!u&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>A(t,b,y,a,N),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||a.auth,children:[c?r("Connected ✔","bit-integrations"):r("Connect to Dokan","bit-integrations"),a.auth&&e.jsx(f,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:v,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[r("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{P as default};
