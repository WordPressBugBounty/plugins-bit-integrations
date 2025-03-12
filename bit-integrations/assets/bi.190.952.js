var E=Object.defineProperty;var P=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var j=(l,s,i)=>s in l?E(l,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[s]=i,m=(l,s)=>{for(var i in s||(s={}))S.call(s,i)&&j(l,i,s[i]);if(P)for(var i of P(s))k.call(s,i)&&j(l,i,s[i]);return l};import{j as e,L as w}from"./main-794.js";import{x as o,a9 as O}from"./bi.266.440.js";import{_ as r}from"./bi.828.0.js";import{a as I,h as L}from"./bi.499.3.js";import{T as R}from"./bi.257.704.js";import{a as A,T as n,g as F,b as D,P as _,v as $,d as T,e as W,C as M}from"./bi.913.953.js";const y=(l,s,i)=>{const a=m({},s);a.field_map.splice(l,0,{}),i(m({},a))},U=(l,s,i)=>{const a=m({},s);a.field_map.length>1&&a.field_map.splice(l,1),i(m({},a))},N=(l,s,i,a)=>{const d=m({},i);d.field_map[s][l.target.name]=l.target.value,l.target.value==="custom"&&(d.field_map[s].customValue=""),a(m({},d))};function x({i:l,formFields:s,field:i,voxelConf:a,setVoxelConf:d}){var h,b;const p=(a==null?void 0:a.voxelFields.filter(t=>t.required===!0))||[],g=((h=a==null?void 0:a.voxelFields)==null?void 0:h.filter(t=>t.required===!1))||[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:t=>N(t,l,a,d),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:s==null?void 0:s.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))}),e.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),e.jsx("optgroup",{label:"General Smart Codes",children:(b=I)==null?void 0:b.map(t=>e.jsx("option",{value:t.name,children:t.label},`ff-rm-${t.name}`))})]}),i.formField==="custom"&&e.jsx(R,{onChange:t=>L(t,l,a,d),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:s}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<p.length,name:"voxelField",value:l<p?p[l].label||"":i.voxelField||"",onChange:t=>N(t,l,a,d),children:[e.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),l<p.length?e.jsx("option",{value:p[l].key,children:p[l].label},p[l].key):g.map(({key:t,label:c})=>e.jsx("option",{value:t,children:c},t))]})]}),e.jsx("div",{className:"flx integ-fld-wrp",children:l>=p.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>y(l,a,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>U(l,a,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function B({formFields:l,voxelConf:s,setVoxelConf:i,loading:a,setLoading:d,setSnackbar:p}){const g=t=>{const c=m({},s);if(c.selectedTask=t,c.selectedEvent="",t)switch(t){case n.NEW_POST:case n.UPDATE_POST:F(c,i,a,d);break;case n.NEW_COLLECTION_POST:case n.UPDATE_COLLECTION_POST:T(c,i,M,a,d);break;case n.NEW_PROFILE:case n.UPDATE_PROFILE:T(c,i,W,a,d);break;case n.SET_POST_VERIFIED:case n.SET_COLLECTION_POST_VERIFIED:case n.SET_PROFILE_VERIFIED:const u=$(t);c.voxelFields=u.staticFields,c.field_map=u.fieldMap;break}else c.selectedPostType="",c.field_map=[];i(m({},c))},h=(t,c)=>{const u=m({},s);u[c]=t,!t&&c==="selectedPostType"&&(u.voxelFields=[],u.field_map=[],u.posts=[],u.selectedPost=""),t&&c==="selectedPostType"&&T(u,i,t,a,d),i(m({},u))},b=`<h4>${r('If you have "recurring-date, event-date, work-hours" or any kind of image or attachment fields see the instructions below:',"bit-integrations")}</h4>
  <ul>
    <li>${r("For any kind of <strong>image, file, or other attachment,</strong> provide an <strong>attachment ID; for multiple, provide comma-separated ids.</strong>","bit-integrations")}</li>
    <li>${r("For <strong>Event Unit</strong> field, accepted values: <strong>day, week, month, year.</strong>","bit-integrations")}</li>
    <li>${r("For <strong>Work Days</strong> field, accepted values: <strong>sat, sun, mon, tue, wed, thu, fri.</strong>","bit-integrations")}</li>
    <li>${r("For <strong>Work Hours</strong> field, enter time ranges as start and end times, with a dash between them. For more than one range, separate them with commas. <strong>Example: 09:00-12:00 or 09:00-11:00, 12:00-14:00.</strong>","bit-integrations")}</li>
    <li>${r("For <strong>Work Status</strong> field, accepted values: <strong> hours, open, close, appointments_only.</strong>","bit-integrations")}</li>
    <li>${r("For <strong>Taxonomy</strong> field, provide taxonomy slug(s), separate with comma if multiple allowed.","bit-integrations")}</li>
    <li>${r("For <strong>Product & Post Relation</strong> field, provide product id and post id respectively.","bit-integrations")}</li>
  </ul>`;return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Task:","bit-integrations")}),e.jsx(o,{style:{width:"450px"},options:A,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedTask,onChange:t=>g(t),singleSelect:!0})]}),(s.selectedTask===n.NEW_POST||s.selectedTask===n.UPDATE_POST)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Post Type:","bit-integrations")}),e.jsx(o,{style:{width:"450px"},options:s==null?void 0:s.postTypes,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedPostType,onChange:t=>h(t,"selectedPostType"),disabled:a.postTypes,singleSelect:!0}),e.jsx("button",{onClick:()=>F(s,i,a,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Post Types","bit-integrations")}'`},disabled:a.postTypes,type:"button",children:"↻"})]}),(s.selectedTask===n.UPDATE_POST||s.selectedTask===n.UPDATE_COLLECTION_POST)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Post:","bit-integrations")}),e.jsx(o,{style:{width:"450px"},options:s.posts,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedPost,onChange:t=>h(t,"selectedPost"),disabled:a.posts||a.postTypes||a.postFields,singleSelect:!0}),e.jsx("button",{onClick:()=>D(s,i,s.selectedPostType,a,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh Posts","bit-integrations")}'`},disabled:a.posts||a.postTypes||a.postFields||!s.selectedPostType,type:"button",children:"↻"})]}),_.includes(s.selectedTask)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Post Status:","bit-integrations")}),e.jsx(o,{style:{width:"450px"},options:[{value:"publish",label:"Publish"},{value:"draft",label:"Draft"},{value:"pending",label:"Pending"}],className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedPostStatus,onChange:t=>h(t,"selectedPostStatus"),singleSelect:!0})]}),(a.postTypes||a.postFields||a.posts)&&e.jsx(w,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:r("The Events Calendar Fields","bit-integrations")})})]}),s.selectedTask&&(s==null?void 0:s.field_map.map((t,c)=>e.jsx(x,{i:c,field:t,voxelConf:s,formFields:l,setVoxelConf:i,setSnackbar:p},`rp-m-${c+9}`))),(s==null?void 0:s.selectedTask)&&s.field_map.length!==0&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>y(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),(_.includes(s.selectedTask)||s.selectedTask===n.NEW_PROFILE||s.selectedTask===n.UPDATE_PROFILE)&&e.jsx(O,{note:b,isInstruction:!0,isHeadingNull:!1,maxWidth:"100%"})]})})}export{B as V};
