const JWT=require("jsonwebtoken");
const secret ="Batman@224";

function createTokenAndUpdate(user){
const payload={
  _id:user._id,
  email:user.email,
   fullName:user.fullName,
  profileImageURL:user.profileImageURL,
  role:user.role, 
};
const token=JWT.sign(payload,secret);//to generate the token
return token;
}

function ValidateToken(token){
const payload=JWT.verify(token,secret);
return payload;
}
module.exports={
createTokenAndUpdate,ValidateToken,
}