import{j as s,r}from"./main-623.js";function c({step:l,active:e,className:n}){return s.jsx("div",{className:`d-in-b ${n}`,children:s.jsxs("div",{className:"flx flx-center",children:[Array(e).fill(0).map((a,t)=>s.jsxs(r.Fragment,{children:[s.jsx("div",{className:"btcd-stp flx flx-center stp-a  txt-center",children:t+1}),e-1!==t&&s.jsx("div",{className:"btcd-stp-line stp-line-a"})]},`stp-${t+21}`)),l-e!==0&&s.jsx("div",{className:"btcd-stp-line"}),Array(l-e).fill(0).map((a,t)=>s.jsxs(r.Fragment,{children:[s.jsx("div",{className:"btcd-stp flx flx-center txt-center",children:t+e+1}),l-e-1!==t&&s.jsx("div",{className:"btcd-stp-line "})]},`stp-${t+23}`))]})})}export{c as S};
