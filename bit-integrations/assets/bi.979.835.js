var M=Object.defineProperty;var y=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable;var N=(c,i,e)=>i in c?M(c,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):c[i]=e,u=(c,i)=>{for(var e in i||(i={}))D.call(i,e)&&N(c,e,i[e]);if(y)for(var e of y(i))V.call(i,e)&&N(c,e,i[e]);return c};import{r as $,j as a,L as E}from"./main-441.js";import{u as p,a8 as R}from"./bi.141.437.js";import{c as x,d as o,_ as n}from"./bi.452.0.js";const G=(c,i,e,d,l,t)=>{const h=u({},i),{name:j}=c.target;c.target.value!==""?h[j]=c.target.value:delete h[j],h[c.target.name]=c.target.value,e(u({},h))},J=c=>!((c.field_map?c.field_map.filter(e=>!e.formField&&!e.lifterLmsFormField):[]).length>0),w=(c,i,e,d)=>{e(!0),x({},"lifterLms_fetch_all_lesson").then(l=>{if(l&&l.success){const t=u({},c);t.default||(t.default={}),l.data&&(t.default.allLesson=l.data),i(u({},t)),e(!1),o.success(n("Lesson fetched successfully","bit-integrations"));return}e(!1),o.error(n("Lesson fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},v=(c,i,e,d)=>{e(!0),x({},"lifterLms_fetch_all_section").then(l=>{if(l&&l.success){const t=u({},c);t.default||(t.default={}),l.data&&(t.default.allSection=l.data),i(u({},t)),e(!1),o.success(n("Section fetched successfully","bit-integrations"));return}e(!1),o.error(n("Section fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},F=(c,i,e,d)=>{e(!0),x({},"lifterLms_fetch_all_course").then(l=>{if(l&&l.success){const t=u({},c);t.default||(t.default={}),l.data&&(t.default.allCourse=l.data),i(u({},t)),e(!1),o.success(n("Course fetched successfully","bit-integrations"));return}e(!1),o.error(n("Course fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))},k=(c,i,e,d)=>{e(!0),x({},"lifterLms_fetch_all_membership").then(l=>{if(l&&l.success){const t=u({},c);if(t.default||(t.default={}),l.data)if(t.mainAction==="7"){const h={ID:"All",post_title:"All membership"};t.default.allMembership=[h,...l.data]}else t.default.allMembership=l.data;i(u({},t)),e(!1),o.success(n("Membership fetched successfully","bit-integrations"));return}e(!1),o.error(n("Membership fetch failed. please try again","bit-integrations"))}).catch(()=>e(!1))};function K({formFields:c,handleInput:i,lifterLmsConf:e,setLifterLmsConf:d,isLoading:l,setIsLoading:t,setSnackbar:h,allIntegURL:j,isInfo:H,edit:T}){var S,_,A,m;$.useEffect(()=>{e.mainAction==="1"?w(e,d,t):e.mainAction==="2"?v(e,d,t):["3","5","6"].includes(e.mainAction)?F(e,d,t):["4","7"].includes(e.mainAction)&&k(e,d,t)},[e.mainAction]);const b=(s,r)=>{const g=u({},e);s!==""?g[r]=s:delete g[r],d(u({},g))};return a.jsxs(a.Fragment,{children:[a.jsx("br",{}),a.jsx("b",{className:"wdt-200 d-in-b",children:n("Actions:","bit-integrations")}),a.jsxs("select",{onChange:i,name:"mainAction",value:e.mainAction,className:"btcd-paper-inp w-5",children:[a.jsx("option",{value:"",children:n("Select Actions","bit-integrations")}),e.allActions&&e.allActions.map(({key:s,label:r})=>a.jsx("option",{value:s,children:r},s))]}),a.jsx("br",{}),a.jsx("br",{}),e.mainAction==="1"&&a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Select Lesson:","bit-integrations")}),a.jsx(p,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.lessonId,options:((S=e==null?void 0:e.default)==null?void 0:S.allLesson)&&e.default.allLesson.map(s=>({label:s.lesson_title,value:s.lesson_id.toString()})),onChange:s=>b(s,"lessonId")}),a.jsx("button",{onClick:()=>w(e,d,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch lesson list","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),e.mainAction==="2"&&a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Select a Section:","bit-integrations")}),a.jsx(p,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.sectionId,options:((_=e==null?void 0:e.default)==null?void 0:_.allSection)&&e.default.allSection.map(s=>({label:s.section_title,value:s.section_id.toString()})),onChange:s=>b(s,"sectionId")}),a.jsx("button",{onClick:()=>v(e,d,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch section list","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),["3","5","6"].includes(e.mainAction)&&a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Select a Course:","bit-integrations")}),a.jsx(p,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.courseId,options:((A=e==null?void 0:e.default)==null?void 0:A.allCourse)&&e.default.allCourse.map(s=>({label:s.post_title,value:s.ID.toString()})),onChange:s=>b(s,"courseId")}),a.jsx("button",{onClick:()=>F(e,d,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch course list","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),["4","7"].includes(e.mainAction)&&a.jsxs("div",{className:"flx mt-4",children:[a.jsx("b",{className:"wdt-200 d-in-b",children:n("Select a membership:","bit-integrations")}),a.jsx(p,{className:"w-5",singleSelect:!0,defaultValue:e==null?void 0:e.membershipId,options:((m=e==null?void 0:e.default)==null?void 0:m.allMembership)&&e.default.allMembership.map(s=>({label:s.post_title,value:s.ID.toString()})),onChange:s=>b(s,"membershipId")}),a.jsx("button",{onClick:()=>k(e,d,t),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${n("Fetch membership list","bit-integrations")}'`},type:"button",disabled:l,children:"↻"})]}),a.jsx("br",{}),a.jsx("br",{}),l&&a.jsx(E,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),a.jsx(R,{note:n("This integration will only work for logged-in users.","bit-integrations")})]})}export{K as L,J as c,G as h};
