(this["webpackJsonptable-assignment"]=this["webpackJsonptable-assignment"]||[]).push([[0],{34:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),r=c(19),a=c.n(r),j=c(11),i=c(2),l=c(8),o=c.n(l),h=c(22),b=c(13),d=c(14),u=c(1),O=function(){return Object(u.jsx)("header",{children:Object(u.jsxs)("nav",{children:[Object(u.jsx)("h1",{children:"Table"}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/about",children:"About"})})]})]})})},x=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){function e(e){return t.apply(this,arguments)}function t(){return(t=Object(b.a)(o.a.mark((function e(t){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,s([].concat(Object(h.a)(c),[r]));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e("taichi-dev"),e("Adarshkumar03"),e("ota-meshi"),e("edenhill"),e("shivammathur")}),[]),Object(u.jsxs)("div",{className:"home",children:[Object(u.jsx)(O,{}),Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Name"}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Company"}),Object(u.jsx)("th",{children:"Followers"}),Object(u.jsx)("th",{children:"Following"})]}),c.map((function(e){return Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:e.name}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.company}),Object(u.jsx)("td",{children:e.followers}),Object(u.jsx)("td",{children:e.following})]})}))]})]})},p=function(){var e=Object(n.useState)(null),t=Object(d.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(b.a)(o.a.mark((function e(t){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/users/".concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}("Adarshkumar03")}),[]),Object(u.jsxs)("div",{children:[Object(u.jsx)(O,{}),Object(u.jsx)("div",{id:"gradient"}),c&&Object(u.jsxs)("div",{id:"card",children:[Object(u.jsx)("img",{src:c.avatar_url}),Object(u.jsx)("h2",{children:c.name}),Object(u.jsx)("p",{children:c.email?c.email:"NaN"}),Object(u.jsx)("p",{children:c.company?c.company:"NaN"}),Object(u.jsxs)("span",{className:"left bottom",children:["Followers: ",c.followers]}),Object(u.jsxs)("span",{className:"right bottom",children:["Following: ",c.following]})]})]})},m=function(){return Object(u.jsx)(j.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",component:x}),Object(u.jsx)(i.a,{exact:!0,path:"/about",component:p})]})})};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fd9c1668.chunk.js.map