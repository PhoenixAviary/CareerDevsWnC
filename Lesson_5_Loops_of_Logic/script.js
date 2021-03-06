var todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
        console.log('Your todo list is empty!');
        } else {
        console.log('My Todos:');
        for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText); 
        } else {
        console.log('( )', this.todos[i].todoText); 
          }
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
        this.todos[position].todoText = todoText
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleCompleted: function(position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};





///////////////////////////////////////////////

// i = 0               //initialization
// Say "hey" if i < 3  //condition
// Increase i by 1     //final-expression

// 0 "hey"
// 1 "hey"
// 2 "hey"
// 3


// for (var i = 0; i < 3; i++) {
//     console.log("hey");
// }