import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";
import {BrowserRouter, Route, Switch, IndexRoute} from 'react-router-dom';
import Alert from 'react-s-alert';

import Navbar from "./containers/navbar";
import PostIndex from "./containers/posts/postIndex";
import PostListContainer from "./containers/posts/postListContainer";
import NewPost from './containers/posts/newPost';
import ShowPost from './containers/posts/showPost';
import EditPost from './containers/posts/editPost';
import Register from './containers/users/register';
import Login from './containers/users/login';
import Profile from './containers/users/profile';
import RequireAuth from './components/requireAuth';

class BooksApp extends React.Component {
  state = { allBooks: [] };
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="app">
      <Navbar />
      <div className="container">
        <Switch>
          <RequireAuth path="/users/profile" component={Profile} redirectCheck={REDIRECT_IF_GUEST} />
          <RequireAuth path="/users/register" component={Register} redirectCheck={REDIRECT_IF_AUTHENTICATED}/>
          <RequireAuth path="/users/login" component={Login} redirectCheck={REDIRECT_IF_AUTHENTICATED}/>
          <RequireAuth path="/posts/create" component={NewPost} redirectCheck={REDIRECT_IF_GUEST} />
          <RequireAuth path="/posts/edit/:id" component={EditPost} redirectCheck={REDIRECT_IF_GUEST} />
          <Route path="/posts/:id" component={ShowPost}></Route>
          <Route path="/" component={PostListContainer}></Route>
        </Switch>
      </div>
      <Alert stack={{limit: 3}} />
    </div>
    );
  }
}

export default BooksApp;
