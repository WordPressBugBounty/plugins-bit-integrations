var h=Object.defineProperty;var f=Object.getOwnPropertySymbols;var r=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var m=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,i=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&m(e,a,t[a]);if(f)for(var a of f(t))g.call(t,a)&&m(e,a,t[a]);return e};var p=(e,t,a)=>new Promise((s,n)=>{var l=o=>{try{c(a.next(o))}catch(d){n(d)}},u=o=>{try{c(a.throw(o))}catch(d){n(d)}},c=o=>o.done?s(o.value):Promise.resolve(o.value).then(l,u);c((a=a.apply(e,t)).next())});import{c as _}from"./bi.686.0.js";const C=(e,t,a)=>{const s=i({},t);s.field_map.splice(e,0,{}),a(i({},s))},D=(e,t,a)=>{const s=i({},t);s.field_map.length>1&&s.field_map.splice(e,1),a(i({},s))},M=(e,t,a,s)=>{const n=i({},a);n.field_map[t][e.target.name]=e.target.value,e.target.value==="custom"&&(n.field_map[t].customValue=""),s(i({},n))},b=(e,t,a,s)=>p(void 0,null,function*(){const n={};n.actionName=e,n.tokenDetails=t,n.userInfo=a,yield _(n,"store/authData").then(l=>{l.success&&l.data.data.length>0&&s(l.data.data)})});export{M as a,C as b,D as d,b as h};
