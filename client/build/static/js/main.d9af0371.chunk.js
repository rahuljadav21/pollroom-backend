(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(32),i=n.n(a),s=(n(38),n(4)),l=(n(39),n(10)),r=n.n(l),d=n(13),u=n(14),j=n(15),p=n(17),b=n(16),m=n(0),h=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(e){var o;return Object(u.a)(this,n),(o=t.call(this,e)).signIn=Object(d.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://pollroom.herokuapp.com/auth/google","_self");case 1:case"end":return e.stop()}}),e)}))),o.state={},o}return Object(j.a)(n,[{key:"render",value:function(){return document.title="Poll Room",Object(m.jsx)("div",{className:"card m-auto",style:{width:"18rem",marginTop:"14vh"},children:Object(m.jsxs)("div",{className:"card-body",style:{marginTop:"14vh"},children:[Object(m.jsxs)("h5",{className:"card-title",children:[Object(m.jsx)("i",{className:"fas fa-poll"}),"  PollRoom"]}),Object(m.jsx)("h6",{className:"card-subtitle mb-2 text-muted",children:"Welcome to PollRoom."}),Object(m.jsx)("p",{className:"card-text",children:"Here you can create Your Poll Room and polls "}),Object(m.jsxs)("button",{onClick:this.signIn,className:"btn btn-danger",children:[Object(m.jsx)("i",{className:"fab fa-google"}),"  SignIn"]})]})})}}]),n}(o.Component),O=n(8),x=n.n(O),g=n(11),f=n(2),_=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(j.a)(n,[{key:"render",value:function(){return document.title="Poll Room",Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"container m-auto my-5",style:{width:"65%",marginTop:"7vh"},children:Object(m.jsx)("h4",{children:"Create New Room with room code and you can also Enter with shared room Code. "})}),Object(m.jsxs)("div",{style:{display:"flex",flexwrap:"wrap",marginTop:"3vh",justifyContent:"center",alignItems:"center",flexWrap:"wrap",flexDirection:"row",alignContent:"center"},children:[Object(m.jsx)(g.b,{to:"/pollroom/find",style:{marginRight:"5vh"},className:"btn btn-sm btn-info",children:"Join"}),Object(m.jsx)(g.b,{to:"/pollroom/create",className:"btn btn-sm btn-success",children:"Create"})]})]})}}]),n}(o.Component);var v=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),i=Object(s.a)(a,2),l=i[0],r=i[1],d=Object(f.f)();return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"mt-3",children:"Create Room"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/pollroom/create",{roomName:n,roomCode:l},{headers:{"content-type":"application/json"}}).then((function(e){console.log(e.data._id),d.push("/pollroom/room/".concat(e.data._id))})).catch((function(e){console.log(e)}))},className:"container validate-form",style:{display:"flex",flexDirection:"column",alignItems:"center"},method:"post",children:[Object(m.jsxs)("div",{className:"container mt-4",style:{width:"20rem",marginTop:"8vh",display:"flex",flexDirection:"column"},children:[Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"Room :"}),Object(m.jsx)("input",{required:!0,onChange:function(e){c(e.target.value)},type:"text",className:"form-control",id:"basic-url",placeholder:"Room Name",name:"roomName","aria-describedby":"basic-addon3"})]}),Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"Room Code :"}),Object(m.jsx)("input",{required:!0,onChange:function(e){r(e.target.value)},type:"password",className:"form-control",id:"basic-url",name:"roomCode","aria-describedby":"basic-addon3"})]})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-success",children:"Create"})]})]})};var N=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)(""),i=Object(s.a)(a,2),l=i[0],r=i[1],d=Object(o.useState)(""),u=Object(s.a)(d,2),j=u[0],p=u[1],b=Object(f.f)();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[0!==j.length?Object(m.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[Object(m.jsx)("strong",{children:"Error :"})," ",j,Object(m.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})]}):"",Object(m.jsx)("h1",{className:"mt-3",children:"Find Room"}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/pollroom/find",{roomName:n,roomCode:l},{headers:{"content-type":"application/json"}}).then((function(e){"RoomName or RoomCode is Wrong"===e.data?p(e.data):b.push("/pollroom/room/".concat(e.data._id))})).catch((function(e){console.log(e)}))},className:"container validate-form",style:{display:"flex",flexDirection:"column",alignItems:"center"},action:"/pollroom/find",method:"get",children:[Object(m.jsxs)("div",{className:"container mt-4",style:{width:"20rem",marginTop:"8vh",display:"flex",flexDirection:"column"},children:[Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("span",{className:"input-group-text",id:"basic-addon3",children:"Room :"}),Object(m.jsx)("input",{required:!0,onChange:function(e){c(e.target.value)},type:"text",className:"form-control",id:"basic-url1",placeholder:"Room Name",name:"roomName","aria-describedby":"basic-addon3"})]}),Object(m.jsxs)("div",{className:"input-group mb-3",children:[Object(m.jsx)("span",{className:"input-group-text",id:"basic-addon2",children:"Room Code :"}),Object(m.jsx)("input",{required:!0,onChange:function(e){r(e.target.value)},type:"password",className:"form-control",id:"basic-url",name:"roomCode","aria-describedby":"basic-addon2"})]})]}),Object(m.jsx)("button",{className:"btn btn-info",type:"submit",children:"join"})]})]})})},y=function(e){Object(p.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var o=arguments.length,c=new Array(o),a=0;a<o;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).LogOut=Object(d.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.open("https://pollroom.herokuapp.com/auth/logout","_self");case 1:case"end":return e.stop()}}),e)}))),e}return Object(j.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("button",{className:"btn btn-danger btn-sm",onClick:this.LogOut,style:{position:"fixed",left:"2vh",top:"2vh",zIndex:"2"},children:"Log Out"})})}}]),n}(o.Component);n(65);var C=function(e){var t=e.room,n=e.polls,c=e.user,a=Object(f.f)(),i=Object(o.useState)(""),l=Object(s.a)(i,2),r=l[0],d=l[1],u=Object(o.useState)(""),j=Object(s.a)(u,2),p=j[0],b=j[1],h=function(e){e.preventDefault(),x.a.post("/pollroom/room/".concat(t._id,"/poll/").concat(p),{ans:r},{headers:{"content-type":"application/json"}}).then((function(e){a.push("/pollroom/room/".concat(t._id))})).catch((function(e){console.log(e)}))};return Object(m.jsx)(m.Fragment,{children:n.map((function(e){var t=e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length===0?0:100*e.option_1.length/(e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length),n=e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length===0?0:100*e.option_2.length/(e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length),o=e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length===0?0:100*e.option_3.length/(e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length),a=e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length===0?0:100*e.option_4.length/(e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length),i=e.option_1.length+e.option_2.length+e.option_3.length+e.option_4.length;return Object(m.jsxs)("div",{className:"poll",children:[Object(m.jsxs)("div",{className:"que",children:["Question :",e.question," "]}),Object(m.jsx)("div",{className:"res",children:Object(m.jsxs)("form",{className:"validate-form",method:"post",onSubmit:h,children:[Object(m.jsxs)("div",{className:"opt",children:[Object(m.jsx)("label",{id:"1",children:"A"}),Object(m.jsx)("input",{type:"radio",onChange:function(t){d(t.target.value),b(e._id)},defaultChecked:e.option_1.includes(c._id),disabled:e.option_1.includes(c._id)||e.option_2.includes(c._id)||e.option_3.includes(c._id)||e.option_4.includes(c._id),name:"ans",value:"option_1",id:"1"}),Object(m.jsx)("progress",{value:t,max:"100"})]}),Object(m.jsxs)("div",{className:"opt",children:[Object(m.jsx)("label",{id:"1",children:"B"}),Object(m.jsx)("input",{type:"radio",onChange:function(t){d(t.target.value),b(e._id)},defaultChecked:e.option_2.includes(c._id),disabled:e.option_1.includes(c._id)||e.option_2.includes(c._id)||e.option_3.includes(c._id)||e.option_4.includes(c._id),name:"ans",value:"option_2",id:"1"}),Object(m.jsx)("progress",{value:n,max:"100"})]}),Object(m.jsxs)("div",{className:"opt",children:[Object(m.jsx)("label",{id:"1",children:"C"}),Object(m.jsx)("input",{type:"radio",onChange:function(t){d(t.target.value),b(e._id)},defaultChecked:e.option_3.includes(c._id),disabled:e.option_1.includes(c._id)||e.option_2.includes(c._id)||e.option_3.includes(c._id)||e.option_4.includes(c._id),name:"ans",value:"option_3",id:"1"}),Object(m.jsx)("progress",{value:o,max:"100"})]}),Object(m.jsxs)("div",{className:"opt",children:[Object(m.jsx)("label",{id:"1",children:"D"}),Object(m.jsx)("input",{type:"radio",onChange:function(t){d(t.target.value),b(e._id)},defaultChecked:e.option_4.includes(c._id),disabled:e.option_1.includes(c._id)||e.option_2.includes(c._id)||e.option_3.includes(c._id)||e.option_4.includes(c._id),name:"ans",value:"option_4",id:"1"}),Object(m.jsx)("progress",{value:a,max:"100"})]}),e.option_1.includes(c._id)||e.option_2.includes(c._id)||e.option_3.includes(c._id)||e.option_4.includes(c._id)?"":Object(m.jsx)("button",{type:"submit",className:"btn btn-danger btn-sm",children:"Submit"})]})}),Object(m.jsx)("span",{class:"badge bg-dark",children:"".concat(i," Responce")})]},e._id)}))})};function w(e){var t=e.room,n=e.polls,c=e.user,a=Object(o.useState)(""),i=Object(s.a)(a,2),l=i[0],r=i[1],d=Object(f.f)();return document.title="".concat(t.roomName),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{id:"title",children:[Object(m.jsx)("h3",{children:t.roomName}),Object(m.jsx)("p",{children:"Please submit each poll only if you sure. You can only submit once. "})]}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"poll-container",children:Object(m.jsx)(C,{room:t,polls:n,user:c})}),Object(m.jsxs)("div",{className:"add-container",children:[Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),x.a.post("/pollroom/room/".concat(t._id),{question:l},{headers:{"content-type":"application/json"}}).then((function(e){d.push("/pollroom/room/".concat(t._id)),r("")})).catch((function(e){console.log(e)}))},method:"post",children:[Object(m.jsx)("textarea",{onChange:function(e){return r(e.target.value)},required:!0,name:"question",id:"",cols:"20",rows:"10",placeholder:"Paste/Type the question here"}),Object(m.jsx)("button",{type:"submit",style:{background:"#198754"},children:"Add"})]}),Object(m.jsx)(g.b,{to:"/pollroom",className:"btn btn-sm btn-info",children:"Home"})]})]})]})}var S=function(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(o.useState)([]),i=Object(s.a)(a,2),l=i[0],u=i[1],j=Object(f.g)().id,p=Object(o.useState)(!1),b=Object(s.a)(p,2),h=b[0],O=b[1];setTimeout((function(){O(!h)}),3e3),Object(o.useEffect)((function(){(function(){var e=Object(d.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("/pollroom/room/".concat(j),{withCredentials:!0}).then((function(e){c(e.data),u(e.data.polls)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j,h]);var g=Object(o.useState)({}),_=Object(s.a)(g,2),v=_[0],N=_[1];return Object(o.useEffect)((function(){x.a.get("/getuser",{withCredentials:!0}).then((function(e){N(e.data)}))}),[]),Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsx)(w,{room:n,polls:l,user:v})})};var k=function(){return Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-6 offset-3",children:Object(m.jsxs)("div",{className:"alert alert-danger",role:"alert",children:[Object(m.jsx)("h4",{className:"alert-heading",children:"Error"}),Object(m.jsx)("p",{children:"Something Went Wrong ... "})]})})})})};var R=function(){var e=Object(o.useState)({}),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){x.a.get("/getuser",{withCredentials:!0}).then((function(e){c(e.data)}))}),[]),Object(m.jsx)(g.a,{children:Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(f.c,{children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(f.a,{path:"/",component:y}),Object(m.jsx)(f.a,{path:"/error",exact:!0,component:k}),Object(m.jsx)(f.a,{path:"/pollroom",exact:!0,component:_}),Object(m.jsx)(f.a,{path:"/pollroom/create",exact:!0,component:v}),Object(m.jsx)(f.a,{path:"/pollroom/find",exact:!0,component:N}),Object(m.jsx)(f.a,{path:"/pollroom/room/:id",component:S}),Object(m.jsx)(f.a,{path:"/",exact:!0,component:h})]}):Object(m.jsx)(f.a,{path:"/",component:h})})})})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,o=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),c(e),a(e),i(e)}))};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(R,{})}),document.getElementById("root")),D()}},[[66,1,2]]]);
//# sourceMappingURL=main.d9af0371.chunk.js.map