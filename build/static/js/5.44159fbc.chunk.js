(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[5],{89:function(e,t,a){e.exports={title:"views_title__-fH05",section:"views_section__3B5U0",user_form:"views_user_form__1oKyX",user_label:"views_user_label__6dQ5A",user_input:"views_user_input__q0bLz"}},90:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var r=a(32);function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var a=[],r=!0,n=!1,s=void 0;try{for(var i,u=e[Symbol.iterator]();!(r=(i=u.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(c){n=!0,s=c}finally{try{r||null==u.return||u.return()}finally{if(n)throw s}}return a}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},93:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return l}));var r=a(90),n=a(0),s=a(7),i=a(8),u=a(89),c=a.n(u),o=a(1);function l(){var e=Object(s.b)(),t=Object(n.useState)(""),a=Object(r.a)(t,2),u=a[0],l=a[1],b=Object(n.useState)(""),m=Object(r.a)(b,2),p=m[0],f=m[1],j=Object(n.useState)(""),_=Object(r.a)(j,2),d=_[0],h=_[1],v=function(e){var t=e.target,a=t.name,r=t.value;switch(a){case"name":return l(r);case"email":return f(r);case"password":return h(r);default:return}};return Object(o.jsxs)("div",{className:c.a.section,children:[Object(o.jsx)("h1",{className:c.a.title,children:"Registration page"}),Object(o.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(i.a.register({name:u,email:p,password:d})),l(""),f(""),h("")},className:c.a.user_form,autoComplete:"off",children:[Object(o.jsxs)("label",{className:c.a.user_label,children:["Name",Object(o.jsx)("input",{type:"text",name:"name",value:u,onChange:v,className:c.a.user_input})]}),Object(o.jsxs)("label",{className:c.a.user_label,children:["Email",Object(o.jsx)("input",{type:"email",name:"email",value:p,onChange:v,className:c.a.user_input})]}),Object(o.jsxs)("label",{className:c.a.user_label,children:["Password",Object(o.jsx)("input",{type:"password",name:"password",value:d,onChange:v,className:c.a.user_input})]}),Object(o.jsx)("button",{type:"submit",className:c.a.btn,children:"Register"})]})]})}}}]);
//# sourceMappingURL=5.44159fbc.chunk.js.map