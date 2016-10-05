import React, { Component } from 'react';
import TodoList from './TodoList'
import InputForm from './InputForm'

export default class App extends Component{
  render(){
    return(
      <div>
        <h2 style={{textAlign : 'center'}}>Welcome To Meteor Todo App</h2>
        <InputForm />
        <TodoList />
      </div>
    );
  }
}
