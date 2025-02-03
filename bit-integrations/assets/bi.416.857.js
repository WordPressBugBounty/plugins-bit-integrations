var B=Object.defineProperty,D=Object.defineProperties;var G=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var I=(e,l,s)=>l in e?B(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,h=(e,l)=>{for(var s in l||(l={}))U.call(l,s)&&I(e,s,l[s]);if(S)for(var s of S(l))z.call(l,s)&&I(e,s,l[s]);return e},F=(e,l)=>D(e,G(l));import{f as J,j as t,r as V,L as k}from"./main-814.js";import{x as $}from"./bi.8.440.js";import{c as K,d as _,_ as n,e as Q}from"./bi.317.0.js";import{a as q,b as O,d as W}from"./bi.897.708.js";import{a as X,h as Y}from"./bi.59.3.js";import{T as Z}from"./bi.321.683.js";import{a as L}from"./bi.765.9.js";import{b as R}from"./bi.672.11.js";const dt=(e,l,s)=>{const a=h({},l),{name:d}=e.target;e.target.value!==""?a[d]=e.target.value:delete a[d],s(h({},a))},ct=e=>!((e!=null&&e.field_map?e.field_map.filter(s=>s.formField===""||s.salesflareFormField===""||s.formField==="custom"&&s.customValue===""||s.salesflareFormField==="customFieldKey"&&s.customFieldKey===""):[]).length>0),P=e=>{const l=e==null?void 0:e.leadFields.filter(s=>s.required===!0);return l.length>0?l.map(s=>({formField:"",propovoiceCrmFormField:s.key})):[{formField:"",propovoiceCrmFormField:""}]},H=(e,l,s,a)=>{a(F(h({},s),{tags:!0})),K(null,"propovoice_crm_lead_tags").then(d=>{if(d&&d.success){l(c=>{const b=h({},c);return b.default||(b.default={}),d.data&&(b.default.allTags=d.data),b}),a(F(h({},s),{tags:!1})),_.success(n("All tags fetched successfully","bit-integrations"));return}a(F(h({},s),{tags:!1})),_.error(n("Propovoice Crm tags fetch failed. please try again","bit-integrations"))}).catch(()=>a(F(h({},s),{tags:!1})))},E=(e,l,s,a)=>{a(F(h({},s),{label:!0})),K(null,"propovoice_crm_lead_label").then(d=>{if(d&&d.success){l(c=>{const b=h({},c);return b.default||(b.default={}),d.data&&(b.default.allLabels=d.data),b}),a(F(h({},s),{label:!1})),_.success(n("All label fetched successfully","bit-integrations"));return}a(F(h({},s),{label:!1})),_.error(n("Propovoice Crm label fetch failed. please try again","bit-integrations"))}).catch(()=>a(F(h({},s),{label:!1})))};function v({i:e,field:l,formFields:s,propovoiceCrmConf:a,setPropovoiceCrmConf:d}){var x,g,N,y;if(((x=a==null?void 0:a.field_map)==null?void 0:x.length)===1&&l.propovoiceCrmFormField===""){const i=h({},a),w=P(i);i.field_map=w,d(i)}const c=((g=a==null?void 0:a.leadFields)==null?void 0:g.filter(i=>i.required===!0))||[],b=((N=a==null?void 0:a.leadFields)==null?void 0:N.filter(i=>i.required===!1))||[],m=J(Q),{isPro:j}=m;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:i=>q(i,e,a,d),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),t.jsx("optgroup",{label:n("Form Fields","bit-integrations"),children:s==null?void 0:s.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),t.jsx("option",{value:"custom",children:n("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(n("General Smart Codes %s","bit-integrations"),j?"":`(${n("Pro","bit-integrations")})`),children:j&&((y=X)==null?void 0:y.map(i=>t.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),l.formField==="custom"&&t.jsx(Z,{onChange:i=>Y(i,e,a,d),label:n("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:n("Custom Value","bit-integrations"),formFields:s}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<c.length,name:"propovoiceCrmFormField",value:e<c.length?c[e].key||"":l.propovoiceCrmFormField||"",onChange:i=>q(i,e,a,d),children:[t.jsx("option",{value:"",children:n("Select Field","bit-integrations")}),e<c.length?t.jsx("option",{value:c[e].key,children:c[e].label},c[e].key):b.map(({key:i,label:w})=>t.jsx("option",{value:i,children:w},i))]})]}),e>=c.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>O(e,a,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>W(e,a,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function p({propovoiceCrmConf:e,setPropovoiceCrmConf:l,formFields:s,isLoading:a,setIsLoading:d}){var y,i,w,A;const[c,b]=V.useState({show:!1,action:()=>{}}),[m,j]=V.useState({tags:!1,label:!1}),x=(u,f)=>{var M,T;const r=h({},e);f==="tags"?(M=u.target)!=null&&M.checked?(r.actions.tags=!0,H(r,l,m,j),b({show:"tags"})):(b({show:!1}),delete r.actions.tags):f==="label"&&((T=u.target)!=null&&T.checked?(r.actions.label=!0,E(r,l,m,j),b({show:"label"})):(b({show:!1}),delete r.actions.label)),l(h({},r))},g=()=>{b({show:!1})},N=(u,f)=>{const r=h({},e);f==="tags"?r.tags=u:f==="label"&&(r.label=u),l(r)};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(R,{checked:((y=e==null?void 0:e.actions)==null?void 0:y.tags)||!1,onChange:u=>x(u,"tags"),className:"wdt-200 mt-4 mr-2",value:"tags",title:n("Add tags","bit-integrations"),subTitle:n("tags add lead","bit-integrations")}),t.jsx(R,{checked:((i=e==null?void 0:e.actions)==null?void 0:i.label)||!1,onChange:u=>x(u,"label"),className:"wdt-200 mt-4 mr-2",value:"label",title:n("Add label","bit-integrations"),subTitle:n("label add lead","bit-integrations")}),t.jsxs(L,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:c.show==="tags",close:g,action:g,title:n("Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select tag","bit-integrations")}),m!=null&&m.tags?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx($,{options:(w=e==null?void 0:e.default)!=null&&w.allTags?e.default.allTags.map(u=>({label:u.name,value:u.term_id})):[],className:"msl-wrp-options",defaultValue:e==null?void 0:e.tags,onChange:u=>N(u,"tags")}),t.jsx("button",{onClick:()=>H(e,l,m,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]}),t.jsxs(L,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:n("Ok","bit-integrations"),show:c.show==="label",close:g,action:g,title:n("Label","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:n("Select label","bit-integrations")}),m!=null&&m.label?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx($,{options:(A=e==null?void 0:e.default)!=null&&A.allLabels?e.default.allLabels.map(u=>({label:u.name,value:u.term_id})):[],singleSelect:!0,className:"msl-wrp-options",defaultValue:e==null?void 0:e.label,onChange:u=>N(u,"label")}),t.jsx("button",{onClick:()=>E(e,l,m,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${n("Refresh Label","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}function bt({formID:e,formFields:l,handleInput:s,propovoiceCrmConf:a,setPropovoiceCrmConf:d,isLoading:c,setIsLoading:b,setSnackbar:m}){const j=x=>{const g=h({},a),{name:N}=x.target;x.target.value!==""?g[N]=x.target.value:delete g[N],g[x.target.name]=x.target.value,d(h({},g))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:n("Actions:","bit-integrations")}),t.jsxs("select",{onChange:j,name:"mainAction",value:a==null?void 0:a.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:n("Select Actions","bit-integrations")}),(a==null?void 0:a.allActions)&&a.allActions.map(({key:x,label:g})=>t.jsx("option",{value:x,children:g},x))]}),t.jsx("br",{}),t.jsx("br",{}),c&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.mainAction&&!c&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Map Fields","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:n("Propovice CRM Fields","bit-integrations")})})]}),a.field_map.map((x,g)=>t.jsx(v,{i:g,field:x,formFields:l,propovoiceCrmConf:a,setPropovoiceCrmConf:d},`keap-m-${g+9}`)),t.jsx("br",{}),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>O(a.field_map.length,a,d),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:n("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(p,{propovoiceCrmConf:a,setPropovoiceCrmConf:d,formFields:l,isLoading:c,setIsLoading:b})]})}export{bt as P,ct as c,dt as h};
