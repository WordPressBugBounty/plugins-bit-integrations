var L=Object.defineProperty;var N=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var F=(t,c,m)=>c in t?L(t,c,{enumerable:!0,configurable:!0,writable:!0,value:m}):t[c]=m,b=(t,c)=>{for(var m in c||(c={}))R.call(c,m)&&F(t,m,c[m]);if(N)for(var m of N(c))q.call(c,m)&&F(t,m,c[m]);return t};import{r as I,j as e,f as V,L as k}from"./main-955.js";import{u as O,x as M}from"./bi.326.431.js";import{_ as i,e as $}from"./bi.223.0.js";import{a as T,b as S,d as E}from"./bi.795.687.js";import{a as A}from"./bi.696.9.js";import{b as _}from"./bi.300.11.js";import{g as P,a as B,b as G,c as H}from"./bi.857.772.js";import{a as D,h as J}from"./bi.864.3.js";import{T as K}from"./bi.991.663.js";function Q({selzyConf:t,setSelzyConf:c}){var h,j;const[m,a]=I.useState({show:!1}),n=(l,o)=>{var d,p;const s=b({},t);o==="option"&&((d=l.target)!=null&&d.checked?(s.actions.option=!0,a({show:"option"})):(a({show:!1}),delete s.actions.option)),o==="overwrite"&&((p=l.target)!=null&&p.checked?(s.actions.overwrite=!0,a({show:"overwrite"})):(a({show:!1}),delete s.actions.overwrite)),c(b({},s))},u=()=>{a({show:!1})},x=l=>{const o=b({},t),{name:s,value:d}=l.target;d!==""&&(o[s]=d),c(o)};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:[e.jsx(_,{checked:((h=t==null?void 0:t.actions)==null?void 0:h.option)||!1,onChange:l=>n(l,"option"),className:"wdt-200 mt-4 mr-2",value:"option ",title:i("Add Option"),subTitle:i("Customize you subcription")}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok"),show:m.show==="option",close:u,action:u,title:i("Subscribe Option"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"p-1",children:[e.jsx("div",{className:"my-2 w-100 ",children:i("Customize your subscription")}),e.jsxs("select",{name:"option",value:t.option,onChange:x,className:"btcd-paper-inp w-100 mx-0",children:[e.jsx("option",{value:"",children:i("Select Option")}),(t==null?void 0:t.doubleOption)&&(t==null?void 0:t.doubleOption.map(l=>e.jsx("option",{value:l.key,children:l.name},l.key)))]})]})]})]}),e.jsxs("div",{children:[e.jsx(_,{checked:((j=t==null?void 0:t.actions)==null?void 0:j.overwrite)||!1,onChange:l=>n(l,"overwrite"),className:"wdt-200 mt-4 mr-2",value:"overwrite",title:i("Overwrite"),subTitle:i("Field and tag rewriting mode")}),e.jsxs(A,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok"),show:m.show==="overwrite",close:u,action:u,title:i("Subscribe overwrite"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("div",{className:"p-1",children:[e.jsx("div",{className:"my-2 w-100 ",children:i("Field and tag rewriting mode")}),e.jsxs("select",{name:"overwrite",value:t.overwrite,onChange:x,className:"btcd-paper-inp w-100 mx-0",children:[e.jsx("option",{value:"",children:i("Select Option")}),(t==null?void 0:t.overwriteOption)&&(t==null?void 0:t.overwriteOption.map(l=>e.jsx("option",{value:l.key,children:l.name},l.key)))]})]})]})]})]})}function U({i:t,field:c,formFields:m,selzyConf:a,setSelzyConf:n}){var s,d,p,v,w;const u=V($),{isPro:x}=u;if(((s=a==null?void 0:a.field_map)==null?void 0:s.length)===1&&c.selzyFormField===""){const r=b({},a),g=P(r);r.field_map=g,n(r)}const h=(a==null?void 0:a.selzyFields.filter(r=>r.required===!0))||[],j=a.method==="1"?((d=a==null?void 0:a.selzyFields)==null?void 0:d.filter(r=>r.required===!1))||[]:[],l=a.method==="1"?((v=(p=a==null?void 0:a.default)==null?void 0:p.customFields)==null?void 0:v.filter(r=>r.required===!1))||[]:[],o=a.method==="1"?[...j,...l]:[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",onChange:r=>{T(r,t,a,n)},value:c.formField||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:m==null?void 0:m.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...")}),e.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),x?"":`(${i("Pro","bit-integrations")})`),children:x&&((w=D)==null?void 0:w.map(r=>e.jsx("option",{value:r.name,children:r.label},`ff-rm-${r.name}`)))})]}),c.formField==="custom"&&e.jsx(K,{onChange:r=>J(r,t,a,n),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:c.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:m}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<h.length,name:"selzyFormField",onChange:r=>{T(r,t,a,n)},value:t<h.length?h[t].key||"":c.selzyFormField||"",children:[e.jsx("option",{value:"",children:i("Select Field")}),t<h.length?e.jsx("option",{value:h[t].key,children:h[t].label},h[t].key):o.map(({key:r,label:g})=>e.jsx("option",{value:r,children:g},r))]})]}),(a==null?void 0:a.method)==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>S(t,a,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>E(t,a,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function at({selzyConf:t,setSelzyConf:c,formFields:m,loading:a,setLoading:n}){var l,o;const[u,x]=I.useState([{key:"1",label:i("Subscribe","bit-integrations")},{key:"2",label:i("unsubscribe","bit-integrations")}]),h=(s,d)=>{const p=b({},t);switch(d){case"listIds":p[d]=s;break;case"tags":p[d]=s;break}c(p)},j=s=>{const d=b({},t),{name:p,value:v}=s.target;switch(v!==""&&(d[p]=v),v){case"":delete d[p],d.listIds="",d.tags="";break;case"2":d.tags="",d.field_map=[{formField:"",selzyFormField:""}];break}c(b({},d))};return e.jsxs("div",{className:"mt-2",children:[a.page===!1&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b ",children:i("Actions:")}),e.jsxs("select",{onChange:j,name:"method",value:t==null?void 0:t.method,className:"btcd-paper-inp w-5 mx-0",children:[e.jsx("option",{value:"",children:i("Select Actions")}),u&&u.map(({key:s,label:d})=>e.jsx("option",{value:s,children:d},s))]})]}),t.method&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-2",children:[e.jsx("b",{className:"wdt-200 d-in-b mx-0",children:i("List:")}),e.jsx(O,{className:"w-5",defaultValue:t==null?void 0:t.listIds,options:((l=t==null?void 0:t.default)==null?void 0:l.lists)&&(t==null?void 0:t.default.lists.map(s=>({label:s.title,value:s.id}))),onChange:s=>h(s,"listIds"),multiSelect:!0,closeOnSelect:!1}),e.jsx("button",{onClick:()=>B(t,c,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh list"'},type:"button",disabled:a.list,children:"↻"}),a.list&&e.jsx(M,{size:"20",clr:"#022217",className:"ml-2"})]}),t.method==="1"&&e.jsxs("div",{className:"flx mt-2",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Tags:")}),e.jsx(O,{className:"w-5",defaultValue:t==null?void 0:t.tags,options:((o=t==null?void 0:t.default)==null?void 0:o.tags)&&(t==null?void 0:t.default.tags.map(s=>({label:s.name,value:s.name}))),onChange:s=>h(s,"tags"),multiSelect:!0,closeOnSelect:!1}),e.jsx("button",{onClick:()=>G(t,c,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Tag"'},type:"button",disabled:a.tag,children:"↻"}),a.tag&&e.jsx(M,{size:"20",clr:"#022217",className:"ml-2"})]})]}),a.customFields&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),(t==null?void 0:t.listIds)&&t.method&&e.jsxs("div",{className:"mt-5",children:[e.jsxs("b",{className:"wdt-100",children:[i("Field Map"),t.method==="1"&&e.jsx("button",{onClick:()=>H(t,c,a,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:a.customFields,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-2 mb-4"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Selzy Fields")})})]}),t==null?void 0:t.field_map.map((s,d)=>e.jsx(U,{i:d,field:s,formFields:m,selzyConf:t,setSelzyConf:c},`ko-m-${d+8}`)),(t==null?void 0:t.method)==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>S(t.field_map.length,t,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Actions")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Q,{selzyConf:t,setSelzyConf:c})]})]}),a.page&&e.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}export{at as S};
