import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, BrowserRouter } from "react-router-dom";
import signUpLogin from './components/login';
import ToDoList from './components/todoList';
export default class App extends React.Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={signUpLogin} />
          <Route exact path="/todo" component={ToDoList} />
        </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

