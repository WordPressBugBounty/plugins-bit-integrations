var m=Object.defineProperty,b=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var l=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(e,o,t)=>o in e?m(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))d.call(o,t)&&_(e,t,o[t]);if(l)for(var t of l(o))E.call(o,t)&&_(e,t,o[t]);return e},s=(e,o)=>b(e,T(o));import{_ as r,c as u,d as f}from"./bi.671.0.js";import{u as F}from"./bi.188.437.js";const c={USER_REPUTATION:"userReputation",ADD_TO_GROUP:"addToGroup",REMOVE_FROM_GROUP:"removeFromGroup",CREATE_TOPIC:"createTopic",DELETE_TOPIC:"deleteTopic"},w=[{label:r("Set User Reputation","bit-integrations"),value:c.USER_REPUTATION},{label:r("Add User to Group","bit-integrations"),value:c.ADD_TO_GROUP},{label:r("Remove User from Group","bit-integrations"),value:c.REMOVE_FROM_GROUP},{label:r("Create a New Topic","bit-integrations"),value:c.CREATE_TOPIC},{label:r("Delete a Topic","bit-integrations"),value:c.DELETE_TOPIC}],g=(e,o,t)=>{const i=F(o,a=>{const{name:p}=e.target;e.target.value!==""?a[p]=e.target.value:delete a[p]});t(i)},P=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.wpforoField||!t.formField==="custom"&&!t.customValue):[]).length>0),U=(e,o,t,i,a)=>{if(!e.name){o({name:e.name?"":r("Name can't be empty","bit-integrations")});return}a(s(n({},i),{auth:!0})),u({},"wpforo_authentication").then(p=>{if(p.success){t(!0),f.success(r("Connected Successfully","bit-integrations")),a(s(n({},i),{auth:!1}));return}a(s(n({},i),{auth:!1})),f.error(r("Connection failed: install and active WPForo plugin first!","bit-integrations"))})},S=(e,o,t)=>{t(s(n({},t),{reputation:!0})),u({},"wpforo_fetch_reputations").then(i=>{if(i&&i.success){const a=n({},e);i.data&&(a.reputations=i.data),o(a),t(s(n({},t),{reputation:!1})),f.success(r("Reputations fetch successfully","bit-integrations"));return}t(s(n({},t),{reputation:!1})),f.error(r(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},A=(e,o,t)=>{t(s(n({},t),{groups:!0})),u({},"wpforo_fetch_groups").then(i=>{if(i&&i.success){const a=n({},e);i.data&&(a.groups=i.data),o(a),t(s(n({},t),{groups:!1})),f.success(r("Groups fetch successfully","bit-integrations"));return}t(s(n({},t),{groups:!1})),f.error(r(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},I=(e,o,t)=>{t(s(n({},t),{forums:!0})),u({},"wpforo_fetch_forums").then(i=>{if(i&&i.data){const a=n({},e);a.forums=i.data,o(a),t(s(n({},t),{forums:!1})),f.success(r("Forums fetch successfully","bit-integrations"));return}t(s(n({},t),{forums:!1})),f.error(r(i!=null&&i.data?i.data:"Something went wrong!","bit-integrations"))})},C=(e,o,t,i)=>{i(s(n({},t),{topics:!0})),u({},"wpforo_fetch_topics").then(a=>{if(a&&a.data){const p=n({},e);p.topics=a.data,o(p),i(s(n({},t),{topics:!1})),f.success(r("Topics fetch successfully","bit-integrations"));return}i(s(n({},t),{topics:!1})),f.error(r(a!=null&&a.data?a.data:"Something went wrong!","bit-integrations"))})},G=e=>e===c.USER_REPUTATION||e===c.ADD_TO_GROUP||e===c.REMOVE_FROM_GROUP?{staticFields:[{key:"email",label:r("User Email","bit-integrations"),required:!0}],fieldMap:[{formField:"",wpforoField:"email"}]}:e===c.CREATE_TOPIC?{staticFields:[{key:"email",label:r("User Email","bit-integrations"),required:!0},{key:"topic_title",label:r("Topic Title","bit-integrations"),required:!0},{key:"topic_content",label:r("Topic Content","bit-integrations"),required:!0}],fieldMap:[{formField:"",wpforoField:"email"},{formField:"",wpforoField:"topic_title"},{formField:"",wpforoField:"topic_content"}]}:e===c.DELETE_TOPIC?{staticFields:[{key:"topic_id",label:r("Topic ID","bit-integrations"),required:!0}],fieldMap:[{formField:"",wpforoField:"topic_id"}]}:{staticFields:[],fieldMap:[]};export{c as T,A as a,I as b,P as c,w as d,C as e,U as f,S as g,g as h,G as w};
