var q=Object.defineProperty,J=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var T=(r,c,n)=>c in r?q(r,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[c]=n,b=(r,c)=>{for(var n in c||(c={}))Q.call(c,n)&&T(r,n,c[n]);if(k)for(var n of k(c))X.call(c,n)&&T(r,n,c[n]);return r},C=(r,c)=>J(r,K(c));import{j as e,e as M,i as y,r as w,u as Y}from"./main-692.js";import{n as Z,$ as tt,g as et,j as I,h as at,d as st,_ as i,E as it,B as nt,k as lt,m as ot,D as ct,L as A,F as rt,c as _}from"./bi.751.13.js";import{T as dt}from"./bi.859.697.js";import{T as R,t as mt}from"./bi.719.710.js";/* empty css          */function h({options:r,placeholder:c,action:n,className:j,isMultiple:v,allowCustomOpt:l,value:N,addable:a,titleClassName:m,title:g,jsonValue:p}){return e.jsxs("div",{className:`${m}`,children:[e.jsx("span",{children:g}),e.jsx(Z,{width:"100%",defaultValue:N,className:`btcd-paper-drpdwn msl-wrp-options ${j}`,onChange:n,singleSelect:!v,customValue:l||a,placeholder:c,jsonValue:p,options:r||[]})]})}function jt({allIntegURL:r,isInfo:c,edit:n,isLearnDash:j=!1,learnDashConf:v}){var $,S,E;const[l,N]=M(tt),[a,m]=M(et),{userMail:g}=y(I),p=y(at),[B,L]=w.useState(!1),D=Y(),[W,x]=w.useState({show:!1}),{mailLinks:d}=mt,P=y(I),{isPro:F}=P,f=()=>{const t=[];if(z()){const s=[];p.map(o=>{o.type==="email"&&s.push({label:o.label,value:`\${${o.name}}`})}),t.push({title:i("Form Fields","bit-integrations"),type:"group",childs:s})}return g&&Array.isArray(g)&&t.push({title:i("WP Emails","bit-integrations"),type:"group",childs:g}),t};w.useEffect(()=>{if(l!=null&&l.flow_details||n){const t=b({},l==null?void 0:l.flow_details);m(t)}else{const t=b({},a);a&&!(a!=null&&a.type)&&(t.type=j?"LearnDash":"Mail"),a&&!(a!=null&&a.condition)&&(t.name=j?"Send Email Leader":"Mail Integrations",t.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]},m(t))}},[]);const V=(t,s)=>{const o=b({},a);s?o.condition.action_behavior=t:o.condition.action_behavior="",m(o)},u=(t,s)=>{const o=b({},a);t==="to"?o.to=s?s.split(","):[]:t==="cc"?o.cc=s?s.split(","):[]:t==="bcc"?o.bcc=s?s.split(","):[]:t==="replyto"?o.replyto=s?s.split(","):[]:t==="attachment"?o.attachment=s?s.split(","):[]:o[t]=s,m(o)},z=()=>{for(const t of p)if(t.type==="email")return!0;return!1},H=()=>{const t=[];for(const s of p)s.type==="file"&&t.push({label:s.label,value:s.name});return t},U=({target:{value:t}})=>{m(s=>C(b({},s),{subject:(s.subject!==void 0?s.subject:"")+t})),setTimeout(()=>{t=""},100)},G=()=>{if(!a.name){x({show:!0,msg:i("Integration name can't be empty","bit-integrations")});return}if(!a.to){x({show:!0,msg:i("Email Receiver can't be empty","bit-integrations")});return}const t=C(b({},a),{learnDashConf:v});rt(l,N,r,t,D,"",n,L).then(o=>{o.success?(n&&_.success("Integration Updated Successfully"),_.success("Integration Created Successfully")):_.error(o.data||o)})},O=t=>{m(s=>C(b({},s),{body:t}))};return e.jsxs("div",{children:[e.jsx(st,{snack:W,setSnackbar:x}),(d==null?void 0:d.youTubeLink)&&e.jsx(R,{title:"Mail",youTubeLink:d==null?void 0:d.youTubeLink}),(d==null?void 0:d.docLink)&&e.jsx(R,{title:"Mail",docLink:d==null?void 0:d.docLink}),e.jsx("span",{className:"f-m wdt-200 d-in-b",children:i("Integration Name","bit-integration")}),e.jsx("input",{className:"btcd-paper-inp w-5 mt-1",onChange:t=>u("name",t.target.value),name:"name",value:a.name,type:"text",placeholder:i("Integration Name...","bit-integrations"),disabled:c}),e.jsx("br",{}),e.jsx("br",{}),l.triggered_entity==="Webhook"&&(l==null?void 0:l.flow_details)&&e.jsx(it,{setSnackbar:x}),l.triggered_entity!=="Webhook"&&(l==null?void 0:l.flow_details)&&e.jsx(nt,{setSnackbar:x}),e.jsx(h,{action:t=>u("from",t),placeholder:i("Add mail from address","bit-integrations"),value:a.from,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:i("From","bit-integrations")}),titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.from)}),e.jsx(h,{action:t=>u("to",t),value:a.to,placeholder:i("Add Email Receiver","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:i("To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.to)}),e.jsx(h,{action:t=>u("cc",t),value:a.cc,placeholder:i("Add Email CC","bit-integrations"),title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:i("CC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.cc)}),e.jsx(h,{action:t=>u("bcc",t),placeholder:i("Add Email BCC","bit-integrations"),value:a.bcc,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:i("BCC","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.bcc)}),e.jsx(h,{action:t=>u("replyto",t),placeholder:i("Reply To","bit-integrations"),value:a.replyto,title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:i("Reply To","bit-integrations")}),isMultiple:!0,titleClassName:"mt-2 flx",className:"w-5",addable:!0,options:f(a.replyto)}),e.jsx(h,{action:t=>u("attachment",t),placeholder:i("Attachment","bit-integrations"),value:(a==null?void 0:a.attachment)||[],title:e.jsx("span",{className:"f-m wdt-200 d-in-b",children:i("Attachment","bit-integrations")}),isMultiple:!0,disableChip:!1,customValue:!1,addable:!0,titleClassName:"mt-2 flx",className:"w-5",options:H()}),e.jsxs("div",{className:"mt-2 mb-4 flx",children:[e.jsx("span",{className:"f-m wdt-200 d-in-b",children:"Subject:"}),e.jsx("input",{onChange:t=>u("subject",t.target.value),name:"sub",type:"text",className:"btcd-paper-inp w-5",placeholder:"Email Subject Here",value:a.subject}),e.jsxs("select",{onChange:U,className:"btcd-paper-inp ml-2",style:{width:"20%"},children:[e.jsx("option",{value:"",children:i("Add field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:p!==null&&p.map(t=>t.type!==void 0&&!t.type.match(/^(file|recaptcha)$/)&&e.jsx("option",{value:`\${${t.name}}`,children:t.label},t.name))}),e.jsx("optgroup",{label:`${i("General Smart Codes","bit-integrations")} ${F?"":`(${i("Pro","bit-integrations")})`}`,children:F&&(($=lt)==null?void 0:$.map(t=>e.jsx("option",{value:`\${${t.name}}`,children:t.label},`ff-rm-${t.name}`)))})]})]}),e.jsx(dt,{id:"conf-mail",formFields:p,value:a.body,onChangeHandler:O,width:"100%"}),(a==null?void 0:a.condition)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flx",children:e.jsx(ot,{onChange:t=>V(t.target.value,t.target.checked),checked:((S=a==null?void 0:a.condition)==null?void 0:S.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:i("Conditional Logics","bit_integration")})}),e.jsx("br",{}),((E=a==null?void 0:a.condition)==null?void 0:E.action_behavior)==="cond"&&e.jsx(ct,{formFields:p,dataConf:a,setDataConf:m})]}),e.jsx(pt,{saveConfig:G,isLoading:B,edit:(l==null?void 0:l.flow_details)&&!0})]})}const pt=({saveConfig:r,edit:c,isLoading:n})=>c?e.jsx("div",{className:"txt-center w-9 mt-3",children:e.jsxs("button",{onClick:r,className:"btn btcd-btn-lg purple sh-sm flx",type:"button",disabled:n,children:[i("Update","bit-integrations"),n&&e.jsx(A,{size:20,clr:"#022217",className:"ml-2"})]})}):e.jsx("div",{className:"btcd-stp-page txt-center",style:{width:"100%",height:"auto"},children:e.jsxs("button",{onClick:r,className:"btn btcd-btn-lg purple sh-sm",type:"button",disabled:n,children:[i("Save","bit-integrations"),"✔",n&&e.jsx(A,{size:20,clr:"#022217",className:"ml-2"})]})});export{jt as default};
