var A=Object.defineProperty;var M=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var T=(l,i,a)=>i in l?A(l,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[i]=a,j=(l,i)=>{for(var a in i||(i={}))E.call(i,a)&&T(l,a,i[a]);if(M)for(var a of M(i))B.call(i,a)&&T(l,a,i[a]);return l};import{f as k,j as e}from"./main-425.js";import{c as G,_ as t,d as R,e as $}from"./bi.107.0.js";import{T as V}from"./bi.563.11.js";import{a as q}from"./bi.25.3.js";import{T as w}from"./bi.178.675.js";const o=(l,i,a,n)=>{const s=j({},a);s[l].splice(i,0,{}),n(j({},s))},S=(l,i,a,n)=>{const s=j({},a);s[l].length>1&&s[l].splice(i,1),n(j({},s))},f=(l,i,a,n,s)=>{const d=j({},n);d[l][a][i.target.name]=i.target.value,s(j({},d))},K=l=>!((l!=null&&l.post_map?l.post_map.filter(a=>!a.formField&&a.postField&&a.required):[]).length>0),Q=l=>!((l!=null&&l.acf_map?l.acf_map.filter(a=>!a.formField&&a.acfField&&a.required):[]).length>0),W=l=>!((l!=null&&l.metabox_map?l.metabox_map.filter(a=>!a.formField&&a.metaboxField&&a.required):[]).length>0),X=l=>!((l!=null&&l.je_cpt_meta_map?l.je_cpt_meta_map.filter(a=>!a.formField&&a.jeCPTField&&a.required):[]).length>0),Y=(l,i)=>{const a=G({},"post-types/list").then(n=>{if(n&&n.success){const{data:s}=n;return s&&i(s),s!==0?"Successfully refresh Post Types.":t("Post Types not found","bit-integrations")}});R.promise(a,{success:n=>n,error:t("Error Occurred","bit-integrations"),loading:t("Loading Post Types...")})};function v({i:l,type:i,formFields:a,field:n,postConf:s,setPostConf:d,customFields:x,fieldType:N}){var r;const h={acf:{propName:"acf_map",fldName:"acfField"},acfFile:{propName:"acf_file_map",fldName:"acfFileUpload"},metabox:{propName:"metabox_map",fldName:"metaboxField"},metaboxFile:{propName:"metabox_file_map",fldName:"metaboxFileUpload"},jeCPTFields:{propName:"je_cpt_meta_map",fldName:"jeCPTField"},jeCPTFiles:{propName:"je_cpt_file_map",fldName:"jeCPTFile"}},{propName:p,fldName:u}=h[i],g=(c,y,U,z)=>{const F=j({},U);F[p][y].customValue=c,z(j({},F))},b=x.length>0&&!!x.find(c=>c.key===n[u]&&c.required),m=k($),{isPro:_}=m;return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:c=>f(p,c,l,s,d),children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),N==="fields"?e.jsxs(e.Fragment,{children:[e.jsx("optgroup",{label:t("Form Fields","bit-integrations"),children:a==null?void 0:a.map(c=>c.type!=="file"&&e.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`))}),e.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(t("General Smart Codes %s","bit-integrations"),_?"":`(${t("Pro","bit-integrations")})`),children:_&&((r=q)==null?void 0:r.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`)))})]}):a==null?void 0:a.map(c=>c.type==="file"&&e.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`))]}),n.formField==="custom"&&e.jsx(w,{onChange:c=>g(c,l,s,d),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue||"",placeholder:t("Custom Value","bit-integrations"),formFields:a}),e.jsxs("select",{className:"btcd-paper-inp",name:u,value:n[u]||"",onChange:c=>f(p,c,l,s,d),disabled:b,children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),x.length>0&&(x==null?void 0:x.map(c=>e.jsx("option",{value:c.key,children:`${c.name}`},`${c.key}-1`)))]})]}),!b&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(p,l,s,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>S(p,l,s,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(V,{})})]})]})}function Z({formFields:l,postConf:i,setPostConf:a,acfFields:n,mbFields:s,jeCPTFields:d}){var x,N,h,p,u,g;return e.jsx("div",{children:e.jsxs("div",{style:{width:900},children:[e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:t("ACF Fields Mapping","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("ACF Fields","bit-integrations")})})]})]}),(x=i==null?void 0:i.acf_map)==null?void 0:x.map((b,m)=>e.jsx(v,{i:m,type:"acf",field:b,formFields:l,postConf:i,setPostConf:a,customFields:n==null?void 0:n.fields,fieldType:"fields"},`analytics-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>o("acf_map",i.acf_map.length,i,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:t("ACF File Upload Fields Mapping","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("ACF Fields","bit-integrations")})})]})]}),(N=i==null?void 0:i.acf_file_map)==null?void 0:N.map((b,m)=>e.jsx(v,{i:m,type:"acfFile",field:b,formFields:l,postConf:i,setPostConf:a,customFields:n==null?void 0:n.files,fieldType:"file"},`analytics-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>{var b;return o("acf_file_map",(b=i==null?void 0:i.acf_file_map)==null?void 0:b.length,i,a)},className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:t("MetaBox Fields Mapping","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("MB Fields","bit-integrations")})})]})]}),(h=i==null?void 0:i.metabox_map)==null?void 0:h.map((b,m)=>e.jsx(v,{i:m,type:"metabox",field:b,formFields:l,postConf:i,setPostConf:a,customFields:s==null?void 0:s.fields,fieldType:"fields"},`analytics-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>o("metabox_map",i.metabox_map.length,i,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:t("MetaBox File Upload Fields Mapping","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("MB Fields","bit-integrations")})})]})]}),(p=i==null?void 0:i.metabox_file_map)==null?void 0:p.map((b,m)=>e.jsx(v,{i:m,type:"metaboxFile",field:b,formFields:l,postConf:i,setPostConf:a,customFields:s==null?void 0:s.files,fieldType:"file"},`analytics-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>o("metabox_file_map",i.metabox_file_map.length,i,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:t("JetEngine CPT Meta","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("CPT Meta Fields","bit-integrations")})})]})]}),(u=i==null?void 0:i.je_cpt_meta_map)==null?void 0:u.map((b,m)=>e.jsx(v,{i:m,type:"jeCPTFields",field:b,formFields:l,postConf:i,setPostConf:a,customFields:d==null?void 0:d.fields,fieldType:"fields"},`analytics-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>o("je_cpt_meta_map",i.je_cpt_meta_map.length,i,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{className:"mt-3 mb-1",children:e.jsx("b",{children:t("JetEngine CPT File Upload (Media/Gallery)","bit-integrations")})}),e.jsx("div",{className:"btcd-hr"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:t("CPT Meta Fields (Media/Gallery)","bit-integrations")})})]})]}),(g=i==null?void 0:i.je_cpt_file_map)==null?void 0:g.map((b,m)=>e.jsx(v,{i:m,type:"jeCPTFiles",field:b,formFields:l,postConf:i,setPostConf:a,customFields:d==null?void 0:d.files,fieldType:"file"},`analytics-m-${m+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>o("je_cpt_file_map",i.je_cpt_file_map.length,i,a),className:"icn-btn sh-sm",type:"button",children:"+"})})]})]})})}function P({i:l,type:i,formFields:a,field:n,postConf:s,setPostConf:d,customFields:x}){var _;const N={acf:{propName:"acf_map",fldName:"acfField"},post:{propName:"post_map",fldName:"postField"},acfFile:{propName:"acf_file_map",fldName:"acfFileUpload"}},{propName:h,fldName:p}=N[i],u=(r,c)=>{const y=j({},s);y[h][c].customValue=r,d(y)},g=!!x.find(r=>r.key===n[p]&&r.required),b=k($),{isPro:m}=b;return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:r=>f(h,r,l,s,d),children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),e.jsx("optgroup",{label:t("Form Fields","bit-integrations"),children:a==null?void 0:a.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-zhcrm-${r.name}`))}),e.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${t("General Smart Codes","bit-integrations")} ${m?"":`(${t("Pro","bit-integrations")})`}`,children:m&&((_=q)==null?void 0:_.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-zhcrm-${r.name}`)))})]}),n.formField==="custom"&&e.jsx(w,{onChange:r=>u(r,l),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue||"",placeholder:t("type # to use trigger field","bit-integrations"),formFields:a}),e.jsxs("select",{className:"btcd-paper-inp",name:p,value:n[p]||"",onChange:r=>f(h,r,l,s,d),disabled:g,children:[e.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),x==null?void 0:x.map(r=>e.jsx("option",{value:r.key,children:`${r.name}`},`${r.key}-1`))]})]}),!g&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(h,l,s,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>S(h,l,s,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(V,{})})]})]})}export{Z as C,P as F,o as a,Q as b,K as c,W as d,X as e,Y as r};
