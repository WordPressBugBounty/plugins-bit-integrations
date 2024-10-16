var N=Object.defineProperty;var j=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var v=(l,a,s)=>a in l?N(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s,h=(l,a)=>{for(var s in a||(a={}))M.call(a,s)&&v(l,s,a[s]);if(j)for(var s of j(a))g.call(a,s)&&v(l,s,a[s]);return l};import{r as y,j as t,l as k,L}from"./main-29.js";import{m as T,_ as i,e as _,z as A,n as H}from"./bi.860.15.js";import{C as w}from"./bi.194.673.js";import{T as f}from"./bi.480.701.js";import{r as I}from"./bi.811.699.js";function S({formFields:l,telegramConf:a,setTelegramConf:s}){var m;const[d,o]=y.useState({show:!1}),x=n=>{const r=A(a);n.target.value!==""?r.actions.attachments=n.target.value:delete r.actions.attachments,s(h({},r))};return t.jsxs("div",{className:"pos-rel",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(T,{onChange:()=>o({show:"attachments"}),checked:"attachments"in a.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:i("Attachments","bit-integrations"),subTitle:i("Add attachments from Bit Integrations to send Telegram.","bit-integrations")})}),t.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:d.show==="attachments",close:()=>o({show:!1}),action:()=>o({show:!1}),title:i("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:i("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:n=>x(n),name:"attachments",value:(m=a.actions)==null?void 0:m.attachments,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:i("Select file upload field","bit-integrations")}),l.filter(n=>n.type==="file").map(n=>t.jsx("option",{value:n.name,children:n.label},n.name+1))]})]})]})}function V({formID:l,formFields:a,telegramConf:s,setTelegramConf:d,isLoading:o,setIsLoading:x,setSnackbar:m}){var b;const{id:n}=k(),r=e=>{const c=h({},s);c[e.target.name]=e.target.value,d(c)},p=e=>{const c=h({},s);c.body=e,d(c)},u=e=>{const c=h({},s);c.parse_mode=e.target.value,d(c)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:i("Chat List:","bit-integrations")}),t.jsxs("select",{onChange:r,name:"chat_id",value:s.chat_id,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select Chat List","bit-integrations")}),((b=s==null?void 0:s.default)==null?void 0:b.telegramChatLists)&&Object.keys(s.default.telegramChatLists).filter(e=>s.default.telegramChatLists[e].id!==null).map(e=>t.jsx("option",{value:s.default.telegramChatLists[e].id,children:s.default.telegramChatLists[e].name},e))]}),t.jsx("button",{onClick:()=>I(s,d,x,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Telegram List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),o&&t.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(s==null?void 0:s.chat_id)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:i("Parse Mode:","bit-integrations")}),t.jsx(w,{radio:!0,onChange:u,name:"HTML",title:t.jsx("small",{className:"txt-dp",children:i("HTML","bit-integrations")}),checked:s.parse_mode==="HTML",value:"HTML"}),t.jsx(w,{radio:!0,onChange:u,name:"MarkdownV2",title:t.jsx("small",{className:"txt-dp",children:i("Markdown v2","bit-integrations")}),checked:s.parse_mode==="MarkdownV2",value:"MarkdownV2"})]}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Messages:","bit-integrations")}),(s==null?void 0:s.parse_mode)==="HTML"?t.jsx(f,{formFields:a,id:`telegram-message-${n}`,value:s.body,onChangeHandler:p,width:"100%",toolbarMnu:"bold italic underline strikethrough | link | code | addFormField | toggleCode"}):t.jsxs(t.Fragment,{children:[t.jsx("textarea",{className:"w-7",onChange:r,name:"body",rows:"5",value:s.body}),t.jsx(H,{options:a.filter(e=>e.type!=="file").map(e=>({label:e.label,value:`\${${e.name}}`})),className:"btcd-paper-drpdwn wdt-200 ml-2",singleSelect:!0,onChange:e=>p(e)})]})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(S,{telegramConf:s,setTelegramConf:d,formFields:a})]})]})}export{V as T};
