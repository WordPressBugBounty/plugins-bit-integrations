var L=Object.defineProperty;var W=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var X=(s,d,t)=>d in s?L(s,d,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[d]=t,p=(s,d)=>{for(var t in d||(d={}))h.call(d,t)&&X(s,t,d[t]);if(W)for(var t of W(d))f.call(d,t)&&X(s,t,d[t]);return s};import{f as C,j as e,r as D,L as tt}from"./main-623.js";import{x,a9 as et}from"./bi.1.443.js";import{c as v,d as j,_ as l,e as it}from"./bi.422.0.js";import{a as lt,h as ct,b as st}from"./bi.757.3.js";import ut from"./bi.825.27.js";import{T as dt}from"./bi.220.720.js";const vt=(s,d,t,u,o,c)=>{const m=p({},d),{name:a}=s.target;s.target.value!==""?m[a]=s.target.value:delete m[a],m[s.target.name]=s.target.value,t(p({},m))},g=(s,d,t,u)=>{t(!0);const o={domainName:s.domainName};v(o,"learDash_fetch_all_course").then(c=>{if(c&&c.success){const m=p({},s);m.default||(m.default={}),c.data&&(m.default.allCourse=c.data),d(p({},m)),t(!1),j.success(l("Course fetched successfully","bit-integrations"));return}t(!1),j.error(l("Course fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},y=(s,d,t,u)=>{t(!0);const o={domainName:s.domainName};v(o,"learDash_fetch_all_group").then(c=>{if(c&&c.success){const m=p({},s);m.default||(m.default={}),c.data&&(m.default.allGroup=c.data),d(p({},m)),t(!1),j.success(l("Group fetched successfully","bit-integrations"));return}t(!1),j.error(l("Group fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},n=(s,d,t,u)=>{t(!0);const o={courseId:s.courseId};v(o,"learDash_fetch_all_course_of_lesson").then(c=>{if(c&&c.success){const m=p({},s);m.default||(m.default={}),c.data&&(m.default.courseByLesson=c.data),d(p({},m)),t(!1),j.success(l("Lesson fetched successfully","bit-integrations"));return}t(!1),j.error(l("Lesson fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},A=(s,d,t,u)=>{t(!0);const o={courseId:s.courseId,lessonId:s.lessonId};v(o,"learDash_fetch_all_topic_of_lesson").then(c=>{if(c&&c.success){const m=p({},s);m.default||(m.default={}),c.data&&(m.default.allTopics=c.data),d(p({},m)),t(!1),j.success(l("Topic fetched successfully","bit-integrations"));return}t(!1),j.error(l("Topic fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},Y=(s,d,t,u)=>{t(!0);const o={courseId:s.courseId,lessonId:s.lessonId};v(o,"learDash_fetch_all_quiz").then(c=>{if(c&&c.success){const m=p({},s);m.default||(m.default={}),c.data&&(m.default.allQuiz=c.data),d(p({},m)),t(!1),j.success(l("Quiz fetched successfully","bit-integrations"));return}t(!1),j.error(l("Quiz fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},ot=(s,d,t,u)=>{t(!0);const o={domainName:s.domainName};v(o,"learDash_fetch_all_course_unenroll").then(c=>{if(c&&c.success){const m=p({},s);m.default||(m.default={}),c.data&&(m.default.allCourseUnenroll=c.data),d(p({},m)),t(!1),j.success(l("Course fetched successfully","bit-integrations"));return}t(!1),j.error(l("Course fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},mt=s=>{const d=s==null?void 0:s.createGroupFields.filter(t=>t.required===!0);return d.length>0?d.map(t=>({formField:"",learnDeshFormField:t.key})):[{formField:"",learnDeshFormField:""}]},nt=s=>!((s.field_map?s.field_map.filter(t=>!t.formField&&!t.learnDeshFormField):[]).length>0),bt=(s,d,t)=>{const u=p({},d);u.field_map.splice(s,0,{}),t(p({},u))},pt=(s,d,t)=>{const u=p({},d);u.field_map.length>1&&u.field_map.splice(s,1),t(p({},u))},Z=(s,d,t,u)=>{const o=p({},t);o.field_map[d][s.target.name]=s.target.value,s.target.value==="custom"&&(o.field_map[d].customValue=""),u(p({},o))};function rt({i:s,formFields:d,field:t,learnDashConf:u,setLearnDashConf:o}){var S,r;if(((S=u==null?void 0:u.field_map)==null?void 0:S.length)===1&&t.learnDeshFormField===""){const b=p({},u),_=mt(b);b.field_map=_,o(b)}const c=(u==null?void 0:u.createGroupFields.filter(b=>b.required===!0))||[],m=(u==null?void 0:u.createGroupFields.filter(b=>b.required===!1))||[],a=C(it),{isPro:F}=a;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:b=>Z(b,s,u,o),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),e.jsx("optgroup",{label:l("Form Fields","bit-integrations"),children:d==null?void 0:d.map(b=>e.jsx("option",{value:b.name,children:b.label},`ff-rm-${b.name}`))}),e.jsx("option",{value:"custom",children:l("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(l("General Smart Codes %s","bit-integrations"),F?"":`(${l("Pro","bit-integrations")})`),children:F&&((r=lt)==null?void 0:r.map(b=>e.jsx("option",{value:b.name,children:b.label},`ff-rm-${b.name}`)))})]}),t.formField==="custom"&&e.jsx(dt,{onChange:b=>ct(b,s,keapConf,setKeapConf),label:l("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:l("Custom Value","bit-integrations"),formFields:d}),e.jsxs("select",{className:"btcd-paper-inp",disabled:s<c.length,name:"learnDeshFormField",value:s<c.length?c[s].key||"":t.learnDeshFormField||"",onChange:b=>Z(b,s,u,o),children:[e.jsx("option",{value:"",children:l("Select Field","bit-integrations")}),s<c.length?e.jsx("option",{value:c[s].key,children:c[s].label},c[s].key):m.map(({key:b,label:_})=>e.jsx("option",{value:b,children:_},b))]})]}),s>=c.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>bt(s,u,o),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>pt(s,u,o),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function Ft({formFields:s,handleInput:d,learnDashConf:t,setLearnDashConf:u,isLoading:o,setIsLoading:c,setSnackbar:m,allIntegURL:a,isInfo:F,edit:S}){var b,_,k,G,$,V,q,R,T,z,B,I,M,P,U,Q,O,E,H,K,J;D.useEffect(()=>{t.mainAction==="1"||t.mainAction==="3"||t.mainAction==="5"||t.mainAction==="6"||t.mainAction==="8"||t.mainAction==="9"||t.mainAction==="14"||t.mainAction==="17"?g(t,u,c):t.mainAction==="2"||t.mainAction==="4"||t.mainAction==="10"?y(t,u,c):t.mainAction==="13"&&Y(t,u,c)},[t.mainAction]);const r=(i,N)=>{const w=p({},t);w[N]=i,N==="courseId"&&n(w,u,c),N==="lessonId"&&A(w,u,c),u(p({},w))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Actions:","bit-integrations")}),e.jsxs("select",{onChange:d,name:"mainAction",value:t.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select Actions","bit-integrations")}),t.allActions&&t.allActions.map(({key:i,label:N})=>e.jsx("option",{value:i,children:N},i))]}),e.jsx("br",{}),e.jsx("br",{}),t.mainAction==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("User Role :","bit-integrations")}),e.jsxs("select",{onChange:d,name:"userRole",value:t.userRole,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select User Role","bit-integrations")}),(t==null?void 0:t.groupUserRole)&&t.groupUserRole.map(i=>e.jsx("option",{value:i.key,children:i.label},i.key))]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((b=t==null?void 0:t.default)==null?void 0:b.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId")}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]})]}),t.mainAction==="2"&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select group:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.groupId,options:((_=t==null?void 0:t.default)==null?void 0:_.allGroup)&&t.default.allGroup.map(i=>({label:i.group_title,value:i.group_id.toString()})),onChange:i=>r(i,"groupId")}),e.jsx("button",{onClick:()=>y(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Group List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.mainAction==="3"&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((k=t==null?void 0:t.default)==null?void 0:k.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Subscriber List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.mainAction==="4"&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("All Groups :","bit-integrations")}),e.jsxs("select",{onChange:d,name:"leaderOfGroup",value:t.leaderOfGroup,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select group","bit-integrations")}),((G=t==null?void 0:t.default)==null?void 0:G.allGroup)&&t.default.allGroup.map(i=>e.jsx("option",{value:i.group_id,children:i.group_title},i.group_id))]}),e.jsx("button",{onClick:()=>y(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Group List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:l("Group leader Role :","bit-integrations")}),e.jsxs("select",{onChange:d,name:"leaderRole",value:t.leaderRole,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select Leader Role","bit-integrations")}),(t==null?void 0:t.groupOfLeader4)&&t.groupOfLeader4.map(i=>e.jsx("option",{value:i.key,children:i.label},i.key))]})]}),t.mainAction==="5"&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:(($=t==null?void 0:t.default)==null?void 0:$.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.mainAction==="6"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((V=t==null?void 0:t.default)==null?void 0:V.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Lesson:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.lessonId,options:((q=t==null?void 0:t.default)==null?void 0:q.courseByLesson)&&t.default.courseByLesson.map(i=>({label:i.lesson_title,value:i.lesson_id.toString()})),onChange:i=>r(i,"lessonId"),singleSelect:!0}),e.jsx("button",{onClick:()=>n(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Lesson List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]})]}),t.mainAction==="7"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((R=t==null?void 0:t.default)==null?void 0:R.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Lesson:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.lessonId,options:((T=t==null?void 0:t.default)==null?void 0:T.courseByLesson)&&t.default.courseByLesson.map(i=>({label:i.lesson_title,value:i.lesson_id.toString()})),onChange:i=>r(i,"lessonId"),singleSelect:!0}),e.jsx("button",{onClick:()=>n(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Lesson List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]})]}),t.mainAction==="8"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((z=t==null?void 0:t.default)==null?void 0:z.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Lesson:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.lessonId,options:((B=t==null?void 0:t.default)==null?void 0:B.courseByLesson)&&t.default.courseByLesson.map(i=>({label:i.lesson_title,value:i.lesson_id.toString()})),onChange:i=>r(i,"lessonId"),singleSelect:!0}),e.jsx("button",{onClick:()=>n(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Lesson List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Topic:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.topicId,options:((I=t==null?void 0:t.default)==null?void 0:I.allTopics)&&t.default.allTopics.map(i=>({label:i.topic_title,value:i.topic_id.toString()})),onChange:i=>r(i,"topicId"),singleSelect:!0}),e.jsx("button",{onClick:()=>A(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Lesson List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]})]}),t.mainAction==="9"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((M=t==null?void 0:t.default)==null?void 0:M.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Lesson:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.lessonId,options:((P=t==null?void 0:t.default)==null?void 0:P.courseByLesson)&&t.default.courseByLesson.map(i=>({label:i.lesson_title,value:i.lesson_id.toString()})),onChange:i=>r(i,"lessonId"),singleSelect:!0}),e.jsx("button",{onClick:()=>n(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Lesson List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Topic:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.topicId,options:((U=t==null?void 0:t.default)==null?void 0:U.allTopics)&&t.default.allTopics.map(i=>({label:i.topic_title,value:i.topic_id.toString()})),onChange:i=>r(i,"topicId"),singleSelect:!0}),e.jsx("button",{onClick:()=>A(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Lesson List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]})]}),t.mainAction==="10"&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("All Groups :","bit-integrations")}),e.jsxs("select",{onChange:d,name:"groupId10",value:t.groupId10,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select group","bit-integrations")}),((Q=t==null?void 0:t.default)==null?void 0:Q.allGroup)&&t.default.allGroup.map(i=>e.jsx("option",{value:i.group_id,children:i.group_title},i.group_id))]}),e.jsx("button",{onClick:()=>y(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Group List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"}),e.jsx("br",{})]}),t.mainAction==="11"&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("All Groups :","bit-integrations")}),e.jsxs("select",{onChange:d,name:"groupId11",value:t.groupId11,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select group","bit-integrations")}),((O=t==null?void 0:t.default)==null?void 0:O.allGroup)&&t.default.allGroup.map(i=>e.jsx("option",{value:i.group_id,children:i.group_title},i.group_id))]}),e.jsx("button",{onClick:()=>y(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Group List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"}),e.jsx("br",{})]}),t.mainAction==="12"&&e.jsxs(e.Fragment,{children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("All Groups :","bit-integrations")}),e.jsxs("select",{onChange:d,name:"groupId12",value:t.groupId12,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:l("Select group","bit-integrations")}),((E=t==null?void 0:t.default)==null?void 0:E.allGroup)&&t.default.allGroup.map(i=>e.jsx("option",{value:i.group_id,children:i.group_title},i.group_id))]}),e.jsx("button",{onClick:()=>y(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Group List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"}),e.jsx("br",{})]}),t.mainAction==="13"&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Quiz:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.quizId,options:((H=t==null?void 0:t.default)==null?void 0:H.allQuiz)&&t.default.allQuiz.map(i=>({label:i.quiz_title,value:i.quiz_id.toString()})),onChange:i=>r(i,"quizId"),singleSelect:!0}),e.jsx("button",{onClick:()=>Y(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Lesson List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.mainAction==="14"&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((K=t==null?void 0:t.default)==null?void 0:K.allCourse)&&t.default.allCourse.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>g(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch Course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),t.mainAction==="16"&&e.jsx(ut,{allIntegURL:a,isInfo:F,edit:S,isLearnDash:!0,learnDashConf:t}),t.mainAction==="17"&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:l("Select Course:","bit-integrations")}),e.jsx(x,{className:"w-5",defaultValue:t==null?void 0:t.courseId,options:((J=t==null?void 0:t.default)==null?void 0:J.allCourseUnenroll)&&t.default.allCourseUnenroll.map(i=>({label:i.course_title,value:i.course_id.toString()})),onChange:i=>r(i,"courseId"),singleSelect:!0}),e.jsx("button",{onClick:()=>ot(t,u,c),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${l("Fetch course List","bit-integrations")}'`},type:"button",disabled:o,children:"↻"})]}),e.jsx("br",{}),e.jsx("br",{}),o&&e.jsx(tt,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),t.mainAction==="1"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:l("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:l("LearnDesh Fields","bit-integrations")})})]}),t.field_map.map((i,N)=>e.jsx(rt,{i:N,field:i,learnDashConf:t,formFields:s,setLearnDashConf:u},`dash-m-${N+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>st(t.field_map.length,t,u),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsx(et,{note:l("Some integrations will only work for logged-in users.","bit-integrations")})]})}export{Ft as L,nt as c,vt as h};
