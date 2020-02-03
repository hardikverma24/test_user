const express = require("express");
const Blog = require("../models/blog");
const router = new express.Router();

router.post("/blogs", async (req, res) => {
  try {
    const blog = new Blog(req.body);
    await blog.save();
    res.send(blog);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/blogs/public", async (req, res) => {
  try {
    const blog = await Blog.find({ isPrivate: false });
    if (!blog) {
      res.status(404).send();
    }
    res.send(blog);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/blogs/private", async (req, res) => {
  const _id = req.params.id;
  try {
    const blog = Blog.find(_id);
    if (!blog) {
      res.status(404).send();
    }
    res.send(blog);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
