let todoList = {
  todos: [],
  displayTodos: function() {
    this.todos.length === 0 ? 
    console.log('Your todo list is empty!') :
    console.log('My todos:');
    for(let i = 0; i < this.todos.length; i++){
    if(this.todos[i].completed === true) {
      console.log('(x)', this.todos[i].todoText);
    } else {
      console.log('( )', this.todos[i].todoText);
    }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completedTodos = 0;

    // Get number of completed todos
    for (let i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 1: if everything's true, make everything false
    if (completedTodos === totalTodos) {
      // make everything false
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // Case 2: otherwise make everything true
    } else {
      for (let i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

let displayTodosButton = document.getElementById('displayTodosButton');
let toggleAllButton = document.getElementById('toggleAllButton');

displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});