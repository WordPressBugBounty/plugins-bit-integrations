import{j as t}from"./main-288.js";import{_ as e}from"./bi.4.0.js";import{y as r}from"./bi.197.434.js";function o({saveConfig:l,edit:n,disabled:a,isLoading:s}){return n?t.jsx("div",{className:"txt-center w-9 mt-3",children:t.jsxs("button",{onClick:l,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:a||s,children:[e("Save","bit-integrations"),s&&t.jsx(r,{size:20,clr:"#022217",className:"ml-2"})]})}):t.jsxs("div",{className:"txt-center",children:[t.jsx("h2",{className:"ml-3",children:e("Successfully Integrated","bit-integrations")}),t.jsxs("button",{onClick:l,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:s,children:[e("Finish & Save","bit-integrations"),"✔",s&&t.jsx(r,{size:20,clr:"#022217",className:"ml-2"})]})]})}export{o as W};
