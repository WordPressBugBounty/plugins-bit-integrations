var V=Object.defineProperty;var P=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var k=(t,i,e)=>i in t?V(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,N=(t,i)=>{for(var e in i||(i={}))R.call(i,e)&&k(t,e,i[e]);if(P)for(var e of P(i))q.call(i,e)&&k(t,e,i[e]);return t};import{r as w,j as s,L as M,f as $}from"./main-955.js";import{_ as a,e as B}from"./bi.223.0.js";import{u as I,y as F,ad as E}from"./bi.326.431.js";import{a as H}from"./bi.696.9.js";import{b as O}from"./bi.300.11.js";import{f as T,a as f,b as z}from"./bi.846.727.js";import{a as G}from"./bi.864.3.js";import{T as U}from"./bi.991.663.js";import{P as D}from"./bi.586.660.js";function J({trelloConf:t,setTrelloConf:i,formFields:e}){var d;const[l,r]=w.useState(!1),[c,o]=w.useState({show:!1,action:()=>{}}),p=(m,b)=>{var g;const h=N({},t);b==="tag"&&((g=m.target)!=null&&g.checked?(h.actions.tag=!0,o({show:"tag"})):(o({show:!1}),delete h.actions.tag)),i(N({},h))},u=()=>{o({show:!1})},x=m=>{const b=N({},t);b.pos=m,i(b)},j=[{label:"Top",value:"top"},{label:"Bottom",value:"bottom"}];return s.jsxs("div",{className:"pos-rel d-flx w-8",children:[s.jsx(O,{checked:((d=t==null?void 0:t.actions)==null?void 0:d.tag)||!1,onChange:m=>p(m,"tag"),className:"wdt-200 mt-4 mr-2",value:"tag",title:a("Add Position","bit-integrations"),subTitle:a("Add Card Position","bit-integrations")}),s.jsxs(H,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:a("Ok","bit-integrations"),show:c.show==="tag",close:u,action:u,title:a("Position","bit-integrations"),children:[s.jsx("div",{className:"btcd-hr mt-2 mb-2"}),s.jsx("div",{className:"mt-2",children:a("Select Card Position","bit-integrations")}),l?s.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):s.jsx("div",{className:"flx flx-between mt-2",children:s.jsx(I,{options:j,className:"msl-wrp-options",singleSelect:!0,defaultValue:t.pos,onChange:m=>x(m)})})]})]})}const A=(t,i,e,l)=>{e(r=>F(r,c=>{var u;const o=t.target.name,p=t.target.value;if(c[l][i][o]=p,p==="custom"&&(c[l][i].customValue=""),o==="trelloFormField"&&l==="custom_field_map"){const x=((u=c.customFields)==null?void 0:u.filter(j=>j.key===p)[0])||{};c[l][i].type=x==null?void 0:x.type,c[l][i].options=x==null?void 0:x.options}}))},L=(t,i,e,l)=>{e(r=>F(r,c=>{c[l][i].customValue=t}))};function Q({i:t,fieldKey:i,mapKey:e,formFields:l,field:r,trelloConf:c,setTrelloConf:o,addFieldMap:p,delFieldMap:u}){var b,h,g,y,_;const x=$(B),{isPro:j}=x,d=((b=c[i])==null?void 0:b.filter(n=>n.required===!0))||[],m=((h=c[i])==null?void 0:h.filter(n=>n.required===!1))||[];return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:n=>A(n,t,o,e),children:[s.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),s.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:l==null?void 0:l.map(n=>s.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`))}),s.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(a("General Smart Codes %s","bit-integrations"),j?"":`(${a("Pro","bit-integrations")})`),children:j&&((g=G)==null?void 0:g.map(n=>s.jsx("option",{value:n.name,children:n.label},`ff-rm-${n.name}`)))})]}),r.formField==="custom"&&s.jsx(U,{onChange:n=>L(n,t,o,e),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:r.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:l}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<d.length,name:"trelloFormField",value:t<d.length?d[t].key||"":r.trelloFormField||"",onChange:n=>A(n,t,o,e),children:[s.jsx("option",{value:"",children:a("Select  Field","bit-integrations")}),t<d.length?s.jsx("option",{value:d[t].key,children:d[t].label},d[t].key):m.map(({key:n,label:v})=>s.jsx("option",{value:n,children:v},n))]})]}),((_=(y=c[e][t])==null?void 0:y.options)==null?void 0:_.length)>0&&s.jsx("div",{children:s.jsx(E,{width:250,icnSize:17,className:"ml-2",children:s.jsxs("div",{className:"txt-body",children:[s.jsx("p",{children:a("Custom field options","bit-integrations")}),c[e][t].options.map(n=>{var v;return s.jsx("li",{children:(v=n==null?void 0:n.value)==null?void 0:v.text},n.id)})]})})}),t>=d.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>p(o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>u(t,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function S({mapKey:t,formFields:i,handleInput:e,trelloConf:l,setTrelloConf:r,isLoading:c,setIsLoading:o,setSnackbar:p}){var j;const u=d=>{d(m=>F(m,b=>{b[t]||(b[t]=[]),b[t].splice(b[t].length,0,{})}))},x=(d,m)=>{m(b=>F(b,h=>{h[t].length>1&&h[t].splice(d,1)}))};return s.jsxs(s.Fragment,{children:[c&&s.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsxs("div",{className:"mt-5",children:[s.jsx("b",{className:"wdt-100",children:t==="field_map"?a("Field Map","bit-integrations"):a("Custom Field Map","bit-integrations")}),t!=="field_map"&&s.jsx("button",{onClick:()=>T(l,r,o,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Custom Fields","bit-integrations")}'`},type:"button",disabled:c,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:a("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:a("Trello Fields","bit-integrations")})})]}),(l==null?void 0:l.listId)&&((j=l[t])==null?void 0:j.map((d,m)=>s.jsx(Q,{i:m,fieldKey:t==="field_map"?"cardFields":"customFields",mapKey:t,field:d,trelloConf:l,formFields:i,setTrelloConf:r,setSnackbar:p,addFieldMap:u,delFieldMap:x},`rp-m-${m+9}`))),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>u(r),className:"icn-btn sh-sm",type:"button",children:"+"})}),s.jsx("br",{}),s.jsx("br",{})]})}function as({formFields:t,handleInput:i,trelloConf:e,setTrelloConf:l,isLoading:r,setIsLoading:c,setSnackbar:o}){var d,m,b;const[p,u]=w.useState(!1),x=$(B),{isPro:j}=x;return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:a("Boards:","bit-integrations")}),s.jsxs("select",{onChange:i,name:"boardId",value:e.boardId,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:a("Select Board","bit-integrations")}),((d=e==null?void 0:e.default)==null?void 0:d.allBoardlist)&&e.default.allBoardlist.map(({boardId:h,boardName:g})=>s.jsx("option",{value:h,children:g},h))]}),s.jsx("button",{onClick:()=>f(e,l,c,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch All Recipients","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),s.jsx("br",{}),((m=e==null?void 0:e.default)==null?void 0:m.alllists)&&s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:a("Lists:","bit-integrations")}),s.jsxs("select",{onChange:i,name:"listId",value:e.listId,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:a("Select List","bit-integrations")}),((b=e==null?void 0:e.default)==null?void 0:b.alllists)&&e.default.alllists.map(({listId:h,listName:g})=>s.jsx("option",{value:h,children:g},h))]}),s.jsx("button",{onClick:()=>z(e,l,c,o),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Fetch All Recipients","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),s.jsx("br",{})]}),s.jsx("br",{}),r&&s.jsx(M,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.jsx(S,{mapKey:"field_map",formFields:t,handleInput:i,trelloConf:e,setTrelloConf:l,isLoading:r,setIsLoading:c,setSnackbar:o}),s.jsxs("div",{className:"pos-rel",children:[!j&&s.jsx("div",{className:"pro-blur flx p-3",children:s.jsx("div",{className:"pro",children:s.jsxs("button",{className:"btn p-0 m-0",type:"button",onClick:()=>u(!0),style:{color:"#344054",background:"transparent"},children:[a("Custom Fields","bit-integrations")," ",a("Available On","bit-integrations")," ",s.jsxs("span",{className:"txt-pro",children:[" (",a("Pro","bit-integrations"),")"]})]})})}),s.jsx(S,{mapKey:"custom_field_map",formFields:t,handleInput:i,trelloConf:e,setTrelloConf:l,isLoading:r,setIsLoading:c,setSnackbar:o})]}),s.jsx(D,{show:p,setShow:u,sub:a("Custom Fields","bit-integrations")}),s.jsx("br",{}),s.jsx("div",{className:"mt-4",children:s.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsx(J,{trelloConf:e,setTrelloConf:l,formFields:t})]})}export{as as T};
