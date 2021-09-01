(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(15),n(10)),o=n(6),l=n(2),h=n(3),u=n(5),b=n(4),j=(n(16),n(0)),d=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleIncrement=function(){e.props.onIncrement(e.props.habit)},e.handleDecrement=function(){e.props.onDecrement(e.props.habit)},e.handleDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){console.log("habit: ".concat(this.props.habit.name," mounted"))}},{key:"componentWillUnmount",value:function(){console.log("habit: ".concat(this.props.habit.name," will unmounted"))}},{key:"render",value:function(){var e=this.props.habit,t=e.name,n=e.count;return Object(j.jsxs)("li",{className:"habit",children:[Object(j.jsx)("span",{className:"habit-name",children:t}),Object(j.jsx)("span",{className:"habit-count",children:n}),Object(j.jsx)("button",{className:"habit-button habit-increase",onClick:this.handleIncrement,children:Object(j.jsx)("i",{className:"fas fa-plus"})}),Object(j.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecrement,children:Object(j.jsx)("i",{className:"fas fa-minus"})}),Object(j.jsx)("button",{className:"habit-button habit-delete",onClick:this.handleDelete,children:Object(j.jsx)("i",{className:"far fa-trash-alt"})})]})}}]),n}(a.PureComponent),p=Object(a.memo)((function(e){var t=c.a.createRef(),n=c.a.createRef();return Object(j.jsxs)("form",{ref:t,className:"add-form",onSubmit:function(a){a.preventDefault();var c=n.current.value;c&&e.onCreate(c),t.current.reset()},children:[Object(j.jsx)("input",{type:"text",className:"add-input",placeholder:"Enter new habit",ref:n}),Object(j.jsx)("button",{className:"add-button",children:"Add"})]})})),m=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{onCreate:this.props.handleCreate}),Object(j.jsx)("ul",{children:this.props.habits.map((function(t){return Object(j.jsx)(d,{habit:t,onIncrement:e.props.handleIncrement,onDecrement:e.props.handleDecrement,onDelete:e.props.handleDelete},t.id)}))}),Object(j.jsx)("button",{className:"habits-reset",onClick:this.props.onReset,children:"Reset All"})]})}}]),n}(a.Component),f=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("i",{className:"navbar-logo fas fa-leaf"}),Object(j.jsx)("span",{children:"Habit Tracker"}),Object(j.jsx)("span",{className:"navbar-count",children:this.props.totalCount})]})}}]),n}(a.PureComponent),O=function(e){Object(u.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={habits:[{id:1,name:"Running",count:0},{id:2,name:"Cooking",count:0},{id:3,name:"Coding",count:0}]},e.handleIncrement=function(t){var n=e.state.habits.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},t),{},{count:t.count+1}):e}));e.setState({habits:n})},e.handleDecrement=function(t){var n=e.state.habits.map((function(e){if(e.id===t.id){var n=t.count-1;return Object(o.a)(Object(o.a)({},t),{},{count:n<0?0:n})}return e}));e.setState({habits:n})},e.handleDelete=function(t){var n=e.state.habits.filter((function(e){return e.id!==t.id}));e.setState({habits:n})},e.handleCreate=function(t){var n=[].concat(Object(i.a)(e.state.habits),[{id:Date.now().toString(),name:t,count:0}]);e.setState({habits:n})},e.handleReset=function(){var t=e.state.habits.map((function(e){return 0!==e.count?Object(o.a)(Object(o.a)({},e),{},{count:0}):e}));e.setState({habits:t})},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{totalCount:this.state.habits.filter((function(e){return e.count>0})).length}),Object(j.jsx)(m,{habits:this.state.habits,handleIncrement:this.handleIncrement,handleDecrement:this.handleDecrement,handleDelete:this.handleDelete,handleCreate:this.handleCreate,onReset:this.handleReset})]})}}]),n}(a.Component);n(18);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.25903f61.chunk.js.map