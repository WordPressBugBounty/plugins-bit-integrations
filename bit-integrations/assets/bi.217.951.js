var f=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var d=(i,t,l)=>t in i?f(i,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[t]=l,o=(i,t)=>{for(var l in t||(t={}))F.call(t,l)&&d(i,l,t[l]);if(u)for(var l of u(t))y.call(t,l)&&d(i,l,t[l]);return i},n=(i,t)=>m(i,g(t));import{_ as e,c,V as b}from"./bi.560.0.js";import{u as p}from"./bi.675.443.js";const C=(i,t,l)=>{const a=p(t,r=>{const{name:s}=i.target;i.target.value!==""?r[s]=i.target.value:delete r[s]});l(a)},h=i=>{const t=i==null?void 0:i.staticFields.filter(l=>l.required===!0);return t.length>0?t.map(l=>({formField:"",newsletterFormField:l.key})):[{formField:"",newsletterFormField:""}]},v=i=>!((i!=null&&i.field_map?i.field_map.filter(l=>!l.formField||!l.newsletterFormField||!l.formField==="custom"&&!l.customValue):[]).length>0),N=(i,t,l,a,r)=>{if(!i.name){t({name:i.name?"":e("Name can't be empty","bit-integrations")});return}r(n(o({},a),{auth:!0})),c({},"newsletter_authentication").then(s=>{if(s.success){l(!0),b.success(e("Connected Successfully","bit-integrations")),r(n(o({},a),{auth:!1}));return}r(n(o({},a),{auth:!1})),b.error(e("Connection failed: install and active Newsletter plugin first!","bit-integrations"))})},S=[{key:"email",label:e("Email","bit-integrations"),required:!0},{key:"name",label:e("First Name","bit-integrations"),required:!1},{key:"surname",label:e("Last Name","bit-integrations"),required:!1},{key:"status",label:e("Status","bit-integrations"),required:!1},{key:"gender",label:e("Gender","bit-integrations"),required:!1},{key:"country",label:e("Country Code","bit-integrations"),required:!1},{key:"region",label:e("Region","bit-integrations"),required:!1},{key:"city",label:e("City","bit-integrations"),required:!1},{key:"profile_1",label:e("Custom Field 1","bit-integrations"),required:!1},{key:"profile_2",label:e("Custom Field 2","bit-integrations"),required:!1},{key:"profile_3",label:e("Custom Field 3","bit-integrations"),required:!1},{key:"profile_4",label:e("Custom Field 4","bit-integrations"),required:!1},{key:"profile_5",label:e("Custom Field 5","bit-integrations"),required:!1},{key:"profile_6",label:e("Custom Field 6","bit-integrations"),required:!1},{key:"profile_7",label:e("Custom Field 7","bit-integrations"),required:!1},{key:"profile_8",label:e("Custom Field 8","bit-integrations"),required:!1},{key:"profile_9",label:e("Custom Field 9","bit-integrations"),required:!1},{key:"profile_10",label:e("Custom Field 10","bit-integrations"),required:!1},{key:"profile_11",label:e("Custom Field 11","bit-integrations"),required:!1},{key:"profile_12",label:e("Custom Field 12","bit-integrations"),required:!1},{key:"profile_13",label:e("Custom Field 13","bit-integrations"),required:!1},{key:"profile_14",label:e("Custom Field 14","bit-integrations"),required:!1},{key:"profile_15",label:e("Custom Field 15","bit-integrations"),required:!1},{key:"profile_16",label:e("Custom Field 16","bit-integrations"),required:!1},{key:"profile_17",label:e("Custom Field 17","bit-integrations"),required:!1},{key:"profile_18",label:e("Custom Field 18","bit-integrations"),required:!1},{key:"profile_19",label:e("Custom Field 19","bit-integrations"),required:!1},{key:"profile_20",label:e("Custom Field 20","bit-integrations"),required:!1}],V=()=>{const i=[];for(let t=1;t<=40;t++)i.push({label:"List "+t,value:t.toString()});return i};export{v as c,h as g,C as h,V as l,N as n,S as s};
