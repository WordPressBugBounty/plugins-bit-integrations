var T=Object.defineProperty;var N=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var F=(e,l,s)=>l in e?T(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,b=(e,l)=>{for(var s in l||(l={}))A.call(l,s)&&F(e,s,l[s]);if(N)for(var s of N(l))S.call(l,s)&&F(e,s,l[s]);return e};import{r as $,j as t,L as o,i as _}from"./main-579.js";import{m as q,_ as r,e as I,n as P,H as V,j as M,k as E}from"./bi.919.15.js";import{g as v,a as H,b as w}from"./bi.832.848.js";const R=(e,l,s)=>{const a=b({},l);a.field_map.splice(e,0,{}),s(b({},a))},K=(e,l,s)=>{const a=b({},l);a.field_map.length>1&&a.field_map.splice(e,1),s(b({},a))},y=(e,l,s,a)=>{const i=b({},s);i.field_map[l][e.target.name]=e.target.value,e.target.value==="custom"&&(i.field_map[l].customValue=""),e.target.value==="customFieldKey"&&(i.field_map[l].customFieldKey=""),a(b({},i))},O=(e,l,s,a,i)=>{const d=b({},s);d.field_map[l][i]=e.target.value,a(b({},d))};function B({lionDeskConf:e,setLionDeskConf:l,loading:s,setLoading:a}){var u,x;const[i,d]=$.useState({show:!1,action:()=>{}}),p=(n,m)=>{var j;const c=b({},e);m==="tag"&&((j=n.target)!=null&&j.checked?(v(e,l,a),c.actions.tag=!0):(d({show:!1}),delete c.actions.tag)),d({show:m}),l(b({},c))},h=()=>{d({show:!1})},g=(n,m)=>{const c=b({},e);c[m]=n,l(b({},c))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.actionName==="contact"&&t.jsx(q,{checked:((u=e==null?void 0:e.selectedTag)==null?void 0:u.length)||!1,onChange:n=>p(n,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:r("Add Tags","bit - integrations"),subTitle:r("Add tags")}),t.jsxs(I,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:r("Ok","bit-integrations"),show:i.show==="tag",close:h,action:h,title:r("Tags","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:r("Select tag","bit-integrations")}),s.tags?t.jsx(o,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(P,{options:(x=e==null?void 0:e.tags)==null?void 0:x.map(n=>({label:n.tag,value:n.tag})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedTag,onChange:n=>g(n,"selectedTag")}),t.jsx("button",{onClick:()=>v(e,l,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${r("Refresh Tags","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}function G({field:e,index:l,conf:s,setConf:a,fieldValue:i,fieldLabel:d,className:p}){return t.jsx(V,{onChange:h=>O(h,l,s,a,i),label:r(d,"bit-integrations"),className:p,type:"text",value:e[i],placeholder:r(d,"bit-integrations")})}function U({i:e,formFields:l,field:s,lionDeskConf:a,setLionDeskConf:i}){var n,m;let d=[];a.actionName==="campaign"?d=a==null?void 0:a.campaignFields:a.actionName==="contact"&&(d=a==null?void 0:a.contactFields);const p=d.filter(c=>c.required===!0)||[],g=[...d.filter(c=>c.required===!1)||[],...(a==null?void 0:a.customFields)||[]];((n=a==null?void 0:a.field_map)==null?void 0:n.length)===1&&s.lionDeskFormField===""&&i(c=>(c.field_map=H(c),c));const u=_(M),{isPro:x}=u;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:c=>y(c,e,a,i),children:[t.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),t.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:l==null?void 0:l.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),t.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),x?"":`(${r("Pro","bit-integrations")})`),children:x&&((m=E)==null?void 0:m.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),s.formField==="custom"&&t.jsx(G,{field:s,index:e,conf:a,setConf:i,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<p.length,name:"lionDeskFormField",value:e<p.length?p[e].key||"":s.lionDeskFormField||"",onChange:c=>y(c,e,a,i),children:[t.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),e<p.length?t.jsx("option",{value:p[e].key,children:p[e].label},p[e].key):g.map(({key:c,label:j})=>t.jsx("option",{value:c,children:j},c))]})]}),e>=p.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>R(e,a,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>K(e,a,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function X({formFields:e,handleInput:l,lionDeskConf:s,setLionDeskConf:a,loading:i,setLoading:d,isLoading:p,setIsLoading:h,setSnackbar:g}){const u=_(M),x=n=>{const m=b({},s),{name:c}=n.target;m.field_map=[{formField:"",lionDeskFormField:""}],n.target.value!==""?(m[c]=n.target.value,n.target.value==="contact"&&w(m,a,h,u)):delete m[c],a(b({},m))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:x,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:r("Select an action","bit-integrations")}),t.jsx("option",{value:"contact","data-action_name":"contact",children:r("Create Contact","bit-integrations")}),t.jsx("option",{value:"campaign","data-action_name":"campaign",children:r("Create Campaign","bit-integrations")})]}),(i.CRMPipelines||i.CRMOwners||i.CRMContacts)&&t.jsx(o,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),p&&t.jsx(o,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&!p&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:r("Field Map","bit-integrations")}),s.actionName==="contact"&&t.jsx("button",{onClick:()=>w(s,a,h,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Refresh fields","bit-integrations")}'`},type:"button",disabled:i.CRMPipelines,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:r("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:r("LionDesk Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((n,m)=>t.jsx(U,{i:m,field:n,lionDeskConf:s,formFields:e,setLionDeskConf:a,setSnackbar:g},`rp-m-${m+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>R(s.field_map.length,s,a),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:r("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(B,{lionDeskConf:s,setLionDeskConf:a,formFields:e,loading:i,setLoading:d})]})]})}export{X as L};
