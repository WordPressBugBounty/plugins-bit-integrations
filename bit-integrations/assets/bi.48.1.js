import{k as e,r as s,j as a}from"./main-777.js";import{a as r}from"./bi.157.0.js";function i(){const t=e(r);return s.useEffect(()=>{const o=new URLSearchParams(window.location.hash).get("code");o&&(t({code:o}),setTimeout(()=>{window.close()},100))},[]),a.jsx("h4",{children:"Auth Response Captured"})}export{i as default};
