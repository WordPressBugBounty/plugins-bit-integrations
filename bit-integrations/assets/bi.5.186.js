var T=Object.defineProperty;var x=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var f=(i,e,s)=>e in i?T(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,m=(i,e)=>{for(var s in e||(e={}))E.call(e,s)&&f(i,s,e[s]);if(x)for(var s of x(e))W.call(e,s)&&f(i,s,e[s]);return i};import{r,j as t}from"./main-692.js";import{_ as o,p as C,L as F,b as M}from"./bi.751.13.js";import{B as _}from"./bi.244.694.js";import{T as p,t as B}from"./bi.719.710.js";function J({formID:i,wpCoursewareConf:e,setWPCoursewareConf:s,step:u,nextPage:j,setSnackbar:N,isInfo:d}){const[c,L]=r.useState(!1),[k,y]=r.useState({integrationName:""}),[S,v]=r.useState(!1),[l,h]=r.useState(!1),[z,A]=r.useState(!0),{wpCourseware:n}=B;r.useEffect(()=>()=>{A(!1)},[]);const I=()=>{h("auth"),M({},"wpCourseware_authorize").then(a=>{z&&(a!=null&&a.success&&(L(!0),N({show:!0,msg:o("Connect Successfully","bit-integrations")})),v(!0),h(!1))})},P=a=>{const b=m({},e),g=m({},k);g[a.target.name]="",b[a.target.name]=a.target.value,y(g),s(b)};return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"btcd-stp-page",style:{width:u===1&&900,height:u===1&&"auto"},children:[(n==null?void 0:n.youTubeLink)&&t.jsx(p,{title:"WP Courseware",youTubeLink:n==null?void 0:n.youTubeLink}),(n==null?void 0:n.docLink)&&t.jsx(p,{title:"WP Courseware",docLink:n==null?void 0:n.docLink}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:o("Integration Name:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:P,name:"name",value:e.name,type:"text",placeholder:o("Integration Name...","bit-integrations"),disabled:d}),S&&!c&&!l&&t.jsxs("div",{className:"flx mt-4",style:{color:"red"},children:[t.jsx("span",{className:"btcd-icn mr-2",style:{fontSize:30,marginTop:-5},children:"×"}),C(o("Please! First Install or Active %s Plugin","bit-integrations"),"WP Courseware")]}),!d&&t.jsxs(t.Fragment,{children:[t.jsxs("button",{onClick:I,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:c||l,children:[c?o("Connected ✔","bit-integrations"):o("Connect to WP Courseware","bit-integrations"),l&&t.jsx(F,{size:20,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsxs("button",{onClick:()=>j(2),className:"btn f-right btcd-btn-lg purple sh-sm flx",type:"button",disabled:!c,children:[o("Next","bit-integrations"),t.jsx(_,{className:"ml-1 rev-icn"})]})]})]})})}export{J as default};
