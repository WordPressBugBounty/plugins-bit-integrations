import{r as n,j as t}from"./main-212.js";import{c as d,_ as i}from"./bi.717.0.js";import{A as o}from"./bi.404.716.js";import"./bi.830.11.js";import"./bi.303.9.js";import"./bi.914.14.js";function A({sheetConf:e,isInfo:s}){const[a,c]=n.useState([]);return n.useEffect(()=>{const r={id:e.authId};d(null,"auth/getbyId",r,"GET").then(l=>{l.success&&l.data.data.length>0&&c(l.data.data)})},[]),t.jsxs("div",{style:{width:"900px"},children:[e.tokenDetails.selectedAuthType=="Custom Authorization"&&t.jsxs("div",{children:[t.jsxs("h3",{children:["Account Details ",t.jsx("small",{children:"(Custom Authorization)"})," "]}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Client id:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",name:"clientId",value:e.clientId,type:"text",placeholder:i("Client id...","bit-integrations"),disabled:s}),t.jsx("div",{className:"mt-3",children:t.jsx("b",{children:i("Client secret:","bit-integrations")})}),t.jsx("input",{className:"btcd-paper-inp w-6 mt-1",name:"clientSecret",value:e.clientSecret,type:"text",placeholder:i("Client secret...","bit-integrations"),disabled:s})]}),e.tokenDetails.selectedAuthType=="One Click Authorization"&&a.length!==0&&t.jsxs("div",{children:[t.jsxs("h3",{children:["Account Details ",t.jsx("small",{children:"(One Click Authorization)"})," "]}),t.jsx(o,{authData:a,isInfo:s})]}),e.tokenDetails.selectedAuthType=="One Click Authorization"&&a.length===0&&t.jsx("div",{children:t.jsxs("h3",{children:["The Authorized Account Has been Deleted. ",t.jsx("small",{children:"(One Click Authorization)"})," "]})})]})}export{A as default};
