(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{37:function(e,a,n){e.exports=n(67)},66:function(e,a,n){},67:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),r=n(32),o=n.n(r),l=n(13),s=(n(14),n(6)),m=n(7),i=n(9),u=n(8),d=n(2),p=n.n(d),b=n(11),v=n(36),f=n(16),E=n(12),h=n.n(E),N=c.a.createContext(),g=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:[a.payload].concat(Object(v.a)(e.contacts))});case"UPDATE_CONTACT":return Object(f.a)(Object(f.a)({},e),{},{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},C=(t.Component,N.Consumer),y=(t.Component,t.Component,n(17)),O=n(35),k=n.n(O),w=function(e){var a=e.label,n=e.name,t=e.value,r=e.placeHolder,o=e.type,l=e.onChange,s=e.error;return c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:n},a),c.a.createElement("input",{type:o,className:k()("form-control form-control-lg",{"is-invalid":s}),placeholder:r,name:n,value:t,onChange:l}),s&&c.a.createElement("div",{className:"invalid-feedback"},s))};w.defaultProps={type:"text"};var A=w;t.Component,t.Component;function T(e){var a=e.branding;return c.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0 "},c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"/",className:"navbar-brand"},a),c.a.createElement("div",null,c.a.createElement("ul",{className:"navbar-nav mr-auto"},c.a.createElement("li",null,c.a.createElement(l.b,{to:"/",className:"nav-link"},c.a.createElement("i",{className:"fas fa-home"}),"Home")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/contact/add",className:"nav-link"},c.a.createElement("i",{className:"fas fa-plus"}),"Add")),c.a.createElement("li",null,c.a.createElement(l.b,{to:"/about",className:"nav-link"},c.a.createElement("i",{className:"fas fa-question"}),"About"))))))}T.defaultProps={branding:"My App"};n(65),n(66);var j=function(){};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.d6a83d59.chunk.js.map