(this["webpackJsonpit-react-k-1"]=this["webpackJsonpit-react-k-1"]||[]).push([[4],{299:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh",person:"Dialogs_person__2BpLA",avatar:"Dialogs_avatar__1hg1l"}},300:function(e,s,a){"use strict";a.d(s,"a",(function(){return b}));var t=a(3),n=a(32),i=a(33),c=a(36),o=a(35),r=a(0),l=a.n(r),d=a(9),u=a(15),g=a(1),j=function(e){return{isAuth:e.auth.isAuth}},b=function(e){var s=function(s){Object(c.a)(r,s);var a=Object(o.a)(r);function r(){return Object(n.a)(this,r),a.apply(this,arguments)}return Object(i.a)(r,[{key:"render",value:function(){return this.props.isAuth?Object(g.jsx)(e,Object(t.a)({},this.props)):(console.log(this.props.isAuth),Object(g.jsx)(d.a,{to:"/login"}))}}]),r}(l.a.Component);return Object(u.b)(j)(s)}},305:function(e,s,a){"use strict";a.r(s);a(0);var t=a(125),n=a(299),i=a.n(n),c=a(12),o=a(1),r=function(e){var s="/dialogs/".concat(e.id);return Object(o.jsx)("div",{className:i.a.dialog+" "+i.a.active,children:Object(o.jsx)(c.b,{to:s,children:e.name})})},l=function(e){return Object(o.jsx)("div",{className:i.a.message,children:e.message})},d=a(65),u=a(75),g=a(126),j=a(127),b=Object(u.a)(100),m=Object(j.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsx)("form",{onSubmit:e.handleSubmit,children:Object(o.jsxs)("div",{children:[Object(o.jsx)(g.a,{component:d.b,validate:[u.b,b],name:"newMessageBody",placeholder:"Enter your message"}),Object(o.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})})),h=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(o.jsxs)("div",{className:i.a.person,children:[Object(o.jsx)("div",{className:i.a.avatar,children:Object(o.jsx)("img",{src:"https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"})}),Object(o.jsx)(r,{name:e.name,id:e.id},e.id)]})})),a=e.dialogsPage.messages.map((function(e){return Object(o.jsx)(l,{message:e.message},e.id)}));return Object(o.jsxs)("div",{className:i.a.dialogs,children:[Object(o.jsx)("div",{className:i.a.dialogsItems,children:s}),Object(o.jsx)("div",{className:i.a.messages,children:a}),Object(o.jsx)(m,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})},p=a(15),O=a(300),_=a(10),f=Object(_.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(t.b)(s))}}})),O.a)(h);s.default=f}}]);
//# sourceMappingURL=4.d43013fa.chunk.js.map