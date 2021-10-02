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
