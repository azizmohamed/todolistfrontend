(this.webpackJsonptodolistfrontend=this.webpackJsonptodolistfrontend||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c,s=n(0),a=n.n(s),o=n(10),r=n.n(o),i=(n(28),n.p,n(29),n(9),n(6)),d=n(3),u=n(2),p=n.n(u),l=n(4),b=n(7),j=n(8),f=n.n(j),O=Object(b.b)("tasks/fetchTasks",Object(l.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 2:return t=e.sent,e.abrupt("return",t?t.data:[]);case 4:case"end":return e.stop()}}),e)})))),m=Object(b.b)("tasks/createTask",function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://todosgetc.azurewebsites.net/api/tasks",t);case 2:return e.next=4,f.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 4:return n=e.sent,e.abrupt("return",n?n.data:[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(b.b)("tasks/createTask",function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("https://todosgetc.azurewebsites.net/api/tasks/"+t);case 2:return e.next=4,f.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 4:return n=e.sent,e.abrupt("return",n?n.data:[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(b.c)({name:"todos",initialState:{value:0,todoItems:[]},reducers:{tasksRetrieved:function(e,t){var n=t.payload;e.todoItems=n},newItem:function(e,t){var n=t.payload;e.todoItems.push({description:n.description,completed:!1})},completeItem:function(e,t){var n=t.payload;e.todoItems.forEach((function(e){e.completed=n.completed}))},taskCompleted:function(e){e.todoItems.forEach((function(e){e.completed=!e.completed}))},deleteItem:function(e,t){t.payload;console.log("onDelete")}},extraReducers:(c={},Object(d.a)(c,O.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(d.a)(c,O.pending,(function(e,t){})),Object(d.a)(c,O.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),Object(d.a)(c,m.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(d.a)(c,m.pending,(function(e,t){})),Object(d.a)(c,m.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),Object(d.a)(c,h.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(d.a)(c,h.pending,(function(e,t){})),Object(d.a)(c,h.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),c)}),k=x.actions,v=(k.newItem,k.completeItem,k.deleteItem,k.taskCompleted),g=(k.tasksRetrieved,x.reducer),y=n(1);var I=function(e){var t=Object(i.b)();return Object(y.jsxs)("div",{children:[Object(y.jsx)("input",{checked:e.completed,type:"checkbox",onChange:function(){return t(v())}}),Object(y.jsx)("span",{children:e.description}),Object(y.jsx)("button",{onClick:function(){return t(h(e.id))},children:"Delete"})]})};var w=function(){var e=Object(i.c)((function(e){return e.todos.todoItems})),t=Object(i.b)();return Object(s.useEffect)((function(){t(O())}),[]),e.map((function(e){return Object(y.jsx)("div",{children:Object(y.jsx)(I,{description:e.description,completed:e.completed,id:e.id})},e.id)}))},S=n(22),N=n(23);function C(){var e=Object(N.a)(),t=e.register,n=e.handleSubmit,c=e.watch,s=e.formState.errors,a=Object(i.b)();return console.log(c("taskDesc")),Object(y.jsxs)("form",{onSubmit:n((function(e){a(m({description:e.taskDesc}))})),children:[Object(y.jsx)("input",Object(S.a)({defaultValue:"New Task"},t("taskDesc",{required:!0}))),s.exampleRequired&&Object(y.jsx)("span",{children:"Enter task description"}),Object(y.jsx)("input",{type:"submit"})]})}var T=function(){return Object(y.jsxs)("div",{className:"Item",children:[Object(y.jsx)(C,{}),Object(y.jsx)(w,{})]})};var D=function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("header",{className:"App-header",children:"Todo List"}),Object(y.jsx)("div",{className:"App-body",children:Object(y.jsx)(T,{})})]})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),a(e),o(e)}))},E=Object(b.a)({reducer:{todos:g}});r.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(i.a,{store:E,children:Object(y.jsx)(D,{})})}),document.getElementById("root")),z()},9:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.56531c47.chunk.js.map