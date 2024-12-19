var ee=Object.defineProperty;var Q=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var X=(d,n,e)=>n in d?ee(d,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[n]=e,v=(d,n)=>{for(var e in n||(n={}))te.call(n,e)&&X(d,e,n[e]);if(Q)for(var e of Q(n))ie.call(n,e)&&X(d,e,n[e]);return d};import{j as t,r as O,L as le}from"./main-404.js";import{y as x,u as se,a8 as ae,x as re}from"./bi.613.437.js";import{_ as l,c as Z}from"./bi.51.0.js";import{T as W}from"./bi.484.11.js";import{M as de}from"./bi.488.3.js";import{T as ne}from"./bi.841.674.js";const Fe=(d,n,e,m,u,a=!1)=>{let p=x(n);const{name:b,value:f}=d.target;switch(p[b]=f,b){case"module":p=me(p,e,m,u,a);break}e(p)},me=(d,n,e,m,u=!1)=>{var p,b;let a=x(d);return a[d.module]||(a[d.module]={}),a[d.module].field_map=[],(b=(p=a==null?void 0:a.default)==null?void 0:p.fields)!=null&&b[d.module]?a=y(a):d.module!=="cancelSubscription"?k(a,n,e,m):w(d,n,e,m),(a==null?void 0:a.module)!=="changestatus"&&(a!=null&&a.filterstatus&&delete a.filterstatus,a!=null&&a.orderchange&&delete a.orderchange),(a==null?void 0:a.module)==="order"&&!u&&(a.taskNote=l("Flexible Checkout Fields are a feature available in the Pro version.","bit-integrations")),a},k=(d,n,e,m)=>{const{module:u}=d;u&&(e(!0),Z({module:u},"wc_refresh_fields").then(a=>{var p,b,f,_,s,g,r;if(a&&a.success){let i=x(d);a.data&&(i.default||(i.default={}),i.default.fields||(i.default.fields={}),u==="order"?([i.default.fields.order,i.default.fields.customer,i.default.fields.line_item]=a.data,i!=null&&i.order||(i.order={}),i!=null&&i.customer||(i.customer={}),i!=null&&i.line_item||(i.line_item={}),(p=i==null?void 0:i.order)!=null&&p.field_map||(i.order.field_map=[{formField:"",wcField:""}]),(b=i==null?void 0:i.customer)!=null&&b.field_map||(i.customer.field_map=[{formField:"",wcField:""}]),(f=i==null?void 0:i.line_item)!=null&&f.field_map||(i.line_item.field_map=[{formField:"",wcField:""}]),(_=i==null?void 0:i.order)!=null&&_.upload_field_map||(i.order.upload_field_map=[{formField:"",wcField:""}]),(s=i==null?void 0:i.customer)!=null&&s.upload_field_map||(i.customer.upload_field_map=[{formField:"",wcField:""}]),i=y(i,"order"),i=y(i,"customer"),i=ue(i,"line_item"),n(i),m({show:!0,msg:l("Fields refreshed","bit-integrations")})):(i.default.fields[u]=a.data,i!=null&&i[u]||(i[u]={}),(g=i==null?void 0:i[u])!=null&&g.field_map||(i[u].field_map=[{formField:"",wcField:""}]),(r=i==null?void 0:i[u])!=null&&r.upload_field_map||(i[u].upload_field_map=[{formField:"",wcField:""}]),i=y(i,u),n(i),m({show:!0,msg:l("Fields refreshed","bit-integrations")})))}else m({show:!0,msg:l("Fields refresh failed. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1)))},ue=(d,n)=>{const e=x(d);return e.default.fields[n].required.forEach(m=>{e[n].field_map.find(u=>u.wcField===m)||e[n].field_map.unshift({formField:"",wcField:m,required:!0})}),e[n].field_map.length||(e[n].field_map=[{formField:"",wcField:""}]),e},y=(d,n="")=>{const e=x(d);return n===""&&(n=e.module),e.default.fields[n].required.forEach(m=>{e[n].field_map.find(u=>u.wcField===m)||e[n].field_map.unshift({formField:"",wcField:m,required:!0})}),e[n].field_map.length||(e[n].field_map=[{formField:"",wcField:""}]),e},_e=d=>!((d?d.filter(e=>!e.formField||!e.wcField||!e.formField==="custom"&&!e.customValue):[]).length>0),w=(d,n,e,m)=>{e(!0),Z({},"wc_get_all_subscriptions_products").then(u=>{if(u&&u.success){const a=x(d);a.default||(a.default={}),u.data&&(a.default.allSubscriptionProducts=u.data),n(v({},a)),m({show:!0,msg:l("Subscription product refreshed","bit-integrations")})}else m({show:!0,msg:l("Failed to fetching subscription product. please try again","bit-integrations")});e(!1)}).catch(()=>e(!1))};function ce({i:d,formFields:n,field:e,wcConf:m,setWcConf:u}){const a=e.required===!0,p=s=>{const g=v({},m);g.line_item.field_map.splice(s,0,{}),u(g)},b=s=>{const g=x(m);g.line_item.field_map.splice(s,1),u(g)},f=(s,g)=>{const r=x(m);r.line_item.field_map[g][s.target.name]=s.target.value,s.target.value==="custom"&&(r.line_item.field_map[g].customValue=""),u(r)},_=(s,g)=>{const r=x(m);r.line_item.field_map[g].customValue=s.target.value,u(r)};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:s=>f(s,d),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),n.map(s=>s.type!=="file"&&t.jsx("option",{value:s.name,children:s.label},`ff-zhcrm-${s.name}`)),t.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")})]}),e.formField==="custom"&&t.jsx(de,{onChange:s=>_(s,d),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:l("Custom Value","bit-integrations")}),t.jsxs("select",{className:"btcd-paper-inp",name:"wcField",value:e.wcField||"",onChange:s=>f(s,d),disabled:a,children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),Object.values(m.default.fields.line_item.fields).map(s=>{if(a){if(s.required&&s.fieldKey===e.wcField)return t.jsx("option",{value:s.fieldKey,children:s.fieldName},`${s.fieldKey}-1`)}else if(!s.required)return t.jsx("option",{value:s.fieldKey,children:s.fieldName},`${s.fieldKey}-1`)})]})]}),!a&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>p(d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>b(d),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(W,{})})]})]})}function Y({i:d,formFields:n,field:e,wcConf:m,setWcConf:u,uploadFields:a,module:p}){const b=e.required===!0,f=r=>{const i=v({},m);a?i[p].upload_field_map.splice(r,0,{}):i[p].field_map.splice(r,0,{}),u(i)},_=r=>{const i=x(m);a?i[p].upload_field_map.length>1&&i[p].upload_field_map.splice(r,1):i[p].field_map.length>1&&i[p].field_map.splice(r,1),u(i)},s=(r,i)=>{const j=x(m);a?j[p].upload_field_map[i][r.target.name]=r.target.value:j[p].field_map[i][r.target.name]=r.target.value,r.target.value==="custom"&&(j[p].field_map[i].customValue=""),u(j)},g=(r,i)=>{u(j=>se(j,N=>{N[p].field_map[i].customValue=r}))};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:r=>s(r,d),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),a?n.map(r=>r.type==="file"&&t.jsx("option",{value:r.name,children:r.label},`ff-zhcrm-${r.name}`)):n.map(r=>r.type!=="file"&&t.jsx("option",{value:r.name,children:r.label},`ff-zhcrm-${r.name}`)),!a&&t.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")})]}),e.formField==="custom"&&t.jsx(ne,{onChange:r=>g(r,d),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:n}),t.jsxs("select",{className:"btcd-paper-inp",name:"wcField",value:e.wcField||"",onChange:r=>s(r,d),disabled:b,children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),Object.values(m.default.fields[p][a?"uploadFields":"fields"]).map(r=>{if(b){if(r.required&&r.fieldKey===e.wcField)return t.jsx("option",{value:r.fieldKey,children:r.fieldName},`${r.fieldKey}-1`)}else if(!r.required)return t.jsx("option",{value:r.fieldKey,children:r.fieldName},`${r.fieldKey}-1`)})]})]}),!b&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>f(d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>_(d),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(W,{})})]})]})}function je({formFields:d,handleInput:n,wcConf:e,setWcConf:m,isLoading:u,setIsLoading:a,setSnackbar:p}){var S,$,V,P,K,R,E,I,T,D,A,L,z,H,U,B,G;const b=(c,o,h="")=>{var J;const F=v({},e);h==="line_item"?(F.line_item.field_map.splice(c,0,{}),m(F)):o?(J=F[s])==null||J.upload_field_map.splice(c,0,{}):F[s].field_map.splice(c,0,{}),m(F)},[f,_]=O.useState({customer:!1,order:!0}),[s,g]=O.useState(e.module);O.useEffect(()=>{g(e.module)},[e==null?void 0:e.module]);const r=c=>{g(c),_({[c]:!0,[c==="customer"?"order":"customer"]:!1})},i=c=>{const{value:o}=c.target,h=v({},e);if(o==="order-id")h.changestatus.field_map=[{formField:"",wcField:"order_id",required:!0},{formField:"",wcField:"order_status",required:!0}];else if(o==="email")h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0}],h!=null&&h.orderchange&&delete h.orderchange;else if(o==="n-days"||o==="n-weeks"||o==="n-months"){const F=o[2]==="d"?"n_days":o[2]==="w"?"n_weeks":"n_months";h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:F,required:!0}]}else o==="prev-months"?h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0}]:o==="n-prev-months"?h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:"n_months",required:!0}]:h.changestatus.field_map=[{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:"from_date",required:!0},{formField:"",wcField:"to_date",required:!0}];h.filterstatus=o,m(h)},j=c=>{const{value:o}=c.target,h=v({},e);if(o==="date-order")h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:"from_date",required:!0},{formField:"",wcField:"to_date",required:!0}];else if(o==="n-days-order"||o==="n-weeks-order"||o==="n-months-order"||o==="n-prev-months-order"){const F=o[2]==="d"?"n_days":o[2]==="w"?"n_weeks":"n_months";h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0},{formField:"",wcField:F,required:!0}]}else h.changestatus.field_map=[{formField:"",wcField:"email",required:!0},{formField:"",wcField:"order_status",required:!0}];h.orderchange=o,m(h)},N=[{name:"customer",label:l("Create-Customer","bit-integrations")},{name:"product",label:l("Create-Product","bit-integrations")},{name:"order",label:l("Create-Order","bit-integrations")},{name:"changestatus",label:l("Change Order Status","bit-integrations")},{name:"cancelSubscription",label:l("Cancel Subscription","bit-integrations")}],q=[{name:"order-id",label:l("Specific Order ID","bit-integrations")},{name:"email",label:l("Specific Customer Email","bit-integrations")},{name:"date-range",label:l("Specific Date Range","bit-integrations")},{name:"n-days",label:l("Last N Day's Orders","bit-integrations")},{name:"n-weeks",label:l("Last N Week's Orders","bit-integrations")},{name:"n-months",label:l("Last N Month's Orders","bit-integrations")},{name:"prev-months",label:l("Previous Month's Orders","bit-integrations")},{name:"n-prev-months",label:l("Previous N Month's Orders","bit-integrations")}],M=[{name:"latest-order",label:l("Latest Order","bit-integrations")},{name:"all-order",label:l("All Orders","bit-integrations")},{name:"date-order",label:l("Specific Date Range","bit-integrations")},{name:"n-days-order",label:l("Last N Day's Orders","bit-integrations")},{name:"n-weeks-order",label:l("Last N Week's Orders","bit-integrations")},{name:"n-months-order",label:l("Last N Month's Orders","bit-integrations")},{name:"prev-months-order",label:l("Previous Month's Orders","bit-integrations")},{name:"n-prev-months-order",label:l("Previous N Month's Orders","bit-integrations")}],C=(c,o)=>{const h=v({},e);o==="productId"&&(c!==""?h[o]=c:delete h[o]),m(h)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:l("Module:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"module",value:e.module,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Module","bit-integrations")}),N==null?void 0:N.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))]}),t.jsx("br",{}),s==="changestatus"&&((V=($=(S=e.default)==null?void 0:S.fields)==null?void 0:$.changestatus)==null?void 0:V.fields)&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:l("Filter:","bit-integrations")}),t.jsxs("select",{onChange:i,name:"filterstatus",value:e.filterstatus,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Filter Type","bit-integrations")}),q==null?void 0:q.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))]}),t.jsx("br",{})]}),e.filterstatus==="email"&&(e==null?void 0:e.module)==="changestatus"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:l("Order Change:","bit-integrations")}),t.jsxs("select",{onChange:j,name:"orderchange",value:e==null?void 0:e.orderchange,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Order Change Type","bit-integrations")}),M==null?void 0:M.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))]}),t.jsx("br",{})]}),t.jsx("br",{}),(e==null?void 0:e.taskNote)&&t.jsx(ae,{note:e==null?void 0:e.taskNote}),u&&t.jsx(le,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.module==="order"&&t.jsxs("div",{className:"tab-box",children:[t.jsx("span",{className:`tab-item ${f.order&&"active"}`,onClick:()=>r("order"),children:"Order"}),t.jsx("span",{className:`tab-item ${f.customer&&"active"}`,onClick:()=>r("customer"),children:"Customer"})]}),e.module==="cancelSubscription"&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsxs("div",{className:"flx mt-1",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Product:","bit-integrations")}),t.jsx(re,{className:"w-5",defaultValue:e==null?void 0:e.productId,options:((P=e==null?void 0:e.default)==null?void 0:P.allSubscriptionProducts)&&e.default.allSubscriptionProducts.map(c=>({label:c.product_name,value:c.product_id})),onChange:c=>C(c,"productId"),singleSelect:!0}),t.jsx("button",{onClick:()=>w(e,m,a,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch All Subscription product","bit-integrations")}'`},type:"button",disabled:u,children:"↻"})]})]}),(((E=(R=(K=e.default)==null?void 0:K.fields)==null?void 0:R[s])==null?void 0:E.fields)&&s!=="changestatus"||((D=(T=(I=e.default)==null?void 0:I.fields)==null?void 0:T[s])==null?void 0:D.fields)&&s==="changestatus"&&(e==null?void 0:e.filterstatus)!=="email"&&(e==null?void 0:e.filterstatus)||((z=(L=(A=e.default)==null?void 0:A.fields)==null?void 0:L[s])==null?void 0:z.fields)&&s==="changestatus"&&e.filterstatus==="email"&&(e==null?void 0:e.orderchange))&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>k(e,m,a,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh fields","bit-integrations")}'`},type:"button",disabled:u,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("WooCommerce Fields","bit-integrations")})})]}),e[s].field_map.map((c,o)=>t.jsx(Y,{i:o,field:c,wcConf:e,formFields:d,setWcConf:m,module:s},`wc-m-${o+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>b(e[s].field_map.length),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),((B=(U=(H=e.default)==null?void 0:H.fields)==null?void 0:U[s])==null?void 0:B.uploadFields)&&s==="product"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:l("Map File Upload Fields","bit-integrations")}),t.jsx("button",{onClick:()=>k(e,m,a,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh fields","bit-integrations")}'`},type:"button",disabled:u,children:"↻"})]}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("WooCommerce Fields","bit-integrations")})})]}),e[s].upload_field_map.map((c,o)=>t.jsx(Y,{i:o,field:c,wcConf:e,formFields:d,setWcConf:m,uploadFields:!0,module:s},`wc-m-${o+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>b(e[s].field_map.length,!0),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),s==="order"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Map Line Items Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("WooCommerce Line Items Fields","bit-integrations")})})]}),(G=e==null?void 0:e.line_item)==null?void 0:G.field_map.map((c,o)=>t.jsx(ce,{i:o,field:c,wcConf:e,formFields:d,setWcConf:m},`wc-m-${o+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>b(e.line_item.field_map.length,!1,"line_item"),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})}export{je as W,_e as c,Fe as h};
