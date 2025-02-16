var L=Object.defineProperty;var N=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var b=(l,a,n)=>a in l?L(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n,d=(l,a)=>{for(var n in a||(a={}))D.call(a,n)&&b(l,n,a[n]);if(N)for(var n of N(a))O.call(a,n)&&b(l,n,a[n]);return l};import{r as p,j as t}from"./main-320.js";import{B as R,T as z,e as j,P as u,j as A,R as S,k as U,C as V}from"./bi.337.3.js";import{B as q}from"./bi.27.727.js";import{_ as e,c as G}from"./bi.576.0.js";import{z as M,a9 as Y}from"./bi.795.440.js";import{b as J}from"./bi.440.11.js";import"./bi.51.13.js";import"./bi.574.14.js";import"./bi.155.9.js";function tt({formFields:l,webHooks:a,setWebHooks:n,setStep:C,setSnackbar:h,create:T,isInfo:c}){var f,v;const[y,m]=p.useState(!1),[o,x]=p.useState(1),_=["GET","POST","PUT","PATCH","OPTION","DELETE","TRACE","CONNECT"],g=i=>{const s=d({},a);s[i.target.name]=i.target.value,n(d({},s))},E=i=>{m(!0),G({hookDetails:i},"test_webhook").then(s=>{if(s&&s.success)h({show:!0,msg:`${s.data}`}),m(!1);else if(s&&s.data){const r=typeof s.data=="string"?s.data:"Unknown error";h({show:!0,msg:`${r}. ${e("please try again","bit-integrations")}`}),m(!1)}else h({show:!0,msg:e("Webhook tests failed. please try again","bit-integrations")}),m(!1)})};p.useEffect(()=>{if(a&&!(a!=null&&a.condition)){const i=d({},a);i.condition={action_behavior:"",actions:[{field:"",action:"value"}],logics:[{field:"",logic:"",val:""},"or",{field:"",logic:"",val:""}]},n(i)}},[]);const P=(i,s)=>{const r=d({},a);s?r.condition.action_behavior=i:r.condition.action_behavior="",n(r)},$=()=>{setTimeout(()=>{document.getElementById("btcd-settings-wrp").scrollTop=0},300),C(2)},B=`${e("You can test any kind of webhook using","bit-integrations")} <a href="https://app.webhook.is/test" target="_blank" rel="noreferrer">${e("app.webhook.is","bit-integrations")}</a>`;return t.jsxs("div",{style:{width:c&&900},children:[t.jsx("div",{className:"flx ",children:t.jsxs("div",{className:"w-8 mr-2 mt-2 mb-4",children:[t.jsx("div",{className:"f-m",children:e("Integration Name","bit-integrations")}),t.jsx("input",{name:"name",onChange:i=>g(i),className:"btcd-paper-inp mt-1",type:"text",value:a.name,disabled:c})]})}),t.jsxs("div",{className:"flx",children:[t.jsxs("div",{className:"w-5 mr-2 ",children:[t.jsx("div",{className:"f-m",children:e("Link:","bit-integrations")}),t.jsx("input",{name:"url",onChange:i=>g(i),className:"btcd-paper-inp mt-1",type:"text",value:a.url,disabled:c})]}),t.jsxs("div",{className:"w-3",children:[t.jsx("div",{className:"f-m",children:e("Method:","bit-integrations")}),t.jsx("select",{name:"method",onChange:i=>g(i),defaultValue:a.method,className:"btcd-paper-inp mt-1",disabled:c,children:_.map((i,s)=>t.jsx("option",{value:i,children:i},`method-${s*2}`))})]})]}),(a==null?void 0:a.apiConsole)&&t.jsxs("small",{className:"d-blk mt-2",children:[e("To got Webhook , Please Visit","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:a.apiConsole,target:"_blank",rel:"noreferrer",children:e(`${a.type} Dashboard`,"bit-integrations")})]}),!c&&t.jsxs(R,{onClick:()=>E(a),className:"btn btcd-btn-o-purple",children:[e("Test Webhook","bit-integrations"),y&&t.jsx(M,{size:14,clr:"#022217",className:"ml-2"})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs(z,{children:[t.jsxs("div",{className:"flx mt-2",children:[t.jsx(j,{children:t.jsx("button",{className:`btcd-s-tab-link ${o===1&&"s-t-l-active"}`,type:"button",children:e("Params","bit-integrations")})}),t.jsx(j,{children:t.jsx("button",{className:`btcd-s-tab-link ${o===2&&"s-t-l-active"}`,type:"button",children:e("Headers","bit-integrations")})}),t.jsx(j,{children:t.jsx("button",{className:`btcd-s-tab-link ${o===3&&"s-t-l-active"}`,type:"button",children:e("Body","bit-integrations")})})]}),t.jsx("div",{className:"btcd-hr"}),t.jsx(u,{children:t.jsx(A,{webHooks:a,setWebHooks:n,formFields:l,isInfo:c,setTab:x})}),t.jsx(u,{children:t.jsx(S,{webHooks:a,setWebHooks:n,formFields:l,isInfo:c,setTab:x})}),t.jsx(u,{children:t.jsx(U,{webHooks:a,setWebHooks:n,formFields:l,isInfo:c,setTab:x})})]}),(a==null?void 0:a.condition)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flx",children:t.jsx(J,{onChange:i=>P(i.target.value,i.target.checked),checked:((f=a==null?void 0:a.condition)==null?void 0:f.action_behavior)==="cond",className:"wdt-200 mt-4 mr-2",value:"cond",title:e("Conditional Logics","bit_integration"),isInfo:c})}),t.jsx("br",{}),((v=a==null?void 0:a.condition)==null?void 0:v.action_behavior)==="cond"&&t.jsx(V,{formFields:l,dataConf:a,setDataConf:n})]}),T&&t.jsxs("button",{onClick:()=>$(),className:"btn btcd-btn-lg purple sh-sm flx",type:"button",children:[e("Next","bit-integrations"),t.jsx(q,{className:"ml-1 rev-icn"})]}),t.jsx(Y,{note:B})]})}export{tt as default};
