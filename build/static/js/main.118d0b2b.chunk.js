(this.webpackJsonptodolistfrontend=this.webpackJsonptodolistfrontend||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c,o=n(0),s=n.n(o),r=n(9),a=n.n(r),i=(n(28),n.p,n(29),n(8),n(6)),d=n(3),u=n(2),p=n.n(u),l=n(5),j=n(7),b=n(10),f=n.n(b),m=Object(j.b)("tasks/fetchTasks",Object(l.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 2:return t=e.sent,e.abrupt("return",t?t.data:[]);case 4:case"end":return e.stop()}}),e)})))),O=Object(j.b)("tasks/createTask",function(){var e=Object(l.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("https://todosgetc.azurewebsites.net/api/tasks",t);case 2:return e.next=4,f.a.get("https://todosgetc.azurewebsites.net/api/tasks");case 4:return n=e.sent,e.abrupt("return",n?n.data:[]);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),h=Object(j.c)({name:"todos",initialState:{value:0,todoItems:[]},reducers:{tasksRetrieved:function(e,t){var n=t.payload;e.todoItems=n},newItem:function(e,t){var n=t.payload;e.todoItems.push({description:n.description,completed:!1})},completeItem:function(e,t){var n=t.payload;e.todoItems.forEach((function(e){e.completed=n.completed}))},taskCompleted:function(e){e.todoItems.forEach((function(e){e.completed=!e.completed}))},deleteItem:function(e,t){t.payload;console.log("onDelete")}},extraReducers:(c={},Object(d.a)(c,m.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(d.a)(c,m.pending,(function(e,t){})),Object(d.a)(c,m.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),Object(d.a)(c,O.fulfilled,(function(e,t){e.todoItems=t.payload})),Object(d.a)(c,O.pending,(function(e,t){})),Object(d.a)(c,O.rejected,(function(e,t){console.log(JSON.stringify(t.payload))})),c)}),x=h.actions,v=(x.newItem,x.completeItem,x.deleteItem,x.taskCompleted),k=(x.tasksRetrieved,h.reducer),g=n(1);var I=function(e){var t=Object(i.b)();return Object(g.jsxs)("div",{children:[Object(g.jsx)("input",{checked:e.completed,type:"checkbox",onChange:function(){return t(v())}}),Object(g.jsx)("span",{children:e.description}),Object(g.jsx)("button",{onClick:function(){return t(v())},children:"Delete"})]})};var y=function(){var e=Object(i.c)((function(e){return e.todos.todoItems})),t=Object(i.b)();return Object(o.useEffect)((function(){t(m())}),[]),e.map((function(e){return Object(g.jsx)("div",{children:Object(g.jsx)(I,{description:e.description,completed:e.completed})})}))},w=n(22),S=n(23);function C(){var e=Object(S.a)(),t=e.register,n=e.handleSubmit,c=e.watch,o=e.formState.errors,s=Object(i.b)();return console.log(c("taskDesc")),Object(g.jsxs)("form",{onSubmit:n((function(e){s(O({description:e.taskDesc}))})),children:[Object(g.jsx)("input",Object(w.a)({defaultValue:"New Task"},t("taskDesc",{required:!0}))),o.exampleRequired&&Object(g.jsx)("span",{children:"Enter task description"}),Object(g.jsx)("input",{type:"submit"})]})}var N=function(){return Object(g.jsxs)("div",{className:"Item",children:[Object(g.jsx)(C,{}),Object(g.jsx)(y,{})]})};var D=function(){return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("header",{className:"App-header",children:"Todo List"}),Object(g.jsx)("div",{className:"App-body",children:Object(g.jsx)(N,{})})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),s(e),r(e)}))},E=Object(j.a)({reducer:{todos:k}});a.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(i.a,{store:E,children:Object(g.jsx)(D,{})})}),document.getElementById("root")),T()},8:function(e,t,n){}},[[54,1,2]]]);
//# sourceMappingURL=main.118d0b2b.chunk.js.map