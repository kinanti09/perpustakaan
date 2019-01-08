import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Book from './Pages/Book';
import Author from './Pages/Author';
import AuthorCreact from './Pages/AuthorCreacte';
import BookCreact from './Pages/BookCreacte';
import BookEdit from './Pages/BookEdit'


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path = "/" exact component={Home}/>
          <Route path = "/book" exact component={Book}/>
          <Route path = "/book/creact" component={BookCreact}/>
          <Route path = "/author" exact component={Author}/>
          <Route path = "/author/creact" component={AuthorCreact}/>
          <Route path = "/book/edit/:id" component={BookEdit}/>
   
        </Switch>
      </div>
      
    );
  }
}

export default App;
