import{r as m,j as n}from"./main-920.js";import{u as b}from"./bi.761.437.js";import{F as v}from"./bi.658.3.js";import{_ as N}from"./bi.247.0.js";import"./bi.140.9.js";import"./bi.970.13.js";import"./bi.941.11.js";import"./bi.706.14.js";const V=({customActionConf:e,setCustomActionConf:d,formFields:o,isInfo:u})=>{const a=m.useRef(null);m.useEffect(()=>()=>{a.current=null},[]);const g=l=>{d(r=>b(r,s=>{s.value=l,s.isValid=!1})),a.current&&h(),a.current=""};function c(l){return o.map(r=>({label:r.label,kind:monaco.languages.CompletionItemKind.Function,insertText:`'${r.name}'`,range:l}))}const p=(l,r)=>{a.current=r},h=(l,r)=>{a.current.languages.registerCompletionItemProvider("php",{provideCompletionItems:function(s,t){if(!s.getValueInRange({startLineNumber:t.lineNumber,startColumn:t.column-10,endLineNumber:t.lineNumber,endColumn:t.column}).match(/\$trigger\[?/))return{suggestions:[]};const i=s.getWordUntilPosition(t),x={startLineNumber:t.lineNumber,endLineNumber:t.lineNumber,startColumn:i.startColumn,endColumn:i.endColumn};return{suggestions:c(x)}}})};return n.jsx("div",{className:"flx ",children:u?n.jsxs("div",{children:[n.jsx("div",{className:"mt-3",style:{width:"1500px"},children:n.jsx("b",{children:N("Custom Action:","bit-integrations")})}),n.jsx("textarea",{className:"btcd-paper-inp w-6 mt-1",style:{resize:"none"},rows:"20",value:e.value,type:"text",disabled:u})]}):n.jsx(v,{width:"100%",className:"monaco-editor",height:"50vh",theme:"vs-dark",defaultLanguage:"php",defaultValue:e==null?void 0:e.defaultValue,value:e==null?void 0:e.value,onChange:g,onMount:p})})};export{V as default};
