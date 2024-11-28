var K=Object.defineProperty;var R=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var E=(a,c,t)=>c in a?K(a,c,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[c]=t,p=(a,c)=>{for(var t in c||(c={}))Q.call(c,t)&&E(a,t,c[t]);if(R)for(var t of R(c))X.call(c,t)&&E(a,t,c[t]);return a};import{r as T,j as e,L as k,f as P}from"./main-441.js";import{u as S}from"./bi.141.437.js";import{_ as l,e as z}from"./bi.452.0.js";import{a as A,h as Y,b as Z}from"./bi.73.3.js";import{b as V}from"./bi.866.11.js";import{a as H}from"./bi.663.9.js";import{f as B,g as W}from"./bi.971.759.js";import{T as I}from"./bi.708.686.js";import{T as D}from"./bi.768.673.js";function G({groundhoggConf:a,setGroundhoggConf:c,formFields:t}){var b,w,M,$;const[s,m]=T.useState(!1),[d,o]=T.useState({show:!1,action:()=>{}}),N=(r,u)=>{var O,q;const _=p({},a);u==="tag"&&((O=r.target)!=null&&O.checked?_.actions.tags=!0:delete _.actions.tags),u==="optin_status_open"&&((q=r.target)!=null&&q.checked?_.optin_status_open=!0:delete _.optin_status_open),c(p({},_))},j=()=>{o({show:!1})},v=r=>{const u=p({},a);r?u.actions.tags=r:delete u.actions.tags,c(p({},u))},i=r=>{const u=p({},a);r?u.optin_status=r:u.optin_status="1",c(p({},u))},x=()=>{o({show:"tag"})},h=()=>{o({show:"optin_status"})},F=(((b=a==null?void 0:a.default)==null?void 0:b.tags)||[]).map(({tag_name:r})=>({label:r,value:`ground-${r}`})),y=[{type:"group",title:l("Groundhogg Tags","bit-integrations"),childs:F},{type:"group",title:l("Form Fields","bit-integrations"),childs:t.map(r=>({label:r.label,value:r.name}))},{type:"group",title:l("Special Tags","bit-integrations"),childs:(w=A)==null?void 0:w.map(r=>({label:r.label,value:r.name}))}],n=[{label:l("Unconfirmed","bit-integrations"),value:"1"},{label:l("Confirmed","bit-integrations"),value:"2"},{label:l("Unsubscribed","bit-integrations"),value:"3"},{label:l("Weekly","bit-integrations"),value:"4"},{label:l("Monthly","bit-integrations"),value:"5"},{label:l("Bounced","bit-integrations"),value:"6"},{label:l("Spam","bit-integrations"),value:"7"},{label:l("Complained","bit-integrations"),value:"8"}];return e.jsxs("div",{className:"d-flx wdt-300",children:[e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(I,{action:x,children:e.jsx(V,{checked:((M=a==null?void 0:a.actions)==null?void 0:M.tags)||!1,onChange:r=>N(r,"tag"),className:"wdt-200 mt-4 mr-2",value:"tags",title:l("Add Tags","bit-integrations"),subTitle:l("Add Contact Tag","bit-integrations")})}),e.jsxs(H,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:d.show==="tag",close:j,action:j,title:l("Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:l("Select tag","bit-integrations")}),s?e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(S,{options:y,className:"msl-wrp-options",defaultValue:($=a.actions)==null?void 0:$.tags,onChange:r=>v(r),customValue:!0}),e.jsx("button",{onClick:()=>B(null,a,c,m),className:"icn-btn sh-sm ml-2 mr-4 tooltip",style:{"--tooltip-txt":`'${l("Refresh Groundhogg Tags","bit-integrations")}'`},type:"button",disabled:s,children:"↻"})]})]})]}),e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(I,{action:h,children:e.jsx(V,{checked:(a==null?void 0:a.optin_status_open)||!1,onChange:r=>N(r,"optin_status_open"),className:"wdt-200 mt-4 mr-2",value:"optin_status_open",title:l("Optin Status","bit-integrations"),subTitle:l("Add optin status","bit-integrations")})}),e.jsxs(H,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:d.show==="optin_status",close:j,action:j,title:l("Optin status","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:l("Select Optin status","bit-integrations")}),s?e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(S,{options:n,className:"msl-wrp-options",defaultValue:a.optin_status,onChange:r=>i(r),singleSelect:!0})})]})]})]})}const f=(a,c,t)=>{const s=p({},c);s.field_map.splice(a,0,{}),t(p({},s))},C=(a,c,t)=>{const s=p({},c);s.field_map.length>1&&s.field_map.splice(a,1),t(p({},s))},J=(a,c,t)=>{const s=p({},c);s.field_map_meta.splice(a,0,{}),t(p({},s))},g=(a,c,t)=>{const s=p({},c);s.field_map_meta.length>1&&s.field_map_meta.splice(a,1),t(p({},s))},U=(a,c,t,s)=>{const m=p({},t);m.field_map[c][a.target.name]=a.target.value,a.target.value==="custom"&&(m.field_map[c].customValue=""),s(p({},m))},L=(a,c,t,s)=>{const m=p({},t);m.field_map_meta[c][a.target.name]=a.target.value,a.target.value==="custom"&&(m.field_map_meta[c].customMetaFormValue=""),s(p({},m))},ee=(a,c,t,s)=>{const m=p({},t);m.field_map_meta[c].customMetaFormValue=a,s(p({},m))};function te({i:a,formFields:c,field:t,groundhoggConf:s,setGroundhoggConf:m}){var v;T.useEffect(()=>{var i;if(((i=s==null?void 0:s.field_map)==null?void 0:i.length)===1&&t.GroundhoggMapField===""){const x=p({},s),h=W(x);x.field_map=h,m(x)}},[]);const d=(s==null?void 0:s.contactsFields.filter(i=>i.required===!0))||[],o=(s==null?void 0:s.contactsFields.filter(i=>i.required===!1))||[],N=P(z),{isPro:j}=N;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:i=>U(i,a,s,m),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:c==null?void 0:c.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),j?"":`(${l("Pro","bit-integrations")})`),children:j&&((v=A)==null?void 0:v.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-gh-${i.name}`)))})]}),t.formField==="custom"&&e.jsx(D,{onChange:i=>Y(i,a,s,m),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:c}),e.jsxs("select",{className:"btcd-paper-inp",disabled:a<d.length,name:"GroundhoggMapField",value:a<d.length?d[a].key||"":t.GroundhoggMapField||"",onChange:i=>U(i,a,s,m),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),a<d.length?e.jsx("option",{value:d[a].key,children:d[a].label},d[a].key):o.map(({key:i,label:x})=>e.jsx("option",{value:i,children:x},i))]})]}),a>=d.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>f(a,s,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>C(a,s,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ae({i:a,formFields:c,field:t,groundhoggConf:s,setGroundhoggConf:m}){var v;T.useEffect(()=>{var i;if(((i=s==null?void 0:s.field_map_meta)==null?void 0:i.length)===1&&t.GroundhoggMetaMapField===""){const x=p({},s),h=W(x);x.field_map_meta=h,m(x)}},[]);const d=(s==null?void 0:s.contactMetaFields.filter(i=>i.required===!0))||[],o=(s==null?void 0:s.contactMetaFields.filter(i=>i.required===!1))||[],N=P(z),{isPro:j}=N;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:i=>L(i,a,s,m),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:c==null?void 0:c.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),j?"":`(${l("Pro","bit-integrations")})`),children:j&&((v=A)==null?void 0:v.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-gh-${i.name}`)))})]}),t.formField==="custom"&&e.jsx(D,{onChange:i=>ee(i,a,s,m),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customMetaFormValue,placeholder:l("Custom Value","bit-integrations"),formFields:c}),e.jsxs("select",{className:"btcd-paper-inp",disabled:a<d.length,name:"GroundhoggMetaMapField",value:a<d.length?d[a].key||"":t.GroundhoggMetaMapField||"",onChange:i=>L(i,a,s,m),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),a<d.length?e.jsx("option",{value:d[a].key,children:d[a].label},d[a].key):o.map(({key:i,label:x})=>e.jsx("option",{value:i,children:x},i))]})]}),a>=d.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>J(a,s,m),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>g(a,s,m),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function xe({formFields:a,handleInput:c,groundhoggConf:t,setGroundhoggConf:s,isLoading:m,setIsLoading:d,setSnackbar:o}){var F,y;const N=(n,b)=>{var M;const w=p({},t);b==="showMeta"&&((M=n.target)!=null&&M.checked?w.showMeta=!0:delete w.showMeta),s(p({},w))},j=n=>{const b=p({},t);n?b.addTagToUser=n:b.addTagToUser="",s(p({},b))},v=n=>{const b=p({},t);n?b.emailAddress=n:b.emailAddress="",s(p({},b))},i=(((F=t==null?void 0:t.default)==null?void 0:F.tags)||[]).map(({tag_name:n})=>({label:n,value:`ground-${n}`})),x=a.map(n=>({label:n.label,value:n.name})),h=[{type:"group",title:l("Groundhogg Tags","bit-integrations"),childs:i},{type:"group",title:l("Form Fields","bit-integrations"),childs:x},{type:"group",title:l("Special Tags","bit-integrations"),childs:(y=A)==null?void 0:y.map(n=>({label:n.label,value:n.name}))}];return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Actions:","bit-integrations")}),e.jsxs("select",{onChange:c,name:"mainAction",value:t.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select Actions","bit-integrations")}),t.allActions&&t.allActions.map(({key:n,label:b})=>e.jsx("option",{value:n,children:b},n))]}),e.jsx("br",{}),e.jsx("br",{}),t.mainAction==="2"&&e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:l("Email:","bit-integrations")}),e.jsx(S,{options:x,className:"btcd-paper-drpdwn w-5",defaultValue:t.emailAddress,onChange:n=>v(n),singleSelect:!0,closeOnSelect:!0})]}),m&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),t.mainAction==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:l("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Groundhogg Fields","bit-integrations")})})]}),t==null?void 0:t.field_map.map((n,b)=>e.jsx(te,{i:b,field:n,groundhoggConf:t,formFields:a,setGroundhoggConf:s},`rp-m-${b+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>Z(t.field_map.length,t,s,!1),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx(V,{checked:(t==null?void 0:t.showMeta)||!1,onChange:n=>N(n,"showMeta"),className:"wdt-200 mt-4 mr-2",value:"showMeta",title:l("Add Meta field","bit-integrations")})]}),e.jsx("br",{}),t.mainAction==="1"&&t.showMeta&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Groundhogg Meta Fields","bit-integrations")})})]}),t==null?void 0:t.field_map_meta.map((n,b)=>e.jsx(ae,{i:b,field:n,groundhoggConf:t,formFields:a,setGroundhoggConf:s},`rp-m-${b+9}`))]}),t.mainAction==="1"&&t.showMeta&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>J(t.field_map_meta.length,t,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.mainAction==="2"&&e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{className:"wdt-200 d-in-b mt-3 mt-i-3",children:l("All Tags:","bit-integrations")}),e.jsx(S,{options:h,className:"btcd-paper-drpdwn w-5",defaultValue:t.addTagToUser,onChange:n=>j(n),customValue:!0}),e.jsx("button",{onClick:()=>B(null,t,s,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh Groundhogg Tags","bit-integrations")}'`},type:"button",disabled:m,children:"↻"})]}),e.jsx("br",{}),e.jsx("br",{}),t.mainAction==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(G,{groundhoggConf:t,setGroundhoggConf:s,formFields:a})]})]})}export{xe as G};
