(this["webpackJsonpproexe-test-task"]=this["webpackJsonpproexe-test-task"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),c=n.n(i),s=(n(109),n(110),n(22)),l=n(14),d=n(18),o=n(84),u=n.n(o).a.create({baseURL:"https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"}),j=function(){return u.get("")},b=n(182),m=[],h={id:Object(b.a)(),name:"Default User",username:"default",email:"test@april.biz",address:{street:"some street",suite:"Apt. 123",city:"Gwenborough",zipcode:"92998-3874",geo:{lat:"-37.3159",lng:"81.1496"}},phone:"1-770-736-8031 x56442",website:"hildegard.org",company:{name:"Romaguera-Crona",catchPhrase:"Multi-layered client-server neural-net",bs:"harness real-time e-markets"}},O="/users/SET-USERS",x="/users/ADD-USER",f="/users/DELETE-USER",y="/users/UPDATE-USER",p=function(){return function(e){j().then((function(t){var n;e((n=t.data,{type:O,users:n}))}))}},g=function(e,t){return function(n){var a;n((a=Object(d.a)(Object(d.a)({},h),{},{name:e,email:t}),{type:x,user:a}))}},v=function(e){return function(t){t({type:f,userId:e})}},k=function(e,t,n,a,r){return function(i){i(function(e,t,n,a,r){return{type:y,userId:e,name:t,username:n,city:a,email:r}}(e,t,n,a,r))}},C=n(190),w=n(194),F=n(193),S=n(189),U=n(191),A=n(192),E=n(195),I=n(180),D=n(13),P=n(186),N=n(188),W=n(187),q=n(183),R=n(2),Z=function(e){var t=e.callback,n=e.title,a=e.style;return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(I.a,{style:a,onClick:t,variant:"contained",children:n})})},T=function(e){var t=a.useState(!1),n=Object(D.a)(t,2),r=n[0],i=n[1],c=Object(s.b)(),l=function(){i(!1)};return Object(R.jsxs)("div",{children:[Object(R.jsx)(Z,{callback:function(){i(!0)},title:"Delete",style:{backgroundColor:"red",color:"white"}}),Object(R.jsxs)(P.a,{open:r,onClose:l,children:[Object(R.jsx)(q.a,{children:"Delete User"}),Object(R.jsxs)(W.a,{children:["Are you sure you want to delete the ",e.name,"?"]}),Object(R.jsxs)(N.a,{children:[Object(R.jsx)(I.a,{onClick:l,children:"Cancel"}),Object(R.jsx)(I.a,{onClick:function(){c(v(e.userId)),i(!1)},children:"Delete"})]})]})]})},L=n(179),B=n(54),H=function(e){var t=a.useState(!1),n=Object(D.a)(t,2),r=n[0],i=n[1],c=Object(s.b)(),l=function(){i(!1)},o=Object(B.a)({initialValues:{email:e.email,name:e.name,username:e.username,city:e.city},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Please type your email!",e.name||(t.name="Name required"),e.username||(t.username="Username required"),e.city||(t.city="City required"),t},onSubmit:function(t){c(k(e.userId,t.name,t.username,t.city,t.email)),o.resetForm(),i(!1)}});return Object(R.jsxs)("div",{children:[Object(R.jsx)(Z,{callback:function(){i(!0)},title:"Update",style:{backgroundColor:"orange",color:"white"}}),Object(R.jsx)(P.a,{open:r,onClose:l,children:Object(R.jsxs)("form",{onSubmit:o.handleSubmit,children:[Object(R.jsx)(q.a,{children:"Update user"}),Object(R.jsxs)(W.a,{children:[Object(R.jsx)(L.a,Object(d.a)({autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,variant:"standard"},o.getFieldProps("name"))),o.touched.name&&o.errors.name&&Object(R.jsx)("div",{style:{color:"red"},children:o.errors.name}),Object(R.jsx)(L.a,Object(d.a)({autoFocus:!0,margin:"dense",id:"username",label:"User name",type:"text",fullWidth:!0,variant:"standard"},o.getFieldProps("username"))),o.touched.username&&o.errors.username&&Object(R.jsx)("div",{style:{color:"red"},children:o.errors.username}),Object(R.jsx)(L.a,Object(d.a)({autoFocus:!0,margin:"dense",id:"city",label:"City",type:"text",fullWidth:!0,variant:"standard"},o.getFieldProps("city"))),o.touched.city&&o.errors.city&&Object(R.jsx)("div",{style:{color:"red"},children:o.errors.city}),Object(R.jsx)(L.a,Object(d.a)({autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,variant:"standard"},o.getFieldProps("email"))),o.touched.email&&o.errors.email&&Object(R.jsx)("div",{style:{color:"red"},children:o.errors.email})]}),Object(R.jsxs)(N.a,{children:[Object(R.jsx)(I.a,{onClick:l,children:"Cancel"}),Object(R.jsx)(I.a,{type:"submit",children:"Update"})]})]})})]})},M=function(e){var t={backgroundColor:"#808080"},n=function(e){var t=Object(a.useState)(null),n=Object(D.a)(t,2),r=n[0],i=n[1];return{items:Object(a.useMemo)((function(){var t=Object(l.a)(e);return null!==r&&t.sort((function(e,t){return e[r.key]<t[r.key]?"ascending"===r.direction?-1:1:e[r.key]>t[r.key]?"ascending"===r.direction?1:-1:0})),t}),[e,r]),requestSort:function(e){var t="ascending";r&&r.key===e&&"ascending"===r.direction&&(t="descending"),i({key:e,direction:t})},sortConfig:r}}(e.users),r=n.items,i=n.requestSort,c=n.sortConfig;return Object(R.jsx)(E.a,{sx:{width:"100%",overflow:"hidden"},children:Object(R.jsx)(S.a,{sx:{maxHeight:"600px"},children:Object(R.jsxs)(C.a,{"aria-label":"simple table",stickyHeader:!0,children:[Object(R.jsx)(U.a,{children:Object(R.jsxs)(A.a,{style:{},children:[Object(R.jsx)(F.a,{align:"left",style:t,children:"Id"}),Object(R.jsx)(F.a,{align:"left",style:t,children:"Name"}),Object(R.jsx)(F.a,{align:"left",style:t,children:Object(R.jsx)(I.a,{onClick:function(){return i("username")},className:function(e){if(c)return c.key===e?c.direction:void 0}("username"),children:"User name"})}),Object(R.jsx)(F.a,{align:"left",style:t,children:"City"}),Object(R.jsx)(F.a,{align:"left",style:t,children:"Email"}),Object(R.jsx)(F.a,{align:"left",style:t,children:"Actions"})]})}),Object(R.jsx)(w.a,{children:r.map((function(e,t){return Object(R.jsxs)(A.a,{sx:{"&:last-child td, &:last-child th":{border:0},"&:nth-of-type(odd)":{backgroundColor:"#F8F7FD"}},children:[Object(R.jsx)(F.a,{component:"th",scope:"row",align:"left",style:{width:"10%",textOverflow:"ellipsis",overflow:"hidden"},children:e.id}),Object(R.jsx)(F.a,{align:"left",style:{width:"30%"},children:e.name}),Object(R.jsx)(F.a,{align:"left",style:{width:"20%"},children:e.username}),Object(R.jsx)(F.a,{align:"left",style:{width:"20%"},children:e.address.city}),Object(R.jsx)(F.a,{align:"left",style:{width:"15%"},children:e.email}),Object(R.jsxs)(F.a,{align:"left",style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[Object(R.jsx)(T,{userId:e.id,name:e.name}),Object(R.jsx)(H,{userId:e.id,name:e.name,email:e.email,username:e.username,city:e.address.city})]})]},"".concat(t).concat(e.name))}))})]})})})},z=function(){var e=a.useState(!1),t=Object(D.a)(e,2),n=t[0],r=t[1],i=Object(s.b)(),c=function(){r(!1)},l=Object(B.a)({initialValues:{email:"",name:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Please type your email!",e.name||(t.name="Name required"),t},onSubmit:function(e){i(g(e.name,e.email)),l.resetForm(),r(!1)}});return Object(R.jsxs)("div",{children:[Object(R.jsx)(Z,{callback:function(){r(!0)},title:"Add user",style:{backgroundColor:"powderblue",color:"white"}}),Object(R.jsx)(P.a,{open:n,onClose:c,children:Object(R.jsxs)("form",{onSubmit:l.handleSubmit,children:[Object(R.jsx)(q.a,{children:"Create new user"}),Object(R.jsxs)(W.a,{children:[Object(R.jsx)(L.a,Object(d.a)({autoFocus:!0,margin:"dense",id:"name",label:"Name",type:"text",fullWidth:!0,variant:"standard"},l.getFieldProps("name"))),l.touched.name&&l.errors.name&&Object(R.jsx)("div",{style:{color:"red"},children:l.errors.name}),Object(R.jsx)(L.a,Object(d.a)({autoFocus:!0,margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,variant:"standard"},l.getFieldProps("email"))),l.touched.email&&l.errors.email&&Object(R.jsx)("div",{style:{color:"red"},children:l.errors.email})]}),Object(R.jsxs)(N.a,{children:[Object(R.jsx)(I.a,{onClick:c,children:"Cancel"}),Object(R.jsx)(I.a,{type:"submit",children:"Add"})]})]})})]})},J=function(){var e=Object(s.c)((function(e){return e.users}));return Object(R.jsxs)("div",{className:"tableWrapper",children:[Object(R.jsxs)("div",{className:"tableHeader",children:[Object(R.jsx)("h3",{children:"User list"}),Object(R.jsx)(z,{})]}),Object(R.jsx)(M,{users:e})]})},V=function(){var e=Object(s.b)();return Object(a.useEffect)((function(){e(p())}),[e]),Object(R.jsxs)("div",{className:"main",children:[Object(R.jsx)("h2",{children:"Dashboard"}),Object(R.jsx)("div",{className:"mainBlock",children:Object(R.jsx)(J,{})})]})};var $=function(){return Object(R.jsx)("div",{className:"App",children:Object(R.jsx)(V,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,196)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))},G=n(57),K=n(91),Q=Object(G.b)({users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return t.users.map((function(e){return Object(d.a)({},e)}));case x:return[Object(d.a)({},t.user)].concat(Object(l.a)(e));case f:return e.filter((function(e){return e.id!==t.userId}));case y:return e.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{name:t.name,username:t.username,address:Object(d.a)(Object(d.a)({},e.address),{},{city:t.city}),email:t.email}):e}));default:return e}}}),X=Object(G.c)(Q,Object(G.a)(K.a));window.store=X,c.a.render(Object(R.jsx)(r.a.StrictMode,{children:Object(R.jsx)(s.a,{store:X,children:Object(R.jsx)($,{})})}),document.getElementById("root")),_()}},[[136,1,2]]]);
//# sourceMappingURL=main.8254c9b3.chunk.js.map