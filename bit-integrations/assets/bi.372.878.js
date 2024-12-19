var re=Object.defineProperty;var W=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var X=(t,s,r)=>s in t?re(t,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[s]=r,x=(t,s)=>{for(var r in s||(s={}))ne.call(s,r)&&X(t,r,s[r]);if(W)for(var r of W(s))de.call(s,r)&&X(t,r,s[r]);return t};import{r as me,j as e,L as y,f as pe}from"./main-404.js";import{x as N}from"./bi.613.437.js";import{_ as i,e as le}from"./bi.51.0.js";import{a as S}from"./bi.964.9.js";import{b as P}from"./bi.484.11.js";import{g as Y,a as Z,b as L,d as C,e as w,f,i as ee,j as te,k as se,l as ie,m as u}from"./bi.793.877.js";import{M as he,a as be}from"./bi.488.3.js";function je({flowluConf:t,setFlowluConf:s,loading:r,setLoading:c}){var v,l,A,p,j,O,k,M,T,$,I,_,R,V,F,q,E;const[n,d]=me.useState({show:!1,action:()=>{}}),b=(a,o)=>{var H,K,z,B,G,U,D,J,Q;const h=x({},t);o==="category"?(H=a.target)!=null&&H.checked?(Y(t,s,c),h.actions.category=!0):(d({show:!1}),delete h.actions.category):o==="industry"?(K=a.target)!=null&&K.checked?(Z(t,s,c),h.actions.industry=!0):(d({show:!1}),delete h.actions.industry):o==="source"?(z=a.target)!=null&&z.checked?(L(t,s,c),h.actions.source=!0):(d({show:!1}),delete h.actions.source):o==="customer"?(B=a.target)!=null&&B.checked?(C(t,s,c),h.actions.customer=!0):(d({show:!1}),delete h.actions.customer):o==="manager"?(G=a.target)!=null&&G.checked?(w(t,s,c),h.actions.manager=!0):(d({show:!1}),delete h.actions.manager):o==="projectStage"?(U=a.target)!=null&&U.checked?(f(t,s,c),h.actions.projectStage=!0):(d({show:!1}),delete h.actions.projectStage):o==="portfolio"?(D=a.target)!=null&&D.checked?(ee(t,s,c),h.actions.portfolio=!0):(d({show:!1}),delete h.actions.portfolio):o==="priority"?(J=a.target)!=null&&J.checked?h.actions.priority=!0:(d({show:!1}),delete h.actions.priority):o==="projectOpportunity"&&((Q=a.target)!=null&&Q.checked?(te(t,s,c),h.actions.projectOpportunity=!0):(d({show:!1}),delete h.actions.projectOpportunity)),d({show:o}),s(x({},h))},m=()=>{d({show:!1})},g=(a,o)=>{const h=x({},t);h[o]=a,s(x({},h))};return e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[t.actionName==="account"&&e.jsx(P,{checked:((v=t==null?void 0:t.selectedCategory)==null?void 0:v.length)||!1,onChange:a=>b(a,"category"),className:"wdt-200 mt-4 mr-2",value:"category",title:i("Add Category","bit - integrations"),subTitle:i("Add Category")}),t.actionName==="account"&&e.jsx(P,{checked:((l=t==null?void 0:t.selectedIndustry)==null?void 0:l.length)||!1,onChange:a=>b(a,"industry"),className:"wdt-200 mt-4 mr-2",value:"industry",title:i("Add Industry","bit - integrations"),subTitle:i("Add Industry")}),t.actionName==="opportunity"&&e.jsx(P,{checked:((A=t==null?void 0:t.selectedSource)==null?void 0:A.length)||!1,onChange:a=>b(a,"source"),className:"wdt-200 mt-4 mr-2",value:"source",title:i("Add Source","bit - integrations"),subTitle:i("Add Source")}),t.actionName==="project"&&e.jsx(P,{checked:((p=t==null?void 0:t.selectedPriority)==null?void 0:p.length)||!1,onChange:a=>b(a,"priority"),className:"wdt-200 mt-4 mr-2",value:"priority",title:i("Add Project Priority","bit - integrations"),subTitle:i("Add Project Priority")}),(t.actionName==="opportunity"||t.actionName==="project")&&e.jsx(P,{checked:((j=t==null?void 0:t.selectedCustomer)==null?void 0:j.length)||!1,onChange:a=>b(a,"customer"),className:"wdt-200 mt-4 mr-2",value:"customer",title:i("Add Customer","bit - integrations"),subTitle:i("Add Customer")}),t.actionName==="project"&&e.jsx(P,{checked:((O=t==null?void 0:t.selectedProjectOpportunity)==null?void 0:O.length)||!1,onChange:a=>b(a,"projectOpportunity"),className:"wdt-200 mt-4 mr-2",value:"projectOpportunity",title:i("Add Project Opportunity","bit - integrations"),subTitle:i("Add Project Opportunity")}),t.actionName==="project"&&e.jsx(P,{checked:((k=t==null?void 0:t.selectedManager)==null?void 0:k.length)||!1,onChange:a=>b(a,"manager"),className:"wdt-200 mt-4 mr-2",value:"manager",title:i("Add Project Manager","bit - integrations"),subTitle:i("Add Project Manager")}),t.actionName==="project"&&e.jsx(P,{checked:((M=t==null?void 0:t.selectedProjectStage)==null?void 0:M.length)||!1,onChange:a=>b(a,"projectStage"),className:"wdt-200 mt-4 mr-2",value:"projectStage",title:i("Add Project Stage","bit - integrations"),subTitle:i("Add Project Stage")}),t.actionName==="project"&&e.jsx(P,{checked:((T=t==null?void 0:t.selectedPortfolio)==null?void 0:T.length)||!1,onChange:a=>b(a,"portfolio"),className:"wdt-200 mt-4 mr-2",value:"portfolio",title:i("Add Project Portfolio","bit - integrations"),subTitle:i("Add Project Portfolio")}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="category",close:m,action:m,title:i("Add Category","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Category","bit-integrations")}),r.accountCategories?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:($=t==null?void 0:t.accountCategories)==null?void 0:$.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedCategory,onChange:a=>g(a,"selectedCategory"),singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>Y(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Categories","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="industry",close:m,action:m,title:i("Add Industry","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Industry","bit-integrations")}),r.industry?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:(I=t==null?void 0:t.industries)==null?void 0:I.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedIndustry,onChange:a=>g(a,"selectedIndustry"),singleSelect:!0}),e.jsx("button",{onClick:()=>Z(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Industry","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="source",close:m,action:m,title:i("Add Source","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Source","bit-integrations")}),r.source?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:(_=t==null?void 0:t.sources)==null?void 0:_.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedSource,onChange:a=>g(a,"selectedSource"),singleSelect:!0}),e.jsx("button",{onClick:()=>L(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Source","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="customer",close:m,action:m,title:i("Add Customer","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Customer","bit-integrations")}),r.customer?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:(R=t==null?void 0:t.customers)==null?void 0:R.map(a=>({label:a.name||a.id,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedCustomer,onChange:a=>g(a,"selectedCustomer"),singleSelect:!0}),e.jsx("button",{onClick:()=>C(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Customer","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="manager",close:m,action:m,title:i("Add Project Manager","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Project Manager","bit-integrations")}),r.manager?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:(V=t==null?void 0:t.managers)==null?void 0:V.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedManager,onChange:a=>g(a,"selectedManager"),singleSelect:!0}),e.jsx("button",{onClick:()=>w(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Project Manager","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="projectStage",close:m,action:m,title:i("Add Project Stage","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Project Stage","bit-integrations")}),r.projectStage?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:(F=t==null?void 0:t.projectStages)==null?void 0:F.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedProjectStage,onChange:a=>g(a,"selectedProjectStage"),singleSelect:!0}),e.jsx("button",{onClick:()=>f(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Project Stage","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="portfolio",close:m,action:m,title:i("Add Project Portfolio","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Project Portfolio","bit-integrations")}),r.portfolio?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:(q=t==null?void 0:t.portfolios)==null?void 0:q.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedPortfolio,onChange:a=>g(a,"selectedPortfolio"),singleSelect:!0}),e.jsx("button",{onClick:()=>ee(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Project portfolio","bit-integrations")}'`},type:"button",children:"↻"})]})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="priority",close:m,action:m,title:i("Add Project Priority","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Project Priority","bit-integrations")}),r.portfolio?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"flx flx-between mt-2",children:e.jsx(N,{options:["Low","Medium","High"].map(a=>({label:a,value:a})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedPriority,onChange:a=>g(a,"selectedPriority"),singleSelect:!0})})]}),e.jsxs(S,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"purple",btnTxt:i("Ok","bit-integrations"),show:n.show==="projectOpportunity",close:m,action:m,title:i("Add Project Opportunity","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2",children:i("Select Project Opportunity","bit-integrations")}),r.projectOpportunity?e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsxs("div",{className:"flx flx-between mt-2",children:[e.jsx(N,{options:(E=t==null?void 0:t.projectOpportunities)==null?void 0:E.map(a=>({label:a.name,value:`${a.id}`})),className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedProjectOpportunity,onChange:a=>g(a,"selectedProjectOpportunity"),singleSelect:!0}),e.jsx("button",{onClick:()=>te(t,s,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${i("Refresh Project Opportunity","bit-integrations")}'`},type:"button",children:"↻"})]})]})]})}const ce=(t,s,r)=>{const c=x({},s);c.field_map.splice(t,0,{}),r(x({},c))},xe=(t,s,r)=>{const c=x({},s);c.field_map.length>1&&c.field_map.splice(t,1),r(x({},c))},ae=(t,s,r,c)=>{const n=x({},r);n.field_map[s][t.target.name]=t.target.value,t.target.value==="custom"&&(n.field_map[s].customValue=""),t.target.value==="customFieldKey"&&(n.field_map[s].customFieldKey=""),c(x({},n))},ge=(t,s,r,c,n)=>{const d=x({},r);d.field_map[s][n]=t.target.value,c(x({},d))};function oe({field:t,index:s,conf:r,setConf:c,fieldValue:n,fieldLabel:d,className:b}){return e.jsx(he,{onChange:m=>ge(m,s,r,c,n),label:i(d,"bit-integrations"),className:b,type:"text",value:t[n],placeholder:i(d,"bit-integrations")})}function ye({i:t,formFields:s,field:r,flowluConf:c,setFlowluConf:n}){var v;const d=(c==null?void 0:c.flowluFields)&&(c==null?void 0:c.flowluFields.filter(l=>l.required===!0))||[],b=(c==null?void 0:c.flowluFields)&&(c==null?void 0:c.flowluFields.filter(l=>l.required===!1))||[],m=pe(le),{isPro:g}=m;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:r.formField||"",onChange:l=>ae(l,t,c,n),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:s==null?void 0:s.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),g?"":`(${i("Pro","bit-integrations")})`),children:g&&((v=be)==null?void 0:v.map(l=>e.jsx("option",{value:l.name,children:l.label},`ff-rm-${l.name}`)))})]}),r.formField==="custom"&&e.jsx(oe,{field:r,index:t,conf:c,setConf:n,fieldValue:"customValue",fieldLabel:"Custom Value",className:"mr-2"}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<d.length,name:"flowluFormField",value:t<d.length?d[t].key||"":r.flowluFormField||"",onChange:l=>ae(l,t,c,n),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),t<d.length?e.jsx("option",{value:d[t].key,children:d[t].label},d[t].key):b.map(({key:l,label:A})=>e.jsx("option",{value:l,children:A},l))]})]}),t>=d.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>ce(t,c,n),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>xe(t,c,n),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Me({formFields:t,flowluConf:s,setFlowluConf:r,loading:c,setLoading:n,isLoading:d,setIsLoading:b,setSnackbar:m}){var l,A;const g=p=>{const j=x({},s);p.target.value!==""?(j.actionName=p.target.value,delete j.flowluFields,(p.target.value==="account"&&j.selectedAccountType||p.target.value!=="account")&&u(j,r,b,m),p.target.value==="opportunity"&&se(j,r,n)):delete j.actionName,r(j)},v=(p,j)=>{r(O=>{const k=x({},O);return k[j]=p,p!==""&&(j==="selectedAccountType"&&(b(!0),u(k,r,b,m)),j==="selectedPipeline"&&ie(k,r,n)),k})};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Action:","bit-integrations")}),e.jsxs("select",{onChange:g,name:"actionName",value:s.actionName,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select an action","bit-integrations")}),e.jsx("option",{value:"account","data-action_name":"account",children:i("Create Account","bit-integrations")}),e.jsx("option",{value:"opportunity","data-action_name":"opportunity",children:i("Create Opportunity","bit-integrations")}),e.jsx("option",{value:"project","data-action_name":"project",children:i("Create Project","bit-integrations")})]}),(c.pipeline||c.stage)&&e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),s.actionName&&s.actionName==="account"&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Account Type:","bit-integrations")}),e.jsxs("select",{onChange:p=>v(p.target.value,"selectedAccountType"),name:"selectedAccountType",value:s.selectedAccountType,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select an account type","bit-integrations")}),e.jsx("option",{value:"1",children:i("Organization","bit-integrations")}),e.jsx("option",{value:"2",children:i("Contact","bit-integrations")})]})]})]}),s.actionName&&s.actionName==="opportunity"&&!c.pipeline&&(s==null?void 0:s.pipelines)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Pipeline:","bit-integrations")}),e.jsx(N,{options:(l=s==null?void 0:s.pipelines)==null?void 0:l.map(p=>({label:p.name,value:`${p.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedPipeline,onChange:p=>v(p,"selectedPipeline"),disabled:c.pipeline,singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>se(s,r,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Pipeline","bit-integrations")}'`},type:"button",disabled:c.pipeline,children:"↻"})]})]}),s.actionName&&s.actionName==="opportunity"&&(s==null?void 0:s.selectedPipeline)&&!c.stage&&(s==null?void 0:s.stages)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Stage:","bit-integrations")}),e.jsx(N,{options:(A=s==null?void 0:s.stages)==null?void 0:A.map(p=>({label:p.name,value:`${p.id}`})),className:"msl-wrp-options dropdown-custom-width",defaultValue:s==null?void 0:s.selectedOpportunityStage,onChange:p=>v(p,"selectedOpportunityStage"),disabled:c.stage,singleSelect:!0,closeOnSelect:!0}),e.jsx("button",{onClick:()=>ie(s,r,n),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh Opportunity stages","bit-integrations")}'`},type:"button",disabled:c.stage,children:"↻"})]})]}),d&&e.jsx(y,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),!d&&s.actionName&&(s==null?void 0:s.flowluFields)&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsxs("div",{className:"mt-5",children:[e.jsx("b",{className:"wdt-100",children:i("Field Map","bit-integrations")}),e.jsx("button",{onClick:()=>u(s,r,b,m),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Refresh fields","bit-integrations")}'`},type:"button",disabled:c.CRMPipelines,children:"↻"})]}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Flowlu Fields","bit-integrations")})})]}),s==null?void 0:s.field_map.map((p,j)=>e.jsx(ye,{i:j,field:p,flowluConf:s,formFields:t,setFlowluConf:r,setSnackbar:m},`rp-m-${j+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>ce(s.field_map.length,s,r),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(je,{flowluConf:s,setFlowluConf:r,formFields:t,loading:c,setLoading:n})]})]})}export{Me as F};
