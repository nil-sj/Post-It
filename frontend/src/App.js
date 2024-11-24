import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostDetail from './components/PostDetail';
import Header from './components/Header';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/create" element={<PostForm />} />
                <Route path="/posts/:postId" element={<PostDetail />} />
                <Route path="/edit/:postId" element={<PostForm />} />
            </Routes>
        </Router>
    );
};

export default App;