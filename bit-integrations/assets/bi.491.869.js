var z=Object.defineProperty;var R=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var V=(e,l,d)=>l in e?z(e,l,{enumerable:!0,configurable:!0,writable:!0,value:d}):e[l]=d,h=(e,l)=>{for(var d in l||(l={}))P.call(l,d)&&V(e,d,l[d]);if(R)for(var d of R(l))B.call(l,d)&&V(e,d,l[d]);return e};import{r as G,j as t,f as H,L as U}from"./main-955.js";import{u as N}from"./bi.326.431.js";import{_ as s,e as D}from"./bi.223.0.js";import{a as v}from"./bi.696.9.js";import{b as S}from"./bi.300.11.js";import{g as J,a as K}from"./bi.249.868.js";import{M as Q,a as W}from"./bi.864.3.js";const I=(e,l,d)=>{const i=h({},l);i.field_map.splice(e,0,{}),d(h({},i))},X=(e,l,d)=>{const i=h({},l);i.field_map.length>1&&i.field_map.splice(e,1),d(h({},i))},$=(e,l,d,i)=>{const o=h({},d);o.field_map[l][e.target.name]=e.target.value,e.target.value==="custom"&&(o.field_map[l].customValue=""),i(h({},o))},Y=(e,l,d,i,o)=>{const r=h({},d);r.field_map[l][o]=e.target.value,i(h({},r))};function Z({nimbleConf:e,setNimbleConf:l,loading:d,setLoading:i}){var x,m,c,y,w,T,k,F,L,A;const[o,r]=G.useState({show:!1,action:()=>{}}),n=(a,j)=>{var b,M,_,E,O;const u=h({},e);j==="xofEmployees"?(b=a.target)!=null&&b.checked?u.actions.xofEmployees=!0:(r({show:!1}),delete u.actions.xofEmployees):j==="rating"?(M=a.target)!=null&&M.checked?u.actions.rating=!0:(r({show:!1}),delete u.actions.rating):j==="leadStatus"?(_=a.target)!=null&&_.checked?u.actions.leadStatus=!0:(r({show:!1}),delete u.actions.leadStatus):j==="leadSource"?(E=a.target)!=null&&E.checked?u.actions.leadSource=!0:(r({show:!1}),delete u.actions.leadSource):j==="leadType"&&((O=a.target)!=null&&O.checked?u.actions.leadType=!0:(r({show:!1}),delete u.actions.leadType)),r({show:j}),l(h({},u))},p=()=>{r({show:!1})},g=(a,j)=>{const u=h({},e);u[j]=a,l(h({},u))};return t.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[e.actionName==="company"&&t.jsx(S,{checked:((x=e==null?void 0:e.selectedxofEmployees)==null?void 0:x.length)||!1,onChange:a=>n(a,"xofEmployees"),className:"wdt-200 mt-4 mr-2",value:"xofEmployees",title:s("Add Employee Size","bit - integrations"),subTitle:s("Add Employee Size")}),(e.actionName==="company"||e.actionName==="person")&&t.jsx(S,{checked:((m=e==null?void 0:e.selectedRating)==null?void 0:m.length)||!1,onChange:a=>n(a,"rating"),className:"wdt-200 mt-4 mr-2",value:"rating",title:s("Add Ratings","bit - integrations"),subTitle:s("Add Ratings")}),(e.actionName==="company"||e.actionName==="person")&&t.jsx(S,{checked:((c=e==null?void 0:e.selectedLeadStatus)==null?void 0:c.length)||!1,onChange:a=>n(a,"leadStatus"),className:"wdt-200 mt-4 mr-2",value:"leadStatus",title:s("Add Lead Status","bit - integrations"),subTitle:s("Add Lead Status")}),(e.actionName==="company"||e.actionName==="person")&&t.jsx(S,{checked:((y=e==null?void 0:e.selectedLeadSource)==null?void 0:y.length)||!1,onChange:a=>n(a,"leadSource"),className:"wdt-200 mt-4 mr-2",value:"leadSource",title:s("Add Lead Source","bit - integrations"),subTitle:s("Add Lead Source")}),(e.actionName==="company"||e.actionName==="person")&&t.jsx(S,{checked:((w=e==null?void 0:e.selectedLeadType)==null?void 0:w.length)||!1,onChange:a=>n(a,"leadType"),className:"wdt-200 mt-4 mr-2",value:"leadType",title:s("Add Lead Type","bit - integrations"),subTitle:s("Add Lead Type")}),t.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="xofEmployees",close:p,action:p,title:s("Add Employee Size","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Employee Size","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(N,{options:(T=e==null?void 0:e.xofEmployees)==null?void 0:T.map(a=>({label:a,value:`${a}`})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedxofEmployees,onChange:a=>g(a,"selectedxofEmployees"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="rating",close:p,action:p,title:s("Add Rating","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Rating","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(N,{options:(k=e==null?void 0:e.ratings)==null?void 0:k.map(a=>({label:a,value:`${a}`})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedRating,onChange:a=>g(a,"selectedRating"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="leadStatus",close:p,action:p,title:s("Add Lead Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Lead Status","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(N,{options:(F=e==null?void 0:e.leadStatus)==null?void 0:F.map(a=>({label:a,value:a})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLeadStatus,onChange:a=>g(a,"selectedLeadStatus"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="leadSource",close:p,action:p,title:s("Add Lead Source","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Lead Source","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(N,{options:(L=e==null?void 0:e.leadSource)==null?void 0:L.map(a=>({label:a,value:a})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLeadSource,onChange:a=>g(a,"selectedLeadSource"),singleSelect:!0,closeOnSelect:!0})})]}),t.jsxs(v,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="leadType",close:p,action:p,title:s("Add Lead Type","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:s("Select Lead Type","bit-integrations")}),t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(N,{options:(A=e==null?void 0:e.leadTypes)==null?void 0:A.map(a=>({label:a,value:a})),className:"msl-wrp-options",defaultValue:e==null?void 0:e.selectedLeadType,onChange:a=>g(a,"selectedLeadType"),singleSelect:!0,closeOnSelect:!0})})]})]})}function q({field:e,index:l,conf:d,setConf:i,fieldValue:o,fieldLabel:r,className:n}){return t.jsx(Q,{onChange:p=>Y(p,l,d,i,o),label:s(r,"bit-integrations"),className:n,type:"text",value:e[o],placeholder:s(r,"bit-integrations")})}function f({i:e,formFields:l,field:d,nimbleConf:i,setNimbleConf:o}){var m;let r;switch(i.actionName){case"person":r=i==null?void 0:i.peopleFields;break;case"company":r=i==null?void 0:i.companyFields;break;default:r=[];break}const n=r&&(r==null?void 0:r.filter(c=>c.required===!0))||[],p=r&&(r==null?void 0:r.filter(c=>c.required===!1))||[],g=H(D),{isPro:x}=g;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:d.formField||"",onChange:c=>$(c,e,i,o),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),t.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:l==null?void 0:l.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),t.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(s("General Smart Codes %s","bit-integrations"),x?"":`(${s("Pro","bit-integrations")})`),children:x&&((m=W)==null?void 0:m.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),d.formField==="custom"&&t.jsx(q,{field:d,index:e,conf:i,setConf:o,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),t.jsxs("select",{className:"btcd-paper-inp",disabled:e<(n==null?void 0:n.length),name:"nimbleFormField",value:e<n.length?n[e].key||"":d.nimbleFormField||"",onChange:c=>$(c,e,i,o),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),e<(n==null?void 0:n.length)?t.jsx("option",{value:n[e].key,children:n[e].label},n[e].key):p==null?void 0:p.map(({key:c,label:y})=>t.jsx("option",{value:c,children:y},c))]})]}),e>=(n==null?void 0:n.length)&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>I(e,i,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>X(e,i,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function ie({formFields:e,nimbleConf:l,setNimbleConf:d,loading:i,setLoading:o,isLoading:r,setIsLoading:n,setSnackbar:p}){const g=x=>{d(m=>{const c=h({},m);return x.target.value!==""?(c.actionName=x.target.value,c.field_map=K(x.target.value==="person"?c==null?void 0:c.peopleFields:c==null?void 0:c.companyFields)):(delete c.actionName,c.field_map=[{formField:"",nimbleFormField:""}]),c})};return t.jsxs(t.Fragment,{children:[!i.allFields&&t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:s("Select Action:","bit-integrations")}),t.jsxs("select",{onChange:g,name:"actionName",value:l.actionName,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:s("Select an action","bit-integrations")}),t.jsx("option",{value:"person","data-action_name":"account",children:s("Add people","bit-integrations")}),t.jsx("option",{value:"company","data-action_name":"project",children:s("Create Company","bit-integrations")})]})]}),(r||i.allFields)&&t.jsx(U,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),l.actionName&&!r&&!i.allFields&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsxs("div",{className:"mt-5",children:[t.jsx("b",{className:"wdt-100",children:s("Field Map","bit-integrations")}),t.jsx("button",{onClick:()=>J(l,d,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh fields","bit-integrations")}'`},type:"button",disabled:i.allFields,children:"↻"})]}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Nimble Fields","bit-integrations")})})]}),l==null?void 0:l.field_map.map((x,m)=>t.jsx(f,{i:m,field:x,nimbleConf:l,formFields:e,setNimbleConf:d,setSnackbar:p},`rp-m-${m+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>I(l.field_map.length,l,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(Z,{nimbleConf:l,setNimbleConf:d,loading:i,setLoading:o})]})]})}export{ie as N};
