var v=Object.defineProperty;var w=Object.getOwnPropertySymbols;var z=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var N=(a,i,e)=>i in a?v(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e,o=(a,i)=>{for(var e in i||(i={}))z.call(i,e)&&N(a,e,i[e]);if(w)for(var e of w(i))I.call(i,e)&&N(a,e,i[e]);return a};import{r as k,j as t,L as Q}from"./main-270.js";import{x as j,a9 as q}from"./bi.88.440.js";import{c as g,d as s,_ as n}from"./bi.340.0.js";const H=(a,i,e,d,u,l)=>{const r=o({},i),{name:x}=a.target;a.target.value!==""?r[x]=a.target.value:delete r[x],r[a.target.name]=a.target.value,e(o({},r))},F=(a,i,e,d)=>{e(!0),a.courseId,g({},"mslms_fetch_all_course").then(u=>{if(u&&u.success){const l=o({},a);l.default||(l.default={}),u.data&&(l.default.allCourse=u.data),i(o({},l)),e(!1),s.success(n("Course fetched successfully","bit-integrations"));return}e(!1),s.error(n("Course fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},S=(a,i,e,d)=>{e(!0);const u={courseId:a.courseId};g(u,"msLms_fetch_all_lesson").then(l=>{if(l&&l.success){const r=o({},a);r.default||(r.default={}),l.data&&(r.default.allLesson=l.data),i(o({},r)),e(!1),s.success(n("Lesson fetched successfully","bit-integrations"));return}e(!1),s.error(n("Lesson fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},f=(a,i,e,d)=>{e(!0);const u={courseId:a.courseId};g(u,"msLms_fetch_all_quiz").then(l=>{if(l&&l.success){const r=o({},a);r.default||(r.default={}),l.data&&(r.default.allQuiz=l.data),i(o({},r)),e(!1),s.success(n("Quiz fetched successfully","bit-integrations"));return}e(!1),s.error(n("Quiz fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))};function T({formFields:a,handleInput:i,msLmsConf:e,setMsLmsConf:d,isLoading:u,setIsLoading:l,setSnackbar:r,allIntegURL:x,isInfo:D,edit:E}){var y,A,_;k.useEffect(()=>{["1","2","3","4","5"].includes(e.mainAction)&&F(e,d,l)},[e.mainAction]);const p=(c,b)=>{const h=o({},e);c!==""?(h[b]=c,(e.mainAction==="2"||e.mainAction==="5")&&S(h,d,l),e.mainAction==="3"&&f(h,d,l)):delete h[b],d(o({},h))};return t.jsxs(t.Fragment,{children:[t.jsx("br",{}),t.jsx("b",{className:"wdt-200 d-in-b",children:n("Actions:","bit-integrations")}),t.jsxs("select",{onChange:i,name:"mainAction",value:e.mainAction,className:"btcd-paper-inp w-5",children:[t.jsx("option",{value:"",children:n("Select Actions","bit-integrations")}),e.allActions&&e.allActions.map(({key:c,label:b})=>t.jsx("option",{value:c,children:b},c))]}),t.jsx("br",{}),t.jsx("br",{}),["1","2","3","4","5"].includes(e.mainAction)&&t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select a Course:","bit-integrations")}),t.jsx(j,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.courseId,options:((y=e==null?void 0:e.default)==null?void 0:y.allCourse)&&e.default.allCourse.map(c=>({label:c.post_title,value:c.ID.toString()})),onChange:c=>p(c,"courseId")}),t.jsx("button",{onClick:()=>fetchAllCourse(e,d,l,r),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch course list","bit-integrations")}'`},type:"button",disabled:u,children:"↻"})]}),(e.mainAction==="2"||e.mainAction==="5")&&(e==null?void 0:e.courseId)&&t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Lesson:","bit-integrations")}),t.jsx(j,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.lessonId,options:((A=e==null?void 0:e.default)==null?void 0:A.allLesson)&&e.default.allLesson.map(c=>({label:c.post_title,value:c.ID.toString()})),onChange:c=>p(c,"lessonId")}),t.jsx("button",{onClick:()=>S(e,d,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch lesson list","bit-integrations")}'`},type:"button",disabled:u,children:"↻"})]}),e.mainAction==="3"&&(e==null?void 0:e.courseId)&&t.jsxs("div",{className:"flx mt-4",children:[t.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Quiz:","bit-integrations")}),t.jsx(j,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.quizId,options:((_=e==null?void 0:e.default)==null?void 0:_.allQuiz)&&e.default.allQuiz.map(c=>({label:c.post_title,value:c.ID.toString()})),onChange:c=>p(c,"quizId")}),t.jsx("button",{onClick:()=>f(e,d,l),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch quiz list","bit-integrations")}'`},type:"button",disabled:u,children:"↻"})]}),t.jsx("br",{}),t.jsx("br",{}),u&&t.jsx(Q,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.jsx(q,{note:n("This integration will only work for logged-in users.","bit-integrations")})]})}export{T as M,H as h};
