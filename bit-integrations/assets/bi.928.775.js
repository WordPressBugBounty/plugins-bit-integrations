var I=Object.defineProperty;var y=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var _=(s,n,t)=>n in s?I(s,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[n]=t,m=(s,n)=>{for(var t in n||(n={}))V.call(n,t)&&_(s,t,n[t]);if(y)for(var t of y(n))$.call(n,t)&&_(s,t,n[t]);return s};import{r as j,j as e,L as v,f as q}from"./main-119.js";import{x as F,a8 as R}from"./bi.276.437.js";import{_ as a,c as E,d as A,e as H}from"./bi.686.0.js";import{a as L,b as O}from"./bi.316.3.js";import{a as S}from"./bi.900.9.js";import{b as k}from"./bi.301.11.js";import{T as P}from"./bi.570.675.js";function U({affiliateConf:s,setAffiliateConf:n,formFields:t}){var x,c;const[l,d]=j.useState(!1),[i,o]=j.useState({show:!1,action:()=>{}}),b=(r,u)=>{var N,w;const p=m({},s);u==="status"&&((N=r.target)!=null&&N.checked?(p.actions.status=!0,o({show:"status"})):(o({show:!1}),delete p.actions.status)),u==="type"&&((w=r.target)!=null&&w.checked?(p.actions.type=!0,o({show:"type"})):(o({show:!1}),delete p.actions.type)),n(m({},p))},h=()=>{o({show:!1})},g=(r,u)=>{const p=m({},s);p[u]=r,n(m({},p))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[e.jsx(k,{checked:((x=s==null?void 0:s.actions)==null?void 0:x.status)||!1,onChange:r=>b(r,"status"),className:"wdt-200 mt-4 mr-2",value:"status",title:a("Add Status","bit-integrations"),subTitle:a("Add Status","bit-integrations")}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:i.show==="status",close:h,action:h,title:a("Status","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:a("Select status of referral","bit-integrations")}),l?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(F,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.statusId,options:s==null?void 0:s.allStatus.map(r=>({label:r.label,value:r.key})),onChange:r=>g(r,"statusId"),singleSelect:!0})})]}),e.jsx(k,{checked:((c=s==null?void 0:s.actions)==null?void 0:c.type)||!1,onChange:r=>b(r,"type"),className:"wdt-200 mt-4 mr-2",value:"type",title:a("Add Type","bit-integrations"),subTitle:a("Add Type","bit-integrations")}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:i.show==="type",close:h,action:h,title:a("Type","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:a("Select type of referral","bit-integrations")}),l?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(F,{className:"msl-wrp-options",defaultValue:s==null?void 0:s.referralId,options:s.allReferralType.map(r=>({label:r.label,value:r.key})),onChange:r=>g(r,"referralId"),singleSelect:!0})})]})]})}const ee=(s,n,t,l,d,i)=>{const o=m({},n),{name:b}=s.target;s.target.value!==""?o[b]=s.target.value:delete o[b],o[s.target.name]=s.target.value,t(m({},o))},M=(s,n,t,l)=>{t(!0),E(null,"affiliate_fetch_all_affiliate").then(d=>{if(d&&d.success){const i=m({},s);i.default||(i.default={}),d.data&&(i.default.allAffiliate=d.data),n(m({},i)),t(!1),A.success(a("All affiliate fetched successfully","bit-integrations"));return}t(!1),A.error(a("All affiliate fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},B=s=>{const n=s==null?void 0:s.createAffiliateFields.filter(t=>t.required===!0);return n.length>0?n.map(t=>({formField:"",affiliateFormField:t.key})):[{formField:"",affiliateFormField:""}]},se=s=>!((s.field_map?s.field_map.filter(t=>!t.formField||!t.affiliateFormField):[]).length>0),D=(s,n,t)=>{const l=m({},n);l.field_map.splice(s,0,{}),t(m({},l))},G=(s,n,t)=>{const l=m({},n);l.field_map.length>1&&l.field_map.splice(s,1),t(m({},l))},T=(s,n,t,l)=>{const d=m({},t);d.field_map[n][s.target.name]=s.target.value,s.target.value==="custom"&&(d.field_map[n].customValue=""),l(m({},d))},z=(s,n,t,l)=>{const d=m({},t);d.field_map[n].customValue=s.target.value,l(m({},d))};function J({i:s,formFields:n,field:t,affiliateConf:l,setAffiliateConf:d}){var g,x;if(((g=l==null?void 0:l.field_map)==null?void 0:g.length)===1&&t.affiliateFormField===""){const c=m({},l),r=B(c);c.field_map=r,d(c)}const i=(l==null?void 0:l.createAffiliateFields.filter(c=>c.required===!0))||[],o=(l==null?void 0:l.createAffiliateFields.filter(c=>c.required===!1))||[],b=q(H),{isPro:h}=b;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:c=>T(c,s,l,d),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:n==null?void 0:n.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),h?"":`(${a("Pro","bit-integrations")})`),children:h&&((x=L)==null?void 0:x.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),t.formField==="custom"&&e.jsx(P,{onChange:c=>z(c,s,l,d),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:n}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<i.length,name:"affiliateFormField",value:s<i.length?i[s].key||"":t.affiliateFormField||"",onChange:c=>T(c,s,l,d),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),s<i.length?e.jsx("option",{value:i[s].key,children:i[s].label},i[s].key):o.map(({key:c,label:r})=>e.jsx("option",{value:c,children:r},c))]})]}),s>=i.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>D(s,l,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>G(s,l,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function te({formFields:s,handleInput:n,affiliateConf:t,setAffiliateConf:l,isLoading:d,setIsLoading:i,setSnackbar:o,allIntegURL:b,isInfo:h,edit:g}){var c;j.useEffect(()=>{t.mainAction==="1"&&M(t,l,i)},[t.mainAction]);const x=(r,u)=>{const p=m({},t);p[u]=r,l(m({},p))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Actions:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"mainAction",value:t==null?void 0:t.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:a("Select Actions","bit-integrations")}),(t==null?void 0:t.allActions)&&t.allActions.map(({key:r,label:u})=>e.jsx("option",{value:r,children:u},r))]}),e.jsx("br",{}),e.jsx("br",{}),(t==null?void 0:t.mainAction)==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Affiliate:","bit-integrations")}),e.jsx(F,{className:"w-5",defaultValue:t==null?void 0:t.affiliate_id,options:((c=t==null?void 0:t.default)==null?void 0:c.allAffiliate)&&t.default.allAffiliate.map(r=>({label:r.affiliate_name,value:r.affiliate_id.toString()})),onChange:r=>x(r,"affiliate_id"),singleSelect:!0}),e.jsx("button",{onClick:()=>M(t,l,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch All Affiliate List","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]})]}),e.jsx("br",{}),e.jsx("br",{}),d&&e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Affiliate Fields","bit-integrations")})})]}),t.field_map.map((r,u)=>e.jsx(J,{i:u,field:r,affiliateConf:t,formFields:s,setAffiliateConf:l},`dash-m-${u+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>O(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(U,{affiliateConf:t,setAffiliateConf:l,formFields:s})]}),e.jsx("br",{}),e.jsx(R,{note:a("Some integrations will only work for logged-in users.","bit-integrations")})]})}export{te as A,se as c,ee as h};
