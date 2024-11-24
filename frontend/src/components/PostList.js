import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts, deletePost } from '../services/postService';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchPosts = async () => {
            const data = await getPosts();
            setPosts(data);
        };
        fetchPosts();
    }, []);

    const handleDelete = async (postId) => {
        await deletePost(postId);
        setPosts(posts.filter(post => post._id !== postId));
    };

    return (
        <div>
            <h1>Posts</h1>
            <Link to="/create" className="btn btn-primary">Create New Post</Link>
            <ul>
                {posts.map(post => (
                    <li key={post._id}>
                        <Link to={`/posts/${post._id}`}>{post.title}</Link>
                        <button onClick={() => handleDelete(post._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;