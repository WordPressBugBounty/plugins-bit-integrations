var ie=Object.defineProperty;var J=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var j=(t,s,i)=>s in t?ie(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,T=(t,s)=>{for(var i in s||(s={}))ce.call(s,i)&&j(t,i,s[i]);if(J)for(var i of J(s))re.call(s,i)&&j(t,i,s[i]);return t};import{r as E,i as oe,j as e,L as v}from"./main-692.js";import{j as de,m as h,_ as a,e as O,n as w,k as me,l as he}from"./bi.751.13.js";import{T as c,D as M,g as I,a as be,b as C,d as R,e as ee,f as se,i as te,j as pe}from"./bi.257.895.js";import{T as ue}from"./bi.588.657.js";function xe({jetEngineConf:t,setJetEngineConf:s,loading:i,setLoading:r}){var S,o,x,_,F,D,Y,L,U,V,X,$,q,W,B,H,z,G,K,Q,Z,g,f;const[b,n]=E.useState({show:!1}),A=oe(de),{isPro:d}=A,[u,p]=E.useState({}),m=(l,k)=>{const P=T({},t);k==="checkbox"?l.target.checked?P.actions[l.target.value]=!0:delete P.actions[l.target.value]:k==="menuPosition"?(I("jetEngine_menu_positions",u,p,k,i,r),n({show:"menuPosition"})):k==="menuIcon"?(I("jetEngine_menu_icons",u,p,k,i,r),n({show:"menuIcon"})):k==="supports"?(I("jetEngine_supports",u,p,k,i,r),n({show:"supports"})):k==="taxPostTypes"&&(I("jetEngine_tax_post_types",u,p,k,i,r),n({show:"taxPostTypes"})),s(T({},P))},N=()=>{n({show:!1})},y=(l,k)=>{const P=T({},t);P[k]=l,s(T({},P))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[!d&&(t.selectedTask===c.CREATE_TAXONOMY||t.selectedTask===c.UPDATE_TAXONOMY)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:t.selectedTaxPostTypes||!1,onChange:l=>m(l,"taxPostTypes"),className:"wdt-200 mt-4 mr-2",value:"select_menu_post_type",title:a("Select Post Type","bit-integrations"),subTitle:a("Select post types to add this taxonomy for.","bit-integrations")}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="taxPostTypes",close:N,action:N,title:a("Post Types","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Position","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.taxPostTypes,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTaxPostTypes,onChange:l=>y(l,"selectedTaxPostTypes"),style:{width:"100%"}})})]})]}),t.selectedTask===c.DELETE_POST_TYPE&&e.jsx(e.Fragment,{children:e.jsx(h,{checked:((S=t.actions)==null?void 0:S.delete_all_posts)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"delete_all_posts",title:a("Delete All Posts","bit-integrations"),subTitle:a("Delete all posts related to the post type.","bit-integrations")})}),t.selectedTask===c.DELETE_TAXONOMY&&e.jsx(e.Fragment,{children:e.jsx(h,{checked:((o=t.actions)==null?void 0:o.delete_all_tax_terms)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"delete_all_tax_terms",title:a("Delete All Terms","bit-integrations"),subTitle:a("Delete all terms related to the taxonomy.","bit-integrations")})})]}),!d&&!M.includes(t.selectedTask)&&e.jsx("div",{className:"pt-2",children:e.jsx("span",{className:"actions-note",children:a("The Bit Integrations Pro plugin needs to be installed and activated to utilize these features","bit-integrations")})}),e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(t.selectedTask===c.CREATE_TAXONOMY||t.selectedTask===c.UPDATE_TAXONOMY)&&d&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:t.selectedTaxPostTypes||!1,onChange:l=>m(l,"taxPostTypes"),className:"wdt-200 mt-4 mr-2",value:"select_menu_post_type",title:a("Select Post Type","bit-integrations"),subTitle:a("Select post types to add this taxonomy for.","bit-integrations")}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="taxPostTypes",close:N,action:N,title:a("Post Types","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Position","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.taxPostTypes,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTaxPostTypes,onChange:l=>y(l,"selectedTaxPostTypes"),style:{width:"100%"}})})]})]}),(t.selectedTask===c.CREATE_POST_TYPE||t.selectedTask===c.CREATE_CONTENT_TYPE||t.selectedTask===c.UPDATE_POST_TYPE||t.selectedTask===c.UPDATE_CONTENT_TYPE)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:t.selectedMenuPosition||!1,onChange:l=>m(l,"menuPosition"),className:"wdt-200 mt-4 mr-2",value:"select_menu_position",title:a("Select Menu Position","bit-integrations"),subTitle:a("Select existing menu item to add page after.","bit-integrations"),isInfo:!d}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="menuPosition",close:N,action:N,title:a("Menu Position","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Position","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.menuPosition,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedMenuPosition,onChange:l=>y(l,"selectedMenuPosition"),style:{width:"100%"},singleSelect:!0})})]}),e.jsx(h,{checked:t.selectedMenuIcon||!1,onChange:l=>m(l,"menuIcon"),className:"wdt-200 mt-4 mr-2",value:"select_menu_icon",title:a("Select Menu Icon","bit-integrations"),subTitle:a("Icon will be visible in admin menu.","bit-integrations"),isInfo:!d}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="menuIcon",close:N,action:N,title:a("Menu Position","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Icon","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.menuIcon,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedMenuIcon,onChange:l=>y(l,"selectedMenuIcon"),style:{width:"100%"},singleSelect:!0})})]})]}),(t.selectedTask===c.CREATE_POST_TYPE||t.selectedTask===c.UPDATE_POST_TYPE)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:t.selectedSupports||!1,onChange:l=>m(l,"supports"),className:"wdt-200 mt-4 mr-2",value:"select_support",title:a("Select Supports","bit-integrations"),subTitle:a("Registers support of certain feature(s) for a current post type.","bit-integrations"),isInfo:!d}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="supports",close:N,action:N,title:a("Menu Position","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Supports","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.supports,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedSupports,onChange:l=>y(l,"selectedSupports"),style:{width:"100%"}})})]}),e.jsx(h,{checked:((x=t.actions)==null?void 0:x.custom_storage)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"custom_storage",title:a("Custom Meta Storage","bit-integrations"),subTitle:a("Store meta fields added below in the custom DB table instead of default `postmeta` table.","bit-integrations"),isInfo:!d})]}),(t.selectedTask===c.CREATE_POST_TYPE||t.selectedTask===c.CREATE_TAXONOMY||t.selectedTask===c.UPDATE_POST_TYPE||t.selectedTask===c.UPDATE_TAXONOMY)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:((_=t.actions)==null?void 0:_.delete_metadata)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"delete_metadata",title:a("Delete metadata","bit-integrations"),subTitle:a("Check this option to delete metadata from the database for the deleted meta fields.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((F=t.actions)==null?void 0:F.show_edit_link)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_edit_link",title:a("`Edit post type/meta box` link","bit-integrations"),subTitle:a("Add `Edit post type/meta box` link to post edit page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((D=t.actions)==null?void 0:D.hide_field_names)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"hide_field_names",title:a("Hide meta field names","bit-integrations"),subTitle:a("Hide meta field names on post edit page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((Y=t.actions)==null?void 0:Y.public)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"public",title:a("Is Public","bit-integrations"),subTitle:a("Controls how the type is visible to authors and readers.","bit-integrations"),isInfo:!d}),(t.selectedTask===c.CREATE_POST_TYPE||t.selectedTask===c.UPDATE_POST_TYPE)&&e.jsx(h,{checked:((L=t.actions)==null?void 0:L.exclude_from_search)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"exclude_from_search",title:a("Exclude From Search","bit-integrations"),subTitle:a("Whether to exclude posts with this post type from front end search results.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((U=t.actions)==null?void 0:U.publicly_queryable)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"publicly_queryable",title:a("Publicly Queryable","bit-integrations"),subTitle:a("Whether queries can be performed on the front end as part of parse_request().","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((V=t.actions)==null?void 0:V.show_ui)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_ui",title:a("Show Admin UI","bit-integrations"),subTitle:a("Whether to generate a default UI for managing this post type in the admin.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((X=t.actions)==null?void 0:X.show_in_menu)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_in_menu",title:a("Show in Admin Menu","bit-integrations"),subTitle:a("Where to show the post type in the admin menu. show_ui must be true.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:(($=t.actions)==null?void 0:$.show_in_nav_menus)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_in_nav_menus",title:a("Show in Nav Menu","bit-integrations"),subTitle:a("Whether post_type is available for selection in navigation menus.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((q=t.actions)==null?void 0:q.show_in_rest)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_in_rest",title:a("Show in Rest API","bit-integrations"),subTitle:a("Whether to expose this post type in the REST API. Also enable/disable Gutenberg editor for current post type.","bit-integrations"),isInfo:!d}),(t.selectedTask===c.CREATE_POST_TYPE||t.selectedTask===c.UPDATE_POST_TYPE)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:((W=t.actions)==null?void 0:W.query_var)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"query_var",title:a("Register Query Var","bit-integrations"),subTitle:a("Sets the query_var key for this post type.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((B=t.actions)==null?void 0:B.has_archive)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"has_archive",title:a("Map Meta Cap","bit-integrations"),subTitle:a("Whether to use the internal default meta capability handling.","bit-integrations"),isInfo:!d})]}),e.jsx(h,{checked:((H=t.actions)==null?void 0:H.hierarchical)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"hierarchical",title:t.selectedTask===c.CREATE_POST_TYPE?a("Hierarchical","bit-integrations"):a("Rewrite Hierarchical","bit-integrations"),subTitle:a(`${t.selectedTask===c.CREATE_POST_TYPE?"Whether the post type is hierarchical (e.g. page).":"Either hierarchical rewrite tag or not."}`,"bit-integrations"),isInfo:!d})]}),(t.selectedTask===c.CREATE_RELATION||t.selectedTask===c.UPDATE_RELATION)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:((z=t.actions)==null?void 0:z.parent_control)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"parent_control",title:a("Register controls for parent object","bit-integrations"),subTitle:a("Adds controls to manage related children items to the edit page of the parent object.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((G=t.actions)==null?void 0:G.parent_manager)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"parent_manager",title:a("Allow to create new children from parent","bit-integrations"),subTitle:a("If enabled, allows to create new children items from the related items control for parent object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((K=t.actions)==null?void 0:K.parent_allow_delete)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"parent_allow_delete",title:a("Allow to delete children from parent","bit-integrations"),subTitle:a("If enabled, allows to delete children items from the related items control for parent object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((Q=t.actions)==null?void 0:Q.child_control)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"child_control",title:a("Register controls for child object","bit-integrations"),subTitle:a("Adds controls to manage related parent items to the edit page of the child object.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((Z=t.actions)==null?void 0:Z.child_manager)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"child_manager",title:a("Allow to create new parents from children","bit-integrations"),subTitle:a("If enabled, allows to create new parent items from the related items control for child object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((g=t.actions)==null?void 0:g.child_allow_delete)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"child_allow_delete",title:a("Allow to delete parents from children","bit-integrations"),subTitle:a("If enabled, allows to delete parent items from the related items control for child object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((f=t.actions)==null?void 0:f.db_table)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"db_table",title:a("Register separate DB table","bit-integrations"),subTitle:a("Register separate DB tables to store current relation items and meta data. If you plan to create multiple relations with a big amount of items, this option will help optimize performance.","bit-integrations"),isInfo:!d})]})]})]})}const le=(t,s,i)=>{const r=T({},s);r.field_map.splice(t,0,{}),i(T({},r))},Te=(t,s,i)=>{const r=T({},s);r.field_map.length>1&&r.field_map.splice(t,1),i(T({},r))},ae=(t,s,i,r)=>{const b=T({},i);b.field_map[s][t.target.name]=t.target.value,t.target.value==="custom"&&(b.field_map[s].customValue=""),r(T({},b))};function ne({i:t,formFields:s,field:i,jetEngineConf:r,setJetEngineConf:b}){var d,u;const n=(r==null?void 0:r.staticFields.filter(p=>p.required===!0))||[],A=((d=r==null?void 0:r.staticFields)==null?void 0:d.filter(p=>p.required===!1))||[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:p=>ae(p,t,r,b),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:s==null?void 0:s.map(p=>e.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:"General Smart Codes",children:(u=me)==null?void 0:u.map(p=>e.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`))})]}),i.formField==="custom"&&e.jsx(ue,{onChange:p=>he(p,t,r,b),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:s}),e.jsxs("select",{className:"btcd-paper-inp",disabled:t<n.length,name:"jetEngineField",value:t<n?n[t].label||"":i.jetEngineField||"",onChange:p=>ae(p,t,r,b),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),t<n.length?e.jsx("option",{value:n[t].key,children:n[t].label},n[t].key):A.map(({key:p,label:m})=>e.jsx("option",{value:p,children:m},p))]})]}),e.jsx("div",{className:"flx integ-fld-wrp",children:t>=n.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>le(t,r,b),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Te(t,r,b),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function Pe({formFields:t,jetEngineConf:s,setJetEngineConf:i,loading:r,setLoading:b,setSnackbar:n}){var m,N,y,S;const A=o=>{const x=T({},s);if(x.selectedTask=o,o){const _=pe(o);x.staticFields=_.staticFields,x.field_map=_.fieldMap,o===c.CREATE_RELATION&&R(x,i,r,b),(o===c.UPDATE_POST_TYPE||o===c.DELETE_POST_TYPE)&&ee(x,i,r,b),(o===c.UPDATE_CONTENT_TYPE||o===c.DELETE_CONTENT_TYPE)&&se(x,i,r,b),(o===c.UPDATE_TAXONOMY||o===c.DELETE_TAXONOMY)&&te(x,i,r,b),(o===c.UPDATE_RELATION||o===c.DELETE_RELATION)&&C(x,i,r,b)}else x.staticFields=[],x.field_map=[];i(T({},x))},d=(o,x)=>{const _=T({},s);_.relOptions[x]=o,i(T({},_))},u=(o,x)=>{const _=T({},s);_[x]=o,i(T({},_))},p=(o,x)=>{const _=T({},s);o.target.checked?_.deleteFieldMap[x]=!0:_.deleteFieldMap[x]=!1,i(T({},_))};return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Task:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:be,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedTask,onChange:o=>A(o),singleSelect:!0})]}),(s.selectedTask===c.UPDATE_RELATION||s.selectedTask===c.DELETE_RELATION)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Relation:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:s==null?void 0:s.relationList,className:"msl-wrp-options",defaultValue:(m=s==null?void 0:s.relOptions)==null?void 0:m.selectedRelationForEdit,onChange:o=>d(o,"selectedRelationForEdit"),singleSelect:!0}),e.jsx("button",{onClick:()=>C(s,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh relation list","bit-integrations")}'`},type:"button",children:"↻"})]}),(s.selectedTask===c.CREATE_RELATION||s.selectedTask===c.UPDATE_RELATION)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Parent object:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:s==null?void 0:s.allRelationTypes,className:"msl-wrp-options",defaultValue:(N=s==null?void 0:s.relOptions)==null?void 0:N.parentObject,onChange:o=>d(o,"parentObject"),singleSelect:!0}),e.jsx("button",{onClick:()=>R(s,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh parent objects","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Child object:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:s==null?void 0:s.allRelationTypes,className:"msl-wrp-options",defaultValue:(y=s==null?void 0:s.relOptions)==null?void 0:y.childObject,onChange:o=>d(o,"childObject"),singleSelect:!0}),e.jsx("button",{onClick:()=>R(s,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh child objects","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Relation type:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:[{label:a("One to one","bit-integrations"),value:"one_to_one"},{label:a("One to many","bit-integrations"),value:"one_to_many"},{label:a("Many to many","bit-integrations"),value:"many_to_many"}],className:"msl-wrp-options",defaultValue:(S=s==null?void 0:s.relOptions)==null?void 0:S.selectedRelationType,onChange:o=>d(o,"selectedRelationType"),singleSelect:!0})]})]}),(s.selectedTask===c.UPDATE_POST_TYPE||s.selectedTask===c.DELETE_POST_TYPE)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Custom Post Type:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:s==null?void 0:s.cptList,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedCPT,onChange:o=>u(o,"selectedCPT"),singleSelect:!0}),e.jsx("button",{onClick:()=>ee(s,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CPT List","bit-integrations")}'`},type:"button",children:"↻"})]}),(s.selectedTask===c.UPDATE_CONTENT_TYPE||s.selectedTask===c.DELETE_CONTENT_TYPE)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Custom Content Type:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:s==null?void 0:s.cctList,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedCCT,onChange:o=>u(o,"selectedCCT"),singleSelect:!0}),e.jsx("button",{onClick:()=>se(s,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CCT List","bit-integrations")}'`},type:"button",children:"↻"})]}),(s.selectedTask===c.UPDATE_TAXONOMY||s.selectedTask===c.DELETE_TAXONOMY)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Taxonomy:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:s==null?void 0:s.taxList,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedTaxForEdit,onChange:o=>u(o,"selectedTaxForEdit"),singleSelect:!0}),e.jsx("button",{onClick:()=>te(s,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Tax List","bit-integrations")}'`},type:"button",children:"↻"})]}),(r.relation_types||r.cptList||r.cctList||r.taxList||r.relationList)&&e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),M.includes(s.selectedTask)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("span",{className:"action-delete-task-note",children:"To delete, you can select from the list above, or you can map fields."}),e.jsx(h,{checked:s.deleteFieldMap[s.selectedTask],onChange:o=>p(o,s.selectedTask),className:" ml-2",value:"delete_field_map",title:a("Map Fields","bit-integrations")})]})]}),(!M.includes(s.selectedTask)||M.includes(s.selectedTask)&&s.deleteFieldMap[s.selectedTask])&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("JetEngine Fields","bit-integrations")})})]}),(s==null?void 0:s.selectedTask)&&(s==null?void 0:s.field_map.map((o,x)=>e.jsx(ne,{i:x,field:o,jetEngineConf:s,formFields:t,setJetEngineConf:i,setSnackbar:n},`rp-m-${x+9}`))),(s==null?void 0:s.selectedTask)&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>le(s.field_map.length,s,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),s.selectedTask&&s.selectedTask!==c.DELETE_CONTENT_TYPE&&s.selectedTask!==c.DELETE_RELATION&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(xe,{jetEngineConf:s,setJetEngineConf:i,loading:r,setLoading:b})]})]})})}export{Pe as J};
