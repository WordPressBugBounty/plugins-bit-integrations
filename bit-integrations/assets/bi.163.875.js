var V=Object.defineProperty;var w=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var _=(a,e,i)=>e in a?V(a,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[e]=i,p=(a,e)=>{for(var i in e||(e={}))I.call(e,i)&&_(a,i,e[i]);if(w)for(var i of w(e))L.call(e,i)&&_(a,i,e[i]);return a};import{j as t,f as R,L as B}from"./main-246.js";import{_ as d,d as T}from"./bi.560.0.js";import{a as q,M as O,b as S}from"./bi.545.3.js";import{b as U,T as H}from"./bi.975.11.js";import{r as P,a as y}from"./bi.742.874.js";function A({benchMarkConf:a,setBenchMarkConf:e}){var l;const i=(m,n)=>{const u=p({},a);n==="update"&&(m.target.checked?u.actions.update=!0:delete u.actions.update),e(p({},u))};return t.jsx("div",{className:"pos-rel d-flx w-8",children:t.jsx(U,{checked:((l=a.actions)==null?void 0:l.update)||!1,onChange:m=>i(m,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:d("Update BenchMark","bit-integrations"),subTitle:d("Update Responses with BenchMark existing email?","bit-integrations")})})}function E({i:a,formFields:e,field:i,benchMarkConf:l,setBenchMarkConf:m}){var v,N,h,F;const n=i.required,u=((v=l==null?void 0:l.default)==null?void 0:v.fields)&&Object.values((N=l==null?void 0:l.default)==null?void 0:N.fields).filter(s=>!s.required),b=R(T),{isPro:g}=b,r=s=>{const c=p({},l);c.field_map.splice(s,0,{}),m(c)},o=s=>{const c=p({},l);c.field_map.length>1&&c.field_map.splice(s,1),m(c)},x=(s,c)=>{const j=p({},l);j.field_map[c][s.target.name]=s.target.value,s.target.value==="custom"&&(j.field_map[c].customValue=""),m(j)},$=(s,c)=>{const j=p({},l);j.field_map[c].customValue=s.target.value,m(j)};return t.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:s=>x(s,a),children:[t.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),t.jsx("optgroup",{label:d("List Fields","bit-integrations"),children:e==null?void 0:e.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),t.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),t.jsx("optgroup",{label:`${d("General Smart Codes","bit-integrations")} ${g?"":`(${d("Pro","bit-integrations")})`}`,children:g&&((h=q)==null?void 0:h.map(s=>t.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),i.formField==="custom"&&t.jsx(O,{onChange:s=>$(s,a),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:d("Custom Value","bit-integrations")}),t.jsxs("select",{className:"btcd-paper-inp",name:"benchMarkField",value:i.benchMarkField,onChange:s=>x(s,a),disabled:n,children:[t.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),n?((F=l==null?void 0:l.default)==null?void 0:F.fields)&&Object.values(l.default.fields).map(s=>t.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`)):u&&u.map(s=>t.jsx("option",{value:s.fieldValue,children:s.fieldName},`${s.fieldValue}`))]})]}),!n&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>r(a),className:"icn-btn sh-sm ml-2",type:"button",children:"+"}),t.jsx("button",{onClick:()=>o(a),className:"icn-btn sh-sm ml-2",type:"button","aria-label":"btn",children:t.jsx(H,{})})]})]})}function W({formFields:a,benchMarkConf:e,setBenchMarkConf:i,isLoading:l,setIsLoading:m,setSnackbar:n}){var b,g;const u=r=>{const o=r.target.value,x=p({},e);o?x.listId=o:delete x.listId,y(x,i,m,n)};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:d("List:","bit-integrations")}),t.jsxs("select",{value:e==null?void 0:e.listId,name:"listId",id:"",className:"btcd-paper-inp w-5",onChange:u,children:[t.jsx("option",{value:"",children:d("Select List","bit-integrations")}),((b=e==null?void 0:e.default)==null?void 0:b.benchMarkLists)&&Object.keys(e.default.benchMarkLists).map(r=>t.jsx("option",{value:e.default.benchMarkLists[r].listId,children:e.default.benchMarkLists[r].listName},`${r+1}`))]}),t.jsx("button",{onClick:()=>P(e,i,m,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh BenchMark list"'},type:"button",disabled:l,children:"↻"}),t.jsx("br",{}),t.jsx("br",{}),l&&t.jsx(B,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,translist:"scale(0.7)"}}),t.jsxs("div",{className:"mt-4",children:[t.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")}),t.jsx("button",{onClick:()=>y(e,i,m,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh BenchMark Field","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),((e==null?void 0:e.listId)||((g=e==null?void 0:e.default)==null?void 0:g.fields))&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:d("List Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:d("BenchMark Fields","bit-integrations")})})]}),e.field_map.map((r,o)=>t.jsx(E,{i:o,field:r,benchMarkConf:e,formFields:a,setBenchMarkConf:i},`BenchMark-m-${o+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>S(e.field_map.length,e,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:d("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(A,{benchMarkConf:e,setBenchMarkConf:i})]})]})}export{W as B};
