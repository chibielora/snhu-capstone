const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blog-post'); // Import your BlogPost model

router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id);
        if (!blogPost) {
            return res.status(404).json({ message: 'BlogPost not found' });
        }
        res.json(blogPost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const blogPost = new BlogPost(req.body);
    try {
        const newBlogPost = await blogPost.save();
        res.status(201).json(newBlogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!blogPost) {
            return res.status(404).json({ message: 'BlogPost not found' });
        }
        res.json(blogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!blogPost) {
            return res.status(404).json({ message: 'BlogPost not found' });
        }
        res.json({ message: 'BlogPost deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;