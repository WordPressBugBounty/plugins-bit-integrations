var T=Object.defineProperty;var h=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(t,n,s)=>n in t?T(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,m=(t,n)=>{for(var s in n||(n={}))z.call(n,s)&&g(t,s,n[s]);if(h)for(var s of h(n))E.call(n,s)&&g(t,s,n[s]);return t};import{r as j,j as e}from"./main-650.js";import{_ as i,L as A}from"./bi.541.15.js";import{f as I}from"./bi.425.894.js";import{T as p,t as S}from"./bi.770.713.js";function R({wpforoConf:t,setWPForoConf:n,step:s,setStep:k,loading:r,setLoading:L,isInfo:o}){const[c,N]=j.useState(!1),[l,u]=j.useState({name:""}),{wpforo:a}=S,y=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),t!=null&&t.default,k(2)},v=d=>{const b=m({},t),x=m({},l);x[d.target.name]="",b[d.target.name]=d.target.value,u(x),n(b)};return e.jsxs("div",{className:"btcd-stp-page",style:{width:s===1&&900,height:s===1&&"auto"},children:[(a==null?void 0:a.youTubeLink)&&e.jsx(p,{title:"wpforo",youTubeLink:a==null?void 0:a.youTubeLink}),(a==null?void 0:a.docLink)&&e.jsx(p,{title:"wpforo",docLink:a==null?void 0:a.docLink}),e.jsx("div",{className:"mt-3",children:e.jsx("b",{children:i("Integration Name:","bit-integrations")})}),e.jsx("input",{className:"btcd-paper-inp w-6 mt-1",onChange:v,name:"name",value:t.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:o}),l.name&&e.jsx("div",{style:{color:"red",fontSize:"15px"},children:l.name}),e.jsx("br",{}),!o&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>I(t,u,N,r,L),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||r.auth,children:[c?i("Connected ✔","bit-integrations"):i("Connect to WPForo","bit-integrations"),r.auth&&e.jsx(A,{size:"20",clr:"#022217",className:"ml-2"})]}),e.jsx("br",{}),e.jsxs("button",{onClick:y,className:"btn ml-auto btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[i("Next","bit-integrations"),e.jsx("div",{className:"btcd-icn icn-arrow_back rev-icn d-in-b"})]})]})]})}export{R as default};
