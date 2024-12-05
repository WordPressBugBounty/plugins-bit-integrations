var S=Object.defineProperty;var d=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var _=(e,t,l)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[t]=l,h=(e,t)=>{for(var l in t||(t={}))T.call(t,l)&&_(e,l,t[l]);if(d)for(var l of d(t))k.call(t,l)&&_(e,l,t[l]);return e};import{j as r,L as A}from"./main-34.js";import{y as N,x as a,a8 as P}from"./bi.188.437.js";import{c as F,_ as u,d as E}from"./bi.671.0.js";const $=(e,t,l,c,o)=>{let n=N(t);const{name:p,value:g}=e.target;switch(n[p]=g,p){case"module":n=R(n,l,c,o);break}l(n)},R=(e,t,l,c)=>{var n,p;let o=N(e);return o.field_map=[],(p=(n=o==null?void 0:o.default)==null?void 0:n.fields)!=null&&p[e.module]?o=q(o):refreshFields(o,t,l,c),o},v=(e,t,l,c=null)=>{l(!0);const n=F(null,"academy_lms_all_course",{type:c},"GET").then(p=>{if(p&&p.success){const g=h({},e);return g.default||(g.default={}),g.default.courses=p.data,t(h({},g)),l(!1),u("Courses fetched successfully","bit-integrations")}return l(!1),u("Courses fetch failed. please try again","bit-integrations")});E.promise(n,{success:p=>p,error:u("Error Occurred","bit-integrations"),loading:u("Loading Courses...")})},w=(e,t,l)=>{l(!0);const c=F(null,"academy_lms_all_lesson","","GET").then(o=>{if(o&&o.success){const n=h({},e);return n.default||(n.default={}),n.default.lessons=o.data,t(h({},n)),l(!1),u("Lessons fetched successfully","bit-integrations")}return l(!1),u("Lessons fetch failed, please try again...","bit-integrations")});E.promise(c,{success:o=>o,error:u("Error Occurred","bit-integrations"),loading:u("Loading Lessons...")})},q=e=>{const t=N(e);return t.default.fields[t.module].required.forEach(l=>{t.field_map.find(c=>c.wcField===l)||t.field_map.unshift({formField:"",wcField:l,required:!0})}),t.field_map.length||(t.field_map=[{formField:"",wcField:""}]),t};function U({academyLmsConf:e,setAcademyLmsConf:t,isLoading:l,setIsLoading:c}){var g,j;const o=[{value:"enroll-course",label:u("Enroll the user in a course","bit-integrations")},{value:"unenroll-course",label:u("Unenroll user from a course","bit-integrations")},{value:"complete-course",label:u("Mark a course complete for the user","bit-integrations")},{value:"complete-lesson",label:u("Mark a lesson complete for the user","bit-integrations")},{value:"reset-course",label:u("Reset the user progress in a course","bit-integrations")}],n=i=>{const s=h({},e),{name:b,value:x}=i.target;i.target.value!==""?s[b]=x:delete s[b],b==="actionName"?(s!=null&&s.selectedCourse&&delete s.selectedCourse,s!=null&&s.selectedLesson&&delete s.selectedLesson,s!=null&&s.selectedAllCourse&&delete s.selectedAllCourse,t(h({},s)),x!==""&&(v(s,t,c,x),x==="complete-lesson"&&w(s,t,c))):t(h({},s))},p=(i,s)=>{const b=h({},e);i?(s==="selectedCourse"&&i.includes("all-course")&&(b.selectedAllCourse=b.default.courses),b[s]=i?i.split(","):[]):b!=null&&b.selectedAllCourse&&delete b.selectedAllCourse,t(h({},b))};return r.jsxs(r.Fragment,{children:[r.jsx("br",{}),r.jsxs("div",{className:"flx",children:[r.jsx("b",{className:"wdt-200 d-in-b",children:u("Action:","bit-integrations")}),r.jsxs("select",{onChange:n,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[r.jsx("option",{value:"",children:u("Select Action","bit-integrations")}),o.map(({label:i,value:s})=>r.jsx("option",{value:s,children:i},i))]})]}),r.jsx("br",{}),((e==null?void 0:e.actionName)==="enroll-course"||(e==null?void 0:e.actionName)==="unenroll-course"||(e==null?void 0:e.actionName)==="complete-course"||(e==null?void 0:e.actionName)==="reset-course"||(e==null?void 0:e.actionName)==="complete-lesson")&&r.jsxs("div",{className:"flx",children:[r.jsx("b",{className:"wdt-200 d-in-b",children:u("Select Course:","bit-integrations")}),r.jsx(a,{defaultValue:e==null?void 0:e.selectedCourse,className:"btcd-paper-drpdwn w-5",options:((g=e==null?void 0:e.default)==null?void 0:g.courses)&&e.default.courses.map(i=>({label:i.courseTitle,value:i.courseId.toString()})),onChange:i=>p(i,"selectedCourse"),singleSelect:(e==null?void 0:e.actionName)==="complete-course"||(e==null?void 0:e.actionName)==="complete-lesson"||(e==null?void 0:e.actionName)==="reset-course"}),r.jsx("button",{onClick:()=>v(e,t,c,e==null?void 0:e.actionName),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${u("Refresh Courses","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),r.jsx("br",{}),(e==null?void 0:e.actionName)==="complete-lesson"&&r.jsxs("div",{className:"flx",children:[r.jsx("b",{className:"wdt-200 d-in-b",children:u("Select Lessons:","bit-integrations")}),r.jsx(a,{defaultValue:e==null?void 0:e.selectedLesson,className:"btcd-paper-drpdwn w-5",options:((j=e==null?void 0:e.default)==null?void 0:j.lessons)&&e.default.lessons.map(i=>({label:i.lessonTitle,value:i.lessonId.toString()})),onChange:i=>p(i,"selectedLesson"),singleSelect:!0}),r.jsx("button",{onClick:()=>w(e,t,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${u("Refresh Courses","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),r.jsx("br",{}),r.jsx("br",{}),l&&r.jsx(A,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),r.jsx(P,{note:u("This integration will only work for logged-in users.","bit-integrations")})]})}export{U as A,$ as h};
