/* handlers for our routes */
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    return res.status(200).json(postMessages);
    
  } catch (error) {
    res.status(404).json({ message: error });
  }
  res.send('this is working');
};

// QUERY -> /posts?page=1 -> page = 1
// PARAMS -> /posts/123 -> id = 123
export const getPostsBySearch = async (req, res) => {
  // retrieve data from req.query
  const { searchQuery, tags } = req.query;
  try {
    const title = new RegExp(searchQuery, 'i'); // test Test TEST -> test

    const posts = await PostMessage.find({ 
      $or: [{ title }, { tags: { $in: tags.split(',') } }]
    });

    res.json({ data: posts })
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() });

  try {
    await newPost.save();  

    return res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
  //res.send('Post Creation');
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

  
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id  }, { new: true });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');
  
  await PostMessage.findByIdAndRemove(_id);

  console.log('delete');

  res.json({ message: 'Post deleted successfully' });
};

export const likePost = async (req, res) => {
  const { id: _id } = req.params;

  if (!req.userId)
    return res.json({ message: 'Unauthenticated' });

  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

  const post = await PostMessage.findById(_id);

  const index = post.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    // like the post
    post.likes.push(req.userId);
  } else {
    // dislike the post
    post.likes = post.likes.filter(id => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

  res.json(updatedPost);
};