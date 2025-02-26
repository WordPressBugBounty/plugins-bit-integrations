var M=Object.defineProperty;var N=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var v=(i,r,e)=>r in i?M(i,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[r]=e,p=(i,r)=>{for(var e in r||(r={}))T.call(r,e)&&v(i,e,r[e]);if(N)for(var e of N(r))L.call(r,e)&&v(i,e,r[e]);return i};import{f as _,j as t,L as k}from"./main-586.js";import{x as q}from"./bi.960.440.js";import{c as y,_ as n,e as $}from"./bi.612.0.js";import{a as V,h as R,b as D}from"./bi.993.3.js";import{T as I,b as O}from"./bi.980.11.js";import{T as S}from"./bi.546.692.js";import{P as U,a as H}from"./bi.15.698.js";const A=(i,r,e,s,d)=>{s(!0),y({},"refresh_news_letter").then(l=>{if(l&&l.success){const c=p({},r);c.default||(c.default={}),l.data.newsletterList&&(c.default.newsletterList=l.data.newsletterList),d({show:!0,msg:n("Newsletter list refreshed","bit-integrations")}),e(p({},c))}else l&&l.data&&l.data.data||!l.success&&typeof l.data=="string"?d({show:!0,msg:`${n("Newsletter list refresh failed Cause:","bit-integrations")}${l.data.data||l.data}. ${n("please try again","bit-integrations")}`}):d({show:!0,msg:n("Newsletter list refresh failed. please try again","bit-integrations")});s(!1)}).catch(()=>s(!1))},B=(i,r,e,s)=>{y({},"mail_poet_list_headers").then(d=>{if(d&&d.success){const l=p({},i);if(d.data.mailPoetFields){l.default.fields=d.data.mailPoetFields;const{fields:c}=l.default;l.field_map=Object.values(c).filter(b=>b.required).map(b=>({formField:"",mailPoetField:b.id,required:!0})),s({show:!0,msg:n("Mailpoet fields refreshed","bit-integrations")})}else s({show:!0,msg:n("No Mailpoet fields found. Try changing the header row number or try again","bit-integrations")});d.data.tokenDetails&&(l.tokenDetails=d.data.tokenDetails),r(p({},l))}else s({show:!0,msg:n("Mailpoet fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},C=(i,r,e)=>{const s=p({},r);s.name=i.target.value,e(p({},s))},P=i=>!((i!=null&&i.field_map?i.field_map.filter(e=>!e.formField&&e.mailPoetField&&e.required):[]).length>0);function E({i,formFields:r,field:e,mailPoetConf:s,setMailPoetConf:d}){var j,f,w,F;const l=e.required,c=((j=s==null?void 0:s.default)==null?void 0:j.fields)&&Object.values((f=s==null?void 0:s.default)==null?void 0:f.fields).filter(a=>a.required===""),b=_($),{isPro:h}=b,u=a=>{const o=p({},s);o.field_map.splice(a,0,{}),d(o)},m=a=>{const o=p({},s);o.field_map.length>1&&o.field_map.splice(a,1),d(o)},g=(a,o)=>{const x=p({},s);x.field_map[o][a.target.name]=a.target.value,a.target.value==="custom"&&(x.field_map[o].customValue=""),d(x)};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:a=>g(a,i),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:r==null?void 0:r.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`${n("General Smart Codes","bit-integrations")} ${h?"":`(${n("Pro","bit-integrations")})`}`,children:h&&((w=V)==null?void 0:w.map(a=>t.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),e.formField==="custom"&&t.jsx(S,{onChange:a=>R(a,i,s,d),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:r}),t.jsxs("select",{className:"btcd-paper-inp",name:"mailPoetField",value:e.mailPoetField,onChange:a=>g(a,i),disabled:l,children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),l?((F=s==null?void 0:s.default)==null?void 0:F.fields)&&Object.values(s.default.fields).map(a=>t.jsx("option",{value:a.id,children:a.name},`${a.id}-1`)):c&&c.map(a=>t.jsx("option",{value:a.id,children:a.name},`${a.id}-1`))]})]}),!l&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>u(i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>m(i),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(I,{})})]})]})}function G({mailPoetConf:i,setMailPoetConf:r}){var l;const e=_($),{isPro:s}=e,d=(c,b)=>{const h=p({},i);b==="update"&&(c.target.checked?h.actions.update=!0:delete h.actions.update),r(p({},h))};return t.jsx("div",{className:"pos-rel d-flx w-8",children:t.jsx(O,{checked:((l=i.actions)==null?void 0:l.update)||!1,onChange:c=>d(c,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",isInfo:!s,title:t.jsx(U,{title:n("Update Subscriber","bit-integrations")}),subTitle:t.jsx(H,{title:n("Update Subscriber","bit-integrations"),subTitle:n("Update Mailpoet exist Subscriber? First name, last name, and email may not be updated.","bit-integrations"),proVersion:"2.4.1"})})})}function ee({formID:i,formFields:r,mailPoetConf:e,setMailPoetConf:s,isLoading:d,setIsLoading:l,setSnackbar:c}){var h;const b=u=>{const m=p({},e);u?(m.lists=u?u.split(","):[],B(m,s,l,c)):delete m.lists,s(p({},m))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("List:","bit-integrations")}),t.jsx(q,{defaultValue:e==null?void 0:e.lists,className:"btcd-paper-drpdwn w-6",options:((h=e==null?void 0:e.default)==null?void 0:h.newsletterList)&&Object.keys(e.default.newsletterList).map(u=>({label:e.default.newsletterList[u].newsletterName,value:e.default.newsletterList[u].newsletterId})),onChange:u=>b(u)}),t.jsx("button",{onClick:()=>A(i,e,s,l,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Refresh MailPoet List","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),d&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.lists)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("MailPoet Fields","bit-integrations")})})]}),e.field_map.map((u,m)=>t.jsx(E,{i:m,field:u,mailPoetConf:e,formFields:r,setMailPoetConf:s},`mailpoet-m-${m+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>D(e.field_map.length,e,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx(G,{mailPoetConf:e,setMailPoetConf:s,formFields:r})]})]})}export{ee as M,P as c,C as h,A as r};
