var C=Object.defineProperty;var B=Object.getOwnPropertySymbols;var ee=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var G=(t,i,r)=>i in t?C(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,k=(t,i)=>{for(var r in i||(i={}))ee.call(i,r)&&G(t,r,i[r]);if(B)for(var r of B(i))se.call(i,r)&&G(t,r,i[r]);return t};import{r as f,j as e,L as R,i as le}from"./main-165.js";import{T as te,a as ae,b as H,c as J}from"./bi.435.737.js";import{m as Z,_ as d,e as K,j as de,q as Q,k as ie,l as ne,o as z,r as oe,T as me,y as ce}from"./bi.312.95.js";import{r as X,a as Y,b as re,d as he}from"./bi.389.752.js";import{T as xe}from"./bi.953.732.js";function A({tab:t,formID:i,formFields:r,recruitConf:l,setRecruitConf:a,setSnackbar:s}){var g,T,O,_,M,$,D,u,F,n,q,E,L,S,I,V,P,W;const[h,m]=f.useState(!1),[w,j]=f.useState(!1),[b,v]=f.useState(!1),c=(o,y)=>{const x=k({},l);t===0?(y==="approval"&&(o.target.checked?x.actions.approval=!0:delete x.actions.approval),y==="workflow"&&(o.target.checked?x.actions.workflow=!0:delete x.actions.workflow),y==="upsert"&&(o.target.checked?x.actions.upsert=!0:delete x.actions.upsert),y==="recordOwner"&&(o!==""?x.actions.recordOwner=o:delete x.actions.recordOwner)):(y==="approval"&&(o.target.checked?x.relatedlists[t-1].actions.approval=!0:delete x.relatedlists[t-1].actions.approval),y==="workflow"&&(o.target.checked?x.relatedlists[t-1].actions.workflow=!0:delete x.relatedlists[t-1].actions.workflow),y==="recordOwner"&&(o!==""?x.relatedlists[t-1].actions.recordOwner=o:delete x.relatedlists[t-1].actions.recordOwner)),a(k({},x))},p=()=>{l.default.noteTypes||X(i,l,a,v,s),j(!0)},N=(o,y)=>{const x=k({},l);x.actions.note||(x.actions.note={}),o==="field"?(x.actions.note.content||(x.actions.note.content=""),x.actions.note.content+=y):y?x.actions.note[o]=y:delete x.actions.note[o],a(k({},x))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[((T=(g=l==null?void 0:l.relatedlists)==null?void 0:g[t-1])==null?void 0:T.module)!=="Notes"&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{onChange:o=>c(o,"workflow"),checked:t===0?"workflow"in l.actions:"workflow"in((_=(O=l.relatedlists)==null?void 0:O[t-1])==null?void 0:_.actions),className:"wdt-200 mt-4 mr-2",value:"Workflow",title:d("Workflow","bit-integrations"),subTitle:d("Trigger workflows in Zoho Recruit.","bit-integrations")}),e.jsx(Z,{onChange:o=>c(o,"approval"),checked:t===0?"approval"in l.actions:"approval"in(($=(M=l.relatedlists)==null?void 0:M[t-1])==null?void 0:$.actions),className:"wdt-200 mt-4 mr-2",value:"Approval",title:d("Approval","bit-integrations"),subTitle:d("Send entries to approval list in Zoho Recruit","bit-integrations")}),t===0&&!["Calls","Events","Tasks"].includes(l.module)&&e.jsxs(e.Fragment,{children:[e.jsx(Z,{onChange:o=>c(o,"upsert"),checked:"upsert"in l.actions,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:d("Upsert Record","bit-integrations"),subTitle:d("A record gets updated if the email already exists, else a new record will be created.","bit-integrations")}),e.jsx(Z,{onChange:p,checked:"note"in l.actions&&"type"in((D=l.actions)==null?void 0:D.note),className:"wdt-200 mt-4 mr-2",value:"notes",title:d("Add a Note","bit-integrations"),subTitle:d("Add a note from bitform to pushed to Zoho Recruit.","bit-integrations")})]})]}),e.jsx(Z,{onChange:()=>m(!0),checked:t===0?"recordOwner"in l.actions:"recordOwner"in((F=(u=l.relatedlists)==null?void 0:u[t-1])==null?void 0:F.actions),className:"wdt-200 mt-4 mr-2",value:"recordOwner",title:d("Record Owner","bit-integrations"),subTitle:d("Set owner of current record","bit-integrations")})]}),e.jsxs(K,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:h,close:()=>m(!1),action:()=>m(!1),title:d("Record Owner","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:d("Owner ID","bit-integrations")}),e.jsx("div",{className:"flx flx-between",children:e.jsx("input",{onChange:o=>c(o.target.value,"recordOwner"),className:"btcd-paper-inp mt-2",type:"number",min:"0",value:t===0?((n=l==null?void 0:l.actions)==null?void 0:n.recordOwner)||"":((L=(E=(q=l.relatedlists)==null?void 0:q[t-1])==null?void 0:E.actions)==null?void 0:L.recordOwner)||"",placeholder:d("Enter Owner ID","bit-integrations")})})]}),t===0&&e.jsxs(K,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:"Ok",show:w,close:()=>j(!1),action:()=>j(!1),title:d("Notes","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),b?e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx",children:[e.jsxs("select",{className:"btcd-paper-inp",onChange:o=>N("type",o.target.value),value:((I=(S=l.actions)==null?void 0:S.note)==null?void 0:I.type)||"",children:[e.jsx("option",{value:"",children:d("Select Note Type","bit-integrations")}),((V=l==null?void 0:l.default)==null?void 0:V.noteTypes)&&Object.values(l.default.noteTypes).map(o=>e.jsx("option",{value:`${o.noteTypeId}__${o.noteTypeName}`,children:o.noteTypeName},o.noteTypeId))]}),e.jsx("button",{onClick:()=>X(i,l,a,v,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Note Types"'},type:"button",disabled:b,children:"↻"})]}),e.jsx("div",{className:"mt-2 mb-1",children:d("Note Content","bit-integrations")}),e.jsxs("select",{className:"btcd-paper-inp w-5",onChange:o=>N("field",o.target.value),children:[e.jsx("option",{value:"",children:d("Field","bit-integrations")}),r.map(o=>o.type!=="file"&&e.jsx("option",{value:`\${${o.name}}`,children:o.label},`ff-zhcrm-${o.name}`))]}),e.jsx("textarea",{rows:"5",className:"btcd-paper-inp mt-2",onChange:o=>N("content",o.target.value),value:((W=(P=l.actions)==null?void 0:P.note)==null?void 0:W.content)||""})]})]})]})}function U({i:t,uploadFields:i,formFields:r,field:l,recruitConf:a,setRecruitConf:s,tab:h}){var v,c,p,N,g,T,O,_,M,$,D,u,F;const m=h===0?a.module:(c=(v=a.relatedlists)==null?void 0:v[h-1])==null?void 0:c.module,w=le(de),{isPro:j}=w;let b;return i?b=l.zohoFormField===""||((g=(N=(p=a.default.moduleData)==null?void 0:p[m])==null?void 0:N.requiredFileUploadFields)==null?void 0:g.indexOf(l.zohoFormField))===-1:b=l.zohoFormField===""||((_=(O=(T=a.default.moduleData)==null?void 0:T[m])==null?void 0:O.required)==null?void 0:_.indexOf(l.zohoFormField))===-1,e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:n=>Q(n,t,a,s,i,h),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:i?r.map(n=>n.type==="file"&&e.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`)):r.map(n=>n.type!=="file"&&e.jsx("option",{value:n.name,children:n.label},`ff-zhcrm-${n.name}`))}),!i&&e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${d("General Smart Codes","bit-integrations")} ${j?"":`(${d("Pro","bit-integrations")})`}`,children:j&&((M=ie)==null?void 0:M.map(n=>e.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),l.formField==="custom"&&e.jsx(xe,{onChange:n=>ne(n,t,a,s),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!b,name:"zohoFormField",value:l.zohoFormField||"",onChange:n=>Q(n,t,a,s,i,h),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),i?((D=($=a.default.moduleData)==null?void 0:$[m])==null?void 0:D.fileUploadFields)&&Object.keys(a.default.moduleData[m].fileUploadFields).map(n=>b?a.default.moduleData[m].fileUploadFields[n].required==="false"&&e.jsx("option",{value:n,children:a.default.moduleData[m].fileUploadFields[n].display_label},n):e.jsx("option",{value:n,children:a.default.moduleData[m].fileUploadFields[n].display_label},n)):((F=(u=a.default.moduleData)==null?void 0:u[m])==null?void 0:F.fields)&&Object.keys(a.default.moduleData[m].fields).map(n=>b?a.default.moduleData[m].fields[n].required==="false"&&e.jsx("option",{value:n,children:a.default.moduleData[m].fields[n].display_label},n):e.jsx("option",{value:n,children:a.default.moduleData[m].fields[n].display_label},n))]})]}),e.jsx("button",{onClick:()=>z(t,a,s,i,h),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),b&&e.jsx("button",{onClick:()=>oe(t,a,s,i,h),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(me,{})})]})}function pe({tab:t,settab:i,formID:r,formFields:l,recruitConf:a,setRecruitConf:s,isLoading:h,setSnackbar:m}){var w,j,b,v,c,p;return f.useEffect(()=>{Y(0,i)},[]),e.jsxs(e.Fragment,{children:[h&&e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((b=(j=(w=a.default)==null?void 0:w.moduleData)==null?void 0:j[a.module])==null?void 0:b.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Zoho Fields","bit-integrations")})})]}),a.field_map.map((N,g)=>e.jsx(U,{i:g,field:N,recruitConf:a,formFields:l,setRecruitConf:s,tab:t,setSnackbar:m},`recruit-m-${g+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>z(a.field_map.length,a,s,!1,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((p=(c=(v=a.default)==null?void 0:v.moduleData)==null?void 0:c[a.module])==null?void 0:p.fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Map Attachments","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Zoho Fields","bit-integrations")})})]}),a.upload_field_map.map((N,g)=>e.jsx(U,{uploadFields:1,i:g,field:N,recruitConf:a,formFields:l,setRecruitConf:s,tab:t,setSnackbar:m},`crm-m-${g+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>z(a.upload_field_map.length,a,s,!0,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(A,{tab:t,formID:r,formFields:l,recruitConf:a,setRecruitConf:s,setSnackbar:m})]})]})}function be({indx:t,tab:i,settab:r,formID:l,formFields:a,recruitConf:s,setRecruitConf:h,handleInput:m,isLoading:w,setIsLoading:j,setSnackbar:b}){var v,c,p,N,g,T,O,_,M,$,D;return f.useEffect(()=>{Y(t+1,r,s,h,l,j,b)},[]),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-100 d-in-b",children:"Related List:"}),e.jsxs("select",{onChange:m,name:"module",value:(c=(v=s==null?void 0:s.relatedlists)==null?void 0:v[i-1])==null?void 0:c.module,className:"btcd-paper-inp w-7",disabled:!s.module,children:[e.jsx("option",{value:"",children:d("Select Related Module","bit-integrations")}),((p=s==null?void 0:s.default.relatedlists)==null?void 0:p[s.module])&&Object.values(s.default.relatedlists[s.module]).map(u=>e.jsx("option",{value:u.aMod,children:u.pl},u.aMod))]}),e.jsx("button",{onClick:()=>re(l,s,h,j,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Related Lists"'},type:"button",disabled:w,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),w&&e.jsx(R,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((_=(O=(N=s.default)==null?void 0:N.moduleData)==null?void 0:O[(T=(g=s.relatedlists)==null?void 0:g[i-1])==null?void 0:T.module])==null?void 0:_.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Zoho Fields","bit-integrations")})})]}),s.relatedlists[i-1].field_map.map((u,F)=>e.jsx(U,{i:F,field:u,recruitConf:s,formFields:a,setRecruitConf:h,tab:i},`crm-m-${F+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>z(s.relatedlists[i-1].field_map.length,s,h,!1,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((D=($=(M=s.default)==null?void 0:M.moduleData)==null?void 0:$[s.relatedlists[i-1].module])==null?void 0:D.fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Map Attachments","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Zoho Fields","bit-integrations")})})]}),s.relatedlists[i-1].upload_field_map.map((u,F)=>e.jsx(U,{uploadFields:1,i:F,field:u,recruitConf:s,formFields:a,setRecruitConf:h,tab:i},`crm-m-${F+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>z(s.relatedlists[i-1].upload_field_map.length,s,h,!0,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(A,{recruitConf:s,setRecruitConf:h,tab:i})]})]})}function Fe({tab:t,settab:i,formID:r,formFields:l,handleInput:a,recruitConf:s,setRecruitConf:h,isLoading:m,setIsLoading:w,setSnackbar:j}){const b=()=>{const c=k({},s);c.relatedlists.length<3&&c.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),h(k({},c))},v=c=>{const p=k({},s);p.relatedlists.splice(c,1),p.relatedlists.length||i(0),h(k({},p))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:"Module:"}),e.jsxs("select",{onChange:a,name:"module",value:s.module,className:"btcd-paper-inp w-5",disabled:t===1,children:[e.jsx("option",{value:"",children:d("Select Module","bit-integrations")}),s.default&&s.default.modules&&Object.keys(s.default.modules).map(c=>e.jsx("option",{value:c,children:s.default.modules[c].pl},c))]}),t===0&&e.jsx("button",{onClick:()=>he(r,s,h,w,j),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Recruit Modules"'},type:"button",disabled:m,children:"↻"}),e.jsx("br",{}),e.jsxs(te,{selectedTabClassName:"s-t-l-active",children:[e.jsxs(ae,{className:"flx mt-2 mb-0",children:[e.jsx(H,{className:"btcd-s-tab-link",children:d("New Record","bit-integrations")}),(s==null?void 0:s.relatedlists)&&s.relatedlists.map((c,p)=>e.jsxs(e.Fragment,{children:[e.jsxs(H,{className:"btcd-s-tab-link",children:[d("Related List #","bit-integrations"),p+1]},`rel-${p+64}`),e.jsx("button",{onClick:()=>v(p),className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:e.jsx(ce,{size:"14"})})]})),s.relatedlists.length<3&&e.jsx("button",{onClick:b,className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Add More Related List"'},type:"button",children:"+"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsx(J,{children:e.jsx(pe,{tab:t,settab:i,formID:r,formFields:l,recruitConf:s,setRecruitConf:h,isLoading:m,setSnackbar:j})}),(s==null?void 0:s.relatedlists)&&s.relatedlists.map((c,p)=>e.jsx(J,{children:e.jsx(be,{indx:p,tab:t,settab:i,formID:r,formFields:l,recruitConf:s,setRecruitConf:h,handleInput:a,isLoading:m,setIsLoading:w,setSnackbar:j})},`rlt-${p+89}`))]})]})}export{Fe as Z};