var g=Object.defineProperty;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var w=(l,a,s)=>a in l?g(l,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[a]=s,p=(l,a)=>{for(var s in a||(a={}))L.call(a,s)&&w(l,s,a[s]);if(v)for(var s of v(a))_.call(a,s)&&w(l,s,a[s]);return l};import{r as y,j as t,o as T,L as f}from"./main-556.js";import{y as A,x as H,u as N}from"./bi.838.440.js";import{_ as i}from"./bi.562.0.js";import{C as M}from"./bi.452.723.js";import{a as I}from"./bi.657.9.js";import{b as B}from"./bi.510.11.js";import{r as R}from"./bi.368.750.js";import{T as S}from"./bi.989.752.js";import{f as F}from"./bi.308.3.js";function O({formFields:l,telegramConf:a,setTelegramConf:s}){var h;const[c,d]=y.useState({show:!1}),m=n=>{const r=A(a);n.target.value!==""?r.actions.attachments=n.target.value:delete r.actions.attachments,s(p({},r))};return t.jsxs("div",{className:"pos-rel",children:[t.jsx("div",{className:"d-flx flx-wrp",children:t.jsx(B,{onChange:()=>d({show:"attachments"}),checked:"attachments"in a.actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:i("Attachments","bit-integrations"),subTitle:i("Add attachments from Bit Integrations to send Telegram.","bit-integrations")})}),t.jsxs(I,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:c.show==="attachments",close:()=>d({show:!1}),action:()=>d({show:!1}),title:i("Select Attachment","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2"}),t.jsx("div",{className:"mt-2",children:i("Please select file upload fields","bit-integrations")}),t.jsxs("select",{onChange:n=>m(n),name:"attachments",value:(h=a.actions)==null?void 0:h.attachments,className:"btcd-paper-inp w-10 mt-2",children:[t.jsx("option",{value:"",children:i("Select file upload field","bit-integrations")}),l.filter(n=>n.type==="file").map(n=>t.jsx("option",{value:n.name,children:n.label},n.name+1))]})]})]})}function K({formID:l,formFields:a,telegramConf:s,setTelegramConf:c,isLoading:d,setIsLoading:m,setSnackbar:h}){var j;const{id:n}=T(),r=y.useRef(null),u=e=>{const o=p({},s);o[e.target.name]=e.target.value,c(o)},k=e=>{c(o=>N(o,x=>{x.body=e}))},b=e=>{c(o=>N(o,x=>{x.parse_mode=e.target.value}))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:i("Chat List:","bit-integrations")}),t.jsxs("select",{onChange:u,name:"chat_id",value:s.chat_id,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:i("Select Chat List","bit-integrations")}),((j=s==null?void 0:s.default)==null?void 0:j.telegramChatLists)&&Object.keys(s.default.telegramChatLists).filter(e=>s.default.telegramChatLists[e].id!==null).map(e=>t.jsx("option",{value:s.default.telegramChatLists[e].id,children:s.default.telegramChatLists[e].name},e))]}),t.jsx("button",{onClick:()=>R(s,c,m,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Telegram List","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),d&&t.jsx(f,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(s==null?void 0:s.chat_id)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:i("Parse Mode:","bit-integrations")}),t.jsx(M,{radio:!0,onChange:b,name:"HTML",title:t.jsx("small",{className:"txt-dp",children:i("HTML","bit-integrations")}),checked:s.parse_mode==="HTML",value:"HTML"}),t.jsx(M,{radio:!0,onChange:b,name:"MarkdownV2",title:t.jsx("small",{className:"txt-dp",children:i("Markdown v2","bit-integrations")}),checked:s.parse_mode==="MarkdownV2",value:"MarkdownV2"})]}),t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:i("Messages:","bit-integrations")}),t.jsx(S,{formFields:a,id:`telegram-message-${n}`,value:s.body,onChangeHandler:k,width:"100%",toolbarMnu:"bold italic underline strikethrough | link | code | addFormField | toggleCode",show:(s==null?void 0:s.parse_mode)==="HTML"}),(s==null?void 0:s.parse_mode)==="MarkdownV2"&&t.jsxs(t.Fragment,{children:[t.jsx("textarea",{ref:r,className:"w-7",onChange:u,name:"body",rows:"5",value:s.body}),t.jsx(H,{options:a.filter(e=>e.type!=="file").map(e=>({label:e.label,value:`\${${e.name}}`})),className:"btcd-paper-drpdwn wdt-200 ml-2",onChange:e=>F(e,c,r),singleSelect:!0,selectOnClose:!0})]})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(O,{telegramConf:s,setTelegramConf:c,formFields:a})]})]})}export{K as T};
