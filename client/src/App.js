import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { users: []};
  componentDidMount() {
      fetch('/users')
        .then(res => res.json())
        .then(users => this.setState({ users }));
    }


  render() {
    return (
      <div className="App">
        <div className="App-header">
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )} 
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
