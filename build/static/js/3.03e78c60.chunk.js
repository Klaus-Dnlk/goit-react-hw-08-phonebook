(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{89:function(e,t,n){e.exports={title:"views_title__-fH05",section:"views_section__3B5U0",user_form:"views_user_form__1oKyX",user_label:"views_user_label__6dQ5A",user_input:"views_user_input__q0bLz"}},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(32);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,c=void 0;try{for(var o,i=e[Symbol.iterator]();!(r=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(s){a=!0,c=s}finally{try{r||null==i.return||i.return()}finally{if(a)throw c}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},95:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r,a=n(0),c=n(7),o=n(89),i=n.n(o),s=n(90),u=new Uint8Array(16);function l(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(u)}var b=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var d=function(e){return"string"===typeof e&&b.test(e)},f=[],m=0;m<256;++m)f.push((m+256).toString(16).substr(1));var j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!d(n))throw TypeError("Stringified UUID is invalid");return n};var h=function(e,t,n){var r=(e=e||{}).random||(e.rng||l)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var a=0;a<16;++a)t[n+a]=r[a];return t}return j(r)},p=n(9),v=n(33),O=n(4),y=n.n(O),g=n(1);function x(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(""),i=Object(s.a)(o,2),u=i[0],l=i[1],b=Object(c.c)(v.getAllContacts),d=Object(c.b)(),f=h(),m=h(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":l(a);break;default:return}},O=function(){r(""),l("")};return Object(g.jsx)("form",{onSubmit:function(e){e.preventDefault();!function(e){return b.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(n)?d(p.default.addNewContact({name:n,number:u})):alert("".concat(n," is already in contacts")),O()},children:Object(g.jsxs)("div",{className:y.a.contact_form,children:[Object(g.jsxs)("label",{htmlFor:f,className:y.a.formLabel,children:["Name",Object(g.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:y.a.inputWindow,value:n,onChange:j,id:f})]}),Object(g.jsxs)("label",{htmlFor:m,className:y.a.contact_formLabel,children:["number",Object(g.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:y.a.inputWindow,value:u,onChange:j,id:m})]}),Object(g.jsx)("button",{type:"submit",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",className:y.a.btn,children:"Add contact"})]})})}var w=n(34),_=h();function C(){var e=Object(c.c)(w.d.getFilter),t=Object(c.b)();return Object(g.jsx)("div",{className:y.a.filterBox,children:Object(g.jsx)("label",{htmlFor:_,className:y.a.filterLabel,children:Object(g.jsx)("input",{type:"text",className:y.a.filterInput,id:_,placeholder:"Find contacts by name",value:e,onChange:function(e){return t(Object(w.a)(e.target.value))}})})})}function N(){var e=Object(c.c)(w.d.getVisibleContacts),t=Object(c.b)(),n=Object(c.c)(w.d.getLoading);return Object(g.jsxs)(g.Fragment,{children:[n&&Object(g.jsx)("h1",{children:"Loading..."}),e.length>0&&Object(g.jsx)("ul",{className:y.a.contactList,children:e.map((function(e){var n=e.id,r=e.name,a=e.number;return Object(g.jsxs)("li",{className:y.a.listItem,children:[Object(g.jsxs)("p",{children:[r,": ",a]}),Object(g.jsx)("button",{type:"button",onClick:function(){return t(w.b.deleteContact(n))},className:y.a.btn,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:"Delete"})]},n)}))})]})}function A(){var e=Object(c.b)();return Object(a.useEffect)((function(){e(p.default.fetchContacts())}),[e]),Object(g.jsx)(g.Fragment,{children:Object(g.jsxs)("div",{className:i.a.section,children:[Object(g.jsx)("h2",{className:i.a.title,children:"Phonebook"}),Object(g.jsx)(x,{}),Object(g.jsx)("h2",{className:i.a.title,children:"Contacts"}),Object(g.jsx)(C,{}),Object(g.jsx)(N,{})]})})}}}]);
//# sourceMappingURL=3.03e78c60.chunk.js.map