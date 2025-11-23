require('dotenv').config();

const express=require("express");
const app=express();
const cookieParser=require("cookie-parser");

const Blog=require("./models/blog");

const mongoose=require("mongoose");
const path=require("path");

const userRoute=require("./routes/user");
const blogRoute=require("./routes/blog");

const { checkForAuthenticationCookie } = require("./middlewares/auth");


const PORT=process.env.PORT||8001;

app.use(express.static(path.resolve("./public")));


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.json());
app.use(checkForAuthenticationCookie("token"));

mongoose.connect(process.env.MONGO_URL)
.then(e=>console.log("Mongodb Connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.get('/',async(req,res)=>{

  const allBlogs=await Blog.find({});
  res.render("home",{
  user:req.user,
  blogs:allBlogs,
});

});

app.use("/user",userRoute);
app.use("/blog",blogRoute);


app.listen(PORT,()=>console.log(`sever started at ${PORT}`));