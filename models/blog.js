const {Schema,model}=require("mongoose");

const blogSchema=new Schema({
title:{
requred:true,
type:String,
},

body:{
requred:true,
type:String,
},

coverImageURL:{
requred:false,
type:String,
},

createdBy:{
  type:Schema.Types.ObjectId,
  ref:"user",
  required:true,
},

},{timestamps:true});

const Blog=model("blog",blogSchema);
module.exports=Blog;