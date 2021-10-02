var app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    todos: [],
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
    deleteItem: function (index) {
      this.todos.splice(index, 1);
    },
  },
});
