import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Get all posts
export const getPosts = async () => {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
};

// Get a single post by ID
export const getPostById = async (postId) => {
    const response = await axios.get(`${API_URL}/posts/${postId}`);
    return response.data;
};

// Create a new post
export const createPost = async (postData) => {
    const response = await axios.post(`${API_URL}/posts`, postData);
    return response.data;
};

// Update a post by ID
export const updatePost = async (postId, postData) => {
    const response = await axios.put(`${API_URL}/posts/${postId}`, postData);
    return response.data;
};

// Delete a post by ID
export const deletePost = async (postId) => {
    const response = await axios.delete(`${API_URL}/posts/${postId}`);
    return response.data;
};