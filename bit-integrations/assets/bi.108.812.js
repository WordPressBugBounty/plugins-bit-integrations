var A=Object.defineProperty;var v=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var N=(s,r,n)=>r in s?A(s,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[r]=n,l=(s,r)=>{for(var n in r||(r={}))I.call(r,n)&&N(s,n,r[n]);if(v)for(var n of v(r))G.call(r,n)&&N(s,n,r[n]);return s};import{r as j,j as t,L as _,f as $}from"./main-777.js";import{_ as c,e as q}from"./bi.157.0.js";import{x as M,a8 as f}from"./bi.463.440.js";import{a as T}from"./bi.681.9.js";import{b as F}from"./bi.677.11.js";import{g as w,a as P,m as V}from"./bi.900.811.js";import{a as O,h as E}from"./bi.644.3.js";import{T as z}from"./bi.444.683.js";function B({mailRelayConf:s,setMailRelayConf:r,loading:n,setLoading:i}){var x,u;const[o,d]=j.useState({show:!1,action:()=>{}}),b=(a,p)=>{var h;const e=l({},s);p==="group"&&((h=a.target)!=null&&h.checked?(w(s,r,i),e.actions.groups=!0):(d({show:!1}),delete e.actions.groups),d({show:"group"})),p==="update"&&(a.target.checked?e.actions.update=!0:delete e.actions.update),p==="doubleOptIn"&&(a.target.checked?e.actions.doubleOptIn=!0:delete e.actions.doubleOptIn),r(l({},e))},g=()=>{d({show:!1})},m=a=>{const p=l({},s);p.selectedGroups=a,r(l({},p))};return t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(F,{checked:(s==null?void 0:s.selectedGroups.length)||!1,onChange:a=>b(a,"group"),className:"wdt-200 mt-4 mr-2",value:"group",title:c("Add Groups","bit - integrations"),subTitle:c("Add Groups")}),t.jsx(F,{checked:((x=s.actions)==null?void 0:x.update)||!1,onChange:a=>b(a,"update"),className:"wdt-200 mt-4 mr-2",value:"update_subscriber",title:c("Update subscriber","bit-integrations"),subTitle:c("Override the existing subscriber info by responses.","bit-integrations")}),t.jsxs(T,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:c("Ok","bit-integrations"),show:o.show==="group",close:g,action:g,title:c("Groups","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),t.jsx("div",{className:"mt-2",children:c("Select groups","bit-integrations")}),n.groups?t.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(M,{options:(u=s==null?void 0:s.groups)==null?void 0:u.map(a=>({label:a.name,value:a.id})),className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedGroups,onChange:a=>m(a)}),t.jsx("button",{onClick:()=>w(s,r,i),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${c("Refresh Groups","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const k=(s,r,n)=>{const i=l({},r);i.field_map.splice(s,0,{}),n(l({},i))},U=(s,r,n)=>{const i=l({},r);i.field_map.length>1&&i.field_map.splice(s,1),n(l({},i))},S=(s,r,n,i)=>{const o=l({},n);o.field_map[r][s.target.name]=s.target.value,s.target.value==="custom"&&(o.field_map[r].customValue=""),i(l({},o))};function H({i:s,formFields:r,field:n,mailRelayConf:i,setMailRelayConf:o}){var a,p;const d=(i==null?void 0:i.staticFields.filter(e=>e.required===!0))||[],b=(i==null?void 0:i.customFields.filter(e=>e.required===!1))||[],m=[...(i==null?void 0:i.staticFields.filter(e=>e.required===!1))||[],...b];if(((a=i==null?void 0:i.field_map)==null?void 0:a.length)===1&&n.mailRelayFormField===""){const e=l({},i),h=P(e);e.field_map=h,o(e)}const x=$(q),{isPro:u}=x;return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:e=>S(e,s,i,o),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),t.jsx("optgroup",{label:c("Form Fields","bit-integrations"),children:r==null?void 0:r.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`))}),t.jsx("option",{value:"custom",children:c("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(c("General Smart Codes %s","bit-integrations"),u?"":`(${c("Pro","bit-integrations")})`),children:u&&((p=O)==null?void 0:p.map(e=>t.jsx("option",{value:e.name,children:e.label},`ff-rm-${e.name}`)))})]}),n.formField==="custom"&&t.jsx(z,{onChange:e=>E(e,s,i,o),label:c("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:c("Custom Value","bit-integrations"),formFields:r}),t.jsxs("select",{className:"btcd-paper-inp",disabled:s<d.length,name:"mailRelayFormField",value:s<d?d[s].label||"":n.mailRelayFormField||"",onChange:e=>S(e,s,i,o),children:[t.jsx("option",{value:"",children:c("Select Field","bit-integrations")}),s<d.length?t.jsx("option",{value:d[s].key,children:d[s].label},d[s].key):m.map(({key:e,label:h})=>t.jsx("option",{value:e,children:h},e))]})]}),s>=d.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>k(s,i,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>U(s,i,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function C({formFields:s,handleInput:r,mailRelayConf:n,setMailRelayConf:i,loading:o,setLoading:d,setSnackbar:b}){const[g,m]=j.useState({name:"",auth_token:""}),[x,u]=j.useState(!1),a=`<h4>${c("Phone numbers from the following countries will work only in the Mailrelay SMS Phone number field:","bit-integrations")}</h4>
              <div>
                ${c("<span>Ecuador</span>, <span>Peru</span>, <span>Argentina</span>, <span>Italy</span>, <span>Uruguay</span>, <span>Chile</span>, <span>Portugal</span>, <span>Brazil</span>, <span>Mexico</span>, <span>Colombia</span> & <span>Spain</span>","bit-integrations")}
              </div>
            `;return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:c("Subscriber Status:","bit-integrations")}),t.jsxs("select",{onChange:r,name:"status",value:n.status,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:c("Select subscriber status","bit-integrations")}),t.jsx("option",{value:"active",children:c("Active","bit-integrations")}),t.jsx("option",{value:"inactive",children:c("Inactive","bit-integrations")})]}),o.customFields&&t.jsx(_,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),n.status&&t.jsxs("div",{children:[t.jsx("br",{}),t.jsx("div",{className:"mt-5",children:t.jsxs("b",{className:"wdt-100",children:[c("Field Map","bit-integrations"),t.jsx("button",{onClick:()=>V(n,i,m,u,o,d,"refreshCustomFields"),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${c("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:o.customFields,children:"↻"})]})}),t.jsx("br",{}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:c("MailRelay Fields","bit-integrations")})})]}),n==null?void 0:n.field_map.map((p,e)=>t.jsx(H,{i:e,field:p,mailRelayConf:n,formFields:s,setMailRelayConf:i,setSnackbar:b},`rp-m-${e+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>k(n.field_map.length,n,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:c("Actions","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(B,{mailRelayConf:n,setMailRelayConf:i,formFields:s,loading:o,setLoading:d})]}),t.jsx(f,{note:a})]})}export{C as M};
