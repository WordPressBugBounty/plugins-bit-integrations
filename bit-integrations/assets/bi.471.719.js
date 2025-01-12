var F=Object.defineProperty;var j=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var N=(e,s,a)=>s in e?F(e,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[s]=a,u=(e,s)=>{for(var a in s||(s={}))E.call(s,a)&&N(e,a,s[a]);if(j)for(var a of j(s))S.call(s,a)&&N(e,a,s[a]);return e};import{j as c,L as k}from"./main-425.js";import{y as o,x as y,a8 as L}from"./bi.900.437.js";import{c as w,_ as r,d as A}from"./bi.107.0.js";const T=(e,s,a,t,d)=>{let n=o(s);const{name:p,value:h}=e.target;switch(n[p]=h,p){case"module":n=P(n,a,t,d);break}a(n)},P=(e,s,a,t)=>{var n,p;let d=o(e);return d.field_map=[],(p=(n=d==null?void 0:d.default)==null?void 0:n.fields)!=null&&p[e.module]?d=R(d):refreshFields(d,s,a,t),d},_=(e,s,a,t=null)=>{a(!0);const n=w(null,"tutor_all_course",{type:t},"GET").then(p=>{if(p&&p.success){const h=u({},e);return h.default||(h.default={}),h.default.courses=p.data,s(u({},h)),a(!1),r("Courses fetched successfully","bit-integrations")}return a(!1),r("Courses fetch failed. please try again","bit-integrations")});A.promise(n,{success:p=>p,error:r("Error Occurred","bit-integrations"),loading:r("Loading Courses...")})},v=(e,s,a)=>{a(!0);const t=w(null,"tutor_all_lesson","","GET").then(d=>{if(d&&d.success){const n=u({},e);return n.default||(n.default={}),n.default.lessons=d.data,s(u({},n)),a(!1),r("Lessons fetched successfully","bit-integrations")}return a(!1),r("Lessons fetch failed, please try again...","bit-integrations")});A.promise(t,{success:d=>d,error:r("Error Occurred","bit-integrations"),loading:r("Loading Lessons...")})},R=e=>{const s=o(e);return s.default.fields[s.module].required.forEach(a=>{s.field_map.find(t=>t.wcField===a)||s.field_map.unshift({formField:"",wcField:a,required:!0})}),s.field_map.length||(s.field_map=[{formField:"",wcField:""}]),s};function V({tutorlmsConf:e,setTutorlmsConf:s,isLoading:a,setIsLoading:t}){var h,x;const d=[{value:"enroll-course",label:r("Enroll the user in a course","bit-integrations")},{value:"unenroll-course",label:r("Unenroll user from a course","bit-integrations")},{value:"complete-course",label:r("Mark a course complete for the user","bit-integrations")},{value:"complete-lesson",label:r("Mark a lesson complete for the user","bit-integrations")},{value:"reset-course",label:r("Reset the user progress in a course","bit-integrations")}],n=l=>{const i=u({},e),{name:b,value:g}=l.target;l.target.value!==""?i[b]=g:delete i[b],b==="actionName"?(i!=null&&i.selectedCourse&&delete i.selectedCourse,i!=null&&i.selectedLesson&&delete i.selectedLesson,i!=null&&i.selectedAllCourse&&delete i.selectedAllCourse,s(u({},i)),g==="enroll-course"||g==="unenroll-course"||g==="complete-course"||g==="reset-course"?_(i,s,t,g):g==="complete-lesson"&&v(i,s,t)):s(u({},i))},p=(l,i)=>{const b=u({},e);l?(i==="selectedCourse"&&l.includes("all-course")&&(b.selectedAllCourse=b.default.courses),b[i]=l?l.split(","):[]):b!=null&&b.selectedAllCourse&&delete b.selectedAllCourse,s(u({},b))};return c.jsxs(c.Fragment,{children:[c.jsx("br",{}),c.jsxs("div",{className:"flx",children:[c.jsx("b",{className:"wdt-200 d-in-b",children:r("Action:","bit-integrations")}),c.jsxs("select",{onChange:n,name:"actionName",value:e==null?void 0:e.actionName,className:"btcd-paper-inp w-5",children:[c.jsx("option",{value:"",children:r("Select Action","bit-integrations")}),d.map(({label:l,value:i})=>c.jsx("option",{value:i,children:l},l))]})]}),c.jsx("br",{}),((e==null?void 0:e.actionName)==="enroll-course"||(e==null?void 0:e.actionName)==="unenroll-course"||(e==null?void 0:e.actionName)==="complete-course"||(e==null?void 0:e.actionName)==="reset-course")&&c.jsxs("div",{className:"flx",children:[c.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Course:","bit-integrations")}),c.jsx(y,{defaultValue:e==null?void 0:e.selectedCourse,className:"btcd-paper-drpdwn w-5",options:((h=e==null?void 0:e.default)==null?void 0:h.courses)&&e.default.courses.map(l=>({label:l.courseTitle,value:l.courseId.toString()})),onChange:l=>p(l,"selectedCourse"),singleSelect:(e==null?void 0:e.actionName)==="complete-course"||(e==null?void 0:e.actionName)==="reset-course"}),c.jsx("button",{onClick:()=>_(e,s,t,e==null?void 0:e.actionName),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${r("Refresh Courses","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),(e==null?void 0:e.actionName)==="complete-lesson"&&c.jsxs("div",{className:"flx",children:[c.jsx("b",{className:"wdt-200 d-in-b",children:r("Select Lessons:","bit-integrations")}),c.jsx(y,{defaultValue:e==null?void 0:e.selectedLesson,className:"btcd-paper-drpdwn w-5",options:((x=e==null?void 0:e.default)==null?void 0:x.lessons)&&e.default.lessons.map(l=>({label:l.lessonTitle,value:l.lessonId.toString()})),onChange:l=>p(l,"selectedLesson"),singleSelect:!0}),c.jsx("button",{onClick:()=>v(e,s,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`${r("Refresh Courses","bit-integrations")}'`},type:"button",disabled:a,children:"↻"})]}),c.jsx("br",{}),c.jsx("br",{}),a&&c.jsx(k,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),c.jsx(L,{note:r("This integration will only work for logged-in users.","bit-integrations")})]})}export{V as T,T as h};
