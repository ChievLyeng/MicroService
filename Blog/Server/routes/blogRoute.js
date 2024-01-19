const express = require("express");
const {
  createPost,
  getPost,
  createComment,
  getCommentByPost,
} = require("../controllers/blogController");

const router = express.Router();

router.post("/post", createPost);
router.post("/comment", createComment);

router.get("/post", getPost);
router.get("/comment/:id", getCommentByPost);

module.exports = router;
