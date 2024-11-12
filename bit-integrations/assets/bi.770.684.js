var F=Object.defineProperty;var j=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var p=(s,l,t)=>l in s?F(s,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[l]=t,o=(s,l)=>{for(var t in l||(l={}))N.call(l,t)&&p(s,t,l[t]);if(j)for(var t of j(l))_.call(l,t)&&p(s,t,l[t]);return s};import{f as w,j as e}from"./main-288.js";import{e as y,_ as i}from"./bi.4.0.js";import{g as k,a as M}from"./bi.763.683.js";import{a as $,h as S}from"./bi.826.3.js";import{T}from"./bi.294.669.js";import{b as V}from"./bi.147.11.js";const v=(s,l,t)=>{const n=o({},l);n.field_map.splice(s,0,{}),t(o({},n))},q=(s,l,t)=>{const n=o({},l);n.field_map.length>1&&n.field_map.splice(s,1),t(o({},n))},g=(s,l,t,n)=>{const a=o({},t);a.field_map[l][s.target.name]=s.target.value,s.target.value==="custom"&&(a.field_map[l].customValue=""),n(o({},a))};function A({i:s,formFields:l,field:t,rapidmailConf:n,setRapidmailConf:a}){var m,x;if(((m=n==null?void 0:n.field_map)==null?void 0:m.length)===1&&t.rapidmailFormField===""){const c=o({},n),h=k(c);c.field_map=h,a(c)}const r=(n==null?void 0:n.recipientsFields.filter(c=>c.required===!0))||[],d=(n==null?void 0:n.recipientsFields.filter(c=>c.required===!1))||[],u=w(y),{isPro:b}=u;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:c=>g(c,s,n,a),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:l==null?void 0:l.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),b?"":`(${i("Pro","bit-integrations")})`),children:b&&((x=$)==null?void 0:x.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),t.formField==="custom"&&e.jsx(T,{onChange:c=>S(c,s,n,a),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:l}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<r.length,name:"rapidmailFormField",value:s<r?r[s].label||"":t.rapidmailFormField||"",onChange:c=>g(c,s,n,a),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),s<r.length?e.jsx("option",{value:r[s].key,children:r[s].label},r[s].key):d.map(({key:c,label:h})=>e.jsx("option",{value:c,children:h},c))]})]}),s>=r.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>v(s,n,a),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>q(s,n,a),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function R({rapidmailConf:s,setRapidmailConf:l}){var n;const t=(a,r)=>{const d=o({},s);r==="send_activationmail"&&(a.target.checked?d.actions.send_activationmail=!0:delete d.actions.send_activationmail),l(o({},d))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(V,{checked:((n=s.actions)==null?void 0:n.send_activationmail)||!1,onChange:a=>t(a,"send_activationmail"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:i("Double Opt-in","bit-integrations"),subTitle:i("Add Double Opt-in","bit-integrations")})})}function H({formFields:s,handleInput:l,rapidmailConf:t,setRapidmailConf:n,isLoading:a,setIsLoading:r,setSnackbar:d}){var u;return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:i("Recipient:","bit-integrations")}),e.jsxs("select",{onChange:l,name:"recipient_id",value:t.recipient_id,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select Recipients","bit-integrations")}),((u=t==null?void 0:t.default)==null?void 0:u.recipientlists)&&t.default.recipientlists.map(({id:b,name:m})=>e.jsx("option",{value:b,children:m},b))]}),e.jsx("button",{onClick:()=>M(t,n,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch All Recipients","bit-integrations")}'`},type:"button",disabled:a,children:"↻"}),e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Rapidmail Fields","bit-integrations")})})]}),(t==null?void 0:t.recipient_id)&&(t==null?void 0:t.field_map.map((b,m)=>e.jsx(A,{i:m,field:b,rapidmailConf:t,formFields:s,setRapidmailConf:n,setSnackbar:d},`rp-m-${m+9}`))),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>v(t.field_map.length,t,n),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(R,{rapidmailConf:t,setRapidmailConf:n})]})}export{H as R};
