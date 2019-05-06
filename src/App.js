import React, { Component } from 'react';
import Todos from './components/Todos/Todos';
import AddTodo from './components/Todos/AddTodo';
import Header from './components/Layout/Header';
import Map from './components/Maps/Map';
import uuid from 'uuid';
import './App.css';

export class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Doctor Appointment',
        address: '8005 N. Central Ave., Phoenix, AZ 85004',
        date: '5/3/2019',
        completed: false
      }, 
    ]
  }

    // Toggle Todo Complete
    markComplete = (id) => {
      this.setState({ todos: this.state.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      }) });
    }

    // Delete Todo
    delTodo = (id) => {
      this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }

    // Add Todo
    addTodo = (title, date, address) => {
      const newTodo = {
        id: uuid.v4(),
        title,
        date, 
        address,
        completed: false, 
      }
      this.setState({ todos: [...this.state.todos, newTodo] });
    }

  render() {
    return (
      <div className="App">
      <Header/>
      <Map/>
      <div className="container-fluid">
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
      </div>
    )
  }
}

export default App;