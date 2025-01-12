var O=Object.defineProperty,d=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable;var f=(e,i,t)=>i in e?O(e,i,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[i]=t,_=(e,i)=>{for(var t in i||(i={}))I.call(i,t)&&f(e,t,i[t]);if(T)for(var t of T(i))p.call(i,t)&&f(e,t,i[t]);return e},P=(e,i)=>d(e,S(i));import{_ as o,c as E,d as r}from"./bi.107.0.js";import{u as F}from"./bi.900.437.js";const l={NEW_POST:"newPost",NEW_COLLECTION_POST:"newCollectionPost",NEW_PROFILE:"newProfile",UPDATE_POST:"updatePost",UPDATE_COLLECTION_POST:"updateCollectionPost",UPDATE_PROFILE:"updateProfile",SET_POST_VERIFIED:"setPostVerified",SET_COLLECTION_POST_VERIFIED:"setCollectionPostVerified",SET_PROFILE_VERIFIED:"setProfileVerified"},L=[{label:o("Create New Post","bit-integrations"),value:l.NEW_POST},{label:o("Create New Collection Post","bit-integrations"),value:l.NEW_COLLECTION_POST},{label:o("Create New Profile","bit-integrations"),value:l.NEW_PROFILE},{label:o("Update Post","bit-integrations"),value:l.UPDATE_POST},{label:o("Update Collection Post","bit-integrations"),value:l.UPDATE_COLLECTION_POST},{label:o("Update Profile","bit-integrations"),value:l.UPDATE_PROFILE},{label:o("Set Post as Verified","bit-integrations"),value:l.SET_POST_VERIFIED},{label:o("Set Collection Post as Verified","bit-integrations"),value:l.SET_COLLECTION_POST_VERIFIED},{label:o("Set Profile as Verified","bit-integrations"),value:l.SET_PROFILE_VERIFIED}],g=[l.NEW_POST,l.NEW_COLLECTION_POST,l.UPDATE_POST,l.UPDATE_COLLECTION_POST],h="collection",D="profile",m=(e,i,t)=>{const n=F(i,a=>{const{name:s}=e.target;e.target.value!==""?a[s]=e.target.value:delete a[s]});t(n)},R=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.voxelField||!t.formField==="custom"&&!t.customValue):[]).length>0),w=(e,i,t,n,a)=>{if(!e.name){i({name:e.name?"":o("Name can't be empty","bit-integrations")});return}a(P(_({},n),{auth:!0})),E({},"voxel_authentication").then(s=>{if(s.success){t(!0),r.success(o("Connected Successfully","bit-integrations")),a(P(_({},n),{auth:!1}));return}a(P(_({},n),{auth:!1})),r.error(o(s!=null&&s.data?s.data:"Something went wrong!","bit-integrations"))})},v=(e,i,t,n)=>{n(P(_({},t),{postTypes:!0})),E({},"get_voxel_post_types").then(a=>{if(a.success&&a.data){const s=_({},e);s.postTypes=a.data,i(s),n(P(_({},t),{postTypes:!1})),r.success(o("Post Types fetched successfully","bit-integrations"));return}n(P(_({},t),{postTypes:!1})),r.error(a!=null&&a.data?a.data:o("Something went wrong!","bit-integrations"))})},A=(e,i,t,n,a)=>{a(P(_({},n),{postFields:!0})),E({postType:t,selectedTask:e.selectedTask},"get_voxel_post_fields").then(s=>{if(s.success&&s.data){const c=_({},e);c.voxelFields=s.data.fields,c.field_map=s.data.fieldMap,i(c),a(P(_({},n),{postFields:!1})),r.success(o("Fields fetched successfully","bit-integrations")),(c.selectedTask===l.UPDATE_POST||c.selectedTask===l.UPDATE_COLLECTION_POST)&&b(c,i,t,n,a);return}a(P(_({},n),{postFields:!1})),r.error(s!=null&&s.data?s.data:o("Something went wrong!","bit-integrations"))})},b=(e,i,t,n,a)=>{a(P(_({},n),{posts:!0})),E({postType:t},"get_voxel_posts").then(s=>{if(s.success&&s.data){const c=_({},e);c.posts=s.data,i(c),a(P(_({},n),{posts:!1})),r.success(o("Posts fetched successfully","bit-integrations"));return}a(P(_({},n),{posts:!1})),r.error(s!=null&&s.data?s.data:o("Something went wrong!","bit-integrations"))})},V=e=>e===l.SET_POST_VERIFIED||e===l.SET_COLLECTION_POST_VERIFIED?{staticFields:[{key:"post_id",label:o("Post ID","bit-integrations"),required:!0}],fieldMap:[{formField:"",voxelField:"post_id"}]}:e===l.SET_PROFILE_VERIFIED?{staticFields:[{key:"profile_id",label:o("Profile ID","bit-integrations"),required:!0}],fieldMap:[{formField:"",voxelField:"profile_id"}]}:{staticFields:[],fieldMap:[]};export{h as C,g as P,l as T,L as a,b,R as c,A as d,D as e,w as f,v as g,m as h,V as v};
