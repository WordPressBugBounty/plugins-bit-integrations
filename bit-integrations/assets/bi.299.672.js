var M=Object.defineProperty;var N=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var _=(t,r,s)=>r in t?M(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s,d=(t,r)=>{for(var s in r||(r={}))T.call(r,s)&&_(t,s,r[s]);if(N)for(var s of N(r))V.call(r,s)&&_(t,s,r[s]);return t};import{f as k,j as e,r as j,L as y}from"./main-34.js";import{x as F}from"./bi.188.437.js";import{e as A,_ as i}from"./bi.671.0.js";import{a as E,h as $}from"./bi.633.3.js";import{g as f}from"./bi.794.671.js";import{T as L}from"./bi.623.673.js";import{a as R}from"./bi.914.9.js";import{b as I}from"./bi.22.11.js";const q=(t,r,s)=>{const l=d({},r);l.field_map.splice(t,0,{}),s(d({},l))},P=(t,r,s)=>{const l=d({},r);l.field_map.length>1&&l.field_map.splice(t,1),s(d({},l))},w=(t,r,s,l)=>{const u=d({},s);u.field_map[r][t.target.name]=t.target.value,t.target.value==="custom"&&(u.field_map[r].customValue=""),l(d({},u))};function U({i:t,formFields:r,field:s,omniSendConf:l,setOmniSendConf:u}){var x,c;if(((x=l==null?void 0:l.field_map)==null?void 0:x.length)===1&&s.omniSendFormField===""){const a=d({},l),n=f(a);a.field_map=n}const b=(l==null?void 0:l.omniSend_fields.filter(a=>a.required===!0))||[],o=(l==null?void 0:l.omniSend_fields.filter(a=>a.required===!1))||[],p=k(A),{isPro:m}=p;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:s.formField||"",onChange:a=>w(a,t,l,u),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:r==null?void 0:r.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),m?"":`(${i("Pro","bit-integrations")})`),children:m&&((c=E)==null?void 0:c.map(a=>e.jsx("option",{value:a.name,children:a.label},`ff-rm-${a.name}`)))})]}),s.formField==="custom"&&e.jsx(L,{onChange:a=>$(a,t,l,u),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:s.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:r}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<b.length,name:"omniSendFormField",value:t<b?b[t].label||"":s.omniSendFormField||"",onChange:a=>w(a,t,l,u),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t<b.length?e.jsx("option",{value:b[t].key,children:b[t].label},b[t].key):o.map(({key:a,label:n})=>e.jsx("option",{value:a,children:n},a))]})]}),t>=b.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>q(t,l,u),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>P(t,l,u),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function B({omniSendConf:t,setOmniSendConf:r,formFields:s,loading:l,setLoading:u}){const[b,o]=j.useState({show:!1,action:()=>{}}),p=(c,a)=>{const n=d({},t);a==="tag"&&(c.target.checked?n.actions.tag=!0:delete n.actions.tag,o({show:a})),r(d({},n))},m=()=>{o({show:!1})},x=(c,a)=>{const n=d({},t);a==="selected_tags"&&c.length?n.actions.selected_tags=!0:a==="selected_tags"&&c.length<1&&delete n.actions.selected_tags,n[a]=c,r(d({},n))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"pos-rel d-flx w-8",children:e.jsx(I,{checked:(t==null?void 0:t.actions.tag)||!1,onChange:c=>p(c,"tag"),className:"wdt-200 mt-4 mr-2",value:"tags",title:i("Tags","bit-integrations"),subTitle:i("Add Custom Tags","bit-integrations")})}),e.jsxs(R,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:b.show==="tag",close:m,action:m,title:i("Add Custom Tags","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(F,{className:"msl-wrp-options",defaultValue:t==null?void 0:t.selected_tags,options:[],onChange:c=>x(c,"selected_tags"),customValue:!0})})]})]})}function Y({formFields:t,handleInput:r,omniSendConf:s,setOmniSendConf:l,loading:u,setLoading:b,setSnackbar:o}){const p=j.useRef(!0),m=[{label:i("Email","bit-integrations"),value:"email"},{label:i("SMS","bit-integrations"),value:"sms"}],x=(c,a)=>{const n=c.search("email"),v=c.search("sms"),g=d({},s),h=g.omniSend_fields;c.length?(g.actions.channel=!0,n!==-1&&v!==-1?(h[0].required=!0,h[1].required=!0):n!==-1?(h[0].required=!0,h[1].required=!1):v!==-1?(h[1].required=!0,h[0].required=!1):(h[0].required=!1,h[1].required=!1)):(delete g.actions.channel,h[0].required=!1,h[1].required=!1),g[a]=c,l(d({},g))};return j.useEffect(()=>{if(p.current)p.current=!1;else{const c=d({},s),a=f(c);c.field_map=a,l(c)}},[s.channels]),e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Channels","bit-integrations")}),e.jsx(F,{className:"msl-wrp-options  w-5",defaultValue:s==null?void 0:s.channels,options:m==null?void 0:m.map(c=>({label:c.label,value:c.value})),onChange:c=>x(c,"channels"),customValue:!0})]}),e.jsx("br",{}),s.channels.search("email")!==-1&&e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Email Status:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"email_status",value:s.email_status,className:"btcd-paper-inp w-5",required:!0,children:[e.jsx("option",{value:"",children:i("Select Status","bit-integrations")}),e.jsx("option",{value:"subscribed",children:i("Subscribed","bit-integrations")}),e.jsx("option",{value:"unsubscribed",children:i("Unsubscribed","bit-integrations")}),e.jsx("option",{value:"nonSubscribed",children:i("nonSubscribed","bit-integrations")})]})]}),e.jsx("br",{}),s.channels.search("sms")!==-1&&e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("SMS Status:","bit-integrations")}),e.jsxs("select",{onChange:r,name:"sms_status",value:s.sms_status,className:"btcd-paper-inp w-5",required:!0,children:[e.jsx("option",{value:"",children:i("Select Status","bit-integrations")}),e.jsx("option",{value:"subscribed",children:i("Subscribed","bit-integrations")}),e.jsx("option",{value:"unsubscribed",children:i("Unsubscribed","bit-integrations")}),e.jsx("option",{value:"nonSubscribed",children:i("nonSubscribed","bit-integrations")})]})]}),(s.channels.search("email")!==-1||s.channels.search("sms")!==-1)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")})}),e.jsx("br",{}),u.field&&e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("OmniSend Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((c,a)=>e.jsx(U,{i:a,field:c,omniSendConf:s,formFields:t,setOmniSendConf:l,setSnackbar:o},`rp-m-${a+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>q(s.field_map.length,s,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Actions","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(B,{omniSendConf:s,setOmniSendConf:l,formFields:t,loading:u,setLoading:b})]})]})}export{Y as O};
