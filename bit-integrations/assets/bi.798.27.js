var q=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var k=(r,c,n)=>c in r?q(r,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[c]=n,b=(r,c)=>{for(var n in c||(c={}))Q.call(c,n)&&k(r,n,c[n]);if(T)for(var n of T(c))X.call(c,n)&&k(r,n,c[n]);return r},C=(r,c)=>J(r,K(c));import{j as e,e as M,f as y,r as w,u as Y}from"./main-441.js";import{$ as Z,f as tt,e as I,g as et,_ as s,d as _}from"./bi.452.0.js";import{E as at,f as it,a as st,C as nt,g as lt}from"./bi.73.3.js";import{u as ot,y as A}from"./bi.141.437.js";import{S as ct}from"./bi.239.13.js";import{b as rt}from"./bi.866.11.js";import{T as dt}from"./bi.156.715.js";import{T as R,t as mt}from"./bi.292.699.js";import"./bi.655.14.js";import"./bi.663.9.js";/* empty css          */function h({options:r,placeholder:c,action:n,className:j,isMultiple:v,allowCustomOpt:l,value:N,addable:a,titleClassName:m,title:g,jsonValue:p}){return e.jsxs("div",{className:`${m}`,children:[e.jsx("span",{children:g}),e.jsx(ot,{width:"100%",defaultValue:N,className:`btcd-paper-drpdwn msl-wrp-options ${j}`,onChange:n,singleSelect:!v,customValue:l||a,placeholder:c,jsonValue:p,options:r||[]})]})}function _t({allIntegURL:r,isInfo:c,edit:n,isLearnDash:j=!1,learnDashConf:v}){var $,F,E;const[l,N]=M(Z),[a,m]=M(tt),{userMail:g}=y(I),p=y(et),[B,L]=w.useState(!1),W=Y(),[D,f]=w.useState({show:!1}),{mailLinks:d}=mt,P=y(I),{isPro:S}=P,x=()=>{const t=[];if(z()){const i=[];p.map(o=>{o.type==="email"&&i.push({label:o.label,value:`\${${o.name}}`})}),t.push({title:s("Form Fields","bit-integrations"),type:"group",childs:i})}return g&&Array.isArray(g)&&t.push({title:s("WP Emails","bit-integrations"),type:"group",childs:g}),t};w.useEffect(()=>{if(l!=null&&l.flow_details||n){const t=b({},l==null?void 0:l.flow_details);m(t)}else{const t=b({},a);a&&!(a!=null&&a.type)&&(t.type=j?"LearnDash":"Mail"),a&&!(a!=null&&a.condition)&&(t.name=j?"Send Email Leader":"Mail Integrations",t.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]},m(t))}},[]);const V=(t,i)=>{const o=b({},a);i?o.condition.action_behavior=t:o.condition.action_behavior="",m(o)},u=(t,i)=>{const o=b({},a);t==="to"?o.to=i?i.split(","):[]:t==="cc"?o.cc=i?i.split(","):[]:t==="bcc"?o.bcc=i?i.split(","):[]:t==="replyto"?o.replyto=i?i.split(","):[]:t==="attachment"?o.attachment=i?i.split(","):[]:o[t]=i,m(o)},z=()=>{for(const t of p)if(t.type==="email")return!0;return!1},H=()=>{const t=[];for(const i of p)i.type==="file"&&t.push({label:i.label,value:i.name});return t},U=({target:{value:t}})=>{m(i=>C(b({},i),{subject:(i.subject!==void 0?i.subject:"")+t})),setTimeout(()=>{t=""},100)},G=()=>{if(!a.name){f({show:!0,msg:s("Integration name can't be empty","bit-integrations")});return}if(!a.to){f({show:!0,msg:s("Email Receiver can't be empty","bit-integrations")});return}const t=C(b({},a),{learnDashConf:v});lt(l,N,r,t,W,"",n,L).then(o=>{o.success?(n&&_.success("Integration Updated Successfully"),_.success("Integration Created Successfully")):_.error(o.data||o)})},O=t=>{m(i=>C(b({},i),{body:t}))};return e.jsxs("div",{children:[e.jsx(ct,{snack:D,setSnackbar:f}),(d==null?void 0:d.youTubeLink)&&e.jsx(R,{title:"Mail",youTubeLink:d==null?void 0:d.youTubeLink}),(d==null?void 0:d.docLink)&&e.jsx(R,{title:"Mail",docLink:d==null?void 0:d.docLink}),e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("Integration Name","bit-integration")}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>u("name",t.target.value),name:"name",value:a.name,type:"text",placeholder:s("Integration Name...","bit-integrations"),disabled:c}),e.jsx("br",{}),e.jsx("br",{}),l.triggered_entity==="Webhook"&&(l==null?void 0:l.flow_details)&&e.jsx(at,{setSnackbar:f}),l.triggered_entity!=="Webhook"&&(l==null?void 0:l.flow_details)&&e.jsx(it,{setSnackbar:f}),e.jsx(h,{action:t=>u("from",t),placeholder:s("Add mail from address","bit-integrations"),value:a.from,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("From","bit-integrations")}),titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:x(a.from)}),e.jsx(h,{action:t=>u("to",t),value:a.to,placeholder:s("Add Email Receiver","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:x(a.to)}),e.jsx(h,{action:t=>u("cc",t),value:a.cc,placeholder:s("Add Email CC","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("CC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:x(a.cc)}),e.jsx(h,{action:t=>u("bcc",t),placeholder:s("Add Email BCC","bit-integrations"),value:a.bcc,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("BCC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:x(a.bcc)}),e.jsx(h,{action:t=>u("replyto",t),placeholder:s("Reply To","bit-integrations"),value:a.replyto,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("Reply To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:x(a.replyto)}),e.jsx(h,{action:t=>u("attachment",t),placeholder:s("Attachment","bit-integrations"),value:(a==null?void 0:a.attachment)||[],title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:s("Attachment","bit-integrations")}),isMultiple:!0,disableChip:!1,customValue:!1,addable:!0,titleClassName:"mt-2 flx",className:"w-5",options:H()}),e.jsxs("div",{className:"mt-2 mb-4 flx",children:[e.jsx("span",{className:"f-m wdt-200 d-in-b",children:"Subject:"}),e.jsx("input",{onChange:t=>u("subject",t.target.value),name:"sub",type:"text",className:"btcd-paper-inp w-5",placeholder:"Email Subject Here",value:a.subject}),e.jsxs("select",{onChange:U,className:"btcd-paper-inp ml-2",style:{width:"20%"},children:[e.jsx("option",{value:"",children:s("Add field","bit-integrations")}),e.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:p!==null&&p.map(t=>t.type!==void 0&&!t.type.match(/^(file|recaptcha)$/)&&e.jsx("option",{value:`\${${t.name}}`,children:t.label},t.name))}),e.jsx("optgroup",{label:`${s("General Smart Codes","bit-integrations")} ${S?"":`(${s("Pro","bit-integrations")})`}`,children:S&&(($=st)==null?void 0:$.map(t=>e.jsx("option",{value:`\${${t.name}}`,children:t.label},`ff-rm-${t.name}`)))})]})]}),e.jsx(dt,{id:"conf-mail",formFields:p,value:a.body,onChangeHandler:O,width:"100%"}),(a==null?void 0:a.condition)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flx",children:e.jsx(rt,{onChange:t=>V(t.target.value,t.target.checked),checked:((F=a==null?void 0:a.condition)==null?void 0:F.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:s("Conditional Logics","bit_integration")})}),e.jsx("br",{}),((E=a==null?void 0:a.condition)==null?void 0:E.action_behavior)==="cond"&&e.jsx(nt,{formFields:p,dataConf:a,setDataConf:m})]}),e.jsx(pt,{saveConfig:G,isLoading:B,edit:(l==null?void 0:l.flow_details)&&!0})]})}const pt=({saveConfig:r,edit:c,isLoading:n})=>c?e.jsx("div",{className:"txt-center w-9 mt-3",children:e.jsxs("button",{onClick:r,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:n,children:[s("Update","bit-integrations"),n&&e.jsx(A,{size:20,clr:"#022217",className:"ml-2"})]})}):e.jsx("div",{className:"btcd-stp-page txt-center",style:{width:"100%",height:"auto"},children:e.jsxs("button",{onClick:r,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:n,children:[s("Save","bit-integrations"),"✔",n&&e.jsx(A,{size:20,clr:"#022217",className:"ml-2"})]})});export{_t as default};
