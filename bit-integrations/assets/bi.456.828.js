var M=Object.defineProperty;var T=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var f=(l,n,t)=>n in l?M(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,u=(l,n)=>{for(var t in n||(n={}))E.call(n,t)&&f(l,t,n[t]);if(T)for(var t of T(n))D.call(n,t)&&f(l,t,n[t]);return l};import{f as B,j as e,r as H,L as U}from"./main-246.js";import{x as y,a9 as z}from"./bi.675.443.js";import{c as j,V as r,_ as i,d as J}from"./bi.560.0.js";import{a as K,h as O,b as Q}from"./bi.545.3.js";import{T as W}from"./bi.300.720.js";const et=(l,n,t,c,d,a)=>{const s=u({},n),{name:m}=l.target;l.target.value!==""?s[m]=l.target.value:delete s[m],s[l.target.name]=l.target.value,t(u({},s))},w=(l,n,t,c)=>{t(!0);const d={domainName:l.domainName};j(d,"gamiPress_fetch_all_rank_type").then(a=>{if(a&&a.success){const s=u({},l);s.default||(s.default={}),a.data&&(s.default.allRankTypes=a.data),n(u({},s)),t(!1),r.success(i("Rank Type fetched successfully","bit-integrations"));return}t(!1),r.error(i("Rank Type fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},S=(l,n,t,c)=>{t(!0),j(null,"gamiPress_fetch_all_achievement_type").then(d=>{if(d&&d.success){const a=u({},l);a.default||(a.default={}),d.data&&(a.default.allAchievementTypes=d.data),n(u({},a)),t(!1),r.success(i("All achievement Type fetched successfully","bit-integrations"));return}t(!1),r.error(i("All achievement fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},R=(l,n,t,c)=>{t(!0);const d={achievementType:l.selectedAchievementType};j(d,"gamiPress_fetch_all_achievement_by_type").then(a=>{if(a&&a.success){const s=u({},l);s.default||(s.default={}),a.data&&(s.default.allAchievements=a.data),n(u({},s)),t(!1),r.success(i("All achievements fetched successfully","bit-integrations"));return}t(!1),r.error(i("All achievements fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},V=(l,n,t,c)=>{t(!0);const d={domainName:l.rankType};j(d,"gamiPress_fetch_all_rank_by_type").then(a=>{if(a&&a.success){const s=u({},l);s.default||(s.default={}),a.data&&(s.default.allRanks=a.data),n(u({},s)),t(!1),r.success(i("All rank fetched successfully","bit-integrations"));return}t(!1),r.error(i("All rank type fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},$=(l,n,t,c)=>{t(!0);const d={domainName:l.rankType};j(d,"gamiPress_fetch_all_point_type").then(a=>{if(a&&a.success){const s=u({},l);s.default||(s.default={}),a.data&&(s.default.allPointTypes=a.data),n(u({},s)),t(!1),r.success(i("All point type fetched successfully","bit-integrations"));return}t(!1),r.error(i("All point type fetch failed. please try again","bit-integrations"))}).catch(()=>t(!1))},X=l=>{const n=l==null?void 0:l.pointFields.filter(t=>t.required===!0);return n.length>0?n.map(t=>({formField:"",gamiPressFormField:t.key})):[{formField:"",gamiPressFormField:""}]},Y=(l,n,t)=>{const c=u({},n);c.field_map.splice(l,0,{}),t(u({},c))},Z=(l,n,t)=>{const c=u({},n);c.field_map.length>1&&c.field_map.splice(l,1),t(u({},c))},q=(l,n,t,c)=>{const d=u({},t);d.field_map[n][l.target.name]=l.target.value,l.target.value==="custom"&&(d.field_map[n].customValue=""),c(u({},d))};function G({i:l,formFields:n,field:t,gamiPressConf:c,setGamiPressConf:d}){var N,b;if(((N=c==null?void 0:c.field_map)==null?void 0:N.length)===1&&t.gamiPressFormField===""){const h=u({},c),x=X(h);h.field_map=x,d(h)}const a=(c==null?void 0:c.pointFields.filter(h=>h.required===!0))||[],s=(c==null?void 0:c.pointFields.filter(h=>h.required===!1))||[],m=B(J),{isPro:A}=m;return e.jsx("div",{className:"flx mt-2 mb-2 btcbi-field-map",children:e.jsxs("div",{className:"pos-rel flx",children:[e.jsxs("div",{className:"flx integ-fld-wrp",children:[e.jsxs("select",{className:"btcd-paper-inp mr-2",name:"formField",value:t.formField||"",onChange:h=>q(h,l,c,d),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),e.jsx("optgroup",{label:i("Form Fields","bit-integrations"),children:n==null?void 0:n.map(h=>e.jsx("option",{value:h.name,children:h.label},`ff-rm-${h.name}`))}),e.jsx("option",{value:"custom",children:i("Custom...","bit-integrations")}),e.jsx("optgroup",{label:sprintf(i("General Smart Codes %s","bit-integrations"),A?"":`(${i("Pro","bit-integrations")})`),children:A&&((b=K)==null?void 0:b.map(h=>e.jsx("option",{value:h.name,children:h.label},`ff-rm-${h.name}`)))})]}),t.formField==="custom"&&e.jsx(W,{onChange:h=>O(h,l,c,d),label:i("Custom Value","bit-integrations"),className:"mr-2",type:"text",value:t.customValue,placeholder:i("Custom Value","bit-integrations"),formFields:n}),e.jsxs("select",{className:"btcd-paper-inp",disabled:l<a.length,name:"gamiPressFormField",value:l<a.length?a[l].key||"":t.gamiPressFormField||"",onChange:h=>q(h,l,c,d),children:[e.jsx("option",{value:"",children:i("Select Field","bit-integrations")}),l<a.length?e.jsx("option",{value:a[l].key,children:a[l].label},a[l].key):s.map(({key:h,label:x})=>e.jsx("option",{value:h,children:x},h))]})]}),l>=a.length&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>Y(l,c,d),className:"icn-btn sh-sm ml-2 mr-1",type:"button",children:"+"}),e.jsx("button",{onClick:()=>Z(l,c,d),className:"icn-btn sh-sm ml-1",type:"button","aria-label":"btn",children:e.jsx("span",{className:"btcd-icn icn-trash-2"})})]})]})})}function lt({formFields:l,handleInput:n,gamiPressConf:t,setGamiPressConf:c,isLoading:d,setIsLoading:a,setSnackbar:s,allIntegURL:m,isInfo:A,edit:N}){var h,x,_,F,k;H.useEffect(()=>{["1","4"].includes(t.mainAction)&&w(t,c,a),["2","5"].includes(t.mainAction)&&S(t,c,a),["3","6"].includes(t.mainAction)&&$(t,c,a)},[t.mainAction]);const b=(p,o)=>{const v=u({},t);v[o]=p,o==="rankType"&&V(v,c,a),o==="selectedAchievementType"&&R(v,c,a),c(u({},v))};return e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("b",{className:"wdt-200 d-in-b",children:i("Actions:","bit-integrations")}),e.jsxs("select",{onChange:n,name:"mainAction",value:t.mainAction,className:"btcd-paper-inp w-5",children:[e.jsx("option",{value:"",children:i("Select Actions","bit-integrations")}),t.allActions&&t.allActions.map(({key:p,label:o})=>e.jsx("option",{value:p,children:o},p))]}),e.jsx("br",{}),e.jsx("br",{}),["1","4"].includes(t.mainAction)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Rank Type:","bit-integrations")}),e.jsx(y,{className:"w-5",defaultValue:t==null?void 0:t.rankType,options:((h=t==null?void 0:t.default)==null?void 0:h.allRankTypes)&&t.default.allRankTypes.map(p=>({label:p.post_title,value:p.post_name.toString()})),singleSelect:!0,onChange:p=>b(p,"rankType")}),e.jsx("button",{onClick:()=>w(t,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch Rank Type List","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Rank:","bit-integrations")}),e.jsx(y,{className:"w-5",defaultValue:t==null?void 0:t.selectedRank,options:((x=t==null?void 0:t.default)==null?void 0:x.allRanks)&&t.default.allRanks.map(p=>({label:p.post_title,value:p.ID.toString()})),singleSelect:!0,onChange:p=>b(p,"selectedRank")}),e.jsx("button",{onClick:()=>V(t,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch Rank","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]})]}),["2","5"].includes(t.mainAction)&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Achievement Type:","bit-integrations")}),e.jsx(y,{className:"w-5",defaultValue:t==null?void 0:t.selectedAchievementType,options:((_=t==null?void 0:t.default)==null?void 0:_.allAchievementTypes)&&t.default.allAchievementTypes.map(p=>({label:p.post_title,value:p.post_name.toString()})),singleSelect:!0,onChange:p=>b(p,"selectedAchievementType")}),e.jsx("button",{onClick:()=>S(t,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch achievement type list","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),e.jsx("br",{}),e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Select Achievement:","bit-integrations")}),e.jsx(y,{className:"w-5",defaultValue:t==null?void 0:t.selectedAchievement,options:((F=t==null?void 0:t.default)==null?void 0:F.allAchievements)&&t.default.allAchievements.map(p=>({label:p.post_title,value:p.ID.toString()})),singleSelect:!0,onChange:p=>b(p,"selectedAchievement")}),e.jsx("button",{onClick:()=>R(t,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch Achievement","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]})]}),["3","6"].includes(t.mainAction)&&e.jsxs("div",{className:"flx mt-4",children:[e.jsx("b",{className:"wdt-200 d-in-b",children:i("Enter Point:","bit-integrations")}),e.jsx(y,{className:"w-5",defaultValue:t==null?void 0:t.selectedPointType,options:((k=t==null?void 0:t.default)==null?void 0:k.allPointTypes)&&t.default.allPointTypes.map(p=>({label:p.post_title,value:p.post_name.toString()})),singleSelect:!0,onChange:p=>b(p,"selectedPointType")}),e.jsx("button",{onClick:()=>$(t,c,a),className:"icn-btn sh-sm ml-2 mr-2 tooltip",style:{"--tooltip-txt":`'${i("Fetch point type","bit-integrations")}'`},type:"button",disabled:d,children:"↻"})]}),e.jsx("br",{}),e.jsx("br",{}),d&&e.jsx(U,{style:{display:"flex",justifyContent:"center",alignItems:"center",height:100,transform:"scale(0.7)"}}),["3","6"].includes(t.mainAction)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"mt-4",children:e.jsx("b",{className:"wdt-100",children:i("Map Fields","bit-integrations")})}),e.jsx("div",{className:"btcd-hr mt-1"}),e.jsxs("div",{className:"flx flx-around mt-2 mb-2 btcbi-field-map-label",children:[e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("Form Fields","bit-integrations")})}),e.jsx("div",{className:"txt-dp",children:e.jsx("b",{children:i("GamiPress Fields","bit-integrations")})})]}),t.field_map.map((p,o)=>e.jsx(G,{i:o,field:p,gamiPressConf:t,formFields:l,setGamiPressConf:c},`dash-m-${o+9}`)),e.jsx("div",{className:"txt-center btcbi-field-map-button mt-2",children:e.jsx("button",{onClick:()=>Q(t.field_map.length,t,c),className:"icn-btn sh-sm",type:"button",children:"+"})}),e.jsx("br",{}),e.jsx("br",{})]}),e.jsx("br",{}),e.jsx(z,{note:i("Some integrations will only work for logged-in users.","bit-integrations")})]})}export{lt as G,et as h};
