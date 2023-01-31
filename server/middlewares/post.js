const PostSchema = require("../model/post.js");

const getPost = async (req, res) => {
  try {
    const getPost = await PostSchema.find();
    res.status(200).json(getPost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const createPost = async (req, res) => {
  try {
    const newpost = await PostSchema.create(req.body);
    res.status(201).json(newpost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await PostSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletePost = await PostSchema.findByIdAndRemove(id);
    res.status(200).json(deletePost);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = { getPost, createPost, updatePost, deletePost };
