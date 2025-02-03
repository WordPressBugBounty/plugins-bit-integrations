var M=Object.defineProperty;var $=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var R=(r,c,e)=>c in r?M(r,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[c]=e,x=(r,c)=>{for(var e in c||(c={}))q.call(c,e)&&R(r,e,c[e]);if($)for(var e of $(c))z.call(c,e)&&R(r,e,c[e]);return r};import{j as t,r as D,f as E,L}from"./main-814.js";import{ag as S,u as A,x as H}from"./bi.8.440.js";import{_ as s,e as P}from"./bi.317.0.js";import{a as W,h as X,b as G}from"./bi.59.3.js";import{b as k,T as J}from"./bi.672.11.js";import{r as f,a as Q,b as U}from"./bi.915.717.js";import{T as Z}from"./bi.321.683.js";function K({sendinBlueConf:r,setSendinBlueConf:c,setIsLoading:e,setSnackbar:i}){var b,h;const o=(d,j)=>{const p=x({},r);j==="update"&&(d.target.checked?p.actions.update=!0:delete p.actions.update),j==="double_optin"&&(d.target.checked?(p.actions.double_optin=!0,p.templateId="",p.redirectionUrl="",f(p,c,i)):(delete p.actions.double_optin,delete p.templateId,delete p.redirectionUrl)),c(x({},p))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(k,{checked:((b=r.actions)==null?void 0:b.update)||!1,onChange:d=>o(d,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:s("Update Brevo(Sendinblue)","bit-integrations"),subTitle:s("Update Responses with Sendinblue existing email?","bit-integrations")}),t.jsx(k,{checked:((h=r.actions)==null?void 0:h.double_optin)||!1,onChange:d=>o(d,"double_optin"),className:"wdt-200 mt-4 mr-2",value:"double_optin",title:s("Double Opt-in","bit-integrations"),subTitle:s("Double Opt-In for confirm subscription.","bit-integrations")})]})}function Y({i:r,formFields:c,field:e,sendinBlueConf:i,setSendinBlueConf:o}){var u,l,m,v;const[b,h]=D.useState([]),d=e.required,j=((u=i==null?void 0:i.default)==null?void 0:u.fields)&&Object.values((l=i==null?void 0:i.default)==null?void 0:l.fields).filter(a=>!a.required),p=E(P),{isPro:N}=p,w=a=>{const n=x({},i);n.field_map.splice(a,0,{}),o(n)},F=a=>{const n=x({},i);n.field_map.length>1&&n.field_map.splice(a,1),o(n)},g=(a,n)=>{const{name:T,value:_}=a.target;o(O=>A(O,I=>{if(I.field_map[n][T]=_,T==="sendinBlueField"){const y=j.find(V=>V.fieldId===_);h((y==null?void 0:y.options)||[])}_==="custom"&&(I.field_map[n].customValue="")}))};return t.jsxs("div",{className:d?"mt-2 mr-1 flx w-9":"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>g(a,r),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),t.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:c.map(a=>a.type!=="file"&&t.jsx("option",{value:a.name,children:a.label},`ff-zhcrm-${a.name}`))}),t.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`${s("General Smart Codes","bit-integrations")} ${N?"":`(${s("Pro","bit-integrations")})`}`,children:N&&((m=W)==null?void 0:m.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.formField==="custom"&&t.jsx(Z,{onChange:a=>X(a,r,i,o),label:s("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:s("Custom Value","bit-integrations"),formFields:c}),t.jsxs("select",{className:"btcd-paper-inp",name:"sendinBlueField",value:e.sendinBlueField,onChange:a=>g(a,r),disabled:d,children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),d?((v=i==null?void 0:i.default)==null?void 0:v.fields)&&Object.values(i.default.fields).map(a=>t.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`)):j&&j.map(a=>t.jsx("option",{value:a.fieldId,children:a.fieldName},`${a.fieldId}-1`))]})]}),t.jsxs("div",{className:"flx integ-fld-wrp",children:[(b==null?void 0:b.length)>0&&t.jsx("div",{children:t.jsx(S,{width:250,icnSize:20,className:"ml-2",children:t.jsxs("div",{className:"txt-body",children:[t.jsx("p",{children:s("Custom Field options with Associated Values","bit-integrations")}),b==null?void 0:b.map(a=>t.jsxs("li",{children:[a==null?void 0:a.label," (",s("value"),": ",a==null?void 0:a.value,")"]},a.value))]})})}),!d&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>w(r),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),t.jsx("button",{onClick:()=>F(r),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(J,{})})]})]})]})}function rt({formID:r,formFields:c,sendinBlueConf:e,setSendinBlueConf:i,isLoading:o,setIsLoading:b,setSnackbar:h,error:d,setError:j}){var F,g,u;const p=l=>{const m=x({},e);l?(m.lists=l?l.split(","):[],!m.default.fields&&U(m,i,b,h)):delete m.lists,i(x({},m))},N=()=>{var l;return(l=e==null?void 0:e.default)!=null&&l.sblueList?Object.values(e.default.sblueList).map(m=>({label:m.name,value:String(m.id)})):[]},w=l=>{const m=x({},e),v=x({},d);v[l.target.name]="",m[l.target.name]=l.target.value,j(v),i(x({},m))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("List:","bit-integrations")}),t.jsx(H,{defaultValue:e==null?void 0:e.lists,className:"btcd-paper-drpdwn w-5",options:N(),onChange:l=>p(l)}),t.jsx("button",{onClick:()=>Q(e,i,b,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh Sendinblue Lists","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.jsx("br",{}),t.jsx("br",{}),o&&t.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((F=e==null?void 0:e.lists)==null?void 0:F.length)!==0&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:s("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>U(e,i,b,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh fields","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Sendinblue Fields","bit-integrations")})})]}),e.field_map.map((l,m)=>t.jsx(Y,{i:m,field:l,sendinBlueConf:e,formFields:c,setSendinBlueConf:i},`sendinblue-m-${m+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>G(e.field_map.length,e,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),((g=e.actions)==null?void 0:g.double_optin)&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:s("Template:","bit-integrations")}),t.jsxs("div",{className:"w-5",children:[t.jsxs("select",{onChange:w,name:"templateId",value:e==null?void 0:e.templateId,className:"btcd-paper-inp",children:[t.jsx("option",{value:"",children:s("Select Template","bit-integrations")}),((u=e==null?void 0:e.default)==null?void 0:u.sblueTemplates)&&Object.values(e.default.sblueTemplates).map(l=>t.jsx("option",{value:l.id||e.templateId,children:l.name},`sendinblue-${l.id+2}`))]}),t.jsx("div",{style:{color:"red",fontSize:"15px",marginTop:"3px"},children:d.templateId})]}),t.jsx("button",{onClick:()=>f(e,i,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh Sendinblue Templates","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.jsxs("small",{className:"d-blk mt-5 ml-30",children:[s("To create and activate double optin email template , Please follow","bit-integrations")," ",t.jsx("a",{className:"btcd-link",href:"https://help.sendinblue.com/hc/en-us/articles/211244629#h_01EWZJQBND3M8XTA37V018WX62",target:"_blank",rel:"noreferrer",children:s("How to create and active doi template","bit-integrations")})]}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-150 d-in-b",children:s("RedirectionUrl:","bit-integrations")}),t.jsxs("div",{className:"w-5",children:[t.jsx("input",{type:"url",className:"btcd-paper-inp",placeholder:"Redirection URL",onChange:w,value:(e==null?void 0:e.redirectionUrl)||"",name:"redirectionUrl"}),t.jsx("div",{style:{color:"red",fontSize:"15px",marginTop:"3px"},children:d.redirectionUrl})]})]}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(K,{sendinBlueConf:e,setSendinBlueConf:i,setIsLoading:b,setSnackbar:h})]})]})}export{rt as S};
