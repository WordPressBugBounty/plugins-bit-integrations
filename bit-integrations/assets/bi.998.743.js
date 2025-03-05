var P=Object.defineProperty,E=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var $=(l,r,e)=>r in l?P(l,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[r]=e,h=(l,r)=>{for(var e in r||(r={}))S.call(r,e)&&$(l,e,r[e]);if(w)for(var e of w(r))B.call(r,e)&&$(l,e,r[e]);return l},g=(l,r)=>E(l,H(r));import{r as D,f as O,j as s,L as T}from"./main-270.js";import{u as N,x as I}from"./bi.88.440.js";import{c as M,_ as a,e as V}from"./bi.340.0.js";import{a as G,h as L,b as U}from"./bi.155.3.js";import{a as z}from"./bi.724.9.js";import{b as R,T as J}from"./bi.209.11.js";import{P as K,a as Q}from"./bi.745.703.js";import{T as W}from"./bi.125.697.js";const k=(l,r,e,c,n,p)=>{n(g(h({},c),{fluentCrmList:!0})),M({},"refresh_fluent_crm_lists").then(i=>{i&&i.success?(e(o=>N(o,m=>{m.fluentCrmList=i.data.fluentCrmList,m.fluentCrmTags=i.data.fluentCrmTags})),p({show:!0,msg:a("FluentCRM list refreshed","bit-integrations")})):i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?p({show:!0,msg:`${a("FluentCRM list refresh failed Cause:","bit-integrations")}${i.data.data||i.data}. ${a("please try again","bit-integrations")}`}):p({show:!0,msg:a("FluentCRM list refresh failed. please try again","bit-integrations")}),n(g(h({},c),{fluentCrmList:!1}))}).catch(()=>n(g(h({},c),{fluentCrmTags:!0})))},A=(l,r,e,c,n,p)=>{n(g(h({},c),{fluentCrmTags:!0})),M({},"refresh_fluent_crm_tags").then(i=>{i&&i.success?(e(o=>N(o,m=>{m.default||(m.default={}),i.data.fluentCrmTags&&(m.fluentCrmTags=i.data.fluentCrmTags)})),p({show:!0,msg:a("FluentCRM Tags refreshed","bit-integrations")})):i&&i.data&&i.data.data||!i.success&&typeof i.data=="string"?p({show:!0,msg:`${a("FluentCRM tags refresh failed Cause:","bit-integrations")}${i.data.data||i.data}. ${a("please try again","bit-integrations")}`}):p({show:!0,msg:a("FluentCRM tags refresh failed. please try again","bit-integrations")}),n(g(h({},c),{fluentCrmTags:!1}))}).catch(()=>n(g(h({},c),{fluentCrmTags:!1})))},X=(l,r,e,c)=>{e(!0),M({},"fluent_crm_headers").then(n=>{n&&n.success?n.data.fluentCrmFlelds?(r(p=>N(p,i=>{i.fluentCrmFlelds=n.data.fluentCrmFlelds,i.field_map=Y(i)})),c({show:!0,msg:a("Fluent CRM fields refreshed","bit-integrations")})):c({show:!0,msg:a("No Fluent CRM fields found. Try changing the header row number or try again","bit-integrations")}):c({show:!0,msg:a("Fluent CRM fields refresh failed. please try again","bit-integrations")}),e(!1)}).catch(()=>e(!1))},q=(l,r,e,c,n)=>{c(g(h({},e),{company:!0})),M({},"fluent_crm_get_all_company").then(p=>{if(c(g(h({},e),{company:!1})),p.success&&(p!=null&&p.data)){r(i=>N(i,o=>{o.companies=p.data})),n({show:!0,msg:a("Fluent CRM Companies refreshed","bit-integrations")});return}n({show:!0,msg:a("Fluent CRM Companies refresh failed. please try again","bit-integrations")})})},Y=l=>{const{field_map:r}=l,{fluentCrmFlelds:e}=l,n=Object.values(e).filter(o=>o.required).map(o=>({formField:"",fluentCRMField:o.key,required:!0})).filter(o=>!r.find(m=>m.fluentCRMField===o.fluentCRMField)),i=r.filter(o=>o.fluentCRMField||o.formField).map(o=>{const m=e[o.fluentCRMField];return m?g(h({},o),{formField:m.label}):o});return[...n,...i]},re=(l,r,e)=>{const c=h({},r);c.name=l.target.value,e(h({},c))},ne=l=>!((l!=null&&l.field_map?l.field_map.filter(e=>!e.formField&&e.fluentCRMField&&e.required):[]).length>0);function Z({fluentCrmConf:l,setFluentCrmConf:r,loading:e,setLoading:c,setSnackbar:n}){var j,y,t,d,x;const[p,i]=D.useState({show:!1}),o=O(V),{isPro:m}=o,u=(b,F)=>{const v=h({},l);F==="exists"&&(b.target.checked?v.actions.skip_if_exists=!0:delete v.actions.skip_if_exists),F==="doubleOpIn"&&(b.target.checked?v.actions.double_opt_in=!0:delete v.actions.double_opt_in),F==="company_id"&&(i({show:"company_id"}),q(l,r,e,c,n)),F==="company"&&(v.actions.company_id=b),r(h({},v))},_=()=>{i({show:!1})};return s.jsxs("div",{className:"pos-rel d-flx w-8",children:[s.jsx(R,{checked:((j=l.actions)==null?void 0:j.skip_if_exists)||!1,onChange:b=>u(b,"exists"),className:"wdt-200 mt-4 mr-2",value:"skip_if_exists",title:a("Skip exist Contact","bit-integrations"),subTitle:a("Skip if contact already exist in FluentCRM","bit-integrations")}),s.jsx(R,{checked:((y=l.actions)==null?void 0:y.double_opt_in)||!1,onChange:b=>u(b,"doubleOpIn"),className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:a("Double Opt-in","bit-integrations"),subTitle:a("Enable Double Option for new contacts","bit-integrations")}),s.jsx(R,{checked:((t=l.actions)==null?void 0:t.company_id)||!1,onChange:b=>u(b,"company_id"),className:"wdt-200 mt-4 mr-2",value:"company_id",isInfo:!m,title:s.jsx(K,{title:a("Assign Company","bit-integrations")}),subTitle:s.jsx(Q,{title:a("Assign Company","bit-integrations"),subTitle:a("Assign Company for contact","bit-integrations"),proVersion:"2.3.8"})}),m&&s.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:p.show==="company_id",close:_,action:_,title:a("Assign Company","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),s.jsx("div",{className:"mt-2",children:a("Select Company","bit-integrations")}),e!=null&&e.company?s.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsxs("div",{className:"flx flx-center mt-2",children:[s.jsx(I,{options:(l==null?void 0:l.companies)&&l.companies.map(b=>({label:b.label,value:b.id.toString()})),className:"msl-wrp-options",defaultValue:((x=(d=l.actions)==null?void 0:d.company_id)==null?void 0:x.toString())||"",onChange:b=>u(b,"company"),singleSelect:!0,selectOnClose:!0}),s.jsx("button",{onClick:()=>q(l,r,e,c,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Companies","bit-integrations")}'`},type:"button",disabled:e==null?void 0:e.company,children:"↻"})]})]})]})}function f({i:l,formFields:r,field:e,fluentCrmConf:c,setFluentCrmConf:n}){var y;const p=e.required,i=(c==null?void 0:c.fluentCrmFlelds)&&Object.values(c==null?void 0:c.fluentCrmFlelds).filter(t=>!t.required),o=O(V),{isPro:m}=o,u=t=>{const d=h({},c);d.field_map.splice(t,0,{}),n(d)},_=t=>{const d=h({},c);d.field_map.length>1&&d.field_map.splice(t,1),n(d)},j=(t,d)=>{const x=h({},c);x.field_map[d][t.target.name]=t.target.value,t.target.value==="custom"&&(x.field_map[d].customValue=""),n(x)};return s.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:t=>j(t,l),children:[s.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),s.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:r==null?void 0:r.map(t=>s.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))}),s.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),s.jsx("optgroup",{label:`${a("General Smart Codes","bit-integrations")} ${m?"":`(${a("Pro","bit-integrations")})`}`,children:m&&((y=G)==null?void 0:y.map(t=>s.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`)))})]}),e.formField==="custom"&&s.jsx(W,{onChange:t=>L(t,l,c,n),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:r}),s.jsxs("select",{className:"btcd-paper-inp",name:"fluentCRMField",value:e.fluentCRMField,onChange:t=>j(t,l),disabled:p,children:[s.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),p?c.fluentCrmFlelds&&Object.values(c.fluentCrmFlelds).map(t=>s.jsx("option",{value:t.key,children:t.label},`${t.key}-1`)):i&&i.map(t=>s.jsx("option",{value:t.key,children:t.label},`${t.key}-1`))]})]}),!p&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>u(l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>_(l),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:s.jsx(J,{})})]})]})}function oe({formID:l,formFields:r,fluentCrmConf:e,setFluentCrmConf:c,isLoading:n,setIsLoading:p,loading:i,setLoading:o,setSnackbar:m}){const u=t=>{const d=h({},e);t?d.tags=t?t.split(","):[]:delete d.tags,c(h({},d))},_=[{value:"add-tag",label:a("Add tag to a user","bit-integrations")},{value:"remove-tag",label:a("Remove tag from a user","bit-integrations")},{value:"add-user",label:a("Add user to a list","bit-integrations")},{value:"remove-user",label:a("Remove user from a list","bit-integrations")}],j=t=>{const d=h({},e);d.list_id=t.target.value,c(h({},d))},y=t=>{const d=h({},e),{name:x,value:b}=t.target;d==null||delete d.fluentCrmList,d==null||delete d.fluentCrmTags,t.target.value!==""?(d[x]=b,X(d,c,p,m),b==="add-user"||b==="remove-user"?k(l,d,c,i,o,m):A(l,d,c,i,o,m)):delete d[x],c(d)};return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:a("Action:","bit-integrations")}),s.jsxs("select",{onChange:y,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:a("Select Action","bit-integrations")}),_.map(({label:t,value:d})=>s.jsx("option",{value:d,children:t},t))]})]}),s.jsx("br",{}),(i.fluentCrmList||i.fluentCrmTags)&&s.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((e==null?void 0:e.actionName)==="add-user"||(e==null?void 0:e.actionName)==="remove-user")&&(e==null?void 0:e.fluentCrmList)&&!i.fluentCrmList&&s.jsxs("div",{className:"flx",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:a("Fluent CRM List:","bit-integrations")}),s.jsxs("select",{onChange:t=>j(t),name:"list_id",value:e.list_id,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:a("Select Fluent CRM list","bit-integrations")}),(e==null?void 0:e.fluentCrmList)&&Object.keys(e.fluentCrmList).map(t=>s.jsx("option",{value:e.fluentCrmList[t].id,children:e.fluentCrmList[t].title},t))]}),s.jsx("button",{onClick:()=>k(l,e,c,i,o,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh List, Tag & Field","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]}),(e==null?void 0:e.actionName)&&(e==null?void 0:e.actionName)!=="remove-user"&&(e==null?void 0:e.fluentCrmTags)&&!i.fluentCrmTags&&s.jsxs("div",{className:"flx mt-5",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:a("Fluent CRM Tags:","bit-integrations")}),s.jsx(I,{defaultValue:e==null?void 0:e.tags,className:"btcd-paper-drpdwn w-5",options:(e==null?void 0:e.fluentCrmTags)&&Object.keys(e.fluentCrmTags).map(t=>({label:e.fluentCrmTags[t].title,value:e.fluentCrmTags[t].id.toString()})),onChange:t=>u(t)}),s.jsx("button",{onClick:()=>A(l,e,c,i,o,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Tag & Field","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]}),n&&s.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.actionName)&&!n&&s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:a("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:a("Fluent CRM Fields","bit-integrations")})})]}),e.field_map.map((t,d)=>s.jsx(f,{i:d,field:t,fluentCrmConf:e,formFields:r,setFluentCrmConf:c},`fluentcrm-m-${d+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",style:{marginRight:85},children:s.jsx("button",{onClick:()=>U(e.field_map.length,e,c),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(e==null?void 0:e.actionName)==="add-user"&&s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(Z,{fluentCrmConf:e,setFluentCrmConf:c,loading:i,setLoading:o,setSnackbar:m})]})]})}export{oe as F,ne as c,re as h};
