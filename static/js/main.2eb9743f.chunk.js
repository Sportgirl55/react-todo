(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(10),r=n.n(a),c=n(8),i=n(6),l=n(7),s=n(2),u=n(3),b=n(5),d=n(4),f=(n(16),n(0)),h=function(t){var e=t.toDo,n=t.done;return Object(f.jsxs)("div",{className:"app-header d-flex",children:[Object(f.jsx)("h1",{children:"ToDo List"}),Object(f.jsxs)("h2",{children:[e," more to do, ",n," done"]})]})},j=(n(18),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.filter,n=t.onFilterChange,o=this.buttons.map((function(t){var o=t.name,a=t.label,r=e===o?"btn-info":"btn-outline-secondary";return Object(f.jsx)("button",{type:"button",className:"btn ".concat(r),onClick:function(){return n(o)},children:a},o)}));return Object(f.jsx)("div",{className:"btn-group",children:o})}}]),n}(o.Component)),m=(n(19),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={term:""},t.onSearch=function(e){var n=e.target.value;t.setState({term:n}),t.props.onSearch(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsx)("form",{className:"search-input-form",children:Object(f.jsx)("input",{className:"search-input form-control",type:"search",placeholder:"Type to search",onChange:this.onSearch,value:this.state.term})})}}]),n}(o.Component)),p=n(11),O=(n(20),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.label,n=t.onDeleted,o=t.onToggleImportant,a=t.onToggleDone,r="todo-list-item";return t.done&&(r+=" done"),t.important&&(r+=" important"),Object(f.jsxs)("div",{className:r,children:[Object(f.jsx)("span",{className:"todo-list-item-label",onClick:a,children:e}),Object(f.jsxs)("div",{className:"buttons-box",children:[Object(f.jsx)("button",{type:"button",className:"btn btn-outline-danger btn-sm float-right",onClick:n,children:Object(f.jsx)("i",{className:"bi bi-trash"})}),Object(f.jsx)("button",{type:"button",className:"btn btn-outline-success btn-sm float-right",onClick:o,children:Object(f.jsx)("i",{className:"bi bi-exclamation-lg"})})]})]})}}]),n}(o.Component)),g=(n(21),["id"]),v=function(t){var e=t.todos,n=t.onDeleted,o=t.onToggleImportant,a=t.onToggleDone,r=e.map((function(t){var e=t.id,r=Object(p.a)(t,g);return Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsx)(O,Object(i.a)(Object(i.a)({},r),{},{onDeleted:function(){return n(e)},onToggleImportant:function(){return o(e)},onToggleDone:function(){return a(e)}}))},t.id)}));return Object(f.jsx)("ul",{className:"list-group todo-list",children:r})},D=(n(22),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={label:""},t.onLabelChange=function(e){t.setState({label:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.onAdd(t.state.label),t.setState({label:""})},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.onAdd;return Object(f.jsxs)("form",{className:"item-add-form",onSubmit:this.onSubmit,children:[Object(f.jsx)("input",{type:"text",className:"form-control",onChange:this.onLabelChange,placeholder:"What needs to be done",value:this.state.label}),Object(f.jsx)("button",{className:"btn btn-outline-secondary",onClick:function(){return t},children:"Add Item"})]})}}]),n}(o.Component)),x=(n(23),function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).maxId=100,t.state={toDoData:[t.createToDoItem("Drink Coffee"),t.createToDoItem("Make Awsome App"),t.createToDoItem("Have a lunch")],term:"",filter:"all"},t.deleteItem=function(e){t.setState((function(t){var n=t.toDoData,o=n.findIndex((function(t){return t.id===e}));return{toDoData:[].concat(Object(l.a)(n.slice(0,o)),Object(l.a)(n.slice(o+1)))}}))},t.addItem=function(e){var n=t.createToDoItem(e);t.setState((function(t){var e=t.toDoData;return{toDoData:[].concat(Object(l.a)(e),[n])}}))},t.onToggleDone=function(e){t.setState((function(n){var o=n.toDoData;return{toDoData:t.toggleProperty(o,e,"done")}}))},t.onToggleImportant=function(e){t.setState((function(n){var o=n.toDoData;return{toDoData:t.toggleProperty(o,e,"important")}}))},t.onSearch=function(e){t.setState({term:e})},t.onFilterChange=function(e){t.setState({filter:e})},t}return Object(u.a)(n,[{key:"createToDoItem",value:function(t){return{label:t,done:!1,important:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(t,e,n){var o=t.findIndex((function(t){return t.id===e})),a=t[o],r=Object(i.a)(Object(i.a)({},a),{},Object(c.a)({},n,!a[n]));return[].concat(Object(l.a)(t.slice(0,o)),[r],Object(l.a)(t.slice(o+1)))}},{key:"search",value:function(t,e){return 0===e.length?t:t.filter((function(t){return t.label.toLowerCase().indexOf(e.toLowerCase())>-1}))}},{key:"filter",value:function(t,e){switch(e){case"all":return t;case"active":return t.filter((function(t){return!t.done}));case"done":return t.filter((function(t){return t.done}));default:return t}}},{key:"render",value:function(){var t=this.state,e=t.toDoData,n=t.term,o=t.filter,a=this.filter(this.search(e,n),o),r=e.filter((function(t){return t.done})).length,c=e.length-r;return Object(f.jsxs)("div",{className:"todo-app",children:[Object(f.jsx)(h,{toDo:c,done:r}),Object(f.jsxs)("div",{className:"todo-panel",children:[Object(f.jsx)(m,{onSearch:this.onSearch}),Object(f.jsx)(j,{filter:o,onFilterChange:this.onFilterChange})]}),Object(f.jsx)(v,{todos:a,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),Object(f.jsx)(D,{onAdd:this.addItem})]})}}]),n}(o.Component));r.a.render(Object(f.jsx)(x,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.2eb9743f.chunk.js.map