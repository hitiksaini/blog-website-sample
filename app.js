//jshint esversion:6
//require modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

//created an express app which is required above
const app = express();

//using ejs for smooth functioning
app.set('view engine', 'ejs');

//taking input from HTML, setting paths to files to app.js
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//connecting the blog post to a mongoDB
mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});

//schema for blog post
const postSchema = {
  title: String,
  content: String
};
//model for mongoose
const Post = mongoose.model("Post", postSchema);

//setting the webpage funtionality
app.get("/", function(req, res){
  Post.find({}, function(err, posts){
    res.render("home", {
      posts: posts
      });
  });
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.post("/compose", function(req, res){
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody
  });
  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});

app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

//listening on local server.
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
