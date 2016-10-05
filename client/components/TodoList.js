import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Tasks } from '../../imports/api/tasks.js';

// App component - represents the whole app
class TodoList extends Component {
  handleDelete(_id, e) {
    Tasks.remove({
      _id
    });
  }
  render(){
    return (
      <div className="container">
        <h3>Todos : </h3>
        <ul className="collection">
          {
            this.props.tasks.map((task) => {
              return (
                <li className="collection-item" key={task._id}>
                  {task.description}
                  <span className="new badge" style={{right : 80}} data-badge-caption={task.createdAt}></span>
                  <span className="right" onClick={this.handleDelete.bind(this, task._id)} style={{cursor : 'pointer'}}><i className="material-icons">not_interested</i></span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default createContainer(() => {
  return {
    tasks: Tasks.find({}, {sort : {createdAt: -1}}).fetch(),
  };
}, TodoList);
