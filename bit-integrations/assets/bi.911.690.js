var y=Object.defineProperty;var N=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var v=(a,l,e)=>l in a?y(a,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[l]=e,u=(a,l)=>{for(var e in l||(l={}))$.call(l,e)&&v(a,e,l[e]);if(N)for(var e of N(l))M.call(l,e)&&v(a,e,l[e]);return a};import{i as L,j as s,L as q}from"./main-650.js";import{b as _,_ as d,j as T,k as V,l as k,T as R,n as D,o as O}from"./bi.541.15.js";import{T as I}from"./bi.619.660.js";const E=(a,l,e,t,n)=>{t(!0),_({},"refresh_news_letter").then(r=>{if(r&&r.success){const c=u({},l);c.default||(c.default={}),r.data.newsletterList&&(c.default.newsletterList=r.data.newsletterList),n({show:!0,msg:d("Newsletter list refreshed","bit-integrations")}),e(u({},c))}else r&&r.data&&r.data.data||!r.success&&typeof r.data=="string"?n({show:!0,msg:`${d("Newsletter list refresh failed Cause:","bit-integrations")}${r.data.data||r.data}. ${d("please try again","bit-integrations")}`}):n({show:!0,msg:d("Newsletter list refresh failed. please try again","bit-integrations")});t(!1)}).catch(()=>t(!1))},G=(a,l,e,t)=>{_({},"mail_poet_list_headers").then(n=>{if(n&&n.success){const r=u({},a);if(n.data.mailPoetFields){r.default.fields=n.data.mailPoetFields;const{fields:c}=r.default;r.field_map=Object.values(c).filter(m=>m.required).map(m=>({formField:"",mailPoetField:m.id,required:!0})),t({show:!0,msg:d("Mailpoet fields refreshed","bit-integrations")})}else t({show:!0,msg:d("No Mailpoet fields found. Try changing the header row number or try again","bit-integrations")});n.data.tokenDetails&&(r.tokenDetails=n.data.tokenDetails),l(u({},r))}else t({show:!0,msg:d("Mailpoet fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))},K=(a,l,e)=>{const t=u({},l);t.name=a.target.value,e(u({},t))},Q=a=>!((a!=null&&a.field_map?a.field_map.filter(e=>!e.formField&&e.mailPoetField&&e.required):[]).length>0);function H({i:a,formFields:l,field:e,mailPoetConf:t,setMailPoetConf:n}){var o,w,f,F;const r=e.required,c=((o=t==null?void 0:t.default)==null?void 0:o.fields)&&Object.values((w=t==null?void 0:t.default)==null?void 0:w.fields).filter(i=>i.required===""),m=L(T),{isPro:x}=m,p=i=>{const b=u({},t);b.field_map.splice(i,0,{}),n(b)},h=i=>{const b=u({},t);b.field_map.length>1&&b.field_map.splice(i,1),n(b)},j=(i,b)=>{const g=u({},t);g.field_map[b][i.target.name]=i.target.value,i.target.value==="custom"&&(g.field_map[b].customValue=""),n(g)};return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:i=>j(i,a),children:[s.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),s.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:l==null?void 0:l.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${d("General Smart Codes","bit-integrations")} ${x?"":`(${d("Pro","bit-integrations")})`}`,children:x&&((f=V)==null?void 0:f.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),e.formField==="custom"&&s.jsx(I,{onChange:i=>k(i,a,t,n),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:l}),s.jsxs("select",{className:"btcd-paper-inp",name:"mailPoetField",value:e.mailPoetField,onChange:i=>j(i,a),disabled:r,children:[s.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),r?((F=t==null?void 0:t.default)==null?void 0:F.fields)&&Object.values(t.default.fields).map(i=>s.jsx("option",{value:i.id,children:i.name},`${i.id}-1`)):c&&c.map(i=>s.jsx("option",{value:i.id,children:i.name},`${i.id}-1`))]})]}),!r&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>p(a),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>h(a),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(R,{})})]})]})}function U({formID:a,formFields:l,mailPoetConf:e,setMailPoetConf:t,isLoading:n,setIsLoading:r,setSnackbar:c}){var x;const m=p=>{const h=u({},e);p?(h.lists=p?p.split(","):[],G(h,t,r,c)):delete h.lists,t(u({},h))};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:d("List:","bit-integrations")}),s.jsx(D,{defaultValue:e==null?void 0:e.lists,className:"btcd-paper-drpdwn w-6",options:((x=e==null?void 0:e.default)==null?void 0:x.newsletterList)&&Object.keys(e.default.newsletterList).map(p=>({label:e.default.newsletterList[p].newsletterName,value:e.default.newsletterList[p].newsletterId})),onChange:p=>m(p)}),s.jsx("button",{onClick:()=>E(a,e,t,r,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh MailPoet List","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]}),n&&s.jsx(q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.lists)&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:d("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:d("MailPoet Fields","bit-integrations")})})]}),e.field_map.map((p,h)=>s.jsx(H,{i:h,field:p,mailPoetConf:e,formFields:l,setMailPoetConf:t},`mailpoet-m-${h+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>O(e.field_map.length,e,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{})]})]})}export{U as M,Q as c,K as h,E as r};
