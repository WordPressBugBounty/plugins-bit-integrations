var xe=Object.defineProperty;var te=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var se=(t,r,u)=>r in t?xe(t,r,{enumerable:!0,configurable:!0,writable:!0,value:u}):t[r]=u,M=(t,r)=>{for(var u in r||(r={}))pe.call(r,u)&&se(t,u,r[u]);if(te)for(var u of te(r))ge.call(r,u)&&se(t,u,r[u]);return t};import{r as Q,j as e,L as X,i as je}from"./main-650.js";import{m as O,_ as a,e as D,n as ie,M as be,v as le,j as me,q as ae,k as we,l as ve,o as I,r as Ne,w as ye,x as de,y as _e,P as ne}from"./bi.541.15.js";import{C}from"./bi.845.672.js";import{T as Fe}from"./bi.629.673.js";import{r as re,a as Re,b as oe,d as ce,e as ue,f as Me,g as ke}from"./bi.388.670.js";import{T as Te}from"./bi.619.660.js";function he({crmConf:t,setCrmConf:r,formFields:u,tab:l,formID:d,setSnackbar:i}){var U,$,Z,q,z,L,P,f,V,A,S,B,o,H,J,K,y;const[g,F]=Q.useState(!1),[x,h]=Q.useState(!1),[b,w]=Q.useState({show:!1,action:()=>{}});typeof btcbi!="undefined"&&btcbi.isPro;const m=(s,c)=>{var k,_;const n=M({},t);if(l===0){if(c==="attachment"&&(s!==""?n.actions.attachment=s:delete n.actions.attachment),c==="approval"&&(s.target.checked?n.actions.approval=!0:delete n.actions.approval),c==="workflow"&&(s.target.checked?n.actions.workflow=!0:delete n.actions.workflow),c==="blueprint"&&(s.target.checked?n.actions.blueprint=!0:delete n.actions.blueprint),c==="gclid"&&(s.target.checked?n.actions.gclid=!0:delete n.actions.gclid),c==="assignment_rules"&&(s!==""?n.actions.assignment_rules=s:delete n.actions.assignment_rules),c==="tag_rec"&&(s!==""?n.actions.tag_rec=s:delete n.actions.tag_rec),c==="rec_owner"&&(s!==""?n.actions.rec_owner=s:delete n.actions.rec_owner),c==="upsert")if(s.target.checked){const W=(k=n.default.layouts[n.module][n.layout].unique)==null?void 0:k.map((G,Y)=>({i:Y,name:G}));n.actions.upsert={overwrite:!0,crmField:W}}else delete n.actions.upsert}else if(c==="attachment"&&(s!==""?n.relatedlists[l-1].actions.attachment=s:delete n.relatedlists[l-1].actions.attachment),c==="approval"&&(s.target.checked?n.relatedlists[l-1].actions.approval=!0:delete n.relatedlists[l-1].actions.approval),c==="workflow"&&(s.target.checked?n.relatedlists[l-1].actions.workflow=!0:delete n.relatedlists[l-1].actions.workflow),c==="blueprint"&&(s.target.checked?n.relatedlists[l-1].actions.blueprint=!0:delete n.relatedlists[l-1].actions.blueprint),c==="gclid"&&(s.target.checked?n.relatedlists[l-1].actions.gclid=!0:delete n.relatedlists[l-1].actions.gclid),c==="assignment_rules"&&(s!==""?n.relatedlists[l-1].actions.assignment_rules=s:delete n.relatedlists[l-1].actions.assignment_rules),c==="tag_rec"&&(s!==""?n.relatedlists[l-1].actions.tag_rec=s:delete n.relatedlists[l-1].actions.tag_rec),c==="rec_owner"&&(s!==""?n.relatedlists[l-1].actions.rec_owner=s:delete n.relatedlists[l-1].actions.rec_owner),c==="upsert")if(s.target.checked){const W=(_=n.default.layouts[n.relatedlists[l-1].module][n.relatedlists[l-1].layout].unique)==null?void 0:_.map((G,Y)=>({i:Y,name:G}));n.relatedlists[l-1].actions.upsert={overwrite:!0,crmField:W}}else delete n.relatedlists[l-1].actions.upsert;r(M({},n))},p=()=>{w({show:!1})},j=l===0?t.module:t.relatedlists[l-1].module,T=()=>{var c,n;const s=[{title:a("Zoho CRM Tags","bit-integrations"),type:"group",childs:[]},{title:a("Form Fields","bit-integrations"),type:"group",childs:[]}];return(c=t.default.tags)!=null&&c[j]&&(s[0].childs=Object.values((n=t.default.tags)==null?void 0:n[j]).map(k=>({label:k,value:k}))),s[1].childs=u.map(k=>({label:k.label,value:`\${${k.name}}`})),s},v=(s,c)=>{const n=M({},t);l===0?(c==="list"&&(n.actions.upsert.crmField=s),c==="overwrite"&&(n.actions.upsert.overwrite=s)):(c==="list"&&(n.relatedlists[l-1].actions.upsert.crmField=s),c==="overwrite"&&(n.relatedlists[l-1].actions.upsert.overwrite=s)),r(M({},n))},N=()=>{var s;(s=t.default)!=null&&s.crmOwner||oe(d,t,r,h,i),w({show:"rec_owner"})},R=()=>{var s,c;(c=(s=t==null?void 0:t.default)==null?void 0:s.assignmentRules)!=null&&c[j]||re(l,t,r,h,i),w({show:"assignment_rules"})},E=()=>{var s,c,n,k;if(l&&!((s=t.relatedlists[l-1].actions.upsert)!=null&&s.crmField)){const _=M({},t),W=(c=_.default.layouts[_.relatedlists[l-1].module][_.relatedlists[l-1].layout].unique)==null?void 0:c.map((G,Y)=>({i:Y,name:G}));_.relatedlists[l-1].actions.upsert={overwrite:!0,crmField:W},r(_)}else if(!((n=t.actions.upsert)!=null&&n.crmField)){const _=M({},t),W=(k=_.default.layouts[_.module][_.layout].unique)==null?void 0:k.map((G,Y)=>({i:Y,name:G}));_.actions.upsert={overwrite:!0,crmField:W},r(M({},_))}F(!0)};return e.jsxs("div",{className:"pos-rel",children:[e.jsxs("div",{className:"d-flx flx-wrp",children:[e.jsx(O,{onChange:s=>m(s,"workflow"),checked:l===0?"workflow"in t.actions:"workflow"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Workflow",title:a("Workflow","bit-integrations"),subTitle:a("Trigger CRM workflows","bit-integrations")}),e.jsx(O,{onChange:()=>w({show:"attachment"}),checked:l===0?"attachment"in t.actions:"attachment"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Attachment",title:a("Attachment","bit-integrations"),subTitle:a("Add attachments or signatures from Trigger to CRM","bit-integrations")}),e.jsx(O,{onChange:s=>m(s,"approval"),checked:l===0?"approval"in t.actions:"approval"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Approval",title:a("Approval","bit-integrations"),subTitle:a("Send entries to CRM approval list","bit-integrations")}),e.jsx(O,{onChange:s=>m(s,"blueprint"),checked:l===0?"blueprint"in t.actions:"blueprint"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Blueprint",title:a("Blueprint","bit-integrations"),subTitle:a("Trigger CRM Blueprint","bit-integrations")}),e.jsx(O,{onChange:s=>m(s,"gclid"),checked:l===0?"gclid"in t.actions:"gclid"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Capture_GCLID",title:a("Capture GCLID","bit-integrations"),subTitle:a("Sends the click details of AdWords Ads to Zoho CRM","bit-integrations")}),e.jsx(Fe,{action:E,children:e.jsx(O,{onChange:s=>m(s,"upsert"),checked:l===0?"upsert"in t.actions:"upsert"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Upsert_Record",title:a("Upsert Records","bit-integrations"),subTitle:a("The record is updated if it already exists else it is inserted as a new record","bit-integrations")})}),e.jsx(O,{onChange:R,checked:l===0?"assignment_rules"in t.actions:"assignment_rules"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Assignment_Rule",title:a("Assignment Rules","bit-integrations"),subTitle:a("Trigger Assignment Rules in Zoho CRM","bit-integrations")}),e.jsx(O,{onChange:()=>w({show:"tag_rec"}),checked:l===0?"tag_rec"in t.actions:"tag_rec"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Tag_Records",title:a("Tag Records","bit-integrations"),subTitle:a("Add a tag to records pushed to Zoho CRM","bit-integrations")}),e.jsx(O,{onChange:N,checked:l===0?"rec_owner"in t.actions:"rec_owner"in t.relatedlists[l-1].actions,className:"wdt-200 mt-4 mr-2",value:"Record_Owner",title:a("Record Owner","bit-integrations"),subTitle:a("Add a owner to records pushed to Zoho CRM","bit-integrations")})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:b.show==="attachment",close:p,action:p,title:a("Select Attachment","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Select File Upload Fields","bit-integrations")}),e.jsx(ie,{defaultValue:l===0?t.actions.attachment:t.relatedlists[l-1].actions.attachment,className:"mt-2 w-9",onChange:s=>m(s,"attachment"),options:u.filter(s=>s.type==="file").map(s=>({label:s.label,value:s.name}))})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:b.show==="assignment_rules",close:p,action:p,title:a("Assignment Rules","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Assignment Rules","bit-integrations")}),x?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsxs("select",{value:l===0?t.actions.assignment_rules:t.relatedlists[l-1].actions.assignment_rules,className:"btcd-paper-inp",onChange:s=>m(s.target.value,"assignment_rules"),children:[e.jsx("option",{value:"",children:a("Select Assignment Rule","bit-integrations")}),(($=(U=t==null?void 0:t.default)==null?void 0:U.assignmentRules)==null?void 0:$[j])&&Object.keys(t.default.assignmentRules[j]).map(s=>e.jsx("option",{value:t.default.assignmentRules[j][s],children:s},s))]}),e.jsx("button",{onClick:()=>re(l,t,r,h,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Assignment Rules","bit-integrations")}'`},type:"button",disabled:x,children:"↻"})]})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:b.show==="tag_rec",close:p,action:p,title:a("Tag Records","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("small",{children:a("Add a tag to records pushed to Zoho CRM","bit-integrations")}),e.jsx("div",{className:"mt-2",children:a("Tag Name","bit-integrations")}),x?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(ie,{className:"msl-wrp-options",defaultValue:l===0?t.actions.tag_rec:t.relatedlists[l-1].actions.tag_rec,options:T(),onChange:s=>m(s,"tag_rec"),customValue:!0}),e.jsx("button",{onClick:()=>Re(l,d,t,r,h,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${a("Refresh CRM Tags","bit-integrations")}'`},type:"button",disabled:x,children:"↻"})]})]}),e.jsxs(D,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:b.show==="rec_owner",close:p,action:p,title:a("Record Owner","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2"}),e.jsx("div",{className:"mt-2",children:a("Owner Name","bit-integrations")}),x?e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsxs("select",{value:l===0?t.actions.rec_owner:t.relatedlists[l-1].actions.rec_owner,className:"btcd-paper-inp",onChange:s=>m(s.target.value,"rec_owner"),children:[e.jsx("option",{value:"",children:a("Select Owner","bit-integrations")}),((Z=t.default)==null?void 0:Z.crmOwner)&&((q=Object.values(t.default.crmOwner))==null?void 0:q.map(s=>e.jsx("option",{value:s.id,children:s.full_name},s.id)))]}),e.jsx("button",{onClick:()=>oe(d,t,r,h,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Owners","bit-integrations")}'`},type:"button",disabled:x,children:"↻"})]})]}),e.jsx(be,{md:!0,show:g,setModal:F,title:a("Upsert Record","bit-integrations"),children:e.jsx("div",{className:"o-a",children:l===0?((z=t==null?void 0:t.actions)==null?void 0:z.upsert)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-w-m mt-2",children:a("Upsert Using","bit-integrations")}),e.jsx("small",{children:a("Arrange fields in order of preferance for upsertion","bit-integrations")}),e.jsx(le.ReactSortable,{list:(L=t.actions.upsert)==null?void 0:L.crmField,setList:s=>v(s,"list"),children:(f=(P=t.actions.upsert)==null?void 0:P.crmField)==null?void 0:f.map(s=>e.jsxs("div",{className:"upsert_rec w-7 mt-1 flx",children:[e.jsx("span",{className:"btcd-icn btcd-mnu mr-2"}),s.name]},`cf-${s.i}`))}),e.jsx("div",{className:"font-w-m mt-3",children:a("Upsert Preferance","bit-integrations")}),e.jsx("small",{children:a("Overwrite existing field values in Zoho CRM with empty field values from Zoho CRM For Triggers while upserting a record?","bit-integrations")}),e.jsxs("div",{children:[e.jsx(C,{onChange:()=>v(!0,"overwrite"),radio:!0,checked:(V=t.actions.upsert)==null?void 0:V.overwrite,name:"up-rec",title:a("Yes","bit-integrations")}),e.jsx(C,{onChange:()=>v(!1,"overwrite"),radio:!0,checked:!((A=t.actions.upsert)!=null&&A.overwrite),name:"up-rec",title:a("No","bit-integrations")})]})]}):((B=(S=t==null?void 0:t.relatedlists[l-1])==null?void 0:S.actions)==null?void 0:B.upsert)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"font-w-m mt-2",children:a("Upsert Using","bit-integrations")}),e.jsx("small",{children:a("Arrange fields in order of preferance for upsertion","bit-integrations")}),e.jsx(le.ReactSortable,{list:(o=t.relatedlists[l-1].actions.upsert)==null?void 0:o.crmField,setList:s=>v(s,"list"),children:(J=(H=t.relatedlists[l-1].actions.upsert)==null?void 0:H.crmField)==null?void 0:J.map(s=>e.jsxs("div",{className:"upsert_rec w-7 mt-1 flx",children:[e.jsx("span",{className:"btcd-icn btcd-mnu mr-2"}),s.name]},`cf-${s.i}`))}),e.jsx("div",{className:"font-w-m mt-3",children:a("Upsert Preferance","bit-integrations")}),e.jsx("small",{children:a("Overwrite existing field values in Zoho CRM with empty field values from Zoho CRM For WPForms while upserting a record?","bit-integrations")}),e.jsxs("div",{children:[e.jsx(C,{onChange:()=>v(!0,"overwrite"),radio:!0,checked:(K=t.relatedlists[l-1].actions.upsert)==null?void 0:K.overwrite,name:"up-rec",title:a("Yes","bit-integrations")}),e.jsx(C,{onChange:()=>v(!1,"overwrite"),radio:!0,checked:!((y=t.relatedlists[l-1].actions.upsert)!=null&&y.overwrite),name:"up-rec",title:a("No","bit-integrations")})]})]})})})]})}function ee({i:t,formFields:r,uploadFields:u,field:l,crmConf:d,setCrmConf:i,tab:g,type:F}){var p,j,T,v,N,R,E,U,$,Z,q,z,L,P,f,V,A,S,B;const x=g===0?d.module:(j=(p=d.relatedlists)==null?void 0:p[g-1])==null?void 0:j.module,h=g===0?d.layout:(v=(T=d.relatedlists)==null?void 0:T[g-1])==null?void 0:v.layout;let b;u?b=l.zohoFormField===""||((U=(E=(R=(N=d.default.layouts)==null?void 0:N[x])==null?void 0:R[h])==null?void 0:E.requiredFileUploadFields)==null?void 0:U.indexOf(l.zohoFormField))===-1:b=l.zohoFormField===""||((z=(q=(Z=($=d.default.layouts)==null?void 0:$[x])==null?void 0:Z[h])==null?void 0:q.required)==null?void 0:z.indexOf(l.zohoFormField))===-1;const w=je(me),{isPro:m}=w;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:l.formField||"",onChange:o=>ae(o,t,d,i,u,g),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:u?r.map(o=>o.type==="file"&&e.jsx("option",{value:o.name,children:o.label},`ff-zhcrm-${o.name}`)):r.map(o=>o.type!=="file"&&e.jsx("option",{value:o.name,children:o.label},`ff-zhcrm-${o.name}`))}),!u&&e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),m?"":`(${a("Pro","bit-integrations")})`),children:m&&((L=we)==null?void 0:L.map(o=>e.jsx("option",{value:o.name,children:o.label},`ff-zhcrm-${o.name}`)))})]}),l.formField==="custom"&&e.jsx(Te,{onChange:o=>ve(o,t,d,i),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",disabled:!b,name:"zohoFormField",value:l.zohoFormField||"",onChange:o=>ae(o,t,d,i,u,g),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),u?((V=(f=(P=d.default.layouts)==null?void 0:P[x])==null?void 0:f[h])==null?void 0:V.fileUploadFields)&&Object.keys(d.default.layouts[x][h].fileUploadFields).filter(o=>o.required!==!0).map(o=>b?!d.default.layouts[x][h].fileUploadFields[o].required&&e.jsx("option",{value:o,children:d.default.layouts[x][h].fileUploadFields[o].display_label},o):e.jsx("option",{value:o,children:d.default.layouts[x][h].fileUploadFields[o].display_label},o)):((B=(S=(A=d.default.layouts)==null?void 0:A[x])==null?void 0:S[h])==null?void 0:B.fields)&&Object.keys(d.default.layouts[x][h].fields).filter(o=>o.required!==!0).map(o=>b?!d.default.layouts[x][h].fields[o].required&&e.jsx("option",{value:o,children:d.default.layouts[x][h].fields[o].display_label},o):e.jsx("option",{value:o,children:d.default.layouts[x][h].fields[o].display_label},o))]})]}),e.jsx("div",{className:"flx integ-fld-wrp",children:b&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>I(t,d,i,u,g),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Ne(t,d,i,u,g),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function Oe({tab:t,settab:r,formID:u,formFields:l,crmConf:d,setCrmConf:i,handleInput:g,isLoading:F,setIsLoading:x,setSnackbar:h}){var b,w,m,p,j,T,v;return Q.useEffect(()=>{ce(0,r)},[]),typeof btcbi!="undefined"&&btcbi.isPro,e.jsxs(e.Fragment,{children:[F&&e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Layout:","bit-integrations")}),e.jsxs("select",{onChange:g,name:"layout",value:d.layout,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:a("Select Layout","bit-integrations")}),((w=(b=d==null?void 0:d.default)==null?void 0:b.layouts)==null?void 0:w[d.module])&&Object.keys(d.default.layouts[d.module]).map(N=>e.jsx("option",{value:N,children:N},N))]}),e.jsx("button",{onClick:()=>ue(t,u,d,i,x,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Layouts","bit-integrations")}'`},type:"button",disabled:F,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),((T=(j=(p=(m=d.default)==null?void 0:m.layouts)==null?void 0:p[d.module])==null?void 0:j[d.layout])==null?void 0:T.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),d.field_map.map((N,R)=>e.jsx(ee,{i:R,field:N,crmConf:d,formFields:l,setCrmConf:i,tab:t,setSnackbar:h},`crm-m-${R+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(d.field_map.length,d,i,!1,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),Object.keys((v=d.default.layouts[d.module][d.layout])==null?void 0:v.fileUploadFields).length!==0&&e.jsxs("div",{className:"pos-rel",children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Map File Upload Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),d.upload_field_map.map((N,R)=>e.jsx(ee,{i:R,uploadFields:!0,field:N,crmConf:d,formFields:l,setCrmConf:i,tab:t,setSnackbar:h},`crm-m-${R+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(d.upload_field_map.length,d,i,!0,t),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(he,{formID:u,formFields:l,crmConf:d,setCrmConf:i,tab:t,setSnackbar:h})]})]})}function Ue({indx:t,tab:r,settab:u,formID:l,formFields:d,crmConf:i,setCrmConf:g,handleInput:F,isLoading:x,setIsLoading:h,setSnackbar:b}){var w,m,p,j,T,v,N,R,E,U,$,Z,q,z,L,P,f,V,A,S,B,o,H,J,K;return Q.useEffect(()=>{ce(t+1,u,l,i,g,h,b)},[]),typeof btcbi!="undefined"&&btcbi.isPro,e.jsxs(e.Fragment,{children:[x&&e.jsx(X,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"pos-rel",children:[e.jsx("b",{className:"wdt-100 d-in-b",children:a("Related List:","bit-integrations")}),e.jsxs("select",{onChange:F,name:"module",value:(m=(w=i==null?void 0:i.relatedlists)==null?void 0:w[r-1])==null?void 0:m.module,className:"btcd-paper-inp w-7",disabled:!i.module,children:[e.jsx("option",{value:"",children:a("Select Related Module","bit-integrations")}),((j=(p=i==null?void 0:i.default)==null?void 0:p.relatedlists)==null?void 0:j[i.module])&&Object.values(i.default.relatedlists[i.module]).map(y=>e.jsx("option",{value:y.module,children:y.name},y.module))]}),e.jsx("button",{onClick:()=>Me(l,i,g,h,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Related Lists","bit-integrations")}'`},type:"button",disabled:x,children:"↻"}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("b",{className:"wdt-100 d-in-b",children:a("Layout:","bit-integrations")}),e.jsxs("select",{onChange:F,name:"layout",value:(v=(T=i==null?void 0:i.relatedlists)==null?void 0:T[r-1])==null?void 0:v.layout,className:"btcd-paper-inp w-7",disabled:!((R=(N=i==null?void 0:i.relatedlists)==null?void 0:N[r-1])!=null&&R.module),children:[e.jsx("option",{value:"",children:a("Select Layout","bit-integrations")}),((Z=(E=i==null?void 0:i.default)==null?void 0:E.layouts)==null?void 0:Z[($=(U=i.relatedlists)==null?void 0:U[r-1])==null?void 0:$.module])&&Object.keys(i.default.layouts[i.relatedlists[r-1].module]).map(y=>e.jsx("option",{value:y,children:y},y))]}),e.jsx("button",{onClick:()=>ue(r,l,i,g,h,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh CRM Layouts"'},type:"button",disabled:x,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),((S=(A=(P=(q=i.default)==null?void 0:q.layouts)==null?void 0:P[(L=(z=i==null?void 0:i.relatedlists)==null?void 0:z[r-1])==null?void 0:L.module])==null?void 0:A[(V=(f=i==null?void 0:i.relatedlists)==null?void 0:f[r-1])==null?void 0:V.layout])==null?void 0:S.fields)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),(H=(o=(B=i.relatedlists)==null?void 0:B[r-1])==null?void 0:o.field_map)==null?void 0:H.map((y,s)=>e.jsx(ee,{i:s,field:y,crmConf:i,formFields:d,setCrmConf:g,tab:r,setSnackbar:b},`crm-m-${s+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(i.relatedlists[r-1].field_map.length,i,g,!1,r),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),((K=(J=i.default)==null?void 0:J.layouts[i.relatedlists[r-1].module])==null?void 0:K[i.relatedlists[r-1].layout])&&Object.keys(i.default.layouts[i.relatedlists[r-1].module][i.relatedlists[r-1].layout].fileUploadFields).length!==0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("File Upload Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Zoho Fields","bit-integrations")})})]}),i.relatedlists[r-1].upload_field_map.map((y,s)=>e.jsx(ee,{i:s,uploadFields:1,field:y,crmConf:i,formFields:d,setCrmConf:g,tab:r,setSnackbar:b},`crm-m-${s+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>I(i.relatedlists[r-1].upload_field_map.length,i,g,!0,r),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(he,{formFields:d,crmConf:i,setCrmConf:g,tab:r,formID:l,setSnackbar:b})]})]})}function Ve({tab:t,settab:r,formID:u,formFields:l,handleInput:d,crmConf:i,setCrmConf:g,isLoading:F,setIsLoading:x,setSnackbar:h}){var m;const b=()=>{if(i.relatedlists.length<3){const p=M({},i);p.relatedlists.push({actions:{},field_map:[{formField:"",zohoFormField:""}],layout:"",module:"",upload_field_map:[{formField:"",zohoFormField:""}]}),g(M({},p))}},w=p=>{const j=M({},i);j.relatedlists.splice(p,1),j.relatedlists.length||r(0),g(M({},j))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:a("Module:","bit-integrations")}),e.jsxs("select",{onChange:d,name:"module",value:i.module,className:"btcd-paper-inp w-5",disabled:t,children:[e.jsx("option",{value:"",children:a("Select Module","bit-integrations")}),((m=i==null?void 0:i.default)==null?void 0:m.modules)&&Object.keys(i.default.modules).map(p=>e.jsx("option",{value:p,children:i.default.modules[p].plural_label},p))]}),t===0&&e.jsx("button",{onClick:()=>ke(u,i,g,x,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CRM Modules","bit-integrations")}'`},type:"button",disabled:F,children:"↻"}),e.jsx("br",{}),e.jsx("div",{children:e.jsxs(ye,{children:[e.jsxs("div",{className:"flx mt-2",children:[e.jsx(de,{children:e.jsx("button",{className:`btcd-s-tab-link ${t===0&&"s-t-l-active"}`,type:"button",children:a("New Record","bit-integrations")})}),(i==null?void 0:i.relatedlists)&&i.relatedlists.map((p,j)=>e.jsxs(e.Fragment,{children:[e.jsx(de,{children:e.jsxs("button",{className:`btcd-s-tab-link ${t===j+1&&"s-t-l-active"}`,type:"button",children:[a("Related List #","bit-integrations"),j+1]})},`t-${j*3}`),e.jsx("button",{onClick:()=>w(j),className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:e.jsx(_e,{size:"14"})})]})),i.relatedlists.length<3&&e.jsx("button",{onClick:b,className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Add More Related List","bit-integrations")}'`},type:"button",children:"+"})]}),e.jsx("div",{className:"btcd-hr"}),e.jsx(ne,{children:e.jsx(Oe,{tab:t,settab:r,formID:u,formFields:l,crmConf:i,setCrmConf:g,handleInput:d,isLoading:F,setIsLoading:x,setSnackbar:h})}),(i==null?void 0:i.relatedlists)&&i.relatedlists.map((p,j)=>e.jsx(ne,{children:e.jsx(Ue,{indx:j,tab:t,settab:r,formID:u,formFields:l,crmConf:i,setCrmConf:g,handleInput:d,isLoading:F,setIsLoading:x,setSnackbar:h})},`p-${j+2.4}`))]})}),e.jsx("br",{})]})}export{Ve as Z};
