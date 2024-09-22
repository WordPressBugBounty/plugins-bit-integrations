var It=Object.defineProperty;var Ot=Object.getOwnPropertySymbols;var Pt=Object.prototype.hasOwnProperty,Bt=Object.prototype.propertyIsEnumerable;var Vt=(l,d,i)=>d in l?It(l,d,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[d]=i,A=(l,d)=>{for(var i in d||(d={}))Pt.call(d,i)&&Vt(l,i,d[i]);if(Ot)for(var i of Ot(d))Bt.call(d,i)&&Vt(l,i,d[i]);return l};import{r as H,j as t,L as T,i as Gt}from"./main-165.js";import{_ as s,m as f,e as z,n as v,j as Ut,q as Rt,k as Ht,l as Wt,G as Jt,o as W,r as Kt,w as Qt,x as At,y as Xt,P as $t}from"./bi.312.95.js";import{g as U,b as St,d as zt,e as Yt,f as vt,r as Zt,i as Lt}from"./bi.614.846.js";import{T as Ct}from"./bi.953.732.js";function qt({pipeDriveConf:l,setPipeDriveConf:d,tab:i,isLoading:a,setIsLoading:m,setSnackbar:n}){var k,M,O,V,R,y,c,$,q,E,I,S,P,J,K,Q,X,Y,Z,L,C,p,D,tt,st,lt,et,at,nt,it,ct,dt,rt,mt,ot,ut,bt,ht,xt,gt,jt,wt,Nt,_t,yt,Ft,ft,Tt,kt,Mt;const[o,h]=H.useState({show:!1,action:()=>{}}),b=i===0?l.moduleData.module:(M=(k=l.relatedlists)==null?void 0:k[i-1])==null?void 0:M.module,x=(e,r)=>{const N=A({},l);i===0?(r==="owner"&&(U(l,d,m,n),h({show:r})),r==="lead_label"&&(St(l,d,m,n),h({show:r})),r==="currency"&&(Yt(l,d,m,n),h({show:r})),r==="deal_stage"&&(zt(l,d,m,n),h({show:r})),r==="deal_status"&&h({show:r}),r==="activities_type"&&h({show:r}),r==="visible_to"&&h({show:r}),r==="activities_participants"&&h({show:r}),(r==="busy_flag"||r==="active_flag")&&(e.target.checked?N.actions[r]=!0:delete N.actions[r]),d(A({},N))):(r==="owner"&&(U(l,d,m,n),h({show:r})),r==="activities_type"&&h({show:r}),r==="activities_participants"&&h({show:r}),(r==="busy_flag"||r==="active_flag")&&(e.target.checked?N.relatedlists[i-1].actions[r]=!0:delete N.relatedlists[i-1].actions[r]),d(A({},N)))},u=()=>{h({show:!1})},w=(e,r)=>{var B,G;const N=A({},l);i===0?e!==""?(N.moduleData[r]=e,N.actions[r]=e):((B=N.moduleData)==null||delete B[r],(G=N.actions)==null||delete G[r]):e!==""?(N.relatedlists[i-1].moduleData[r]=e,N.relatedlists[i-1].actions[r]=e):(delete N.relatedlists[i-1].moduleData[r],delete N.relatedlists[i-1].actions[r]),d(A({},N))},F=[{label:s("Call","bit-integrations"),value:"Call"},{label:s("Meeting","bit-integrations"),value:"Meeting"},{label:s("Task","bit-integrations"),value:"Task"},{label:s("Deadline","bit-integrations"),value:"Deadline"},{label:s("Email","bit-integrations"),value:"Email"},{label:s("Lunch","bit-integrations"),value:"Lunch"}],j=[{label:s("Open","bit-integrations"),value:"open"},{label:s("Won","bit-integrations"),value:"won"},{label:s("Lost","bit-integrations"),value:"lost"},{label:s("Deleted","bit-integrations"),value:"deleted"}],g=[{label:s("Owner only","bit-integrations"),value:1},{label:s("Owner's visibility group","bit-integrations"),value:3},{label:s("Owner's visibility group and sub-groups","bit-integrations"),value:5},{label:s("Entire company","bit-integrations"),value:7}],_=(e=[],r)=>{var B;return(B=e.filter(G=>{if(G.value==r)return G})[0])==null?void 0:B.label};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(f,{checked:(i===0?(O=l.moduleData)==null?void 0:O.owner:(V=l.relatedlists[i-1].moduleData)==null?void 0:V.owner)||!1,onChange:e=>x(e,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:s("Owners","bit-integrations"),subTitle:s("Add Owner","bit-integrations")}),b==="Leads"&&t.jsxs(t.Fragment,{children:[" ",t.jsx(f,{checked:((R=l.moduleData)==null?void 0:R.lead_label)||!1,onChange:e=>x(e,"lead_label"),className:"wdt-200 mt-4 mr-2",value:"lead_label",title:s("Labels","bit-integrations"),subTitle:s("Add Labels","bit-integrations")}),t.jsx(f,{checked:((y=l.moduleData)==null?void 0:y.currency)||!1,onChange:e=>x(e,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:s("Currency","bit-integrations"),subTitle:s("Add Currency","bit-integrations")})]}),b==="Deals"&&t.jsxs(t.Fragment,{children:[t.jsx(f,{checked:((c=l.moduleData)==null?void 0:c.deal_stage)||!1,onChange:e=>x(e,"deal_stage"),className:"wdt-200 mt-4 mr-2",value:"deal_stage",title:s("Stages","bit-integrations"),subTitle:s("Add Stages","bit-integrations")}),t.jsx(f,{checked:(($=l.moduleData)==null?void 0:$.currency)||!1,onChange:e=>x(e,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:s("Currency","bit-integrations"),subTitle:s("Add Currency","bit-integrations")}),t.jsx(f,{checked:((q=l.moduleData)==null?void 0:q.deal_status)||!1,onChange:e=>x(e,"deal_status"),className:"wdt-200 mt-4 mr-2",value:"deal_status",title:s("Status","bit-integrations"),subTitle:s("Add Status","bit-integrations")})]}),b==="Activities"&&t.jsxs(t.Fragment,{children:[t.jsx(f,{checked:(i===0?(E=l.moduleData)==null?void 0:E.activities_type:(S=(I=l.relatedlists[i-1])==null?void 0:I.moduleData)==null?void 0:S.activities_type)||!1,onChange:e=>x(e,"activities_type"),className:"wdt-200 mt-4 mr-2",value:"activities_type",title:s("Types","bit-integrations"),subTitle:s("Add Types","bit-integrations")}),t.jsx(f,{checked:(i===0?(P=l.actions)==null?void 0:P.busy_flag:(K=(J=l.relatedlists[i-1])==null?void 0:J.actions)==null?void 0:K.busy_flag)||!1,onChange:e=>x(e,"busy_flag"),className:"wdt-200 mt-4 mr-2",value:"busy_flag",title:s("Busy Flag","bit-integrations"),subTitle:s("Add Busy Flag","bit-integrations")}),t.jsx(f,{checked:(i===0?(Q=l.actions)==null?void 0:Q.activities_participants:(Y=(X=l.relatedlists[i-1])==null?void 0:X.actions)==null?void 0:Y.activities_participants)||!1,onChange:e=>x(e,"activities_participants"),className:"wdt-200 mt-4 mr-2",value:"activities_participants",title:s("Participants","bit-integrations"),subTitle:s("Add Participants","bit-integrations")})]}),b==="Products"&&t.jsxs(t.Fragment,{children:[t.jsx(f,{checked:(i===0?(Z=l.actions)==null?void 0:Z.active_flag:(C=(L=l.relatedlists[i-1])==null?void 0:L.actions)==null?void 0:C.active_flag)||!1,onChange:e=>x(e,"active_flag"),className:"wdt-200 mt-4 mr-2",value:"active_flag",title:s("Inactive Flag","bit-integrations"),subTitle:s("Add Inactive Flag","bit-integrations")}),t.jsx(f,{checked:((p=l.moduleData)==null?void 0:p.currency)||!1,onChange:e=>x(e,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:s("Currency","bit-integrations"),subTitle:s("Add Currency","bit-integrations")})]}),["Leads","Deals","Persons","Products"].includes(b)&&t.jsx(f,{checked:((D=l.actions)==null?void 0:D.visible_to)||!1,onChange:e=>x(e,"visible_to"),className:"wdt-200 mt-4 mr-2",value:"visible_to",title:s("Visible To","bit-integrations"),subTitle:s("Add Visible To","bit-integrations")})]}),t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="owner",close:u,action:u,title:s("Owners","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(v,{className:"msl-wrp-options",defaultValue:_((tt=l.default)==null?void 0:tt.owners,i===0?(st=l.moduleData)==null?void 0:st.owner:(lt=l.relatedlists[i-1].moduleData)==null?void 0:lt.owner),options:(at=(et=l.default)==null?void 0:et.owners)==null?void 0:at.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"owner"),customValue:!0,singleSelect:!0}),t.jsx("button",{onClick:()=>U(l,d,m,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${s("Refresh Owners","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]})]})," ",t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="lead_label",close:u,action:u,title:s("Labels","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(v,{className:"msl-wrp-options",defaultValue:(nt=l.moduleData)==null?void 0:nt.lead_label,options:(ct=(it=l.default)==null?void 0:it.leadLabels)==null?void 0:ct.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"lead_label")}),t.jsx("button",{onClick:()=>St(l,d,m,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${s("Refresh Labels","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]})]}),t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="deal_stage",close:u,action:u,title:s("Stages","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(v,{className:"msl-wrp-options",defaultValue:_((dt=l.default)==null?void 0:dt.stages,(rt=l.moduleData)==null?void 0:rt.deal_stage),options:(ot=(mt=l.default)==null?void 0:mt.stages)==null?void 0:ot.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"deal_stage"),customValue:!0,singleSelect:!0}),t.jsx("button",{onClick:()=>zt(l,d,m,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${s("Refresh Stages","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]})]}),t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="activities_type",close:u,action:u,title:s("Types","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(v,{className:"msl-wrp-options",defaultValue:_(F,i===0?(ut=l.moduleData)==null?void 0:ut.activities_type:(bt=l.relatedlists[i-1].moduleData)==null?void 0:bt.activities_type),options:F.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"activities_type"),customValue:!0,singleSelect:!0})})]}),t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="currency",close:u,action:u,title:s("Currency","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(v,{className:"msl-wrp-options",defaultValue:_((ht=l.default)==null?void 0:ht.currencies,i===0?(xt=l.moduleData)==null?void 0:xt.currency:(gt=l.relatedlists[i-1].moduleData)==null?void 0:gt.currency),options:(wt=(jt=l.default)==null?void 0:jt.currencies)==null?void 0:wt.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"currency"),customValue:!0,singleSelect:!0})})]}),t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="deal_status",close:u,action:u,title:s("Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(v,{className:"msl-wrp-options",defaultValue:_(j,i===0?(Nt=l.moduleData)==null?void 0:Nt.deal_status:(_t=l.relatedlists[i-1].moduleData)==null?void 0:_t.deal_status),options:j.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"deal_status"),customValue:!0,singleSelect:!0})})]}),t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="visible_to",close:u,action:u,title:s("Visible To","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(v,{className:"msl-wrp-options",defaultValue:_(g,(yt=l.moduleData)==null?void 0:yt.visible_to),options:g.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"visible_to"),customValue:!0,singleSelect:!0})})]}),t.jsxs(z,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:s("Ok","bit-integrations"),show:o.show==="activities_participants",close:u,action:u,title:s("Participants","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),a?t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(v,{className:"msl-wrp-options",defaultValue:_((Ft=l.default)==null?void 0:Ft.persons,i===0?(ft=l.moduleData)==null?void 0:ft.activities_participants:(Tt=l.relatedlists[i-1].moduleData)==null?void 0:Tt.activities_participants),options:(Mt=(kt=l.default)==null?void 0:kt.persons)==null?void 0:Mt.map(e=>({label:e.label,value:e.value})),onChange:e=>w(e,"activities_participants")})})]})]})}function Et({i:l,formFields:d,uploadFields:i,field:a,pipeDriveConf:m,setPipeDriveConf:n,tab:o}){var j,g,_,k,M,O,V,R,y;const h=o===0?m.moduleData.module:(g=(j=m.relatedlists)==null?void 0:j[o-1])==null?void 0:g.module,b=((M=(k=(_=m.default.modules)==null?void 0:_[h])==null?void 0:k.fields)==null?void 0:M.filter(c=>c.required===!0))||[],x=((R=(V=(O=m.default.modules)==null?void 0:O[h])==null?void 0:V.fields)==null?void 0:R.filter(c=>c.required===!1))||[],u=Gt(Ut),{isPro:w}=u;let F=[];if(a!=null&&a.pipeDriveFormField){const c=x.filter($=>$.key===(a==null?void 0:a.pipeDriveFormField));c.length&&c[0].hasOwnProperty("options")&&c[0].options.length&&(F=c[0].options)}return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:a.formField||"",onChange:c=>Rt(c,l,m,n,i,o),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),t.jsx("optgroup",{label:s("Form Fields","bit-integrations"),children:d.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`))}),t.jsx("option",{value:"custom",children:s("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(s("General Smart Codes %s","bit-integrations"),w?"":`(${s("Pro","bit-integrations")})`),children:w&&((y=Ht)==null?void 0:y.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`)))})]}),a.formField==="custom"&&t.jsx(Ct,{onChange:c=>Wt(c,l,m,n),label:s("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:a.customValue,placeholder:s("Custom Value","bit-integrations"),formFields:d}),t.jsxs("select",{className:"btcd-paper-inp",disabled:l<b.length,name:"pipeDriveFormField",value:l<b?b[l].label||"":a.pipeDriveFormField||"",onChange:c=>Rt(c,l,m,n,i,o),children:[t.jsx("option",{value:"",children:s("Select Field","bit-integrations")}),l<b.length?t.jsx("option",{value:b[l].key,children:b[l].label},b[l].key):x.map(({key:c,label:$})=>t.jsx("option",{value:c,children:$},c))]})]}),t.jsxs("div",{className:"flx integ-fld-wrp",children:[F.length>0&&t.jsx("div",{children:t.jsx(Jt,{width:250,icnSize:17,className:"ml-2",children:t.jsxs("div",{className:"txt-body",children:[t.jsx("p",{children:s("Custom field options with id","bit-integrations")}),F.map(c=>t.jsxs("li",{children:[c==null?void 0:c.label," - ",c==null?void 0:c.id]},c.id))]})})}),l>=b.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>W(l,m,n,i,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>Kt(l,m,n,i,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})]})})}function pt({tab:l,settab:d,formFields:i,pipeDriveConf:a,setPipeDriveConf:m,handleInput:n,isLoading:o,setIsLoading:h,setSnackbar:b}){var x,u,w,F,j,g,_,k,M,O,V,R;return H.useEffect(()=>{vt(0,d)},[]),t.jsxs(t.Fragment,{children:[o&&t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx("br",{}),t.jsx("br",{}),a.moduleData.module!==""&&((x=a.default.modules[a.moduleData.module])==null?void 0:x.required)&&!["Products"].includes(a.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Organization:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"organization_id",value:((u=a.moduleData)==null?void 0:u.organization_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:s("Select Organization","bit-integrations")}),((w=a==null?void 0:a.default)==null?void 0:w.organizations)&&a.default.organizations.map((y,c)=>t.jsx("option",{value:y.value,children:y.label},`pipedrive-m-${c+20}`))]}),t.jsx("button",{onClick:()=>Zt(a,m,h,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh organizations","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.jsx("br",{}),t.jsx("br",{}),a.moduleData.module!==""&&((F=a.default.modules[a.moduleData.module])==null?void 0:F.required)&&!["Products","Persons"].includes(a.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("b",{className:"wdt-200 d-in-b",children:s("Person:","bit-integrations")}),t.jsxs("select",{onChange:n,name:"person_id",value:((j=a.moduleData)==null?void 0:j.person_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:s("Select Person","bit-integrations")}),((g=a==null?void 0:a.default)==null?void 0:g.persons)&&a.default.persons.map((y,c)=>t.jsx("option",{value:y.value,children:y.label},`pipedrive-m-${c+20}`))]}),t.jsx("button",{onClick:()=>Lt(a,m,h,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Refresh persons","bit-integrations")}'`},type:"button",disabled:o,children:"↻"}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsx("br",{}),t.jsx("br",{}),a.moduleData.module&&((M=(k=(_=a.default)==null?void 0:_.modules)==null?void 0:k[a.moduleData.module])==null?void 0:M.fields)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("PipeDrive Fields","bit-integrations")})})]}),a.field_map.map((y,c)=>t.jsx(Et,{i:c,field:y,pipeDriveConf:a,formFields:i,setPipeDriveConf:m,tab:l,setSnackbar:b},`pipedrive-m-${c+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>W(a.field_map.length,a,m,!1,l),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(qt,{pipeDriveConf:a,setPipeDriveConf:m,tab:l,isLoading:o,setIsLoading:h,setSnackbar:b})]}),a.moduleData.module&&!((R=(V=(O=a.default)==null?void 0:O.modules)==null?void 0:V[a.moduleData.module])!=null&&R.fields)&&t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}function Dt({indx:l,tab:d,settab:i,formID:a,formFields:m,pipeDriveConf:n,setPipeDriveConf:o,handleInput:h,isLoading:b,setIsLoading:x,setSnackbar:u}){var F,j,g,_,k,M,O,V,R,y,c,$,q,E,I;H.useEffect(()=>{vt(l+1,i)},[]);const w=typeof btcbi!="undefined"&&btcbi.isPro;return t.jsxs(t.Fragment,{children:[b&&t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"pos-rel",children:[!w&&t.jsx("div",{className:"pro-blur flx w-9",children:t.jsxs("div",{className:"pro",children:[s("Available On","bit-integrations"),t.jsx("a",{href:"https://bitapps.pro/",target:"_blank",rel:"noreferrer",children:t.jsxs("span",{className:"txt-pro",children:[" ",s("Premium","bit-integrations")]})})]})}),t.jsx("b",{className:"wdt-100 d-in-b",children:s("Related List:","bit-integrations")}),t.jsxs("select",{onChange:h,name:"module",value:(j=(F=n==null?void 0:n.relatedlists)==null?void 0:F[d-1])==null?void 0:j.module,className:"btcd-paper-inp w-7",disabled:!((g=n.moduleData)!=null&&g.module),children:[t.jsx("option",{value:"",children:s("Select Related Module","bit-integrations")}),(k=(_=n.default.modules[n.moduleData.module])==null?void 0:_.relatedlists)==null?void 0:k.map(S=>t.jsx("option",{value:S.name,children:S.name},S.name))]}),t.jsx("br",{}),t.jsx("br",{})]}),t.jsx("br",{}),t.jsx("br",{}),((V=n.default.modules[(O=(M=n==null?void 0:n.relatedlists)==null?void 0:M[d-1])==null?void 0:O.module])==null?void 0:V.fields)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:s("PipeDrive Fields","bit-integrations")})})]}),(c=(y=(R=n.relatedlists)==null?void 0:R[d-1])==null?void 0:y.field_map)==null?void 0:c.map((S,P)=>t.jsx(Et,{i:P,field:S,pipeDriveConf:n,formFields:m,setPipeDriveConf:o,tab:d,setSnackbar:u},`crm-m-${P+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>W(n.relatedlists[d-1].field_map.length,n,o,!1,d),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:s("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(qt,{pipeDriveConf:n,setPipeDriveConf:o,tab:d,isLoading:b,setIsLoading:x,setSnackbar:u})]}),n.default.modules[($=n.relatedlists[d-1])==null?void 0:$.module]&&!((I=n.default.modules[(E=(q=n==null?void 0:n.relatedlists)==null?void 0:q[d-1])==null?void 0:E.module])!=null&&I.fields)&&t.jsx(T,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}function ns({tab:l,settab:d,formID:i,formFields:a,handleInput:m,pipeDriveConf:n,setPipeDriveConf:o,isLoading:h,setIsLoading:b,setSnackbar:x}){var F;const u=()=>{if(n.relatedlists.length<2){const j=A({},n);j.relatedlists.push({actions:{},field_map:[{formField:"",pipeDriveFormField:""}],moduleData:{},module:""}),o(A({},j))}},w=j=>{const g=A({},n);g.relatedlists.splice(j,1),g.relatedlists.length||d(0),o(A({},g))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:s("Module:","bit-integrations")}),t.jsxs("select",{onChange:m,name:"module",value:n.moduleData.module,className:"btcd-paper-inp w-5",disabled:l,children:[t.jsx("option",{value:"",children:s("Select Module","bit-integrations")}),Object.keys(n.default.modules).map(j=>t.jsx("option",{value:j,children:j},j))]}),t.jsx("br",{}),t.jsx("div",{children:t.jsxs(Qt,{children:[t.jsxs("div",{className:"flx mt-2",children:[t.jsx(At,{children:t.jsx("button",{className:`btcd-s-tab-link ${l===0&&"s-t-l-active"}`,type:"button",children:s("New Record","bit-integrations")})}),(n==null?void 0:n.relatedlists)&&n.relatedlists.map((j,g)=>t.jsxs(t.Fragment,{children:[t.jsx(At,{children:t.jsxs("button",{className:`btcd-s-tab-link ${l===g+1&&"s-t-l-active"}`,type:"button",children:[s("Related List #","bit-integrations"),g+1]})},`t-${g*3}`),t.jsx("button",{onClick:()=>w(g),className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:t.jsx(Xt,{size:"14"})})]})),n.relatedlists.length<2&&((F=n.default.modules[n.moduleData.module])==null?void 0:F.relatedlists)&&t.jsx("button",{onClick:u,className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${s("Add More Related List","bit-integrations")}'`},type:"button",children:"+"})]}),t.jsx("div",{className:"btcd-hr"}),t.jsx($t,{children:t.jsx(pt,{tab:l,settab:d,formFields:a,pipeDriveConf:n,setPipeDriveConf:o,handleInput:m,isLoading:h,setIsLoading:b,setSnackbar:x})}),(n==null?void 0:n.relatedlists)&&n.relatedlists.map((j,g)=>t.jsx($t,{children:t.jsx(Dt,{indx:g,tab:l,settab:d,formID:i,formFields:a,pipeDriveConf:n,setPipeDriveConf:o,handleInput:m,isLoading:h,setIsLoading:b,setSnackbar:x})},`p-${g+2.4}`))]})}),t.jsx("br",{})]})}export{ns as P};
