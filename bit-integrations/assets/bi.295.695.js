var D=Object.defineProperty;var T=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var y=(a,c,n)=>c in a?D(a,c,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[c]=n,A=(a,c)=>{for(var n in c||(c={}))L.call(c,n)&&y(a,n,c[n]);if(T)for(var n of T(c))O.call(c,n)&&y(a,n,c[n]);return a};import{j as e,r as z,f as I,L as V}from"./main-288.js";import{u as S,z as B}from"./bi.197.434.js";import{_ as s,e as M}from"./bi.4.0.js";import{h as P,d as E,a as R,b as q,c as H,e as U}from"./bi.869.696.js";import{T as G,b as k}from"./bi.147.11.js";import{a as $}from"./bi.627.9.js";import{r as K,a as W,b as J,d as Z}from"./bi.337.694.js";import{a as Q,h as X}from"./bi.826.3.js";import{T as Y}from"./bi.294.669.js";function f({i:a,formFields:c,field:n,mailChimpConf:t,setMailChimpConf:i,addressField:g}){const v=n.required,u=g.filter(d=>!d.required);return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:d=>P(d,a,t,i),children:[e.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),c.map(d=>d.type!=="file"&&e.jsx("option",{value:d.name,children:d.label},`ff-zhcrm-${d.name}`))]}),e.jsxs("select",{className:"btcd-paper-inp",name:"mailChimpAddressField",value:n.mailChimpAddressField||"",onChange:d=>P(d,a,t,i),disabled:v,children:[e.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),v?Object.values(g).map((d,r)=>e.jsx("option",{value:d.tag,children:d.name},`add-${r*2}`)):Object.values(u).map((d,r)=>e.jsx("option",{value:d.tag,children:d.name},`add-${r*2}`))]}),!v&&e.jsx("button",{onClick:()=>E(a,t,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(G,{})})]})}function C({mailChimpConf:a,setMailChimpConf:c,formFields:n,address:t}){var N,w,p;const[i,g]=z.useState({show:!1}),v=I(M),{isPro:u}=v,d=(l,x)=>{const o=A({},a);(x==="language"||x==="gdpr")&&g({show:x}),x==="update"&&(l.target.checked?o.actions.update=!0:delete o.actions.update),x==="double_opt_in"&&(l.target.checked?o.actions.double_opt_in=!0:delete o.actions.double_opt_in),x==="address"&&(l.target.checked?(o.actions.address=!0,o.address_field=t.filter(F=>F.required).map(F=>({formField:"",mailChimpAddressField:F.tag,required:!0}))):(delete o.actions.address,o.address_field="")),c(A({},o))},r=()=>{g({show:!1})},h=(l,x)=>{c(o=>B(o,F=>{F[x]=l}))};return e.jsx("div",{className:"pos-rel d-flx w-8",children:(!(a!=null&&a.module)||(a==null?void 0:a.module)==="add_a_member_to_an_audience")&&e.jsxs(e.Fragment,{children:[e.jsx(k,{checked:((N=a.actions)==null?void 0:N.address)||!1,onChange:l=>d(l,"address"),className:"wdt-200 mt-4 mr-2",value:"address",title:s("Add Address Field","bit-integrations"),subTitle:s("Add Address Field","bit-integrations")}),e.jsx(k,{checked:((w=a.actions)==null?void 0:w.double_opt_in)||!1,onChange:l=>d(l,"double_opt_in"),className:"wdt-200 mt-4 mr-2",value:"double_opt_in",title:s("Double Opt-in","bit-integrations"),subTitle:s("Add Double Opt-in","bit-integrations")}),e.jsx(k,{checked:((p=a.actions)==null?void 0:p.update)||!1,onChange:l=>d(l,"update"),className:"wdt-200 mt-4 mr-2",value:"user_share",title:s("Update Mail Chimp","bit-integrations"),subTitle:s("Update Responses with MailChimp exist Aduience?","bit-integrations")}),e.jsx(k,{checked:(a==null?void 0:a.selectedLanguage)||!1,onChange:l=>d(l,"language"),className:"wdt-200 mt-4 mr-2",value:"language",title:`${s("Add Language","bit-integrations")} ${u?"":`(${s("Pro","bit-integrations")})`}`,subTitle:u?s("Add Language","bit-integrations"):sprintf(s("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.3.0",s("Add Language","bit-integrations")),isInfo:!u}),e.jsx(k,{checked:(a==null?void 0:a.selectedGDPR)||!1,onChange:l=>d(l,"gdpr"),className:"wdt-200 mt-4 mr-2",value:"gdpr",title:`${s("Add GDPR","bit-integrations")} ${u?"":`(${s("Pro","bit-integrations")})`}`,subTitle:u?s("Add GDPR Marketing Preferences","bit-integrations"):sprintf(s("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.3.0",s("GDPR","bit-integrations")),isInfo:!u}),u&&e.jsxs(e.Fragment,{children:[e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:i.show==="language",close:r,action:r,title:s("Add Language","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(S,{className:"msl-wrp-options",defaultValue:a==null?void 0:a.selectedLanguage,options:ee,onChange:l=>h(l,"selectedLanguage"),closeOnSelect:!0,singleSelect:!0})})]}),e.jsxs($,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:i.show==="gdpr",close:r,action:r,title:s("Write down GDPR marketing options","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsxs("p",{children:[e.jsx("b",{children:s("Note","bit-integrations")}),": ",sprintf(s("Write down your preferred GDPR marketing options, separated by commas %s. For example: Email Address, Phone Number.","bit-integrations"),'(",")')]}),e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx("input",{className:"btcd-paper-inp mt-1",onChange:l=>h(l.target.value,"selectedGDPR"),name:"selectedGDPR",value:a==null?void 0:a.selectedGDPR,type:"text",placeholder:s("GDPR Marketing Preferences...","bit-integrations")})})]})]})]})})}const ee=[{label:"English",value:"en"},{label:"Arabic",value:"ar"},{label:"Afrikaans",value:"af"},{label:"Belarusian",value:"be"},{label:"Bulgarian",value:"bg"},{label:"Catalan",value:"ca"},{label:"Chinese",value:"zh"},{label:"Croatian",value:"hr"},{label:"Czech",value:"cs"},{label:"Danish",value:"da"},{label:"Dutch",value:"nl"},{label:"Estonian",value:"et"},{label:"Farsi",value:"fa"},{label:"Finnish",value:"fi"},{label:"French (France)",value:"fr"},{label:"French (Canada)",value:"fr_CA"},{label:"German",value:"de"},{label:"Greek",value:"el"},{label:"Hebrew",value:"he"},{label:"Hindi",value:"hi"},{label:"Hungarian",value:"hu"},{label:"Icelandic",value:"is"},{label:"Indonesian",value:"id"},{label:"Irish",value:"ga"},{label:"Italian",value:"it"},{label:"Japanese",value:"ja"},{label:"Khmer",value:"km"},{label:"Korean",value:"ko"},{label:"Latvian",value:"lv"},{label:"Lithuanian",value:"lt"},{label:"Maltese",value:"mt"},{label:"Malay",value:"ms"},{label:"Macedonian",value:"mk"},{label:"Norwegian",value:"no"},{label:"Polish",value:"pl"},{label:"Portuguese (Brazil)",value:"pt"},{label:"Portuguese (Portugal)",value:"pt_PT"},{label:"Romanian",value:"ro"},{label:"Russian",value:"ru"},{label:"Serbian",value:"sr"},{label:"Slovak",value:"sk"},{label:"Slovenian",value:"sl"},{label:"Spanish (Mexico)",value:"es"},{label:"Spanish (Spain)",value:"es_ES"},{label:"Swahili",value:"sw"},{label:"Swedish",value:"sv"},{label:"Tamil",value:"ta"},{label:"Thai",value:"th"},{label:"Turkish",value:"tr"},{label:"Ukrainian",value:"uk"},{label:"Vietnamese",value:"vi"}];function te({i:a,formFields:c,field:n,mailChimpConf:t,setMailChimpConf:i}){var r,h,N,w,p;const g=I(M),{isPro:v}=g,u=((h=(r=t.default)==null?void 0:r.fields)==null?void 0:h[t.listId])&&Object.values(t.default.fields[t.listId]).filter(l=>l.required===!0)||[],d=((w=(N=t.default)==null?void 0:N.fields)==null?void 0:w[t.listId])&&Object.values(t.default.fields[t.listId]).filter(l=>l.required===!1)||[];return e.jsxs("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:l=>R(l,a,t,i),children:[e.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),e.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:c.map(l=>l.type!=="file"&&e.jsx("option",{value:l.name,children:l.label},`ff-zhcrm-${l.name}`))}),e.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),e.jsx("optgroup",{label:`${s("General Smart Codes","bit-integrations")} ${v?"":`(${s("Pro","bit-integrations")})`}`,children:v&&((p=Q)==null?void 0:p.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),n.formField==="custom"&&e.jsx(Y,{onChange:l=>X(l,a,t,i),label:s("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:s("Custom Value","bit-integrations"),formFields:c}),e.jsxs("select",{className:"btcd-paper-inp",name:"mailChimpField",value:n.mailChimpField||"",onChange:l=>R(l,a,t,i),disabled:a<u.length,children:[e.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),a<u.length?e.jsx("option",{value:u[a].tag,children:u[a].name},`mchimp-${u[a].tag}`):d.map(({tag:l,name:x})=>e.jsx("option",{value:l,children:x},`mchimp-${l}`))]})]}),e.jsx("button",{onClick:()=>q(a,t,i),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>H(a,t,i),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx(G,{})})]})}function oe({formID:a,formFields:c,handleInput:n,mailChimpConf:t,setMailChimpConf:i,isLoading:g,setIsLoading:v,setSnackbar:u,a:d,loading:r,setLoading:h}){var p,l,x,o,F,_,m;const N=[{tag:"addr1",name:s("Address 1","bit-integrations"),required:!0},{tag:"addr2",name:s("Address 2","bit-integrations"),required:!1},{tag:"city",name:s("City","bit-integrations"),required:!0},{tag:"zip",name:s("Zip","bit-integrations"),required:!0},{tag:"state",name:s("State","bit-integrations"),required:!0},{tag:"country",name:s("Country","bit-integrations"),required:!1}],w=b=>{const j=A({},t);b?j.tags=b?b.split(","):[]:delete j.tags,i(A({},j))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:s("Module:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"module",value:t.module,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:s("Select Module","bit-integrations")}),(t==null?void 0:t.moduleLists)&&t.moduleLists.map((b,j)=>e.jsx("option",{value:b.name,children:b.label},j))]}),e.jsx("button",{onClick:()=>K(i,v,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh module list"'},type:"button",disabled:g,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:s("Audience List:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"listId",value:t.listId,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:s("Select Audience List","bit-integrations")}),((p=t==null?void 0:t.default)==null?void 0:p.audiencelist)&&Object.keys(t.default.audiencelist).map(b=>e.jsx("option",{value:t.default.audiencelist[b].listId,children:t.default.audiencelist[b].listName},b))]}),e.jsx("button",{onClick:()=>W(a,t,i,v,u),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":'"Refresh Audience list"'},type:"button",disabled:g,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),(t==null?void 0:t.listId)&&((l=t==null?void 0:t.default)==null?void 0:l.audienceTags)&&e.jsxs("div",{className:"d-flx",children:[e.jsx("b",{style:{marginTop:"15px"},className:"wdt-200 d-in-b",children:s("Tags:","bit-integrations")}),e.jsx(S,{defaultValue:t==null?void 0:t.tags,className:"btcd-paper-drpdwn w-5",options:((x=t==null?void 0:t.default)==null?void 0:x.audienceTags)&&Object.keys(t.default.audienceTags).map(b=>({label:t.default.audienceTags[b].tagName,value:t.default.audienceTags[b].tagName})),onChange:b=>w(b)}),e.jsx("button",{onClick:()=>J(a,t,i,u,r,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh MailChimp Tags","bit-integrations")}'`},type:"button",disabled:r==null?void 0:r.tags,children:"↻"})]}),(g||(r==null?void 0:r.tags)||(r==null?void 0:r.refreshFields))&&e.jsx(V,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),((F=(o=t.default)==null?void 0:o.fields)==null?void 0:F[t.listId])&&!(r!=null&&r.refreshFields)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mt-4",children:[e.jsx("b",{className:"wdt-100",children:s("Map Fields","bit-integrations")}),e.jsx("button",{onClick:()=>Z(a,t,i,u,r,h),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh fields","bit-integrations")}'`},type:"button",disabled:r==null?void 0:r.refreshFields,children:"↻"})]}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:s("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:s("Mail Chimp Fields","bit-integrations")})})]}),t.field_map.map((b,j)=>e.jsx(te,{i:j,field:b,mailChimpConf:t,formFields:c,setMailChimpConf:i},`sheet-m-${j+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>q(t.field_map.length,t,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),((_=t.actions)==null?void 0:_.address)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:s("Address Field Map","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:s("Form Address Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:s("Mail Chimp Address Fields","bit-integrations")})})]}),(m=t==null?void 0:t.address_field)==null?void 0:m.map((b,j)=>e.jsx(f,{i:j,field:b,mailChimpConf:t,formFields:c,setMailChimpConf:i,addressField:N},`sheet-m-${j+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>U(t.address_field.length,t,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx("br",{}),e.jsx("br",{})]}),t.listId&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:s("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(C,{mailChimpConf:t,setMailChimpConf:i,formFields:c,address:N})]})]})}export{oe as M};
