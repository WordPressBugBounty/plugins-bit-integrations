import{r as b,c as y}from"./main-794.js";function z(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var O=z("Tab"),B=z("TabList"),C=z("TabPanel");function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},x.apply(this,arguments)}function se(e){return O(e)||B(e)||C(e)}function F(e,t){return b.Children.map(e,function(a){return a===null?null:se(a)?t(a):a.props&&a.props.children&&typeof a.props.children=="object"?b.cloneElement(a,x({},a.props,{children:F(a.props.children,t)})):a})}function G(e,t){return b.Children.forEach(e,function(a){a!==null&&(O(a)||C(a)?t(a):a.props&&a.props.children&&typeof a.props.children=="object"&&(B(a)&&t(a),G(a.props.children,t)))})}function re(e){var t,a,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=re(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function j(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=re(e))&&(n&&(n+=" "),n+=t);return n}var ie=0;function Z(){return"react-tabs-"+ie++}function ne(e){var t=0;return G(e,function(a){O(a)&&t++}),t}function le(e){var t=0;return G(e,function(a){C(a)&&t++}),t}var ce=["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName","environment","disableUpDownKeys"];function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},S.apply(this,arguments)}function ue(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,o;for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function fe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,D(e,t)}function D(e,t){return D=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},D(e,t)}function ae(e){return e&&"getAttribute"in e}function ee(e){return ae(e)&&e.getAttribute("data-rttab")}function v(e){return ae(e)&&e.getAttribute("aria-disabled")==="true"}var P;function de(e){var t=e||(typeof window!="undefined"?window:void 0);try{P=!!(typeof t!="undefined"&&t.document&&t.document.activeElement)}catch(a){P=!1}}var H=function(e){fe(t,e);function t(){for(var n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=e.call.apply(e,[this].concat(o))||this,n.tabNodes=[],n.handleKeyDown=function(i){var l=n.props,c=l.direction,f=l.disableUpDownKeys;if(n.isTabFromContainer(i.target)){var u=n.props.selectedIndex,p=!1,d=!1;(i.keyCode===32||i.keyCode===13)&&(p=!0,d=!1,n.handleClick(i)),i.keyCode===37||!f&&i.keyCode===38?(c==="rtl"?u=n.getNextTab(u):u=n.getPrevTab(u),p=!0,d=!0):i.keyCode===39||!f&&i.keyCode===40?(c==="rtl"?u=n.getPrevTab(u):u=n.getNextTab(u),p=!0,d=!0):i.keyCode===35?(u=n.getLastTab(),p=!0,d=!0):i.keyCode===36&&(u=n.getFirstTab(),p=!0,d=!0),p&&i.preventDefault(),d&&n.setSelected(u,i)}},n.handleClick=function(i){var l=i.target;do if(n.isTabFromContainer(l)){if(v(l))return;var c=[].slice.call(l.parentNode.children).filter(ee).indexOf(l);n.setSelected(c,i);return}while((l=l.parentNode)!=null)},n}var a=t.prototype;return a.setSelected=function(r,o){if(!(r<0||r>=this.getTabsCount())){var s=this.props,i=s.onSelect,l=s.selectedIndex;i(r,l,o)}},a.getNextTab=function(r){for(var o=this.getTabsCount(),s=r+1;s<o;s++)if(!v(this.getTab(s)))return s;for(var i=0;i<r;i++)if(!v(this.getTab(i)))return i;return r},a.getPrevTab=function(r){for(var o=r;o--;)if(!v(this.getTab(o)))return o;for(o=this.getTabsCount();o-- >r;)if(!v(this.getTab(o)))return o;return r},a.getFirstTab=function(){for(var r=this.getTabsCount(),o=0;o<r;o++)if(!v(this.getTab(o)))return o;return null},a.getLastTab=function(){for(var r=this.getTabsCount();r--;)if(!v(this.getTab(r)))return r;return null},a.getTabsCount=function(){var r=this.props.children;return ne(r)},a.getPanelsCount=function(){var r=this.props.children;return le(r)},a.getTab=function(r){return this.tabNodes["tabs-"+r]},a.getChildren=function(){var r=this,o=0,s=this.props,i=s.children,l=s.disabledTabClassName,c=s.focus,f=s.forceRenderTabPanel,u=s.selectedIndex,p=s.selectedTabClassName,d=s.selectedTabPanelClassName,N=s.environment;this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[];for(var I=this.tabIds.length-this.getTabsCount();I++<0;)this.tabIds.push(Z()),this.panelIds.push(Z());return F(i,function(h){var g=h;if(B(h)){var m=0,T=!1;P==null&&de(N),P&&(T=y.Children.toArray(h.props.children).filter(O).some(function(Y,w){var _=N||(typeof window!="undefined"?window:void 0);return _&&_.document.activeElement===r.getTab(w)})),g=b.cloneElement(h,{children:F(h.props.children,function(Y){var w="tabs-"+m,_=u===m,L={tabRef:function(oe){r.tabNodes[w]=oe},id:r.tabIds[m],panelId:r.panelIds[m],selected:_,focus:_&&(c||T)};return p&&(L.selectedClassName=p),l&&(L.disabledClassName=l),m++,b.cloneElement(Y,L)})})}else if(C(h)){var $={id:r.panelIds[o],tabId:r.tabIds[o],selected:u===o};f&&($.forceRender=f),d&&($.selectedClassName=d),o++,g=b.cloneElement(h,$)}return g})},a.isTabFromContainer=function(r){if(!ee(r))return!1;var o=r.parentElement;do{if(o===this.node)return!0;if(o.getAttribute("data-rttabs"))break;o=o.parentElement}while(o);return!1},a.render=function(){var r=this,o=this.props;o.children;var s=o.className;o.disabledTabClassName;var i=o.domRef;o.focus,o.forceRenderTabPanel,o.onSelect,o.selectedIndex,o.selectedTabClassName,o.selectedTabPanelClassName,o.environment,o.disableUpDownKeys;var l=ue(o,ce);return y.createElement("div",S({},l,{className:j(s),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function(f){r.node=f,i&&i(f)},"data-rttabs":!0}),this.getChildren())},t}(b.Component);H.defaultProps={className:"react-tabs",focus:!1};H.propTypes={};var pe=["children","defaultIndex","defaultFocus"];function be(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,o;for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function he(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,k(e,t)}function k(e,t){return k=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},k(e,t)}var ve=0,R=1,J=function(e){he(t,e);function t(n){var r;return r=e.call(this,n)||this,r.handleSelected=function(o,s,i){var l=r.props.onSelect,c=r.state.mode;if(!(typeof l=="function"&&l(o,s,i)===!1)){var f={focus:i.type==="keydown"};c===R&&(f.selectedIndex=o),r.setState(f)}},r.state=t.copyPropsToState(r.props,{},n.defaultFocus),r}t.getDerivedStateFromProps=function(r,o){return t.copyPropsToState(r,o)},t.getModeFromProps=function(r){return r.selectedIndex===null?R:ve},t.copyPropsToState=function(r,o,s){s===void 0&&(s=!1);var i={focus:s,mode:t.getModeFromProps(r)};if(i.mode===R){var l=Math.max(0,ne(r.children)-1),c=null;o.selectedIndex!=null?c=Math.min(o.selectedIndex,l):c=r.defaultIndex||0,i.selectedIndex=c}return i};var a=t.prototype;return a.render=function(){var r=this.props,o=r.children;r.defaultIndex,r.defaultFocus;var s=be(r,pe),i=this.state,l=i.focus,c=i.selectedIndex;return s.focus=l,s.onSelect=this.handleSelected,c!=null&&(s.selectedIndex=c),y.createElement(H,s,o)},t}(b.Component);J.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null,environment:null,disableUpDownKeys:!1};J.propTypes={};J.tabsRole="Tabs";var me=["children","className"];function A(){return A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},A.apply(this,arguments)}function ye(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,o;for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function ge(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,U(e,t)}function U(e,t){return U=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},U(e,t)}var Q=function(e){ge(t,e);function t(){return e.apply(this,arguments)||this}var a=t.prototype;return a.render=function(){var r=this.props,o=r.children,s=r.className,i=ye(r,me);return y.createElement("ul",A({},i,{className:j(s),role:"tablist"}),o)},t}(b.Component);Q.defaultProps={className:"react-tabs__tab-list"};Q.propTypes={};Q.tabsRole="TabList";var Te=["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"];function K(){return K=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},K.apply(this,arguments)}function _e(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,o;for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function Ne(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,M(e,t)}function M(e,t){return M=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},M(e,t)}var E="react-tabs__tab",V=function(e){Ne(t,e);function t(){return e.apply(this,arguments)||this}var a=t.prototype;return a.componentDidMount=function(){this.checkFocus()},a.componentDidUpdate=function(){this.checkFocus()},a.checkFocus=function(){var r=this.props,o=r.selected,s=r.focus;o&&s&&this.node.focus()},a.render=function(){var r,o=this,s=this.props,i=s.children,l=s.className,c=s.disabled,f=s.disabledClassName;s.focus;var u=s.id,p=s.panelId,d=s.selected,N=s.selectedClassName,I=s.tabIndex,h=s.tabRef,g=_e(s,Te);return y.createElement("li",K({},g,{className:j(l,(r={},r[N]=d,r[f]=c,r)),ref:function(T){o.node=T,h&&h(T)},role:"tab",id:u,"aria-selected":d?"true":"false","aria-disabled":c?"true":"false","aria-controls":p,tabIndex:I||(d?"0":null),"data-rttab":!0}),i)},t}(b.Component);V.defaultProps={className:E,disabledClassName:E+"--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:E+"--selected"};V.propTypes={};V.tabsRole="Tab";var Pe=["children","className","forceRender","id","selected","selectedClassName","tabId"];function W(){return W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},W.apply(this,arguments)}function Oe(e,t){if(e==null)return{};var a={},n=Object.keys(e),r,o;for(o=0;o<n.length;o++)r=n[o],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}function Ce(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,q(e,t)}function q(e,t){return q=Object.setPrototypeOf||function(n,r){return n.__proto__=r,n},q(e,t)}var te="react-tabs__tab-panel",X=function(e){Ce(t,e);function t(){return e.apply(this,arguments)||this}var a=t.prototype;return a.render=function(){var r,o=this.props,s=o.children,i=o.className,l=o.forceRender,c=o.id,f=o.selected,u=o.selectedClassName,p=o.tabId,d=Oe(o,Pe);return y.createElement("div",W({},d,{className:j(i,(r={},r[u]=f,r)),role:"tabpanel",id:c,"aria-labelledby":p}),l||f?s:null)},t}(b.Component);X.defaultProps={className:te,forceRender:!1,selectedClassName:te+"--selected"};X.propTypes={};X.tabsRole="TabPanel";export{J as T,Q as a,V as b,X as c};
