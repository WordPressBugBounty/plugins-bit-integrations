var k=Object.defineProperty;var v=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var y=(t,d,e)=>d in t?k(t,d,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[d]=e,h=(t,d)=>{for(var e in d||(d={}))_.call(d,e)&&y(t,e,d[e]);if(v)for(var e of v(d))T.call(d,e)&&y(t,e,d[e]);return t};import{r as A,f as V,j as s,L as $}from"./main-441.js";import{z as U,u as g}from"./bi.141.437.js";import{e as L,_ as r}from"./bi.452.0.js";import{b as R}from"./bi.866.11.js";import{a as q,h as E,b as I}from"./bi.73.3.js";import{g as P,a as H,b as z,m as B}from"./bi.181.849.js";import{T as G}from"./bi.768.673.js";const D=(t,d,e)=>{const l=h({},d);l.field_map.splice(t,0,{}),e(h({},l))},J=(t,d,e)=>{const l=h({},d);l.field_map.length>1&&l.field_map.splice(t,1),e(h({},l))},S=(t,d,e,l)=>{l(i=>U(i,p=>{p.field_map[d][t.target.name]=t.target.value,t.target.value==="custom"&&(p.field_map[d].customValue="")}))};function K({i:t,formFields:d,field:e,mailMintConf:l,setMailMintConf:i}){var o;A.useEffect(()=>{var c;((c=l==null?void 0:l.field_map)==null?void 0:c.length)===1&&e.mailMintFormField===""&&i(n=>(n.field_map=P(n),n))},[]);const p=(l==null?void 0:l.mailMintContactFields.filter(c=>c.required===!0))||[],j=(l==null?void 0:l.mailMintContactFields.filter(c=>c.required===!1))||[],m=V(L),{isPro:x}=m;return s.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:s.jsxs("div",{className:"pos-rel flx",children:[s.jsxs("div",{className:"flx integ-fld-wrp",children:[s.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:e.formField||"",onChange:c=>S(c,t,l,i),children:[s.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),s.jsx("optgroup",{label:r("Form Fields","bit-integrations"),children:d==null?void 0:d.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`))}),s.jsx("option",{value:"custom",children:r("Custom...","bit-integrations")}),s.jsx("optgroup",{label:sprintf(r("General Smart Codes %s","bit-integrations"),x?"":`(${r("Pro","bit-integrations")})`),children:x&&((o=q)==null?void 0:o.map(c=>s.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),e.formField==="custom"&&s.jsx(G,{onChange:c=>E(c,t,l,i),label:r("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:e.customValue,placeholder:r("Custom Value","bit-integrations"),formFields:d}),s.jsxs("select",{className:"btcd-paper-inp",disabled:t<p.length,name:"mailMintFormField",value:t<p.length?p[t].key||"":e.mailMintFormField||"",onChange:c=>S(c,t,l,i),children:[s.jsx("option",{value:"",children:r("Select Field","bit-integrations")}),t<p.length?s.jsx("option",{value:p[t].key,children:p[t].label},p[t].key):j.map(({key:c,label:n})=>s.jsx("option",{value:c,children:n},c))]})]}),t>=p.length&&s.jsxs(s.Fragment,{children:[s.jsx("button",{onClick:()=>D(t,l,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),s.jsx("button",{onClick:()=>J(t,l,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:s.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function M({formFields:t,handleInput:d,mailMintConf:e,setMailMintConf:l,isLoading:i,setIsLoading:p,setSnackbar:j,allIntegURL:m,isInfo:x,edit:o}){var N,F;const c=(a,b)=>{const u=h({},e);(b==="selectedList"||b==="selectedTags"||b==="selectedSubStatus")&&(a!==""?u[b]=a:delete u[b]),l(h({},u))},n=(a,b)=>{const u=h({},e);b==="selectedUpdate"&&(a.target.checked?u.update=!0:delete u.update),l(h({},u))},w=[{key:"pending",label:r("Pending","bit-integrations")},{key:"subscribed",label:r("Subscribed","bit-integrations")},{key:"unsubscribed",label:r("Unsubscribed","bit-integrations")}];return s.jsxs(s.Fragment,{children:[s.jsx("br",{}),s.jsx("b",{className:"wdt-200 d-in-b",children:r("Actions:","bit-integrations")}),s.jsxs("select",{onChange:d,name:"mainAction",value:e==null?void 0:e.mainAction,className:"btcd-paper-inp w-5",children:[s.jsx("option",{value:"",children:r("Select Actions","bit-integrations")}),(e==null?void 0:e.allActions)&&e.allActions.map(({key:a,label:b})=>s.jsx("option",{value:a,children:b},a))]}),s.jsx("br",{}),s.jsxs("div",{className:"flx mt-4",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Select List:","bit-integrations")}),s.jsx(g,{className:"w-5",defaultValue:e==null?void 0:e.selectedList,options:((N=e==null?void 0:e.default)==null?void 0:N.allLists)&&e.default.allLists.map(a=>({label:a.name,value:a.id.toString()})),onChange:a=>c(a,"selectedList")}),s.jsx("button",{onClick:()=>H(e,l,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All List","bit-integrations")}'`},type:"button",disabled:i,children:"↻"})]}),s.jsxs("div",{className:"flx mt-4",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Select tags:","bit-integrations")}),s.jsx(g,{className:"w-5",defaultValue:e==null?void 0:e.selectedTags,options:((F=e==null?void 0:e.default)==null?void 0:F.allTags)&&e.default.allTags.map(a=>({label:a.name,value:a.id.toString()})),onChange:a=>c(a,"selectedTags")}),s.jsx("button",{onClick:()=>z(e,l,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${r("Fetch All Tags","bit-integrations")}'`},type:"button",disabled:i,children:"↻"})]}),s.jsxs("div",{className:"flx mt-4",children:[s.jsx("b",{className:"wdt-200 d-in-b",children:r("Select subscription status:","bit-integrations")}),s.jsx(g,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.selectedSubStatus,options:w.map(a=>({label:a.label,value:a.key})),onChange:a=>c(a,"selectedSubStatus")})]}),s.jsx("br",{}),i&&s.jsx($,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(e==null?void 0:e.mainAction)&&(e==null?void 0:e.mailMintContactFields)&&!i&&s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"mt-4",children:[s.jsx("b",{className:"wdt-100",children:r("Map Fields","bit-integrations")}),s.jsx("button",{onClick:()=>B(e,l,p),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Fields"'},type:"button",disabled:i,children:"↻"})]}),s.jsx("div",{className:"btcd-hr mt-1"}),s.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Form Fields","bit-integrations")})}),s.jsx("div",{className:"txt-dp",children:s.jsx("b",{children:r("Mail Mint Fields","bit-integrations")})})]}),e.field_map.map((a,b)=>s.jsx(K,{i:b,field:a,mailMintConf:e,formFields:t,setMailMintConf:l},`dash-m-${b+9}`)),s.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:s.jsx("button",{onClick:()=>I(e.field_map.length,e,l),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),s.jsx("div",{className:"pos-rel d-flx w-8",children:s.jsx(R,{checked:e.update||!1,onChange:a=>n(a,"selectedUpdate"),className:"wdt-200 mt-4 mr-2",value:"selectedUpdate",title:r("Update Contact","bit-integrations"),subTitle:r("Update Contact if contact already exist?","bit-integrations")})}),s.jsx("br",{})]})}export{M};
