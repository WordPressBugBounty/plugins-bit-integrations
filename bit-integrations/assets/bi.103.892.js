var f=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var o=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,a,t)=>a in e?f(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,c=(e,a)=>{for(var t in a||(a={}))E.call(a,t)&&m(e,t,a[t]);if(o)for(var t of o(a))g.call(a,t)&&m(e,t,a[t]);return e},l=(e,a)=>b(e,h(a));import{_ as r,b as d,c as u,A as F}from"./bi.433.0.js";const _={NEW_ATTENDEE:"newAttendee"},N=[{label:r("Register New Attendee","bit-integrations"),value:_.NEW_ATTENDEE}],T=(e,a,t)=>{const i=F(a,n=>{const{name:s}=e.target;e.target.value!==""?n[s]=e.target.value:delete n[s]});t(i)},S=e=>!((e!=null&&e.field_map?e.field_map.filter(t=>!t.formField||!t.theEventsCalendarField||!t.formField==="custom"&&!t.customValue):[]).length>0),w=(e,a,t,i,n)=>{if(!e.name){a({name:e.name?"":r("Name can't be empty","bit-integrations")});return}n(l(c({},i),{auth:!0})),d({},"the_events_calendar_authentication").then(s=>{if(s.success){t(!0),u.success(r("Connected Successfully","bit-integrations")),n(l(c({},i),{auth:!1}));return}n(l(c({},i),{auth:!1})),u.error(r(s!=null&&s.data?s.data:"Something went wrong!","bit-integrations"))})},p=(e,a,t,i)=>{i(l(c({},t),{events:!0})),d({},"get_the_events_calendar_events").then(n=>{if(n.success&&n.data){const s=c({},e);s.events=n.data,a(s),i(l(c({},t),{events:!1})),u.success(r("Events fetched successfully","bit-integrations"));return}i(l(c({},t),{events:!1})),u.error(n!=null&&n.data?n.data:r("Something went wrong!","bit-integrations"))})},y=e=>e===_.NEW_ATTENDEE?{staticFields:[{key:"name",label:r("Full Name","bit-integrations"),required:!0},{key:"email",label:r("Email","bit-integrations"),required:!0},{key:"number_of_guests",label:r("Number of Guests","bit-integrations"),required:!0}],fieldMap:[{formField:"",theEventsCalendarField:"name"},{formField:"",theEventsCalendarField:"email"},{formField:"",theEventsCalendarField:"number_of_guests"}]}:{staticFields:[],fieldMap:[]};export{_ as T,N as a,w as b,S as c,p as g,T as h,y as t};
