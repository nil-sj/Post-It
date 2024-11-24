import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';
import Header from './components/Header';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact component={PostList} />
                <Route path="/create" component={PostForm} />
                <Route path="/posts/:postId" component={PostDetail} />
                <Route path="/edit/:postId" component={PostForm} />
          </Switch>
        </Router>
    );
};

export default App;
