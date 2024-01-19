const Post = require("../models/postModel");
const PostModel = require("../models/postModel");
const CommentModel = require("../models/commentModel");

const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    const post = await PostModel.create({
      title,
      description,
    });

    res.status(201).json({
      status: "Success",
      data: {
        post,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      status: "fail",
      data: {
        error,
      },
    });
  }
};

const getPost = async (req, res) => {
  try {
    const result = await PostModel.countDocuments();
    const posts = await PostModel.find();

    res.status(200).json({
      status: "Success",
      result,
      data: {
        posts,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: {
        error,
      },
    });
  }
};

const createComment = async (req, res) => {
  try {
    const { postId, content } = req.body;

    const comment = await CommentModel.create({
      postId,
      content,
    });

    res.status(201).json({
      status: "Success",
      data: {
        comment,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: {
        error,
      },
    });
  }
};

const getCommentByPost = async (req, res) => {
  try {
      const  id  = req.params.id;
      console.log(id)
      const comment = await CommentModel.findOne({ postId: id });
      console.log(comment)

      res.status(201).json({
        status: "Success",
        data: {
          comment,
        },
      });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      data: {
        error,
      },
    });
  }
};

module.exports = {
  createPost,
  getPost,
  createComment,
  getCommentByPost,
};
