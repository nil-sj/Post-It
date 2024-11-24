import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPostById } from '../services/postService';

const PostDetail = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    
    useEffect(() => {
        const fetchPost = async () => {
            const data = await getPostById(postId);
            setPost(data);
        };
        fetchPost();
    }, [postId]);

    if (!post) return <p>Loading...</p>;
    
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>Author: {post.author}</p>
        </div>
    );
};

export default PostDetail;