const express = require("express");
const router = express.Router();

const Post = require("../models/post");

router.get("/", (req, res) => {
  Post.find()
    .then((users) => res.json(users))
    .catch((err) => console.log(err));
});

router.post("/", (req, res) => {
  const { imageUrl, title, content } = req.body;
  console.log("Creating: " + imageUrl + " " + title + " " + content);
  const newPost = new Post({
    imageUrl: imageUrl,
    title: title,
    content: content,
  });
  newPost
    .save()
    .then(() =>
      res.json({
        message: "Created post successfully",
      })
    )
    .catch((err) =>
      res.status(400).json({
        error: err,
        message: "Error creating post",
      })
    );
});
module.exports = router;
