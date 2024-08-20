const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blog-post'); // Import your BlogPost model
const { auth } = require('../config/auth');

router.get('/', async (req, res) => {
    try {
        const blogPosts = await BlogPost.find(
            {}, // Conditions
            null, // null gives us all data
            {
                sort: { createdAt: -1 }
            }
        );
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

router.post('/', auth, async (req, res) => {
    const blogPost = new BlogPost({
        ...req.body,
        author: req.auth._id,
        createdAt: new Date(),
    });
    try {
        const newBlogPost = await blogPost.save();
        res.status(201).json(newBlogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', auth, async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndUpdate(
            req.params.id,
            { ...req.body, editedAt: new Date() },
            { new: true }
        );
        if (!blogPost) {
            return res.status(404).json({ message: 'BlogPost not found' });
        }

        res.json(blogPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', auth, async (req, res) => {
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