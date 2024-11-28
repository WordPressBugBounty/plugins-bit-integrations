var w=Object.defineProperty,L=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var y=(e,l,t)=>l in e?w(e,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[l]=t,g=(e,l)=>{for(var t in l||(l={}))P.call(l,t)&&y(e,t,l[t]);if(N)for(var t of N(l))S.call(l,t)&&y(e,t,l[t]);return e},v=(e,l)=>L(e,M(l));var I=(e,l,t)=>new Promise((a,c)=>{var x=b=>{try{m(t.next(b))}catch(p){c(p)}},h=b=>{try{m(t.throw(b))}catch(p){c(p)}},m=b=>b.done?a(b.value):Promise.resolve(b.value).then(x,h);m((t=t.apply(e,l)).next())});import{f as R,j as s,L as q}from"./main-441.js";import{e as T,_ as r}from"./bi.452.0.js";import{y as V,a8 as D}from"./bi.141.437.js";import{a as _,b as $,d as A}from"./bi.705.698.js";import{g as z,a as E,b as k}from"./bi.301.805.js";import{a as G,h as U}from"./bi.73.3.js";import{T as B}from"./bi.768.673.js";function H({i:e,field:l,formFields:t,notionConf:a,setNotionConf:c}){var p,d,u,j;const x=R(T),{isPro:h}=x;if(((p=a==null?void 0:a.field_map)==null?void 0:p.length)===1&&l.notionFormFields===""){const i=g({},a),F=z(i);i.field_map=F,c(i)}const m=((d=a==null?void 0:a.notionFields)==null?void 0:d.filter(i=>i.required===!0))||[],b=((u=a==null?void 0:a.notionFields)==null?void 0:u.filter(i=>i.required===!1))||[];return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formFields",onChange:i=>{_(i,e,a,c)},value:l.formFields||"",children:[s.jsx("option",{value:"",children:r("Select Field")}),s.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:t==null?void 0:t.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`))}),s.jsx("option",{value:"custom",children:r("Custom...")}),s.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),h?"":`(${r("Pro","bit-integrations")})`),children:h&&((j=G)==null?void 0:j.map(i=>s.jsx("option",{value:i.name,children:i.label},`ff-rm-${i.name}`)))})]}),l.formFields==="custom"&&s.jsx(B,{onChange:i=>U(i,e,a,c),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:l.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:t}),s.jsxs("select",{className:"btcd-paper-inp",disabled:e<m.length,name:"notionFormFields",onChange:i=>{_(i,e,a,c)},value:e<m.length?m[e].label||"":l.notionFormFields||"",children:[s.jsx("option",{value:"",children:r("Select Field")}),e<m.length?s.jsx("option",{value:m[e].label,children:m[e].label},m[e].key):b.map(({key:i,label:F})=>s.jsx("option",{value:F,children:F},F))]})]}),s.jsx("button",{onClick:()=>$(e,a,c),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>A(e,a,c),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})}function n({notionConf:e,setNotionConf:l,formFields:t,loading:a,setLoading:c}){var m,b;const x=p=>I(this,null,function*(){const d=g({},e),{name:u,value:j}=p.target;switch(j!==""?d[u]=j:delete d[u],u){case"databaseId":d.databaseId===""&&(d.field_map=[{formFields:"",notionFormFields:""}]),d.databaseId&&(c(v(g({},a),{field:!0})),d.notionFields=yield k(d,l),d.notionFields&&c(v(g({},a),{field:!1})));break}l(d)}),h=`
    <b>${r("Files & Media","bit-integrations")}</b>
    <p>${r("The Notion API does not yet support uploading files to Notion.","bit-integrations")}</p>
    <p>${r("Please Provide a public URL of the file instead of file attachment.","bit-integrations")}</p>
  `;return s.jsxs("div",{className:"mt-2",children:[!a.page&&((m=e==null?void 0:e.default)==null?void 0:m.databaseLists)&&s.jsxs("div",{className:"flx mt-2",children:[s.jsx("b",{className:"wdt-200 d-in-b ",children:r("Database List:","bit-integrations")}),s.jsxs("select",{onChange:x,name:"databaseId",value:e==null?void 0:e.databaseId,className:"btcd-paper-inp w-5 mx-0",children:[s.jsx("option",{value:"",children:r("Select Database","bit-integrations")}),((b=e==null?void 0:e.default)==null?void 0:b.databaseLists)&&(e==null?void 0:e.default.databaseLists.map(p=>s.jsx("option",{value:p.id,children:p.name},p.id)))]}),s.jsx("button",{onClick:()=>E(e,l,a,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:a.list,children:"↻"}),a.list&&s.jsx(V,{size:"20",clr:"#022217",className:"ml-2"})]}),(e==null?void 0:e.databaseId)&&s.jsxs("div",{className:"mt-5",children:[s.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")}),s.jsx("button",{onClick:()=>k(e,l,a,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:a.field,children:"↻"}),s.jsx("div",{className:"btcd-hr mt-2 mb-4"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Notion Fields","bit-integrations")})})]}),e==null?void 0:e.field_map.map((p,d)=>s.jsx(H,{i:d,field:p,formFields:t,notionConf:e,setNotionConf:l},`ko-m-${d+8}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>$(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),(a.page||a.field)&&s.jsx(q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsx(D,{note:h})]})}export{n as N};
