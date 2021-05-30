(this.webpackJsonptodolistfrontend=this.webpackJsonptodolistfrontend||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c,a=n(0),s=n.n(a),r=n(10),o=n.n(r),i=(n(28),n.p,n(29),n(9),n(6)),u=n(3),d=n(2),p=n.n(d),l=n(4),f=n(7),b=n(8),j=n.n(b),O=Object(f.b)("tasks/fetchTasks",Object(l.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 2:return t=e.sent,e.abrupt("return",t?t.data:[]);case 4:case"end":return e.stop()}}),e)})))),m=Object(f.b)("tasks/createTask",function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.post("https://todosgetc.azurewebsites.net/api/tasks",t);case 2:return e.next=4,j.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 4:return n=e.sent,e.abrupt("return",n?n.data:[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(f.b)("tasks/deleteTask",function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("https://todosgetc.azurewebsites.net/api/tasks/"+t);case 2:return e.next=4,j.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 4:return n=e.sent,e.abrupt("return",n?n.data:[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(f.b)("tasks/completeTask",function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.put("https://todosgetc.azurewebsites.net/api/tasks/"+t.id,t);case 2:return e.next=4,j.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 4:return n=e.sent,e.abrupt("return",n?n.data:[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g=Object(f.c)({name:"todos",initialState:{value:0,todoItems:[]},reducers:{tasksRetrieved:function(e,t){var n=t.payload;e.todoItems=n},newItem:function(e,t){var n=t.payload;e.todoItems.push({description:n.description,completed:!1})},completeItem:function(e,t){var n=t.payload;e.todoItems.forEach((function(e){e.completed=n.completed}))},taskCompleted:function(e){e.todoItems.forEach((function(e){e.completed=!e.completed}))},deleteItem:function(e,t){t.payload;console.log("onDelete")}},extraReducers:(c={},Object(u.a)(c,O.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(u.a)(c,O.pending,(function(e,t){})),Object(u.a)(c,O.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),Object(u.a)(c,m.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(u.a)(c,m.pending,(function(e,t){})),Object(u.a)(c,m.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),Object(u.a)(c,h.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(u.a)(c,h.pending,(function(e,t){})),Object(u.a)(c,h.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),Object(u.a)(c,x.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(u.a)(c,x.pending,(function(e,t){})),Object(u.a)(c,x.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),c)}),k=g.actions,v=(k.newItem,k.completeItem,k.deleteItem,k.taskCompleted,k.tasksRetrieved,g.reducer),y=n(1);var w=function(e){var t=Object(i.b)();return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{checked:e.completed,type:"checkbox",onChange:function(){return t(x({description:e.description,id:e.id,completed:!e.completed}))}}),Object(y.jsx)("span",{children:e.description}),Object(y.jsx)("button",{onClick:function(){return t(h(e.id))},children:"Delete"})]})};var I=function(){var e=Object(i.c)((function(e){return e.todos.todoItems})),t=Object(i.b)();return Object(a.useEffect)((function(){t(O())}),[]),e.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(w,{description:e.description,completed:e.completed,id:e.id})},e.id)}))},S=n(22),N=n(23);function T(){var e=Object(N.a)(),t=e.register,n=e.handleSubmit,c=e.watch,a=e.formState.errors,s=Object(i.b)();return console.log(c("taskDesc")),Object(y.jsxs)("form",{onSubmit:n((function(e){s(m({description:e.taskDesc}))})),children:[Object(y.jsx)("input",Object(S.a)({defaultValue:"New Task"},t("taskDesc",{required:!0}))),a.exampleRequired&&Object(y.jsx)("span",{children:"Enter task description"}),Object(y.jsx)("input",{type:"submit"})]})}var z=function(){return Object(y.jsxs)("div",{className:"Item",children:[Object(y.jsx)(T,{}),Object(y.jsx)(I,{})]})};var C=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("header",{className:"App-header",children:"Todo List"}),Object(y.jsx)("div",{className:"App-body",children:Object(y.jsx)(z,{})})]})},D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},J=Object(f.a)({reducer:{todos:v}});o.a.render(Object(y.jsx)(s.a.StrictMode,{children:Object(y.jsx)(i.a,{store:J,children:Object(y.jsx)(C,{})})}),document.getElementById("root")),D()},9:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.529ebc57.chunk.js.map