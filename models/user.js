const {Schema,model}=require("mongoose");
const {createHmac,randomBytes}=require('crypto');
const { createTokenAndUpdate } = require("../services/auth");
const userSchema=new Schema({
  fullName:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  salt:{
    type:String,
  },

  password:{
    type:String,
    required:true,
  },
  profileImageURL:{
    type:String,
    default:'/images/Default-Avatar.png',
  },
  role:{
    type:String,
    enum:["USER","ADMIN"],
    default:"USER",
  },


},{timestamps:true});

userSchema.pre('save',function (next){
const user=this;
if(!user.isModified("password")) return next();
const salt=randomBytes(16).toString();
//created the salt

const hashedpassword=createHmac("sha256",salt)
.update(user.password).digest("hex");
this.password=hashedpassword;
this.salt=salt;
//created a hashed password
next();

});

userSchema.static('matchPasswordAndGenerateToken', async function(email,password){
const user=await this.findOne({email});
if(!user) throw new Error("User not found!");

const salt=user.salt;
const hashedpassword=user.password;

const userProvidedHash=createHmac("sha256",salt)
.update(password)
.digest("hex");

if(hashedpassword!==userProvidedHash) throw new Error("Password is incorrect");

const token=createTokenAndUpdate(user);
return token;
})

const User=model('user',userSchema);
module.exports=User;