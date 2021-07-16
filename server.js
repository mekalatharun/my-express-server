const express=require("express");
const app=express();
app.get("/",function(request,response){
  response.send("<h1>Hello World</h1>");
});
app.get("/contact",function(req,res){
  res.send("Contact me at gowthamn255@gmail.com");
});
app.get("/about",function(req,res){
  res.send("This page is owned by Gowtham");
});
app.get("/hobbies",function(req,res){
  res.send("Cricket");
});
app.listen(3000 ,function(){
  console.log("Server started on port 3000");
});
