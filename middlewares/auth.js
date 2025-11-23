const {ValidateToken}=require("../services/auth")

function checkForAuthenticationCookie(cookiename) {
  return (req, res, next) => {
    const tokenCookieValue = req.cookies[cookiename];

    if (!tokenCookieValue) {
      
     return next();
    }

    try {
      const userPayLoad = ValidateToken(tokenCookieValue);
      req.user = userPayLoad;
    } catch (error) {}
    

    return next();
  };
}

module.exports = {
  checkForAuthenticationCookie,
};
