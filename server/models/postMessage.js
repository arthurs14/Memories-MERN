import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: [String],
    default: [],
  },
  createdat: {
    type: Date,
    default: new Date(),
  }
});

const PostMessage = mongoose.model('Post Message', postSchema);

export default PostMessage;