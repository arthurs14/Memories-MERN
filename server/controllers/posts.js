/* handlers for our routes */
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    
    console.log('postMessages:', postMessages);

    return res.status(200).json(postMessages);
    
  } catch (error) {
    res.status(404).json({ message: error });
  }
  res.send('this is working');
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();  

    return res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error });
  }
  res.send('Post Creation');
};