const express = require('express');
const { getPosts, getPostById, createPost, updatePost, deletePost } = require('../controllers/postController');

const router = express.Router();

// Define the routes and map them to controller functions
router.get('/', getPosts);
router.get('/:postId', getPostById);
router.post('/', createPost);
router.put('/:postId', updatePost);
router.delete('/:postId', deletePost);

module.exports = router;