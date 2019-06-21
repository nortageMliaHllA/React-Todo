import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';



class App extends React.Component {
  constructor() {
    super ();
    this.state = {
      textInput: '',
      todos: [
          {
            task: 'Organize Garage',
            id: 1528817077286,
            completed: false
          },
          {
            task: 'Bake Cookies',
            id: 1528817084358,
            completed: false
          }
        ]
    };
  }


handleInput = (event) => {
this.ListeningStateChangedEvent({
  textInput: event.target.value
  });
}
handleAdd = (event) => {
  event.preventDefault();
  let id = Date.now();
  this.setState({
    todos: [
      ...this.state.todos,
    {task: this.state.textInput,
      id,
      completed: false

     }

     ],
    textInput: ''
  })
}

render() {
  return (
    <div>
      <h1>ToDo List:</h1>
      <TodoList 
        todos = {this.state.todos}
      />
      <TodoForm 
        textInput = {this.state.textInput}
        handleInput = {this.handleInput}
        handleAdd = {this.handleAdd}
      />
    </div>
  );
}
}


export default App;
