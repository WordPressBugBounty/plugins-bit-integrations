var y=Object.defineProperty;var v=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var N=(i,t,a)=>t in i?y(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a,o=(i,t)=>{for(var a in t||(t={}))M.call(t,a)&&N(i,a,t[a]);if(v)for(var a of v(t))k.call(t,a)&&N(i,a,t[a]);return i};import{r as u,j as s,f as L}from"./main-425.js";import{ag as _,x as T}from"./bi.900.437.js";import{_ as l,e as V,s as F}from"./bi.107.0.js";import{a as B}from"./bi.814.9.js";import{b as $}from"./bi.563.11.js";import{l as P,g as U}from"./bi.684.903.js";import{a as q,h as A}from"./bi.25.3.js";import{T as O}from"./bi.178.675.js";function z({newsletterConf:i,setNewsletterConf:t}){const[a,e]=u.useState({show:!1}),n=r=>{const m=o({},i);r.target.checked?m.actions.lists=!0:delete m.actions.lists,e({show:"lists"}),t(o({},m))},d=()=>{e({show:!1})},b=(r,m)=>{const x=o({},i);x[m]=r,t(o({},x))},h=P();return s.jsxs("div",{className:"pos-rel d-flx w-8",children:[s.jsx($,{checked:i.selectedLists||!1,onChange:r=>n(r),className:"wdt-200 mt-4 mr-2",value:"select_lists",title:l("Select Lists","bit-integrations"),subTitle:l("Choose which lists to add subscribers to.","bit-integrations")}),s.jsxs(B,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:l("Ok","bit-integrations"),show:a.show==="lists",close:d,action:d,title:l("Lists","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),s.jsxs("div",{className:"mt-2 flx",children:[l("Select Lists","bit-integrations"),s.jsx(_,{width:250,icnSize:17,className:"ml-1",children:s.jsx("div",{className:"txt-body",children:l("Subscribers will be associated with the selected lists","bit-integrations")})})]}),s.jsx("div",{className:"mt-2",children:s.jsx(T,{options:h,className:"msl-wrp-options",defaultValue:i==null?void 0:i.selectedLists,onChange:r=>b(r,"selectedLists"),style:{width:"100%"}})})]})]})}const S=(i,t,a)=>{const e=o({},t);e.field_map.splice(i,0,{}),a(o({},e))},E=(i,t,a)=>{const e=o({},t);e.field_map.length>1&&e.field_map.splice(i,1),a(o({},e))},f=(i,t,a,e)=>{const n=o({},a);n.field_map[t][i.target.name]=i.target.value,i.target.value==="custom"&&(n.field_map[t].customValue=""),e(o({},n))};function I({i,formFields:t,field:a,newsletterConf:e,setNewsletterConf:n}){var x,j,g;const d=(e==null?void 0:e.staticFields.filter(c=>c.required===!0))||[],b=((x=e==null?void 0:e.staticFields)==null?void 0:x.filter(c=>c.required===!1))||[];if(((j=e==null?void 0:e.field_map)==null?void 0:j.length)===1&&a.newsletterFormField===""){const c=o({},e),p=U(c);c.field_map=p,n(c)}let h=!1;a.newsletterFormField==="status"&&(h=!0);const r=L(V),{isPro:m}=r;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:c=>f(c,i,e,n),children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),s.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:t==null?void 0:t.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),s.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),s.jsx("optgroup",{label:F(l("General Smart Codes %s","bit-integrations"),m?"":`(${l("Pro","bit-integrations")})`),children:m&&((g=q)==null?void 0:g.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),a.formField==="custom"&&s.jsx(O,{onChange:c=>A(c,i,e,n),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:t}),s.jsxs("select",{className:"btcd-paper-inp",disabled:i<d.length,name:"newsletterFormField",value:i<d?d[i].label||"":a.newsletterFormField||"",onChange:c=>f(c,i,e,n),children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),i<d.length?s.jsx("option",{value:d[i].key,children:d[i].label},d[i].key):b.map(({key:c,label:p})=>s.jsx("option",{value:c,children:p},c))]})]}),s.jsxs("div",{className:"flx integ-fld-wrp",children:[h&&s.jsx("div",{children:s.jsx(_,{width:350,icnSize:17,className:"ml-2",children:s.jsxs("div",{className:"txt-body",children:[s.jsxs("p",{children:[l("Below are the available statuses for newsletter (single letters are the value)","bit-integrations"),":"]}),s.jsxs("li",{children:[l("Confirmed","bit-integrations")," = C"]}),s.jsxs("li",{children:[l("Not Confirmed","bit-integrations")," = S"]}),s.jsxs("li",{children:[l("Unsubscribed","bit-integrations")," = U"]}),s.jsxs("li",{children:[l("Bounced","bit-integrations")," = B"]}),s.jsxs("li",{children:[l("Complained","bit-integrations")," = P"]}),s.jsxs("p",{children:[s.jsxs("strong",{children:[l("Note","bit-integrations"),": "]}),F(l("you have to insert one of the mentioned %s statuses; otherwise, subscriber adding will fail. You can also omit this status field; if omitted, the status will be set to %s by default","bit-integrations"),"(C, S, U, B, P)",'"Confirmed (C)"')]})]})})}),i>=d.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>S(i,e,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>E(i,e,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})]})})}function X({formFields:i,newsletterConf:t,setNewsletterConf:a,loading:e,setLoading:n,setSnackbar:d}){return u.useState({name:"",auth_token:""}),u.useState(!1),s.jsx(s.Fragment,{children:s.jsxs("div",{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-5",children:s.jsx("b",{className:"wdt-100",children:l("Field Map","bit-integrations")})}),s.jsx("br",{}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Newsletter Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((b,h)=>s.jsx(I,{i:h,field:b,newsletterConf:t,formFields:i,setNewsletterConf:a,setSnackbar:d},`rp-m-${h+9}`)),s.jsxs("div",{children:[s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>S(t.field_map.length,t,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(z,{newsletterConf:t,setNewsletterConf:a})]})]})})}export{X as N};
