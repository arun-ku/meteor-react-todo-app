import React, { Component } from 'react';

import { Tasks } from '../../imports/api/tasks.js';
export default class InputForm extends Component{
  constructor(){
    super();
    this.state = {
      description: ''
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    if(this.state.description){
      Tasks.insert({
        description : this.state.description.trim(),
        createdAt: new Date()
      });
      this.setState({
        description: ''
      });
    }else {
      Materialize.toast('Yo enter some description man!', 4000)
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      description : e.target.value
    });
  }
  render(){
    return(
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit.bind(this)}>
            <div className="row">
              <div className="input-field col s9">
                <input id="description" name="description" onChange={this.handleChange.bind(this)} value={this.state.description} type="text" className="validate"/>
                <label htmlFor="description">Disabled</label>
              </div>
              <div className="input-field col s3">
                <button type="submit" className="waves-effect waves-light btn">Add Todo</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
