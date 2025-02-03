var m=Object.defineProperty,u=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var f=(t,r,a)=>r in t?m(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,s=(t,r)=>{for(var a in r||(r={}))y.call(r,a)&&f(t,a,r[a]);if(c)for(var a of c(r))p.call(r,a)&&f(t,a,r[a]);return t},_=(t,r)=>u(t,g(r));import{_ as e,c as d,d as E}from"./bi.317.0.js";import{u as A}from"./bi.8.440.js";const n={CREATE_POST_TYPE:"createPostType",CREATE_CONTENT_TYPE:"createContentType",CREATE_TAXONOMY:"createTaxonomy",CREATE_RELATION:"createRelation",UPDATE_POST_TYPE:"updatePostType",UPDATE_CONTENT_TYPE:"updateContentType",UPDATE_TAXONOMY:"updateTaxonomy",UPDATE_RELATION:"updateRelation",DELETE_POST_TYPE:"deletePostType",DELETE_CONTENT_TYPE:"deleteContentType",DELETE_TAXONOMY:"deleteTaxonomy",DELETE_RELATION:"deleteRelation"},q=[{label:e("Add New Post Type","bit-integrations"),value:n.CREATE_POST_TYPE},{label:e("Add New Custom Content Type","bit-integrations"),value:n.CREATE_CONTENT_TYPE},{label:e("Add New Taxonomy","bit-integrations"),value:n.CREATE_TAXONOMY},{label:e("Add New Relation","bit-integrations"),value:n.CREATE_RELATION},{label:e("Update Post Type","bit-integrations"),value:n.UPDATE_POST_TYPE},{label:e("Update Custom Content Type","bit-integrations"),value:n.UPDATE_CONTENT_TYPE},{label:e("Update Taxonomy","bit-integrations"),value:n.UPDATE_TAXONOMY},{label:e("Update Relation","bit-integrations"),value:n.UPDATE_RELATION},{label:e("Delete Post Type","bit-integrations"),value:n.DELETE_POST_TYPE},{label:e("Delete Custom Content Type","bit-integrations"),value:n.DELETE_CONTENT_TYPE},{label:e("Delete Taxonomy","bit-integrations"),value:n.DELETE_TAXONOMY},{label:e("Delete Relation","bit-integrations"),value:n.DELETE_RELATION}],h=[n.DELETE_POST_TYPE,n.DELETE_CONTENT_TYPE,n.DELETE_TAXONOMY,n.DELETE_RELATION],R=(t,r,a)=>{const l=A(r,i=>{const{name:o}=t.target;t.target.value!==""?i[o]=t.target.value:delete i[o]});a(l)},F=t=>!((t!=null&&t.field_map?t.field_map.filter(a=>!a.formField||!a.jetEngineField||!a.formField==="custom"&&!a.customValue):[]).length>0),k=(t,r,a,l,i)=>{if(!t.name){r({name:t.name?"":e("Name can't be empty","bit-integrations")});return}i(_(s({},l),{auth:!0})),d({},"jetEngine_authentication").then(o=>{if(o.success){a(!0),E.success(e("Connected Successfully","bit-integrations")),i(_(s({},l),{auth:!1}));return}i(_(s({},l),{auth:!1})),E.error(e("Connection failed: install and active JetEngine plugin first!","bit-integrations"))})},w=(t,r,a,l,i,o)=>{t&&(o(_(s({},i),{cptOptions:!0})),d({},t).then(b=>{if(b.success&&b.data){const T=s({},r);T[l]=b.data,a(T),o(_(s({},i),{cptOptions:!1})),E.success(e("Menu Positions fetched successfully","bit-integrations"));return}o(_(s({},i),{cptOptions:!1})),E.error(e(b!=null&&b.data?b.data:"Something went wrong!","bit-integrations"))}))},O=(t,r,a,l)=>{l(_(s({},a),{relation_types:!0})),d({},"jetEngine_relation_types").then(i=>{if(i.success&&i.data){const o=s({},t);o.allRelationTypes=i.data,r(o),l(_(s({},a),{relation_types:!1})),E.success(e("Realtion object fetched successfully","bit-integrations"));return}l(_(s({},a),{relation_types:!1})),E.error(e(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},D=(t,r,a,l)=>{l(_(s({},a),{cptList:!0})),d({},"jetEngine_cpt_list").then(i=>{if(i.success&&i.data){const o=s({},t);o.cptList=i.data,r(o),l(_(s({},a),{cptList:!1})),E.success(e("CPT list fetched successfully","bit-integrations"));return}l(_(s({},a),{cptList:!1})),E.error(e(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},L=(t,r,a,l)=>{l(_(s({},a),{cctList:!0})),d({},"jetEngine_cct_list").then(i=>{if(i.success&&i.data){const o=s({},t);o.cctList=i.data,r(o),l(_(s({},a),{cctList:!1})),E.success(e("CCT list fetched successfully","bit-integrations"));return}l(_(s({},a),{cctList:!1})),E.error(e(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},Y=(t,r,a,l)=>{l(_(s({},a),{taxList:!0})),d({},"jetEngine_tax_list").then(i=>{if(i.success&&i.data){const o=s({},t);o.taxList=i.data,r(o),l(_(s({},a),{taxList:!1})),E.success(e("Taxonomy list fetched successfully","bit-integrations"));return}l(_(s({},a),{taxList:!1})),E.error(e(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},x=(t,r,a,l)=>{l(_(s({},a),{relationList:!0})),d({},"jetEngine_relation_list").then(i=>{if(i.success&&i.data){const o=s({},t);o.relationList=i.data,r(o),l(_(s({},a),{relationList:!1})),E.success(e("Taxonomy list fetched successfully","bit-integrations")),o.selectedTask!==n.DELETE_RELATION&&O(o,r,a,l);return}l(_(s({},a),{relationList:!1})),E.error(e(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},I=t=>t===n.CREATE_POST_TYPE||t===n.UPDATE_POST_TYPE?{staticFields:[{key:"name",label:e("Post Type Name","bit-integrations"),required:t===n.CREATE_POST_TYPE},{key:"singular_name",label:e("Singular Name","bit-integrations"),required:!1},{key:"add_new",label:e("Add New","bit-integrations"),required:!1},{key:"add_new_item",label:e("Add New Item","bit-integrations"),required:!1},{key:"new_item",label:e("New Item","bit-integrations"),required:!1},{key:"edit_item",label:e("Edit Item","bit-integrations"),required:!1},{key:"view_item",label:e("View Item","bit-integrations"),required:!1},{key:"all_items",label:e("All Items","bit-integrations"),required:!1},{key:"search_items",label:e("Search for items","bit-integrations"),required:!1},{key:"parent_item_colon",label:e("Parent Item","bit-integrations"),required:!1},{key:"not_found",label:e("Not Found","bit-integrations"),required:!1},{key:"not_found_in_trash",label:e("Not Found In trash","bit-integrations"),required:!1},{key:"menu_name",label:e("Admin Menu","bit-integrations"),required:!1},{key:"name_admin_bar",label:e("Add New on Toolbar","bit-integrations"),required:!1},{key:"featured_image",label:e("Featured Image","bit-integrations"),required:!1},{key:"set_featured_image",label:e("Set Featured Image","bit-integrations"),required:!1},{key:"remove_featured_image",label:e("Remove Featured Image","bit-integrations"),required:!1},{key:"use_featured_image",label:e("Use Featured Image","bit-integrations"),required:!1},{key:"archives",label:e("The post type archive label used in nav menus","bit-integrations"),required:!1},{key:"insert_into_item",label:e("Insert into post","bit-integrations"),required:!1},{key:"uploaded_to_this_item",label:e("Uploaded to this post","bit-integrations"),required:!1}],fieldMap:t===n.CREATE_POST_TYPE?[{formField:"",jetEngineField:"name"}]:[{formField:"",jetEngineField:""}]}:t===n.CREATE_CONTENT_TYPE||t===n.UPDATE_CONTENT_TYPE?{staticFields:[{key:"name",label:e("Content Type Name","bit-integrations"),required:t===n.CREATE_CONTENT_TYPE},{key:"capability",label:e("Content Type UI Access Capability","bit-integrations"),required:!1}],fieldMap:t===n.CREATE_CONTENT_TYPE?[{formField:"",jetEngineField:"name"}]:[{formField:"",jetEngineField:""}]}:t===n.CREATE_TAXONOMY||t===n.UPDATE_TAXONOMY?{staticFields:[{key:"name",label:e("Taxonomy Name","bit-integrations"),required:t===n.CREATE_TAXONOMY},{key:"singular_name",label:e("Singular name","bit-integrations"),required:!1},{key:"menu_name",label:e("Menu name text","bit-integrations"),required:!1},{key:"all_items",label:e("All items text","bit-integrations"),required:!1},{key:"edit_item",label:e("Edit item text","bit-integrations"),required:!1},{key:"view_item",label:e("View Item","bit-integrations"),required:!1},{key:"update_item",label:e("Update item text","bit-integrations"),required:!1},{key:"add_new_item",label:e("Add new item text","bit-integrations"),required:!1},{key:"new_item_name",label:e("New item name text","bit-integrations"),required:!1},{key:"parent_item",label:e("Parent item text","bit-integrations"),required:!1},{key:"parent_item_colon",label:e("Parent item with colon","bit-integrations"),required:!1},{key:"search_items",label:e("Search items text","bit-integrations"),required:!1},{key:"popular_items",label:e("Popular items text","bit-integrations"),required:!1},{key:"separate_items_with_commas",label:e("Separate item with commas text","bit-integrations"),required:!1},{key:"add_or_remove_items",label:e("Add or remove items text","bit-integrations"),required:!1},{key:"choose_from_most_used",label:e("Choose from most used text","bit-integrations"),required:!1},{key:"not_found",label:e("Items not found text","bit-integrations"),required:!1},{key:"back_to_items",label:e("Back to items text","bit-integrations"),required:!1},{key:"query_var",label:e("Register Query Var","bit-integrations"),required:!1},{key:"capability_type",label:e("Capability Type","bit-integrations"),required:!1},{key:"description",label:e("Taxonomy Description","bit-integrations"),required:!1}],fieldMap:t===n.CREATE_TAXONOMY?[{formField:"",jetEngineField:"name"}]:[{formField:"",jetEngineField:""}]}:t===n.CREATE_RELATION||t===n.UPDATE_RELATION?{staticFields:[{key:"name",label:e("Relation Name","bit-integrations"),required:t===n.CREATE_RELATION},{key:"parent_page_control_title",label:e("Parent Object: label of relation box","bit-integrations"),required:!1},{key:"parent_page_control_connect",label:e("Parent Object: label of connect button","bit-integrations"),required:!1},{key:"parent_page_control_select",label:e("Parent Object: label of select item control","bit-integrations"),required:!1},{key:"child_page_control_title",label:e("Child Object: label of relation box","bit-integrations"),required:!1},{key:"child_page_control_connect",label:e("Child Object: label of connect button","bit-integrations"),required:!1},{key:"child_page_control_select",label:e("Child Object: label of select item control","bit-integrations"),required:!1}],fieldMap:t===n.CREATE_RELATION?[{formField:"",jetEngineField:"name"}]:[{formField:"",jetEngineField:""}]}:t===n.DELETE_POST_TYPE?{staticFields:[{key:"post_type_id",label:"Post Type ID",required:!0}],fieldMap:[{formField:"",jetEngineField:"post_type_id"}]}:t===n.DELETE_CONTENT_TYPE?{staticFields:[{key:"content_type_id",label:"Content Type ID",required:!0}],fieldMap:[{formField:"",jetEngineField:"content_type_id"}]}:t===n.DELETE_TAXONOMY?{staticFields:[{key:"tax_id",label:"Taxonomy ID",required:!0}],fieldMap:[{formField:"",jetEngineField:"tax_id"}]}:t===n.DELETE_RELATION?{staticFields:[{key:"relation_id",label:"Relation ID",required:!0}],fieldMap:[{formField:"",jetEngineField:"relation_id"}]}:{staticFields:[],fieldMap:[]};export{h as D,n as T,q as a,x as b,F as c,O as d,D as e,L as f,w as g,R as h,Y as i,I as j,k};
