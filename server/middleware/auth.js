const jwt = require("jsonwebtoken");

const verifyJwt = async (req, res, next) => {
  console.log(req.headers, "<<< req");
  let token = req.headers.authorization;
  if (!token) {
    return res.status(403).send("Token is required");
  }
  let key = "westride123";

  try {
    token = token.split(" ");
    console.log(token, "<<< token");
    let decode = jwt.verify(token[1], key);
    console.log(decode, "<<< decode");
    req._user = decode;
    next();
  } catch (error) {
    console.error(error);
    return res.status(410).send(error);
  }
};

module.exports = verifyJwt;
