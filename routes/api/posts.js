const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {
    check,
    validationResult
} = require('express-validator');

const Post = require('../../models/Posts');
const Profile = require('../../models/Profile')
const User = require('../../models/User')

//   @route     POST api/post
//   @desc      create a post
//   @access    Private

router.post('/', [auth, [
        check('text', 'Text is requirred')
        .not()
        .isEmpty()
    ]],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        try {
            const user = await User.findById(req.user.id).select('-password');
            const newPost = new Post({
                text: req.body.text,
                name: user.name,
                avatar: user.avatar,
                user: req.user.id
            });

            await newPost.save();
            res.json(newPost);

        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server Error');
        }
    });

//   @route     GET api/post
//   @desc      get all post
//   @access    Private

router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({
            date: -1
        });
        res.json(posts);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});

//   @route     GET api/posts/:id
//   @desc      get post by id
//   @access    Private

router.get('/', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) return res.status(404).json({
            msg: "Post not found"
        })
        res.json(post);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});

//   @route     DELETE api/posts/:id
//   @desc      DELETE POST BY ID
//   @access    Private

router.delete('/', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        await post.remove();
        res.json({
            "msg": "post removed"
        });

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }

});

module.exports = router;