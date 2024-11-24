import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { createPost, updatePost, getPostById } from '../services/postService';

const PostForm = () => {
    const [post, setPost] = useState({ title: '', content: '', author: '' });
    const { postId } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (postId) {
            const fetchPost = async () => {
                const data = await getPostById(postId);
                setPost(data);
            };
            fetchPost();
        }
    }, [postId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost({ ...post, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (postId) {
            await updatePost(postId, post);
        } else {
            await createPost(post);
        }
        history.push('/');
    };

    return (
        <div>
            <h1>{postId ? 'Edit Post' : 'Create Post'}</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input type="text" name="title" value={post.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Content</label>
                    <textarea name="content" value={post.content} onChange={handleChange}></textarea>
                </div>
                <div>
                    <label>Author</label>
                    <input type="text" name="author" value={post.author} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PostForm;