var X=Object.defineProperty;var B=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var L=(e,n,i)=>n in e?X(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,N=(e,n)=>{for(var i in n||(n={}))Y.call(n,i)&&L(e,i,n[i]);if(B)for(var i of B(n))Z.call(n,i)&&L(e,i,n[i]);return e};import{i as z,j as a,r as H,L as O}from"./main-579.js";import{j as J,_ as t,k as h,l as f,Q as C,m as w,e as k,n as b,A as ee}from"./bi.919.15.js";import{T as ae}from"./bi.850.660.js";import{g as q,a as U,b as Q,d as G,e as p,f as te}from"./bi.276.725.js";const K=(e,n,i)=>{const c=N({},n);c.field_map.splice(e,0,{}),i(N({},c))},le=(e,n,i)=>{const c=N({},n);c.field_map.length>1&&c.field_map.splice(e,1),i(N({},c))},W=(e,n,i,c)=>{const g=N({},i);g.field_map[n][e.target.name]=e.target.value,e.target.value==="custom"&&(g.field_map[n].customValue=""),c(N({},g))};function ie({i:e,formFields:n,field:i,hubspotConf:c,setHubspotConf:g}){var x,m,j;const r=((x=c==null?void 0:c.hubSpotFields)==null?void 0:x.filter(s=>s.required===!0))||[],_=((m=c==null?void 0:c.hubSpotFields)==null?void 0:m.filter(s=>s.required===!1))||[],A=z(J),{isPro:u}=A;return a.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:a.jsxs("div",{className:"pos-rel flx",children:[a.jsxs("div",{className:"flx integ-fld-wrp",children:[a.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:s=>W(s,e,c,g),children:[a.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),a.jsx("optgroup",{label:t("Form Fields","bit-integrations"),children:n==null?void 0:n.map(s=>a.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`))}),a.jsx("option",{value:"custom",children:t("Custom...","bit-integrations")}),a.jsx("optgroup",{label:sprintf(t("General Smart Codes %s","bit-integrations"),u?"":`(${t("Pro","bit-integrations")})`),children:u&&((j=h)==null?void 0:j.map(s=>a.jsx("option",{value:s.name,children:s.label},`ff-rm-${s.name}`)))})]}),i.formField==="custom"&&a.jsx(ae,{onChange:s=>f(s,e,c,g),label:t("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:t("Custom Value","bit-integrations"),formFields:n}),a.jsxs("select",{className:"btcd-paper-inp",disabled:e<r.length,name:"hubspotField",value:e<(r==null?void 0:r.length)?r[e].key||"":i.hubspotField||"",onChange:s=>W(s,e,c,g),children:[a.jsx("option",{value:"",children:t("Select Field","bit-integrations")}),e<r.length?a.jsx("option",{value:r[e].key,children:r[e].label},r[e].key):C(_,"label","ASC").map(({key:s,label:v})=>a.jsx("option",{value:s,children:v},s))]})]}),e>=r.length&&a.jsxs(a.Fragment,{children:[a.jsx("button",{onClick:()=>K(e,c,g),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),a.jsx("button",{onClick:()=>le(e,c,g),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:a.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function se({hubspotConf:e,setHubspotConf:n,formFields:i,loading:c,setLoading:g}){var F,M,V,R,E,I,P,$,D;const[r,_]=H.useState({show:!1,action:()=>{}}),A=z(J),{isPro:u}=A,x=(l,y)=>{const d=N({},e);y==="contact_owner"?(q(e,n,g),l.target.checked?d.actions.contact_owner=!0:delete d.actions.contact_owner):y==="contact"?(U(e,n,g),l.target.checked?d.actions.contact=!0:delete d.actions.contact):y==="company"?(Q(e,n,g),l.target.checked?d.actions.company=!0:delete d.actions.company):y==="deal_type"?l.target.checked?d.actions.deal_type=!0:delete d.actions.deal_type:y==="priority"?l.target.checked?d.actions.priority=!0:delete d.actions.priority:y==="lifecycle_stage"?l.target.checked?d.actions.lifecycle_stage=!0:delete d.actions.lifecycle_stage:y==="lead_status"?l.target.checked?d.actions.lead_status=!0:delete d.actions.lead_status:y==="company_type"?l.target.checked?d.actions.company_type=!0:delete d.actions.company_type:y==="industry"?l.target.checked?(d.actions.industry=!0,G(e,n,g)):delete d.actions.industry:y==="update"&&(l.target.checked?d.actions.update=!0:delete d.actions.update),_({show:y}),n(N({},d))},m=()=>{_({show:!1})},j=(l,y)=>{const d=N({},e);d[y]=l,n(N({},d))},s=[{value:"subscriber",label:t("Subscriber","bit-integrations")},{value:"lead",label:t("Lead","bit-integrations")},{value:"marketingqualifiedlead",label:t("Marketing Qualified Lead","bit-integrations")},{value:"salesqualifiedlead",label:t("Sales Qualified Lead","bit-integrations")},{value:"opportunity",label:t("Opportunity","bit-integrations")},{value:"evangelist",label:t("Evangelist","bit-integrations")},{value:"other",label:t("Other","bit-integrations")},{value:"customer",label:t("Customer","bit-integrations")}],v=[{value:"OPEN",label:t("Open","bit-integrations")},{value:"NEW",label:t("New","bit-integrations")},{value:"IN_PROGRESS",label:t("In Progress","bit-integrations")},{value:"OPEN_DEAL",label:t("Open Deal","bit-integrations")},{value:"UNQUALIFIED",label:t("Unqualified","bit-integrations")},{value:"ATTEMPTED_TO_CONTACT",label:t("Attempted to contact","bit-integrations")},{value:"CONNECTED",label:t("Connected","bit-integrations")},{value:"BAD_TIMING",label:t("Bad timing","bit-integrations")}],o=[{value:"newbusiness",label:t("New Business","bit-integrations")},{value:"existingbusiness",label:t("Existing Business","bit-integrations")}],S=[{value:"low",label:t("Low","bit-integrations")},{value:"medium",label:t("Medium","bit-integrations")},{value:"high",label:t("High","bit-integrations")}],T=[{value:"PROSPECT",label:t("Prospect","bit-integrations")},{value:"PARTNER",label:t("Partner","bit-integrations")},{value:"RESELLER",label:t("Reseller","bit-integrations")},{value:"VENDOR",label:t("Vendor","bit-integrations")},{value:"OTHER",label:t("Other","bit-integrations")}];return t("Subscriber","bit-integrations"),t("Lead","bit-integrations"),t("Marketing Qualified Lead","bit-integrations"),t("Sales Qualified Lead","bit-integrations"),t("Opportunity","bit-integrations"),t("Customer","bit-integrations"),t("Evangelist","bit-integrations"),t("Other","bit-integrations"),a.jsxs("div",{className:"pos-rel d-flx w-8",children:[(e==null?void 0:e.actionName)&&a.jsx(w,{checked:((F=e==null?void 0:e.contact_owner)==null?void 0:F.length)||!1,onChange:l=>x(l,"contact_owner"),className:"wdt-200 mt-4 mr-2",value:"contact_owner",title:t("Contact Owner","bit-integrations"),subTitle:t("Add a contact owner","bit-integrations")}),((e==null?void 0:e.actionName)==="contact"||(e==null?void 0:e.actionName)==="company")&&a.jsx(w,{checked:(e==null?void 0:e.lifecycle_stage)||!1,onChange:l=>x(l,"lifecycle_stage"),className:"wdt-200 mt-4 mr-2",value:"lifecycle_stage",title:t("Lifecycle Stage","bit-integrations"),subTitle:t("Add a lifecycle stage","bit-integrations")}),((e==null?void 0:e.actionName)==="contact"||(e==null?void 0:e.actionName)==="company")&&a.jsx(w,{checked:(e==null?void 0:e.lead_status)||!1,onChange:l=>x(l,"lead_status"),className:"wdt-200 mt-4 mr-2",value:"lead_status",title:t("Lead Status","bit-integrations"),subTitle:t("Add lead status","bit-integrations")}),(e==null?void 0:e.actionName)==="deal"&&a.jsx(w,{checked:(e==null?void 0:e.contact)||!1,onChange:l=>x(l,"contact"),className:"wdt-200 mt-4 mr-2",value:"contact",title:t("Contact","bit-integrations"),subTitle:t("Associate deal with contacts","bit-integrations")}),(e==null?void 0:e.actionName)==="deal"&&a.jsx(w,{checked:(e==null?void 0:e.company)||!1,onChange:l=>x(l,"company"),className:"wdt-200 mt-4 mr-2",value:"company",title:t("Company","bit-integrations"),subTitle:t("Associate deal with company","bit-integrations")}),(e==null?void 0:e.actionName)==="deal"&&a.jsx(w,{checked:(e==null?void 0:e.deal_type)||!1,onChange:l=>x(l,"deal_type"),className:"wdt-200 mt-4 mr-2",value:"deal_type",title:t("Deal Type","bit-integrations"),subTitle:t("Add type to deal","bit-integrations")}),(e==null?void 0:e.actionName)!=="contact"&&(e==null?void 0:e.actionName)!=="company"&&a.jsx(w,{checked:(e==null?void 0:e.priority)||!1,onChange:l=>x(l,"priority"),className:"wdt-200 mt-4 mr-2",value:"deal_type",title:t("Priority","bit-integrations"),subTitle:t("Add priority","bit-integrations")}),(e==null?void 0:e.actionName)==="company"&&a.jsx(w,{checked:(e==null?void 0:e.company_type)||!1,onChange:l=>x(l,"company_type"),className:"wdt-200 mt-4 mr-2",value:"company_type",title:t("Type","bit-integrations"),subTitle:t("The optional classification of this company record - prospect, partner, etc.","bit-integrations")}),(e==null?void 0:e.actionName)==="company"&&a.jsx(w,{checked:(e==null?void 0:e.industry)||!1,onChange:l=>x(l,"industry"),className:"wdt-200 mt-4 mr-2",value:"industry",title:t("Industry","bit-integrations"),subTitle:t("The type of business the company performs. By default, this property has approximately 150 pre-defined options to select from.","bit-integrations")}),a.jsx(w,{checked:((M=e==null?void 0:e.actions)==null?void 0:M.update)||!1,onChange:l=>x(l,"update"),className:"wdt-200 mt-4 mr-2",value:"update",title:t(`Update ${e==null?void 0:e.actionName} ${u?"":"(Pro)"}`,"bit-integrations"),subTitle:u?t("Update Record","bit-integrations"):sprintf(t("The Bit Integration Pro v(%s) plugin needs to be installed and activated to enable the %s feature","bit-integrations"),"2.1.9",t("Update Record","bit-integrations")),isInfo:!u}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:r.show==="contact_owner",close:m,action:m,title:t("Contact Owner","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),c.owners?a.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsxs("div",{className:"flx flx-between mt-2",children:[a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.contact_owner,options:(R=(V=e.default)==null?void 0:V.owners)==null?void 0:R.map(l=>({label:l.ownerName,value:l.ownerId.toString()})),onChange:l=>j(l,"contact_owner"),customValue:!0,singleSelect:!0}),a.jsx("button",{onClick:()=>q(e,n,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${t("Refresh Owners","bit-integrations")}'`},type:"button",disabled:c.owners,children:"↻"})]})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:r.show==="lifecycle_stage",close:m,action:m,title:t("Lifecycle Stage","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"flx flx-center mt-2",children:a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.lifecycle_stage,options:s==null?void 0:s.map(l=>({label:l.label,value:l.value.toString()})),onChange:l=>j(l,"lifecycle_stage"),customValue:!0,singleSelect:!0})})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:r.show==="lead_status",close:m,action:m,title:t("Lead Status","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"flx flx-center mt-2",children:a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.lead_status,options:v==null?void 0:v.map(l=>({label:l.label,value:l.value.toString()})),onChange:l=>j(l,"lead_status"),customValue:!0,singleSelect:!0})})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:r.show==="contact",close:m,action:m,title:t("Contacts","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),c.contacts?a.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsxs("div",{className:"flx flx-between mt-2",children:[a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.contact,options:(I=(E=e==null?void 0:e.default)==null?void 0:E.contacts)==null?void 0:I.map(l=>({label:l.contactName,value:l.contactId.toString()})),onChange:l=>j(l,"contact"),customValue:!0}),a.jsx("button",{onClick:()=>U(e,n,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${t("Refresh CRM Tags","bit-integrations")}'`},type:"button",disabled:c.contacts,children:"↻"})]})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:r.show==="company",close:m,action:m,title:t("Company","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),c.companies?a.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsxs("div",{className:"flx flx-between mt-2",children:[a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.company,options:($=(P=e==null?void 0:e.default)==null?void 0:P.companies)==null?void 0:$.map(l=>({label:l.companyName,value:l.companyId.toString()})),onChange:l=>j(l,"company"),customValue:!0}),a.jsx("button",{onClick:()=>Q(e,n,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${t("Refresh CRM Tags","bit-integrations")}'`},type:"button",disabled:c.companies,children:"↻"})]})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:r.show==="deal_type",close:m,action:m,title:t("Deal Type","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"flx flx-center mt-2",children:a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.deal_type,options:o==null?void 0:o.map(l=>({label:l.label,value:l.value.toString()})),onChange:l=>j(l,"deal_type"),customValue:!0,singleSelect:!0})})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:t("Ok","bit-integrations"),show:r.show==="priority",close:m,action:m,title:t("Priority","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"flx flx-center mt-2",children:a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.priority,options:S==null?void 0:S.map(l=>({label:l.label,value:l.value.toString()})),onChange:l=>j(l,"priority"),customValue:!0,singleSelect:!0})})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:t("Ok","bit-integrations"),show:r.show==="company_type",close:m,action:m,title:t("Type","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a.jsx("div",{className:"flx flx-center mt-2",children:a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.company_type,options:T==null?void 0:T.map(l=>({label:l.label,value:l.value})),onChange:l=>j(l,"company_type"),customValue:!0,singleSelect:!0})})]}),a.jsxs(k,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:t("Ok","bit-integrations"),show:r.show==="industry",close:m,action:m,title:t("Industry","bit-integrations"),children:[a.jsx("div",{className:"btcd-hr mt-2 mb-2"}),c.industry?a.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):a.jsxs("div",{className:"flx flx-center mt-2",children:[a.jsx(b,{className:"msl-wrp-options",defaultValue:e==null?void 0:e.industry,options:(D=e==null?void 0:e.industries)==null?void 0:D.map(l=>({label:l.label,value:l.value})),onChange:l=>j(l,"industry"),customValue:!0,singleSelect:!0}),a.jsx("button",{onClick:()=>G(e,n,g),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${t("Refresh Industry","bit-integrations")}'`},type:"button",disabled:c.industry,children:"↻"})]})]})]})}function ge({formFields:e,handleInput:n,hubspotConf:i,setHubspotConf:c,setSnackbar:g,loading:r,setLoading:_}){var x,m,j;const A=[{label:t("Create Company","bit-integrations"),value:"company"},{label:t("Create Contact","bit-integrations"),value:"contact"},{label:t("Create Deal","bit-integrations"),value:"deal"},{label:t("Create Ticket","bit-integrations"),value:"ticket"}],u=s=>{(s.target.value==="deal"||s.target.value==="ticket")&&te(i,c,_,s.target.value,r),(s.target.value==="contact"||s.target.value==="company")&&p(i,c,_,s.target.value,r),s.target.name==="pipeline"&&c(v=>ee(v,o=>{var S;s.target.value!==""?o[s.target.name]=s.target.value:delete o[s.target.name],o.stageTmp=(S=i==null?void 0:i.default)==null?void 0:S.pipelines.filter(({pipelineId:T})=>T===s.target.value).map(({stages:T})=>T)}))};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsxs("div",{className:"flx",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:t("Action:","bit-integrations")}),a.jsxs("select",{onChange:u,name:"actionName",value:i==null?void 0:i.actionName,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:t("Select Action","bit-integrations")}),A.map(({label:s,value:v})=>a.jsx("option",{value:v,children:s},s))]})]}),(r.customFields||r.pipelines)&&a.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.jsx("br",{}),a.jsx("br",{}),r.hubSpotFields&&((i==null?void 0:i.actionName)==="deal"||i.actionName==="ticket")&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flx",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:t("Pipeline:","bit-integrations")}),a.jsxs("select",{onChange:u,name:"pipeline",value:i==null?void 0:i.pipeline,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:t("Select Pipeline","bit-integrations")}),(x=i==null?void 0:i.default)==null?void 0:x.pipelines.map(({pipelineId:s,pipelineName:v})=>a.jsx("option",{value:s,children:v},s))]})]}),a.jsx("br",{}),a.jsx("br",{}),a.jsxs("div",{className:"flx",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:t("Stage:","bit-integrations")}),a.jsxs("select",{onChange:n,name:"stage",value:i==null?void 0:i.stage,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:t("Select Stage","bit-integrations")}),(j=(m=i==null?void 0:i.stageTmp)==null?void 0:m[0])==null?void 0:j.map(({stageId:s,stageName:v})=>a.jsx("option",{value:s,children:v},s))]})]})]}),a.jsx("br",{}),r.hubSpotFields&&a.jsxs("div",{children:[a.jsx("div",{className:"mt-5",children:a.jsxs("b",{className:"wdt-100",children:[t("Field Map","bit-integrations"),a.jsx("button",{onClick:()=>p(i,c,_,i.actionName,r,!0),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${t("Refresh custom fields","bit-integrations")}'`},type:"button",disabled:r.customFields,children:"↻"})]})}),a.jsx("div",{className:"btcd-hr mt-1"}),r.customFieldsRefresh&&a.jsx(O,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:t("Form Fields","bit-integrations")})}),a.jsx("div",{className:"txt-dp",children:a.jsx("b",{children:t("Hubspot Fields","bit-integrations")})})]}),i==null?void 0:i.field_map.map((s,v)=>a.jsx(ie,{i:v,field:s,hubspotConf:i,formFields:e,setHubspotConf:c,setSnackbar:g},`rp-m-${v+9}`)),a.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:a.jsx("button",{onClick:()=>K(i.field_map.length,i,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),a.jsx("br",{}),a.jsx("br",{}),a.jsx("div",{className:"mt-4",children:a.jsx("b",{className:"wdt-100",children:t("Utilities","bit-integrations")})}),a.jsx("div",{className:"btcd-hr mt-1"}),a.jsx(se,{hubspotConf:i,setHubspotConf:c,formFields:e,loading:r,setLoading:_})]})]})}export{ge as H};
