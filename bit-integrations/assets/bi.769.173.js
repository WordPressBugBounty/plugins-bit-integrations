var C=Object.defineProperty;var p=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var x=(i,e,s)=>e in i?C(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,u=(i,e)=>{for(var s in e||(e={}))F.call(e,s)&&x(i,s,e[s]);if(p)for(var s of p(e))T.call(e,s)&&x(i,s,e[s]);return i};import{r,j as t}from"./main-556.js";import{_ as o,s as E,c as M}from"./bi.562.0.js";import{z as _}from"./bi.838.440.js";import{B as P}from"./bi.39.749.js";import{T as f,t as B}from"./bi.448.755.js";import"./bi.657.9.js";function O({formID:i,autonamiConf:e,setAutonamiConf:s,step:m,nextPage:j,setSnackbar:N,isInfo:d}){const[c,A]=r.useState(!1),[k,L]=r.useState({integrationName:""}),[y,S]=r.useState(!1),{autonami:n}=B,[l,h]=r.useState(!1),[z,v]=r.useState(!0);r.useEffect(()=>()=>{v(!1)},[]);const I=()=>{h("auth"),M({},"autonami_authorize").then(a=>{z&&(a!=null&&a.success&&(A(!0),N({show:!0,msg:o("Connect Successfully","bit-integrations")})),S(!0),h(!1))})},w=a=>{const b=u({},e),g=u({},k);g[a.target.name]="",b[a.target.name]=a.target.value,L(g),s(b)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"btcd-stp-page",style:{width:m===1&&900,height:m===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(f,{title:"FunnelKit (Autonami)",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(f,{title:"FunnelKit (Autonami)",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:o("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:w,name:"name",value:e.name,type:"text",placeholder:o("Integration Name...","bit-integrations"),disabled:d}),y&&!c&&!l&&t.jsxs("div",{className:"flx mt-4",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),E(o("Please! First Install or Active %s Plugin","bit-integrations"),"Autonami Pro")]}),!d&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:I,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l,children:[c?o("Connected ✔","bit-integrations"):o("Connect to Autonami","bit-integrations"),l&&t.jsx(_,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>j(2),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[o("Next","bit-integrations"),t.jsx(P,{className:"ml-1 rev-icn"})]})]})]})})}export{O as default};
