var ms=Object.defineProperty;var vt=Object.getOwnPropertySymbols;var rs=Object.prototype.hasOwnProperty,os=Object.prototype.propertyIsEnumerable;var Ct=(s,i,a)=>i in s?ms(s,i,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[i]=a,$=(s,i)=>{for(var a in i||(i={}))rs.call(i,a)&&Ct(s,a,i[a]);if(vt)for(var a of vt(i))os.call(i,a)&&Ct(s,a,i[a]);return s};import{r as W,j as t,L as k,f as as}from"./main-777.js";import{c as Dt,a as us,h as bs,b as J,d as hs,T as xs,e as pt,P as ts}from"./bi.644.3.js";import{_ as l,e as ns,C as gs}from"./bi.157.0.js";import{x as f,ag as js}from"./bi.463.440.js";import{a as q}from"./bi.681.9.js";import{b as T}from"./bi.677.11.js";import{g as ss,b as ls,d as es,e as Ns,f as ds,r as ws,i as _s}from"./bi.970.798.js";import{T as ys}from"./bi.444.683.js";function cs({pipeDriveConf:s,setPipeDriveConf:i,tab:a,isLoading:n,setIsLoading:o,setSnackbar:d}){var O,M,V,R,A,y,c,z,E,I,P,B,S,U,K,Q,X,Y,Z,L,v,C,D,p,tt,st,lt,et,at,nt,dt,ct,it,mt,rt,ot,ut,bt,ht,xt,gt,jt,Nt,wt,_t,yt,Ft,Tt,kt,Ot,Mt,Vt,Rt,At,$t,zt,St,ft,qt,Et,It,Pt,Bt,Ut,Gt,Ht,Wt,Jt,Kt,Qt,Xt,Yt,Zt,Lt;const[r,j]=W.useState({show:!1,action:()=>{}}),b=a===0?s.moduleData.module:(M=(O=s.relatedlists)==null?void 0:O[a-1])==null?void 0:M.module,h=(e,m)=>{const w=$({},s);m==="owner"&&(ss(s,i,o,d),j({show:m})),m==="lead_label"&&(ls(s,i,o,d),j({show:m})),m==="currency"&&(Ns(s,i,o,d),j({show:m})),m==="deal_stage"&&(es(s,i,o,d),j({show:m})),m==="deal_status"&&j({show:m}),m==="activities_type"&&j({show:m}),m==="visible_to"&&j({show:m}),m==="activities_participants"&&j({show:m}),a===0?((m==="busy_flag"||m==="active_flag")&&(e.target.checked?w.actions[m]=!0:delete w.actions[m]),i($({},w))):((m==="busy_flag"||m==="active_flag")&&(e.target.checked?w.relatedlists[a-1].actions[m]=!0:delete w.relatedlists[a-1].actions[m]),i($({},w)))},u=()=>{j({show:!1})},N=(e,m)=>{var G,H;const w=$({},s);a===0?e!==""?(w.moduleData[m]=e,w.actions[m]=e):((G=w.moduleData)==null||delete G[m],(H=w.actions)==null||delete H[m]):e!==""?(w.relatedlists[a-1].moduleData[m]=e,w.relatedlists[a-1].actions[m]=e):(delete w.relatedlists[a-1].moduleData[m],delete w.relatedlists[a-1].actions[m]),i($({},w))},F=[{label:l("Call","bit-integrations"),value:"Call"},{label:l("Meeting","bit-integrations"),value:"Meeting"},{label:l("Task","bit-integrations"),value:"Task"},{label:l("Deadline","bit-integrations"),value:"Deadline"},{label:l("Email","bit-integrations"),value:"Email"},{label:l("Lunch","bit-integrations"),value:"Lunch"}],g=[{label:l("Open","bit-integrations"),value:"open"},{label:l("Won","bit-integrations"),value:"won"},{label:l("Lost","bit-integrations"),value:"lost"},{label:l("Deleted","bit-integrations"),value:"deleted"}],x=[{label:l("Owner only","bit-integrations"),value:1},{label:l("Owner's visibility group","bit-integrations"),value:3},{label:l("Owner's visibility group and sub-groups","bit-integrations"),value:5},{label:l("Entire company","bit-integrations"),value:7}],_=(e=[],m)=>{var G;return(G=e.filter(H=>{if(H.value==m)return H})[0])==null?void 0:G.label};return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"pos-rel d-flx w-8",children:[t.jsx(T,{checked:(a===0?(V=s==null?void 0:s.moduleData)==null?void 0:V.owner:(A=(R=s==null?void 0:s.relatedlists[a-1])==null?void 0:R.moduleData)==null?void 0:A.owner)||!1,onChange:e=>h(e,"owner"),className:"wdt-200 mt-4 mr-2",value:"owner",title:l("Owners","bit-integrations"),subTitle:l("Add Owner","bit-integrations")}),b==="Leads"&&t.jsxs(t.Fragment,{children:[" ",t.jsx(T,{checked:a===0?(y=s.moduleData)==null?void 0:y.lead_label:((z=(c=s==null?void 0:s.relatedlists[a-1])==null?void 0:c.moduleData)==null?void 0:z.lead_label)||!1,onChange:e=>h(e,"lead_label"),className:"wdt-200 mt-4 mr-2",value:"lead_label",title:l("Labels","bit-integrations"),subTitle:l("Add Labels","bit-integrations")}),t.jsx(T,{checked:((E=s.moduleData)==null?void 0:E.currency)||!1,onChange:e=>h(e,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:l("Currency","bit-integrations"),subTitle:l("Add Currency","bit-integrations")})]}),b==="Deals"&&t.jsxs(t.Fragment,{children:[t.jsx(T,{checked:a===0?(I=s.moduleData)==null?void 0:I.deal_stage:((B=(P=s==null?void 0:s.relatedlists[a-1])==null?void 0:P.moduleData)==null?void 0:B.deal_stage)||!1,onChange:e=>h(e,"deal_stage"),className:"wdt-200 mt-4 mr-2",value:"deal_stage",title:l("Stages","bit-integrations"),subTitle:l("Add Stages","bit-integrations")}),t.jsx(T,{checked:a===0?(S=s.moduleData)==null?void 0:S.currency:((K=(U=s==null?void 0:s.relatedlists[a-1])==null?void 0:U.moduleData)==null?void 0:K.currency)||!1,onChange:e=>h(e,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:l("Currency","bit-integrations"),subTitle:l("Add Currency","bit-integrations")}),t.jsx(T,{checked:a===0?(Q=s.moduleData)==null?void 0:Q.deal_status:((Y=(X=s==null?void 0:s.relatedlists[a-1])==null?void 0:X.moduleData)==null?void 0:Y.deal_status)||!1,onChange:e=>h(e,"deal_status"),className:"wdt-200 mt-4 mr-2",value:"deal_status",title:l("Status","bit-integrations"),subTitle:l("Add Status","bit-integrations")})]}),b==="Activities"&&t.jsxs(t.Fragment,{children:[t.jsx(T,{checked:(a===0?(Z=s.moduleData)==null?void 0:Z.activities_type:(v=(L=s.relatedlists[a-1])==null?void 0:L.moduleData)==null?void 0:v.activities_type)||!1,onChange:e=>h(e,"activities_type"),className:"wdt-200 mt-4 mr-2",value:"activities_type",title:l("Types","bit-integrations"),subTitle:l("Add Types","bit-integrations")}),t.jsx(T,{checked:(a===0?(C=s.actions)==null?void 0:C.busy_flag:(p=(D=s.relatedlists[a-1])==null?void 0:D.actions)==null?void 0:p.busy_flag)||!1,onChange:e=>h(e,"busy_flag"),className:"wdt-200 mt-4 mr-2",value:"busy_flag",title:l("Busy Flag","bit-integrations"),subTitle:l("Add Busy Flag","bit-integrations")}),t.jsx(T,{checked:(a===0?(tt=s.actions)==null?void 0:tt.activities_participants:(lt=(st=s.relatedlists[a-1])==null?void 0:st.actions)==null?void 0:lt.activities_participants)||!1,onChange:e=>h(e,"activities_participants"),className:"wdt-200 mt-4 mr-2",value:"activities_participants",title:l("Participants","bit-integrations"),subTitle:l("Add Participants","bit-integrations")})]}),b==="Products"&&t.jsxs(t.Fragment,{children:[t.jsx(T,{checked:(a===0?(et=s.actions)==null?void 0:et.active_flag:(nt=(at=s.relatedlists[a-1])==null?void 0:at.actions)==null?void 0:nt.active_flag)||!1,onChange:e=>h(e,"active_flag"),className:"wdt-200 mt-4 mr-2",value:"active_flag",title:l("Inactive Flag","bit-integrations"),subTitle:l("Add Inactive Flag","bit-integrations")}),t.jsx(T,{checked:a===0?(dt=s.moduleData)==null?void 0:dt.currency:((it=(ct=s.relatedlists[a-1])==null?void 0:ct.moduleData)==null?void 0:it.currency)||!1,onChange:e=>h(e,"currency"),className:"wdt-200 mt-4 mr-2",value:"currency",title:l("Currency","bit-integrations"),subTitle:l("Add Currency","bit-integrations")})]}),["Leads","Deals","Persons","Products","Organizations"].includes(b)&&t.jsx(T,{checked:a===0?(mt=s.actions)==null?void 0:mt.visible_to:((ot=(rt=s.relatedlists[a-1])==null?void 0:rt.actions)==null?void 0:ot.visible_to)||!1,onChange:e=>h(e,"visible_to"),className:"wdt-200 mt-4 mr-2",value:"visible_to",title:l("Visible To","bit-integrations"),subTitle:l("Add Visible To","bit-integrations")})]}),t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="owner",close:u,action:u,title:l("Owners","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(f,{className:"msl-wrp-options",defaultValue:_((ut=s.default)==null?void 0:ut.owners,a===0?(bt=s.moduleData)==null?void 0:bt.owner:(xt=(ht=s.relatedlists[a-1])==null?void 0:ht.moduleData)==null?void 0:xt.owner),options:(jt=(gt=s.default)==null?void 0:gt.owners)==null?void 0:jt.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"owner"),customValue:!0,singleSelect:!0}),t.jsx("button",{onClick:()=>ss(s,i,o,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Owners","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]})," ",t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="lead_label",close:u,action:u,title:l("Labels","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(f,{className:"msl-wrp-options",defaultValue:a===0?(Nt=s.moduleData)==null?void 0:Nt.lead_label:(_t=(wt=s.relatedlists[a-1])==null?void 0:wt.moduleData)==null?void 0:_t.lead_label,options:(Ft=(yt=s.default)==null?void 0:yt.leadLabels)==null?void 0:Ft.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"lead_label")}),t.jsx("button",{onClick:()=>ls(s,i,o,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Labels","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]}),t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="deal_stage",close:u,action:u,title:l("Stages","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsxs("div",{className:"flx flx-between mt-2",children:[t.jsx(f,{className:"msl-wrp-options",defaultValue:_((Tt=s.default)==null?void 0:Tt.stages,a===0?(kt=s.moduleData)==null?void 0:kt.deal_stage:(Mt=(Ot=s.relatedlists[a-1])==null?void 0:Ot.moduleData)==null?void 0:Mt.deal_stage),options:(Rt=(Vt=s.default)==null?void 0:Vt.stages)==null?void 0:Rt.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"deal_stage"),customValue:!0,singleSelect:!0}),t.jsx("button",{onClick:()=>es(s,i,o,d),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${l("Refresh Stages","bit-integrations")}'`},type:"button",disabled:n,children:"↻"})]})]}),t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="activities_type",close:u,action:u,title:l("Types","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(f,{className:"msl-wrp-options",defaultValue:_(F,a===0?(At=s.moduleData)==null?void 0:At.activities_type:(zt=($t=s.relatedlists[a-1])==null?void 0:$t.moduleData)==null?void 0:zt.activities_type),options:F.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"activities_type"),customValue:!0,singleSelect:!0})})]}),t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="currency",close:u,action:u,title:l("Currency","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(f,{className:"msl-wrp-options",defaultValue:_((St=s.default)==null?void 0:St.currencies,a===0?(ft=s.moduleData)==null?void 0:ft.currency:(Et=(qt=s.relatedlists[a-1])==null?void 0:qt.moduleData)==null?void 0:Et.currency),options:(Pt=(It=s.default)==null?void 0:It.currencies)==null?void 0:Pt.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"currency"),customValue:!0,singleSelect:!0})})]}),t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="deal_status",close:u,action:u,title:l("Status","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(f,{className:"msl-wrp-options",defaultValue:_(g,a===0?(Bt=s.moduleData)==null?void 0:Bt.deal_status:(Gt=(Ut=s.relatedlists[a-1])==null?void 0:Ut.moduleData)==null?void 0:Gt.deal_status),options:g.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"deal_status"),customValue:!0,singleSelect:!0})})]}),t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="visible_to",close:u,action:u,title:l("Visible To","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(f,{className:"msl-wrp-options",defaultValue:_(x,a===0?(Ht=s.moduleData)==null?void 0:Ht.visible_to:(Jt=(Wt=s.relatedlists[a-1])==null?void 0:Wt.moduleData)==null?void 0:Jt.visible_to),options:x.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"visible_to"),customValue:!0,singleSelect:!0})})]}),t.jsxs(q,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:l("Ok","bit-integrations"),show:r.show==="activities_participants",close:u,action:u,title:l("Participants","bit-integrations"),children:[t.jsx("div",{className:"btcd-hr mt-2 mb-2"}),n?t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):t.jsx("div",{className:"flx flx-between mt-2",children:t.jsx(f,{className:"msl-wrp-options",defaultValue:_((Kt=s.default)==null?void 0:Kt.persons,a===0?(Qt=s.moduleData)==null?void 0:Qt.activities_participants:(Yt=(Xt=s.relatedlists[a-1])==null?void 0:Xt.moduleData)==null?void 0:Yt.activities_participants),options:(Lt=(Zt=s.default)==null?void 0:Zt.persons)==null?void 0:Lt.map(e=>({label:e.label,value:e.value})),onChange:e=>N(e,"activities_participants")})})]})]})}function is({i:s,formFields:i,uploadFields:a,field:n,pipeDriveConf:o,setPipeDriveConf:d,tab:r}){var g,x,_,O,M,V,R,A,y;const j=r===0?o.moduleData.module:(x=(g=o.relatedlists)==null?void 0:g[r-1])==null?void 0:x.module,b=((M=(O=(_=o.default.modules)==null?void 0:_[j])==null?void 0:O.fields)==null?void 0:M.filter(c=>c.required===!0))||[],h=((A=(R=(V=o.default.modules)==null?void 0:V[j])==null?void 0:R.fields)==null?void 0:A.filter(c=>c.required===!1))||[],u=as(ns),{isPro:N}=u;let F=[];if(n!=null&&n.pipeDriveFormField){const c=h.filter(z=>z.key===(n==null?void 0:n.pipeDriveFormField));c.length&&c[0].hasOwnProperty("options")&&c[0].options.length&&(F=c[0].options)}return t.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:t.jsxs("div",{className:"pos-rel flx",children:[t.jsxs("div",{className:"flx integ-fld-wrp",children:[t.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:n.formField||"",onChange:c=>Dt(c,s,o,d,a,r),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),t.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:i.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`))}),t.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),t.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),N?"":`(${l("Pro","bit-integrations")})`),children:N&&((y=us)==null?void 0:y.map(c=>t.jsx("option",{value:c.name,children:c.label},`ff-zhcrm-${c.name}`)))})]}),n.formField==="custom"&&t.jsx(ys,{onChange:c=>bs(c,s,o,d,r),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:n.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:i}),t.jsxs("select",{className:"btcd-paper-inp",disabled:s<b.length,name:"pipeDriveFormField",value:s<b?b[s].label||"":n.pipeDriveFormField||"",onChange:c=>Dt(c,s,o,d,a,r),children:[t.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),s<b.length?t.jsx("option",{value:b[s].key,children:b[s].label},b[s].key):h.map(({key:c,label:z})=>t.jsx("option",{value:c,children:z},c))]})]}),t.jsxs("div",{className:"flx integ-fld-wrp",children:[F.length>0&&t.jsx("div",{children:t.jsx(js,{width:250,icnSize:17,className:"ml-2",children:t.jsxs("div",{className:"txt-body",children:[t.jsx("p",{children:l("Custom field options with id","bit-integrations")}),F.map(c=>t.jsxs("li",{children:[c==null?void 0:c.label," - ",c==null?void 0:c.id]},c.id))]})})}),s>=b.length&&t.jsxs(t.Fragment,{children:[t.jsx("button",{onClick:()=>J(s,o,d,a,r),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),t.jsx("button",{onClick:()=>hs(s,o,d,a,r),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:t.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})]})})}function Fs({tab:s,settab:i,formFields:a,pipeDriveConf:n,setPipeDriveConf:o,handleInput:d,isLoading:r,setIsLoading:j,setSnackbar:b}){var h,u,N,F,g,x,_,O,M,V,R,A;return W.useEffect(()=>{ds(0,i)},[]),t.jsxs(t.Fragment,{children:[r&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx("br",{}),t.jsx("br",{}),n.moduleData.module!==""&&((h=n.default.modules[n.moduleData.module])==null?void 0:h.required)&&!["Products","Organizations"].includes(n.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Organization:","bit-integrations")}),t.jsxs("select",{onChange:d,name:"organization_id",value:((u=n.moduleData)==null?void 0:u.organization_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Organization","bit-integrations")}),((N=n==null?void 0:n.default)==null?void 0:N.organizations)&&n.default.organizations.map((y,c)=>t.jsx("option",{value:y.value,children:y.label},`pipedrive-m-${c+20}`))]}),t.jsx("button",{onClick:()=>ws(n,o,j,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh organizations","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),t.jsx("br",{}),t.jsx("br",{})]}),n.moduleData.module!==""&&((F=n.default.modules[n.moduleData.module])==null?void 0:F.required)&&!["Products","Persons","Organizations"].includes(n.moduleData.module)&&t.jsxs(t.Fragment,{children:[t.jsx("b",{className:"wdt-200 d-in-b",children:l("Person:","bit-integrations")}),t.jsxs("select",{onChange:d,name:"person_id",value:((g=n.moduleData)==null?void 0:g.person_id)||"",className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:l("Select Person","bit-integrations")}),((x=n==null?void 0:n.default)==null?void 0:x.persons)&&n.default.persons.map((y,c)=>t.jsx("option",{value:y.value,children:y.label},`pipedrive-m-${c+20}`))]}),t.jsx("button",{onClick:()=>_s(n,o,j,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Refresh persons","bit-integrations")}'`},type:"button",disabled:r,children:"↻"}),t.jsx("br",{}),t.jsx("br",{})]}),n.moduleData.module&&((M=(O=(_=n.default)==null?void 0:_.modules)==null?void 0:O[n.moduleData.module])==null?void 0:M.fields)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("PipeDrive Fields","bit-integrations")})})]}),n.field_map.map((y,c)=>t.jsx(is,{i:c,field:y,pipeDriveConf:n,formFields:a,setPipeDriveConf:o,tab:s,setSnackbar:b},`pipedrive-m-${c+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>J(n.field_map.length,n,o,!1,s),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(cs,{pipeDriveConf:n,setPipeDriveConf:o,tab:s,isLoading:r,setIsLoading:j,setSnackbar:b})]}),n.moduleData.module&&!((A=(R=(V=n.default)==null?void 0:V.modules)==null?void 0:R[n.moduleData.module])!=null&&A.fields)&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}function Ts({indx:s,tab:i,settab:a,formID:n,formFields:o,pipeDriveConf:d,setPipeDriveConf:r,handleInput:j,isLoading:b,setIsLoading:h,setSnackbar:u}){var g,x,_,O,M,V,R,A,y,c,z,E,I,P,B;const N=as(ns),{isPro:F}=N;return W.useEffect(()=>{ds(s+1,a)},[]),t.jsxs(t.Fragment,{children:[b&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx("br",{}),t.jsx("br",{}),t.jsxs("div",{className:"pos-rel",children:[!F&&t.jsx("div",{className:"pro-blur flx p-3",children:t.jsx("div",{className:"pro",children:t.jsxs("a",{href:"https://bitapps.pro/bit-integrations/#pricing",target:"_blank",rel:"noreferrer",children:[l("Related List","bit-integrations")," ",l("Available On","bit-integrations"),t.jsxs("span",{className:"txt-pro",children:[" (",l("Pro","bit-integrations"),")"]})]})})}),t.jsx("b",{className:"wdt-100 d-in-b",children:l("Related List:","bit-integrations")}),t.jsxs("select",{onChange:j,name:"module",value:(x=(g=d==null?void 0:d.relatedlists)==null?void 0:g[i-1])==null?void 0:x.module,className:"btcd-paper-inp w-7",disabled:!((_=d.moduleData)!=null&&_.module),children:[t.jsx("option",{value:"",children:l("Select Related Module","bit-integrations")}),(M=(O=d.default.modules[d.moduleData.module])==null?void 0:O.relatedlists)==null?void 0:M.map(S=>t.jsx("option",{value:S.name,children:S.name},S.name))]}),t.jsx("br",{}),t.jsx("br",{}),((A=d.default.modules[(R=(V=d==null?void 0:d.relatedlists)==null?void 0:V[i-1])==null?void 0:R.module])==null?void 0:A.fields)&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Field Map","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("Form Fields","bit-integrations")})}),t.jsx("div",{className:"txt-dp",children:t.jsx("b",{children:l("PipeDrive Fields","bit-integrations")})})]}),(z=(c=(y=d.relatedlists)==null?void 0:y[i-1])==null?void 0:c.field_map)==null?void 0:z.map((S,U)=>t.jsx(is,{i:U,field:S,pipeDriveConf:d,formFields:o,setPipeDriveConf:r,tab:i,setSnackbar:u},`crm-m-${U+9}`)),t.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:t.jsx("button",{onClick:()=>J(d.relatedlists[i-1].field_map.length,d,r,!1,i),className:"icn-btn sh-sm",type:"button",children:"+"})}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("div",{className:"mt-4",children:t.jsx("b",{className:"wdt-100",children:l("Utilities","bit-integrations")})}),t.jsx("div",{className:"btcd-hr mt-1"}),t.jsx(cs,{pipeDriveConf:d,setPipeDriveConf:r,tab:i,isLoading:b,setIsLoading:h,setSnackbar:u})]})]}),d.default.modules[(E=d.relatedlists[i-1])==null?void 0:E.module]&&!((B=d.default.modules[(P=(I=d==null?void 0:d.relatedlists)==null?void 0:I[i-1])==null?void 0:P.module])!=null&&B.fields)&&t.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}})]})}function fs({tab:s,settab:i,formID:a,formFields:n,handleInput:o,pipeDriveConf:d,setPipeDriveConf:r,isLoading:j,setIsLoading:b,setSnackbar:h}){var F;const u=()=>{if(d.relatedlists.length<2){const g=$({},d);g.relatedlists.push({actions:{},field_map:[{formField:"",pipeDriveFormField:""}],moduleData:{},module:""}),r($({},g))}},N=g=>{const x=$({},d);x.relatedlists.splice(g,1),x.relatedlists.length||i(0),r($({},x))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:l("Module:","bit-integrations")}),t.jsxs("select",{onChange:o,name:"module",value:d.moduleData.module,className:"btcd-paper-inp w-5",disabled:s,children:[t.jsx("option",{value:"",children:l("Select Module","bit-integrations")}),Object.keys(d.default.modules).map(g=>t.jsx("option",{value:g,children:g},g))]}),t.jsx("br",{}),t.jsx("div",{children:t.jsxs(xs,{children:[t.jsxs("div",{className:"flx mt-2",children:[t.jsx(pt,{children:t.jsx("button",{className:`btcd-s-tab-link ${s===0&&"s-t-l-active"}`,type:"button",children:l("New Record","bit-integrations")})}),(d==null?void 0:d.relatedlists)&&d.relatedlists.map((g,x)=>t.jsxs(t.Fragment,{children:[t.jsx(pt,{children:t.jsxs("button",{className:`btcd-s-tab-link ${s===x+1&&"s-t-l-active"}`,type:"button",children:[l("Related List","bit-integrations")," #",x+1]})},`t-${x*3}`),t.jsx("button",{onClick:()=>N(x),className:"icn-btn","aria-label":"delete-relatedlist",type:"button",children:t.jsx(gs,{size:"14"})})]})),d.relatedlists.length<2&&((F=d.default.modules[d.moduleData.module])==null?void 0:F.relatedlists)&&t.jsx("button",{onClick:u,className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Add More Related List","bit-integrations")}'`},type:"button",children:"+"})]}),t.jsx("div",{className:"btcd-hr"}),t.jsx(ts,{children:t.jsx(Fs,{tab:s,settab:i,formFields:n,pipeDriveConf:d,setPipeDriveConf:r,handleInput:o,isLoading:j,setIsLoading:b,setSnackbar:h})}),(d==null?void 0:d.relatedlists)&&d.relatedlists.map((g,x)=>t.jsx(ts,{children:t.jsx(Ts,{indx:x,tab:s,settab:i,formID:a,formFields:n,pipeDriveConf:d,setPipeDriveConf:r,handleInput:o,isLoading:j,setIsLoading:b,setSnackbar:h})},`p-${x+2.4}`))]})}),t.jsx("br",{})]})}export{fs as P};
