var b=Object.defineProperty;var x=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var p=(i,e,s)=>e in i?b(i,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):i[e]=s,d=(i,e)=>{for(var s in e||(e={}))j.call(e,s)&&p(i,s,e[s]);if(x)for(var s of x(e))g.call(e,s)&&p(i,s,e[s]);return i};import{r as u,j as t,L as v}from"./main-270.js";import{x as w}from"./bi.88.440.js";import{_ as l}from"./bi.340.0.js";import{f as N}from"./bi.155.3.js";import{a as f}from"./bi.724.9.js";import{b as y}from"./bi.209.11.js";function A({formFields:i,slackConf:e,setSlackConf:s}){var c;const[h,r]=u.useState({show:!1}),m=n=>{const a=d({},e);n.target.value!==""?a.actions.attachments=n.target.value:delete a.actions.attachments,s(d({},a))};return t.jsxs("div",{className:"pos-rel",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(y,{onChange:()=>r({show:"attachments"}),checked:"attachments"in e.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:l("Attachments","bit-integrations"),subTitle:l("Add attachments from Bit Integrations to send Slack.","bit-integrations")})}),t.jsxs(f,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:h.show==="attachments",close:()=>r({show:!1}),action:()=>r({show:!1}),title:l("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:l("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:n=>m(n),name:"attachments",value:(c=e.actions)==null?void 0:c.attachments,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:l("Select file upload field","bit-integrations")}),i.filter(n=>n.type==="file").map(n=>t.jsx("option",{value:n.name,children:n.label},n.name+1))]})]})]})}function R({formFields:i,slackConf:e,setSlackConf:s,isLoading:h}){var c,n;const r=u.useRef(null),m=a=>{const o=d({},e);o[a.target.name]=a.target.value,s(o)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Channels List:","bit-integrations")}),t.jsxs("select",{onChange:m,name:"channel_id",value:e.channel_id,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Channel List","bit-integrations")}),((c=e==null?void 0:e.tokenDetails)==null?void 0:c.channels)&&((n=e==null?void 0:e.tokenDetails)==null?void 0:n.channels.map(({id:a,name:o})=>t.jsx("option",{value:a,children:o},a)))]})]}),h&&t.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.channel_id)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b mr-16",children:l("Messages:","bit-integrations")}),t.jsx("textarea",{ref:r,className:"w-7",onChange:m,name:"body",rows:"5",value:e.body}),t.jsx(w,{options:i.filter(a=>a.type!=="file").map(a=>({label:a.label,value:`\${${a.name}}`})),className:"btcd-paper-drpdwn wdt-600 ml-2",onChange:a=>N(a,s,r),singleSelect:!0,selectOnClose:!0})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(A,{slackConf:e,setSlackConf:s,formFields:i})]})]})}export{R as S};
