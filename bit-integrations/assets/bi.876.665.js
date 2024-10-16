var de=Object.defineProperty;var le=Object.getOwnPropertySymbols;var me=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var ae=(t,r,c)=>r in t?de(t,r,{enumerable:!0,configurable:!0,writable:!0,value:c}):t[r]=c,M=(t,r)=>{for(var c in r||(r={}))me.call(r,c)&&ae(t,c,r[c]);if(le)for(var c of le(r))he.call(r,c)&&ae(t,c,r[c]);return t};import{r as $,i as A,j as e,L as R,e as oe}from"./main-29.js";import{T as ue,a as pe,b as xe,c as je}from"./bi.858.666.js";import{j as ce,m as k,_ as a,e as _,n as O,q as ie,k as be,l as ve,o as Z,r as ge,T as Ne,g as re,h as fe}from"./bi.860.15.js";import{r as we,a as Fe,b as Te,g as ye,d as ke,e as Me}from"./bi.176.664.js";import{T as _e}from"./bi.831.661.js";function $e({tab:t,formID:r,formFields:c,biginConf:s,setBiginConf:d,setSnackbar:m}){var P,S,V,B,L,U,z,q,D,E,I,C,W,G,H,J,K,Q,X,Y,ee,te,se;const[n,o]=$.useState(!1),[x,h]=$.useState(!1),[N,g]=$.useState({show:!1}),[b,F]=$.useState(!1),T=A(ce),{isPro:v}=T,u=(l,j,p)=>{const w=M({},s);t===0?p!==void 0?p?w.actions[j]=l:delete w.actions[j]:l?w.actions[j]=l:delete w.actions[j]:p!==void 0?p?w.relatedlists[t-1].actions[j]=l:delete w.relatedlists[t-1].actions[j]:l?w.relatedlists[t-1].actions[j]=l:delete w.relatedlists[t-1].actions[j],d(M({},w))},y=t===0?s.module:s.relatedlists[t-1].module,f=()=>{g({show:!1})},i=(l,j)=>{const p=M({},s);p.actions.note||(p.actions.note={}),l==="field"?(p.actions.note.content||(p.actions.note.content=""),p.actions.note.content+=j):j?p.actions.note[l]=j:delete p.actions.note[l],d(M({},p))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[((S=(P=s==null?void 0:s.relatedlists)==null?void 0:P[t-1])==null?void 0:S.module)!=="Notes"&&e.jsxs(e.Fragment,{children:[e.jsx(k,{onChange:l=>u(!0,"workflow",l.target.checked),checked:t===0?"workflow"in s.actions:"workflow"in((B=(V=s.relatedlists)==null?void 0:V[t-1])==null?void 0:B.actions),className:"wdt-200 mt-4 mr-2",value:"Workflow",title:a("Workflow","bit-integrations"),subTitle:a("Trigger workflows in Zoho Bigin.","bit-integrations")}),e.jsx(k,{onChange:l=>u(!0,"approval",l.target.checked),checked:t===0?"approval"in s.actions:"approval"in((U=(L=s.relatedlists)==null?void 0:L[t-1])==null?void 0:U.actions),className:"wdt-200 mt-4 mr-2",value:"Approval",title:a("Approval","bit-integrations"),subTitle:a("Send entries to approval list in Zoho Bigin.","bit-integrations")}),t===0&&!["Calls","Events","Tasks"].includes(s.module)&&e.jsx(k,{onChange:()=>h(!0),checked:"note"in s.actions&&("title"in((z=s.actions)==null?void 0:z.note)||"content"in((q=s.actions)==null?void 0:q.note)),className:"wdt-200 mt-4 mr-2",value:"notes",title:a("Add a Note","bit-integrations"),subTitle:a("Add a note from bitform to pushed to Zoho Bigin.","bit-integrations")})]}),["Contacts","Accounts","Products"].includes(y)&&e.jsx(k,{onChange:()=>g({show:"photo"}),checked:t===0?"photo"in s.actions:"photo"in s.relatedlists[t-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Upload Photo","bit-integrations"),subTitle:`Add a photo to ${y} in Zoho Bigin.`}),e.jsx(k,{onChange:()=>g({show:"attachments"}),checked:t===0?"attachments"in s.actions:"attachments"in s.relatedlists[t-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Attachment","bit-integrations"),subTitle:a("Add attachments from BitForm to Zoho Bigin.","bit-integrations")}),e.jsx(k,{onChange:()=>g({show:"tags"}),checked:t===0?"selectedTags"in s.actions:"selectedTags"in s.relatedlists[t-1].actions,className:"wdt-200 mt-4 mr-2",value:"tags",isInfo:!v,title:`${a("Tags","bit-integrations")} ${v?"":`(${a("Pro","bit-integrations")})`}`,subTitle:v?a("add tags to records","bit-integrations"):sprintf(a("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.2.6",a("Tags","bit-integrations"))})]}),e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:N.show==="attachments",close:f,action:f,title:a("Select Attachment","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select File Upload Fields","bit-integrations")}),e.jsx(O,{defaultValue:t===0?s.actions.attachments:s.relatedlists[t-1].actions.attachments,className:"mt-2 w-9",onChange:l=>u(l,"attachments"),options:c.filter(l=>l.type==="file").map(l=>({label:l.label,value:l.name}))})]}),e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:N.show==="photo",close:f,action:f,title:a("Upload Photo","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select File Upload Fields","bit-integrations")}),e.jsx(O,{defaultValue:t===0?s.actions.photo:s.relatedlists[t-1].actions.photo,className:"mt-2 w-9",onChange:l=>u(l,"photo"),options:c.filter(l=>l.type==="file").map(l=>({label:l.label,value:l.name})),singleSelect:!0})]}),e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:n,close:()=>o(!1),action:()=>o(!1),title:a("Record Owner","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),b?e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(O,{className:"msl-wrp-options",defaultValue:t===0?s.actions.owner:s.relatedlists[t-1].actions.owner,options:((D=s.default)==null?void 0:D.users)&&Object.values(s.default.users).map(l=>({label:l.userName,value:l.userId})),onChange:l=>u(l,"owner"),customValue:!0}),e.jsx("button",{onClick:()=>we(r,s,d,F,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Users"'},type:"button",disabled:b,children:"↻"})]})]}),t===0&&e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:x,close:()=>h(!1),action:()=>h(!1),title:a("Notes","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),b?e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-2 mb-1",children:a("Note Title","bit-integrations")}),e.jsx("input",{type:"text",className:"btcd-paper-inp",placeholder:a("Note Title","bit-integrations"),onChange:l=>i("title",l.target.value),value:t===0?((I=(E=s.actions)==null?void 0:E.note)==null?void 0:I.title)||"":((W=(C=s.relatedlists[t-1].actions)==null?void 0:C.note)==null?void 0:W.title)||""}),e.jsx("div",{className:"mt-2 mb-1",children:a("Note Content","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp w-5",onChange:l=>i("field",l.target.value),children:[e.jsx("option",{value:"",children:a("Field","bit-integrations")}),c.map(l=>l.type!=="file"&&e.jsx("option",{value:`\${${l.name}}`,children:l.label},`ff-zhcrm-${l.name}`))]}),e.jsx("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:l=>i("content",l.target.value),value:t===0?((H=(G=s.actions)==null?void 0:G.note)==null?void 0:H.content)||"":((K=(J=s.relatedlists[t-1].actions)==null?void 0:J.note)==null?void 0:K.content)||""})]})]}),v&&e.jsxs(_,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:N.show==="tags",close:f,action:f,title:a("Add Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),b?e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(O,{className:"msl-wrp-options",defaultValue:t===0?(Q=s.actions)==null?void 0:Q.selectedTags:(X=s.relatedlists[t-1].actions)==null?void 0:X.selectedTags,options:((ee=(Y=s.default)==null?void 0:Y.moduleData[y])==null?void 0:ee.tags)&&Object.values((se=(te=s.default)==null?void 0:te.moduleData[y])==null?void 0:se.tags).map(l=>({label:l,value:l})),onChange:l=>u(l,"selectedTags"),customValue:!0}),e.jsx("button",{onClick:()=>Fe(t,r,s,d,F,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Tags","bit-integrations")}'`},type:"button",disabled:b,children:"↻"})]})]})]})}function ne({i:t,uploadFields:r,formFields:c,field:s,biginConf:d,setBiginConf:m,tab:n}){var g,b,F,T,v,u,y,f;const o=n===0?d.module:(b=(g=d.relatedlists)==null?void 0:g[n-1])==null?void 0:b.module,x=s.zohoFormField===""||((v=(T=(F=d.default.moduleData)==null?void 0:F[o])==null?void 0:T.required)==null?void 0:v.indexOf(s.zohoFormField))===-1,h=A(ce),{isPro:N}=h;return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:i=>ie(i,t,d,m,r,n),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:r?c.map(i=>i.type==="file"&&e.jsx("option",{value:i.name,children:i.label},`ff-zhcrm-${i.name}`)):c.map(i=>i.type!=="file"&&e.jsx("option",{value:i.name,children:i.label},`ff-zhcrm-${i.name}`))}),!r&&e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${a("General Smart Codes","bit-integrations")} ${N?"":`(${a("Pro","bit-integrations")})`}`,children:N&&((u=be)==null?void 0:u.map(i=>e.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),s.formField==="custom"&&e.jsx(_e,{onChange:i=>ve(i,t,d,m),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:c}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!x,name:"zohoFormField",value:s.zohoFormField||"",onChange:i=>ie(i,t,d,m,r,n),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),((f=(y=d.default.moduleData)==null?void 0:y[o])==null?void 0:f.fields)&&Object.values(d.default.moduleData[o].fields).map(i=>x?!i.required&&e.jsx("option",{value:i.api_name,children:i.display_label},i.api_name):e.jsx("option",{value:i.api_name,children:i.display_label},i.api_name))]})]}),x&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>Z(t,d,m,r,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>ge(t,d,m,r,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(Ne,{})})]})]})}function Oe({tab:t,settab:r,formID:c,isLoading:s,setIsLoading:d,setSnackbar:m}){var h,N,g,b,F,T;const[n,o]=oe(re),x=A(fe);return $.useEffect(()=>{Te(0,r)},[]),e.jsxs(e.Fragment,{children:[s&&e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((g=(N=(h=n.default)==null?void 0:h.moduleData)==null?void 0:N[n.module])==null?void 0:g.fields)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:a("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>ye(t,c,n,o,d,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Bigin Fields","bit-integrations")}'`},type:"button",disabled:s,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),n.field_map.map((v,u)=>e.jsx(ne,{i:u,field:v,biginConf:n,formFields:x,setBiginConf:o,tab:t,setSnackbar:m},`bigin-m-${u+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>Z(n.field_map.length,n,o,!1,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((T=(F=(b=n.default)==null?void 0:b.moduleData)==null?void 0:F[n.module])==null?void 0:T.fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map Attachments","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),n.upload_field_map.map((v,u)=>e.jsx(ne,{uploadFields:1,i:u,field:v,biginConf:n,formFields:x,setBiginConf:o,tab:t,setSnackbar:m},`crm-m-${u+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>Z(n.upload_field_map.length,n,o,!0,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx($e,{tab:t,formID:c,formFields:x,biginConf:n,setBiginConf:o,setSnackbar:m})]})]})}function Be({tab:t,settab:r,formID:c,handleInput:s,isLoading:d,setIsLoading:m,setSnackbar:n}){const[o,x]=oe(re);return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Module:","bit-integrations")}),e.jsxs("select",{onChange:s,name:"module",value:o.module,className:"btcd-paper-inp w-5",disabled:t===1,children:[e.jsx("option",{value:"",children:a("Select Module","bit-integrations")}),o.default&&o.default.modules&&Object.values(o.default.modules).map(h=>e.jsx("option",{value:h.api_name,children:h.plural_label},h.api_name))]}),t===0&&e.jsx("button",{onClick:()=>ke(c,o,x,m,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Bigin Modules","bit-integrations")}'`},type:"button",disabled:d,children:"↻"}),(o==null?void 0:o.module)==="Deals"&&!d&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Layout:","bit-integrations")}),e.jsxs("select",{onChange:s,name:"pLayout",value:o.pLayout,className:"btcd-paper-inp w-5",disabled:t===1,children:[e.jsx("option",{value:"",children:a("Select Layout","bit-integrations")}),o.default&&o.default.pLayouts&&Object.values(o.default.pLayouts).map(h=>e.jsx("option",{value:h.name,children:h.display_label},h.name))]}),t===0&&e.jsx("button",{onClick:()=>Me(c,o,x,m,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh pipelines Layouts","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),e.jsx("br",{}),e.jsxs(ue,{selectedTabClassName:"s-t-l-active",children:[e.jsx(pe,{className:"flx mt-2 mb-0",children:e.jsx(xe,{className:"btcd-s-tab-link mb-0",children:a("New Record","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsx(je,{children:e.jsx(Oe,{tab:t,settab:r,formID:c,isLoading:d,setIsLoading:m,setSnackbar:n})})]})]})}export{Be as Z};
