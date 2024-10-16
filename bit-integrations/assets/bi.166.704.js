var k=Object.defineProperty,q=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var M=(d,r,e)=>r in d?k(d,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):d[r]=e,o=(d,r)=>{for(var e in r||(r={}))A.call(r,e)&&M(d,e,r[e]);if(y)for(var e of y(r))V.call(r,e)&&M(d,e,r[e]);return d},g=(d,r)=>q(d,O(r));import{j as s,i as I,L as R}from"./main-29.js";import{b as _,A as N,_ as l,m as T,j as E,k as H,l as L,T as P,n as B,o as D}from"./bi.860.15.js";import{T as G}from"./bi.831.661.js";const w=(d,r,e,a,n,b)=>{n(g(o({},a),{fluentCrmList:!0})),_({},"refresh_fluent_crm_lists").then(i=>{i&&i.success?(e(h=>N(h,p=>{p.fluentCrmList=i.data.fluentCrmList,p.fluentCrmTags=i.data.fluentCrmTags})),b({show:!0,msg:l("FluentCRM list refreshed","bit-integrations")})):i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?b({show:!0,msg:`${l("FluentCRM list refresh failed Cause:","bit-integrations")}${i.data.data||i.data}. ${l("please try again","bit-integrations")}`}):b({show:!0,msg:l("FluentCRM list refresh failed. please try again","bit-integrations")}),n(g(o({},a),{fluentCrmList:!1}))}).catch(()=>n(g(o({},a),{fluentCrmTags:!0})))},$=(d,r,e,a,n,b)=>{n(g(o({},a),{fluentCrmTags:!0})),_({},"refresh_fluent_crm_tags").then(i=>{i&&i.success?(e(h=>N(h,p=>{p.default||(p.default={}),i.data.fluentCrmTags&&(p.fluentCrmTags=i.data.fluentCrmTags)})),b({show:!0,msg:l("FluentCRM Tags refreshed","bit-integrations")})):i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?b({show:!0,msg:`${l("FluentCRM tags refresh failed Cause:","bit-integrations")}${i.data.data||i.data}. ${l("please try again","bit-integrations")}`}):b({show:!0,msg:l("FluentCRM tags refresh failed. please try again","bit-integrations")}),n(g(o({},a),{fluentCrmTags:!1}))}).catch(()=>n(g(o({},a),{fluentCrmTags:!1})))},U=(d,r,e,a)=>{e(!0),_({},"fluent_crm_headers").then(n=>{n&&n.success?n.data.fluentCrmFlelds?(r(b=>N(b,i=>{i.fluentCrmFlelds=n.data.fluentCrmFlelds,i.field_map=z(i)})),a({show:!0,msg:l("Fluent CRM fields refreshed","bit-integrations")})):a({show:!0,msg:l("No Fluent CRM fields found. Try changing the header row number or try again","bit-integrations")}):a({show:!0,msg:l("Fluent CRM fields refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},z=d=>{const{field_map:r}=d,{fluentCrmFlelds:e}=d,n=Object.values(e).filter(h=>h.required).map(h=>({formField:"",fluentCRMField:h.key,required:!0})).filter(h=>!r.find(p=>p.fluentCRMField===h.fluentCRMField)),i=r.filter(h=>h.fluentCRMField||h.formField).map(h=>{const p=e[h.fluentCRMField];return p?g(o({},h),{formField:p.label}):h});return[...n,...i]},Z=(d,r,e)=>{const a=o({},r);a.name=d.target.value,e(o({},a))},S=d=>!((d!=null&&d.field_map?d.field_map.filter(e=>!e.formField&&e.fluentCRMField&&e.required):[]).length>0);function J({fluentCrmConf:d,setFluentCrmConf:r,formFields:e}){var n,b;const a=(i,h)=>{const p=o({},d);h==="exists"&&(i.target.checked?p.actions.skip_if_exists=!0:delete p.actions.skip_if_exists),h==="doubleOpIn"&&(i.target.checked?p.actions.double_opt_in=!0:delete p.actions.double_opt_in),r(o({},p))};return s.jsxs("div",{className:"pos-rel d-flx w-8",children:[s.jsx(T,{checked:((n=d.actions)==null?void 0:n.skip_if_exists)||!1,onChange:i=>a(i,"exists"),className:"wdt-200 mt-4 mr-2",value:"skip_if_exists",title:l("Skip exist Contact","bit-integrations"),subTitle:l("Skip if contact already exist in FluentCRM","bit-integrations")}),s.jsx(T,{checked:((b=d.actions)==null?void 0:b.double_opt_in)||!1,onChange:i=>a(i,"doubleOpIn"),className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:l("Double Opt-in","bit-integrations"),subTitle:l("Enable Double Option for new contacts","bit-integrations")})]})}function K({i:d,formFields:r,field:e,fluentCrmConf:a,setFluentCrmConf:n}){var u;const b=e.required,i=(a==null?void 0:a.fluentCrmFlelds)&&Object.values(a==null?void 0:a.fluentCrmFlelds).filter(t=>!t.required),h=I(E),{isPro:p}=h,j=t=>{const c=o({},a);c.field_map.splice(t,0,{}),n(c)},F=t=>{const c=o({},a);c.field_map.length>1&&c.field_map.splice(t,1),n(c)},x=(t,c)=>{const m=o({},a);m.field_map[c][t.target.name]=t.target.value,t.target.value==="custom"&&(m.field_map[c].customValue=""),n(m)};return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:t=>x(t,d),children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),s.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:r==null?void 0:r.map(t=>s.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))}),s.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${l("General Smart Codes","bit-integrations")} ${p?"":`(${l("Pro","bit-integrations")})`}`,children:p&&((u=H)==null?void 0:u.map(t=>s.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),e.formField==="custom"&&s.jsx(G,{onChange:t=>L(t,d,a,n),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:r}),s.jsxs("select",{className:"btcd-paper-inp",name:"fluentCRMField",value:e.fluentCRMField,onChange:t=>x(t,d),disabled:b,children:[s.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),b?a.fluentCrmFlelds&&Object.values(a.fluentCrmFlelds).map(t=>s.jsx("option",{value:t.key,children:t.label},`${t.key}-1`)):i&&i.map(t=>s.jsx("option",{value:t.key,children:t.label},`${t.key}-1`))]})]}),!b&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>j(d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>F(d),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(P,{})})]})]})}function f({formID:d,formFields:r,fluentCrmConf:e,setFluentCrmConf:a,isLoading:n,setIsLoading:b,loading:i,setLoading:h,setSnackbar:p}){const j=t=>{const c=o({},e);t?c.tags=t?t.split(","):[]:delete c.tags,a(o({},c))},F=[{value:"add-tag",label:l("Add tag to a user","bit-integrations")},{value:"remove-tag",label:l("Remove tag from a user","bit-integrations")},{value:"add-user",label:l("Add user to a list","bit-integrations")},{value:"remove-user",label:l("Remove user from a list","bit-integrations")}],x=t=>{const c=o({},e);c.list_id=t.target.value,a(o({},c))},u=t=>{const c=o({},e),{name:m,value:v}=t.target;c==null||delete c.fluentCrmList,c==null||delete c.fluentCrmTags,t.target.value!==""?(c[m]=v,U(c,a,b,p),v==="add-user"||v==="remove-user"?w(d,c,a,i,h,p):$(d,c,a,i,h,p)):delete c[m],a(c)};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:l("Action:","bit-integrations")}),s.jsxs("select",{onChange:u,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:l("Select Action","bit-integrations")}),F.map(({label:t,value:c})=>s.jsx("option",{value:c,children:t},t))]})]}),s.jsx("br",{}),(i.fluentCrmList||i.fluentCrmTags)&&s.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((e==null?void 0:e.actionName)==="add-user"||(e==null?void 0:e.actionName)==="remove-user")&&(e==null?void 0:e.fluentCrmList)&&!i.fluentCrmList&&s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:l("Fluent CRM List:","bit-integrations")}),s.jsxs("select",{onChange:t=>x(t),name:"list_id",value:e.list_id,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:l("Select Fluent CRM list","bit-integrations")}),(e==null?void 0:e.fluentCrmList)&&Object.keys(e.fluentCrmList).map(t=>s.jsx("option",{value:e.fluentCrmList[t].id,children:e.fluentCrmList[t].title},t))]}),s.jsx("button",{onClick:()=>w(d,e,a,i,h,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh List, Tag & Field","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]}),(e==null?void 0:e.actionName)&&(e==null?void 0:e.actionName)!=="remove-user"&&(e==null?void 0:e.fluentCrmTags)&&!i.fluentCrmTags&&s.jsxs("div",{className:"flx mt-5",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:l("Fluent CRM Tags:","bit-integrations")}),s.jsx(B,{defaultValue:e==null?void 0:e.tags,className:"btcd-paper-drpdwn w-5",options:(e==null?void 0:e.fluentCrmTags)&&Object.keys(e.fluentCrmTags).map(t=>({label:e.fluentCrmTags[t].title,value:e.fluentCrmTags[t].id.toString()})),onChange:t=>j(t)}),s.jsx("button",{onClick:()=>$(d,e,a,i,h,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Tag & Field","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]}),n&&s.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.actionName)&&!n&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:l("Fluent CRM Fields","bit-integrations")})})]}),e.field_map.map((t,c)=>s.jsx(K,{i:c,field:t,fluentCrmConf:e,formFields:r,setFluentCrmConf:a},`fluentcrm-m-${c+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",style:{marginRight:85},children:s.jsx("button",{onClick:()=>D(e.field_map.length,e,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(e==null?void 0:e.actionName)==="add-user"&&s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(J,{fluentCrmConf:e,setFluentCrmConf:a,setIsLoading:b,setSnackbar:p})]})]})}export{f as F,S as c,Z as h};
