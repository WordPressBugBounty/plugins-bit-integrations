var q=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var E=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var M=(c,o,n)=>o in c?q(c,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[o]=n,b=(c,o)=>{for(var n in o||(o={}))Q.call(o,n)&&M(c,n,o[n]);if(E)for(var n of E(o))X.call(o,n)&&M(c,n,o[n]);return c},C=(c,o)=>J(c,K(o));import{j as e,e as I,f as y,r as w,u as Y}from"./main-556.js";import{$ as Z,f as tt,e as k,g as et,_ as s,d as S}from"./bi.562.0.js";import{S as at,a as it,C as st,g as nt}from"./bi.308.3.js";import{T as A,t as lt}from"./bi.448.755.js";import{x as ot,z as R}from"./bi.838.440.js";import{S as ct}from"./bi.686.13.js";import{b as rt}from"./bi.510.11.js";import{T as dt}from"./bi.989.752.js";import"./bi.244.14.js";import"./bi.657.9.js";/* empty css          */function h({options:c,placeholder:o,action:n,className:x,isMultiple:v,allowCustomOpt:r,value:N,addable:a,titleClassName:m,title:f,jsonValue:p}){return e.jsxs("div",{className:`${m}`,children:[e.jsx("span",{children:f}),e.jsx(ot,{width:"100%",defaultValue:N,className:`btcd-paper-drpdwn msl-wrp-options ${x}`,onChange:n,singleSelect:!v,customValue:r||a,placeholder:o,jsonValue:p,options:c||[]})]})}function wt({allIntegURL:c,isInfo:o,edit:n,isLearnDash:x=!1,learnDashConf:v}){var $,F,T;const[r,N]=I(Z),[a,m]=I(tt),{userMail:f}=y(k),p=y(et),[B,L]=w.useState(!1),z=Y(),[D,j]=w.useState({show:!1}),{mailLinks:d}=lt,P=y(k),{isPro:_}=P,g=()=>{const t=[];if(H()){const i=[];p.map(l=>{l.type==="email"&&i.push({label:l.label,value:`\${${l.name}}`})}),t.push({title:s("Form Fields","bit-integrations"),type:"group",childs:i})}return f&&Array.isArray(f)&&t.push({title:s("WP Emails","bit-integrations"),type:"group",childs:f}),t};w.useEffect(()=>{if(r!=null&&r.flow_details||n){const t=b({},r==null?void 0:r.flow_details);m(t)}else{const t=b({},a);a&&!(a!=null&&a.type)&&(t.type=x?"LearnDash":"Mail"),a&&!(a!=null&&a.condition)&&(t.name=x?"Send Email Leader":"Mail Integrations",t.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]},m(t))}},[]);const V=(t,i)=>{const l=b({},a);i?l.condition.action_behavior=t:l.condition.action_behavior="",m(l)},u=(t,i)=>{const l=b({},a);t==="to"?l.to=i?i.split(","):[]:t==="cc"?l.cc=i?i.split(","):[]:t==="bcc"?l.bcc=i?i.split(","):[]:t==="replyto"?l.replyto=i?i.split(","):[]:t==="attachment"?l.attachment=i?i.split(","):[]:l[t]=i,m(l)},H=()=>{for(const t of p)if(t.type==="email")return!0;return!1},U=()=>{const t=[];for(const i of p)i.type==="file"&&t.push({label:i.label,value:i.name});return t},G=({target:{value:t}})=>{m(i=>C(b({},i),{subject:(i.subject!==void 0?i.subject:"")+t})),setTimeout(()=>{t=""},100)},O=()=>{if(!a.name){j({show:!0,msg:s("Integration name can't be empty","bit-integrations")});return}if(!a.to){j({show:!0,msg:s("Email Receiver can't be empty","bit-integrations")});return}const t=C(b({},a),{learnDashConf:v});nt(r,N,c,t,z,"",n,L).then(l=>{l.success?(n&&S.success("Integration Updated Successfully"),S.success("Integration Created Successfully")):S.error(l.data||l)})},W=t=>{m(i=>C(b({},i),{body:t}))};return e.jsxs("div",{children:[e.jsx(ct,{snack:D,setSnackbar:j}),(d==null?void 0:d.youTubeLink)&&e.jsx(A,{title:"Mail",youTubeLink:d==null?void 0:d.youTubeLink}),(d==null?void 0:d.docLink)&&e.jsx(A,{title:"Mail",docLink:d==null?void 0:d.docLink}),e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("Integration Name","bit-integration")}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>u("name",t.target.value),name:"name",value:a.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:o}),e.jsx("br",{}),e.jsx("br",{}),n&&e.jsx(at,{entity:r.triggered_entity,setSnackbar:j}),e.jsx(h,{action:t=>u("from",t),placeholder:s("Add mail from address","bit-integrations"),value:a.from,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("From","bit-integrations")}),titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:g(a.from)}),e.jsx(h,{action:t=>u("to",t),value:a.to,placeholder:s("Add Email Receiver","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:g(a.to)}),e.jsx(h,{action:t=>u("cc",t),value:a.cc,placeholder:s("Add Email CC","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("CC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:g(a.cc)}),e.jsx(h,{action:t=>u("bcc",t),placeholder:s("Add Email BCC","bit-integrations"),value:a.bcc,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("BCC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:g(a.bcc)}),e.jsx(h,{action:t=>u("replyto",t),placeholder:s("Reply To","bit-integrations"),value:a.replyto,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("Reply To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:g(a.replyto)}),e.jsx(h,{action:t=>u("attachment",t),placeholder:s("Attachment","bit-integrations"),value:(a==null?void 0:a.attachment)||[],title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("Attachment","bit-integrations")}),isMultiple:!0,disableChip:!1,customValue:!1,addable:!0,titleClassName:"mt-2 flx",className:"w-5",options:U()}),e.jsxs("div",{className:"mt-2 mb-4 flx",children:[e.jsx("span",{className:"f-m wdt-200 d-in-b",children:"Subject:"}),e.jsx("input",{onChange:t=>u("subject",t.target.value),name:"sub",type:"text",className:"btcd-paper-inp w-5",placeholder:"Email Subject Here",value:a.subject}),e.jsxs("select",{onChange:G,className:"btcd-paper-inp ml-2",style:{width:"20%"},children:[e.jsx("option",{value:"",children:s("Add field","bit-integrations")}),e.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:p!==null&&p.map(t=>t.type!==void 0&&!t.type.match(/^(file|recaptcha)$/)&&e.jsx("option",{value:`\${${t.name}}`,children:t.label},t.name))}),e.jsx("optgroup",{label:`${s("General Smart Codes","bit-integrations")} ${_?"":`(${s("Pro","bit-integrations")})`}`,children:_&&(($=it)==null?void 0:$.map(t=>e.jsx("option",{value:`\${${t.name}}`,children:t.label},`ff-rm-${t.name}`)))})]})]}),e.jsx(dt,{id:"conf-mail",formFields:p,value:a.body,onChangeHandler:W,width:"100%"}),(a==null?void 0:a.condition)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flx",children:e.jsx(rt,{onChange:t=>V(t.target.value,t.target.checked),checked:((F=a==null?void 0:a.condition)==null?void 0:F.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:s("Conditional Logics","bit_integration")})}),e.jsx("br",{}),((T=a==null?void 0:a.condition)==null?void 0:T.action_behavior)==="cond"&&e.jsx(st,{formFields:p,dataConf:a,setDataConf:m})]}),e.jsx(mt,{saveConfig:O,isLoading:B,edit:(r==null?void 0:r.flow_details)&&!0})]})}const mt=({saveConfig:c,edit:o,isLoading:n})=>o?e.jsx("div",{className:"txt-center w-9 mt-3",children:e.jsxs("button",{onClick:c,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:n,children:[s("Update","bit-integrations"),n&&e.jsx(R,{size:20,clr:"#022217",className:"ml-2"})]})}):e.jsx("div",{className:"btcd-stp-page txt-center",style:{width:"100%",height:"auto"},children:e.jsxs("button",{onClick:c,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:n,children:[s("Save","bit-integrations"),"✔",n&&e.jsx(R,{size:20,clr:"#022217",className:"ml-2"})]})});export{wt as default};
