import{j as s}from"./main-252.js";import{h as a}from"./bi.63.0.js";function r({snack:e,setSnackbar:t}){const{show:o,msg:n}=e;return s.jsx(a,{in:o,timeout:3e3,classNames:"flx btcd-snack btcd-snack-a",onEntered:()=>setTimeout(()=>{t({show:!1,msg:n})},1),unmountOnExit:!0,children:s.jsxs("div",{children:[s.jsx("span",{dangerouslySetInnerHTML:{__html:n}}),s.jsx("button",{onClick:()=>t({show:!1,msg:n}),className:"btcd-snack-cls",type:"button",children:"×"})]})})}export{r as S};
