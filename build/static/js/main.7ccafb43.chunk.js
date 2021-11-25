(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{2:function(e,t,n){e.exports={title:"Styles_title__2O54i",section:"Styles_section__3hTyO",contact_form:"Styles_contact_form__mmTsL",contact_formLabel:"Styles_contact_formLabel__1v9Pz",inputWindow:"Styles_inputWindow__3UisN",filterBox:"Styles_filterBox__ZLGqB",filterInput:"Styles_filterInput___T2kw",contactList:"Styles_contactList__12ZdO",listItem:"Styles_listItem__1jBtj",btn:"Styles_btn__20x5-",link:"Styles_link__26V-S",activeLink:"Styles_activeLink__13zUj",user_container:"Styles_user_container__3xVOA",user_name:"Styles_user_name__1SET3"}},7:function(e,t,n){e.exports={title:"views_title__-fH05",section:"views_section__3B5U0",user_form:"views_user_form__1oKyX",user_label:"views_user_label__6dQ5A"}},75:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchContacts",(function(){return w})),n.d(a,"addNewContact",(function(){return N})),n.d(a,"deleteContact",(function(){return y})),n.d(a,"default",(function(){return k}));var c={};n.r(c),n.d(c,"getLoading",(function(){return L})),n.d(c,"getFilter",(function(){return S})),n.d(c,"getAllContacts",(function(){return I})),n.d(c,"getVisibleContacts",(function(){return A}));var r=n(0),s=n.n(r),i=n(26),o=n.n(i),l=n(17),u=n(3),j=n(41),b=n(28),d=n(4),f=n(16),O=n(42),h=n.n(O),m=n(15),p=n.n(m),x=n(19),v=n(18),_=n.n(v);_.a.defaults.baseURL="https://61980945164fa60017c22f32.mockapi.io";var g,C,w=Object(d.c)("contacts/fetchContacts",function(){var e=Object(x.a)(p.a.mark((function e(t,n){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,_.a.get("/contacts");case 4:return c=e.sent,r=c.data,e.abrupt("return",r);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",a(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),N=Object(d.c)("contacts/addNewContact",function(){var e=Object(x.a)(p.a.mark((function e(t,n){var a,c,r,s,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,c=t.phone,r=n.rejectWithValue,e.prev=2,e.next=5,_.a.post("/contacts",{name:a,phone:c});case 5:return s=e.sent,i=s.data,e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(2),r(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}()),y=Object(d.c)("contacts/deleteContact",function(){var e=Object(x.a)(p.a.mark((function e(t,n){var a,c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.rejectWithValue,e.prev=1,e.next=4,_.a.delete("/contacts/".concat(t));case 4:return c=e.sent,r=c.data,e.abrupt("return",r.id);case 9:e.prev=9,e.t0=e.catch(1),a(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,n){return e.apply(this,arguments)}}()),k={fetchContacts:w,addNewContact:N,deleteContact:y},L=function(e){return e.contacts.loading},S=function(e){return e.contacts.filter},I=function(e){return e.contacts.items},A=function(e){var t=I(e),n=S(e).toLowerCase();return t.filter((function(e){return e.name.toLowerCase().includes(n)}))},W=Object(d.b)("contacts/filter"),B=n(5),z=n(8),F=Object(d.d)([],(g={},Object(B.a)(g,k.fetchContacts.fulfilled,(function(e,t){return t.payload})),Object(B.a)(g,k.addNewContact.fulfilled,(function(e,t){var n=t.payload;return[].concat(Object(b.a)(e),[n])})),Object(B.a)(g,k.deleteContact.fulfilled,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),g)),U=Object(d.d)(!1,(C={},Object(B.a)(C,k.fetchContacts.pending,(function(){return!0})),Object(B.a)(C,k.fetchContacts.fulfilled,(function(){return!1})),Object(B.a)(C,k.fetchContacts.rejected,(function(){return!1})),Object(B.a)(C,k.addNewContact.pending,(function(){return!0})),Object(B.a)(C,k.addNewContact.fulfilled,(function(){return!1})),Object(B.a)(C,k.addNewContact.rejected,(function(){return!1})),Object(B.a)(C,k.deleteContact.pending,(function(){return!0})),Object(B.a)(C,k.deleteContact.fulfilled,(function(){return!1})),Object(B.a)(C,k.deleteContact.rejected,(function(){return!1})),C)),V=Object(d.d)("",Object(B.a)({},W,(function(e,t){return t.payload}))),R=Object(d.d)(null,{}),E=Object(z.b)({items:F,filter:V,loading:U,error:R});_.a.defaults.baseURL="https://connections-api.herokuapp.com";var P=Object(d.c)("auth/register",function(){var e=Object(x.a)(p.a.mark((function e(t){var n,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,_.a.post("/users/signup",t);case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),T={register:P},Z={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUsername:function(e){return e.auth.user.name}},D=Object(d.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1},extraReducers:Object(B.a)({},T.register.fulfilled,(function(e,t){}))}).reducer,q=Object(b.a)(Object(d.f)({serializableCheck:{ignoredActions:[f.a,f.f,f.b,f.c,f.d,f.e]}})),J={key:"auth",storage:h.a,whitelist:["token"]},H=Object(d.a)({reducer:{auth:Object(f.g)(J,D),contacts:E},middleware:q,devTools:!1}),M=Object(f.h)(H),G=(n(75),n(10)),K=n(1);function Q(e){var t=e.children;return Object(K.jsx)("div",{children:t})}var X=n(2),$=n.n(X);function Y(){return Object(K.jsxs)("nav",{children:[Object(K.jsx)(l.b,{to:"/",exact:!0,className:$.a.link,activeClassName:$.a.activeLink,children:"Home"}),Object(K.jsx)(l.b,{to:"/contacts",exact:!0,className:$.a.link,activeClassName:$.a.activeLink,children:"Contacts"})]})}function ee(){return Object(K.jsxs)("div",{children:[Object(K.jsx)(l.b,{to:"/register",exact:!0,className:$.a.link,activeClassName:$.a.activeLink,children:"Registration"}),Object(K.jsx)(l.b,{to:"/login",exact:!0,className:$.a.link,activeClassName:$.a.activeLink,children:"Log In"})]})}function te(){var e=Object(u.b)(),t=Object(u.c)(Z.getUsername);return Object(K.jsxs)("div",{className:$.a.user_container,children:[Object(K.jsxs)("span",{className:$.a.user_name,children:["Welcome, ",t]}),Object(K.jsx)("button",{type:"button",onClick:function(){return e(T.logOut())},children:"Log Out"})]})}function ne(){var e=Object(u.c)(Z.getIsLoggedIn);return Object(K.jsxs)("header",{className:$.a.section,children:[Object(K.jsx)(Y,{}),e?Object(K.jsx)(te,{}):Object(K.jsx)(ee,{}),Object(K.jsx)("h2",{className:$.a.title,children:"Navigation"})]})}var ae=n(7),ce=n.n(ae),re=function(){return Object(K.jsx)("div",{children:Object(K.jsx)("h1",{className:ce.a.title,children:"Welcome to our phonebook service"})})},se=n(14);function ie(){var e=Object(u.b)(),t=Object(r.useState)(""),n=Object(se.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(se.a)(s,2),o=i[0],l=i[1],j=Object(r.useState)(""),b=Object(se.a)(j,2),d=b[0],f=b[1],O=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":return c(a);case"email":return l(a);case"password":return f(a);default:return}};return Object(K.jsxs)("div",{children:[Object(K.jsx)("h1",{children:"Registration page"}),Object(K.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(T.register({name:a,email:o,password:d})),c(""),l(""),f("")},className:ce.a.user_form,autoComplete:"off",children:[Object(K.jsxs)("label",{className:ce.a.user_label,children:["Name",Object(K.jsx)("input",{type:"text",name:"name",value:a,onChange:O})]}),Object(K.jsxs)("label",{className:ce.a.user_label,children:["Email",Object(K.jsx)("input",{type:"email",name:"email",value:o,onChange:O})]}),Object(K.jsxs)("label",{className:ce.a.user_label,children:["Password",Object(K.jsx)("input",{type:"password",name:"password",value:d,onChange:O})]}),Object(K.jsx)("button",{type:"submit",children:"Register"})]})]})}function oe(){var e=Object(u.b)(),t=Object(r.useState)(""),n=Object(se.a)(t,2),a=n[0],c=n[1],s=Object(r.useState)(""),i=Object(se.a)(s,2),o=i[0],l=i[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":return c(a);case"password":return l(a);default:return}};return Object(K.jsxs)("div",{children:[Object(K.jsx)("h1",{children:"Login page"}),Object(K.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(T.logIn({email:a,password:o})),c(""),l("")},className:ce.a.user_form,autoComplete:"off",children:[Object(K.jsxs)("lable",{style:ce.a.user_label,children:["Email",Object(K.jsx)("input",{type:"email",name:"email",value:a,onChange:j})]}),Object(K.jsxs)("lable",{className:ce.a.user_label,children:["Password",Object(K.jsx)("input",{type:"password",name:"password",value:o,onChange:j})]})]})]})}var le=n(86);function ue(){var e=Object(r.useState)(""),t=Object(se.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(se.a)(c,2),i=s[0],o=s[1],l=Object(u.c)(I),j=Object(u.b)(),b=Object(le.a)(),d=Object(le.a)(),f=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":a(c);break;case"phone":o(c);break;default:return}},O=function(){a(""),o("")};return Object(K.jsx)("form",{onSubmit:function(e){e.preventDefault();!function(e){return l.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(n)?j(k.addNewContact({name:n,phone:i})):alert("".concat(n," is already in contacts")),O()},children:Object(K.jsxs)("div",{className:$.a.contact_form,children:[Object(K.jsxs)("label",{htmlFor:b,className:$.a.formLabel,children:["Name",Object(K.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,className:$.a.inputWindow,value:n,onChange:f,id:b})]}),Object(K.jsxs)("label",{htmlFor:d,className:$.a.contact_formLabel,children:["Phone",Object(K.jsx)("input",{type:"tel",name:"phone",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,className:$.a.inputWindow,value:i,onChange:f,id:d})]}),Object(K.jsx)("button",{type:"submit",title:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",className:$.a.btn,children:"Add contact"})]})})}var je=Object(le.a)();function be(){var e=Object(u.c)(c.getFilter),t=Object(u.b)();return Object(K.jsx)("div",{className:$.a.filterBox,children:Object(K.jsx)("label",{htmlFor:je,className:$.a.filterLabel,children:Object(K.jsx)("input",{type:"text",className:$.a.filterInput,id:je,placeholder:"Find contacts by name",value:e,onChange:function(e){return t(W(e.target.value))}})})})}function de(){var e=Object(u.c)(c.getVisibleContacts),t=Object(u.b)(),n=Object(u.c)(c.getLoading);return Object(r.useEffect)((function(){t(a.fetchContacts())}),[t]),Object(K.jsxs)(K.Fragment,{children:[n&&Object(K.jsx)("h1",{children:"Loading..."}),e.length>0&&Object(K.jsx)("ul",{className:$.a.contactList,children:e.map((function(e){var n=e.id,c=e.name,r=e.phone;return Object(K.jsxs)("li",{className:$.a.listItem,children:[Object(K.jsxs)("p",{children:[c,": ",r]}),Object(K.jsx)("button",{type:"button",onClick:function(){return t(a.deleteContact(n))},className:$.a.btn,title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:"Delete"})]},n)}))})]})}function fe(){return Object(K.jsxs)("div",{className:ce.a.section,children:[Object(K.jsx)("h2",{className:ce.a.title,children:"Phonebook"}),Object(K.jsx)(ue,{}),Object(K.jsx)("h2",{className:ce.a.title,children:"Contacts"}),Object(K.jsx)(be,{}),Object(K.jsx)(de,{})]})}function Oe(){return Object(K.jsxs)(Q,{children:[Object(K.jsx)(ne,{}),Object(K.jsxs)(G.c,{children:[Object(K.jsx)(G.a,{exact:!0,path:"/",component:re}),Object(K.jsx)(G.a,{path:"/register",component:ie}),Object(K.jsx)(G.a,{path:"/login",component:oe}),Object(K.jsx)(G.a,{path:"/contacts",component:fe})]})]})}o.a.render(Object(K.jsx)(s.a.StrictMode,{children:Object(K.jsx)(u.a,{store:H,children:Object(K.jsx)(j.a,{loading:null,persistor:M,children:Object(K.jsx)(l.a,{children:Object(K.jsx)(Oe,{})})})})}),document.getElementById("root"))}},[[85,1,2]]]);
//# sourceMappingURL=main.7ccafb43.chunk.js.map