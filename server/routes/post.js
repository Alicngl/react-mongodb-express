const express = require("express");
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
} = require("../middlewares/post");

const router = express.Router();

router.get("/getPost", getPost);
router.post("/createPost", createPost);
router.put("/updatePost/:id", updatePost);
router.delete("/deletePost/:id", deletePost);

module.exports = router;
