var M=Object.defineProperty;var h=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var q=(s,i,n)=>i in s?M(s,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[i]=n,F=(s,i)=>{for(var n in i||(i={}))S.call(i,n)&&q(s,n,i[n]);if(h)for(var n of h(i))V.call(i,n)&&q(s,n,i[n]);return s};import{j as e,i as z,L}from"./main-29.js";import{_ as d,T as R,m as A,j as U,k as P,l as B,n as E}from"./bi.860.15.js";import{h as $,d as G,a as I,b as O,c as H,e as Z}from"./bi.873.688.js";import{r as D,a as J,b as K,d as Q}from"./bi.323.686.js";import{T as W}from"./bi.831.661.js";function X({i:s,formFields:i,field:n,mailChimpConf:t,setMailChimpConf:l,addressField:o}){const j=n.required,b=o.filter(r=>!r.required);return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:r=>$(r,s,t,l),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),i.map(r=>r.type!=="file"&&e.jsx("option",{value:r.name,children:r.label},`ff-zhcrm-${r.name}`))]}),e.jsxs("select",{className:"btcd-paper-inp",name:"mailChimpAddressField",value:n.mailChimpAddressField||"",onChange:r=>$(r,s,t,l),disabled:j,children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),j?Object.values(o).map((r,a)=>e.jsx("option",{value:r.tag,children:r.name},`add-${a*2}`)):Object.values(b).map((r,a)=>e.jsx("option",{value:r.tag,children:r.name},`add-${a*2}`))]}),!j&&e.jsx("button",{onClick:()=>G(s,t,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(R,{})})]})}function Y({mailChimpConf:s,setMailChimpConf:i,formFields:n,address:t}){var o,j,b;const l=(r,a)=>{const x=F({},s);a==="update"&&(r.target.checked?x.actions.update=!0:delete x.actions.update),a==="double_opt_in"&&(r.target.checked?x.actions.double_opt_in=!0:delete x.actions.double_opt_in),a==="address"&&(r.target.checked?(x.actions.address=!0,x.address_field=t.filter(v=>v.required).map(v=>({formField:"",mailChimpAddressField:v.tag,required:!0}))):(delete x.actions.address,x.address_field="")),i(F({},x))};return e.jsxs("div",{className:"pos-rel d-flx w-8",children:[(!(s!=null&&s.module)||(s==null?void 0:s.module)==="add_a_member_to_an_audience")&&e.jsx(A,{checked:((o=s.actions)==null?void 0:o.address)||!1,onChange:r=>l(r,"address"),className:"wdt-200 mt-4 mr-2",value:"address",title:d("Add Address Field","bit-integrations"),subTitle:d("Add Address Field","bit-integrations")}),(!(s!=null&&s.module)||(s==null?void 0:s.module)==="add_a_member_to_an_audience")&&e.jsx(A,{checked:((j=s.actions)==null?void 0:j.double_opt_in)||!1,onChange:r=>l(r,"double_opt_in"),className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:d("Double Opt-in","bit-integrations"),subTitle:d("Add Double Opt-in","bit-integrations")}),(!(s!=null&&s.module)||(s==null?void 0:s.module)==="add_a_member_to_an_audience")&&e.jsx(A,{checked:((b=s.actions)==null?void 0:b.update)||!1,onChange:r=>l(r,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:d("Update Mail Chimp","bit-integrations"),subTitle:d("Update Responses with MailChimp exist Aduience?","bit-integrations")})]})}function m({i:s,formFields:i,field:n,mailChimpConf:t,setMailChimpConf:l}){var a,x,v,_,N;const o=z(U),{isPro:j}=o,b=((x=(a=t.default)==null?void 0:a.fields)==null?void 0:x[t.listId])&&Object.values(t.default.fields[t.listId]).filter(c=>c.required===!0)||[],r=((_=(v=t.default)==null?void 0:v.fields)==null?void 0:_[t.listId])&&Object.values(t.default.fields[t.listId]).filter(c=>c.required===!1)||[];return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:c=>I(c,s,t,l),children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),e.jsx("optgroup",{label:d("Form Fields","bit-integrations"),children:i.map(c=>c.type!=="file"&&e.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`))}),e.jsx("option",{value:"custom",children:d("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${d("General Smart Codes","bit-integrations")} ${j?"":`(${d("Pro","bit-integrations")})`}`,children:j&&((N=P)==null?void 0:N.map(c=>e.jsx("option",{value:c.name,children:c.label},`ff-rm-${c.name}`)))})]}),n.formField==="custom"&&e.jsx(W,{onChange:c=>B(c,s,t,l),label:d("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:d("Custom Value","bit-integrations"),formFields:i}),e.jsxs("select",{className:"btcd-paper-inp",name:"mailChimpField",value:n.mailChimpField||"",onChange:c=>I(c,s,t,l),disabled:s<b.length,children:[e.jsx("option",{value:"",children:d("Select Field","bit-integrations")}),s<b.length?e.jsx("option",{value:b[s].tag,children:b[s].name},`mchimp-${b[s].tag}`):r.map(({tag:c,name:y})=>e.jsx("option",{value:c,children:y},`mchimp-${c}`))]})]}),e.jsx("button",{onClick:()=>O(s,t,l),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>H(s,t,l),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(R,{})})]})}function re({formID:s,formFields:i,handleInput:n,mailChimpConf:t,setMailChimpConf:l,isLoading:o,setIsLoading:j,setSnackbar:b,a:r,loading:a,setLoading:x}){var N,c,y,p,T,w,k;const v=[{tag:"addr1",name:d("Address 1","bit-integrations"),required:!0},{tag:"addr2",name:d("Address 2","bit-integrations"),required:!1},{tag:"city",name:d("City","bit-integrations"),required:!0},{tag:"zip",name:d("Zip","bit-integrations"),required:!0},{tag:"state",name:d("State","bit-integrations"),required:!0},{tag:"country",name:d("Country","bit-integrations"),required:!1}],_=u=>{const g=F({},t);u?g.tags=u?u.split(","):[]:delete g.tags,l(F({},g))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:d("Module:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"module",value:t.module,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:d("Select Module","bit-integrations")}),(t==null?void 0:t.moduleLists)&&t.moduleLists.map((u,g)=>e.jsx("option",{value:u.name,children:u.label},g))]}),e.jsx("button",{onClick:()=>D(l,j,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh module list"'},type:"button",disabled:o,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:d("Audience List:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"listId",value:t.listId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:d("Select Audience List","bit-integrations")}),((N=t==null?void 0:t.default)==null?void 0:N.audiencelist)&&Object.keys(t.default.audiencelist).map(u=>e.jsx("option",{value:t.default.audiencelist[u].listId,children:t.default.audiencelist[u].listName},u))]}),e.jsx("button",{onClick:()=>J(s,t,l,j,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Audience list"'},type:"button",disabled:o,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),(t==null?void 0:t.listId)&&((c=t==null?void 0:t.default)==null?void 0:c.audienceTags)&&e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:d("Tags:","bit-integrations")}),e.jsx(E,{defaultValue:t==null?void 0:t.tags,className:"btcd-paper-drpdwn w-5",options:((y=t==null?void 0:t.default)==null?void 0:y.audienceTags)&&Object.keys(t.default.audienceTags).map(u=>({label:t.default.audienceTags[u].tagName,value:t.default.audienceTags[u].tagName})),onChange:u=>_(u)}),e.jsx("button",{onClick:()=>K(s,t,l,b,a,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh MailChimp Tags","bit-integrations")}'`},type:"button",disabled:a==null?void 0:a.tags,children:"↻"})]}),(o||(a==null?void 0:a.tags)||(a==null?void 0:a.refreshFields))&&e.jsx(L,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((T=(p=t.default)==null?void 0:p.fields)==null?void 0:T[t.listId])&&!(a!=null&&a.refreshFields)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:d("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>Q(s,t,l,b,a,x),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${d("Refresh fields","bit-integrations")}'`},type:"button",disabled:a==null?void 0:a.refreshFields,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Mail Chimp Fields","bit-integrations")})})]}),t.field_map.map((u,g)=>e.jsx(m,{i:g,field:u,mailChimpConf:t,formFields:i,setMailChimpConf:l},`sheet-m-${g+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>O(t.field_map.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),((w=t.actions)==null?void 0:w.address)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Address Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Form Address Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:d("Mail Chimp Address Fields","bit-integrations")})})]}),(k=t==null?void 0:t.address_field)==null?void 0:k.map((u,g)=>e.jsx(X,{i:g,field:u,mailChimpConf:t,formFields:i,setMailChimpConf:l,addressField:v},`sheet-m-${g+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>Z(t.address_field.length,t,l),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{})]}),t.listId&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:d("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Y,{mailChimpConf:t,setMailChimpConf:l,formFields:i,address:v})]})]})}export{re as M};
