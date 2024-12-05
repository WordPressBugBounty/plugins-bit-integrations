var _=Object.defineProperty,N=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var m=(t,s,e)=>s in t?_(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,d=(t,s)=>{for(var e in s||(s={}))y.call(s,e)&&m(t,e,s[e]);if(W)for(var e of W(s))F.call(s,e)&&m(t,e,s[e]);return t},u=(t,s)=>N(t,v(s));import{j as i}from"./main-34.js";import{x as R,a8 as k}from"./bi.188.437.js";import{c as h,d as x,_ as a}from"./bi.671.0.js";const L=(t,s)=>{const e=h({},"wpCourseware_actions").then(l=>{const o=d({},t);l.data.WPCWActions&&(o.default.WPCWActions=l.data.WPCWActions),j(o,s)});x.promise(e,{success:a("Action Refreshed","bit-integrations"),error:a("Failed, Try Again","bit-integrations"),loading:a("Fetching...")})},j=(t,s)=>{const e=h({},"wpCourseware_courses").then(l=>{const o=d({},t);l.data.WPCWCourses&&(o.default.WPCWCourses=l.data.WPCWCourses),s(d({},o))});x.promise(e,{success:a("Course Refreshed","bit-integrations"),error:a("Failed, Try Again","bit-integrations"),loading:a("Fetching...")})},O=(t,s,e)=>{const l=d({},s);l.name=t.target.value,e(d({},l))};function $({wpCoursewareConf:t,setWPCoursewareConf:s,isLoading:e,setIsLoading:l,setSnackbar:o}){var g,b;const P=({target:{name:n,value:c}})=>{s(u(d({},t),{[n]:c}))},A=n=>{const c=d({},t);n.includes("select_all_course")?c.selectedAllCourse=t.default.WPCWCourses.filter(r=>r.id!=="select_all_course").map(r=>r.id):delete c.selectedAllCourse,c.course=n?n.split(","):[],s(d({},c))};return i.jsxs(i.Fragment,{children:[i.jsx("br",{}),i.jsxs("div",{className:"flx",children:[i.jsx("b",{className:"wdt-200 d-in-b",children:a("WP Courseware Actions:","bit-integrations")}),i.jsxs("select",{onChange:n=>P(n),name:"action",value:t.action,className:"btcd-paper-inp w-5",children:[i.jsx("option",{value:"",children:a("Select Action","bit-integrations")}),((g=t==null?void 0:t.default)==null?void 0:g.WPCWActions)&&Object.values(t.default.WPCWActions).map(({id:n,title:c})=>i.jsx("option",{value:n,children:c},`${n}-1`))]})]}),(t==null?void 0:t.action)&&i.jsxs("div",{className:"flx mt-4",children:[i.jsx("b",{className:"wdt-200 d-in-b",children:a("WP Courseware Courses:","bit-integrations")}),i.jsx(R,{defaultValue:t==null?void 0:t.course,className:"btcd-paper-drpdwn w-5",options:((b=t==null?void 0:t.default)==null?void 0:b.WPCWCourses)&&Object.values(t.default.WPCWCourses).map(({id:n,title:c})=>({label:c,value:n.toString()})),onChange:n=>A(n)}),i.jsx("button",{onClick:()=>j(t,s),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${a("Refresh WP Courseware Courses","bit-integrations")}'`},type:"button",disabled:e,children:"↻"})]}),i.jsx("br",{}),i.jsx("br",{}),i.jsx(k,{note:a("This integration will only work for logged-in users.","bit-integrations")})]})}export{$ as W,L as g,O as h};
