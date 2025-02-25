var ie=Object.defineProperty;var J=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable;var j=(s,t,i)=>t in s?ie(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i,T=(s,t)=>{for(var i in t||(t={}))ce.call(t,i)&&j(s,i,t[i]);if(J)for(var i of J(t))re.call(t,i)&&j(s,i,t[i]);return s};import{r as E,f as oe,j as e,L as v}from"./main-212.js";import{x as w,a9 as de}from"./bi.894.440.js";import{e as me,_ as a}from"./bi.717.0.js";import{b as h}from"./bi.830.11.js";import{T as c,D as M,g as I,a as he,b as C,d as R,e as ee,f as te,i as se,j as be}from"./bi.937.933.js";import{a as O}from"./bi.303.9.js";import{a as pe,h as ue}from"./bi.164.3.js";import{T as xe}from"./bi.870.692.js";function Te({jetEngineConf:s,setJetEngineConf:t,loading:i,setLoading:r}){var S,o,x,_,F,D,Y,L,U,V,q,X,$,W,B,H,g,z,G,K,Q,f,Z;const[b,n]=E.useState({show:!1}),A=oe(me),{isPro:d}=A,[u,p]=E.useState({}),m=(l,k)=>{const P=T({},s);k==="checkbox"?l.target.checked?P.actions[l.target.value]=!0:delete P.actions[l.target.value]:k==="menuPosition"?(I("jetEngine_menu_positions",u,p,k,i,r),n({show:"menuPosition"})):k==="menuIcon"?(I("jetEngine_menu_icons",u,p,k,i,r),n({show:"menuIcon"})):k==="supports"?(I("jetEngine_supports",u,p,k,i,r),n({show:"supports"})):k==="taxPostTypes"&&(I("jetEngine_tax_post_types",u,p,k,i,r),n({show:"taxPostTypes"})),t(T({},P))},N=()=>{n({show:!1})},y=(l,k)=>{const P=T({},s);P[k]=l,t(T({},P))};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[!d&&(s.selectedTask===c.CREATE_TAXONOMY||s.selectedTask===c.UPDATE_TAXONOMY)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:s.selectedTaxPostTypes||!1,onChange:l=>m(l,"taxPostTypes"),className:"wdt-200 mt-4 mr-2",value:"select_menu_post_type",title:a("Select Post Type","bit-integrations"),subTitle:a("Select post types to add this taxonomy for.","bit-integrations")}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="taxPostTypes",close:N,action:N,title:a("Post Types","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Position","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.taxPostTypes,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedTaxPostTypes,onChange:l=>y(l,"selectedTaxPostTypes"),style:{width:"100%"}})})]})]}),s.selectedTask===c.DELETE_POST_TYPE&&e.jsx(e.Fragment,{children:e.jsx(h,{checked:((S=s.actions)==null?void 0:S.delete_all_posts)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"delete_all_posts",title:a("Delete All Posts","bit-integrations"),subTitle:a("Delete all posts related to the post type.","bit-integrations")})}),s.selectedTask===c.DELETE_TAXONOMY&&e.jsx(e.Fragment,{children:e.jsx(h,{checked:((o=s.actions)==null?void 0:o.delete_all_tax_terms)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"delete_all_tax_terms",title:a("Delete All Terms","bit-integrations"),subTitle:a("Delete all terms related to the taxonomy.","bit-integrations")})})]}),!d&&!M.includes(s.selectedTask)&&e.jsx("div",{className:"pt-2",children:e.jsx("span",{className:"actions-note",children:a("The Bit Integrations Pro plugin needs to be installed and activated to utilize these features","bit-integrations")})}),e.jsxs("div",{className:"pos-rel d-flx flx-wrp",children:[(s.selectedTask===c.CREATE_TAXONOMY||s.selectedTask===c.UPDATE_TAXONOMY)&&d&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:s.selectedTaxPostTypes||!1,onChange:l=>m(l,"taxPostTypes"),className:"wdt-200 mt-4 mr-2",value:"select_menu_post_type",title:a("Select Post Type","bit-integrations"),subTitle:a("Select post types to add this taxonomy for.","bit-integrations")}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="taxPostTypes",close:N,action:N,title:a("Post Types","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Position","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.taxPostTypes,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedTaxPostTypes,onChange:l=>y(l,"selectedTaxPostTypes"),style:{width:"100%"}})})]})]}),(s.selectedTask===c.CREATE_POST_TYPE||s.selectedTask===c.CREATE_CONTENT_TYPE||s.selectedTask===c.UPDATE_POST_TYPE||s.selectedTask===c.UPDATE_CONTENT_TYPE)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:s.selectedMenuPosition||!1,onChange:l=>m(l,"menuPosition"),className:"wdt-200 mt-4 mr-2",value:"select_menu_position",title:a("Select Menu Position","bit-integrations"),subTitle:a("Select existing menu item to add page after.","bit-integrations"),isInfo:!d}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="menuPosition",close:N,action:N,title:a("Menu Position","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Position","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.menuPosition,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedMenuPosition,onChange:l=>y(l,"selectedMenuPosition"),style:{width:"100%"},singleSelect:!0})})]}),e.jsx(h,{checked:s.selectedMenuIcon||!1,onChange:l=>m(l,"menuIcon"),className:"wdt-200 mt-4 mr-2",value:"select_menu_icon",title:a("Select Menu Icon","bit-integrations"),subTitle:a("Icon will be visible in admin menu.","bit-integrations"),isInfo:!d}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="menuIcon",close:N,action:N,title:a("Menu Position","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Menu Icon","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.menuIcon,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedMenuIcon,onChange:l=>y(l,"selectedMenuIcon"),style:{width:"100%"},singleSelect:!0})})]})]}),(s.selectedTask===c.CREATE_POST_TYPE||s.selectedTask===c.UPDATE_POST_TYPE)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:s.selectedSupports||!1,onChange:l=>m(l,"supports"),className:"wdt-200 mt-4 mr-2",value:"select_support",title:a("Select Supports","bit-integrations"),subTitle:a("Registers support of certain feature(s) for a current post type.","bit-integrations"),isInfo:!d}),e.jsxs(O,{className:"custom-conf-mdl",mainMdlCls:"o-v",btnClass:"blue",btnTxt:a("Ok","bit-integrations"),show:b.show==="supports",close:N,action:N,title:a("Menu Position","bit-integrations"),children:[e.jsx("div",{className:"btcd-hr mt-2 mb-2"}),e.jsx("div",{className:"mt-2 flx",children:a("Select Supports","bit-integrations")}),i.cptOptions?e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}):e.jsx("div",{className:"mt-2",children:e.jsx(w,{options:u==null?void 0:u.supports,className:"msl-wrp-options",defaultValue:s==null?void 0:s.selectedSupports,onChange:l=>y(l,"selectedSupports"),style:{width:"100%"}})})]}),e.jsx(h,{checked:((x=s.actions)==null?void 0:x.custom_storage)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"custom_storage",title:a("Custom Meta Storage","bit-integrations"),subTitle:a("Store meta fields added below in the custom DB table instead of default `postmeta` table.","bit-integrations"),isInfo:!d})]}),(s.selectedTask===c.CREATE_POST_TYPE||s.selectedTask===c.CREATE_TAXONOMY||s.selectedTask===c.UPDATE_POST_TYPE||s.selectedTask===c.UPDATE_TAXONOMY)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:((_=s.actions)==null?void 0:_.delete_metadata)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"delete_metadata",title:a("Delete metadata","bit-integrations"),subTitle:a("Check this option to delete metadata from the database for the deleted meta fields.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((F=s.actions)==null?void 0:F.show_edit_link)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_edit_link",title:a("`Edit post type/meta box` link","bit-integrations"),subTitle:a("Add `Edit post type/meta box` link to post edit page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((D=s.actions)==null?void 0:D.hide_field_names)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"hide_field_names",title:a("Hide meta field names","bit-integrations"),subTitle:a("Hide meta field names on post edit page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((Y=s.actions)==null?void 0:Y.public)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"public",title:a("Is Public","bit-integrations"),subTitle:a("Controls how the type is visible to authors and readers.","bit-integrations"),isInfo:!d}),(s.selectedTask===c.CREATE_POST_TYPE||s.selectedTask===c.UPDATE_POST_TYPE)&&e.jsx(h,{checked:((L=s.actions)==null?void 0:L.exclude_from_search)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"exclude_from_search",title:a("Exclude From Search","bit-integrations"),subTitle:a("Whether to exclude posts with this post type from front end search results.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((U=s.actions)==null?void 0:U.publicly_queryable)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"publicly_queryable",title:a("Publicly Queryable","bit-integrations"),subTitle:a("Whether queries can be performed on the front end as part of parse_request().","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((V=s.actions)==null?void 0:V.show_ui)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_ui",title:a("Show Admin UI","bit-integrations"),subTitle:a("Whether to generate a default UI for managing this post type in the admin.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((q=s.actions)==null?void 0:q.show_in_menu)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_in_menu",title:a("Show in Admin Menu","bit-integrations"),subTitle:a("Where to show the post type in the admin menu. show_ui must be true.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((X=s.actions)==null?void 0:X.show_in_nav_menus)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_in_nav_menus",title:a("Show in Nav Menu","bit-integrations"),subTitle:a("Whether post_type is available for selection in navigation menus.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:(($=s.actions)==null?void 0:$.show_in_rest)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"show_in_rest",title:a("Show in Rest API","bit-integrations"),subTitle:a("Whether to expose this post type in the REST API. Also enable/disable Gutenberg editor for current post type.","bit-integrations"),isInfo:!d}),(s.selectedTask===c.CREATE_POST_TYPE||s.selectedTask===c.UPDATE_POST_TYPE)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:((W=s.actions)==null?void 0:W.query_var)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"query_var",title:a("Register Query Var","bit-integrations"),subTitle:a("Sets the query_var key for this post type.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((B=s.actions)==null?void 0:B.has_archive)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"has_archive",title:a("Map Meta Cap","bit-integrations"),subTitle:a("Whether to use the internal default meta capability handling.","bit-integrations"),isInfo:!d})]}),e.jsx(h,{checked:((H=s.actions)==null?void 0:H.hierarchical)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"hierarchical",title:s.selectedTask===c.CREATE_POST_TYPE?a("Hierarchical","bit-integrations"):a("Rewrite Hierarchical","bit-integrations"),subTitle:a(`${s.selectedTask===c.CREATE_POST_TYPE?"Whether the post type is hierarchical (e.g. page).":"Either hierarchical rewrite tag or not."}`,"bit-integrations"),isInfo:!d})]}),(s.selectedTask===c.CREATE_RELATION||s.selectedTask===c.UPDATE_RELATION)&&e.jsxs(e.Fragment,{children:[e.jsx(h,{checked:((g=s.actions)==null?void 0:g.parent_control)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"parent_control",title:a("Register controls for parent object","bit-integrations"),subTitle:a("Adds controls to manage related children items to the edit page of the parent object.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((z=s.actions)==null?void 0:z.parent_manager)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"parent_manager",title:a("Allow to create new children from parent","bit-integrations"),subTitle:a("If enabled, allows to create new children items from the related items control for parent object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((G=s.actions)==null?void 0:G.parent_allow_delete)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"parent_allow_delete",title:a("Allow to delete children from parent","bit-integrations"),subTitle:a("If enabled, allows to delete children items from the related items control for parent object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((K=s.actions)==null?void 0:K.child_control)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"child_control",title:a("Register controls for child object","bit-integrations"),subTitle:a("Adds controls to manage related parent items to the edit page of the child object.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((Q=s.actions)==null?void 0:Q.child_manager)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"child_manager",title:a("Allow to create new parents from children","bit-integrations"),subTitle:a("If enabled, allows to create new parent items from the related items control for child object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((f=s.actions)==null?void 0:f.child_allow_delete)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"child_allow_delete",title:a("Allow to delete parents from children","bit-integrations"),subTitle:a("If enabled, allows to delete parent items from the related items control for child object page.","bit-integrations"),isInfo:!d}),e.jsx(h,{checked:((Z=s.actions)==null?void 0:Z.db_table)||!1,onChange:l=>m(l,"checkbox"),className:"wdt-200 mt-4 mr-2",value:"db_table",title:a("Register separate DB table","bit-integrations"),subTitle:a("Register separate DB tables to store current relation items and meta data. If you plan to create multiple relations with a big amount of items, this option will help optimize performance.","bit-integrations"),isInfo:!d})]})]})]})}const le=(s,t,i)=>{const r=T({},t);r.field_map.splice(s,0,{}),i(T({},r))},ne=(s,t,i)=>{const r=T({},t);r.field_map.length>1&&r.field_map.splice(s,1),i(T({},r))},ae=(s,t,i,r)=>{const b=T({},i);b.field_map[t][s.target.name]=s.target.value,s.target.value==="custom"&&(b.field_map[t].customValue=""),r(T({},b))};function _e({i:s,formFields:t,field:i,jetEngineConf:r,setJetEngineConf:b}){var d,u;const n=(r==null?void 0:r.staticFields.filter(p=>p.required===!0))||[],A=((d=r==null?void 0:r.staticFields)==null?void 0:d.filter(p=>p.required===!1))||[];return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:i.formField||"",onChange:p=>ae(p,s,r,b),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),e.jsx("optgroup",{label:a("Form Fields","bit-integrations"),children:t==null?void 0:t.map(p=>e.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`))}),e.jsx("option",{value:"custom",children:a("Custom...","bit-integrations")}),e.jsx("optgroup",{label:"General Smart Codes",children:(u=pe)==null?void 0:u.map(p=>e.jsx("option",{value:p.name,children:p.label},`ff-rm-${p.name}`))})]}),i.formField==="custom"&&e.jsx(xe,{onChange:p=>ue(p,s,r,b),label:a("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:i.customValue,placeholder:a("Custom Value","bit-integrations"),formFields:t}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<n.length,name:"jetEngineField",value:s<n?n[s].label||"":i.jetEngineField||"",onChange:p=>ae(p,s,r,b),children:[e.jsx("option",{value:"",children:a("Select Field","bit-integrations")}),s<n.length?e.jsx("option",{value:n[s].key,children:n[s].label},n[s].key):A.map(({key:p,label:m})=>e.jsx("option",{value:p,children:m},p))]})]}),e.jsx("div",{className:"flx integ-fld-wrp",children:s>=n.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>le(s,r,b),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>ne(s,r,b),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})})]})})}function Ie({formFields:s,jetEngineConf:t,setJetEngineConf:i,loading:r,setLoading:b,setSnackbar:n}){var m,N,y,S;const A=o=>{const x=T({},t);if(x.selectedTask=o,o){const _=be(o);x.staticFields=_.staticFields,x.field_map=_.fieldMap,o===c.CREATE_RELATION&&R(x,i,r,b),(o===c.UPDATE_POST_TYPE||o===c.DELETE_POST_TYPE)&&ee(x,i,r,b),(o===c.UPDATE_CONTENT_TYPE||o===c.DELETE_CONTENT_TYPE)&&te(x,i,r,b),(o===c.UPDATE_TAXONOMY||o===c.DELETE_TAXONOMY)&&se(x,i,r,b),(o===c.UPDATE_RELATION||o===c.DELETE_RELATION)&&C(x,i,r,b)}else x.staticFields=[],x.field_map=[];i(T({},x))},d=(o,x)=>{const _=T({},t);_.relOptions[x]=o,i(T({},_))},u=(o,x)=>{const _=T({},t);_[x]=o,i(T({},_))},p=(o,x)=>{const _=T({},t);o.target.checked?_.deleteFieldMap[x]=!0:_.deleteFieldMap[x]=!1,i(T({},_))};return e.jsx(e.Fragment,{children:e.jsxs("div",{children:[e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Task:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:he,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTask,onChange:o=>A(o),singleSelect:!0})]}),(t.selectedTask===c.UPDATE_RELATION||t.selectedTask===c.DELETE_RELATION)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Relation:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:t==null?void 0:t.relationList,className:"msl-wrp-options",defaultValue:(m=t==null?void 0:t.relOptions)==null?void 0:m.selectedRelationForEdit,onChange:o=>d(o,"selectedRelationForEdit"),singleSelect:!0}),e.jsx("button",{onClick:()=>C(t,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh relation list","bit-integrations")}'`},type:"button",children:"↻"})]}),(t.selectedTask===c.CREATE_RELATION||t.selectedTask===c.UPDATE_RELATION)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Parent object:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:t==null?void 0:t.allRelationTypes,className:"msl-wrp-options",defaultValue:(N=t==null?void 0:t.relOptions)==null?void 0:N.parentObject,onChange:o=>d(o,"parentObject"),singleSelect:!0}),e.jsx("button",{onClick:()=>R(t,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh parent objects","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Child object:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:t==null?void 0:t.allRelationTypes,className:"msl-wrp-options",defaultValue:(y=t==null?void 0:t.relOptions)==null?void 0:y.childObject,onChange:o=>d(o,"childObject"),singleSelect:!0}),e.jsx("button",{onClick:()=>R(t,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh child objects","bit-integrations")}'`},type:"button",children:"↻"})]}),e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Relation type:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:[{label:a("One to one","bit-integrations"),value:"one_to_one"},{label:a("One to many","bit-integrations"),value:"one_to_many"},{label:a("Many to many","bit-integrations"),value:"many_to_many"}],className:"msl-wrp-options",defaultValue:(S=t==null?void 0:t.relOptions)==null?void 0:S.selectedRelationType,onChange:o=>d(o,"selectedRelationType"),singleSelect:!0})]})]}),(t.selectedTask===c.UPDATE_POST_TYPE||t.selectedTask===c.DELETE_POST_TYPE)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Custom Post Type:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:t==null?void 0:t.cptList,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedCPT,onChange:o=>u(o,"selectedCPT"),singleSelect:!0}),e.jsx("button",{onClick:()=>ee(t,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CPT List","bit-integrations")}'`},type:"button",children:"↻"})]}),(t.selectedTask===c.UPDATE_CONTENT_TYPE||t.selectedTask===c.DELETE_CONTENT_TYPE)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Custom Content Type:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:t==null?void 0:t.cctList,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedCCT,onChange:o=>u(o,"selectedCCT"),singleSelect:!0}),e.jsx("button",{onClick:()=>te(t,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh CCT List","bit-integrations")}'`},type:"button",children:"↻"})]}),(t.selectedTask===c.UPDATE_TAXONOMY||t.selectedTask===c.DELETE_TAXONOMY)&&e.jsxs("div",{className:"flx mt-3 mb-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:a("Select Taxonomy:","bit-integrations")}),e.jsx(w,{style:{width:"450px"},options:t==null?void 0:t.taxList,className:"msl-wrp-options",defaultValue:t==null?void 0:t.selectedTaxForEdit,onChange:o=>u(o,"selectedTaxForEdit"),singleSelect:!0}),e.jsx("button",{onClick:()=>se(t,i,r,b),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh Tax List","bit-integrations")}'`},type:"button",children:"↻"})]}),(r.relation_types||r.cptList||r.cctList||r.taxList||r.relationList)&&e.jsx(v,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:45,transform:"scale(0.5)"}}),M.includes(t.selectedTask)&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsxs("div",{className:"flx",children:[e.jsx("span",{className:"action-delete-task-note",children:"To delete, you can select from the list above, or you can map fields."}),e.jsx(h,{checked:t.deleteFieldMap[t.selectedTask],onChange:o=>p(o,t.selectedTask),className:" ml-2",value:"delete_field_map",title:a("Map Fields","bit-integrations")})]})]}),(!M.includes(t.selectedTask)||M.includes(t.selectedTask)&&t.deleteFieldMap[t.selectedTask])&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-5",children:e.jsx("b",{className:"wdt-100",children:a("Field Map","bit-integrations")})}),e.jsx("br",{}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:a("JetEngine Fields","bit-integrations")})})]}),(t==null?void 0:t.selectedTask)&&(t==null?void 0:t.field_map.map((o,x)=>e.jsx(_e,{i:x,field:o,jetEngineConf:t,formFields:s,setJetEngineConf:i,setSnackbar:n},`rp-m-${x+9}`))),(t==null?void 0:t.selectedTask)&&e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>le(t.field_map.length,t,i),className:"icn-btn sh-sm",type:"button",children:"+"})})]}),e.jsx(de,{note:a("The Jet Engine Action requires user login to perform any of the tasks listed above (as webhook does not indicate whether the user is logged in or not, any trigger that uses webhook will not be functional).","bit-integrations")}),t.selectedTask&&t.selectedTask!==c.DELETE_CONTENT_TYPE&&t.selectedTask!==c.DELETE_RELATION&&e.jsxs("div",{children:[e.jsx("br",{}),e.jsx("br",{}),e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:a("Utilities","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsx(Te,{jetEngineConf:t,setJetEngineConf:i,loading:r,setLoading:b})]})]})})}export{Ie as J};
