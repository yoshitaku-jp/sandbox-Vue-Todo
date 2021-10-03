const STORAGE_KEY = "sandbox-Vue-Todo";
const todoStorage = {
  fetch: function () {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    todos.forEach(function (todo, index) {
      todo.id = index;
    });
    todoStorage.uid = todos.length;
    return todos;
  },
  save: function (todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};

var app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: todoStorage.fetch(),
  },
  watch: {
    todos: {
      handler: function (todos) {
        todoStorage.save(todos);
      },
      deep: true,
    },
  },
  methods: {
    addTodo: function () {
      if (this.newItem == "") return;
      const todo = {
        item: this.newItem,
      };
      this.todos.push(todo);

      this.newItem = "";
    },
    editItem: function (todo) {
      if (this.newItem == "") return;
      const targetIndex = this.todos.indexOf(todo);

      this.todos.splice(targetIndex, 1, {
        id: targetIndex,
        item: this.newItem,
      });

      this.newItem = "";
    },
    deleteItem: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
