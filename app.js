//jshint esversion:6
//require modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

//created an express app which is required above
const app = express();

//using ejs for ease
app.set('view engine', 'ejs');

//taking input from HTML, setting paths to files to app.js
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//connecting the blog post to a mongoDB, remember 27017 is a default port for mongoDB
mongoose.connect("mongodb://localhost:27017/blogDB", {useNewUrlParser: true});

//schema for blog post
const postSchema = {
  title: String,
  content: String
};
//model for mongoose
const Post = mongoose.model("Post", postSchema);

//setting the webpage funtionality this is for homepage
app.get("/", function(req, res){
  Post.find({}, function(err, posts){
    res.render("home", {
      posts: posts
      });
  });
});
//where the users are posting (we create a different page for it)
app.get("/compose", function(req, res){
  res.render("compose");
});
//what after user is done writing the post? we use .post to give response to the user and redirect the user to our / (homepage)
app.post("/compose", function(req, res){
  const post = new Post({
    //use of body-parser
    title: req.body.postTitle,
    content: req.body.postBody
  });
  //save the post to mongoDB
  post.save(function(err){
    if (!err){
        res.redirect("/");
    }
  });
});
//other pages of the blog website
app.get("/about", function(req, res){
  res.render("about");
});

app.get("/contact", function(req, res){
  res.render("contact");
});

//listening on local server | use a dynamic port when hosting on web.
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
